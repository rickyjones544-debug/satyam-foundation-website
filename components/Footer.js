import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Send } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-earth-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-primary-400">Satyam Mushroom</h3>
            <p className="text-earth-100 mb-6 max-w-md">
              Satyam Foundation Charitable Trust - Your trusted source for premium quality mushrooms and mushroom products. 
              Grown with care in Banka, Bihar, delivering nature's best to your table.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-earth-200">
                <MapPin className="h-4 w-4 mr-2 text-primary-400" />
                <span className="text-sm">Water Wage, Amarpur Road, Banka, Bihar - 813102</span>
              </div>
              <div className="flex items-center text-earth-200">
                <Phone className="h-4 w-4 mr-2 text-primary-400" />
                <span className="text-sm">+91 91222 05301</span>
              </div>
              <div className="flex items-center text-earth-200">
                <Mail className="h-4 w-4 mr-2 text-primary-400" />
                <span className="text-sm">mishrar084@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary-400">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-earth-200 hover:text-primary-400 transition-colors text-sm">Home</a></li>
              <li><a href="/shop" className="text-earth-200 hover:text-primary-400 transition-colors text-sm">Shop</a></li>
              <li><a href="/recipes" className="text-earth-200 hover:text-primary-400 transition-colors text-sm">Recipes</a></li>
              <li><a href="/about" className="text-earth-200 hover:text-primary-400 transition-colors text-sm">About Us</a></li>
              <li><a href="/contact" className="text-earth-200 hover:text-primary-400 transition-colors text-sm">Contact</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary-400">Newsletter</h4>
            <p className="text-earth-200 mb-4 text-sm">
              Subscribe to get updates on new products and recipes
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-3 py-2 bg-earth-800 border border-earth-700 rounded-lg text-white placeholder-earth-400 focus:outline-none focus:border-primary-400 focus:ring-1 focus:ring-primary-400"
              />
              <button
                type="submit"
                className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center"
              >
                <Send className="h-4 w-4 mr-2" />
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-earth-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-4 mb-4 md:mb-0">
              <a href="#" className="text-earth-400 hover:text-primary-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-earth-400 hover:text-primary-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-earth-400 hover:text-primary-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
            <div className="text-earth-400 text-sm">
              © 2024 Satyam Foundation Charitable Trust. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
