import { createContext, useState, useContext, useEffect } from 'react';
import { authAPI } from '../services/api';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check if user is logged in on app start
  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const response = await authAPI.getMe();
        setUser(response.data.data);
      } catch (error) {
        console.error('Auth check failed:', error);
        localStorage.removeItem('token');
      }
    }
    setLoading(false);
  };

  const register = async (userData) => {
    try {
      console.log('🔧 [DEBUG] Attempting registration with:', userData);
      
      const response = await authAPI.register(userData);
      console.log('🔧 [DEBUG] Registration response:', response.data);
      
      if (response.data.success) {
        const { data } = response.data;
        localStorage.setItem('token', data.token);
        setUser(data);
        return { success: true };
      } else {
        // Handle case where backend returns success: false
        console.error('🔧 [DEBUG] Registration failed on backend:', response.data);
        return { 
          success: false, 
          error: response.data.message || 'Registration failed on server' 
        };
      }
    } catch (error) {
      console.error('🔧 [DEBUG] Registration error:', error);
      return { 
        success: false, 
        error: error.response?.data?.message || 'Registration failed' 
      };
    }
  };

  const login = async (credentials) => {
    try {
      console.log('🔧 [DEBUG] Attempting login with:', credentials);
      
      const response = await authAPI.login(credentials);
      console.log('🔧 [DEBUG] Login response:', response.data);
      
      if (response.data.success) {
        const { data } = response.data;
        localStorage.setItem('token', data.token);
        setUser(data);
        return { success: true };
      } else {
        // Handle case where backend returns success: false
        console.error('🔧 [DEBUG] Login failed on backend:', response.data);
        return { 
          success: false, 
          error: response.data.message || 'Login failed on server' 
        };
      }
    } catch (error) {
      console.error('🔧 [DEBUG] Login error:', error);
      return { 
        success: false, 
        error: error.response?.data?.message || 'Login failed' 
      };
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  const value = {
    user,
    register,
    login,
    logout,
    isAuthenticated: !!user
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}