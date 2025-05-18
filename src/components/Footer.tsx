import { Link } from 'react-router-dom';
import { BookOpen, Twitter, Facebook, Linkedin, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-950 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center space-x-2 text-xl font-bold text-white mb-4">
              <BookOpen className="h-6 w-6 text-purple-500" />
              <span>EduVault</span>
            </Link>
            <p className="text-sm text-gray-400 mb-4">
              A secure platform for uploading, sharing, and managing educational resources. Join our community of educators and learners.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com/eduvault" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-purple-400">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://facebook.com/eduvault" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-purple-400">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://instagram.com/eduvault" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-purple-400">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com/company/eduvault" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-purple-400">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://youtube.com/eduvault" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-purple-400">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-200 mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/resources?category=Mathematics" className="text-gray-400 hover:text-purple-400 text-sm">
                  Mathematics
                </Link>
              </li>
              <li>
                <Link to="/resources?category=Science" className="text-gray-400 hover:text-purple-400 text-sm">
                  Science
                </Link>
              </li>
              <li>
                <Link to="/resources?category=Literature" className="text-gray-400 hover:text-purple-400 text-sm">
                  Literature
                </Link>
              </li>
              <li>
                <Link to="/resources?category=History" className="text-gray-400 hover:text-purple-400 text-sm">
                  History
                </Link>
              </li>
              <li>
                <Link to="/resources?category=Computer Science" className="text-gray-400 hover:text-purple-400 text-sm">
                  Computer Science
                </Link>
              </li>
              <li>
                <Link to="/resources?category=Languages" className="text-gray-400 hover:text-purple-400 text-sm">
                  Languages
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-200 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-purple-400 text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-purple-400 text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/community" className="text-gray-400 hover:text-purple-400 text-sm">
                  Community
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-200 mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-purple-400 text-sm">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-purple-400 text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-purple-400 text-sm">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-purple-400 text-sm">
                  Contact Support
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400 mb-4 md:mb-0">
              &copy; {currentYear} EduVault. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-sm text-gray-400 hover:text-purple-400">
                Privacy
              </Link>
              <Link to="/terms" className="text-sm text-gray-400 hover:text-purple-400">
                Terms
              </Link>
              <Link to="/cookies" className="text-sm text-gray-400 hover:text-purple-400">
                Cookies
              </Link>
              <Link to="/sitemap" className="text-sm text-gray-400 hover:text-purple-400">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;