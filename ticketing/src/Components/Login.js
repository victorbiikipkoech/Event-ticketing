import React, { useState } from 'react';
import { FaGoogle, FaApple } from 'react-icons/fa';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true); 

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="flex justify-center my-10 mt-[120px] w-auto">
      <div className="flex justify-center flex-col items-center max-w-md p-6 border-2 border-[#e7e7e5] rounded-lg bg-white shadow-md w-full">
        <div className="text-center my-5">
          <h1 className="font-semibold">{isLogin ? 'Login' : 'Sign Up'}</h1>
        </div>
        <form className="flex flex-col space-y-4" action="">
          {!isLogin && (
            <div className="flex flex-col">
              <label className="mb-1">User name</label>
              <input
                className="border rounded px-2 py-1"
                type="text"
                placeholder="Enter your username"
              />
            </div>
          )}
          {!isLogin && (
            <div className="flex flex-col">
              <label className="mb-1">Email</label>
              <input
                className="border rounded px-2 py-1"
                type="text"
                placeholder="Enter your email"
              />
            </div>
          )}
          <div className="flex flex-col">
            <label className="mb-1">Contact</label>
            <input
              className="border rounded px-2 py-1"
              type="email"
              placeholder="Enter your contact"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-1">Password</label>
            <input
              className="border rounded px-2 py-1"
              type="password"
              placeholder="Enter a password"
              required
            />
          </div>
        </form>
        <div>
          <button className="bg-[#text-blue-500] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black hover:scale-105 duration-700">
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </div>
        {/* <div>
          <h3>or login with:</h3>
          <div className="flex justify-between">
            <FaGoogle className="cursor-pointer" />
            <FaApple className="cursor-pointer" />
          </div>
        </div> */}
        <div className="mt-4">
          <button
            className="text-[#ffa500] font-semibold hover:text-yellow-400"
            onClick={handleToggle}
          >
            {isLogin ? 'Create an account' : 'Already have an account? Login'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
