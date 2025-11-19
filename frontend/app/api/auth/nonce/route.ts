import { NextRequest, NextResponse } from 'next/server';
import { AuthRequest } from '@/types/auth';
import { Storage } from '@/lib/storage';

/**
 * POST /api/auth/nonce
 * Generate a unique nonce for wallet authentication
 */
export async function POST(request: NextRequest) {
  try {
    const body: AuthRequest = await request.json();
    const { walletAddress } = body;
    
    // Validate wallet address
    if (!walletAddress || typeof walletAddress !== 'string') {
      return NextResponse.json(
        { error: 'Valid wallet address is required' }, 
        { status: 400 }
      );
    }

    // Basic validation for Ethereum address format
    if (!/^0x[a-fA-F0-9]{40}$/.test(walletAddress)) {
      return NextResponse.json(
        { error: 'Invalid Ethereum address format' }, 
        { status: 400 }
      );
    }

    // Generate a unique nonce with timestamp and randomness
    const nonce = `Sign this message to authenticate with Decentralized Health Records System.\n\nTimestamp: ${Date.now()}\nNonce: ${Math.random().toString(36).substring(2)}`;
    
    // Store nonce with timestamp (expires in 5 minutes)
    Storage.setNonce(walletAddress, {
      nonce,
      timestamp: Date.now()
    });

    console.log(`[AUTH] Nonce generated for wallet: ${walletAddress}`);

    return NextResponse.json({ 
      nonce,
      expiresIn: 300 // 5 minutes in seconds
    });
  } catch (error) {
    console.error('[AUTH] Nonce generation error:', error);
    return NextResponse.json(
      { error: 'Internal server error' }, 
      { status: 500 }
    );
  }
}