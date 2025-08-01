import express from "express";
import cors from 'cors';
import dotenv from 'dotenv';
import healthRouter from './routes/health'
import helmet from "helmet";
import authRouter from './routes/auth'
import userRouter from './routes/user'
import quotationRouter from './routes/quotations'

dotenv.config();

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use('/api', healthRouter);
app.use('/api/auth', authRouter);
app.use('/api/users', userRouter);
app.use('/api/quotations', quotationRouter);

export default app;
