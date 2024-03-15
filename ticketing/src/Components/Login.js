import React, { useState } from 'react';


const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="flex justify-center my-10 mt-[120px] w-auto">
      <div className="flex justify-center flex-col max-w-md p-6 border-2 border-[#e7e7e5] rounded-lg bg-white shadow-md w-full">
        <div className="text-center my-5">
          <h1 className="text-2xl font-bold mb-4 text-center">{isLogin ? 'Login' : 'Sign Up'}</h1>
        </div>
        <form className="flex flex-col space-y-4" action="">
          {!isLogin && (
            <div className="flex flex-col">
              <label className="mb-1">Username</label>
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
            <label className="mb-1">Username</label>
            <input
              className="border rounded px-2 py-1"
              type="email"
              placeholder="Enter your username"
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
          {/* <button className="bg-[#text-blue-500] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black hover:scale-105 duration-700">
            {isLogin ? 'Login' : 'Sign Up'}

          </button> */}
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600"
          >
            {isLogin ? 'Login' : 'Sign Up'}

          </button>
        </div>
       
        <div className="mt-4">
          <button
            className="text-[#5e85ea] font-semibold hover:text-blue-400"
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
