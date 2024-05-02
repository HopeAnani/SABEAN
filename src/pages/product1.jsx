import React from 'react';
import dn15 from '../images/DN15.png';
import dimension from '../images/Dimension.png'

const product1 = () => {
  const data = [
    ['DN(mm)', '15', '20', '25', '32', '40', '50', '50'],
    ['Size(inch)', '1/2"', '3/4"', '1"', '1-1/4"', '1-1/2"', '2"', '2"'],
    ['Length(L)', '165/190', '190', '260', '260', '300', '300', '280'],
    ['Width(W)', '98', '98', '103.5', '103.5', '125', '125', '160'],
    ['Height(H)', '116', '117', '124', '124', '162', '162', '187.5'],
    ['Connecting Thread D', 'G3/4B', 'G1B', 'G11/4B', 'G11/2B', 'G2B', 'G21/2B', 'Flang end'],
    ['Weight(kgs)', '1.65', '1.79', '1.85', '2.68', '5.25', '7.25'],
  ];

  const data2 = [
    ['Product Name','Multi Jet Water Meter'],
    ['Sizes','15~50mm'],
    ['Material','Brass/Plastic/Stainless steel'],
    ['Temprature','Cold/Hot water'],
    ['Connection Method','BSP / NPT'],
    ['Range ratio','R=80; 100; 125; 160; class b; class c'],
    ['Register sealed type','Dry type; Semi-dry type; Super-dry type'],
    ['Application','Measuring the volume of cold(hot) water passing through the pipeline. Water meter is used for home, commercial, municipality, pipeline'],
  ]

  return (
    <div className="py-12 mt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="mt-2 text-3xl leading-8 font-serif font-extrabold tracking-tight text-[#0077b6] sm:text-4xl">
            MultiJet water meters
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Multi jet mechanical cold water meter, the mechanism is made of 100% raw materials, without any waste, which enhances the wear resistance and ensures the stability of the counting part.
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-y-16 gap-x-6 lg:grid-cols-2 lg:gap-x-8">
            <div className="flex items-center justify-center">
              <img
                className="max-w-xs rounded-lg shadow-lg lg:max-w-lg"
                src={dn15}
                alt="Product Image"
              />
            </div>
            <div className="mt-12 lg:mt-0">
              <h3 className="text-2xl font-extrabold  font-serif tracking-tight text-[#0077b6] sm:text-3xl">Product</h3>
              <div className="mt-6">
                <dl className="space-y-12">
                  <div>
                    <dd className="mt-2 text-base text-gray-500 text-justify">
                      Multi jet mechanical cold water meter, the mechanism is made of 100% raw materials, without any waste, which enhances the wear resistance and ensures the stability of the counting part.
                    </dd>
                  </div>
                  <div>
                    <dd className="mt-2 text-base text-gray-500 text-justify">
                      The movement is made of 100% raw material, without any waste, which enhances the wear resistance and ensures the stability of the counting part. The counter is vacuum sealed and the built-in desiccant is a long-drying dial that is not easy to fog. The metering accurately reaches the standard of iso4064, which is ±5% from the large allowable error in the low zone including the small flow rate to the low zone excluding the boundary flow; the large range from the boundary flow including the high flow including the overload flow Allowable error cold water meter is ±2%.
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div>

          <div className="overflow-x-auto mt-20">
            <h3 className="text-2xl font-serif font-extrabold tracking-tight text-[#0077b6] sm:text-3xl md:mb-12 mb-2">Overall Dimesion and Weight</h3>
            <img src={dimension} alt="" />
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
            <h3 className="text-2xl font-serif font-extrabold tracking-tight text-[#0077b6] sm:text-3xl md:mb-12 mb-2">Product Description</h3>
            <table className="min-w-full divide-y divide-gray-200">
              <tbody className="bg-white divide-y divide-gray-200">
                {data2.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {row.map((cell, colIndex) => (
                      <td key={colIndex} className={`px-6 py-4 whitespace-wrap text-sm text-gray-500 ${colIndex === 0 ? 'font-bold' : ''}`}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default product1;