import Head from 'next/head'
import HeroBanner from '../components/HeroBanner'
import CategoryCards from '../components/CategoryCards'
import ProductGrid from '../components/ProductGrid'
import WhyChooseUs from '../components/WhyChooseUs'
import Testimonials from '../components/Testimonials'
import { products } from '../data/products'

export default function Home() {
  // Get featured products (first 4 products)
  const featuredProducts = products.slice(0, 4)

  return (
    <>
      <Head>
        <title>Satyam Foundation - Fresh Mushrooms & Mushroom Products | Bihar, India</title>
        <meta name="description" content="Premium quality fresh and dried mushrooms from Bihar, India. Shop organic mushrooms, mushroom products, and explore delicious recipes." />
        <meta name="keywords" content="fresh mushrooms, dried mushrooms, mushroom products, organic mushrooms, Bihar mushrooms, mushroom farming" />
        <meta name="author" content="Satyam Foundation" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://satyamfoundation.com/" />
        <meta property="og:title" content="Satyam Foundation - Fresh Mushrooms & Mushroom Products" />
        <meta property="og:description" content="Premium quality fresh and dried mushrooms from Bihar, India. Shop organic mushrooms and explore recipes." />
        <meta property="og:image" content="/images/og-image.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://satyamfoundation.com/" />
        <meta property="twitter:title" content="Satyam Foundation - Fresh Mushrooms & Mushroom Products" />
        <meta property="twitter:description" content="Premium quality fresh and dried mushrooms from Bihar, India." />
        <meta property="twitter:image" content="/images/og-image.jpg" />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen">
        <HeroBanner />
        <CategoryCards />
        
        {/* Featured Products Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Featured Products
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Discover our handpicked selection of premium mushroom products
              </p>
            </div>
            <ProductGrid products={featuredProducts} />
            <div className="text-center mt-12">
              <a href="/shop" className="btn-primary">
                View All Products
              </a>
            </div>
          </div>
        </section>

        <WhyChooseUs />
        <Testimonials />
      </div>
    </>
  )
}
