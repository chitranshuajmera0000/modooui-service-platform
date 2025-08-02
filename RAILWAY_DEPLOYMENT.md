# 🚂 Railway Deployment Guide for NestJS Backend

## Step 1: Create Railway Account
1. Go to [Railway.app](https://railway.app)
2. Sign up with your GitHub account
3. Connect your GitHub repository

## Step 2: Deploy NestJS Backend to Railway

### Method 1: Deploy from GitHub (Recommended)
1. Go to Railway Dashboard
2. Click "New Project"
3. Select "Deploy from GitHub repo"
4. Choose your repository: `modooui-service-platform`
5. **IMPORTANT**: Set the **Root Directory** to: `backend-nestjs`
6. Railway will auto-detect it as a Node.js/NestJS project

### Method 2: Deploy via Railway CLI (Alternative)
```bash
# Install Railway CLI
npm install -g @railway/cli

# Login to Railway
railway login

# Navigate to backend directory
cd backend-nestjs

# Initialize and deploy from backend directory
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

## Step 4: Add PostgreSQL Database

1. In Railway dashboard, click **"+ New"**
2. Select **"Database" → "PostgreSQL"**
3. Railway will automatically provide the `DATABASE_URL`
4. Copy the connection string to your environment variables

## Step 5: Verify NestJS Deployment

Railway will automatically:
1. **Detect**: Node.js project in `backend-nestjs` directory
2. **Install**: `npm ci` (installs dependencies)
3. **Generate**: `npx prisma generate` (creates database client)
4. **Build**: `npm run build` (compiles NestJS to JavaScript)
5. **Start**: `npm run start:prod` (starts production server)

## Step 6: Update Frontend Configuration

After Railway deployment, you'll get a URL like: `https://your-nestjs-app.railway.app`

Update your Vercel environment variables:
```
NEXT_PUBLIC_API_URL=https://your-nestjs-app.railway.app
```

## Step 7: Test NestJS Endpoints

Your NestJS backend will be available at:
- **Health Check**: `https://your-app.railway.app/health`
- **API Info**: `https://your-app.railway.app/api`
- **Auth Login**: `https://your-app.railway.app/auth/login`
- **Auth Register**: `https://your-app.railway.app/auth/register`
- **Services**: `https://your-app.railway.app/services`
- **Quotations**: `https://your-app.railway.app/quotations`

## 🎉 Success!

Your **NestJS backend** is now running on Railway with:
- ✅ Full NestJS framework functionality
- ✅ PostgreSQL database with Prisma ORM
- ✅ JWT authentication system
- ✅ All controllers and services working
- ✅ CORS configured for your frontend
- ✅ Health monitoring endpoint
- ✅ Automatic deployments from GitHub

## Next Steps

1. **Test all NestJS API endpoints**
2. **Update frontend to use Railway NestJS backend URL**
3. **Run Prisma migrations**: In Railway console: `npx prisma migrate deploy`
4. **Test authentication flow end-to-end**
5. **Verify all NestJS features work in production**

Your ServiceHub platform now has a professional NestJS backend deployment! 🚀

## Troubleshooting

If deployment fails:
1. Check Railway build logs
2. Ensure `backend-nestjs` is set as root directory
3. Verify all environment variables are set
4. Check database connection string
