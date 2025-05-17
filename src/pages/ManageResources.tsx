import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, FilePlus, FileQuestion } from 'lucide-react';
import { useResourceStore } from '../store/resourceStore';
import { useAuthStore } from '../store/authStore';
import ResourceGrid from '../components/ResourceGrid';

const ManageResources = () => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [resourceToDelete, setResourceToDelete] = useState<string | null>(null);
  
  const { user } = useAuthStore();
  const { resources } = useResourceStore();
  
  // Filter resources to only show those uploaded by the current user
  const userResources = resources.filter(resource => resource.uploaderId === user?.id);
  
  const handleDeleteClick = (id: string) => {
    setResourceToDelete(id);
    setShowDeleteModal(true);
  };
  
  const confirmDelete = () => {
    if (resourceToDelete) {
      // TODO: Implement deleteResource in your resource store or handle deletion here
      // Example: deleteResource(resourceToDelete);
    }
    setShowDeleteModal(false);
    setResourceToDelete(null);
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-slate-950 text-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Manage Resources</h1>
            <p className="text-gray-400">
              View, edit, and manage your uploaded resources
            </p>
          </div>
          
          <Link
            to="/upload"
            className="inline-flex items-center px-4 py-2 bg-pink-600 text-white rounded-md hover:bg-pink-700"
          >
            <Plus className="h-5 w-5 mr-2" /> Upload New
          </Link>
        </div>
        
        {userResources.length > 0 ? (
          <ResourceGrid 
            resources={userResources} 
            onDelete={handleDeleteClick}
            showActions
          />
        ) : (
          <div className="bg-gray-800 rounded-lg shadow-md p-12 text-center">
            <div className="mx-auto w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-4">
              <FileQuestion className="h-8 w-8 text-pink-600" />
            </div>
            <h2 className="text-xl font-semibold mb-2">No resources yet</h2>
            <p className="text-gray-400 mb-6">
              You haven't uploaded any resources yet. Start by uploading your first resource.
            </p>
            <Link
              to="/upload"
              className="inline-flex items-center px-4 py-2 bg-pink-600 text-white rounded-md hover:bg-pink-700"
            >
              <FilePlus className="h-5 w-5 mr-2" /> Upload First Resource
            </Link>
          </div>
        )}
        
        {/* Delete Confirmation Modal */}
        {showDeleteModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-gray-800 rounded-lg p-6 max-w-md w-full">
              <h3 className="text-lg font-semibold mb-4">Confirm Deletion</h3>
              <p className="text-gray-400 mb-6">
                Are you sure you want to delete this resource? This action cannot be undone.
              </p>
              <div className="flex justify-end space-x-3">
                <button
                  onClick={() => setShowDeleteModal(false)}
                  className="px-4 py-2 border border-gray-600 rounded-md text-gray-300 hover:bg-gray-700"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmDelete}
                  className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageResources;