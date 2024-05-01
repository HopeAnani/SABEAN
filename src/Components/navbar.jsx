import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AiOutlineHome, AiOutlineInfoCircle, AiOutlineShopping, AiOutlineSolution, AiOutlineMail } from 'react-icons/ai';
import image from "../images/SABEAN.png";
import { Link } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsMenuOpen, setIsProductsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleProductsMenu = () => {
    setIsProductsMenuOpen(!isProductsMenuOpen);
  };

  return (
    <nav className="bg-white p-4 font-serif font-semibold shadow fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center"> 
          <Link to="/home"> </Link>
          <img src={image} className="w-40 h-20 object-cover mr-4"/> 
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
          <li><a href="/" className="flex items-center text-[#0077b6] hover:text-[#14152d]"><AiOutlineHome className="mr-1" /> Home</a></li>
          <li><a href="/about-us" className="flex items-center text-[#0077b6] hover:text-[#14152d]"><AiOutlineInfoCircle className="mr-1" /> About Us</a></li>
          {/* Products dropdown */}
          <li className="relative" onClick={toggleProductsMenu}>
            <a href="#" className="flex items-center text-[#0077b6] hover:text-[#14152d]">
              <AiOutlineShopping className="mr-1" /> Products
            </a>
            <motion.ul 
              className={`absolute left-0 top-full bg-white shadow-md py-2 px-4 mt-2 w-40 rounded-md ${isProductsMenuOpen ? 'block' : 'hidden'}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <li className='my-4 hover:text-[#0077b6]'><a href="/products/category1">Category 1</a></li>
              <li className='my-4 hover:text-[#0077b6]'><a href="/products/category1">Category 1</a></li>
              <li className='my-4 hover:text-[#0077b6]'><a href="/products/category1">Category 1</a></li>
              <li className='my-4 hover:text-[#0077b6]'><a href="/products/category1">Category 1</a></li>
              <li className='my-4 hover:text-[#0077b6]'><a href="/products/category1">Category 1</a></li>
              {/* Add more categories as needed */}
            </motion.ul>
          </li>
          <li><a href="/services" className="flex items-center text-[#0077b6] hover:text-[#14152d]"><AiOutlineSolution className="mr-1" /> Services</a></li>
          <li><a href="/contact-us" className="flex items-center text-[#0077b6] hover:text-[#14152d]"><AiOutlineMail className="mr-1" /> Contact Us</a></li>
        </ul>

        {/* Responsive menu */}
        <motion.div 
          className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} absolute top-16 left-0 w-full bg-white py-2 px-8 mt-6 z-10`}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ul className="space-y-4">
            <li><a href="/" className="flex gap-2 items-center text-[#0077b6] hover:text-[#14152d]"><AiOutlineHome className="mr-1" /> Home</a></li>
            <li><a href="/about-us" className="flex gap-2 items-center  text-[#0077b6] hover:text-[#14152d]"><AiOutlineInfoCircle className="mr-1" /> About Us</a></li>
            {/* Responsive Products dropdown */}
            <li className="relative" onClick={toggleProductsMenu}>
              <a href="#" className="flex gap-2 items-center text-[#0077b6] hover:text-[#14152d]">
                <AiOutlineShopping className="mr-1" /> Products
              </a>
              <motion.ul 
                className={`absolute left-0 top-full bg-white shadow-md py-2 px-4 mt-2 w-40 rounded-md ${isProductsMenuOpen ? 'block' : 'hidden'}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <li className='my-4 hover:text-[#0077b6]'><a href="/products/category1">Category 1</a></li>
                <li className='my-4 hover:text-[#0077b6]'><a href="/products/category1">Category 1</a></li>
                <li className='my-4 hover:text-[#0077b6]'><a href="/products/category1">Category 1</a></li>
                <li className='my-4 hover:text-[#0077b6]'><a href="/products/category1">Category 1</a></li>
                <li className='my-4 hover:text-[#0077b6]'><a href="/products/category1">Category 1</a></li>
                {/* Add more categories as needed */}
              </motion.ul>
            </li>
            <li><a href="/services" className="flex gap-2 items-center text-[#0077b6] hover:text-[#14152d]"><AiOutlineSolution className="mr-1" /> Services</a></li>
            <li><a href="/contact-us" className="flex gap-2 items-center text-[#0077b6] hover:text-[#14152d]"><AiOutlineMail className="mr-1" /> Contact Us</a></li>
          </ul>
        </motion.div>
      </div>
    </nav>
  );
}

export default Navbar;
