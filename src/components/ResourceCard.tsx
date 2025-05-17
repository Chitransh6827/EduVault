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
  const isOwner = user?.id === resource.uploaderId;

  // Default thumbnail if none provided
  const thumbnailUrl = resource.thumbnailUrl || 'https://images.pexels.com/photos/256517/pexels-photo-256517.jpeg';

  return (
    <div
      className="bg-gray-900 rounded-lg border border-gray-800 shadow-md hover:shadow-purple-900/20 overflow-hidden transition-all duration-300 hover:-translate-y-1"
    >
      <div className="relative h-36 bg-gray-800">
        <img
          src={thumbnailUrl}
          alt={resource.title}
          className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
        />
        <div className="absolute top-2 right-2 bg-gray-900 px-2 py-1 rounded-full text-[10px] font-medium text-purple-400 border border-gray-800">
          {resource.category}
        </div>
        <div className="absolute bottom-2 left-2 flex items-center bg-gray-900/90 text-gray-200 px-2 py-1 rounded-full text-[10px] border border-gray-800">
          <Star className="h-3 w-3 text-purple-400 mr-1" />
          <span>{resource.rating} ({resource.ratingsCount})</span>
        </div>
        {resource.accessPermission === 'private' && (
          <div className="absolute bottom-2 right-2 bg-gray-900/90 text-gray-200 px-2 py-1 rounded-full text-[10px] border border-gray-800">
            Private
          </div>
        )}
      </div>

      <div className="p-3">
        <h3 className="text-sm font-semibold text-gray-100 truncate">{resource.title}</h3>
        <p className="text-xs text-gray-400 mt-1 line-clamp-2">{resource.description}</p>

        <div className="mt-3 flex items-center justify-between">
          <span className="text-[10px] text-gray-500">
            {new Date(resource.createdAt).toLocaleDateString()}
          </span>

          <div className="flex space-x-2">
            <Link
              to={`/resources/${resource.id}`}
              className="px-2 py-1 text-[10px] font-medium text-purple-400 hover:text-purple-300 flex items-center"
            >
              <Eye className="h-3 w-3 mr-1" /> View
            </Link>

            {showActions && isOwner && (
              <>
                <Link
                  to={`/upload?edit=${resource.id}`}
                  className="px-2 py-1 text-[10px] font-medium text-blue-400 hover:text-blue-300 flex items-center"
                >
                  <Edit className="h-3 w-3 mr-1" /> Edit
                </Link>

                <button
                  onClick={() => onDelete && onDelete(resource.id)}
                  className="px-2 py-1 text-[10px] font-medium text-red-400 hover:text-red-300 flex items-center"
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