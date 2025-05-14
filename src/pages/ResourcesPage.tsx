import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useResourceStore } from '../store/resourceStore';
import { ResourceCategory } from '../types';
import SearchAndFilter from '../components/SearchAndFilter';
import ResourceGrid from '../components/ResourceGrid';

const ResourcesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<ResourceCategory | 'All'>('All');
  
  const { setSearchTerm: storeSetSearchTerm, setCategoryFilter: storeSetCategoryFilter, filteredResources } = useResourceStore();
  
  const location = useLocation();
  
  // Handle search and filtering
  const handleSearch = (term: string) => {
    setSearchTerm(term);
    storeSetSearchTerm(term);
  };
  
  const handleCategoryChange = (category: ResourceCategory | 'All') => {
    setCategoryFilter(category);
    storeSetCategoryFilter(category);
  };
  
  // Get filtered resources
  const resources = filteredResources();
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Academic Resources</h1>
        <p className="text-gray-600">
          Browse and search through our collection of educational materials
        </p>
      </div>
      
      <SearchAndFilter 
        onSearch={handleSearch} 
        onCategoryChange={handleCategoryChange} 
      />
      
      <ResourceGrid resources={resources} />
    </div>
  );
};

export default ResourcesPage;