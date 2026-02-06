import { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Trash2, Plus, Minus, ArrowLeft, ShoppingBag } from 'lucide-react'

export default function Cart() {
  const router = useRouter()
  const [cart, setCart] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Load cart from localStorage
    const savedCart = JSON.parse(localStorage.getItem('cart') || '[]')
    setCart(savedCart)
    setIsLoading(false)

    // Listen for cart updates
    const handleCartUpdate = () => {
      const updatedCart = JSON.parse(localStorage.getItem('cart') || '[]')
      setCart(updatedCart)
    }

    window.addEventListener('cartUpdate', handleCartUpdate)
    return () => window.removeEventListener('cartUpdate', handleCartUpdate)
  }, [])

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return
    
    const updatedCart = cart.map(item => 
      item.id === productId ? { ...item, quantity: newQuantity } : item
    )
    
    setCart(updatedCart)
    localStorage.setItem('cart', JSON.stringify(updatedCart))
    
    // Update cart count
    const cartCount = updatedCart.reduce((total, item) => total + item.quantity, 0)
    localStorage.setItem('cartCount', cartCount.toString())
    window.dispatchEvent(new Event('cartUpdate'))
  }

  const removeItem = (productId) => {
    const updatedCart = cart.filter(item => item.id !== productId)
    setCart(updatedCart)
    localStorage.setItem('cart', JSON.stringify(updatedCart))
    
    // Update cart count
    const cartCount = updatedCart.reduce((total, item) => total + item.quantity, 0)
    localStorage.setItem('cartCount', cartCount.toString())
    window.dispatchEvent(new Event('cartUpdate'))
  }

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0)
  }

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0)
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    )
  }

  return (
    <>
      <Head>
        <title>Shopping Cart - Satyam Foundation</title>
        <meta name="description" content="View your shopping cart and checkout" />
      </Head>

      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <Link href="/shop" className="flex items-center text-gray-600 hover:text-primary-600 mr-4">
                <ArrowLeft className="h-5 w-5 mr-2" />
                Continue Shopping
              </Link>
              <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
            </div>
            <div className="text-sm text-gray-600">
              {getTotalItems()} {getTotalItems() === 1 ? 'item' : 'items'}
            </div>
          </div>

          {cart.length === 0 ? (
            // Empty Cart
            <div className="text-center py-16">
              <ShoppingBag className="h-24 w-24 text-gray-300 mx-auto mb-6" />
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your cart is empty</h2>
              <p className="text-gray-600 mb-8">Looks like you haven't added any mushrooms to your cart yet.</p>
              <Link href="/shop" className="btn-primary">
                Start Shopping
              </Link>
            </div>
          ) : (
            // Cart with Items
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  {cart.map((item) => (
                    <div key={item.id} className="p-6 border-b border-gray-200 last:border-b-0">
                      <div className="flex items-center">
                        {/* Product Image */}
                        <div className="flex-shrink-0 w-24 h-24 bg-gray-100 rounded-lg overflow-hidden">
                          <img 
                            src={item.image} 
                            alt={item.name}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.target.style.display = 'none';
                              e.target.parentElement.innerHTML = `
                                <div class="w-full h-full flex items-center justify-center text-4xl" style="background: linear-gradient(135deg, #10b981 0%, #059669 100%);">
                                  🍄
                                </div>
                              `;
                            }}
                          />
                        </div>

                        {/* Product Details */}
                        <div className="ml-6 flex-1">
                          <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                          <p className="text-gray-600">₹{item.price}</p>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center space-x-3">
                          <div className="flex items-center border border-gray-300 rounded-lg">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-2 text-gray-600 hover:text-primary-600 hover:bg-primary-50"
                            >
                              <Minus className="h-4 w-4" />
                            </button>
                            <span className="px-3 py-2 text-gray-900 font-medium min-w-[3rem] text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-2 text-gray-600 hover:text-primary-600 hover:bg-primary-50"
                            >
                              <Plus className="h-4 w-4" />
                            </button>
                          </div>

                          {/* Remove Button */}
                          <button
                            onClick={() => removeItem(item.id)}
                            className="p-2 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>

                      {/* Item Total */}
                      <div className="mt-4 text-right">
                        <span className="text-lg font-semibold text-gray-900">
                          ₹{item.price * item.quantity}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Order Summary</h2>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-gray-600">
                      <span>Subtotal ({getTotalItems()} items)</span>
                      <span>₹{getTotalPrice()}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Shipping</span>
                      <span>Free</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Tax</span>
                      <span>₹0</span>
                    </div>
                    <div className="border-t pt-3">
                      <div className="flex justify-between text-lg font-semibold text-gray-900">
                        <span>Total</span>
                        <span>₹{getTotalPrice()}</span>
                      </div>
                    </div>
                  </div>

                  <button 
                    onClick={() => router.push('/checkout')}
                    className="w-full btn-primary mb-3"
                  >
                    Proceed to Checkout
                  </button>
                  
                  <Link href="/shop" className="w-full block text-center py-2 px-4 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
                    Continue Shopping
                  </Link>
                </div>

                {/* Trust Badges */}
                <div className="mt-6 bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Why Shop With Us?</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                        <span className="text-green-600">✓</span>
                      </div>
                      <span className="text-sm text-gray-600">100% Organic Products</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                        <span className="text-green-600">✓</span>
                      </div>
                      <span className="text-sm text-gray-600">Farm Fresh Guarantee</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                        <span className="text-green-600">✓</span>
                      </div>
                      <span className="text-sm text-gray-600">Fast Delivery Across India</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
