import React, { useEffect, useRef, useState } from 'react'
import simg from '@assets/images/shadow.png'

const Variant = ({ section }: any) => {
  return (
    <div
    className="my-8 lg:my-20 py-6"
    id={section}
    style={{
      background: `url(${simg.src})`,
      backgroundPosition: 'bottom',
      backgroundRepeat: 'no-repeat',
    }}
  >
    <div className="bg-gray-100">
      <div className="header-container text-center py-12 bg-purple-900 text-white">
        <h1 className=" text-white mb-4 header-title text-3xl md:text-4xl lg:text-5xl font-bold">
          Smartphone Variants For Everyone
        </h1>
        <p className="font-bold text-center text-[18px] mb-8 text-blue-200">
          Discover iNVA, your gateway to high-quality smartphones at
          unbeatable prices.
        </p>
        <a
          href="#"
          className="demo-button  bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 md:py-3 md:px-6 rounded-full transition duration-300"
        >
          INVA & INVA-X
        </a>

        <div className="flex flex-col lg:flex-row mt-14 gap-4">
          <div className="w-full lg:w-1/2">
            <h2 className="text-white text-xl lg:text-4xl font-bold text-center mb-4">
              INVA MODEL
            </h2>

            <ul className=" text-[16px]  text-blue-200 leading-loose">
              <li className="mb-2 lg:mb-2">
                Type: Dimensity6020, 7nm
              </li>
              <li className="mb-2 lg:mb-2">
                No. of Cores: Octa-core
              </li>
              <li className="mb-2 lg:mb-2">Camera: 50MP/8MP</li>
              <li className="mb-2 lg:mb-2">Frequency: Upto 2.2GHz</li>
              <li className="mb-2 lg:mb-2">
                Memory: 6+128 (emmc+ddr4x)
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-1/2" data-aos="zoom-in">
            <img
              src="/gallery/bg_img.png"
              alt="/"
              className="w-full h-auto"
            />
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-col-reverse lg:flex-row mt-10 gap-4">
          <div className="w-full lg:w-1/2" data-aos="zoom-in">
            <img
              src="/gallery/img6.jpeg"
              alt="/"
              className="w-full h-auto"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="text-white text-xl lg:text-4xl font-bold text-center mb-4">
              INVA-X MODEL
            </h2>
            <ul className="text-[16px] text-blue-200 leading-loose">
              <li className="mb-2 lg:mb-2">
                Type: Dimensity6020, 7nm
              </li>
              <li className="mb-2 lg:mb-2">
                No. of Cores: Octa-core
              </li>
              <li className="mb-2 lg:mb-2">Camera: 50MP/8MP</li>
              <li className="mb-2 lg:mb-2">Frequency: Upto 2.2GHz</li>
              <li className="mb-2 lg:mb-2">
                Memory: 6+128 (emmc+ddr4x)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>)
}

export default Variant
