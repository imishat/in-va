import img from "../../public/assets/images/r/mob1.jpeg";

export default function Hire() {
  return (
    <div className="group mt-28 flex cursor-pointer justify-between ">
      <div className="w-2/5 overflow-hidden">
        <img
          src={img.src}
          className="w-full transition-transform duration-1000 ease-in-out group-hover:scale-125"
        />
      </div>
      <div className="hover-box relative flex w-3/5 flex-col items-center justify-center bg-[#272B3D] text-white transition-all duration-200">
        <div className="z-50">
          <h4 className="text-3xl font-bold">Contact  us</h4>
          <p className="mt-5 text-lg">
            We are currently <br />
            talking on new clients
          </p>
        </div>
      </div>
    </div>
  );
}
