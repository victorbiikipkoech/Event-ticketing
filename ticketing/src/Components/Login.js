import React, { useState } from 'react';
import { FaGoogle, FaApple } from 'react-icons/fa';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true); 

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="flex justify-center my-10 mt-[120px] w-auto">
      <div className="flex justify-center flex-col items-center w-auto h-[300px] border-2 border-[#e7e7e5] border-solid p-4 my-4 rounded-lg bg-white shadow-md">
        <div className="text-center my-5">
          <h1 className="font-semibold">{isLogin ? 'Login' : 'Sign Up'}</h1>
        </div>
        <div>
          <form className="flex justify-center items-center" action="">
            {!isLogin && (
              <div className="flex flex-col"> {/* Added div wrapper */}
                <label>First Name</label>
                <input
                  className="border rounded mx-2 mt-1"
                  type="text"
                  placeholder="Enter your first name"
                />
              </div>
            )}
            {!isLogin && (
              <div className="flex flex-col"> {/* Added div wrapper */}
                <label>Last Name</label>
                <input
                  className="border rounded mx-2 mt-1"
                  type="text"
                  placeholder="Enter your last name"
                />
              </div>
            )}
            <div className="flex flex-col"> {/* Added div wrapper */}
              <label>Email</label>
              <input
                className="border rounded mx-2 mt-1"
                type="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="flex flex-col"> {/* Added div wrapper */}
              <label>Password</label>
              <input
                className="border rounded mx-2 mt-1"
                type="password"
                placeholder="Enter a password"
                required
              />
            </div>
            {!isLogin && (
              <div className="flex flex-col"> {/* Added div wrapper */}
                <label>Confirm Password</label>
                <input
                  className="border rounded mx-2 mt-1"
                  type="password"
                  placeholder="Confirm your password"
                  required
                />
              </div>
            )}
          </form>
        </div>
        <div>
          <button className="bg-[#f7bf0c] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black hover:scale-105 duration-700">
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </div>
        <div>
          <h3>or login with:</h3>
          <div className="flex justify-between">
            <FaGoogle className="cursor-pointer" />
            <FaApple className="cursor-pointer" />
          </div>
        </div>
        <div className="mt-4">
          <button
            className="text-[#f7bf0c] font-semibold hover:text-yellow-400"
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
