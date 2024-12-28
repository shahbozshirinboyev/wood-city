import { NavbarMenu } from "../data/data";
import { NavLink, useNavigate } from "react-router-dom";
//logo
import logo from "../../public/logo/wood_city.png";

function Footer() {

  const navigate = useNavigate();
  const scrollToTop = () => { window.scrollTo({ top: 0, behavior: "smooth", });};

  return (
    <section className="bg-lighter text-greener text-[14px] font-semibold md:text-[16px] shadow-md">
      <div className="container">
        <div className="py-[25px] grid grid-cols-2 lg:grid-cols-4 px-2 md:px-3 lg:px-10 gap-4">
          <aside>
            <img
              src={logo}
              alt=""
              className="w-[140px] lg:w-[180px]  my-[25px] lg:my-[35px] cursor-pointer"
              onClick={() => { navigate("/"); scrollToTop();}}
            />
            <p>
              Wood City "ООО" <br />с 2018 года
            </p>
          </aside>

          <nav className="grid grid-cols-1">
            <h6 className="footer-title">О компании</h6>
            <p>"ООО" ART OLD WOOD</p>
            <p>ИНН: 308676996</p>
            <p>Р/с: 2020 8000 6054 1811 8001</p>
            <p>Способы оплаты: безналичный расчёт, наличный</p>
            <p>Гарантия: на все виды работ</p>
          </nav>

          <nav className="mt-10 lg:mt-0">
            <h6 className="footer-title">Меню</h6>
            {/* Menu section */}
            <ul className="grid gap-1 md:gap-1 lg:gap-2">
              {NavbarMenu.map((item) => {
                return (
                  <li key={item.id} className="text-[14px] lg:text-[16px]">
                    <NavLink
                      to={item.link}
                      onClick={scrollToTop}
                      className={({ isActive }) =>
                        `inline-block py-1 font-semibold whitespace-nowrap hover:text-lightwood transition-all duration-300 ${
                          isActive
                            ? "text-lighter bg-greener rounded-[10px] px-2"
                            : "text-greener"
                        }`
                      }
                    >
                      {item.title}
                    </NavLink>
                  </li>
                );
              })}
            </ul>

            {/* Icons section */}
          </nav>

          <nav className="grid grid-cols-1 mt-10 lg:mt-0">
            <h6 className="footer-title">Контакты</h6>

            <p>
              {" "}
              <i className="bi bi-geo-alt mr-[10px]"></i>г. Чирчик, ул. Амира
              Темура, 68А.
            </p>

            <div className="flex mt-2">
              <i className="bi bi-telephone mr-[10px]"></i>
              <p>
                <NavLink
                  to="tel:+998770086563"
                  className="border border-transparent hover:border-greener px-2 py-1 rounded-[5px]"
                >
                  +998 (77) 008 65 63
                </NavLink>
                <span className="block h-[5px] bg-transparent border-4 border-transparent"></span>
                <NavLink
                  to="tel:+998770091640"
                  className="border border-transparent hover:border-greener px-2 py-1 rounded-[5px]"
                >
                  +998 (77) 009 16 40
                </NavLink>
              </p>
            </div>

            <div className="flex items-center justify-start text-[20px] my-4">
              <NavLink to="https://t.me/wood_city_uz">
                <i className="bi bi-telegram mr-[10px] hover:text-sky-500 transition-all duration-200"></i>
              </NavLink>
              <NavLink to="">
                <i className="bi bi-youtube mx-[10px] hover:text-red-500 transition-all duration-200"></i>
              </NavLink>
              <NavLink to="https://www.instagram.com/art_old_wood.uz/">
                <i className="bi bi-instagram mx-[10px] hover:text-pink-500 transition-all duration-200"></i>
              </NavLink>
              <NavLink to="">
                <i className="bi bi-tiktok mx-[10px] hover:text-[#FE2C55] transition-all duration-200"></i>
              </NavLink>
            </div>

            <div className="mb-[25px]">
              <button
                onClick={() =>
                  document.getElementById("LeaveRequest").showModal()
                }
                className="py-1 px-2 rounded-lg border border-greener hover:bg-greener hover:text-lighter transition-all duration-200"
              >
                Оставить заявку
              </button>
            </div>
          </nav>
        </div>
      </div>
    </section>
  );
}

export default Footer;
