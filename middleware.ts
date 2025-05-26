import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

const protectedPaths = [
    '/api/v1/tasks',
    '/api/v1/students'
];

const publicPaths = [
    '/api/v1/auth/login',
    '/api/v1/auth/register'
];

export async function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname;

    if (publicPaths.some(p => path.startsWith(p))) {
        return NextResponse.next();
    }

    if (protectedPaths.some(p => path.startsWith(p))) {
        const token = request.headers.get('Authorization')?.split(' ')[1];

        if (!token) {
            return NextResponse.json(
                { error: 'Authentication required' },
                { status: 401 }
            );
        }

        try {
            const secret = new TextEncoder().encode(process.env.JWT_SECRET);
            await jwtVerify(token, secret);
            return NextResponse.next();
        } catch (error) {
            return NextResponse.json(
                { error: 'Invalid token' },
                { status: 401 }
            );
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        '/api/v1/tasks/:path*',
        '/api/v1/students/:path*',
        '/api/v1/auth/:path*'
    ]
}; 