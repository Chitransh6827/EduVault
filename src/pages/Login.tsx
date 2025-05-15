import { useState, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { LogIn } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const { login } = useAuthStore();
  const navigate = useNavigate();
  
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    
    try {
      await login(email, password);
      navigate('/resources');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to log in');
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-900'>
    <div className="max-w-md mx-auto mt-16 bg-gray-900 px-4 sm:px-0 pb-10">
      <div className="bg-gray-900 rounded-lg shadow-xl border border-gray-800 overflow-hidden">
        <div className="px-6 py-8">
          <div className="text-center mb-8">
            <LogIn className="mx-auto h-12 w-12 text-purple-500" />
            <h2 className="mt-4 text-2xl font-bold text-gray-100">Welcome back</h2>
            <p className="mt-2 text-sm text-gray-400">
              Sign in to your EduVault account to access your resources
            </p>
          </div>
          
          {error && (
            <div className="mb-4 p-3 bg-red-900/50 text-red-200 border border-red-800 rounded-md text-sm">
              {error}
            </div>
          )}
          
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 bg-slate-950 border border-gray-700 text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder-gray-500"
                placeholder="you@example.com"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
                Password
              </label>
              <input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 bg-slate-950 border border-gray-700 text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder-gray-500"
                placeholder="•••••••••"
              />
            </div>
            
            <button
              type="submit"
              disabled={isLoading}
              className="w-full px-4 py-2 bg-purple-700 text-white font-medium rounded-md hover:bg-violet-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isLoading ? 'Signing in...' : 'Sign in'}
            </button>
          </form>
        </div>
        
        <div className="px-6 py-4 bg-gray-950 border-t border-gray-800">
          <p className="text-sm text-center text-gray-400">
            Don't have an account?{' '}
            <Link to="/signup" className="font-medium text-purple-400 hover:text-purple-300">
              Sign up
            </Link>
          </p>
        </div>
      </div>
      
      {/* Demo account info */}
      <div className="mt-6 p-4 bg-gray-900/90 rounded-lg border border-gray-800">
        <h3 className="text-sm font-medium text-purple-400 mb-2">Demo Accounts</h3>
        <p className="text-xs text-gray-400 mb-1">Email: user@example.com | Password: password</p>
        <p className="text-xs text-gray-400">Email: admin@example.com | Password: admin123</p>
      </div>
    </div>
    </div>
  );
};

export default Login;