import { useRouter } from 'next/router'
import Head from 'next/head'
import { recipes } from '../../data/recipes'
import { Clock, Users, ChefHat, ArrowLeft, Star } from 'lucide-react'

export default function RecipeDetail() {
  const router = useRouter()
  
  // Find recipe by ID
  const recipe = recipes.find(r => r.id === parseInt(router.query.id))

  if (!recipe) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Recipe not found</h1>
          <button onClick={() => router.push('/recipes')} className="btn-primary">
            Back to Recipes
          </button>
        </div>
      </div>
    )
  }

  return (
    <>
      <Head>
        <title>{recipe.title} - Satyam Mushroom | Mushroom Recipe</title>
        <meta name="description" content={recipe.description} />
        <meta name="keywords" content={`${recipe.title}, mushroom recipe, Indian cuisine, healthy recipes`} />
      </Head>

      <div className="min-h-screen bg-gray-50">

        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <button onClick={() => router.push('/')} className="hover:text-primary-600">Home</button>
            <span>/</span>
            <button onClick={() => router.push('/recipes')} className="hover:text-primary-600">Recipes</button>
            <span>/</span>
            <span className="text-gray-900">{recipe.title}</span>
          </nav>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <button
            onClick={() => router.back()}
            className="flex items-center text-gray-600 hover:text-primary-600 mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to recipes
          </button>

          {/* Recipe Header */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
            <div className="relative h-64 md:h-96">
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='400' viewBox='0 0 800 400'%3E%3Crect width='800' height='400' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%236b7280' font-family='Arial' font-size='24'%3E${encodeURIComponent(recipe.title)}%3C/text%3E%3C/svg%3E`;
                }}
              />
              {recipe.featured && (
                <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Featured Recipe
                </div>
              )}
            </div>

            <div className="p-6 md:p-8">
              <div className="flex items-center justify-between mb-4">
                <span className="bg-earth-100 text-earth-800 px-3 py-1 rounded-full text-sm capitalize">
                  {recipe.category.replace('-', ' ')}
                </span>
                <div className="flex items-center text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`h-4 w-4 ${i < 4 ? 'fill-current' : ''}`} />
                  ))}
                  <span className="ml-2 text-gray-600 text-sm">(4.0)</span>
                </div>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {recipe.title}
              </h1>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                {recipe.description}
              </p>

              {/* Recipe Meta Info */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="flex items-center space-x-3 bg-gray-50 p-4 rounded-lg">
                  <Clock className="h-6 w-6 text-primary-600" />
                  <div>
                    <p className="text-sm text-gray-600">Prep Time</p>
                    <p className="font-semibold text-gray-900">{recipe.prepTime}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 bg-gray-50 p-4 rounded-lg">
                  <Users className="h-6 w-6 text-primary-600" />
                  <div>
                    <p className="text-sm text-gray-600">Servings</p>
                    <p className="font-semibold text-gray-900">4 servings</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 bg-gray-50 p-4 rounded-lg">
                  <ChefHat className="h-6 w-6 text-primary-600" />
                  <div>
                    <p className="text-sm text-gray-600">Difficulty</p>
                    <p className="font-semibold text-gray-900 capitalize">{recipe.difficulty}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Ingredients */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg p-6 sticky top-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Ingredients</h2>
                <ul className="space-y-3">
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">{ingredient}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-3">Required Products</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                      <span className="text-sm text-gray-700">Fresh Button Mushrooms</span>
                      <span className="text-primary-600 font-semibold">₹120</span>
                    </div>
                    <button className="w-full btn-primary text-sm py-2">
                      Add Ingredients to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Instructions */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Instructions</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-3">Step 1: Preparation</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Clean the mushrooms thoroughly with a damp cloth. Avoid washing them directly under water as they absorb moisture quickly. 
                      Pat them dry and slice them according to your recipe requirements.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-3">Step 2: Cooking</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Heat oil in a pan over medium heat. Add aromatics like garlic, onions, or ginger and sauté until fragrant. 
                      Add the mushrooms and cook until they release their moisture and start to brown.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-3">Step 3: Seasoning</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Add your preferred spices, herbs, and seasonings. For Indian recipes, this might include turmeric, cumin, 
                      coriander, and garam masala. Mix well to combine all flavors.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-3">Step 4: Final Touches</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Finish with fresh herbs, a squeeze of lemon juice, or cream as required by the recipe. 
                      Adjust seasoning to taste and serve hot.
                    </p>
                  </div>
                </div>

                {/* Tips Section */}
                <div className="mt-8 p-6 bg-primary-50 rounded-lg">
                  <h3 className="font-semibold text-lg text-primary-900 mb-3">Chef's Tips</h3>
                  <ul className="space-y-2 text-primary-800">
                    <li>• Don't overcrowd the pan when cooking mushrooms - cook in batches if needed</li>
                    <li>• Use high heat for a nice browning effect on the mushrooms</li>
                    <li>• Season mushrooms at the end of cooking to prevent them from becoming watery</li>
                    <li>• Fresh mushrooms cook faster than dried ones - adjust cooking time accordingly</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
