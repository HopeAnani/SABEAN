import React from 'react'

const footer = () => {
  return (
    <footer className="bg-[#0077b6] bottom-0 w-[100%] flex text-white py-4 relative">
        <div className="container mx-auto text-center">
            <p className="text-sm">
                Copyright &copy; {new Date().getFullYear()} SABEAN® PLC | All Rights Reserved.
            </p>
        </div>
    </footer>
  )
}

export default footer