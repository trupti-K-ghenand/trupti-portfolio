# 🚀 GitHub Pages Deployment Guide

This guide will help you deploy your portfolio website to GitHub Pages for free hosting.

## 📋 Prerequisites

1. **GitHub Account**: Create one at [github.com](https://github.com) if you don't have one
2. **Git Installed**: Download from [git-scm.com](https://git-scm.com)
3. **Node.js Installed**: Download from [nodejs.org](https://nodejs.org)

## 🛠️ Step-by-Step Deployment

### Step 1: Create GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the **"+"** button → **"New repository"**
3. Repository name: `trupti-portfolio` (or your preferred name)
4. Make it **Public** (required for free GitHub Pages)
5. Check **"Add a README file"**
6. Click **"Create repository"**

### Step 2: Update Package.json Homepage

1. In your `frontend/package.json`, replace `yourusername` with your GitHub username:
   ```json
   "homepage": "https://YOUR_GITHUB_USERNAME.github.io/trupti-portfolio"
   ```

### Step 3: Prepare Project Files

Copy these files from your project to a new folder:
```
trupti-portfolio/
├── frontend/src/          (all React components)
├── frontend/public/       (public assets)
├── package.json          (updated with homepage)
├── tailwind.config.js
├── craco.config.js
├── README.md
└── .gitignore
```

### Step 4: Initialize Git Repository

Open terminal in your project folder and run:
```bash
# Initialize git repository
git init

# Add GitHub remote repository
git remote add origin https://github.com/YOUR_USERNAME/trupti-portfolio.git

# Add all files
git add .

# Make first commit
git commit -m "Initial portfolio website commit"

# Push to GitHub
git push -u origin main
```

### Step 5: Install Dependencies and Deploy

```bash
# Install all dependencies including gh-pages
npm install

# Build and deploy to GitHub Pages
npm run deploy
```

### Step 6: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **"Settings"** tab
3. Scroll down to **"Pages"** in the left sidebar
4. Under **"Source"**, select **"Deploy from a branch"**
5. Select **"gh-pages"** branch and **"/ (root)"** folder
6. Click **"Save"**

### Step 7: Access Your Website

Your website will be available at:
```
https://YOUR_GITHUB_USERNAME.github.io/trupti-portfolio
```

**Note**: It may take 5-10 minutes for the website to be live after first deployment.

## 🔄 Future Updates

To update your website:
```bash
# Make your changes to the code
# Then run:
git add .
git commit -m "Update portfolio content"
git push origin main
npm run deploy
```

## 🌟 Tips for Success

1. **Custom Domain** (Optional): You can add a custom domain in repository settings
2. **HTTPS**: GitHub Pages automatically provides HTTPS
3. **Analytics**: Add Google Analytics to track visitors
4. **SEO**: Update meta tags in `public/index.html` for better search ranking

## 🐛 Troubleshooting

### Common Issues:

1. **404 Error**: Check if the homepage URL in package.json matches your repository
2. **White Page**: Check browser console for errors, usually related to routing
3. **Styles Not Loading**: Ensure all paths are relative in your CSS/JS files

### Contact Form Note:
The contact form currently uses mock data. For a working form, consider:
- **Formspree**: Free form handling service
- **Netlify Forms**: If you switch to Netlify hosting
- **EmailJS**: Send emails directly from frontend

## 🎉 Congratulations!

Your professional portfolio is now live on the internet for free! Share your new website URL with potential employers and colleagues.

---

**Need Help?** 
- GitHub Pages Documentation: [docs.github.com/pages](https://docs.github.com/pages)
- Create an issue in your repository if you encounter problems
