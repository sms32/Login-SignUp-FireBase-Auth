import { createContext, useContext, useState, useEffect } from 'react';
import Spinner from '../components/Spinner'; // Adjust path based on your structure

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(storedUser);
    }
    setLoading(false);
  }, []);

  const login = (email) => {
    localStorage.setItem('user', email);
    setUser(email);
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  if (loading) return <Spinner />;

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
