import { ArrowRight, Leaf, Truck, Shield } from 'lucide-react'

export default function HeroBanner() {
  return (
    <div className="relative bg-gradient-to-r from-primary-600 to-primary-800 text-white">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Fresh Mushrooms & 
              <span className="text-primary-200"> Mushroom Products</span>
            </h1>
            <p className="text-xl mb-8 text-primary-100 leading-relaxed">
              Discover the finest quality mushrooms grown organically in Bihar. 
              From fresh varieties to premium dried products, we bring nature's 
              best directly to your kitchen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="/shop" className="btn-primary bg-white text-primary-600 hover:bg-primary-50 inline-flex items-center justify-center">
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a href="/recipes" className="btn-outline border-white text-white hover:bg-white hover:text-primary-600 inline-flex items-center justify-center">
                Explore Recipes
              </a>
            </div>
            
            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <div className="bg-white bg-opacity-20 p-2 rounded-lg">
                  <Leaf className="h-6 w-6 text-primary-200" />
                </div>
                <div>
                  <p className="font-semibold">100% Organic</p>
                  <p className="text-sm text-primary-200">Natural farming</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-white bg-opacity-20 p-2 rounded-lg">
                  <Truck className="h-6 w-6 text-primary-200" />
                </div>
                <div>
                  <p className="font-semibold">Fast Delivery</p>
                  <p className="text-sm text-primary-200">Across India</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-white bg-opacity-20 p-2 rounded-lg">
                  <Shield className="h-6 w-6 text-primary-200" />
                </div>
                <div>
                  <p className="font-semibold">Quality Assured</p>
                  <p className="text-sm text-primary-200">Premium products</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10">
              <img 
                src="/images/02.png" 
                alt="Fresh Mushrooms" 
                className="rounded-2xl shadow-2xl w-full h-auto"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = `
                    <div class="w-full h-96 rounded-2xl shadow-2xl flex items-center justify-center text-8xl" style="background: linear-gradient(135deg, #16a34a 0%, #15803d 100%);">
                      🍄 Fresh Mushrooms 🍄
                    </div>
                  `;
                }}
              />
            </div>
            {/* Floating badges */}
            <div className="absolute -top-4 -left-4 bg-white text-primary-600 px-4 py-2 rounded-lg shadow-lg font-semibold">
              Farm Fresh
            </div>
            <div className="absolute -bottom-4 -right-4 bg-earth-600 text-white px-4 py-2 rounded-lg shadow-lg font-semibold">
              Premium Quality
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
