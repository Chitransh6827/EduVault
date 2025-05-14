import { useState, useEffect, FormEvent, ChangeEvent } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Upload, ArrowLeft, FileText, Image, Video, Link as LinkIcon, File } from 'lucide-react';
import { useResourceStore } from '../store/resourceStore';
import { useAuthStore } from '../store/authStore';
import { ResourceCategory, ResourceType, AccessPermission } from '../types';

type FormData = {
  title: string;
  description: string;
  category: ResourceCategory;
  resourceType: ResourceType;
  accessPermission: AccessPermission;
  file: File | null;
  links: string[];
};

const UploadResource = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuthStore();
  const { resources, addResource, updateResource } = useResourceStore();
  
  // Extract the edit ID from the URL if present
  const searchParams = new URLSearchParams(location.search);
  const editId = searchParams.get('edit');
  const isEditMode = !!editId;
  
  // Find resource if in edit mode
  const resourceToEdit = isEditMode 
    ? resources.find(r => r.id === editId) 
    : null;
  
  // Initialize form state
  const [formData, setFormData] = useState<FormData>({
    title: '',
    description: '',
    category: 'Other',
    resourceType: 'Document',
    accessPermission: 'public',
    file: null,
    links: [''],
  });
  
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [currentLink, setCurrentLink] = useState('');
  
  // Load resource data if in edit mode
  useEffect(() => {
    if (resourceToEdit) {
      setFormData({
        title: resourceToEdit.title,
        description: resourceToEdit.description,
        category: resourceToEdit.category,
        resourceType: resourceToEdit.resourceType,
        accessPermission: resourceToEdit.accessPermission,
        file: null, // Can't pre-fill file input
        links: resourceToEdit.links || [''],
      });
    }
  }, [resourceToEdit]);
  
  // Handle input changes
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error for this field
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };
  
  // Handle file input
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, file: e.target.files![0] }));
      
      // Clear error for file field
      if (errors.file) {
        setErrors(prev => ({ ...prev, file: undefined }));
      }
    }
  };
  
  // Handle links
  const handleAddLink = () => {
    if (currentLink.trim()) {
      setFormData(prev => ({
        ...prev,
        links: [...prev.links.filter(Boolean), currentLink]
      }));
      setCurrentLink('');
    }
  };
  
  const handleRemoveLink = (index: number) => {
    setFormData(prev => ({
      ...prev,
      links: prev.links.filter((_, i) => i !== index)
    }));
  };
  
  // Form validation
  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    
    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
    }
    
    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    }
    
    // In a real app, we'd validate the file based on resource type
    // Here we just check if either a file or links are provided
    if (!formData.file && formData.links.filter(Boolean).length === 0) {
      newErrors.file = 'Please provide either a file or links';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  // Form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsLoading(true);
    
    try {
      // In a real app, we'd upload the file here
      // For this demo, we'll just simulate a successful upload
      
      // Create file URL (in a real app, this would be from a storage service)
      const fileUrl = formData.file 
        ? URL.createObjectURL(formData.file) 
        : undefined;
      
      if (isEditMode && editId) {
        // Update existing resource
        updateResource(editId, {
          title: formData.title,
          description: formData.description,
          category: formData.category,
          resourceType: formData.resourceType,
          accessPermission: formData.accessPermission,
          fileUrl,
          links: formData.links.filter(Boolean),
        });
      } else {
        // Add new resource
        addResource({
          title: formData.title,
          description: formData.description,
          category: formData.category,
          resourceType: formData.resourceType,
          accessPermission: formData.accessPermission,
          uploaderId: user?.id || '',
          uploaderName: user?.name || '',
          fileUrl,
          links: formData.links.filter(Boolean),
          thumbnailUrl: 'https://images.pexels.com/photos/256517/pexels-photo-256517.jpeg', // Default thumbnail
        });
      }
      
      // Navigate to the resources page
      navigate('/resources');
    } catch (error) {
      console.error('Error uploading resource:', error);
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Back Link */}
      <button
        onClick={() => navigate(-1)}
        className="inline-flex items-center text-sm text-gray-600 hover:text-pink-600 mb-6"
      >
        <ArrowLeft className="h-4 w-4 mr-1" /> Back
      </button>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          <div className="flex items-center mb-6">
            <Upload className="h-6 w-6 text-pink-600 mr-2" />
            <h1 className="text-2xl font-bold text-gray-900">
              {isEditMode ? 'Edit Resource' : 'Upload New Resource'}
            </h1>
          </div>
          
          <form onSubmit={handleSubmit}>
            {/* Title */}
            <div className="mb-4">
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                Title *
              </label>
              <input
                id="title"
                name="title"
                type="text"
                required
                value={formData.title}
                onChange={handleChange}
                className={`w-full px-3 py-2 border ${
                  errors.title ? 'border-red-500' : 'border-gray-300'
                } rounded-md focus:outline-none focus:ring-pink-500 focus:border-pink-500`}
                placeholder="Enter resource title"
              />
              {errors.title && (
                <p className="mt-1 text-sm text-red-500">{errors.title}</p>
              )}
            </div>
            
            {/* Description */}
            <div className="mb-4">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                Description *
              </label>
              <textarea
                id="description"
                name="description"
                rows={4}
                required
                value={formData.description}
                onChange={handleChange}
                className={`w-full px-3 py-2 border ${
                  errors.description ? 'border-red-500' : 'border-gray-300'
                } rounded-md focus:outline-none focus:ring-pink-500 focus:border-pink-500`}
                placeholder="Enter resource description"
              />
              {errors.description && (
                <p className="mt-1 text-sm text-red-500">{errors.description}</p>
              )}
            </div>
            
            {/* Category and Resource Type */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                  Category *
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-pink-500 focus:border-pink-500"
                >
                  <option value="Mathematics">Mathematics</option>
                  <option value="Science">Science</option>
                  <option value="Literature">Literature</option>
                  <option value="History">History</option>
                  <option value="Computer Science">Computer Science</option>
                  <option value="Art">Art</option>
                  <option value="Music">Music</option>
                  <option value="Languages">Languages</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="resourceType" className="block text-sm font-medium text-gray-700 mb-1">
                  Resource Type *
                </label>
                <select
                  id="resourceType"
                  name="resourceType"
                  value={formData.resourceType}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-pink-500 focus:border-pink-500"
                >
                  <option value="Document">Document</option>
                  <option value="Image">Image</option>
                  <option value="Video">Video</option>
                  <option value="Audio">Audio</option>
                  <option value="Link">Link</option>
                </select>
              </div>
            </div>
            
            {/* Access Permissions */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Access Permission *
              </label>
              <div className="flex items-center space-x-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="accessPermission"
                    value="public"
                    checked={formData.accessPermission === 'public'}
                    onChange={handleChange}
                    className="focus:ring-pink-500 h-4 w-4 text-pink-600 border-gray-300"
                  />
                  <span className="ml-2 text-sm text-gray-700">Public</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="accessPermission"
                    value="private"
                    checked={formData.accessPermission === 'private'}
                    onChange={handleChange}
                    className="focus:ring-pink-500 h-4 w-4 text-pink-600 border-gray-300"
                  />
                  <span className="ml-2 text-sm text-gray-700">Private</span>
                </label>
              </div>
              <p className="mt-1 text-xs text-gray-500">
                {formData.accessPermission === 'public' 
                  ? 'Anyone can view this resource' 
                  : 'Only you can view this resource'}
              </p>
            </div>
            
            {/* File Upload */}
            <div className="mb-6">
              <label htmlFor="file" className="block text-sm font-medium text-gray-700 mb-2">
                Upload File
              </label>
              <div className={`border-2 border-dashed ${
                errors.file ? 'border-red-300 bg-red-50' : 'border-gray-300 bg-gray-50'
              } rounded-lg p-6 text-center`}>
                <input
                  id="file"
                  name="file"
                  type="file"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <label htmlFor="file" className="cursor-pointer">
                  <div className="flex flex-col items-center justify-center">
                    {(() => {
                      switch (formData.resourceType) {
                        case 'Document':
                          return <FileText className="h-10 w-10 text-gray-400" />;
                        case 'Image':
                          return <Image className="h-10 w-10 text-gray-400" />;
                        case 'Video':
                          return <Video className="h-10 w-10 text-gray-400" />;
                        case 'Link':
                          return <LinkIcon className="h-10 w-10 text-gray-400" />;
                        default:
                          return <File className="h-10 w-10 text-gray-400" />;
                      }
                    })()}
                    
                    <p className="mt-2 text-sm text-gray-600">
                      {formData.file ? formData.file.name : 'Drag and drop a file, or click to select'}
                    </p>
                    <p className="mt-1 text-xs text-gray-500">
                      {formData.resourceType === 'Document' && 'PDF, DOCX, TXT up to 10MB'}
                      {formData.resourceType === 'Image' && 'JPG, PNG, GIF up to 5MB'}
                      {formData.resourceType === 'Video' && 'MP4, MOV up to 50MB'}
                      {formData.resourceType === 'Audio' && 'MP3, WAV up to 10MB'}
                    </p>
                  </div>
                </label>
              </div>
              {errors.file && (
                <p className="mt-1 text-sm text-red-500">{errors.file}</p>
              )}
            </div>
            
            {/* Resource Links */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Resource Links
              </label>
              
              <div className="space-y-2 mb-2">
                {formData.links.filter(Boolean).map((link, index) => (
                  <div key={index} className="flex items-center">
                    <input
                      type="text"
                      value={link}
                      readOnly
                      className="flex-grow px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
                    />
                    <button
                      type="button"
                      onClick={() => handleRemoveLink(index)}
                      className="ml-2 text-gray-500 hover:text-red-600"
                    >
                      <span className="sr-only">Remove</span>
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
              
              <div className="flex">
                <input
                  type="text"
                  value={currentLink}
                  onChange={(e) => setCurrentLink(e.target.value)}
                  className="flex-grow px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-pink-500 focus:border-pink-500"
                  placeholder="https://example.com/resource"
                />
                <button
                  type="button"
                  onClick={handleAddLink}
                  className="px-4 py-2 bg-gray-100 text-gray-700 border border-gray-300 border-l-0 rounded-r-md hover:bg-gray-200"
                >
                  Add
                </button>
              </div>
              <p className="mt-1 text-xs text-gray-500">
                Add links to external resources or references
              </p>
            </div>
            
            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={isLoading}
                className="px-6 py-2 bg-pink-600 text-white rounded-md hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 disabled:opacity-50"
              >
                {isLoading 
                  ? (isEditMode ? 'Updating...' : 'Uploading...') 
                  : (isEditMode ? 'Update Resource' : 'Upload Resource')}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UploadResource;