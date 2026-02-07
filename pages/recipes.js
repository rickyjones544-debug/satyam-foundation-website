import { useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { recipes } from '../data/recipes'
import { Clock, ChefHat, Filter, Search } from 'lucide-react'

export default function Recipes() {
  const router = useRouter()
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const categories = [
    { value: 'all', label: 'All Recipes' },
    { value: 'appetizers', label: 'Appetizers' },
    { value: 'main-course', label: 'Main Course' },
    { value: 'soups', label: 'Soups' }
  ]

  const filteredRecipes = recipes.filter(recipe => {
    const matchesCategory = selectedCategory === 'all' || recipe.category === selectedCategory
    const matchesSearch = recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         recipe.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const featuredRecipes = recipes.filter(recipe => recipe.featured)

  return (
    <>
      <Head>
        <title>Mushroom Recipes - Satyam Mushroom | Delicious Mushroom Dishes</title>
        <meta name="description" content="Explore delicious mushroom recipes from Satyam Mushroom by Satyam Foundation Charitable Trust. From soups to main courses, discover creative ways to cook with fresh and dried mushrooms." />
        <meta name="keywords" content="mushroom recipes, cooking mushrooms, Indian mushroom dishes, healthy recipes" />
      </Head>

      <div className="min-h-screen bg-gray-50">

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-earth-600 to-earth-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Mushroom Recipes
              </h1>
              <p className="text-xl max-w-3xl mx-auto text-earth-100">
                Discover delicious and creative ways to cook with mushrooms. 
                From traditional Indian dishes to international cuisines, 
                explore our collection of mouth-watering recipes.
              </p>
            </div>
          </div>
        </div>

        {/* Featured Recipes */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Featured Recipes
              </h2>
              <p className="text-lg text-gray-600">
                Our most popular and loved mushroom dishes
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredRecipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} featured router={router} />
              ))}
            </div>
          </div>
        </section>

        {/* All Recipes with Filters */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                All Recipes
              </h2>
              <p className="text-lg text-gray-600">
                Browse our complete collection of mushroom recipes
              </p>
            </div>

            {/* Filters */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Search recipes..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                  />
                </div>

                <div className="relative">
                  <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none appearance-none"
                  >
                    {categories.map(category => (
                      <option key={category.value} value={category.value}>
                        {category.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-4 text-sm text-gray-600">
                Showing {filteredRecipes.length} recipes
              </div>
            </div>

            {/* Recipe Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredRecipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} router={router} />
              ))}
            </div>

            {filteredRecipes.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 text-6xl mb-4">🍳</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No recipes found</h3>
                <p className="text-gray-600">Try adjusting your search or filters</p>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  )
}

function RecipeCard({ recipe, featured = false, router }) {
  const handleCardClick = () => {
    router.push(`/recipe/${recipe.id}`)
  }

  const handleButtonClick = (e) => {
    e.stopPropagation()
    router.push(`/recipe/${recipe.id}`)
  }

  return (
    <div 
      className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer ${featured ? 'md:col-span-2 lg:col-span-1' : ''}`}
      onClick={handleCardClick}
    >
      <div className="relative h-48 bg-gray-100">
        <img 
          src={recipe.image} 
          alt={recipe.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            e.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%236b7280' font-family='Arial' font-size='18'%3E${encodeURIComponent(recipe.title)}%3C/text%3E%3C/svg%3E`;
          }}
        />
        {recipe.featured && (
          <div className="absolute top-2 right-2 bg-yellow-500 text-white px-2 py-1 text-xs rounded-full">
            Featured
          </div>
        )}
      </div>
      
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs bg-earth-100 text-earth-800 px-2 py-1 rounded-full capitalize">
            {recipe.category.replace('-', ' ')}
          </span>
          <span className="text-xs text-gray-500 capitalize">
            {recipe.difficulty}
          </span>
        </div>
        
        <h3 className="font-semibold text-lg mb-2 text-gray-900 hover:text-primary-600 transition-colors">
          {recipe.title}
        </h3>
        
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
          {recipe.description}
        </p>
        
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            {recipe.prepTime}
          </div>
          <div className="flex items-center">
            <ChefHat className="h-4 w-4 mr-1" />
            {recipe.difficulty}
          </div>
        </div>
        
        <button 
          className="w-full mt-4 bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
          onClick={handleButtonClick}
        >
          View Recipe
        </button>
      </div>
    </div>
  )
}
