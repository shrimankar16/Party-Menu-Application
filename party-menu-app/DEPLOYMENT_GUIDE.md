# 🚀 Deployment Guide - Party Menu Application

This guide provides step-by-step instructions for deploying the Party Menu Application to various platforms.

## 📋 Pre-Deployment Checklist

Before deploying, ensure:
- ✅ All dependencies are installed (`npm install`)
- ✅ The application builds successfully (`npm run build`)
- ✅ All features work correctly in local development (`npm run dev`)
- ✅ Environment variables are properly configured (if needed)

---

## 🟦 Deploy to Vercel (Recommended)

Vercel offers the fastest and easiest deployment for Vite applications.

### Method 1: Deploy via Vercel CLI

1. **Install Vercel CLI**
```bash
npm install -g vercel
```

2. **Login to Vercel**
```bash
vercel login
```

3. **Deploy**
```bash
vercel
```

4. **Follow the prompts:**
   - Set up and deploy? **Y**
   - Which scope? **Select your account**
   - Link to existing project? **N**
   - Project name? **party-menu-app** (or your preferred name)
   - Directory? **./party-menu-app**
   - Override settings? **N**

5. **Deploy to Production**
```bash
vercel --prod
```

### Method 2: Deploy via Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Click **"Add New Project"**
3. Import your Git repository (GitHub, GitLab, or Bitbucket)
4. Configure project:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
5. Click **"Deploy"**

Your app will be live at: `https://your-project.vercel.app`

---

## 🟩 Deploy to Netlify

Netlify provides excellent hosting with automatic deployments.

### Method 1: Deploy via Netlify CLI

1. **Install Netlify CLI**
```bash
npm install -g netlify-cli
```

2. **Login to Netlify**
```bash
netlify login
```

3. **Initialize and Deploy**
```bash
netlify init
```

4. **Follow the prompts:**
   - Create & configure a new site? **Y**
   - Team? **Select your team**
   - Site name? **party-menu-app** (or your preferred name)
   - Build command? **npm run build**
   - Directory to deploy? **dist**
   - Netlify functions folder? **(leave empty)**

5. **Deploy to Production**
```bash
netlify deploy --prod
```

### Method 2: Deploy via Netlify Dashboard

1. Go to [netlify.com](https://netlify.com)
2. Click **"Add new site"** → **"Import an existing project"**
3. Connect your Git provider and select your repository
4. Configure build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   - **Base directory:** `party-menu-app` (if in a subdirectory)
5. Click **"Deploy site"**

Your app will be live at: `https://your-site.netlify.app`

---

## 🟧 Deploy to GitHub Pages

GitHub Pages is a free hosting option for static sites.

### Setup

1. **Install gh-pages package**
```bash
npm install --save-dev gh-pages
```

2. **Update package.json**

Add the homepage field:
```json
{
  "homepage": "https://your-username.github.io/party-menu-app"
}
```

Add deployment scripts:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. **Update vite.config.js**
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/party-menu-app/' // Your repository name
})
```

4. **Deploy**
```bash
npm run deploy
```

Your app will be live at: `https://your-username.github.io/party-menu-app`

---

## 🐳 Deploy with Docker

For containerized deployment.

1. **Create Dockerfile**
```dockerfile
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

2. **Create nginx.conf**
```nginx
server {
    listen 80;
    location / {
        root /usr/share/nginx/html;
        index index.html;
        try_files $uri $uri/ /index.html;
    }
}
```

3. **Build and Run**
```bash
docker build -t party-menu-app .
docker run -p 80:80 party-menu-app
```

---

## 🌐 Environment Variables

If you need to configure environment variables for production:

### Vercel
Add variables in the Vercel Dashboard:
1. Go to Project Settings → Environment Variables
2. Add your variables
3. Redeploy

### Netlify
Add variables in the Netlify Dashboard:
1. Go to Site Settings → Environment Variables
2. Add your variables
3. Redeploy

### Local .env file
Create a `.env` file (already in .gitignore):
```env
VITE_AUTH_API_URL=https://serverless-api-teal.vercel.app/api/auth/signin
```

**Note:** Vite requires environment variables to be prefixed with `VITE_`

---

## 🔧 Custom Domain Setup

### Vercel
1. Go to Project Settings → Domains
2. Add your custom domain
3. Configure DNS records as instructed

### Netlify
1. Go to Site Settings → Domain Management
2. Add custom domain
3. Configure DNS records as instructed

---

## 📊 Performance Optimization

After deployment, consider these optimizations:

1. **Enable Compression**: Gzip/Brotli (usually automatic on Vercel/Netlify)
2. **Add CDN**: Use platform's edge network
3. **Optimize Images**: Use WebP format when possible
4. **Enable Caching**: Configure proper cache headers
5. **Monitor Performance**: Use Lighthouse or Web Vitals

---

## 🔍 Troubleshooting

### Build Fails
- Check Node.js version (should be 16+)
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`
- Check for missing dependencies

### 404 Errors on Refresh
- Ensure rewrites/redirects are configured (see vercel.json and netlify.toml)
- For other platforms, configure server to serve index.html for all routes

### API Errors
- Verify CORS settings on the API
- Check that the API URL is correct
- Ensure authentication endpoint is accessible

---

## 📝 Post-Deployment Checklist

- ✅ Test all pages and routes
- ✅ Test authentication flow
- ✅ Verify filtering and search functionality
- ✅ Test saved recipes persistence
- ✅ Check responsive design on mobile devices
- ✅ Test across different browsers
- ✅ Verify performance metrics
- ✅ Set up error monitoring (optional)
- ✅ Configure analytics (optional)

---

## 🎉 Success!

Your Party Menu Application should now be live and accessible to users worldwide!

For issues or questions, please refer to the main README.md or open an issue in the repository.
