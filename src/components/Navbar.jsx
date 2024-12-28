// data
import { useState, useEffect } from "react";
import { NavbarMenu } from "../data/data";
import { NavLink, useNavigate } from "react-router-dom";
// logo
import logo from "../../public/logo/wood_city.png";
// Farmer Motion
import { motion } from "framer-motion";
// ResponsiveMenu
import MobileMenu from "./MobileMenu";

function Navbar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleToggle = () => { setOpen(!open); };
  const scrollToTop = () => { window.scrollTo({ top: 0, behavior: "smooth", });};

  return (
    <section className="bg-lighter shadow-md top-0">
      <div
        className={`container flex justify-between gap-1 items-center py-2 md:py-4 lg:py-6 transition-all duration-300`}
      >
        {/* logo section */}
        <div className="flex items-center gap-2 text-xl font-bold uppercase cursor-pointer">
          <motion.img
            src={logo}
            alt=""
            className="w-[150px]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            onClick={() => { navigate("/"); scrollToTop();}}
          />
        </div>

        {/* Menu section */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-1 md:gap-2 lg:gap-4">
            {NavbarMenu.map((item) => {
              return (
                <li key={item.id} className="text-[14px] lg:text-[16px]">
                  <NavLink
                    to={item.link}
                    onClick={scrollToTop}
                    className={({ isActive }) =>
                      `inline-block py-1 px-3 font-semibold whitespace-nowrap hover:text-lighter rounded-[10px] hover:bg-greener transition-all duration-300 ${
                        isActive ? "text-lighter bg-greener" : "text-greener"
                      }`
                    }
                  >
                    {item.title}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Icons section */}
        <div className="hidden md:hidden lg:hidden xl:flex items-center gap-1 text-[14px] lg:text-[14px]">
          <motion.button
            className="px-2 py-1 font-semibold text-lighter bg-greener border-2 border-greener rounded-md whitespace-nowrap"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <NavLink to="tel:+998770086563">
              <i className="bi bi-telephone"></i>
              <span className="ml-2">+998 77 008 65 63</span>
            </NavLink>
          </motion.button>
        </div>

        <div className="flex-grow md:hidden h-full text-end text-[13px] justify-end text-greener">
          <NavLink to="tel:+998770086563" className="inline-block mr-2">
            <p className="font-semibold">+998 (77) 008 65 63</p>
            <p className="opacity-50 text-[11px] font-semibold">
              Быстрый звонок
            </p>
          </NavLink>
        </div>

        {/* Mobile hamburger section */}
        <label className="btn-circle bg-transparent border-transparent text-greener swap swap-rotate md:hidden">
          <input type="checkbox" checked={open} onChange={handleToggle} />
          {/* hamburger icon */}
          <i className="text-3xl fill-current swap-off bi bi-list"></i>
          {/* close icon */}
          <i className="text-3xl fill-current swap-on bi bi-x"></i>
        </label>
      </div>
      {/* Mobile Sidebar Section START */}
      <MobileMenu open={open} setOpen={setOpen} />
      {/* Mobile Sidebar Section END */}
    </section>
  );
}

export default Navbar;
