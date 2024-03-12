import React, { useState } from 'react';

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
    <div className="max-w-md mx-auto mt-20 p-10 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleSubmit} className="p-4 mt-2">
        <label className="block mb-2">
          Company Email:
          <input
            type="email"
            className="form-input mt-1 block w-full"
            value={companyEmail}
            onChange={(e) => setCompanyEmail(e.target.value)}
          />
        </label>
        <label className="block mb-2">
          Password:
          <input
            type="password"
            className="form-input mt-1 block w-full"
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
      </form>
    </div>
  );
}

export default LoginForm;
