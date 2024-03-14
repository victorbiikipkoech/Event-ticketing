import React, { useState } from 'react';
import { Link } from 'react-router-dom';



function LoginForm() {
  const [companyEmail, setCompanyEmail] = useState('');
  const [password, setPassword] = useState('');
  

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can send the form data to your backend here
    console.log({
      companyEmail,
      password,
    });
  };

  return (
    <div className="max-w-md mx-auto mt-28 p-10 bg-white rounded-lg shadow-md p-4 border">
      <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
      <form onSubmit={handleSubmit} className="p-4 mt-2">
       
        <label className="block mb-2">
          Company Email:
          <input
            type="email"
            className="form-input border rounded-md w-full py-2 px-3"
            value={companyEmail}
            onChange={(e) => setCompanyEmail(e.target.value)}
          />
        </label>
        <label className="block mb-2">
          Password:
          <input
            type="password"
            className="form-input border rounded-md w-full py-2 px-3"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600"
        >
          Login
        </button>
        <div className="mt-4">
          <p>Don't have an account? <Link to="/companysignup" className="text-blue-500">Register</Link></p>


        </div>

      </form>
    </div>
  );
}

export default LoginForm;
