import { Request, Response } from "express";
import { PrismaClient } from "../generated/prisma";
import { comparePassword, hashPassword } from "../utils/bcrypt";
import { generateToken } from "../utils/jwt";


const prisma = new PrismaClient;


export const register = async (req: Request, res: Response) => {
    try {
        const { email, password, name, phone } = req.body;

        if (!email || !password || !name) {
            return res.status(400).json({ error: 'Email ,Password , and Name are Required' });

        }

        const existingUser = await prisma.user.findUnique({
            where: { email }
        })

        if (existingUser) {
            return res.status(409).json({ error: 'User Already Exists' });
        }

        const hashedPassword = await hashPassword(password);

        const user = await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
                name,
                phone: phone || null
            }
        })

        const token = generateToken({ userId: user.id, email: user.email })

        res.status(200).json({
            message: "User Registered Successfully",
            token,
            user: {
                id: user.id,
                email: user.email,
                name: user.name
            }
        })

    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' })
    }
};

export const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: 'Email and Password are Required' });
        }

        const user = await prisma.user.findUnique({
            where: { email }
        });

        if (!user) {
            return res.status(401).json({ error: 'Invalid Credentials' })
        }

        const isValidPassword = await comparePassword(password, user.password);

        if (!isValidPassword) {
            return res.status(401).json({ error: 'Invalid Credentials' })
        }

        const token = generateToken({ userId: user.id, email: user.email });

        res.status(200).json({
            message: 'Login Successful',
            token,
            user: {
                id: user.id,
                email: user.email,
                name: user.name
            }
        });

    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' })
    }
};