import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, 
  GraduationCap, 
  Building, 
  MapPin, 
  ArrowRight,
  Users,
  TrendingUp,
  Shield
} from 'lucide-react';

const ServicesSection: React.FC = () => {
  const services = [
    {
      id: 'land',
      title: 'Land Buy/Sell',
      description: 'Find prime land opportunities or sell your property with trusted buyers across Bangladesh.',
      icon: MapPin,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600',
      features: ['Verified Listings', 'Legal Documentation', 'Price Analysis', 'Location Insights'],
      stats: '2.5K+ Properties',
      path: '/land'
    },
    {
      id: 'tuition',
      title: 'Tuition Services',
      description: 'Connect with qualified teachers or find students for personalized education solutions.',
      icon: GraduationCap,
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600',
      features: ['Qualified Teachers', 'Flexible Scheduling', 'Subject Expertise', 'Progress Tracking'],
      stats: '3.2K+ Tutors',
      path: '/tuition'
    },
    {
      id: 'to-let',
      title: 'To-Let Rentals',
      description: 'Discover comfortable rental spaces or list your property for reliable tenants.',
      icon: Home,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600',
      features: ['Furnished Options', 'Flexible Terms', 'Verified Owners', 'Virtual Tours'],
      stats: '1.8K+ Rentals',
      path: '/to-let'
    },
    {
      id: 'buy-rent',
      title: 'House Buy/Rent',
      description: 'Find your dream home to buy or rent, or list your property for serious buyers.',
      icon: Building,
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-600',
      features: ['Home Inspection', 'Mortgage Assistance', 'Neighborhood Info', 'Investment Analysis'],
      stats: '4.1K+ Properties',
      path: '/buy-rent'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Everything You Need in One Platform
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Whether you're buying, selling, teaching, or learning - we've got you covered 
            with our comprehensive marketplace services.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group bg-white rounded-2xl border border-gray-100 hover:border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="p-8">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`p-4 rounded-2xl ${service.bgColor} group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-8 h-8 ${service.textColor}`} />
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-gray-500">Active</div>
                      <div className={`text-lg font-bold ${service.textColor}`}>
                        {service.stats}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color}`}></div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link
                    to={service.path}
                    className={`inline-flex items-center space-x-2 bg-gradient-to-r ${service.color} text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all group-hover:translate-x-1`}
                  >
                    <span>Explore {service.title}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust Indicators */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Verified Listings</h4>
              <p className="text-gray-600 text-sm">All posts are verified for authenticity and quality</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Trusted Community</h4>
              <p className="text-gray-600 text-sm">Join thousands of satisfied users nationwide</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Growing Platform</h4>
              <p className="text-gray-600 text-sm">Constantly expanding with new features and services</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
