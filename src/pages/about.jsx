import React from 'react'
import img from '../images/ana.png'

const about = () => {
  return (
    <div className='mt-32 min-h-screen'>
        <section className="font-serif justify-center items-center md:mx-12 mx-4 pt-4">
           
            <div className=''>
                <h3 className="text-5xl  text-[#0077b6] text-center">Welcome To Sabean!</h3>
                <p className='font-serif text-lg text-[#333333]  text-justify my-6 md:px-8'>Today, Sabean draws inspiration from this legacy. We recognize the enduring value of traditional techniques and indigenous materials, while fostering innovation to ensure continued relevance in the modern world. Our company embodies the enduring spirit of Ethiopian creativity, ensuring that this remarkable heritage thrives for generations to come.</p>   
                <p className='font-serif text-lg text-[#333333]  text-justify my-6 md:px-8'>Sabean extends beyond the role of a water meter manufacturer; it serves as a pathway towards a future with secure water resources. It acknowledges that the absence of accurate, reliable, and durable water meters contributes to the substantial volume of non-revenue water that Ethiopia loses. These meters are not just measuring devices, but also payment gateways that can help address this issue. And increase revenue of Ethiopia from it’s precious resource, Water. </p>           
            </div>
            <div className=''>
                <h3 className="text-5xl  text-[#0077b6] md:px-8">Company Overview</h3>
                <p className='font-serif text-lg text-[#333333]  text-justify my-6 md:px-8'>SABEAN Base Metal Engineering Plc was founded in 2016, focusing on the production of Multijet water meters. Our journey from a small startup to a leader in Ethiopia's water sector reflects our commitment to quality, innovation, and sustainability.</p>   
                <p className='font-serif text-lg text-[#333333]  text-justify my-6 md:px-8'>SABEAN Base Metal Engineering Plc was founded in 2016, focusing on the production of Multijet water meters. Our journey from a small startup to a leader in Ethiopia's water sector reflects our commitment to quality, innovation, and sustainability.</p>   
            </div>
            <div>
                <h3 className="text-5xl  text-[#0077b6] md:px-8">Mission & Values</h3>
                <p className='font-serif text-lg text-[#333333]  text-justify my-6 md:px-8'>Our mission is to deliver high-quality water meters that support efficient water management and water conservation in Ethiopia. We value innovation, sustainability, and community impact.</p>   
                <p className='font-serif text-lg text-[#333333]  text-justify my-6 md:px-8'>Our mission is to deliver high-quality water meters that support efficient water management and water conservation in Ethiopia. We value innovation, sustainability, and community impact.</p>   
            </div>
            <div>
                <h3 className="text-5xl  text-[#0077b6] md:px-8">Our Achievements</h3>
                <p className='font-serif text-lg text-[#333333] text-justify my-6 md:px-8'>Since our establishment, SABEAN has produced over 100,000 water meters and aims to double its production capacity to meet the growing demand. We supply Ethiopian water supply authorities and are expanding into the Horn of Africa region.</p>   
                <p className='font-serif text-lg text-[#333333] text-justify my-6 md:px-8'>Since our establishment, SABEAN has produced over 100,000 water meters and aims to double its production capacity to meet the growing demand. We supply Ethiopian water supply authorities and are expanding into the Horn of Africa region.</p>   
            </div>
            <div className='flex flex-wrap'>
                <div className='md:w-2/3'>
                    <h3 className="text-5xl  text-[#0077b6] md:px-8">Message from the CEO</h3>
                    <p className='font-serif text-lg text-[#333333] text-justify my-6 md:px-8'>As one of the founders and CEO of Sabean Base Metal Engineering, I am delighted to share our vision for a water-secure future in Ethiopia and beyond. </p>
                    <p className='font-serif text-lg text-[#333333] text-justify my-6 md:px-8'>Our journey began with a commitment to address Ethiopia's unique water management challenges through domestic water meter manufacturing. By sourcing 80% of our raw materials locally, and manufacturing major components of the meter in our factory, we successfully reduced reliance on substandard imported water meters.  Ethiopia has always been relying on imported water meters and has often proved costly, unsustainable and unreliable</p>
                    <p className='font-serif text-lg text-[#333333] text-justify my-6 md:px-8'>Our MultiJet water meters are more than just tools for measuring water consumption; they are catalysts for positive change! In addition to the transfer of this technology, generating foreign currency and creating job opportunities for young citizens, manufacturing high accuracy water meters play a crucial role in preserving water resources while serving as precise instruments for revenue collection, contributing to the sustainable management of Ethiopia’s clean water supply.</p>
                    <p className='font-serif text-lg text-[#333333] text-justify my-6 md:px-8'>As Ethiopia's urbanization accelerates, the importance of efficient water metering grows. Our high-quality water meters, designed to meet rigorous ISO 4064-2005 standards, are essential for both water conservation and revenue generation. During the past couple of years, the trust that we have established with consumers and suppliers is a testament to our dedication to quality and reliability.</p>
                    <p className='font-serif text-lg text-[#333333] text-justify my-6 md:px-8'>Our impact extends beyond Ethiopia, contributing to regional and global water security. We recognize that effective water management requires collaboration, and we are open to partnerships that align with our mission. Whether through transfer of technology, creation of job opportunities, import substitution, or environmental stewardship, we are eager to work with like-minded organizations and individuals to make a difference. </p>
                    <p className='font-serif text-lg text-[#333333] text-justify my-6 md:px-8'>Together, we can create a sustainable, water-secure future. I invite you to join us on this journey as we continue to innovate, inspire, and impact lives.</p>
                    <p className='font-serif text-lg text-[#0077b6] text-justify my-6 md:px-8'>We Value Every Droplet of Water!</p>
                    <p className='font-serif text-lg text-[#0077b6] text-justify my-6 md:px-8'>Ainishet (Ph.D.) CEO, Sabean Base Metal Engineering PLC Addis Ababa, Ethiopia</p>
                </div>
                <div className="mx-auto bg-gradient-to-b  from-[#0077b6] rounded-md relative overflow-hidden md:mt-20 sm:mt-0 md:h-96 md:w-96">
                    <img src={img}  objectFit="cover" style={{ marginTop: '30px' }} />
                </div>
            </div>
        </section>
    </div>
  )
}

export default about