import React, { useState } from 'react'
import { FaRegUser, } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png';
import { CiShoppingCart } from 'react-icons/ci';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm } from '../../features/products/ProductsSlice';

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.products.searchTerm);

 // cart items count
  const cartItems = useSelector((state) => state.cart.items);
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);


  // User Toggle.
  const handleUser = () =>{
    setIsOpen(!isOpen);
  };
  
  return (
    <header className='bg-white shadow-md '>
      <>
        <div className="py-4 shadow-md px-8 lg:px-20">
          <ul className="container flex mx-auto  flex-wrap justify-between md:flex-row px-4
          items-center relative">
            <div className='flex  gap-4'>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/'>About</Link></li>
              <li><Link to='/'>FAQs</Link></li>
              <li><Link to='/'>Contact</Link></li>
            </div>
            <div>
            </div>
            <div className={`${ isOpen ? 'flex flex-col right-0 md:right-0 p-4 gap-4 z-10 bg-zinc-50 top-12 absolute' : 'hidden' }`}>
              <li><Link to="/login">Sign</Link></li>
              <li><Link to="/">My Account</Link></li>
            </div>
            <FaRegUser onClick={handleUser}
             size={40} className='bg-gray-200 p-2 rounded text-block cursor-pointer'/>
          </ul>
        </div>
        <nav className='flex justify-between items-center md:py-8 py-4 px-8 lg:px-20 container'>
          <div className='flex items-center'>
            <Link to='/' className='py-2 px-2 rounded'>
            <img src={logo} alt='logo' className='w-40' />
            </Link>
          </div>

          <form className='w-1/2 sm:block hidden'> 
            <input type="text" value={searchTerm} onChange={(e) => dispatch(setSearchTerm(e.target.value))}
             placeholder='Search products'
             className='bg-zinc-100 w-full py-2 px-3 rounded-md border
              border-zinc-300 focus:outline-none'/>
          </form>
         <div className="relative">
         <Link to={'./cart'}>
          <CiShoppingCart size={54} className='bg-gray-200 rounded-full py-2 px-3 cursor-pointer'/>
          {cartCount > 0 && <span 
          className='bg-blue-500 text-sm
           -right-2 -top-5 flex items-center justify-center absolute w-5 h-5
           text-white px-2 py-2 rounded-full'>{cartCount}</span>}
          </Link> 
         </div>
        </nav>
      
      </>
    </header>
  )
}

export default Navbar
