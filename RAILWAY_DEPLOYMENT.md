# 🚂 Railway Deployment Guide for NestJS Backend

## Step 1: Create Railway Account
1. Go to [Railway.app](https://railway.app)
2. Sign up with your GitHub account
3. Connect your GitHub repository

## Step 2: Deploy NestJS Backend to Railway

### Option A: Deploy from GitHub (Recommended)
1. Go to Railway Dashboard
2. Click "New Project"
3. Select "Deploy from GitHub repo"
4. Choose your repository: `modooui-service-platform`
5. Railway will auto-detect the **NestJS monorepo structure**
6. The nixpacks.toml and railway.toml will configure the build properly

### Option B: Deploy via Railway CLI
```bash
# Install Railway CLI
npm install -g @railway/cli

# Login to Railway
railway login

# Deploy from project root (monorepo structure)
railway init
railway up
```

## Step 3: Configure Environment Variables for NestJS

In your Railway project dashboard, go to **Variables** tab and add:

```
DATABASE_URL=postgresql://user:password@hostname:port/database
JWT_SECRET=your-super-secure-jwt-secret-key-minimum-32-characters
JWT_EXPIRES_IN=7d
NODE_ENV=production
PORT=3001
ALLOWED_ORIGINS=https://modooui-service-platform.vercel.app,http://localhost:3000
```

## Step 4: Add PostgreSQL Database for NestJS + Prisma

1. In Railway dashboard, click **"+ New"**
2. Select **"Database" → "PostgreSQL"**
3. Railway will automatically provide the `DATABASE_URL`
4. Copy the connection string to your environment variables
5. **Important**: Railway will auto-run `prisma generate` during build

## Step 5: NestJS Build Process

Railway will automatically:
1. **Install**: `cd backend-nestjs && npm ci`
2. **Generate Prisma**: `cd backend-nestjs && npx prisma generate`
3. **Build NestJS**: `cd backend-nestjs && npm run build`
4. **Start**: `cd backend-nestjs && npm run start:prod`

## Step 6: Update Frontend Configuration

After Railway deployment, you'll get a URL like: `https://your-nestjs-app.railway.app`

Update your Vercel environment variables:
```
NEXT_PUBLIC_API_URL=https://your-nestjs-app.railway.app
```

## Step 7: Test NestJS Deployment

Your NestJS backend will be available at:
- **Health Check**: `https://your-app.railway.app/health`
- **API Info**: `https://your-app.railway.app/api`
- **Auth Login**: `https://your-app.railway.app/auth/login`
- **Auth Register**: `https://your-app.railway.app/auth/register`

## 🎉 Success!

Your **NestJS backend** is now running on Railway with:
- ✅ Full NestJS framework functionality
- ✅ PostgreSQL database with Prisma ORM
- ✅ JWT authentication system
- ✅ CORS configured for your frontend
- ✅ Health monitoring endpoint
- ✅ Automatic deployments from GitHub
- ✅ Production-ready configuration

## Next Steps for NestJS Integration

1. **Test all NestJS API endpoints**
2. **Update frontend to use Railway NestJS backend URL**
3. **Run Prisma migrations**: `npx prisma migrate deploy`
4. **Test authentication flow end-to-end**
5. **Verify all NestJS controllers work properly**

Your ServiceHub platform now has a professional NestJS backend! 🚀
