
import { Container } from "components/common";
import { Header } from "components/common/Layout";


import Hire from "components/UI/Hire";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
// gaggerpothos
import img1 from "../public/galleryImage/img22.png";
import img2 from "../public/galleryImage/img12.jpeg";
import img3 from "../public/galleryImage/img13.jpeg";
import img4 from "../public/galleryImage/img14.jpeg";
import img5 from "../public/galleryImage/img15.jpeg";
import img6 from "../public/galleryImage/img16.jpeg";

import img7 from "../public/galleryImage/img17.jpeg";
import img8 from "../public/galleryImage/img18.jpeg";
import img9 from "../public/galleryImage/img19.jpeg";
import img10 from "../public/galleryImage/img20.jpeg";
import img11 from "../public/galleryImage/img21.jpeg";

import img12 from "../public/assets/images/hand.jpg";

import img14 from "../public/assets/images/hand.png";
import img15 from "../public/assets/images/m2.jpg";
import Link  from 'next/link';


const Gallery = () => {
  const Phone = [
    {
      camera: {
        brand: "Canon",
        model: "EOS R5",
      },

      descriptions: {
        description:
          "6.517 HD+ waterdrop display, cost-effective with modern design, 5000 mAh larger battery",
      },

      display: {
        type: "Hole-punch",
        size_in_inches: 6.517,
        resolution: "2100x1400",
      },
      storage: {
        type: "SD Card",
        capacity_GB: 128,
        used_GB: 64,
      },
      images: "/galleryImage/img22.png",
      name: "Invo",
    },

    {
      camera: {
        brand: "Canon",
        model: "EOS R5",
      },
      battery: {
        type: "Li-ion",
        capacity_mAh: 2130,
        remaining_percentage: 85,
      },
      display: {
        type: "Hole-punch",
        size_in_inches: 6.6,
        resolution: "2100x1400",
      },
      storage: {
        type: "SD Card",
        capacity_GB: 128,
        used_GB: 64,
      },
      descriptions: {
        description:
          "Dimensity 6020 Octa-core 2.2Ghz+7nm, 6.6HD+Hole-punch Display, Most-Cost-effective 5G with powerful performance, Fashion design and breathing light (optional)",
      },
      images: "/galleryImage/img4.jpeg",
      name: "Invo X",
    },
  ];

  return (
    <div>
      <Header />
      <Container>
        <div className="container mx-auto px-4 py-8 pt-20">
          <div className="flex flex-wrap items-center justify-between py-10">
            <h1 className="text-4xl font-semibold tracking-wider text-[#333] lg:text-6xl">
            Inva 
              <br />
              Presentation
            </h1>
            <div className="mt-7 flex gap-7 opacity-60 md:mt-0">
              <p className="cursor-pointer rounded-full border border-[#333] p-2 transition-transform duration-200 hover:-translate-y-2 hover:transform lg:p-5">
                <FaFacebook className="text-xl" />
              </p>
              <p className="cursor-pointer rounded-full border border-[#333] p-2 transition-transform duration-200 hover:-translate-y-2 hover:transform lg:p-5">
                <FaInstagram className="text-xl" />
              </p>
              <p className="cursor-pointer rounded-full border border-[#333] p-2 transition-transform duration-200 hover:-translate-y-2 hover:transform lg:p-5">
                <FaYoutube className="text-xl" />
              </p>
            </div>
          </div>
          <div className="">
            {/* <PageTitle title="Contact" description={''} items={[]} isContact /> */}
            <h1 className="mt-6 mb-12 text-7xl font-black opacity-50 lg:text-9xl">
              Gallery
            </h1>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {Phone?.map((item, index) => (
              <div key={index} className="max-w-[500px]">
                <img
                  className="h-[500px] w-[500px] rounded-t-lg object-cover"
                  src={item?.images}
                  alt={`Gallery image ${index + 1}`}
                />
                <div className="px-5 pt-8">
                  <h1 className="border-b border-[#00000033] pb-7 text-3xl font-bold text-[#333] transition-colors duration-200 ">
                    {item?.name}
                  </h1>
                  <p className="mt-6 max-w-[370px] pb-[15px] text-sm leading-[25px] text-[#444]">
                    {item?.descriptions?.description}
                    {/* <button className="mt-5 block rounded-full border border-[#333] py-2 px-6 text-lg text-[#333] transition-colors duration-300 hover:bg-[#333] hover:text-white">
                      Explore
                    </button> */}
                  </p>
                  <div className="flex justify-between border-y border-[#00000033] py-5">
                    <h1 className="flex-1 text-sm font-semibold">
                      DISPLAY TYPE
                    </h1>
                    <h1 className="flex-1 text-sm text-black/70">
                      {item?.display?.type}
                    </h1>
                  </div>
                  <div className="flex justify-between border-y border-[#00000033] py-5">
                    <h1 className="flex-1 text-sm font-semibold">
                      DISPLAY SIZE(inch)
                    </h1>
                    <h1 className="flex-1 text-sm text-black/70">
                      {item?.display?.size_in_inches}
                    </h1>
                  </div>
                  <div className="flex justify-between border-b border-[#00000033] py-5">
                    <h1 className="flex-1 text-sm font-semibold">
                    Configuration</h1>
                    <ul className="flex-1 space-y-3 text-xs font-semibold text-black/70">
                      <li>5000 mAh Battery</li>
                      <li>3 Card Slot</li>
                      <li>50 MP +2+VGA</li>
                      <li>8MP Front camera</li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
      <>
      <div className="relative mx-auto max-w-screen-2xl bg-gray-50 px-4 py-16 lg:py-24">
        <div className="flex flex-col gap-2 md:flex-row">
          <div className="flex flex-1 flex-col gap-2">
            <div className="flex flex-1 flex-col">
              <img className="h-full object-cover" src={img1.src} alt="" />
            </div>
            <div className="hidden flex-1 flex-row gap-2 md:flex">
              <div className="flex flex-1 flex-col">
                <img className="h-full object-cover" src={img2.src} alt="" />
              </div>
              <div className="hidden flex-1 flex-col md:flex">
                <img className="h-full object-cover" src={img3.src} alt="" />
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-2">
            <div className="hidden flex-1 flex-row gap-2 md:flex">
              <div className="flex flex-1 flex-col">
                <img className="h-full object-cover" src={img4.src} alt="" />
              </div>
              <div className="hidden flex-1 flex-col md:flex">
                <img className="h-full object-cover" src={img5.src} alt="" />
              </div>
            </div>
            <div className="flex flex-1 flex-col">
              <img className="h-full object-cover" src={img6.src} alt="" />
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-center text-5xl text-[#333]">All Photo</h1>
      <div className="relative mx-auto max-w-screen-2xl bg-white px-4 py-16 lg:py-24">
        <div className="flex flex-col gap-2 md:flex-row">
          <div className="flex flex-1 flex-col">
            <div className="flex flex-1 flex-col">
              <img className="h-full object-cover" src={img7.src} alt="" />
            </div>
          </div>
          <div className="flex flex-1">
            <div className="grid grid-cols-2 gap-2">
              <div>
                <img className="h-full object-cover" src={img8.src} alt="" />
              </div>
              <div>
                <img className="h-full object-cover" src={img9.src} alt="" />
              </div>
              <div>
                <img className="h-full object-cover" src={img10.src} alt="" />
              </div>
              <div>
                <img className="h-full object-cover" src={img11.src} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

    {/* gallery slider */}

    <div>
      <div className=" text-center">
        <p className="text-sm font-semibold tracking-[7px] text-[#333]">
          We Are
        </p>
        <h1 className="mt-5 text-5xl font-bold text-[#333] lg:text-8xl">
          Aesthetically
          <br />
          minded team
        </h1>
        <p className="mt-5 text-sm text-[#333333e8] lg:text-lg">
          We are a team of branding and design experts with over a<br />
          decade of experience and expertise.
        </p>
        <button className="mx-auto mt-5 block rounded-full border border-[#333] py-2 px-6 text-lg text-[#333] transition-colors duration-300 hover:bg-[#333] hover:text-white">
          <Link href="/about">
          About
          </Link>
        </button >
      </div>
      <div className="mt-10 flex w-full items-end gap-10 overflow-hidden">
        <div className="flex-1">
          <img src={img12.src} className="w-full" />
        </div>
        <div className="flex-1">
          <img src={"../public/assets/images/m1.jpg"} className="w-full" />
        </div>
        <div className="flex-1">
          <img src={img14.src} className="w-full" />
        </div>
        <div className="flex-1">
          <img src={img15.src} className="w-full" />
        </div>
      </div>
    </div>

    
      <Hire />
    </div>
  );
};

export default Gallery;
