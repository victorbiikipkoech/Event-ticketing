import React, { useState } from 'react';



function SignUpForm() {
  const [companyName, setCompanyName] = useState('');
  const [companyEmail, setCompanyEmail] = useState('');
  const [companyContact, setCompanyContact] = useState('');
  const [hashedPassword, setHashedPassword] = useState('');
 

  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log({
      companyName,
      companyEmail,
      companyContact,
      hashedPassword,
    });

    
  };

  return (
    
    <div className="max-w-md mx-auto mt-28 p-10 bg-white rounded-lg shadow-md p-4 border">
      <h2 className="text-2xl font-bold mb-4 text-center">Company SignUp</h2>
      <form onSubmit={handleSubmit} className="p-4 mt-2">
        <label className="block mb-2">
          Company Name:
          <input
            type="text"
            className="form input border rounded-md w-full py-2 px-3"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </label>
        <label className="block mb-2">
          Company Email:
          <input
            type="email"
            className="form input border rounded-md w-full py-2 px-3"
            value={companyEmail}
            onChange={(e) => setCompanyEmail(e.target.value)}
          />
        </label>
        <label className="block mb-2">
          Company Contact:
          <input
            type="text"
            className="form-input border rounded-md w-full py-2 px-3"
            value={companyContact}
            onChange={(e) => setCompanyContact(e.target.value)}
          />
        </label>
        <label className="block mb-2">
          Password:
          <input
            type="password"
            className="form-input border rounded-md w-full py-2 px-3"
            value={hashedPassword}
            onChange={(e) => setHashedPassword(e.target.value)}
          />
        </label>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUpForm;
