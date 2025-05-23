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
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogDetails from './pages/BlogDetails';
import Community from './pages/Community';
import FAQs from './pages/FAQs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

// Components
import Layout from './components/Layout';
import ProtectedRoute from './components/ProtectedRoute';
import OTPVerification from './components/OTPVerification';


function App() {
  const { checkAuth } = useAuthStore();
  const clientId = import.meta.env.REACT_APP_GOOGLE_CLIENT_ID as string; // Replace with your Google Client ID
  
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
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetails />} />
            <Route path="community" element={<Community />} />
            <Route path="faq" element={<FAQs />} />
            <Route path="privacy" element={<PrivacyPolicy />} />
            <Route path="terms" element={<TermsOfService />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </GoogleOAuthProvider>
  );
}

export default App;