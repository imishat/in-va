import React, { useEffect, useRef, useState } from "react";
// import simg from "@assets/images/shadow.png";
import icon from "../public/assets/images/icons/icon-cate-3.png";
import img from "../public/assets/images/Screenshot 2024-07-18 at 01.15.45.png";
import img1 from '../public/assets/images/phon1-removebg-preview.png';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";


const Variant = ({ section }: any) => {
  return (
    <div>
      <div className="relative flex h-full w-full flex-wrap items-center justify-evenly bg-[#e2f0f9] py-5 lg:h-[90vh]">
        <div className=" px-[15px]">
          <h1 className="text-center text-2xl font-light text-[#333]">
            EASIEST CHECHOUT WITH
            <br />
            <span className="mt-1 block text-[32px] font-bold">INVA</span>
          </h1>
          <p className="mx-auto mt-3 text-center text-sm font-normal text-[#444] lg:max-w-[65%]">
     Inva Configuration Presentation
          </p>
          <img src={img1.src} className="h-[400px] w-[600px] max-w-full align-middle" />
        </div>
        <div className="mt-14 text-center lg:self-start lg:text-left">
          <div className="absolute top-0 hidden h-24 items-end bg-white p-1 lg:flex">
            <img src={icon.src} className="flex flex-col items-end" />
          </div>
          <h1 className="text-3xl font-bold text-[#333] transition-colors duration-200 hover:text-white lg:ml-10">
           INVA
          </h1>
          <p className="mt-6 max-w-[370px] border-b border-[#00000033] pb-[15px] text-sm leading-[25px] text-[#444]">
            <ul>
              <li>6.517 HD+waterDorp Display</li>
              <li>Cost-effective with modern design</li>
              <li>5000 Ah larger Battery</li>
            </ul>
          </p>
          <ul className="pt-[15px] text-sm font-bold text-[#444] ">
            <li className="my-[16px] cursor-pointer">6.517 HD+ Display</li>
            <li className="my-[16px] cursor-pointer">HelloG36(4G) Octa-core </li>
            <li className="my-[16px] cursor-pointer"></li>
            <li className="my-[16px] cursor-pointer">50 MP +VGA+VGA </li>
            <li className="my-[16px] cursor-pointer">8MP Front Camera</li>
            <li className="my-[16px] cursor-pointer">4GB+64GB ,(4Gb:128GB)</li>
            <li className="my-[16px] cursor-pointer">5000mh (Battery)</li>
            <li className="group mt-[40px] flex cursor-pointer items-center justify-center gap-5 transition-colors duration-200 hover:text-white lg:justify-start">
              View all Products
              <span className="rounded-full bg-[#333] p-2 transition-colors duration-200 group-hover:bg-white">
                <MdOutlineKeyboardArrowRight className="text-2xl text-white transition-colors duration-200 group-hover:text-[#333]" />
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative flex h-full w-full flex-row-reverse flex-wrap items-center justify-evenly  py-5 lg:h-[90vh]">
        <div className=" px-[15px]">
          <h1 className="text-center text-2xl font-light text-[#333]">
            EASIEST CHECHOUT WITH
            <br />
            <span className="mt-1 block text-[32px] font-bold">iNVA X</span>
          </h1>
          <p className="mx-auto mt-3 text-center text-sm font-normal text-[#444] lg:max-w-[65%]">
          Inva Configuration Presentation
          </p>
          <img src={img.src} className="h-[500px] w=[500px] max-w-full align-middle" />
        </div>
        <div className="mt-14 text-center lg:self-start lg:text-left">
          <div className="absolute top-0 hidden h-24 items-end bg-[#e2f0f9] p-1 lg:flex">
            <img src={icon.src} className="flex flex-col items-end" />
          </div>
          <h1 className="text-3xl font-bold text-[#333] transition-colors duration-200 hover:text-white lg:ml-10">
            INVA X
          </h1>
          <p className="mt-6 max-w-[370px] border-b border-[#00000033] pb-[15px] text-sm leading-[25px] text-[#444]">
          <ul>
              <li>Dimensity 6020 Octa-core 2.2Ghz+7nm </li>
              <li>6.6HD+Hole-punch Display</li>
              <li>-Most-Cost-effective 5G with powerful performance</li>
              <li>Fashion design and breathing light (optional)</li>
            </ul> 
          </p>
          <ul className="pt-[15px] text-sm font-bold text-[#444] ">
            <li className="my-[16px] cursor-pointer">6.6HD+Hole-punch Display</li>
            <li className="my-[16px] cursor-pointer">Dimensity 6020 Octa-core 2.2Ghz+7nm</li>
            <li className="my-[16px] cursor-pointer">50 MP +2+VGA </li>
            <li className="my-[16px] cursor-pointer">8MP Front camera</li>
            <li className="my-[16px] cursor-pointer">6GB+128GB ,(8Gb:264GB)</li>
            <li className="my-[16px] cursor-pointer">3 Card Slot</li>
            <li className="my-[16px] cursor-pointer">5000 mAh Battery</li>
            <li className="group mt-[40px] flex cursor-pointer items-center gap-5 transition-colors duration-200 hover:text-[#9ce0f4]">
              View all Products
              <span className="rounded-full bg-[#9ce0f4] p-2 transition-colors duration-200 group-hover:bg-[#9ce0f4]">
                <MdOutlineKeyboardArrowRight className="text-2xl text-[#333] transition-colors duration-200 group-hover:text-white" />
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Variant;
