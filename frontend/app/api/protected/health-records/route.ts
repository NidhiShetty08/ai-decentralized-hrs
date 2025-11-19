import { NextRequest, NextResponse } from 'next/server';
import { ProtectedResponse, Patient, HealthRecord } from '@/types/auth';
import { verifyToken, getTokenFromHeader } from '@/lib/jwt';

/**
 * GET /api/protected/health-records
 * Retrieve role-specific health data (protected route)
 */
export async function GET(request: NextRequest) {
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

    const { walletAddress, role } = decoded;

    // Mock data - replace with real database queries in production
    const doctorData = {
      message: 'Welcome, Dr. ' + walletAddress.substring(0, 8) + '! Here are your assigned patients.',
      patients: [
        { id: 1, name: 'John Doe', status: 'stable' },
        { id: 2, name: 'Jane Smith', status: 'critical' },
        { id: 3, name: 'Bob Johnson', status: 'recovering' },
        { id: 4, name: 'Alice Williams', status: 'stable' }
      ] as Patient[]
    };

    const patientData = {
      message: 'Welcome! Here are your personal health records.',
      records: [
        { id: 1, type: 'Blood Test', date: '2025-11-10', status: 'Normal - All values within range' },
        { id: 2, type: 'X-Ray Chest', date: '2025-11-12', status: 'Pending Doctor Review' },
        { id: 3, type: 'MRI Scan', date: '2025-11-14', status: 'Completed - No abnormalities detected' },
        { id: 4, type: 'ECG', date: '2025-11-13', status: 'Normal Sinus Rhythm' }
      ] as HealthRecord[]
    };

    // Return role-specific data
    const responseData: ProtectedResponse = {
      success: true,
      role,
      walletAddress,
      data: role === 'doctor' ? doctorData : patientData
    };

    console.log(`[PROTECTED] Health records accessed by ${role}: ${walletAddress}`);

    return NextResponse.json(responseData);
  } catch (error) {
    console.error('[PROTECTED] Health records error:', error);
    return NextResponse.json(
      { error: 'Internal server error' }, 
      { status: 500 }
    );
  }
}
