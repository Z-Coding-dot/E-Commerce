import React from 'react'
import loginImage from '../assets/images/login.webp';
import googleIcon from '../assets/images/googleIcon.webp';
import { FaEye, FaGithub, } from 'react-icons/fa';

const Login = () => {
  return (
    <div className="container mx-auto px-4 lg:px-32 py-10 bg-slate-950">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="w-full hidden md:flex justify-center items-center shadow-lg">
          <img
            src={loginImage}
            alt="login image"
            className="rounded-l-lg shadow-lg"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        <div className="bg-gradient-to-tr from-indigo-950 to-slate-950 rounded-r-lg shadow-md text-white">
          <h2 className="text-center lg:text-3xl font-semibold my-5 text-gray-200">
            Join & Start Your Journey with Us! <br /> Growing Your Business
            Today!
          </h2>
          <div className="flex justify-between items-center px-4 lg:px-6 lg:mx-16">
            <div className="flex flex-wrap mx-auto items-center justify-center">
              <a href='https://www.google.com/' className=" rounded-full mr-2 my-2 px-2 py-2 border border-gray-300 text-sm text-gray-300 cursor-pointer">
                <img src={googleIcon} className="inline-block w-6 h-6 mr-2" />
                Sign Up with Google
              </a>
              <a href='https://github.com/' className=" rounded-full px-2 py-2 border border-gray-300 text-sm text-gray-300 cursor-pointer">
                <FaGithub className="text-white inline-block w-6 h-6 mr-2" />
                Sign Up with Github
              </a>
            </div>
          </div>
          <form className="px-8 lg:px-16 py-6 text-gray-200">
            <label htmlFor="username" className="mb-2">
              username
            </label>
            <input
              type="text"
              placeholder="Enter your username"
              className="w-full border-b-2 border-gray-300 px-4 py-2 mb-10 focus:outline-none bg-transparent"
            />
            <label htmlFor="email" className="mt-5 ">
              Email
            </label>
            <input
              type="text"
              placeholder="Enter your email"
              className="w-full border-b-2 border-gray-300 px-4 py-2 focus:outline-none mb-10 bg-transparent"
            />

            <label htmlFor="password" className="mb-32">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full border-b-2 px-4 border-gray-300 focus:outline-none py-2 mb-10 relative bg-transparent"
            />
            <span className="absolute">
              <FaEye className="text-gray-400 cursor-pointer w-4 h-4 -ml-12" />
            </span>
          </form>
          <div className="px-4 lg:px-16 text-gray-200 flex justify-between items-center">
            <div className='hidden lg:flex'>
              <input
                type="checkbox"
                id="checkbox"
                className=" w-4 h-4 rounded-full cursor-pointer"
              />
              <label htmlFor="checkbox" className="cursor-pointer mx-2 text-sm ">
                I accept the terms & conditions
              </label>
            </div>
              <button className=" lg:px-8 lg:py-4 px-4 py-2 w-full lg:w-1/4 bg-purple-800 rounded-full text-white hover:bg-purple-900">
                Sign Up
              </button>
          </div>
          <div className="flex my-5 justify-center items-center px-8 lg:px-16">
            <hr className="w-1/2 border-gray-400 mr-2" />
            Or
            <hr className="w-1/2 ml-2 border-gray-400" />
          </div>
          <div className="flex justify-center items-center mb-5">
            <p className="text-gray-400 font-semibold text-sm mt-8">
              Own an Account?
            </p>
            <span className="text-fuchsia-500 cursor-pointer mt-8 ml-2">
              JUMP RIGHT IN
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login
