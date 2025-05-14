import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Eye, Edit, Trash2 } from 'lucide-react';
import { Resource } from '../types';
import { useAuthStore } from '../store/authStore';

interface ResourceCardProps {
  resource: Resource;
  onDelete?: (id: string) => void;
  showActions?: boolean;
}

const ResourceCard = ({ resource, onDelete, showActions = false }: ResourceCardProps) => {
  const { user } = useAuthStore();
  const [isHovered, setIsHovered] = useState(false);
  
  const isOwner = user?.id === resource.uploaderId;
  
  // Default thumbnail if none provided
  const thumbnailUrl = resource.thumbnailUrl || 'https://images.pexels.com/photos/256517/pexels-photo-256517.jpeg';
  
  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 bg-gray-200">
        <img 
          src={thumbnailUrl} 
          alt={resource.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded-full text-xs font-medium">
          {resource.category}
        </div>
        <div className="absolute bottom-2 left-2 flex items-center bg-black bg-opacity-60 text-white px-2 py-1 rounded-full text-xs">
          <Star className="h-3 w-3 text-yellow-400 mr-1" />
          <span>{resource.rating} ({resource.ratingsCount})</span>
        </div>
        {resource.accessPermission === 'private' && (
          <div className="absolute bottom-2 right-2 bg-gray-800 text-white px-2 py-1 rounded-full text-xs">
            Private
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 truncate">{resource.title}</h3>
        <p className="text-sm text-gray-600 mt-1 line-clamp-2">{resource.description}</p>
        
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xs text-gray-500">
            {new Date(resource.createdAt).toLocaleDateString()}
          </span>
          
          <div className="flex space-x-2">
            <Link 
              to={`/resources/${resource.id}`}
              className="px-3 py-1 text-xs font-medium text-pink-600 hover:text-pink-700 flex items-center"
            >
              <Eye className="h-3 w-3 mr-1" /> View
            </Link>
            
            {showActions && isOwner && (
              <>
                <Link 
                  to={`/upload?edit=${resource.id}`}
                  className="px-3 py-1 text-xs font-medium text-blue-600 hover:text-blue-700 flex items-center"
                >
                  <Edit className="h-3 w-3 mr-1" /> Edit
                </Link>
                
                <button
                  onClick={() => onDelete && onDelete(resource.id)}
                  className="px-3 py-1 text-xs font-medium text-red-600 hover:text-red-700 flex items-center"
                >
                  <Trash2 className="h-3 w-3 mr-1" /> Delete
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceCard;