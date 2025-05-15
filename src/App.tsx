import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { useAuthStore } from './store/authStore';

// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ResourcesPage from './pages/ResourcesPage';
import ResourceDetails from './pages/ResourceDetails';
import UploadResource from './pages/UploadResource';
import ManageResources from './pages/ManageResources';
import NotFound from './pages/NotFound';

// Components
import Layout from './components/Layout';
import ProtectedRoute from './components/ProtectedRoute';
import OTPVerification from './components/OTPVerification';


function App() {
  const { checkAuth } = useAuthStore();
<<<<<<< HEAD
  const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID as string; // Replace with your Google Client ID
  console.log('Google Client ID:', clientId); // Debugging the client ID
=======
  const clientId = import.meta.env.REACT_APP_GOOGLE_CLIENT_ID as string; // Replace with your Google Client ID
>>>>>>> 3a97da6ad86f376edb7c6d78d5342776ca4250f7
  
  // Check for existing authentication on app load
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);
  
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="resources" element={<ResourcesPage />} />
            <Route path="resources/:id" element={<ResourceDetails />} />
            <Route path="/verify-email" element={<OTPVerification 
              email=""
              onVerify={(otp) => console.log('Verify OTP:', otp)}
              onResend={() => console.log('Resend OTP')}
            />} />
            <Route 
              path="upload" 
              element={
                <ProtectedRoute>
                  <UploadResource />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="manage" 
              element={
                <ProtectedRoute>
                  <ManageResources />
                </ProtectedRoute>
              } 
            />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </GoogleOAuthProvider>
  );
}

export default App;