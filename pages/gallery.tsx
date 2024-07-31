import Container from "@common/Container";
import { Header } from "@common/Layout";
import Hire from "@components/UI/Hire";
import GallaryPhotos from "@components/UI/GallaryPhotos";
import GallarySlider from "@components/UI/GallarySlider";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
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
      <GallaryPhotos />
      <GallarySlider />
      <Hire />
    </div>
  );
};

export default Gallery;
