import React from 'react'
import logo from '../images/logo.png'
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa'
import { Link, } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='bg-slate-900 shadow-md'>
       <div className="container mx-auto px-4">
         <div className="min-h-16">
            <div className='flex justify-between items-center flex-col md:flex-row py-10'>
                <h2 className='text-4xl font-bold text-white'>Subscribe Our Newsletter</h2>
                <form className='md:w-1/3 w-full mt-8 md:mt-0 relative'>
                    <input type="text" 
                    className='w-full px-4 py-3 shadow-md' placeholder='Enter your email address' />
                    <button className='bg-gray-200 py-2 px-4 rounded-full absolute right-3 top-1'>Submit</button>
                </form>
            </div>
         </div>
       </div>
       <div className="bg-slate-800 py-8 text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
              <div className='flex mx-auto flex-col gap-4'>
                <img src={logo} width={300} className='my-4' />
                <p className='text-sm ml-8'>Lorem ipsum dolor, sit amet consectetur 
                  adipisicing elit. Porro corporis, pariatur fuga explicabo 
                  accusamus eius nemo odit quaerat, atque possimus expedita 
                  praesentium saepe suscipit reiciendis,
                   exercitationem nulla! Dicta, maxime doloribus?</p>
                <div className='flex mt-5 gap-6 '>
                  <FaFacebook size={40} className='mx-4 p-2 rounded-full' />
                  <FaTwitter size={40} className='mx-4 p-2 rounded-full' />
                  <FaInstagram size={40} className='mx-4 p-2 rounded-full' />
                  <FaGithub size={40} className='mx-4 p-2 rounded-full' />

                </div>
              </div>
              <div className='flex ml-12 flex-col my-5 gap-4'>
                <h2 className="text-2xl font-semibold my-4">Pages</h2>
                <ul>
                  <li className='flex gap-6 flex-col'>
                    <Link to="/">Home</Link>
                    <Link to="/">About</Link>
                    <Link to="/">FAQs</Link>
                    <Link to="/">Contact</Link>
                  </li>
                </ul>
              </div>
              <div className='flex ml-12 flex-col my-5 gap-4'>
                <h2 className="text-2xl font-semibold my-4">Category</h2>
                <ul>
                  <li className='flex gap-6 flex-col'>
                    <Link to="/">Monitors</Link>
                    <Link to="/">GPUs</Link>
                    <Link to="/">Laptops</Link>
                    <Link to="/">Power Supply</Link>
                  </li>
                </ul>
              </div>
              <div className='flex mx-auto flex-col my-5 gap-4'>
                <h2 className="text-2xl font-semibold my-4">Contact Me</h2>
                 <p>Kazakhstan, Astana, KabanbaiBatyr 60A/13 </p>
                 <p>+7 700 00 00 00</p>
                 <p>z-coding@gmail.com</p>
              </div>
            </div>
          </div>
       </div>
       <div className="text-center py-4 mx-auto text-white">
        <p>Copyright &copy; {new Date().getFullYear()} Z-Coding</p>
       </div>
    </footer>
  )
}

export default Footer
