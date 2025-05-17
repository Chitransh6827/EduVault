import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BookOpen, Menu, X, Search, Upload, User, LogOut } from 'lucide-react';
import { useAuthStore } from '../store/authStore';

export interface User {
  id: string;
  name: string;
  email: string;
  // add other properties as needed
  isAdmin?: boolean;
}

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { user, isAuthenticated, logout } = useAuthStore() as { user: User | null, isAuthenticated: boolean, logout: () => void };
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/resources?search=${encodeURIComponent(searchQuery)}`);
    setSearchQuery('');
  };

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-gray-950 shadow-xl border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 text-xl font-bold text-white">
              <BookOpen className="h-6 w-6 text-purple-500" />
              <span>EduVault</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search resources..."
                className="w-64 px-4 py-2 pr-10 text-sm bg-slate-950 border border-gray-700 text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder-gray-400"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-purple-600"
              >
                <Search className="h-5 w-5" />
              </button>
            </form>

            <Link
              to="/resources"
              className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-purple-400"
            >
              Resources
            </Link>
            <Link
              to="/about"
              className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-purple-400"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-purple-400"
            >
              Contact
            </Link>

            {isAuthenticated ? (
              <>
                <Link
                  to="/upload"
                  className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-purple-400 flex items-center"
                >
                  <Upload className="h-4 w-4 mr-1" /> Upload
                </Link>
                <Link
                  to="/manage"
                  className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-purple-400"
                >
                  Manage
                </Link>
                {isAuthenticated && user?.isAdmin && (
                  <>
                    <Link
                      to="/admin"
                      className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-purple-400"
                    >
                      Admin
                    </Link>
                    <script>
                      console.log('Admin button rendered:', user?.isAdmin);
                    </script>
                  </>
                )}
                <div className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-300">
                  <User className="h-4 w-4" />
                  <span>{user?.name || 'User'}</span>
                </div>
                <div className="relative ml-3">
                  <button
                    onClick={handleLogout}
                    className="flex items-center px-3 py-2 text-sm font-medium text-gray-300 hover:text-purple-400"
                  >
                    <LogOut className="h-4 w-4 mr-1" /> Logout
                  </button>
                </div>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="px-4 py-2 text-sm font-medium text-purple-400 border border-purple-500 rounded-md hover:bg-purple-900 hover:bg-opacity-50"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="px-4 py-2 text-sm font-medium text-white bg-purple-700 rounded-md hover:bg-violet-800"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-purple-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <form onSubmit={handleSearch} className="relative mb-3">
              <input
                type="text"
                placeholder="Search resources..."
                className="w-full px-4 py-2 pr-10 text-sm bg-slate-950 border border-gray-700 text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder-gray-400"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-purple-600"
              >
                <Search className="h-5 w-5" />
              </button>
            </form>

            <Link
              to="/resources"
              className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-purple-400 hover:bg-gray-800 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Resources
            </Link>

            {isAuthenticated ? (
              <>
                <Link
                  to="/upload"
                  className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-purple-400 hover:bg-gray-800 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="flex items-center">
                    <Upload className="h-5 w-5 mr-2" /> Upload
                  </span>
                </Link>
                <Link
                  to="/manage"
                  className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-purple-400 hover:bg-gray-800 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Manage
                </Link>
                {isAuthenticated && user?.isAdmin && (
                  <Link
                    to="/admin"
                    className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-purple-400 hover:bg-gray-800 rounded-md"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Admin
                  </Link>
                )}
                <button
                  onClick={() => {
                    handleLogout();
                    setIsMenuOpen(false);
                  }}
                  className="w-full text-left block px-3 py-2 text-base font-medium text-gray-300 hover:text-purple-400 hover:bg-gray-800 rounded-md"
                >
                  <span className="flex items-center">
                    <LogOut className="h-5 w-5 mr-2" /> Logout
                  </span>
                </button>
              </>
            ) : (
              <div className="mt-4 flex flex-col space-y-2 px-3">
                <Link
                  to="/login"
                  className="w-full px-4 py-2 text-sm font-medium text-center text-purple-400 border border-purple-500 rounded-md hover:bg-purple-900 hover:bg-opacity-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="w-full px-4 py-2 text-sm font-medium text-center text-white bg-purple-700 rounded-md hover:bg-violet-800"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;