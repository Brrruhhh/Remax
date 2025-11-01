"use client";
import { useState } from 'react';
import { User, Mail, Lock, Eye, EyeOff } from 'lucide-react';

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSignUp = async () => {
    const { firstName, lastName, email, password } = formData;
    
    if (!firstName || !lastName || !email || !password) {
      alert('Please fill in all fields');
      return;
    }

    if (password.length < 6) {
      alert('Password must be at least 6 characters long');
      return;
    }

    setLoading(true);
    
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ firstName, lastName, email, password }),
      });
      
      const data = await response.json();
      
      if (data.success) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.data.user));
        
        alert('Account created successfully!');
        window.location.href = '/';
      } else {
        alert(data.message || 'Registration failed');
      }
    } catch (error) {
      console.error('Signup error:', error);
      alert('Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSignUp();
    }
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center py-12 px-4 relative"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      <div className="relative z-10 bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-12 w-full max-w-md border border-white/20">
        <div className="text-center mb-8">
          <div className="inline-flex items-baseline">
            <span className="text-sm align-top text-white">®</span>
            <span className="text-3xl font-bold">
              <span className="text-red-400">RE</span>
              <span className="text-white">MAX</span>
            </span>
          </div>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-white mb-2">Let's get started!</h1>
          <p className="text-gray-200 text-sm">Create your account</p>
        </div>

        <div className="mb-4">
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300" />
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              placeholder="First Name"
              className="w-full pl-12 pr-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:border-white/50 focus:bg-white/30 transition-all duration-300 text-white placeholder-gray-300 backdrop-blur-sm"
            />
          </div>
        </div>

        <div className="mb-4">
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300" />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              placeholder="Last Name"
              className="w-full pl-12 pr-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:border-white/50 focus:bg-white/30 transition-all duration-300 text-white placeholder-gray-300 backdrop-blur-sm"
            />
          </div>
        </div>

        <div className="mb-4">
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              placeholder="Email"
              className="w-full pl-12 pr-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:border-white/50 focus:bg-white/30 transition-all duration-300 text-white placeholder-gray-300 backdrop-blur-sm"
            />
          </div>
        </div>

        <div className="mb-4">
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300" />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              placeholder="Password"
              className="w-full pl-12 pr-12 py-3 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:border-white/50 focus:bg-white/30 transition-all duration-300 text-white placeholder-gray-300 backdrop-blur-sm"
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300 hover:text-white transition-colors"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
        </div>

        <div className="text-center mb-4">
          <p className="text-sm text-gray-200">
            Already have an account?{' '}
            <a href="/login" className="text-blue-200 hover:text-white font-medium transition-colors">
              Log In
            </a>
          </p>
        </div>

        <div className="mb-6">
          <p className="text-xs text-gray-300 leading-relaxed">
            By clicking "Sign Up" below, you are agreeing to the{' '}
            <a href="#" className="text-white underline hover:text-gray-200">Terms of Use</a> and{' '}
            <a href="#" className="text-white underline hover:text-gray-200">Privacy Policy</a> and are agreeing to receive marketing email messages from REMAX, LLC and/or marketing emails, calls or texts placed by or on behalf of your local RE/MAX franchised office, to any phone number and/or email address that you provided, even if your number is on a federal, state, or our internal Do Not Call List. You further agree that call/texts may be sent with an automated system for selection or dialing of numbers and/or for artificial or prerecorded voice. Please note: Consent is not a condition of purchase. Standard data and messaging rate may apply. You may unsubscribe at any time.
          </p>
        </div>

        <button
          onClick={handleSignUp}
          disabled={loading}
          className="w-full bg-white/20 backdrop-blur-sm border border-white/30 text-white py-3 rounded-lg font-semibold hover:bg-white/30 hover:border-white/50 transition-all duration-300 mb-6 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Creating Account...' : 'Sign Up'}
        </button>

        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/30"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-transparent px-4 text-sm text-gray-200 uppercase">Or sign in with</span>
          </div>
        </div>

        <div className="flex gap-3">
          <button className="flex-1 bg-white/20 backdrop-blur-sm border border-white/30 text-white py-3 rounded-lg font-medium hover:bg-white/30 hover:border-white/50 transition-all duration-300 flex items-center justify-center gap-2">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
            </svg>
            Apple
          </button>
          <button className="flex-1 bg-white/20 backdrop-blur-sm border border-white/30 text-white py-3 rounded-lg font-medium hover:bg-white/30 hover:border-white/50 transition-all duration-300 flex items-center justify-center gap-2">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Google
          </button>
        </div>
      </div>
    </div>
  );
}