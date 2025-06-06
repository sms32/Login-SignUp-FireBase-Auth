import React from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { useAuth } from '../contexts/AuthContext';
import InstallButton from '../components/InstallButton';


export default function Home() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = async () => {
    try {
      await signOut(auth);        // 🔐 Firebase logout
      logout();                   // 🧠 Clear context + localStorage
      navigate('/');              // 🔁 Redirect to login
    } catch (error) {
      alert('Logout failed: ' + error.message);
    }
  };

  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl mb-4">🏠 Welcome to Home Page</h1>
            <InstallButton />
<br></br>
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
}
