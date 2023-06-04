import React from 'react'
import BG from "../assets/home-bg.webp"
import { View_button } from "../components"
const Header = () => {
  return (
    <header className="container relative mx-auto flex overflow-hidden bg-[#ff96aa] px-5 py-14 lg:py-20 xl:h-[28rem] xl:px-28">
      <div className=" space-y-8 md:w-2/3 md:space-y-16 xl:w-1/2">
        <div className="space-y-4">
          <h1 className="text-4xl font-light capitalize leading-[1.2] md:text-5xl">
            {" "}
            <span className=" font-medium text-[#141c36]">Jhanwar</span> And Sons{" "}
          </h1>
          <p className="font-medium text-lg text-[#ffe7e6]">
            A diverse collection of products from top brands and emerging designers alike. From fashion and beauty to electronics and home decor, find exactly what you're looking for in just a few clicks.
          </p>
        </div>
        <View_button title="View Now" className="text-sm"/>
      </div>
      <img
        src={BG}
        alt=""
        className=" absolute bottom-10 hidden right-40 w-80 scale-250 transform object-cover object-center md:flex xl:w-96 "
      />
    </header>
  )
}

export default Header