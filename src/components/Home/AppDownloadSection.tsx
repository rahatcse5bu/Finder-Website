import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Smartphone, 
  Globe, 
  Download, 
  PlayCircle,
  Star,
  ArrowRight
} from 'lucide-react';

const AppDownloadSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Take Finder with You
                <span className="block text-blue-400">Anywhere, Anytime</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Download our mobile app for the best experience. Browse, search, 
                and connect with sellers, teachers, and property owners on the go.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Mobile Optimized</h4>
                  <p className="text-gray-400 text-sm">Seamless experience on all devices</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Offline Access</h4>
                  <p className="text-gray-400 text-sm">View saved listings without internet</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <PlayCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Instant Notifications</h4>
                  <p className="text-gray-400 text-sm">Get alerts for new listings and messages</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Star className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Quick Actions</h4>
                  <p className="text-gray-400 text-sm">Post ads and contact sellers instantly</p>
                </div>
              </div>
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#"
                className="flex items-center space-x-3 bg-white text-gray-900 px-6 py-4 rounded-xl hover:bg-gray-100 transition-colors group"
              >
                <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
                  <Download className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-xs text-gray-600">Download on the</div>
                  <div className="font-semibold">App Store</div>
                </div>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#"
                className="flex items-center space-x-3 bg-white text-gray-900 px-6 py-4 rounded-xl hover:bg-gray-100 transition-colors group"
              >
                <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
                  <Download className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-xs text-gray-600">Get it on</div>
                  <div className="font-semibold">Google Play</div>
                </div>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Web App Link */}
            <div className="pt-4">
              <p className="text-gray-400 text-sm mb-3">
                Prefer using a web browser?
              </p>
              <Link
                to="/web-app"
                className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span>Use Web App Instead</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Phone Mockup */}
          <div className="relative">
            <div className="relative z-10">
              {/* Phone Frame */}
              <div className="w-72 h-[600px] bg-gray-800 rounded-[3rem] p-3 mx-auto relative">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                  {/* Screen Content */}
                  <div className="h-full bg-gradient-to-b from-blue-500 to-purple-600 p-6 flex flex-col">
                    {/* Status Bar */}
                    <div className="flex justify-between items-center text-white text-sm mb-6">
                      <span>9:41</span>
                      <div className="flex space-x-1">
                        <div className="w-4 h-2 bg-white rounded-sm"></div>
                        <div className="w-4 h-2 bg-white rounded-sm"></div>
                        <div className="w-4 h-2 bg-white rounded-sm"></div>
                      </div>
                    </div>

                    {/* App Header */}
                    <div className="text-center mb-8">
                      <div className="w-16 h-16 bg-white rounded-2xl mx-auto mb-4 flex items-center justify-center">
                        <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                          F
                        </span>
                      </div>
                      <h3 className="text-white text-xl font-bold">Finder</h3>
                      <p className="text-blue-100 text-sm">Your trusted marketplace</p>
                    </div>

                    {/* Mock UI Elements */}
                    <div className="space-y-4 flex-1">
                      <div className="bg-white bg-opacity-20 rounded-xl p-4">
                        <div className="h-3 bg-white bg-opacity-50 rounded mb-2"></div>
                        <div className="h-2 bg-white bg-opacity-30 rounded"></div>
                      </div>
                      <div className="bg-white bg-opacity-20 rounded-xl p-4">
                        <div className="h-3 bg-white bg-opacity-50 rounded mb-2"></div>
                        <div className="h-2 bg-white bg-opacity-30 rounded"></div>
                      </div>
                      <div className="bg-white bg-opacity-20 rounded-xl p-4">
                        <div className="h-3 bg-white bg-opacity-50 rounded mb-2"></div>
                        <div className="h-2 bg-white bg-opacity-30 rounded"></div>
                      </div>
                    </div>

                    {/* Bottom Navigation */}
                    <div className="flex justify-around pt-4">
                      <div className="w-8 h-1 bg-white rounded"></div>
                      <div className="w-8 h-1 bg-white bg-opacity-50 rounded"></div>
                      <div className="w-8 h-1 bg-white bg-opacity-50 rounded"></div>
                      <div className="w-8 h-1 bg-white bg-opacity-50 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Background Decorations */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-10 right-10 w-20 h-20 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute bottom-20 left-10 w-16 h-16 bg-purple-500 rounded-full opacity-20 animate-pulse delay-300"></div>
              <div className="absolute top-1/2 right-5 w-12 h-12 bg-green-500 rounded-full opacity-20 animate-pulse delay-700"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600"></div>
      </div>
    </section>
  );
};

export default AppDownloadSection;
