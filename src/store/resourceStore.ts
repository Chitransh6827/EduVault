import create from 'zustand';
import { Resource, ResourceCategory } from '../types';

// Mock image URLs from Pexels
const MOCK_IMAGES = [
  "https://images.pexels.com/photos/256517/pexels-photo-256517.jpeg",
  "https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg",
  "https://images.pexels.com/photos/2170/creative-desk-pens-school.jpg",
  "https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg",
  "https://images.pexels.com/photos/33283/stack-of-books-vintage-books-book-books.jpg",
  "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
  "https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg",
  "https://images.pexels.com/photos/3183132/pexels-photo-3183132.jpeg",
  "https://images.pexels.com/photos/3183186/pexels-photo-3183186.jpeg",
  "https://images.pexels.com/photos/3183190/pexels-photo-3183190.jpeg",
];

// Subject-related keywords for better search

// Initial resource data with enhanced descriptions for better search
const initialResources: Resource[] = [
  {
    id: '1',
    title: 'Calculus Basics',
    description: 'Introduction to calculus concepts including derivatives, integrals, limits, and mathematical functions. Perfect for beginners learning advanced mathematics and algebraic concepts.',
    category: 'Mathematics',
    resourceType: 'Document',
    createdAt: '2023-09-15T10:00:00Z',
    updatedAt: '2023-09-15T10:00:00Z',
    accessPermission: 'public',
    rating: 4.5,
    ratingsCount: 12,
    uploaderId: '1',
    uploaderName: 'Demo User',
    thumbnailUrl: MOCK_IMAGES[0],
  },
  {
    id: '2',
    title: 'World War II Overview',
    description: 'Comprehensive overview of World War II events, including key battles, historical figures, and the impact on modern civilization. Covers both European and Pacific theaters of the war.',
    category: 'History',
    resourceType: 'Document',
    createdAt: '2023-08-22T14:30:00Z',
    updatedAt: '2023-08-22T14:30:00Z',
    accessPermission: 'private',
    rating: 4.8,
    ratingsCount: 8,
    uploaderId: '1',
    uploaderName: 'Demo User',
    thumbnailUrl: MOCK_IMAGES[1],
  },
  {
    id: '3',
    title: 'Shakespeare\'s Sonnets Analysis',
    description: 'In-depth analysis of Shakespeare\'s most famous sonnets with detailed literary commentary. Includes poetic devices, themes, and historical context for English literature students.',
    category: 'Literature',
    resourceType: 'Document',
    createdAt: '2023-07-10T09:15:00Z',
    updatedAt: '2023-07-10T09:15:00Z',
    accessPermission: 'public',
    rating: 4.2,
    ratingsCount: 15,
    uploaderId: '2',
    uploaderName: 'Admin User',
    thumbnailUrl: MOCK_IMAGES[2],
  },
  {
    id: '4',
    title: 'Quantum Physics Principles',
    description: 'Introduction to quantum mechanics principles including wave-particle duality, uncertainty principle, and quantum states. Perfect for physics students and science enthusiasts studying modern physics.',
    category: 'Science',
    resourceType: 'Document',
    createdAt: '2023-10-05T16:45:00Z',
    updatedAt: '2023-10-05T16:45:00Z',
    accessPermission: 'public',
    rating: 4.7,
    ratingsCount: 23,
    uploaderId: '2',
    uploaderName: 'Admin User',
    thumbnailUrl: MOCK_IMAGES[3],
  },
  {
    id: '5',
    title: 'Introduction to Data Structures',
    description: 'Comprehensive guide to fundamental data structures in computer science including arrays, linked lists, trees, and graphs. Essential for programming and algorithm design.',
    category: 'Computer Science',
    resourceType: 'Document',
    createdAt: '2023-09-28T11:20:00Z',
    updatedAt: '2023-09-28T11:20:00Z',
    accessPermission: 'public',
    rating: 4.9,
    ratingsCount: 18,
    uploaderId: '1',
    uploaderName: 'Demo User',
    thumbnailUrl: MOCK_IMAGES[4],
  },
  {
    id: '6',
    title: 'Digital Art Fundamentals',
    description: 'Learn the basics of digital art creation including color theory, composition, digital brushwork, and industry-standard software tools. Perfect for aspiring digital artists and designers.',
    category: 'Art',
    resourceType: 'Video',
    createdAt: '2024-01-15T08:30:00Z',
    updatedAt: '2024-01-15T08:30:00Z',
    accessPermission: 'public',
    rating: 4.6,
    ratingsCount: 31,
    uploaderId: '2',
    uploaderName: 'Admin User',
    thumbnailUrl: MOCK_IMAGES[5],
  },
  {
    id: '7',
    title: 'Music Theory Essentials',
    description: 'Comprehensive guide to music theory including scales, chords, harmony, and composition techniques. Suitable for musicians of all levels looking to deepen their theoretical understanding.',
    category: 'Music',
    resourceType: 'Document',
    createdAt: '2024-02-01T14:20:00Z',
    updatedAt: '2024-02-01T14:20:00Z',
    accessPermission: 'public',
    rating: 4.8,
    ratingsCount: 25,
    uploaderId: '1',
    uploaderName: 'Demo User',
    thumbnailUrl: MOCK_IMAGES[6],
  },
  {
    id: '8',
    title: 'Spanish for Beginners',
    description: 'Complete Spanish language course for beginners covering vocabulary, grammar, pronunciation, and basic conversation skills. Includes audio exercises and practice materials.',
    category: 'Languages',
    resourceType: 'Audio',
    createdAt: '2024-02-15T09:45:00Z',
    updatedAt: '2024-02-15T09:45:00Z',
    accessPermission: 'public',
    rating: 4.7,
    ratingsCount: 42,
    uploaderId: '2',
    uploaderName: 'Admin User',
    thumbnailUrl: MOCK_IMAGES[7],
  },
  {
    id: '9',
    title: 'Machine Learning Fundamentals',
    description: 'Introduction to machine learning concepts, algorithms, and practical applications. Covers supervised and unsupervised learning, neural networks, and data preprocessing techniques.',
    category: 'Computer Science',
    resourceType: 'Document',
    createdAt: '2024-03-01T11:30:00Z',
    updatedAt: '2024-03-01T11:30:00Z',
    accessPermission: 'public',
    rating: 4.9,
    ratingsCount: 35,
    uploaderId: '1',
    uploaderName: 'Demo User',
    thumbnailUrl: MOCK_IMAGES[8],
  },
  {
    id: '10',
    title: 'Ancient Egyptian Civilization',
    description: 'Detailed exploration of ancient Egyptian history, culture, art, and architecture. Includes analysis of hieroglyphics, religious practices, and archaeological discoveries.',
    category: 'History',
    resourceType: 'Document',
    createdAt: '2024-03-10T16:15:00Z',
    updatedAt: '2024-03-10T16:15:00Z',
    accessPermission: 'public',
    rating: 4.8,
    ratingsCount: 28,
    uploaderId: '2',
    uploaderName: 'Admin User',
    thumbnailUrl: MOCK_IMAGES[9],
  }
];

interface ResourceStore {
  resources: Resource[];
  searchTerm: string;
  categoryFilter: ResourceCategory | 'All';
  setSearchTerm: (term: string) => void;
  setCategoryFilter: (category: ResourceCategory | 'All') => void;
  filteredResources: () => Resource[];
}

export const useResourceStore = create<ResourceStore>((set, get) => ({
  resources: initialResources,
  searchTerm: '',
  categoryFilter: 'All',
  setSearchTerm: (term) => set({ searchTerm: term }),
  setCategoryFilter: (category) => set({ categoryFilter: category }),
  filteredResources: () => {
    const { resources, searchTerm, categoryFilter } = get();
    const searchTermLower = searchTerm.toLowerCase();

    return resources.filter((resource) => {
      // Filter by category
      if (categoryFilter !== 'All' && resource.category !== categoryFilter) {
        return false;
      }

      // Filter by search term
      if (!searchTermLower) {
        return true;
      }

      return (
        resource.title.toLowerCase().includes(searchTermLower) ||
        resource.description.toLowerCase().includes(searchTermLower)
      );
    });
  },
}));