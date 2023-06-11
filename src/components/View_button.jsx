import React from "react"
import { Link } from "react-router-dom"

const View_button = ({ title, className }) => {
  return (
    <>
      <div className="pt-5 ">
        <Link
          className={`border-b border-white text-white py-1 text-[10px] uppercase tracking-wider hover:border-b-[#d9dfff] hover:text-[#d9dfff] ${className} `}
          to="/shop"
        >
          {title}
        </Link>
      </div>
    </>
  )
}

export default View_button
