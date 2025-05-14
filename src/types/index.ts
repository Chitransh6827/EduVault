export type User = {
  id: string;
  email: string;
  name: string;
  avatar?: string;
};

export type ResourceCategory = 
  | 'Mathematics' 
  | 'Science' 
  | 'Literature' 
  | 'History' 
  | 'Computer Science'
  | 'Art'
  | 'Music'
  | 'Languages'
  | 'Other';

export type ResourceType = 
  | 'Document' 
  | 'Image' 
  | 'Video' 
  | 'Audio' 
  | 'Link';

export type AccessPermission = 'public' | 'private';

export type Resource = {
  id: string;
  title: string;
  description: string;
  category: ResourceCategory;
  resourceType: ResourceType;
  createdAt: string;
  updatedAt: string;
  accessPermission: AccessPermission;
  rating: number;
  ratingsCount: number;
  uploaderId: string;
  uploaderName: string;
  fileUrl?: string;
  thumbnailUrl?: string;
  links?: string[];
};

export type Rating = {
  resourceId: string;
  userId: string;
  rating: number;
  comment?: string;
  createdAt: string;
};