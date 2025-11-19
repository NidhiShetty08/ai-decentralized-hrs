import { NextRequest, NextResponse } from 'next/server';
import { verifyToken, getTokenFromHeader } from '@/lib/jwt';

/**
 * Middleware to protect routes starting with /api/protected
 * Verifies JWT token before allowing access
 */
export function middleware(request: NextRequest) {
  // Only protect /api/protected/* routes
  if (request.nextUrl.pathname.startsWith('/api/protected')) {
    const authHeader = request.headers.get('authorization');
    const token = getTokenFromHeader(authHeader);
    
    if (!token) {
      console.warn('[MIDDLEWARE] Blocked request - No token provided');
      return NextResponse.json(
        { 
          error: 'Unauthorized - Authentication required',
          message: 'Please provide a valid JWT token in the Authorization header'
        },
        { status: 401 }
      );
    }

    try {
      // Verify JWT token
      const decoded = verifyToken(token);
      console.log(`[MIDDLEWARE] Request authorized for ${decoded.walletAddress}`);
      
      // Token is valid, allow request to continue
      return NextResponse.next();
    } catch (error: any) {
      console.warn(`[MIDDLEWARE] Blocked request - ${error.message}`);
      return NextResponse.json(
        { 
          error: 'Unauthorized - Invalid or expired token',
          message: error.message
        },
        { status: 401 }
      );
    }
  }

  // Allow all other routes
  return NextResponse.next();
}

// Configure which routes the middleware should run on
export const config = {
  matcher: '/api/protected/:path*'
};
