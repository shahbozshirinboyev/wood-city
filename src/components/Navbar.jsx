// data
import { useState } from "react";
import { NavbarMenu } from "../data/data";
import { NavLink } from "react-router-dom";

// logo
import logo from '../../public/logo/art-old-wood-e.png'

// ResponsiveMenu
import ResponsiveMenu from './ResponsiveMenu'

function Navbar() {
  const [open, setOpen] = useState(false)

  const handleToggle = () => {
    setOpen(!open); // Toggle the state
  };

  return (
    <>
    {/* container flex justify-between items-center py-8 border border-green-700 */}
      <div className="container flex justify-between gap-1 items-center border-[5px] border-purple-700 py-8">
        {/* logo section */}
        <div className="border border-red-700 text-xl flex items-center gap-2 font-bold uppercase">
          {/* <i className="bi bi-braces-asterisk"></i>
          <p>Coders</p>
          <p className="text-secondary">Gym</p> */}
          <img src={logo} alt="" className="w-[180px]"/>
        </div>
        {/* Menu section */}
        <div className="hidden md:block border border-red-700">
          <ul className="flex items-center gap-1 md:gap-2 lg:gap-4 text-gray-600">
            {NavbarMenu.map((item) => {
              return <li key={item.id} className="text-[14px] lg:text-[18px]">
                <NavLink to={item.link} className="inline-block py-1 px-3 hover:text-primary font-semibold whitespace-nowrap">{item.title}</NavLink>
              </li>;
            })}
          </ul>
        </div>
        {/* Icons section */}
        <div className=" hidden md:hidden lg:hidden xl:flex items-center gap-2 border border-red-700">
          <button className="hover:bg-primary whitespace-nowrap text-primary font-semibold hover:text-white rounded-md border-2 border-primary px-6 py-2 duration-200">
          <i class="bi bi-telephone"></i>
          <span className="ml-2">+998 93 456 34 21</span>
          </button>
        </div>
        {/* Mobile hamburger section */}
        <label className="btn btn-circle swap swap-rotate md:hidden">
          {/* this hidden checkbox controls the state */}
          <input type="checkbox" checked={open} onChange={handleToggle} />
          {/* hamburger icon */}
          <i className="swap-off fill-current bi bi-list text-3xl"></i>
          {/* close icon */}
          <i className="swap-on fill-current bi bi-x text-3xl"></i>
        </label>
        
      </div>
      {/* Mobile Sidebar Section */}
      <ResponsiveMenu open={open}/>
    </>
  );
}

export default Navbar;
