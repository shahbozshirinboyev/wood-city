// data
import { useState } from "react";
import { NavbarMenu } from "../data/data";
import { NavLink } from "react-router-dom";

// ResponsiveMenu
import ResponsiveMenu from './ResponsiveMenu'

function Navbar() {
  const [open, setOpen] = useState(false)

  const handleToggle = () => {
    setOpen(!open); // Toggle the state
  };

  return (
    <>
      <div className="container flex justify-between items-center py-8 border border-green-700">
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
          <button className="hover:bg-primary text-primary font-semibold hover:text-white rounded-md border-2 border-primary px-6 py-2 duration-200 hidden md:hidden lg:block">
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
