import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AiOutlineHome, AiOutlineInfoCircle, AiOutlineShopping, AiOutlineSolution, AiOutlineMail } from 'react-icons/ai';
import image from "../images/logo.png";
import { Link } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsMenuOpen, setIsProductsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleProductsMenu = () => {
    setIsProductsMenuOpen(!isProductsMenuOpen);
  };

  return (
    <nav className="bg-white p-4 font-serif font-semibold shadow fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center"> 
          <Link to="/"> 
          <img src={image} className="w-auto h-20 object-cover mr-4"/> 
          </Link>
        </div>

        {/* Menu button */}
        <button className="block md:hidden text-[#03045e]" onClick={toggleMenu}>
          {isMenuOpen ? (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          )}
        </button>

        {/* Upper list */}
        <ul className="md:flex md:space-x-8 md:items-center md:w-auto hidden">
          <li><Link to="/" onClick={closeMenu} className="flex items-center text-[#0077b6] hover:text-[#14152d]"><AiOutlineHome className="mr-1" /> Home</Link></li>
          <li><Link to="/about-us" onClick={closeMenu} className="flex items-center text-[#0077b6] hover:text-[#14152d]"><AiOutlineInfoCircle className="mr-1" /> About Us</Link></li>
          {/* Products dropdown */}
          <li className="relative" onClick={toggleProductsMenu}>
            <div className="flex items-center text-[#0077b6] hover:text-[#14152d] cursor-pointer">
              <AiOutlineShopping className="mr-1" /> Products
            </div>
            <motion.ul 
              className={`absolute left-0 top-full bg-white shadow-md py-2 px-4 mt-2 w-64 rounded-md ${isProductsMenuOpen ? 'block' : 'hidden'}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <li className='my-4 hover:text-[#0077b6]'><Link to="/products/multijet-water-meters" onClick={closeMenu}>MultiJet water meters</Link></li>
              <li className='my-4 hover:text-[#0077b6]'><Link to="/products/gate-valve" onClick={closeMenu}>Gate Valve</Link></li>
              
              {/* Add more categories as needed */}
            </motion.ul>
          </li>
          <li><Link to="/services" onClick={closeMenu} className="flex items-center text-[#0077b6] hover:text-[#14152d]"><AiOutlineSolution className="mr-1" /> Services</Link></li>
          <li><Link to="/contact-us" onClick={closeMenu} className="flex items-center text-[#0077b6] hover:text-[#14152d]"><AiOutlineMail className="mr-1" /> Contact Us</Link></li>
        </ul>

        {/* Responsive menu */}
        <motion.div 
          className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} absolute top-16 left-0 w-full bg-white py-2 px-8 mt-6 z-10`}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ul className="space-y-4">
            <li><Link to="/" onClick={closeMenu} className="flex gap-2 items-center text-[#0077b6] hover:text-[#14152d]"><AiOutlineHome className="mr-1" /> Home</Link></li>
            <li><Link to="/about-us" onClick={closeMenu} className="flex gap-2 items-center  text-[#0077b6] hover:text-[#14152d]"><AiOutlineInfoCircle className="mr-1" /> About Us</Link></li>
            {/* Responsive Products dropdown */}
            <li className="relative" onClick={toggleProductsMenu}>
              <div className="flex gap-2 items-center text-[#0077b6] hover:text-[#14152d]">
                <AiOutlineShopping className="mr-1" /> Products
              </div>
              <motion.ul 
                className={`absolute left-0 top-full bg-white shadow-md py-2 px-4 mt-2 w-64 rounded-md ${isProductsMenuOpen ? 'block' : 'hidden'}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <li className='my-4 hover:text-[#0077b6]'><Link to="/products/multijet-water-meters" onClick={closeMenu}>MultiJet water meters</Link></li>
                <li className='my-4 hover:text-[#0077b6]'><Link to="/products/gate-valve" onClick={closeMenu}>Gate Valve</Link></li>
                
                {/* Add more categories as needed */}
              </motion.ul>
            </li>
            <li><Link to="/services" onClick={closeMenu} className="flex gap-2 items-center text-[#0077b6] hover:text-[#14152d]"><AiOutlineSolution className="mr-1" /> Services</Link></li>
            <li><Link to="/contact-us" onClick={closeMenu} className="flex gap-2 items-center text-[#0077b6] hover:text-[#14152d]"><AiOutlineMail className="mr-1" /> Contact Us</Link></li>
          </ul>
        </motion.div>
      </div>
    </nav>
  );
}

export default Navbar;
