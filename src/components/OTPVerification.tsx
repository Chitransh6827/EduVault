import { useState, useEffect } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import OtpInput from 'react-otp-input';

interface OTPVerificationProps {
  email: string;
  onVerify: (otp: string) => void;
  onResend: () => void;
  error?: string;
}

const OTPVerification = ({ email, onVerify, onResend, error }: OTPVerificationProps) => {
  const [otp, setOtp] = useState('');
  const [timeLeft, setTimeLeft] = useState(30);
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    if (timeLeft > 0 && !canResend) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !canResend) {
      setCanResend(true);
    }
  }, [timeLeft, canResend]);

  const handleResend = () => {
    setOtp('');
    setTimeLeft(30);
    setCanResend(false);
    onResend();
  };

  const handleVerify = () => {
    if (otp.length === 6) {
      onVerify(otp);
    }
  };

  const handleGoogleLoginSuccess = (response: any) => {
    console.log('Google Login Success:', response);
    // You can send the token to your backend for verification
  };

  const handleGoogleLoginFailure = (error: any) => {
    console.error('Google Login Failed:', error);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
        Verify Your Email
      </h2>
      
      <p className="text-gray-600 text-center mb-6">
        We've sent a verification code to<br />
        <span className="font-medium text-gray-900">{email}</span>
      </p>

      <div className="mb-6">
        <OtpInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderInput={(props) => (
            <input
              {...props}
              className="w-12 h-12 text-center border border-gray-300 rounded-md mx-1 text-xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            />
          )}
          containerStyle="flex justify-center space-x-2"
        />
      </div>

      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md text-sm text-center">
          {error}
        </div>
      )}

      <button
        onClick={handleVerify}
        disabled={otp.length !== 6}
        className="w-full px-4 py-2 bg-pink-600 text-white font-medium rounded-md hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 disabled:opacity-50 disabled:cursor-not-allowed mb-4"
      >
        Verify Email
      </button>

      <div className="text-center mb-4">
        <p className="text-sm text-gray-600 mb-2">
          Didn't receive the code?
        </p>
        {canResend ? (
          <button
            onClick={handleResend}
            className="text-pink-600 hover:text-pink-700 font-medium text-sm"
          >
            Resend Code
          </button>
        ) : (
          <p className="text-sm text-gray-500">
            Resend code in {timeLeft} seconds
          </p>
        )}
      </div>

      <div className="text-center">
        <GoogleLogin
          onSuccess={handleGoogleLoginSuccess}
          onError={handleGoogleLoginFailure}
        />
      </div>
    </div>
  );
};

export default OTPVerification;