import { ShoppingCart, Star } from 'lucide-react'
import { useRouter } from 'next/router'

export default function ProductCard({ product }) {
  const router = useRouter()
  
  const handleAddToCart = () => {
    // Simple cart functionality - store in localStorage
    const cart = JSON.parse(localStorage.getItem('cart') || '[]')
    const existingItem = cart.find(item => item.id === product.id)
    
    if (existingItem) {
      existingItem.quantity += 1
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: 1
      })
    }
    
    localStorage.setItem('cart', JSON.stringify(cart))
    
    // Update cart count in UI
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0)
    localStorage.setItem('cartCount', cartCount.toString())
    
    // Trigger cart update event
    window.dispatchEvent(new Event('cartUpdate'))
    
    alert(`${product.name} added to cart!`)
  }
  
  const handleProductClick = () => {
    router.push(`/product/${product.id}`)
  }

  return (
    <div className="card group cursor-pointer" onClick={handleProductClick}>
      <div className="relative overflow-hidden h-48 bg-gray-100 flex items-center justify-center">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            // Fallback to colored div with mushroom emoji
            e.target.style.display = 'none';
            e.target.parentElement.innerHTML = `
              <div class="w-full h-full flex items-center justify-center text-6xl" style="background: linear-gradient(135deg, #10b981 0%, #059669 100%);">
                🍄
              </div>
            `;
          }}
        />
        {product.inStock ? (
          <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 text-xs rounded-full">
            In Stock
          </div>
        ) : (
          <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 text-xs rounded-full">
            Out of Stock
          </div>
        )}
      </div>
      
      <div className="p-4">
        <div className="flex items-center mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`h-4 w-4 ${i < 4 ? 'fill-current' : ''}`} />
            ))}
          </div>
          <span className="text-sm text-gray-500 ml-2">(4.0)</span>
        </div>
        
        <h3 className="font-semibold text-lg mb-2 text-gray-900 group-hover:text-primary-600 transition-colors">
          {product.name}
        </h3>
        
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between mb-3">
          <div>
            <span className="text-2xl font-bold text-primary-600">₹{product.price}</span>
            <span className="text-sm text-gray-500 ml-1">/{product.unit}</span>
          </div>
          <span className="text-xs bg-primary-100 text-primary-800 px-2 py-1 rounded-full capitalize">
            {product.category}
          </span>
        </div>
        
        <button 
          onClick={(e) => {
            e.stopPropagation() // Prevent product click when clicking button
            handleAddToCart()
          }}
          disabled={!product.inStock}
          className={`w-full py-2 px-4 rounded-lg font-medium transition-all duration-200 flex items-center justify-center ${
            product.inStock 
              ? 'bg-primary-600 hover:bg-primary-700 text-white shadow-md hover:shadow-lg' 
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          {product.inStock ? 'Add to Cart' : 'Out of Stock'}
        </button>
      </div>
    </div>
  )
}
