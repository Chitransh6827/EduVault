import { Link } from 'react-router-dom';
import { useResourceStore } from '../store/resourceStore';
import { BookOpen, Upload, Search, Shield } from 'lucide-react';
import ResourceCard from '../components/ResourceCard';

const Home = () => {
  // Get the top-rated resources
  const resources = useResourceStore(state => 
    state.resources
      .filter(r => r.accessPermission === 'public')
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 3)
  );

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-800 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Welcome to EduVault
              </h1>
              <p className="text-xl mb-6 opacity-90">
                Discover a secure way to upload, access, and manage your academic resources. EduVault offers categorized solutions for streamlined resource management.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/signup"
                  className="px-6 py-3 bg-white text-purple-700 font-medium rounded-lg shadow-md hover:bg-gray-50 transition-colors text-center"
                >
                  Get Started
                </Link>
                <Link
                  to="/resources"
                  className="px-6 py-3 bg-transparent border border-white text-white font-medium rounded-lg hover:bg-white hover:bg-opacity-10 transition-colors text-center"
                >
                  Browse Resources
                </Link>
              </div>
            </div>
            
            <div className="order-1 md:order-2 flex justify-center">
              <img 
                src="https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg" 
                alt="Students studying together" 
                className="rounded-lg shadow-2xl max-h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-100">Key Features</h2>
            <p className="mt-4 text-xl text-gray-400">
              Everything you need to manage your educational resources
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-800">
              <div className="w-12 h-12 bg-slate-950 rounded-lg flex items-center justify-center mb-4">
                <Upload className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-200">Easy Uploads</h3>
              <p className="text-gray-400">
                Upload documents, images, videos, and other resource types with just a few clicks.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-800">
              <div className="w-12 h-12 bg-slate-950 rounded-lg flex items-center justify-center mb-4">
                <Search className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-200">Quick Search</h3>
              <p className="text-gray-400">
                Find exactly what you're looking for with advanced search and filtering capabilities.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-800">
              <div className="w-12 h-12 bg-slate-950 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-200">Organized Resources</h3>
              <p className="text-gray-400">
                Keep all your materials neatly categorized by subject, type, and importance.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-800">
              <div className="w-12 h-12 bg-slate-950 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-200">Access Control</h3>
              <p className="text-gray-400">
                Share resources publicly or keep them private with flexible access permissions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Resources Section */}
      <section className="py-16 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-100">Featured Resources</h2>
            <p className="mt-4 text-xl text-gray-400">
              Explore top-rated educational materials
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resources.map(resource => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/resources"
              className="px-6 py-3 bg-purple-700 text-white font-medium rounded-lg hover:bg-violet-800 transition-colors"
            >
              View All Resources
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-950 text-white py-16 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of students and educators who trust EduVault for their resource management needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="/signup"
                className="px-6 py-3 bg-purple-700 text-white font-medium rounded-lg hover:bg-violet-900 transition-colors text-center"
              >
                Create Account
              </Link>
              <Link
                to="/login"
                className="px-6 py-3 bg-transparent border border-white text-white font-medium rounded-lg hover:bg-white hover:bg-opacity-10 transition-colors text-center"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;