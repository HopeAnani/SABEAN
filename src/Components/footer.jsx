import React from 'react'

const footer = () => {
  return (
    <footer className="bg-white bottom-0 w-[100%] flex text-[#0077b6] py-4 relative border-t-4 border-[#a2d5f1]">
        <div className="container mx-auto text-center">
            <p className="text-sm">
                Copyright &copy; {new Date().getFullYear()} SABEAN® PLC | All Rights Reserved.
            </p>
        </div>
    </footer>
  )
}

export default footer