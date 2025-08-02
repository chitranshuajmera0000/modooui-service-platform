# 🚂 Railway Deployment Guide for NestJS Backend

## Step 1: Create Railway Account
1. Go to [Railway.app](https://railway.app)
2. Sign up with your GitHub account
3. Connect your GitHub repository

## Step 2: Deploy Backend to Railway

### Option A: Deploy from GitHub (Recommended)
1. Go to Railway Dashboard
2. Click "New Project"
3. Select "Deploy from GitHub repo"
4. Choose your repository: `modooui-service-platform`
5. Set the **root directory** to: `backend-nestjs`
6. Railway will auto-detect it's a Node.js project

### Option B: Deploy via Railway CLI
```bash
# Install Railway CLI
npm install -g @railway/cli

# Login to Railway
railway login

# Navigate to backend directory
cd backend-nestjs

# Initialize and deploy
railway init
railway up
```

## Step 3: Configure Environment Variables

In your Railway project dashboard, go to **Variables** tab and add:

```
DATABASE_URL=postgresql://user:password@hostname:port/database
JWT_SECRET=your-super-secure-jwt-secret-key-minimum-32-characters
JWT_EXPIRES_IN=7d
NODE_ENV=production
PORT=3001
ALLOWED_ORIGINS=https://modooui-service-platform.vercel.app,http://localhost:3000
```

## Step 4: Add PostgreSQL Database

1. In Railway dashboard, click **"+ New"**
2. Select **"Database" → "PostgreSQL"**
3. Railway will automatically provide the `DATABASE_URL`
4. Copy the connection string to your environment variables

## Step 5: Update Frontend Configuration

After Railway deployment, you'll get a URL like: `https://your-app.railway.app`

Update your Vercel environment variables:
```
NEXT_PUBLIC_API_URL=https://your-app.railway.app
```

## Step 6: Test Deployment

Your NestJS backend will be available at:
- **Health Check**: `https://your-app.railway.app/health`
- **API Info**: `https://your-app.railway.app/api`
- **Auth Login**: `https://your-app.railway.app/auth/login`

## 🎉 Success!

Your NestJS backend is now running on Railway with:
- ✅ Full NestJS functionality
- ✅ PostgreSQL database
- ✅ JWT authentication
- ✅ CORS configured
- ✅ Health monitoring
- ✅ Automatic deployments from GitHub

## Next Steps

1. **Test all API endpoints**
2. **Update frontend to use Railway backend URL**
3. **Set up database with Prisma migrations**
4. **Test authentication flow end-to-end**
