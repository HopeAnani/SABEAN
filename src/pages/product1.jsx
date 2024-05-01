import React from 'react'

const product1 = () => {
  return (
    <div className="bg-gray-100 py-12 mt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Product Description</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            High-Quality Product Name
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, nisi! Laborum labore ratione quibusdam
            adipisci ad unde dolorum quam placeat eos.
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-y-16 gap-x-6 lg:grid-cols-2 lg:gap-x-8">
            <div className="flex items-center justify-center">
              <img
                className="max-w-xs rounded-lg shadow-lg lg:max-w-lg"
                src="https://via.placeholder.com/500"
                alt="Product Image"
              />
            </div>
            <div className="mt-12 lg:mt-0">
              <h3 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">Product Features</h3>
              <div className="mt-6">
                <dl className="space-y-12">
                  <div>
                    <dt className="text-lg leading-6 font-medium text-gray-900">Feature 1</dt>
                    <dd className="mt-2 text-base text-gray-500">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.
                    </dd>
                  </div>
                  <div>
                    <dt className="text-lg leading-6 font-medium text-gray-900">Feature 2</dt>
                    <dd className="mt-2 text-base text-gray-500">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.
                    </dd>
                  </div>
                  <div>
                    <dt className="text-lg leading-6 font-medium text-gray-900">Feature 3</dt>
                    <dd className="mt-2 text-base text-gray-500">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.
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