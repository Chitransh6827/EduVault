import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { CalendarClock, User, Download, Edit, Trash2, ArrowLeft } from 'lucide-react';
import { useResourceStore } from '../store/resourceStore';
import { useAuthStore } from '../store/authStore';
import StarRating from '../components/StarRating';

const ResourceDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { resources, rateResource, deleteResource } = useResourceStore();
  const { user, isAuthenticated } = useAuthStore();
  
  const [userRating, setUserRating] = useState(0);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  
  // Find the resource by ID
  const resource = resources.find(r => r.id === id);
  
  // Check if user is the owner of the resource
  const isOwner = user?.id === resource?.uploaderId;
  
  const handleRating = (rating: number) => {
    if (!id || !isAuthenticated) return;
    
    setUserRating(rating);
    rateResource(id, rating);
  };
  
  const handleDelete = () => {
    if (!id) return;
    
    deleteResource(id);
    navigate('/resources');
  };
  
  if (!resource) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h2 className="text-2xl font-bold text-gray-100 mb-4">Resource not found</h2>
        <p className="text-gray-400 mb-6">
          The resource you're looking for doesn't exist or has been removed.
        </p>
        <Link
          to="/resources"
          className="inline-flex items-center px-4 py-2 bg-purple-700 text-white rounded-md hover:bg-purple-800 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" /> Back to resources
        </Link>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-slate-950 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          to="/resources"
          className="inline-flex items-center text-sm text-gray-400 hover:text-purple-400 mb-6 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-1" /> Back to resources
        </Link>
        
        <div className="bg-gray-900 rounded-lg shadow-xl border border-gray-800 overflow-hidden">
          {/* Resource Header */}
          <div className="relative h-64 bg-gray-800">
            {resource.thumbnailUrl && (
              <img 
                src={resource.thumbnailUrl} 
                alt={resource.title}
                className="w-full h-full object-cover opacity-90"
              />
            )}
            
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent flex items-end">
              <div className="p-6">
                <div className="mb-2">
                  <span className="px-2 py-1 bg-purple-700 text-white text-xs font-medium rounded-full">
                    {resource.category}
                  </span>
                  {resource.accessPermission === 'private' && (
                    <span className="ml-2 px-2 py-1 bg-gray-800 text-gray-300 text-xs font-medium rounded-full border border-gray-700">
                      Private
                    </span>
                  )}
                </div>
                <h1 className="text-3xl font-bold text-gray-100">{resource.title}</h1>
              </div>
            </div>
          </div>
          
          {/* Resource Info */}
          <div className="p-6">
            <div className="flex flex-wrap items-center text-sm text-gray-400 mb-6 gap-y-2">
              <div className="flex items-center mr-6">
                <User className="h-4 w-4 mr-2 text-purple-400" />
                <span>Uploaded by {resource.uploaderName}</span>
              </div>
              <div className="flex items-center mr-6">
                <CalendarClock className="h-4 w-4 mr-2 text-purple-400" />
                <span>
                  {new Date(resource.createdAt).toLocaleDateString(undefined, {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              </div>
              <div className="flex items-center">
                <StarRating initialRating={resource.rating} readOnly size="sm" />
                <span className="ml-2">({resource.ratingsCount} ratings)</span>
              </div>
            </div>
            
            {/* Description */}
            <div className="prose prose-invert max-w-none mb-8">
              <h2 className="text-xl font-semibold text-gray-100 mb-3">Description</h2>
              <p className="text-gray-300">{resource.description}</p>
            </div>
            
            {/* Rating */}
            <div className="border-t border-gray-800 pt-6 mb-6">
              <h2 className="text-xl font-semibold text-gray-100 mb-4">Rate this resource</h2>
              {isAuthenticated ? (
                <div className="flex items-center">
                  <StarRating 
                    initialRating={userRating} 
                    onRatingChange={handleRating} 
                    size="lg"
                  />
                  <span className="ml-3 text-sm text-gray-400">
                    {userRating > 0 
                      ? 'Thanks for rating!' 
                      : 'Click to rate this resource'}
                  </span>
                </div>
              ) : (
                <div className="bg-gray-800/50 p-4 rounded-md text-sm text-gray-300 border border-gray-700">
                  <p>
                    <Link to="/login" className="text-purple-400 hover:text-purple-300 font-medium">
                      Sign in
                    </Link> to rate this resource.
                  </p>
                </div>
              )}
            </div>
            
            {/* Actions */}
            <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-800">
              {resource.fileUrl && (
                <a
                  href={resource.fileUrl}
                  download
                  className="inline-flex items-center px-4 py-2 bg-emerald-700 text-white rounded-md hover:bg-emerald-800 transition-colors"
                >
                  <Download className="h-4 w-4 mr-2" /> Download
                </a>
              )}
              
              {isOwner && (
                <>
                  <Link
                    to={`/upload?edit=${resource.id}`}
                    className="inline-flex items-center px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition-colors"
                  >
                    <Edit className="h-4 w-4 mr-2" /> Edit
                  </Link>
                  
                  {!showDeleteConfirm ? (
                    <button
                      onClick={() => setShowDeleteConfirm(true)}
                      className="inline-flex items-center px-4 py-2 bg-red-700 text-white rounded-md hover:bg-red-800 transition-colors"
                    >
                      <Trash2 className="h-4 w-4 mr-2" /> Delete
                    </button>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-300">Confirm delete?</span>
                      <button
                        onClick={handleDelete}
                        className="px-3 py-1 bg-red-700 text-white text-sm rounded-md hover:bg-red-800 transition-colors"
                      >
                        Yes
                      </button>
                      <button
                        onClick={() => setShowDeleteConfirm(false)}
                        className="px-3 py-1 bg-gray-700 text-gray-200 text-sm rounded-md hover:bg-gray-600 transition-colors"
                      >
                        No
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceDetails;