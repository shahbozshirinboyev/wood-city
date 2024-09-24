// data
import { useState, useEffect } from "react";
import { NavbarMenu } from "../data/data";
import { NavLink, useNavigate } from "react-router-dom";

// logo
import logo from '../../public/logo/wood_city.png'

// Farmer Motion 
import { motion } from "framer-motion";

// ResponsiveMenu
import MobileMenu from './MobileMenu'

function Navbar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false);

  const handleToggle = () => {
    setOpen(!open); // Toggle the state
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => { window.removeEventListener("scroll", handleScroll); };
  }, []);

  return (
    <>
      <div className={`container flex justify-between gap-1 items-center bg-white ${isScrolled ? 'py-2 md:py-3 rounded-[25px]' : 'py-8'} transition-all duration-300`}>
        {/* logo section */}
        <div className="text-xl flex items-center gap-2 font-bold uppercase cursor-pointer">
          <motion.img src={logo} alt="" className="w-[150px]" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.950 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} onClick={() => {navigate('/')}} />
        </div>
        {/* Menu section */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-1 md:gap-2 lg:gap-4 text-gray-600">
            {NavbarMenu.map((item) => {
              return <li key={item.id} className="text-[14px] lg:text-[16px]">
                <NavLink to={item.link} className={({ isActive }) =>
              `inline-block py-1 px-3 font-semibold whitespace-nowrap hover:text-green-600 transition-all duration-300 ${
                isActive ? 'text-green-600 bg-green-100 rounded-full' : 'text-gray-600'
              }`
            }>{item.title}</NavLink>
              </li>;
            })}
          </ul>
        </div>
        {/* Icons section */}
        <div className="hidden md:hidden lg:hidden xl:flex items-center gap-1 text-[14px] lg:text-[14px]">
          <motion.button className="bg-green-600 whitespace-nowrap font-semibold text-white rounded-md border-2 border-green-600 px-2 py-1" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.950 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
          <i className="bi bi-telephone"></i>
          <span className="ml-2">+998 93 456 34 21</span>
          </motion.button>
        </div>
        {/* Mobile hamburger section */}
        <label className="btn btn-circle swap swap-rotate md:hidden">
          <input type="checkbox" checked={open} onChange={handleToggle} />
          {/* hamburger icon */}
          <i className="swap-off fill-current bi bi-list text-3xl"></i>
          {/* close icon */}
          <i className="swap-on fill-current bi bi-x text-3xl"></i>
        </label>  
      </div>
      {/* Mobile Sidebar Section */}
      <MobileMenu open={open}/>
    </>
  );
}

export default Navbar;
