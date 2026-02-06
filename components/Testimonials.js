import { Star, Quote } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Patna, Bihar",
      rating: 5,
      comment: "The freshest mushrooms I've ever bought! The quality is consistently excellent and delivery is always on time. Satyam Foundation has become my trusted source for all mushroom needs.",
      avatar: "/images/avatar-1.jpg"
    },
    {
      name: "Rahul Kumar",
      location: "Delhi", 
      rating: 5,
      comment: "Being a chef, I'm very particular about ingredients. The dried shiitake mushrooms from Satyam Foundation are exceptional - the flavor is intense and authentic. Highly recommend!",
      avatar: "/images/avatar-2.jpg"
    },
    {
      name: "Anjali Singh",
      location: "Mumbai",
      rating: 4,
      comment: "Great variety of mushroom products! The mushroom growing kit was a fun experience. Customer service is very responsive and helpful. Will definitely order again.",
      avatar: "/images/avatar-3.jpg"
    }
  ]

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers across India
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 relative">
              <div className="absolute -top-4 left-6">
                <div className="bg-primary-100 p-2 rounded-full">
                  <Quote className="h-6 w-6 text-primary-600" />
                </div>
              </div>
              
              <div className="flex items-center mb-4 mt-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`h-4 w-4 ${i < testimonial.rating ? 'fill-current' : ''}`} />
                  ))}
                </div>
              </div>
              
              <p className="text-gray-700 mb-6 italic">
                "{testimonial.comment}"
              </p>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-3 flex items-center justify-center">
                  <span className="text-gray-600 font-semibold">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
