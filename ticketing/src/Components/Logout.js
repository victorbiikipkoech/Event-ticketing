import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear the access token from local storage
    localStorage.removeItem('access_token');

    // Redirect to the login page
    navigate('/login');
  };

  return (
    <div className="max-w-md mx-auto mt-28 bg-white rounded-lg shadow-md p-4 border">
      <h2 className="text-2xl font-bold mb-4 text-center">Logout</h2>
      <div className="p-4 mt-2">
        <p>Are you sure you want to logout?</p>
        <div className="flex justify-center mt-4">
          <button
            onClick={handleLogout}
            className="bg-blue-500 text-white px-4 py-2 rounded mr-4 hover:bg-blue-600"
          >
            Logout
          </button>
          <Link
            to="/userdashboard"
            className="text-blue-500 hover:underline"
          >
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Logout;
