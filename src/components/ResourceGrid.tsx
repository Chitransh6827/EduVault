import { Resource } from '../types';
import ResourceCard from './ResourceCard';

interface ResourceGridProps {
  resources: Resource[];
  onDelete?: (id: string) => void;
  showActions?: boolean;
}

const ResourceGrid = ({ resources, onDelete, showActions = false }: ResourceGridProps) => {
  if (resources.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-lg font-medium text-gray-700">No resources found</h3>
        <p className="mt-2 text-sm text-gray-500">Try changing your search criteria or upload new resources.</p>
      </div>
    );
  }
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {resources.map((resource) => (
        <ResourceCard 
          key={resource.id} 
          resource={resource} 
          onDelete={onDelete}
          showActions={showActions}
        />
      ))}
    </div>
  );
};

export default ResourceGrid;