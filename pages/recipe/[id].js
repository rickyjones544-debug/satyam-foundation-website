import { useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { recipes } from '../../data/recipes'
import { Clock, ChefHat, ArrowLeft, Plus, Minus } from 'lucide-react'

export default function RecipeDetail() {
  const router = useRouter()
  const { id } = router.query
  const [servings, setServings] = useState(4)

  const recipe = recipes.find(r => r.id === parseInt(id))

  if (!recipe) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Recipe not found</h1>
          <button 
            onClick={() => router.push('/recipes')}
            className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg"
          >
            Back to Recipes
          </button>
        </div>
      </div>
    )
  }

  const adjustIngredients = (ingredients) => {
    const multiplier = servings / 4
    return ingredients.map(ing => {
      const match = ing.match(/^(\d+(?:\.\d+)?)\s*(.+)/)
      if (match) {
        const amount = (parseFloat(match[1]) * multiplier).toFixed(1)
        return `${amount} ${match[2]}`
      }
      return ing
    })
  }

  return (
    <>
      <Head>
        <title>{recipe.title} - Satyam Foundation | Mushroom Recipe</title>
        <meta name="description" content={recipe.description} />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <button 
              onClick={() => router.push('/recipes')}
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Recipes
            </button>
          </div>
        </div>

        {/* Hero Section */}
        <div className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Image */}
              <div className="relative h-96 lg:h-full rounded-lg overflow-hidden">
                <img 
                  src={recipe.image} 
                  alt={recipe.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Crect width='600' height='400' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%236b7280' font-family='Arial' font-size='24'%3E${encodeURIComponent(recipe.title)}%3C/text%3E%3C/svg%3E`;
                  }}
                />
                {recipe.featured && (
                  <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm">
                    Featured Recipe
                  </div>
                )}
              </div>

              {/* Recipe Info */}
              <div>
                <div className="mb-4">
                  <span className="inline-block bg-earth-100 text-earth-800 px-3 py-1 rounded-full text-sm capitalize mb-4">
                    {recipe.category.replace('-', ' ')}
                  </span>
                  <h1 className="text-4xl font-bold text-gray-900 mb-4">{recipe.title}</h1>
                  <p className="text-lg text-gray-600 mb-6">{recipe.description}</p>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center text-gray-600 mb-2">
                      <Clock className="h-5 w-5 mr-2" />
                      Prep Time
                    </div>
                    <p className="text-xl font-semibold text-gray-900">{recipe.prepTime}</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center text-gray-600 mb-2">
                      <ChefHat className="h-5 w-5 mr-2" />
                      Difficulty
                    </div>
                    <p className="text-xl font-semibold text-gray-900 capitalize">{recipe.difficulty}</p>
                  </div>
                </div>

                {/* Servings Selector */}
                <div className="bg-gray-50 rounded-lg p-4 mb-8">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Servings</label>
                  <div className="flex items-center space-x-4">
                    <button 
                      onClick={() => setServings(Math.max(1, servings - 1))}
                      className="p-2 rounded-lg bg-white border border-gray-300 hover:bg-gray-50"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="text-xl font-semibold w-12 text-center">{servings}</span>
                    <button 
                      onClick={() => setServings(servings + 1)}
                      className="p-2 rounded-lg bg-white border border-gray-300 hover:bg-gray-50"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ingredients and Instructions */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Ingredients */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Ingredients</h2>
              <div className="bg-white rounded-lg shadow-sm p-6">
                <ul className="space-y-3">
                  {adjustIngredients(recipe.ingredients).map((ingredient, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary-600 mr-3">•</span>
                      <span className="text-gray-700">{ingredient}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Instructions */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Instructions</h2>
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-semibold mr-4">
                      1
                    </div>
                    <p className="text-gray-700">Clean and prepare all mushrooms by wiping them with a damp cloth. Avoid washing as they absorb water.</p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-semibold mr-4">
                      2
                    </div>
                    <p className="text-gray-700">Heat oil in a large pan over medium-high heat. Add aromatics like garlic, onions, or ginger and sauté until fragrant.</p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-semibold mr-4">
                      3
                    </div>
                    <p className="text-gray-700">Add mushrooms to the pan and cook until they release their moisture and start to brown. Don't overcrowd the pan.</p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-semibold mr-4">
                      4
                    </div>
                    <p className="text-gray-700">Add remaining ingredients and seasonings. Cook according to your specific recipe requirements.</p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-semibold mr-4">
                      5
                    </div>
                    <p className="text-gray-700">Taste and adjust seasoning as needed. Serve hot and enjoy your delicious mushroom dish!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
