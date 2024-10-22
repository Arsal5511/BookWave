/* eslint-disable */

import React from "react"
import banner from "../../../public/images/banner.jpg"

function Banner() {
  return (
    <>
      <div className="mx-auto max-w-screen-2xl container my-10 md:px-20 md:pr-0 px-4 flex flex-col md:flex-row">
        <div className="w-full md:w-1/2">
          <div className="order-2 md:order-1 mt-12 md:mt-32 space-y-6">
            <h1 className="text-2xl md:text-4xl">
              Lorem ipsum dolor sit amet consect adipis eli{" "}
              <span className="text-blue-300">this is me Arslan abbas</span>
            </h1>
            <p className="text-md md:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas nemo
              quidem cum expedita aliquid! Error, quod, vero corrupti
              necessitatibus cupiditate rem fugit dolorem ratione, labore quidem
              reiciendis eaque unde praesentium distinctio quo provident fugiat.
            </p>

            <label className=" input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Email" />
            </label>
          </div>
          <button className="btn btn-outline text-blue-300 border-blue-300 outline-none mt-4 hover:bg-blue-300 hover:border-none btn-xs sm:btn-sm md:btn-md ">Send Mail</button>
        </div>


        <div className="w-full order-1 md:w-1/2 m-auto">
            <img className=" w-92 h-92" src={banner} alt="" />
        </div>
      </div>
    </>
  );
}

export default Banner;
