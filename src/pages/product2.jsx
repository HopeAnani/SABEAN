import React from 'react'
import dn15 from '../images/Gate-valve.png';
import gate from '../images/gate.png'

const product2 = () => {
  return (
    <div className="py-12 mt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="mt-2 text-3xl leading-8 font-serif font-extrabold tracking-tight text-[#0077b6] sm:text-4xl">
            Gate Valves
          </p>
          <p className="mt-4 max-w-5xl text-xl text-gray-500 lg:mx-auto">
          A gate valve is generally used to completely shut off fluid flow or, in the fully open position, provide full flow in a pipeline. Thus it is used either in the fully closed or fully open positions. A gate valve consists of a valve body, seat and disc, a spindle, gland, and a wheel for operating the valve. The seat and the gate together perform the function of shutting off the flow of fluid.
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
                    Gate valves are characterized by a “gate” that closes in a plane perpendicular to the flow of fluid. They are used primarily for on/off, nonthrottling service. Shearing of high-velocity flow will cause a partially open disk to vibrate and chatter, which will damage the seating surfaces and prevent a tight seal. They are suitable for most fluids including steam, water, oil, air, and gas. Gate valves may have either a solid or flexible wedge disk. In addition to on/off service, gate valves can be used for regulating flow, usually in sizes 6 in. and larger, but will chatter unless the disk is fully guided throughout travel.
                    </dd>
                  </div>
                  <div>
                    <img src={gate}></img>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default product2