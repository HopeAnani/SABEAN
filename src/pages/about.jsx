import React from 'react'

const about = () => {
  return (
    <div className='mt-32 min-h-screen'>
        <section className="font-serif justify-center items-center md:mx-12 mx-4">
            <div>
                <h3 className="text-5xl  text-[#0077b6]  text-center">Company Overview</h3>
                <p className='font-serif text-lg text-[#333333] md:text-center text-justify mt-6 md:px-8'>SABEAN Base Metal Engineering Plc was founded in 2016, focusing on the production of Multijet water meters. Our journey from a small startup to a leader in Ethiopia's water sector reflects our commitment to quality, innovation, and sustainability.</p>   
            </div>
            <div>
                <h3 className="text-5xl  text-[#0077b6]  text-center">Mission & Values</h3>
                <p className='font-serif text-lg text-[#333333] md:text-center text-justify mt-6 md:px-8'>Our mission is to deliver high-quality water meters that support efficient water management and water conservation in Ethiopia. We value innovation, sustainability, and community impact.</p>   
            </div>
            <div>
                <h3 className="text-5xl  text-[#0077b6]  text-center">Our Achievements</h3>
                <p className='font-serif text-lg text-[#333333] md:text-center text-justify mt-6 md:px-8'>Since our establishment, SABEAN has produced over 100,000 water meters and aims to double its production capacity to meet the growing demand. We supply Ethiopian water supply authorities and are expanding into the Horn of Africa region.</p>   
            </div>
        </section>
    </div>
  )
}

export default about