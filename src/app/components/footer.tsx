import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className="absolute lg:bottom-10 bottom-[-60px] left-0 right-0 text-center">
    <small className="text-gray-100">
      Developed by{" "}
      <Link href="https://toluojo.netlify.app/" target="_blank" className="text-sm font-light text-amber-700 bg-white p-1 rounded-md">
        Tolulope Ojo
      </Link>
    </small>
  </div>
  )
}

export default Footer