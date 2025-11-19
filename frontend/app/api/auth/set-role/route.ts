import { NextRequest, NextResponse } from 'next/server';
import { SetRoleRequest } from '@/types/auth';
import { Storage } from '@/lib/storage';
import { verifyToken, getTokenFromHeader } from '@/lib/jwt';

/**
 * POST /api/auth/set-role
 * Update user role (requires valid JWT)
 */
export async function POST(request: NextRequest) {
  try {
    // Extract and verify JWT token
    const authHeader = request.headers.get('authorization');
    const token = getTokenFromHeader(authHeader);
    
    if (!token) {
      return NextResponse.json(
        { error: 'Unauthorized - No token provided' }, 
        { status: 401 }
      );
    }

    // Verify JWT token
    let decoded;
    try {
      decoded = verifyToken(token);
    } catch (error: any) {
      return NextResponse.json(
        { error: `Unauthorized - ${error.message}` }, 
        { status: 401 }
      );
    }

    // Parse request body
    const body: SetRoleRequest = await request.json();
    const { walletAddress, role } = body;
    
    // Validate input
    if (!walletAddress || !role) {
      return NextResponse.json(
        { error: 'Missing required parameters: walletAddress, role' }, 
        { status: 400 }
      );
    }

    // Verify user is setting their own role (security check)
    if (decoded.walletAddress !== walletAddress.toLowerCase()) {
      return NextResponse.json(
        { error: 'Forbidden - Cannot set role for another user' }, 
        { status: 403 }
      );
    }

    // Validate role
    if (!['doctor', 'patient'].includes(role)) {
      return NextResponse.json(
        { error: 'Invalid role. Must be "doctor" or "patient"' }, 
        { status: 400 }
      );
    }

    // Update role in storage
    Storage.setRole(walletAddress, role);

    console.log(`[AUTH] Role updated for ${walletAddress}: ${role}`);

    return NextResponse.json({
      success: true,
      role,
      message: `Role successfully updated to ${role}`
    });
  } catch (error) {
    console.error('[AUTH] Set role error:', error);
    return NextResponse.json(
      { error: 'Internal server error' }, 
      { status: 500 }
    );
  }
}