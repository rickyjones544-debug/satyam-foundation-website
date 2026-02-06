import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Menu, X, ShoppingCart, Search } from 'lucide-react'

export default function Navbar() {
  const router = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [cartCount, setCartCount] = useState(0)

  useEffect(() => {
    // Load cart count from localStorage
    const count = localStorage.getItem('cartCount') || '0'
    setCartCount(parseInt(count))

    // Listen for cart updates
    const handleCartUpdate = () => {
      const count = localStorage.getItem('cartCount') || '0'
      setCartCount(parseInt(count))
    }

    window.addEventListener('cartUpdate', handleCartUpdate)
    return () => window.removeEventListener('cartUpdate', handleCartUpdate)
  }, [])

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <span className="text-2xl font-bold text-primary-600">Satyam Foundation</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="/" className="text-gray-900 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">
                Home
              </a>
              <div className="relative group">
                <button className="text-gray-900 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors flex items-center">
                  Shop
                  <svg className="ml-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="py-1">
                    <a href="/shop?category=fresh" className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600">Fresh Mushrooms</a>
                    <a href="/shop?category=dried" className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600">Dried Mushrooms</a>
                    <a href="/shop?category=special" className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600">Special Products</a>
                  </div>
                </div>
              </div>
              <a href="/recipes" className="text-gray-900 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">
                Recipes
              </a>
              <a href="/about" className="text-gray-900 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">
                About
              </a>
              <a href="/contact" className="text-gray-900 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 rounded-full text-gray-600 hover:text-primary-600 hover:bg-primary-50 transition-colors">
              <Search className="h-5 w-5" />
            </button>
            <button 
              onClick={() => router.push('/cart')}
              className="p-2 rounded-full text-gray-600 hover:text-primary-600 hover:bg-primary-50 transition-colors relative"
            >
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 h-4 w-4 bg-primary-600 text-white text-xs rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <button className="btn-primary text-sm py-2 px-4">
              Shop Now
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-primary-50 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <a href="/" className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-primary-600 hover:bg-primary-50 rounded-md">
              Home
            </a>
            <a href="/shop" className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-primary-600 hover:bg-primary-50 rounded-md">
              Shop
            </a>
            <a href="/recipes" className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-primary-600 hover:bg-primary-50 rounded-md">
              Recipes
            </a>
            <a href="/about" className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-primary-600 hover:bg-primary-50 rounded-md">
              About
            </a>
            <a href="/contact" className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-primary-600 hover:bg-primary-50 rounded-md">
              Contact
            </a>
            <div className="flex items-center space-x-2 px-3 py-2">
              <button className="p-2 rounded-full text-gray-600 hover:text-primary-600 hover:bg-primary-50">
                <Search className="h-5 w-5" />
              </button>
              <button 
                onClick={() => router.push('/cart')}
                className="p-2 rounded-full text-gray-600 hover:text-primary-600 hover:bg-primary-50 relative"
              >
                <ShoppingCart className="h-5 w-5" />
                {cartCount > 0 && (
                  <span className="absolute top-0 right-0 h-4 w-4 bg-primary-600 text-white text-xs rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
