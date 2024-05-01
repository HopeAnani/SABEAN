import React from 'react'
import Installation from '../images/Maintainace.png'
import Support from '../images/Support.png'
import Testing from '../images/Support.png'

const Service = () => {
  return (
    <div className='mt-32'>
        <h3 className="text-5xl font-serif text-center  text-[#0077b6] md:px-8">Services</h3>
        <div class="py-10">  
            <div class="container m-auto px-6 text-gray-500 md:px-12 xl:px-0">
                <div class="mx-auto grid gap-6 md:w-3/4 lg:w-full lg:grid-cols-3 font-serif">
                    <div class="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8 border border-[#0077b6] hover:scale-105">
                        <div class="mb-12 space-y-4">
                            <h3 class="text-2xl font-semibold text-[#0077b6]">Installation & Maintenance</h3>
                            <p class="mb-6 text-justify">We offer professional installation and maintenance services to ensure the optimal performance of our water meters.</p>
                        </div>
                        <img src={Installation} class="w-2/3 ml-auto -mb-12" alt="illustration" loading="lazy" width="900" height="600"/>
                    </div>
                    <div class="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8 border border-[#0077b6] hover:scale-105">
                        <div class="mb-12 space-y-4">
                            <h3 class="text-2xl font-semibold text-[#0077b6]">Calibration and Testing</h3>
                            <p class="mb-6 text-justify">SABEAN provides calibration and testing services to maintain accuracy and ensure compliance with industry standards.</p>
                        </div>
                        <img src={Testing} class="w-2/3 ml-auto -mb-12" alt="illustration" loading="lazy" width="900" height="600"/>
                    </div>
                    <div class="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8 border border-[#0077b6] hover:scale-105">
                        <div class="mb-12 space-y-4">
                            <h3 class="text-2xl font-semibold text-[#0077b6]">Customer Support and Training</h3>
                            <p class="mb-6 text-justify">Our customer support team is ready to assist with any inquiries or technical support needs.</p>
                        </div>
                        <img src={Support} class="w-2/3 ml-auto -mb-12" alt="illustration" loading="lazy" width="900" height="600"/>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Service