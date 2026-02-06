# Satyam Foundation - Mushroom Farming Website

A full- responsive e-commerce website for Satyam Foundation, a mushroom farming & mushroom products business based in Bihar, India.

## 🍄 Project Overview

This website showcases fresh and dried mushrooms, mushroom products, recipes, and farming resources. Built with Next.js, Tailwind CSS, and React components for a modern, professional appearance.

## 🚀 Features

### Core Pages
- **Homepage** - Hero banner, featured products, testimonials, and company benefits
- **Shop** - Product catalog with filters (Fresh, Dried, Special products) and sorting
- **Product Details** - Individual product pages with images, pricing, and add-to-cart functionality
- **About Us** - Company story, mission, values, and timeline
- **Recipes** - Mushroom recipe collection with categories and search functionality
- **Contact** - Contact form, Google Maps integration, and FAQ section

### Key Features
- 🎨 Modern, clean design inspired by Shroomery.in and PlanetMushroom.co.in
- 📱 Fully responsive (mobile, tablet, desktop)
- 🔍 Advanced product filtering and search
- 🛒 Shopping cart functionality (UI ready)
- 📧 Contact form with validation
- 🗺️ Google Maps integration
- ⭐ Customer testimonials
- 📖 Recipe collection with detailed instructions
- 🎯 SEO optimized with meta tags and descriptions

## 🛠️ Technology Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Language**: JavaScript/React

## 📁 Project Structure

```
satyammashroom/
├── components/           # Reusable React components
│   ├── Navbar.js        # Navigation header with dropdown menus
│   ├── Footer.js        # Footer with newsletter signup
│   ├── HeroBanner.js    # Homepage hero section
│   ├── ProductGrid.js   # Product grid layout
│   ├── ProductCard.js   # Individual product card
│   ├── CategoryCards.js # Category showcase cards
│   ├── Testimonials.js  # Customer testimonials
│   └── WhyChooseUs.js   # Company benefits section
├── pages/               # Next.js pages
│   ├── index.js         # Homepage
│   ├── shop.js          # Product catalog
│   ├── product/[id].js  # Dynamic product pages
│   ├── about.js         # About us page
│   ├── recipes.js        # Recipe listing
│   ├── recipes/[id].js  # Individual recipe pages
│   ├── contact.js       # Contact page
│   ├── _app.js          # App configuration
│   └── _document.js     # Document configuration
├── data/                # Static data
│   ├── products.js      # Product data
│   └── recipes.js       # Recipe data
├── styles/              # Global styles
│   └── globals.css      # Tailwind CSS imports and custom styles
├── public/              # Static assets (images, favicon)
├── package.json         # Dependencies and scripts
├── tailwind.config.js    # Tailwind configuration
└── postcss.config.js     # PostCSS configuration
```

## 🎨 Design System

### Color Palette
- **Primary Green**: #16a34a (Primary brand color)
- **Earth Tones**: #854836, #65372b (Warm, natural colors)
- **Neutral**: Various shades of gray for text and backgrounds

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700
- **Responsive sizing** for all screen sizes

### Components
- **Buttons**: Primary, Secondary, Outline variants
- **Cards**: Consistent shadow and hover effects
- **Forms**: Styled inputs with focus states
- **Navigation**: Sticky header with mobile menu

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd satyammashroom
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

Key responsive features:
- Mobile-first navigation with hamburger menu
- Adaptive grid layouts (1-4 columns based on screen size)
- Touch-friendly buttons and forms
- Optimized images for different screen sizes

## 🛍️ E-commerce Features

### Product Management
- Product categories (Fresh, Dried, Special)
- Price sorting and filtering
- Search functionality
- Stock status indicators
- Product ratings and reviews

### Shopping Cart (UI Ready)
- Add to cart buttons on product cards
- Quantity selectors on product pages
- Cart icon with item count
- Ready for backend integration

## 📖 Recipe System

### Recipe Features
- Categorized recipes (Appetizers, Main Course, Soups)
- Featured recipes section
- Detailed recipe pages with ingredients and instructions
- Prep time and difficulty indicators
- Chef's tips and recommendations

## 📞 Contact & Support

### Contact Features
- Multi-channel contact information
- Interactive contact form with validation
- Google Maps integration
- FAQ section
- WhatsApp integration ready

## 🔧 Customization

### Adding Products
Edit `data/products.js` to add new products:
```javascript
{
  id: 7,
  name: "Product Name",
  category: "fresh|dried|special",
  price: 199,
  unit: "500g",
  image: "/images/product-image.jpg",
  description: "Product description",
  features: ["Feature 1", "Feature 2"],
  inStock: true
}
```

### Adding Recipes
Edit `data/recipes.js` to add new recipes:
```javascript
{
  id: 7,
  title: "Recipe Title",
  category: "appetizers|main-course|soups",
  prepTime: "30 mins",
  difficulty: "Easy|Medium|Hard",
  image: "/images/recipe-image.jpg",
  description: "Recipe description",
  ingredients: ["Ingredient 1", "Ingredient 2"],
  featured: true|false
}
```

### Customizing Colors
Edit `tailwind.config.js` to modify the color scheme:
```javascript
theme: {
  extend: {
    colors: {
      primary: { /* your primary colors */ },
      earth: { /* your earth tone colors */ }
    }
  }
}
```

## 📈 SEO Optimization

- Meta tags for all pages
- Structured data ready
- Semantic HTML5
- Alt text for images
- Clean URLs
- Mobile-friendly design

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Other Platforms
The app can be deployed to any platform supporting Next.js:
- Netlify
- AWS Amplify
- DigitalOcean
- Traditional VPS with Node.js

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is proprietary to Satyam Foundation.

## 📞 Support

For questions or support regarding this website:
- Email: info@satyamfoundation.com
- Phone: +91 98765 43210

---

**Built with ❤️ for Satyam Foundation**
