import React, { useState } from 'react';
import { Search, MapPin, Filter, ChevronDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');

  const categories = [
    { id: 'all', name: 'All Services', color: 'bg-gray-100 text-gray-700' },
    { id: 'land', name: 'Land', color: 'bg-blue-100 text-blue-700' },
    { id: 'tuition', name: 'Tuition', color: 'bg-green-100 text-green-700' },
    { id: 'to-let', name: 'To-Let', color: 'bg-purple-100 text-purple-700' },
    { id: 'buy-rent', name: 'Buy/Rent', color: 'bg-orange-100 text-orange-700' },
  ];

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-12 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Find Everything You Need in
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {' '}One Place
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Connect with trusted sellers, teachers, landlords, and property owners. 
            Your marketplace for land, education, housing, and more.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                    : category.color + ' hover:shadow-md'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="bg-white rounded-2xl shadow-xl p-6 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              {/* Search Input */}
              <div className="md:col-span-5">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="What are you looking for?"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500"
                  />
                </div>
              </div>

              {/* Location Input */}
              <div className="md:col-span-4">
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Location (City, Area)"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500"
                  />
                </div>
              </div>

              {/* Filter & Search Button */}
              <div className="md:col-span-3 flex gap-2">
                <button className="flex items-center justify-center px-4 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
                  <Filter className="w-5 h-5 text-gray-600" />
                </button>
                <button className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl">
                  Search
                </button>
              </div>
            </div>

            {/* Quick Suggestions */}
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="text-sm text-gray-500">Popular:</span>
              {['House for rent in Dhaka', 'Math tutor', 'Land in Sylhet', 'Studio apartment'].map((suggestion) => (
                <button
                  key={suggestion}
                  className="text-sm text-blue-600 hover:text-blue-800 hover:underline"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 mb-2">10K+</div>
            <div className="text-gray-600">Active Listings</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 mb-2">5K+</div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 mb-2">50+</div>
            <div className="text-gray-600">Cities Covered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 mb-2">99%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-purple-200 rounded-full opacity-20 animate-pulse delay-300"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-green-200 rounded-full opacity-20 animate-pulse delay-700"></div>
        <div className="absolute bottom-40 right-1/3 w-24 h-24 bg-orange-200 rounded-full opacity-20 animate-pulse delay-500"></div>
      </div>
    </section>
  );
};

export default HeroSection;
