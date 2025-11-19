import { NextRequest, NextResponse } from 'next/server';
import { ethers } from 'ethers';
import { VerifyRequest, AuthResponse } from '@/types/auth';
import { Storage } from '@/lib/storage';
import { generateToken } from '@/lib/jwt';

/**
 * POST /api/auth/verify
 * Verify MetaMask signature and issue JWT token
 */
export async function POST(request: NextRequest) {
  try {
    const body: VerifyRequest = await request.json();
    const { walletAddress, signature, nonce } = body;
    
    // Validate input
    if (!walletAddress || !signature || !nonce) {
      return NextResponse.json(
        { error: 'Missing required parameters: walletAddress, signature, nonce' }, 
        { status: 400 }
      );
    }

    const lowerAddress = walletAddress.toLowerCase();
    
    // Retrieve stored nonce
    const storedData = Storage.getNonce(lowerAddress);
    if (!storedData) {
      return NextResponse.json(
        { error: 'No nonce found. Please request a new nonce.' }, 
        { status: 401 }
      );
    }

    // Verify nonce matches
    if (storedData.nonce !== nonce) {
      return NextResponse.json(
        { error: 'Invalid nonce. Please request a new nonce.' }, 
        { status: 401 }
      );
    }

    // Check if nonce is expired (5 minutes)
    const FIVE_MINUTES = 5 * 60 * 1000;
    if (Date.now() - storedData.timestamp > FIVE_MINUTES) {
      Storage.deleteNonce(lowerAddress);
      return NextResponse.json(
        { error: 'Nonce expired. Please request a new nonce.' }, 
        { status: 401 }
      );
    }

    // Verify signature using ethers.js
    let recoveredAddress: string;
    try {
      recoveredAddress = ethers.verifyMessage(nonce, signature);
    } catch (error) {
      console.error('[AUTH] Signature verification failed:', error);
      return NextResponse.json(
        { error: 'Invalid signature format' }, 
        { status: 401 }
      );
    }
    
    // Compare recovered address with provided address
    if (recoveredAddress.toLowerCase() !== lowerAddress) {
      console.error(`[AUTH] Address mismatch. Expected: ${lowerAddress}, Got: ${recoveredAddress.toLowerCase()}`);
      return NextResponse.json(
        { error: 'Signature verification failed. Address mismatch.' }, 
        { status: 401 }
      );
    }

    // Authentication successful! Delete used nonce
    Storage.deleteNonce(lowerAddress);

    // Get or set default user role
    const role = Storage.getRole(lowerAddress);
    
    // Generate JWT token
    const token = generateToken({
      walletAddress: lowerAddress,
      role,
      timestamp: Date.now()
    });

    console.log(`[AUTH] User authenticated successfully: ${lowerAddress} as ${role}`);

    const response: AuthResponse = {
      success: true,
      token,
      role,
      walletAddress: lowerAddress
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error('[AUTH] Verification error:', error);
    return NextResponse.json(
      { error: 'Internal server error during verification' }, 
      { status: 500 }
    );
  }
}