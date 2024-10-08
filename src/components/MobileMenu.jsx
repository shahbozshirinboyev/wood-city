import { motion, AnimatePresence } from "framer-motion";
import { NavbarMenu } from "../data/data";
import { NavLink } from "react-router-dom";

function MobileMenu({ open, setOpen }) {
  return (
    <>
      <AnimatePresence mode="wait">
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="absolute top-25 left-0 w-full h-screen z-20"
            // onClick={() => { setOpen(false); }}
          >
            <div className="uppercase bg-[#160A06] z-[22] text-white py-10 m-2 rounded-xl">
              <ul className="text-start px-10">
                {NavbarMenu.map((item) => {
                  return (
                    <li key={item.id} className="text-[14px] py-1">
                      <NavLink
                        to={item.link}
                        onClick={() => {
                          setOpen(false);
                        }}
                        className={({ isActive }) =>
                          `inline-block py-1 px-2 font-semibold whitespace-nowrap transition-all duration-300 ${
                            isActive
                              ? "text-[#160A06] bg-[#E1DFDE] rounded-[10px]"
                              : "text-[#E1DFDE]"
                          }`
                        }
                      >
                        {item.title}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>

              <nav className="grid grid-cols-1 mt-10 px-10">
                <h6 className="footer-title">Контакты</h6>
                <a className="link link-hover">
                  <i className="bi bi-geo-alt mr-[10px]"></i>
                  Uzb, Tashkent, Chirchiq sh.
                </a>
                <div className="flex mt-2">
                  <i className="bi bi-telephone mr-[10px]"></i>
                  <p>
                    <a href="" className="link link-hover">
                      +998 (45) 342 45 22
                    </a>
                    <br />
                    <a href="" className="link link-hover">
                      +998 (12) 345 45 52
                    </a>
                  </p>
                </div>
                <div className="flex items-center justify-start text-[20px] my-4">
                  <a href="">
                    <i className="bi bi-telegram mr-[10px] hover:text-sky-500 transition-all duration-200"></i>
                  </a>
                  <a href="">
                    <i className="bi bi-youtube mx-[10px] hover:text-red-500 transition-all duration-200"></i>
                  </a>
                  <a href="">
                    <i className="bi bi-instagram mx-[10px] hover:text-pink-500 transition-all duration-200"></i>
                  </a>
                  <a href="">
                    <i className="bi bi-twitter-x mx-[10px] hover:text-white transition-all duration-200"></i>
                  </a>
                </div>
                <div>
                  <button className="py-1 px-2 rounded-lg border border-[#E1DFDE] hover:bg-[#E1DFDE] hover:text-[#160A06] transition-all duration-200">
                    Оставить заявку
                  </button>
                </div>
              </nav>


            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default MobileMenu;
