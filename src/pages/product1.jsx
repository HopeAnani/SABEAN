import React from 'react'
import dn15 from '../images/DN15.png'

const product1 = () => {
  return (
    <div className=" py-12 mt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="mt-2 text-3xl leading-8 font-serif font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            MultiJet water meters DN-15
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          Multi jet mechanical clod water meter, the mechanism is made of 100% raw materials, without any waste, which enhances the wear resistance and ensures the stability of the counting part.
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
              <h3 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">Product Description</h3>
              <div className="mt-6">
                <dl className="space-y-12">
                  <div>
                    {/* <dt className="text-lg leading-6 font-medium text-gray-900">Feature 1</dt> */}
                    <dd className="mt-2 text-base text-gray-500">
                    Multi jet mechanical clod water meter, the mechanism is made of 100% raw materials, without any waste, which enhances the wear resistance and ensures the stability of the counting part.
                    </dd>
                  </div>
                  <div>
                    {/* <dt className="text-lg leading-6 font-medium text-gray-900">Feature 2</dt> */}
                    <dd className="mt-2 text-base text-gray-500">
                      The movement is made of 100% raw material, without any waste, which enhances the wear resistance and ensures the stability of the counting part. The counter is vacuum sealed and the built-in desiccant is a long-drying dial that is not easy to fog. The metering accurately reaches the standard of iso4064, which is ±5% from the large allowable error in the low zone including the small flow rate to the low zone excluding the boundary flow; the large range from the boundary flow including the high flow including the overload flow Allowable error cold water meter is ±2%.
                    </dd>
                  </div>
                  {/* Add more features as needed */}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default product1