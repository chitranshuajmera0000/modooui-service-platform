import jwt from 'jsonwebtoken';

interface JWTPayload {
    userId: string;
    email: string;
}

export const generateToken = (payload: JWTPayload): string => {
    const secret = process.env.JWT_SECRET;
    if (!secret) {
        throw new Error('JWT_SECRET is not defined');
    }
    const expiresIn = process.env.JWT_EXPIRES_IN || '7d';

    return jwt.sign(payload, secret, { expiresIn } as jwt.SignOptions);
}

export const verifyToken = (token: string): JWTPayload => {
    const secret = process.env.JWT_SECRET;
    if (!secret) {
        throw new Error('JWT_SECRET is not defined');
    }

    try {
        const decoded = jwt.verify(token, secret);
        // Optionally validate the decoded payload structure here
        return decoded as JWTPayload;
    } catch (err) {
        throw new Error('Invalid or expired token');
    }
}
