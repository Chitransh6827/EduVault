import { useResourceStore } from '../store/resourceStore';
import { ResourceCategory } from '../types';
import SearchAndFilter from '../components/SearchAndFilter';
import ResourceGrid from '../components/ResourceGrid';

const ResourcesPage = () => {
  const { setSearchTerm: storeSetSearchTerm, setCategoryFilter: storeSetCategoryFilter, filteredResources } = useResourceStore();
  
  
  // Handle search and filtering
  const handleSearch = (term: string) => {
    storeSetSearchTerm(term);
  };
  
  const handleCategoryChange = (category: ResourceCategory | 'All') => {
    storeSetCategoryFilter(category);
  };
  
  // Get filtered resources
  const resources = filteredResources();
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-100 mb-2">Academic Resources</h1>
          <p className="text-gray-400">
            Browse and search through our collection of educational materials
          </p>
        </div>
        
        <SearchAndFilter 
          onSearch={handleSearch} 
          onCategoryChange={handleCategoryChange} 
        />
        
        <ResourceGrid resources={resources} />
      </div>
    </div>
  );
};

export default ResourcesPage;