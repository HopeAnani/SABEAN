import React from 'react'

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-8 mt-32">
      <div className="max-w-lg mx-auto">
        <h2 className="text-5xl font-serif text-[#0077b6]  text-center mb-6">Get in Touch</h2>
        <p className="text-center text-gray-600 mb-8">Contact us for product inquiries, customer support, or general information.</p>
        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
          <div className="flex flex-col space-y-2">
            <div>
              <span className="text-gray-700 font-semibold">Phone:</span> <span className="text-gray-600">+1234567890</span>
            </div>
            <div>
              <span className="text-gray-700 font-semibold">Email:</span> <span className="text-gray-600">info@example.com</span>
            </div>
            <div>
              <span className="text-gray-700 font-semibold">Address:</span> <span className="text-gray-600">123 Main Street, City, Country</span>
            </div>
          </div>
        </div>
        <div className="text-center">
          <button className="bg-[#0077b6] text-white p-2 rounded hover:bg-[#0b557c]"><a href='https://aceadvisors.org/'>Contact Us</a></button>
        </div>
      </div>
    </div>
  )
}

export default Contact