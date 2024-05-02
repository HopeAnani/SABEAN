import React from 'react'

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-8 mt-32 flex flex-wrap">
      <div className="max-w-lg mx-auto my-6">
        <h2 className="text-5xl font-serif text-[#0077b6]  text-center mb-6">Get in Touch</h2>
        <p className="text-center text-gray-600 mb-8">Contact us for product inquiries, customer support, or general information.</p>
        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
          <div className="flex flex-col space-y-2">
            <div>
              <span className="text-gray-700 font-semibold">Phone:</span> <span className="text-gray-600">+251 94 414 0354</span>
            </div>
            <div>
              <span className="text-gray-700 font-semibold">Email:</span> <span className="text-gray-600">info@sabeanwatermeter.com</span>
            </div>
            <div>
              <span className="text-gray-700 font-semibold">Address:</span> <span className="text-gray-600">Kera, Kirkos Subcity, Addis Ababa, Ethiopia</span>
            </div>
          </div>
        </div>
        <div className="text-center">
          <button className="bg-[#0077b6] text-white p-2 rounded hover:bg-[#0b557c]"><a href='mailto:sasil@aliyun.com'>Contact Us</a></button>
        </div>
      </div>
      <div className="w-[600px] h-96 md:mr-20">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d744.0662574460972!2d38.75275876295437!3d8.986940311959057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOMKwNTknMTMuNCJOIDM4wrA0NScxMC40IkU!5e0!3m2!1sen!2set!4v1714642044088!5m2!1sen!2set"
        title="Google Map"
        className="w-full h-full border border-[#0077b6]"
        frameBorder="0"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    </div>
  )
}

export default Contact