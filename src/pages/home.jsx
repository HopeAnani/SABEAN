import React from 'react';
import { motion } from 'framer-motion';
import drop from '../images/pngwing.com (5).png';
import logo from '../images/logo.png'
import image1 from '../images/Sabean/Sabeanby_AronSimeneh-2124.jpg'
import image2 from '../images/Sabean/Sabeanby_AronSimeneh-2343.jpg'
import image3 from '../images/Sabean/Sabeanby_AronSimeneh-2559.jpg'
import {AiOutlineStar,AiOutlineCheckCircle,AiOutlineLineChart} from 'react-icons/ai'

const Home = () => {
  return (
    <div>
      <div className="min-h-[80vh] flex flex-col md:flex-row mt-32 md:mb-6 justify-center items-center align-middle">
        {/* Left side */}
        <motion.div
          className="md:w-1/2 text-[#0077b6] px-8 flex justify-center items-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2.3, ease: "easeInOut" }}
        >
          <div className='flex flex-col justify-center items-center'>
            <img src={logo} alt=""  className='h-46'/>
            <h1 className="font-serif text-3xl md:text-5xl text-center font-bold">We value Every Drop of Water!</h1>
            <p className='font-serif text-lg text-[#333333] md:text-center text-justify mt-6 md:px-8'>Welcome to SABEAN, Ethiopia's sole manufacturer of high-quality multi jet water meters. We are committed to providing innovative solutions for efficient water management and sustainability. Discover how our products are contributing to a water-secure future.</p>
          </div>
        </motion.div>

        {/* Right side */}
        <motion.div
          className="md:w-1/4 flex justify-center items-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2.3, ease: "easeInOut" }}
        >
          <div className="p-8 md:p-0">
            <motion.img
              src={drop}
              alt="Water"
              className="md:h-96 h-32 w-auto transition duration-300"
              whileHover={{ scale: 1.1 }}
            />
          </div>
        </motion.div>
      </div>
      <section className="font-serif justify-center items-center md:mx-12 mx-4">
        <div>
            <h3 className="text-5xl  text-[#0077b6]  text-center">Key Features</h3>
            
          </div>
        <div className="lg:flex gap-10">
          <div className="text-center shadow-lg p-10 rounded-xl my-10 h-auto border bg-white border-[#0077b6] flex-1 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
            {/* <img src={drop} className='w-20 mx-auto' /> */}
            <AiOutlineStar size={100} color='#0077b6' className='mx-auto '/>
            <h3 className="text-lg font-semibold pt-8 pb-2 text-[#0077b6] ">
                Quality and Reliability
            </h3>
            <p className="py-2 ">
            SABEAN offers state-of-the-art water meters, adhering to ISO 4064-2005 standards, ensuring accuracy and reliability our products.
            </p>
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl my-10 h-auto border bg-white border-[#0077b6] flex-1 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
            {/* <img src={drop} className='w-20 mx-auto' /> */}
            <AiOutlineCheckCircle size={100} color='#0077b6' className='mx-auto '/>
            <h3 className="text-lg font-semibold pt-8 pb-2 text-[#0077b6] ">
                Environmental Commitment
            </h3>
            <p className="py-2 ">
              Our water meters support sustainability, promoting efficient water usage and conservation.
            </p>
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl my-10 h-auto border bg-white border-[#0077b6] flex-1 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
            {/* <img src={drop} className='w-20 mx-auto' /> */}
            <AiOutlineLineChart size={100} color='#0077b6' className='mx-auto '/>
            <h3 className="text-lg font-semibold pt-8 pb-2 text-[#0077b6] ">
                Import Substitution and Revenue Growth
            </h3>
            <p className="py-2 ">
                
            
            SABEAN cuts reliance on imported water meters, boosts local manufacturing, and tackles issues with subpar meters affecting Ethiopia's revenue.
            </p>
          </div>
          {/* Additional cards */}
        </div>
      </section>
      {/* <section className="font-serif justify-center items-center md:mx-12 mx-4">
        <div>
            <h3 className="text-5xl  text-[#0077b6]  text-center">Products</h3>
        </div>
        
      </section> */}
        <section className="font-serif justify-center items-center md:mx-12 mx-4">
            <div>
                <h3 className="text-5xl text-[#0077b6] text-center">Products</h3>
            </div>
            <div className='flex flex-wrap gap-4 md:gap-16 items-center justify-center mb-12'>
                <div className="relative mt-8 md:w-[30%] w-full">
                    <img
                        src={image1}
                        alt="Product"
                        className="w-full h-auto max-h-80 md:h-full object-cover transition duration-300 hover:brightness-90"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition duration-300">
                        <p className="text-white text-center mb-2">Your product information</p>
                        <button className='bg-[#0077b6] text-white p-2 rounded hover:bg-[#83d0f9] hover:text-black'>Know More</button>
                    </div>
                </div>
                <div className="relative mt-8 md:w-[30%] w-full">
                    <img
                        src={image2}
                        alt="Product"
                        className="w-full h-auto max-h-80 md:h-full object-cover transition duration-300 hover:brightness-90"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition duration-300">
                        <p className="text-white text-center mb-2">Your product information</p>
                        <button className='bg-[#0077b6] text-white p-2 rounded hover:bg-[#83d0f9] hover:text-black'>Know More</button>
                    </div>
                </div>
                <div className="relative mt-8 md:w-[30%] w-full">
                    <img
                        src={image3}
                        alt="Product"
                        className="w-full h-auto max-h-80 md:h-full object-cover transition duration-300 hover:brightness-90"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition duration-300">
                        <p className="text-white text-center mb-2">Your product information</p>
                        <button className='bg-[#0077b6] text-white p-2 rounded hover:bg-[#83d0f9] hover:text-black'>Know More</button>
                    </div>
                </div>
                <div className="relative mt-8 md:w-[30%] w-full">
                    <img
                        src={image3}
                        alt="Product"
                        className="w-full h-auto max-h-80 md:h-full object-cover transition duration-300 hover:brightness-90"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition duration-300">
                        <p className="text-white text-center mb-2">Your product information</p>
                        <button className='bg-[#0077b6] text-white p-2 rounded hover:bg-[#83d0f9] hover:text-black'>Know More</button>
                    </div>
                </div>
                <div className="relative mt-8 md:w-[30%] w-full">
                    <img
                        src={image3}
                        alt="Product"
                        className="w-full h-auto max-h-80 md:h-full object-cover transition duration-300 hover:brightness-90"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition duration-300">
                        <p className="text-white text-center mb-2">Your product information</p>
                        <button className='bg-[#0077b6] text-white p-2 rounded hover:bg-[#83d0f9] hover:text-black'>Know More</button>
                    </div>
                </div>
                {/* Repeat this block for additional images */}
            </div>
        </section>




    </div>
  );
};

export default Home;
