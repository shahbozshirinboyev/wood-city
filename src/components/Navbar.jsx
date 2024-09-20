// data
import { useState } from "react";
import { NavbarMenu } from "../data/data";
import { NavLink } from "react-router-dom";

// ResponsiveMenu
import ResponsiveMenu from './ResponsiveMenu'

function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <div className="container flex justify-between items-center py-8">
        {/* logo section */}
        <div className="text-2xl flex items-center gap-2 font-bold uppercase">
          <i className="bi bi-braces-asterisk"></i>
          <p>Coders</p>
          <p className="text-secondary">Gym</p>
        </div>
        {/* Menu section */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-6 text-gray-600">
            {NavbarMenu.map((item) => {
              return <li key={item.id}>
                <NavLink to={item.link} className="inline-block py-1 px-3 hover:text-primary font-semibold">{item.title}</NavLink>
              </li>;
            })}
          </ul>
        </div>
        {/* Icons section */}
        <div className="flex items-center gap-4">
          <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200">
          <i class="bi bi-telephone"></i>
          </button>
          <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200">
          <i class="bi bi-search"></i>
          </button>
          <button className="hover:bg-primary text-primary font-semibold hover:text-white rounded-md border-2 border-primary px-6 py-2 duration-200 hidden md:block">Login</button>
        </div>
        {/* Mobile hamburger section */}
        <div className="md:hidden" onClick={() => {setOpen(!open)}}>
        <i className="bi bi-list text-4xl"></i>
        </div>
      </div>
      {/* Mobile Sidebar Section */}
      <ResponsiveMenu open={open}/>
    </>
  );
}

export default Navbar;
