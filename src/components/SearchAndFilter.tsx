import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Search, Filter } from 'lucide-react';
import { ResourceCategory } from '../types';

const categoryOptions: { value: ResourceCategory | 'All'; label: string }[] = [
  { value: 'All', label: 'All Categories' },
  { value: 'Mathematics', label: 'Mathematics' },
  { value: 'Science', label: 'Science' },
  { value: 'Literature', label: 'Literature' },
  { value: 'History', label: 'History' },
  { value: 'Computer Science', label: 'Computer Science' },
  { value: 'Art', label: 'Art' },
  { value: 'Music', label: 'Music' },
  { value: 'Languages', label: 'Languages' },
  { value: 'Other', label: 'Other' },
];

interface SearchAndFilterProps {
  onSearch: (term: string) => void;
  onCategoryChange: (category: ResourceCategory | 'All') => void;
}

const SearchAndFilter = ({ onSearch, onCategoryChange }: SearchAndFilterProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState<ResourceCategory | 'All'>('All');
  const navigate = useNavigate();
  const location = useLocation();
  
  // Parse URL parameters on component mount
  useEffect(() => {
    console.log('Location search:', location.search);
    const searchParams = new URLSearchParams(location.search);
    const searchQuery = searchParams.get('search');
    const categoryQuery = searchParams.get('category') as ResourceCategory | 'All' | null;

    console.log('Parsed search query:', searchQuery);
    console.log('Parsed category query:', categoryQuery);

    if (searchQuery) {
      setSearchTerm(searchQuery);
      onSearch(searchQuery); // Ensure this is being called
    }

    if (categoryQuery && categoryOptions.some(option => option.value === categoryQuery)) {
      setCategory(categoryQuery);
      onCategoryChange(categoryQuery); // Ensure this is being called
    }
  }, [location.search, onSearch, onCategoryChange]);
  
  // Update URL when filters change
  const updateUrl = (search: string, category: ResourceCategory | 'All') => {
    const searchParams = new URLSearchParams();
    
    if (search) {
      searchParams.set('search', search);
    }
    
    if (category !== 'All') {
      searchParams.set('category', category);
    }
    
    const newUrl = searchParams.toString() 
      ? `${location.pathname}?${searchParams.toString()}` 
      : location.pathname;
      
    navigate(newUrl, { replace: true });
  };
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchTerm);
    updateUrl(searchTerm, category);
  };
  
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newCategory = e.target.value as ResourceCategory | 'All';
    setCategory(newCategory);
    onCategoryChange(newCategory);
    updateUrl(searchTerm, newCategory);
  };
  
  return (
    <div className="bg-gray-900/50 p-4 rounded-lg shadow-lg border border-gray-800 mb-6 backdrop-blur-sm">
      <div className="flex flex-col md:flex-row gap-4">
        <form onSubmit={handleSearch} className="flex-grow">
          <div className="relative">
            <input
              type="text"
              placeholder="Search resources..."
              className="w-full bg-slate-950 px-4 py-2 pr-10 border border-gray-700 rounded-lg 
                text-gray-200 placeholder-gray-500
                focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent
                transition-colors"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 
                text-gray-400 hover:text-purple-400 transition-colors"
            >
              <Search className="h-5 w-5" />
            </button>
          </div>
        </form>
        
        <div className="w-full md:w-64">
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 
              text-gray-400" />
            <select
              className="w-full pl-10 pr-4 py-2 bg-slate-950 border border-gray-700 rounded-lg 
                text-gray-200 appearance-none
                focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent
                transition-colors"
              value={category}
              onChange={handleCategoryChange}
            >
              {categoryOptions.map((option) => (
                <option 
                  key={option.value} 
                  value={option.value}
                  className="bg-gray-900 text-gray-200"
                >
                  {option.label}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg 
                className="h-4 w-4 text-gray-400" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M19 9l-7 7-7-7" 
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchAndFilter;