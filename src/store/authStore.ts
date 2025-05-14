import { create } from 'zustand';
import { User } from '../types';

type AuthStore = {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  isVerified: boolean;
  verificationEmail: string | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, name: string) => Promise<void>;
  logout: () => void;
  checkAuth: () => Promise<void>;
  verifyOTP: (otp: string) => Promise<void>;
  resendOTP: () => Promise<void>;
};

// Mock data for demo purposes
const mockUsers = [
  { id: '1', email: 'user@example.com', password: 'password', name: 'Demo User' },
  { id: '2', email: 'admin@example.com', password: 'admin123', name: 'Admin User' },
];

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  isAuthenticated: false,
  isLoading: true,
  isVerified: false,
  verificationEmail: null,
  
  login: async (email, password) => {
    set({ isLoading: true });
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 800));
    
    const user = mockUsers.find(u => u.email === email && u.password === password);
    
    if (!user) {
      set({ isLoading: false });
      throw new Error('Invalid email or password');
    }
    
    const { password: _, ...userWithoutPassword } = user;
    
    // Store user in localStorage for persistence
    localStorage.setItem('user', JSON.stringify(userWithoutPassword));
    
    set({ 
      user: userWithoutPassword, 
      isAuthenticated: true, 
      isLoading: false,
      isVerified: true 
    });
  },
  
  signup: async (email, password, name) => {
    set({ isLoading: true });
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Check if user already exists
    if (mockUsers.some(u => u.email === email)) {
      set({ isLoading: false });
      throw new Error('User with this email already exists');
    }
    
    // Store email for OTP verification
    set({ 
      verificationEmail: email,
      isLoading: false 
    });
    
    // In a real app, this would trigger sending an OTP email
    console.log('Sending OTP to:', email);
  },
  
  verifyOTP: async (otp: string) => {
    set({ isLoading: true });
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Mock OTP verification (in a real app, this would validate against a backend)
    if (otp === '123456') {
      const { verificationEmail } = useAuthStore.getState();
      
      if (!verificationEmail) {
        throw new Error('No email to verify');
      }
      
      const newUser = {
        id: String(mockUsers.length + 1),
        email: verificationEmail,
        name: 'New User'
      };
      
      mockUsers.push({ ...newUser, password: 'password' });
      
      // Store user in localStorage
      localStorage.setItem('user', JSON.stringify(newUser));
      
      set({ 
        user: newUser,
        isAuthenticated: true,
        isVerified: true,
        verificationEmail: null,
        isLoading: false 
      });
    } else {
      set({ isLoading: false });
      throw new Error('Invalid verification code');
    }
  },
  
  resendOTP: async () => {
    set({ isLoading: true });
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 800));
    
    const { verificationEmail } = useAuthStore.getState();
    
    if (!verificationEmail) {
      throw new Error('No email to send OTP');
    }
    
    // In a real app, this would trigger sending a new OTP email
    console.log('Resending OTP to:', verificationEmail);
    
    set({ isLoading: false });
  },
  
  logout: () => {
    localStorage.removeItem('user');
    set({ 
      user: null, 
      isAuthenticated: false,
      isVerified: false,
      verificationEmail: null 
    });
  },
  
  checkAuth: async () => {
    const storedUser = localStorage.getItem('user');
    
    if (storedUser) {
      set({ 
        user: JSON.parse(storedUser), 
        isAuthenticated: true,
        isVerified: true,
        isLoading: false 
      });
    } else {
      set({ isLoading: false });
    }
  }
}));