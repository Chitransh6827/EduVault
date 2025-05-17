import { Link } from 'react-router-dom';
import { Home, Search } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-slate-950 text-gray-100 flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-7xl font-bold text-pink-500 mb-4">404</h1>
        <h2 className="text-3xl font-bold text-gray-100 mb-4">Page Not Found</h2>
        <p className="text-lg text-gray-400 mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>

        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link
            to="/"
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700"
          >
            <Home className="h-5 w-5 mr-2" /> Go to Homepage
          </Link>
          <Link
            to="/resources"
            className="inline-flex items-center justify-center px-5 py-3 border border-gray-700 text-base font-medium rounded-md text-gray-100 bg-gray-800 hover:bg-gray-700"
          >
            <Search className="h-5 w-5 mr-2" /> Browse Resources
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;