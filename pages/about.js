import Head from 'next/head'
import { Heart, Users, Award, Target, Leaf, MapPin } from 'lucide-react'

export default function About() {
  const timeline = [
    {
      year: "2015",
      title: "Our Beginning",
      description: "Started with a small mushroom farm in rural Bihar with just 2 varieties of mushrooms."
    },
    {
      year: "2018",
      title: "Expansion",
      description: "Expanded our farming operations and introduced organic farming practices."
    },
    {
      year: "2020",
      title: "Quality Certification",
      description: "Received organic certification and began supplying to major retailers across India."
    },
    {
      year: "2024",
      title: "Digital Presence",
      description: "Launched our online platform to reach customers directly across the country."
    }
  ]

  const values = [
    {
      icon: Heart,
      title: "Passion for Quality",
      description: "We are passionate about delivering the highest quality mushrooms, grown with care and attention to detail."
    },
    {
      icon: Users,
      title: "Community First",
      description: "We believe in supporting local farming communities and providing fair opportunities for growth."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Our commitment to excellence drives us to continuously improve our farming and production processes."
    },
    {
      icon: Target,
      title: "Sustainability",
      description: "We practice sustainable farming methods that protect the environment for future generations."
    }
  ]

  return (
    <>
      <Head>
        <title>About Us - Satyam Mushroom | Satyam Foundation Charitable Trust</title>
        <meta name="description" content="Learn about Satyam Mushroom by Satyam Foundation Charitable Trust. Our journey from Banka, Bihar to becoming a leading mushroom supplier. Discover our mission, values, and commitment to quality." />
        <meta name="keywords" content="about Satyam Mushroom, Satyam Foundation Charitable Trust, mushroom farming Banka Bihar, organic mushrooms, sustainable agriculture" />
      </Head>

      <div className="min-h-screen">

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Our Story
              </h1>
              <p className="text-xl max-w-3xl mx-auto text-primary-100">
                From Satyam Foundation Charitable Trust in Banka, Bihar to becoming one of India's most trusted mushroom suppliers,
                our journey is rooted in passion, quality, and sustainable farming practices.
              </p>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Our Mission & Vision
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-primary-600 mb-3">Mission</h3>
                    <p className="text-gray-700 leading-relaxed">
                      To provide premium quality, organic mushrooms to every Indian household while 
                      promoting sustainable farming practices and supporting local communities in Banka, Bihar through Satyam Foundation Charitable Trust.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary-600 mb-3">Vision</h3>
                    <p className="text-gray-700 leading-relaxed">
                      To become India's leading mushroom supplier under Satyam Mushroom brand, known for exceptional quality, 
                      innovation in mushroom farming, and commitment to environmental sustainability.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="/images/about-mission.svg" 
                  alt="Our Farm" 
                  className="rounded-2xl shadow-xl w-full h-auto"
                  onError={(e) => {
                    e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='400' viewBox='0 0 800 400'%3E%3Crect width='800' height='400' fill='%2316a34a'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='white' font-family='Arial' font-size='24'%3EOur Farm%3C/text%3E%3C/svg%3E";
                  }}
                />
                <div className="absolute -bottom-6 -left-6 bg-primary-600 text-white p-6 rounded-xl shadow-lg">
                  <Leaf className="h-8 w-8 mb-2" />
                  <p className="font-semibold">100% Organic Farming</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Our Journey
              </h2>
              <p className="text-lg text-gray-600">
                From humble beginnings to becoming a trusted name in mushroom farming
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-200"></div>
              {timeline.map((item, index) => (
                <div key={index} className={`relative flex items-center mb-8 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                      <span className="text-primary-600 font-bold text-lg">{item.year}</span>
                      <h3 className="text-xl font-semibold text-gray-900 mt-2 mb-3">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Our Core Values
              </h2>
              <p className="text-lg text-gray-600">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="mx-auto w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                    <value.icon className="h-8 w-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Farm Info */}
        <section className="py-16 bg-primary-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <img 
                  src="/images/farm-location.jpg" 
                  alt="Our Farm Location" 
                  className="rounded-2xl shadow-xl w-full h-auto"
                  onError={(e) => {
                    e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Crect width='600' height='400' fill='%23dcfce7'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%2316a34a' font-family='Arial' font-size='24'%3EFarm Location%3C/text%3E%3C/svg%3E";
                  }}
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Our Farm in Banka, Bihar
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-primary-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Location</h3>
                      <p className="text-gray-600">Strategically located in Banka, Bihar, ideal for mushroom cultivation with perfect climate conditions</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Leaf className="h-6 w-6 text-primary-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Growing Conditions</h3>
                      <p className="text-gray-600">Perfect climate and soil conditions in Banka for growing premium quality mushrooms year-round</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Users className="h-6 w-6 text-primary-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Local Community</h3>
                      <p className="text-gray-600">Supporting over 50 local farming families with fair wages and training programs</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
