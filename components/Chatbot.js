import { useState, useEffect, useRef } from 'react'
import { MessageCircle, Send, X, Bot, User, Minimize2, Maximize2 } from 'lucide-react'

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "🍄 Hello! I'm your mushroom expert assistant at Satyam Foundation. How can I help you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ])
  const [inputMessage, setInputMessage] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)

  const quickReplies = [
    "What mushrooms do you sell?",
    "How do I cook mushrooms?",
    "What are your prices?",
    "Do you deliver to my area?",
    "Tell me about your farm"
  ]

  const botResponses = {
    "what mushrooms": "We sell a variety of premium mushrooms including:\n\n🍄 **Fresh Mushrooms:** Button, Oyster, Portobello\n🍄 **Dried Mushrooms:** Shiitake, Morel, Oyster\n🍄 **Special Products:** Mushroom powder, growing kits\n\nAll our mushrooms are 100% organic and farm-fresh!",
    "prices": "Our prices vary by product:\n\n• Fresh Button Mushrooms: ₹120/500g\n• Dried Shiitake: ₹280/250g\n• Oyster Mushrooms: ₹150/400g\n• Mushroom Powder: ₹200/200g\n• Dried Morel: ₹450/100g\n• Growing Kit: ₹350/kit\n\nAll prices include delivery charges!",
    "delivery": "Yes! We deliver across India:\n\n🚚 **Major Cities:** 2-3 days\n🚚 **Other Areas:** 4-6 days\n🚚 **Bihar:** Same day/Next day\n\nOrders above ₹500 get free delivery!",
    "cook": "Here are some popular ways to cook mushrooms:\n\n🍳 **Quick Sauté:** Heat oil, add garlic, cook mushrooms 5-7 mins\n🍲 **Curry:** Add to your favorite curry base\n🍜 **Soup:** Creamy mushroom soup is delicious!\n🥘 **Biryani:** Perfect for vegetarian biryani\n\nCheck our Recipes section for detailed instructions!",
    "farm": "Satyam Foundation is located in Bihar, India! 🇮🇳\n\n🌱 **Founded:** 2015\n🌱 **Specialty:** Organic mushroom farming\n🌱 **Team:** 50+ local farming families\n🌱 **Certification:** 100% Organic Certified\n\nWe're proud to bring premium quality mushrooms from our Bihar farms to your table!",
    "contact": "You can reach us through:\n\n📞 **Phone:** +91 98765 43210\n📧 **Email:** info@satyamfoundation.com\n📍 **Visit:** Rampur, Patna, Bihar\n💬 **WhatsApp:** +91 98765 43210\n\nWe're available Mon-Sat, 9AM-6PM!",
    "order": "To place an order:\n\n1. Browse our Shop section\n2. Add products to cart\n3. Checkout with your details\n4. Choose payment method\n5. Get confirmation via SMS/Email\n\nNeed help? Call us at +91 98765 43210!"
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const generateBotResponse = (userMessage) => {
    const message = userMessage.toLowerCase()
    
    for (const [key, response] of Object.entries(botResponses)) {
      if (message.includes(key)) {
        return response
      }
    }
    
    // Default responses for common patterns
    if (message.includes('hello') || message.includes('hi')) {
      return "Hello! Welcome to Satyam Foundation! 🍄 How can I assist you with our mushroom products today?"
    }
    if (message.includes('thank')) {
      return "You're welcome! 😊 Is there anything else you'd like to know about our mushrooms or services?"
    }
    if (message.includes('bye')) {
      return "Thank you for chatting with us! Have a wonderful day and enjoy our fresh mushrooms! 🍄"
    }
    
    return "I'd be happy to help! You can ask me about:\n\n• Our mushroom varieties\n• Cooking tips and recipes\n• Prices and ordering\n• Delivery information\n• Our farm story\n\nOr choose one of the quick options below! 👇"
  }

  const sendMessage = async () => {
    if (!inputMessage.trim()) return

    const userMessage = {
      id: messages.length + 1,
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages([...messages, userMessage])
    setInputMessage('')
    setIsTyping(true)

    // Simulate bot thinking time
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: generateBotResponse(inputMessage),
        sender: 'bot',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botResponse])
      setIsTyping(false)
    }, 1000 + Math.random() * 1000)
  }

  const handleQuickReply = (reply) => {
    setInputMessage(reply)
    setTimeout(() => sendMessage(), 100)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-primary-600 hover:bg-primary-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 group"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="absolute right-full mr-3 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          Chat with us!
        </span>
      </button>
    )
  }

  return (
    <div className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${isMinimized ? 'h-14' : 'h-96'} w-80`}>
      <div className="bg-white rounded-lg shadow-2xl flex flex-col h-full border border-gray-200">
        {/* Header */}
        <div className="bg-primary-600 text-white p-4 rounded-t-lg flex items-center justify-between">
          <div className="flex items-center">
            <Bot className="h-5 w-5 mr-2" />
            <div>
              <p className="font-semibold">Mushroom Expert</p>
              <p className="text-xs opacity-90">Online now</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setIsMinimized(!isMinimized)}
              className="p-1 hover:bg-primary-700 rounded transition-colors"
            >
              {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-primary-700 rounded transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {!isMinimized && (
          <>
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs px-3 py-2 rounded-lg ${
                      message.sender === 'user'
                        ? 'bg-primary-600 text-white'
                        : 'bg-gray-100 text-gray-900'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line">{message.text}</p>
                    <p className="text-xs opacity-70 mt-1">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                  <div className={`ml-2 ${message.sender === 'user' ? 'order-last' : ''}`}>
                    {message.sender === 'bot' ? (
                      <Bot className="h-6 w-6 text-gray-400" />
                    ) : (
                      <User className="h-6 w-6 text-gray-400" />
                    )}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 px-3 py-2 rounded-lg">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                  <Bot className="h-6 w-6 text-gray-400 ml-2" />
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies */}
            {messages.length === 1 && (
              <div className="px-4 py-2 border-t border-gray-200">
                <p className="text-xs text-gray-600 mb-2">Quick questions:</p>
                <div className="flex flex-wrap gap-1">
                  {quickReplies.map((reply, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickReply(reply)}
                      className="text-xs bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded-full transition-colors"
                    >
                      {reply}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none text-sm"
                />
                <button
                  onClick={sendMessage}
                  disabled={!inputMessage.trim() || isTyping}
                  className="bg-primary-600 hover:bg-primary-700 disabled:bg-gray-300 text-white p-2 rounded-lg transition-colors"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
