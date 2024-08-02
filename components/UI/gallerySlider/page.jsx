import img1 from "../../../public/assets/images/hand.jpg";
import img2 from "../../../public/assets/images/m1.jpg";
import img3 from "../../../public/assets/images/hand.png";
import img4 from "../../../public/assets/images/m2.jpg";
import Link  from 'next/link';


export default function GallerySlider() {
  return (
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
          <img src={img1.src} className="w-full" />
        </div>
        <div className="flex-1">
          <img src={img2.src} className="w-full" />
        </div>
        <div className="flex-1">
          <img src={img3.src} className="w-full" />
        </div>
        <div className="flex-1">
          <img src={img4.src} className="w-full" />
        </div>
      </div>
    </div>
  );
}
