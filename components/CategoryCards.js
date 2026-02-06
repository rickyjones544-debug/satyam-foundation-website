import { ArrowRight } from 'lucide-react'

export default function CategoryCards() {
  const categories = [
    {
      title: "Fresh Mushrooms",
      description: "Premium quality fresh mushrooms harvested daily",
      image: "/images/01.png",
      link: "/shop?category=fresh",
      color: "from-green-500 to-green-600"
    },
    {
      title: "Dried Mushrooms", 
      description: "Long-lasting dried varieties with intense flavors",
      image: "/images/Shiitake01.jpg",
      link: "/shop?category=dried",
      color: "from-amber-600 to-amber-700"
    },
    {
      title: "Special Products",
      description: "Unique mushroom products and growing kits",
      image: "/images/06.png", 
      link: "/shop?category=special",
      color: "from-purple-600 to-purple-700"
    }
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          Shop by Category
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Explore our wide range of mushroom products, from farm-fresh varieties to specialty items
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((category, index) => (
          <a 
            key={index}
            href={category.link}
            className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-90`}></div>
            <div className="relative h-64 flex flex-col justify-between p-6 text-white">
              <div>
                <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                <p className="text-white text-opacity-90">{category.description}</p>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-semibold flex items-center">
                  Explore
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
            <img 
              src={category.image}
              alt={category.title}
              className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-300"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentElement.innerHTML = `
                  <div class="w-full h-full flex items-center justify-center text-8xl opacity-30">
                    🍄
                  </div>
                `;
              }}
            />
          </a>
        ))}
      </div>
    </div>
  )
}
