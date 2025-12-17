import React from 'react';

const About = () => {
  const features = [
    {
      icon: '🚀',
      title: 'Lightning Fast Delivery',
      description: 'Get your favorite meals delivered in 30 minutes or less with our optimized delivery network.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: '🎆',
      title: 'Premium Quality',
      description: 'We partner with top-rated restaurants to ensure you get fresh, high-quality food every time.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: '💳',
      title: 'Best Prices',
      description: 'Enjoy competitive pricing, exclusive deals, and no hidden fees on your favorite dishes.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: '📱',
      title: 'Easy Ordering',
      description: 'Simple, intuitive interface makes ordering food as easy as a few taps on your device.',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const reviews = [
    {
      name: 'Beerus',
      avatar: '🐈',
      rating: 5,
      review: 'Absolutely divine! The food quality exceeds even my godly expectations. Fast delivery too!',
      role: 'God of Destruction'
    },
    {
      name: 'Whis',
      avatar: '👼',
      rating: 5,
      review: 'Elegant interface and exceptional service. The variety of cuisines is truly impressive.',
      role: 'Angel'
    },
    {
      name: 'Goku',
      avatar: '🥋',
      rating: 5,
      review: 'Amazing! I can order tons of food super quickly. Perfect for after training sessions!',
      role: 'Saiyan Warrior'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-purple-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-20 text-center">
          <div className="animate-fade-in">
            <div className="text-6xl mb-6">🍽️</div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              About{' '}
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Feastly
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Delivering happiness, one meal at a time. We're revolutionizing food delivery 
              across the multiverse with cutting-edge technology and unmatched service.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-white text-lg">
              <div className="flex items-center space-x-2 bg-white bg-opacity-20 px-6 py-3 rounded-full backdrop-blur-sm">
                <span>🌍</span>
                <span>Multiverse Coverage</span>
              </div>
              <div className="flex items-center space-x-2 bg-white bg-opacity-20 px-6 py-3 rounded-full backdrop-blur-sm">
                <span>🔥</span>
                <span>1M+ Happy Customers</span>
              </div>
              <div className="flex items-center space-x-2 bg-white bg-opacity-20 px-6 py-3 rounded-full backdrop-blur-sm">
                <span>⭐</span>
                <span>4.9/5 Rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose Feastly?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            We're not just another food delivery app. We're your culinary companion, 
            bringing you the best dining experience right to your doorstep.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-blue-100 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Mission Section */}
      <div className="bg-white bg-opacity-10 backdrop-blur-lg py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Mission
              </h2>
              <p className="text-xl text-blue-100 mb-6 leading-relaxed">
                At Feastly, we believe that great food brings people together. Our mission is to 
                connect food lovers with their favorite restaurants, making delicious meals 
                accessible to everyone, everywhere.
              </p>
              <p className="text-lg text-blue-200 leading-relaxed">
                From the bustling streets of Earth to the far reaches of the multiverse, 
                we're committed to delivering not just food, but experiences that create 
                lasting memories.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-3xl p-8 text-center">
                <div className="text-6xl mb-4">🎆</div>
                <h3 className="text-2xl font-bold text-white mb-4">Quality Promise</h3>
                <p className="text-white text-lg">
                  Every meal delivered meets our highest standards of quality, 
                  freshness, and taste. Your satisfaction is our guarantee.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            ⭐ What Our Customers Say
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what some of our satisfied customers 
            from across the multiverse have to say about Feastly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-300 animate-bounce-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-4 shadow-lg">
                  {review.avatar}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-1">
                  {review.name}
                </h3>
                <p className="text-sm text-gray-500 mb-3">{review.role}</p>
                <div className="flex justify-center mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">⭐</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 text-center italic leading-relaxed">
                "{review.review}"
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-orange-500 to-pink-600 py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Culinary Journey?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Join millions of satisfied customers and discover why Feastly is the 
            multiverse's favorite food delivery platform.
          </p>
          <div className="flex justify-center">
            <button 
              onClick={() => window.location.href = '/'}
              className="bg-white text-orange-600 font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
