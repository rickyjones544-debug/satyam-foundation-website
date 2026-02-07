import { useState } from 'react'
import Head from 'next/head'
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from 'lucide-react'

export default function Contact() {
  const [submitStatus, setSubmitStatus] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const formData = new FormData(e.target)
    
    // Show loading state
    setSubmitStatus('loading')
    
    fetch('https://formspree.io/f/xvzbowoj', {
      method: 'POST',
      body: formData
    })
    .then(response => {
      if (response.ok) {
        setSubmitStatus('success')
        // Clear form
        e.target.reset()
      } else {
        setSubmitStatus('error')
      }
    })
    .catch(error => {
      setSubmitStatus('error')
    })
  }

  return (
    <div>
      <Head>
        <title>Contact Us - Satyam Mushroom | Satyam Foundation Charitable Trust</title>
        <meta name="description" content="Contact Satyam Mushroom by Satyam Foundation Charitable Trust for premium mushrooms. Visit our farm in Banka, Bihar, call us at 9122205301, or email natasharoy.collabs@gmail.com." />
        <meta name="keywords" content="contact Satyam Mushroom, Satyam Foundation Charitable Trust, mushroom farm Banka Bihar, customer support, 9122205301, natasharoy.collabs@gmail.com" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Get in Touch
              </h1>
              <p className="text-xl max-w-3xl mx-auto text-primary-100">
                Have questions about our products or want to place an order? 
                Satyam Mushroom by Satyam Foundation Charitable Trust is here to help. Reach out through any of the channels below.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form & Map */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                
                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                    Thank you for your inquiry! Our team will get back to you within 24 hours.
                  </div>
                )}
                
                {submitStatus === 'loading' && (
                  <div className="mb-6 p-4 bg-blue-100 border border-blue-400 text-blue-700 rounded-lg">
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-500 mr-2"></div>
                      <span className="ml-2">Sending your message...</span>
                    </div>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                    Sorry, there was an error sending your message. Please try again or call us directly at +91 91222 05301.
                  </div>
                )}

                <form 
                  action="https://formspree.io/f/xvzbowoj"
                  method="POST"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="john@example.com"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="+91 91222 05301"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <select
                        name="subject"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="orders">Order Related</option>
                        <option value="bulk">Bulk Order</option>
                        <option value="feedback">Feedback</option>
                        <option value="partnership">Partnership</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="Tell us how we can help you..."
                      ></textarea>
                    </div>
                    
                    <div>
                      <button
                        type="submit"
                        className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>

              {/* Map & Additional Info */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Find Us</h2>
                
                {/* Map Placeholder */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-6">
                  <div className="relative h-96 bg-gray-200">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <MapPin className="h-12 w-12 text-primary-600" />
                      <div className="text-center">
                        <p className="text-lg font-semibold text-gray-900">Satyam Mushroom</p>
                        <p className="text-gray-600">Water Wage, Amarpur Road, Banka, Bihar - 813102</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Contact */}
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Contact</h3>
                  <div className="space-y-4">
                    <a href="tel:+919122205301" className="flex items-center text-gray-700 hover:text-primary-600">
                      <Phone className="h-5 w-5 mr-3" />
                      +91 91222 05301
                    </a>
                    <a href="mailto:natasharoy.collabs@gmail.com" className="flex items-center text-gray-700 hover:text-primary-600">
                      <Mail className="h-5 w-5 mr-3" />
                      natasharoy.collabs@gmail.com
                    </a>
                    <a href="https://wa.me/919122205301" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 hover:text-primary-600">
                      <MessageSquare className="h-5 w-5 mr-3" />
                      WhatsApp: +91 91222 05301
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
