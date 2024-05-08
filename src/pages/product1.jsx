import React from 'react';
import dn15 from '../images/DN15.png';
import dimension from '../images/Dimension.png'

const product1 = () => {
  const data = [
    ['DN(mm)', '15', '20', '25', '32', '40', '50', '65'],
    ['Size(inch)', '1/2"', '3/4"', '1"', '11/4"', '11/2"', '2"', '2 1/2'],
    ['Q4(m3/h)', '3.125', '5', '7.875', '12.5', '20', '31.25', '50'],
    ['Q3(m3/h)', '2.5', '4', '6.3', '10', '16', '25', '40'],
    ['R80-Q2(L/h)','50','80', '126', '200', '320', '500', '800'],
    ['R80-Q1(L/h)','31.25','50', '78.75', '125', '200', '312.5', '500'],
    ['R100-Q2(L/h)','40','64', '100.8', '160', '256', '400', '640'],
    ['R100-Q1(L/h)','25','40', '63', '100', '160', '250', '400'],
    ['R125-Q2(L/h)','32','51.2', '80.64', '128', '204.8', '320', '512'],
    ['R125-Q1(L/h)','20','32', '50.4', '80', '128', '200', '320'],
    ['R160-Q2(L/h)','25','40', '63', '100', '160', '250', '400'],
    ['R160-Q1(L/h)','15.62','25', '39.37', '62.5', '100', '156.2', '250'],
    ['Min reading(m3)', '0.00005','0.00005','0.00005','0.00005','0.00005','0.00005','0.00005',],
    ['Max reading(m3)', '99999', '99999','99999','99999','99999','99999','99999'],
    ['Max pressure(MAP)', '16', '16','16','16','16','16','16'],
    ['Max loss', '63', '63','63','63','63','63','63'],
    ['Max temperature', 'T50','T50','T50','T50','T50','T50','T50',],
    ['Length(L)', '165/190', '190/195', '260/225', '260/230', '300/245'],
    ['Width(W)', '98', '98', '103', '103', '124'],
    ['Height(H)', '104', '106', '115', '115', '153'],
    ['Connecting Thread D', 'G3/4B', 'G1B', 'G1 1/4B', 'G1 1/2B', 'G2"B'],
    // ['Weight(kgs)', '1.65', '1.79', '1.85', '2.68', '5.25', '7.25'],
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