import img1 from "../../public/galleryImage/img22.png";
import img2 from "../../public/galleryImage/img12.jpeg";
import img3 from "../../public/galleryImage/img13.jpeg";
import img4 from "../../public/galleryImage/img14.jpeg";
import img5 from "../../public/galleryImage/img15.jpeg";
import img6 from "../../public/galleryImage/img16.jpeg";
import img7 from "../../public/galleryImage/img17.jpeg";
import img8 from "../../public/galleryImage/img18.jpeg";
import img9 from "../../public/galleryImage/img19.jpeg";
import img10 from "../../public/galleryImage/img20.jpeg";
import img11 from "../../public/galleryImage/img21.jpeg";

export default function GallaryPhotos() {
  return (
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
  );
}
