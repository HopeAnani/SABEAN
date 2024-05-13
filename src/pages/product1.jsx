import React from 'react';
import dn15 from '../images/product2.jpg';
import dimension from '../images/DN15 (2).png'
import error from '../images/error.png'
import img from '../images/product3.jpg'
import img2 from '../images/product4.jpg'

const product1 = () => {
  const data = [
    ['DN(mm)', '15', '20', '25', '32', '40', ],
    ['Size(inch)', '1/2"', '3/4"', '1"', '11/4"', '11/2"', ],
    ['Q4(m3/h)', '3.125', '5', '7.875', '12.5', '20', ],
    ['Q3(m3/h)', '2.5', '4', '6.3', '10', '16', ],
    ['R160-Q2(L/h)','25','40', '63', '100', '160', ],
    ['R160-Q1(L/h)','15.62','25', '39.37', '62.5', '100',],
    ['Min reading(m3)', '0.00005','0.00005','0.00005','0.00005','0.00005',],
    ['Max reading(m3)', '99999', '99999','99999','99999','99999',],
    ['Max pressure(MAP)', '16', '16','16','16','16',],
    ['Max loss', '63', '63','63','63','63',],
    ['Max temperature', 'T50','T50','T50','T50','T50',],
    // ['Weight(kgs)', '1.65', '1.79', '1.85', '2.68', '5.25', '7.25'],
  ];

  const data2 = [
    ['Length(L)','Width(W)','Height(H)','Connecting Thread D'],
    ['165/190','98','104','G3/4B'],
    ['190/195','98','106','G1B'],
    ['260/225','103','115','G1 1/4B'],
    ['260/230','103','115','G1 1/2B'],
    ['300/245','124','153','G2"B'],
  ]

  return (
    <div className="py-12 mt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="mt-2 text-3xl leading-8 font-serif font-extrabold tracking-tight text-[#0077b6] sm:text-4xl">
            MultiJet water meters
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto max-sm:text-justify">
            Our Multi-jet water meters are meticulously engineered using carefully selected raw materials. This ensures not only their durability but also guarantees stable performance without any waste. These meters are designed to provide accurate measurements, making them a reliable choice for your water metering needs.
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-y-16 gap-x-6 lg:grid-cols-2 lg:gap-x-8">
            <div className=" grid grid-cols-1 items-center justify-center">
              <img
                className="max-w-xs rounded-lg shadow-lg lg:max-w-lg"
                src={dn15}
                alt="Product Image"
              />
              <div className='flex m-4 md:gap-10 gap-4 items-center mt-4'>
                <img src={img} className='md:w-52 w-36  rounded-sm shadow-lg border border-[#0077b6] hover:scale-125'/>
                <img src={img2} className=' md:w-52 w-36 rounded-sm shadow-lg border border-[#0077b6] hover:scale-125'/>
              </div>
            </div>
            <div className="mt-12 lg:mt-0">
              <h3 className="text-2xl font-extrabold  font-serif tracking-tight text-[#0077b6] sm:text-3xl">Product Features</h3>
              <div className="mt-6">
                <dl className="space-y-12">
                  <div>
                    <dd className="mt-2 text-base text-gray-500 text-justify">
                      Our Multi-jet water meters are designed with a focus on durability, accuracy, and resistance to wear and tear. Here are the key features:
                    </dd>
                  </div>
                  <div>
                    <dd className="mt-2 text-base text-gray-500 text-justify">
                    <ul>
                      <li className='mb-1'>1.	<span className=' font-semibold'>Corrosion Resistance:</span> The meter bodies are constructed from high-grade brass, known for its excellent corrosion resistance, ensuring longevity and reliability.</li>
                      <li className='mb-1'>2.	<span className=' font-semibold'>Wear and Tear Resistant Counter:</span> The counter mechanism is fabricated from pure polymer, a material recognized for its resistance to wear and tear, ensuring consistent performance over time.</li>
                      <li className='mb-1'>3.	<span className=' font-semibold'>IP68 Dry Type Counter: </span> The counter is of the IP68 standard, indicating it is dust-tight and protected against continuous immersion in water. It is vacuum-packed to ensure its integrity and functionality are maintained in various conditions.</li>
                      <li className='mb-1'>4.	<span className=' font-semibold'>Couplers Included:</span> The meter comes with couplers, providing a secure and efficient connection to your water supply system.</li>
                      <li className='mb-1'>5.	<span className=' font-semibold'>Anti-interference:</span> The meter incorporates Magnetic Protection to safeguard against external influences that could affect its operation.</li>
                      <li className='mb-1'>6.	<span className=' font-semibold'>Direct Reading:</span> The indicator register features 5 Rollers and 4 Pointers, facilitating direct and easy reading of water usage.</li>
                      <li className='mb-1'>7.	<span className=' font-semibold'>Extra Inlet Filter:</span> An additional inlet filter is included to protect the water meter from any potential damage caused by grit and particulates.</li>
                      <li className='mb-1'>8.	<span className=' font-semibold'>Non-Return Valve:</span> A non-return valve is incorporated to prevent reverse flow, ensuring accurate readings. This feature is optional and can be included as per your requirements.</li>
                      <li className='mb-1'>9.	<span className=' font-semibold'>High Pressure Resistance:</span> The meter can withstand static pressure up to 25 bar, making it suitable for high-pressure water supply systems.</li>
                    </ul>
                    </dd>
                  </div>
                  <div>
                    <dd className="mt-2 text-base text-gray-500 text-justify">
                    These features make our Multi-jet water meters a reliable and efficient choice for your water metering needs. They are designed to deliver accurate measurements consistently, even in challenging conditions.
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div>

          <div className="overflow-x-auto mt-20">
            <h3 className="text-2xl font-serif font-extrabold tracking-tight text-[#0077b6] sm:text-3xl md:mb-12 mb-2">Metrology ISO4064-2005</h3>
            <table className="min-w-full divide-y divide-gray-200">
              <tbody className="bg-white divide-y divide-gray-200">
                {data.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {row.map((cell, colIndex) => (
                      <td key={colIndex} className={`px-6 py-4 whitespace-nowrap text-sm text-gray-500 ${colIndex === 0 ? 'font-bold' : ''}`}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div>

          <div className="overflow-x-auto mt-20">
            <h3 className="text-2xl font-serif font-extrabold tracking-tight text-[#0077b6] sm:text-3xl md:mb-12 mb-2">Overall Dimesion and Weight</h3>
            <div className='flex flex-wrap md:space-x-20'>
            <table className="divide-y divide-gray-200">
              <tbody className="bg-white divide-y divide-gray-200">
                {data2.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {row.map((cell, colIndex) => (
                      <td key={colIndex} className={`px-6 py-4 whitespace-wrap text-sm text-gray-500 ${rowIndex === 0 ? 'font-bold' : ''}`}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>

            <img src={dimension} alt="" className='mt-6 md:block hidden' />
            </div>
          </div>
          <img src={dimension} alt="" className='mt-6 md:hidden' />
        </div>

        <div>
          <h3 className="text-2xl font-serif font-extrabold tracking-tight text-[#0077b6] sm:text-3xl md:mb-12 mb-2">Max Permissible Error</h3>
          <img src={error} alt="" className='mt-6 ' />
        </div>
        <div className='mt-10 font-serif'>
          <h3 className="text-2xl font-serif font-extrabold tracking-tight text-[#2b2b2b] sm:text-3xl md:mb-12 mb-2"><span className='text-[#0077b6]'>MODEL NUMBER:</span> SBME-<span className=' text-blue-500'>C</span><span className=' text-red-500'>M</span><span className=' text-yellow-500'>H</span><span className=' text-gray-500'>D</span><span className='text-orange-500'>B</span>-DN15-DN40 </h3>
          <ul className='font-semibold text-2xl md:flex md:flex-wrap gap-4'>
            <li className='text-blue-500'>C - Cold</li>
            <li className=' text-red-500'>M - Multi-jet</li>
            <li className=' text-yellow-500'>H - Horizontal</li>
            <li className=' text-gray-500'>D - Dry</li>
            <li className=' text-orange-500'>B - Brass</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default product1;