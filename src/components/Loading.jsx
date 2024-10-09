// logo
import logo from "../../public/logo/wood_city_vertical.png";
function Loading() {
  return (
    <section className="relative">
      <div className="absolute w-full h-screen overflow-y-hidden z-[9999] bg-white">
        <div className="relative flex justify-center items-center w-full h-full">
          <img className="absolute w-[140px]" src={logo} alt="logo_vertical" />
          <div className="w-[220px] h-[220px] border-t-[4px] border-black rounded-full animate-spinner"></div>
        </div>
      </div>
    </section>
  );
}

export default Loading;
