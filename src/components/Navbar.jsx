// data
import { NavbarMenu } from "../data/data";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="container flex justify-between items-center py-8">
        {/* logo section */}
        <div className="text-2xl flex items-center gap-2 font-bold uppercase">
          <i class="bi bi-braces-asterisk"></i>
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
        {/* Mobile menu section */}
      </div>
      {/* Mobile Sidebar Section */}
    </>
  );
}

export default Navbar;
