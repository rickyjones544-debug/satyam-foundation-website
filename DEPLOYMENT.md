# Deployment Guide for Satyam Foundation Website

## 🚀 Quick Deployment

### Option 1: Vercel (Recommended)
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project" and connect your GitHub repository
4. Select the `satyammashroom` folder
5. Click "Deploy"

### Option 2: Manual Deployment

#### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

#### Installation Steps
```bash
# Navigate to project directory
cd satyammashroom

# Install dependencies
npm install

# Build the project
npm run build

# Start production server
npm start
```

#### PowerShell Execution Policy Fix (Windows)
If you encounter PowerShell execution policy errors:

```powershell
# Open PowerShell as Administrator
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

Then run:
```bash
npm install
npm run dev
```

## 📱 Testing the Website

### Local Development
```bash
npm run dev
```
Visit: http://localhost:3000

### Production Build
```bash
npm run build
npm start
```
Visit: http://localhost:3000

## 🔧 Environment Setup

### Required Dependencies
All dependencies are already listed in `package.json`:
- next: 14.0.0
- react: ^18.2.0
- react-dom: ^18.2.0
- lucide-react: ^0.294.0
- tailwindcss: ^3.3.5
- autoprefixer: ^10.4.16
- postcss: ^8.4.31

### Image Assets
Place your product and recipe images in the `public/images/` folder:

```
public/images/
├── hero-mushrooms.jpg
├── fresh-button-mushrooms.jpg
├── dried-shiitake.jpg
├── oyster-mushrooms.jpg
├── mushroom-powder.jpg
├── dried-morel.jpg
├── growing-kit.jpg
├── mushroom-soup.jpg
├── stir-fry-mushrooms.jpg
├── mushroom-biryani.jpg
├── stuffed-mushrooms.jpg
├── mushroom-pasta.jpg
├── mushroom-tikka.jpg
├── about-mission.jpg
├── farm-location.jpg
├── fresh-mushrooms-category.jpg
├── dried-mushrooms-category.jpg
├── special-products-category.jpg
├── avatar-1.jpg
├── avatar-2.jpg
├── avatar-3.jpg
└── favicon.ico
```

## 🌐 Domain Configuration

### Custom Domain Setup
1. After deploying on Vercel, go to project settings
2. Add your custom domain (e.g., satyamfoundation.com)
3. Configure DNS records as instructed by Vercel

### SSL Certificate
Vercel provides automatic SSL certificates for all deployments.

## 📊 Performance Optimization

### Built-in Optimizations
- Next.js Image optimization
- Code splitting
- Static generation where possible
- Tailwind CSS purging in production

### Additional Recommendations
1. **Image Optimization**: Use WebP format for images
2. **CDN**: Vercel provides global CDN
3. **Caching**: Proper cache headers are set by Next.js

## 🔍 SEO Checklist

### Meta Tags
All pages include:
- Title tags
- Meta descriptions
- Open Graph tags
- Twitter Card tags

### Structured Data
Consider adding:
- Product schema for shop pages
- Recipe schema for recipe pages
- Local business schema for contact page

### Sitemap
Generate sitemap after deployment:
```bash
npm install next-sitemap
```

## 📱 Mobile Responsiveness

The website is fully responsive with:
- Mobile-first design approach
- Touch-friendly navigation
- Optimized layouts for all screen sizes
- Responsive images

## 🛠️ Customization Guide

### Adding New Products
Edit `data/products.js`:
```javascript
{
  id: 7,
  name: "New Product",
  category: "fresh|dried|special",
  price: 299,
  unit: "500g",
  image: "/images/new-product.jpg",
  description: "Product description",
  features: ["Feature 1", "Feature 2"],
  inStock: true
}
```

### Updating Contact Information
Edit the contact details in:
- `pages/contact.js` (main contact page)
- `components/Footer.js` (footer contact info)

### Customizing Colors
Edit `tailwind.config.js` to modify the color scheme.

## 🚨 Troubleshooting

### Common Issues

#### 1. Images Not Loading
- Ensure images are in `public/images/` folder
- Check file names match the paths in data files
- Verify image formats (JPG, PNG, WebP)

#### 2. Tailwind CSS Not Working
- Run `npm install` to ensure dependencies
- Check `tailwind.config.js` configuration
- Verify `styles/globals.css` imports

#### 3. Build Errors
- Clear Next.js cache: `rm -rf .next`
- Reinstall dependencies: `npm install`
- Check for syntax errors in components

#### 4. PowerShell Execution Policy (Windows)
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

## 📞 Support

For deployment issues:
1. Check Vercel deployment logs
2. Review console errors in browser
3. Verify all dependencies are installed
4. Ensure Node.js version is 18+

## 🎯 Next Steps

1. **Add Real Images**: Replace placeholder images with actual product photos
2. **Backend Integration**: Connect to a real e-commerce backend
3. **Payment Gateway**: Integrate payment processing
4. **Admin Panel**: Add content management system
5. **Analytics**: Set up Google Analytics
6. **Marketing**: Configure email marketing tools

---

**Your Satyam Foundation website is now ready for deployment!** 🍄✨
