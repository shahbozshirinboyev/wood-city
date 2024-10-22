// logo
import logo from "../../public/logo/wood_city_vertical.png";
function Loading({ loadOpacity }) {
  return (
    <section
      className={`sticky top-0 z-[99999] transition-all duration-1000 ${
        loadOpacity ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className=" w-full h-screen bg-white">
        <div className="relative flex justify-center items-center w-full h-full">
          <img className="absolute w-[140px]" src={logo} alt="logo_vertical" />
          <div className="w-[220px] h-[220px] border-4 border-t-transparent border-r-transparent border-b-greener border-l-greener rounded-full animate-spinner"></div>
        </div>
      </div>
    </section>
  );
}

export default Loading;
