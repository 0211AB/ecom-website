    import React from 'react'
    import Blog_01 from "../assets/Blog1.webp"
    import Blog_02 from "../assets/Blog2.webp"
    import Blog_03 from "../assets/Blog3.webp"
    import { BsTelephone, BsBuilding } from "react-icons/bs"
    import {
      AiOutlineFacebook,
      AiFillTwitterSquare,
      AiOutlineLinkedin,
      AiOutlineInstagram,
    } from "react-icons/ai"
    import { FiMail } from "react-icons/fi"

    const blog_data = [
      {
        id: 1,
        title: "Essential Body Oils",
        date: "October 20, 2022",
        image: Blog_01,
      },
      {
        id: 2,
        title: "Brand New Yellow Sofa",
        date: "November 03, 2022",
        image: Blog_02,
      },
      {
        id: 3,
        title: "Decorative Dining Table",
        date: "December 15, 2022",
        image: Blog_03,
      },
    ]

    const Footer = () => {
      return (
        <>
          <footer className="container mx-auto mt-28 grid grid-cols-1 space-y-10 bg-primary px-5 py-8 tracking-wider text-white md:mt-28 md:grid-cols-4 md:space-y-0 xl:px-28 xl:py-20 ">
            {/* J & S .  */}
            <section className="space-y-4">
              <h1 className="text-4xl font-black tracking-wider">J & S.</h1>
              <p className="w-2/3 text-sm font-light">
              A diverse collection of products from top brands and emerging designers alike. From fashion and beauty to electronics and home decor, find exactly what you're looking for in just a few clicks.
              </p>
            </section>

            {/* Contact us */}
            <section className="space-y-6">
              <div className="space-y-1">
                <h2 className="uppercase ">Contact us</h2>
                <div className="w-1/6 border-t"></div>
              </div>
              <div className="space-y-4 text-sm font-light">
                <p className="flex items-center space-x-1">
                  <span>
                    {" "}
                    <BsTelephone />{" "}
                  </span>
                  <span> (+91) 8017 254479</span>
                </p>
                <p className="flex items-center space-x-1">
                  <span>
                    {" "}
                    <FiMail />{" "}
                  </span>
                  <span> abhaybajaj0211@gmail.com</span>
                </p>
                <p className="flex items-center space-x-1">
                  <span>
                    {" "}
                    <BsBuilding />{" "}
                  </span>
                  <span> 15/2C Chetla Road , Kolkata</span>
                </p>
                <div className="flex space-x-6">
                  <a href="#" aria-label="Facebook">
                    <AiOutlineFacebook className="h-5 w-5" />
                  </a>
                  <a href="#" aria-label="Twitter">
                    <AiFillTwitterSquare className="h-5 w-5" />
                  </a>
                  <a href="#" aria-label="LinkedIn">
                    <AiOutlineLinkedin className="h-5 w-5" />
                  </a>
                  <a href="#" aria-label="Instagram">
                    <AiOutlineInstagram className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </section>

            {/* Useful links */}
            <section className="space-y-6">
              <div className="space-y-1">
                <h2 className="uppercase ">Useful links</h2>
                <div className="w-1/6 border-t"></div>
              </div>
              <div className="flex flex-col space-y-4 text-sm font-light">
                <a href="#" className="hover:text-white/80">
                  About J & S
                </a>
                <a href="#" className="hover:text-white/80">
                  Contact us
                </a>
                <a href="#" className="hover:text-white/80">
                  FAQ
                </a>
                <a href="#" className="hover:text-white/80">
                  Supports
                </a>
                <a href="#" className="hover:text-white/80">
                  Blog
                </a>
                <a href="#" className="hover:text-white/80">
                  Privacy Policy
                </a>
              </div>
            </section>

            {/* Latest section */}
            <section className="space-y-6">
              <div className="space-y-1">
                <h2 className="uppercase ">Latest Items</h2>
                <div className="w-1/6 border-t"></div>
              </div>
              <div className="flex flex-col space-y-3 font-light ">
                {blog_data.map((item) => {
                  const { id, title, image, date } = item
                  return (
                    <article
                      key={id}
                      className="flex items-center  justify-start space-x-4 md:flex-col md:items-start md:space-x-0 lg:flex-row xl:space-x-4 "
                    >
                      <img
                        width={300}
                        height={200}
                        src={image}
                        alt={title}
                        className="h-12 w-20 object-cover object-center"
                      />
                      <div className=" capitalize ">
                        <a href="#" className="text-sm hover:text-white/80 ">
                          {title}
                        </a>
                        <p className="text-xs text-gray-200"> {date} </p>
                      </div>
                    </article>
                  )
                })}
              </div>
            </section>
          </footer>
        </>
      )
    }

    export default Footer