import React from "react";
//logo
import logo from "../../public/logo/wood_city_white_logo.png"

function Footer() {
  return (
    <section className="bg-[#160A06] text-[#E1DFDE]">

      <div className="container">

        <div className="grid grid-cols-2 md:grid-cols-4 p-2 md:p-3 lg:p-10 gap-1">

        <aside>
          <img src={logo} alt="" className="w-[140px] lg:w-[180px]  my-[15px] lg:my-[25px]" />
          <p>Wood City "MCHJ"<br />с 2020 года</p>
        </aside>

          <nav className="grid grid-cols-1">
            <h6 className="footer-title">О компании</h6>
            <p>ИП Феденев Евгений Александрович</p>
            <p>ИНН: 664604291587</p>
            <p>ОГРН: 320665800112549</p>
            <p>Способы оплаты: безналичный расчёт, наличный, кредит</p>
            <p>Гарантия: на все виды работ</p>
          </nav>

          <nav className="grid grid-cols-1 mt-10 md:mt-0">
            <h6 className="footer-title">Меню</h6>
            <a className="link link-hover">Главная</a>
            <a className="link link-hover">О нас</a>
            <a className="link link-hover">Деревянные дома</a>
            <a className="link link-hover">Деревянная мебель</a>
            <a className="link link-hover">Контакты</a>
          </nav>

          <nav className="grid grid-cols-1 mt-10 md:mt-0">
            <h6 className="footer-title">Контакты</h6>
            <a className="link link-hover">Uzb, Tashkent, Chirchiq sh.</a>
            <div className="flex mt-2">
            <i class="bi bi-telephone mr-[10px]"></i>
            <p>
              <a href="" className="link link-hover">+998 (45) 342 45 22</a>
              <br />
              <a href="" className="link link-hover">+998 (12) 345 45 52</a>
            </p>
            
            
            </div>
            <div className="flex items-center justify-start text-[20px] my-4">
              <a href=""><i class="bi bi-telegram mr-[10px] hover:text-sky-500 transition-all duration-200"></i></a>
              <a href=""><i class="bi bi-youtube mx-[10px] hover:text-red-500 transition-all duration-200"></i></a>
              <a href=""><i class="bi bi-instagram mx-[10px] hover:text-pink-500 transition-all duration-200"></i></a>
              <a href=""><i class="bi bi-twitter-x mx-[10px] hover:text-white transition-all duration-200"></i></a>
            </div>
            <div>
              <button className="py-1 px-2 rounded-lg border border-[#E1DFDE] hover:bg-[#E1DFDE] hover:text-[#160A06] transition-all duration-200">Оставить заявку</button>
            </div>
          </nav>

        </div>

        {/* <div className="grid grid-cols-2 border-[#E1DFDE] border-t py-2">
          <aside className="flex items-center">
          <i className="bi bi-code-slash text-[24px] mr-5"></i>
            <p>
              OS//Services
              <br />
              Powered by Shahboz Shirinboyev
            </p>
          </aside>
          <nav className="flex items-center justify-self-end">
            <div className="grid grid-flow-col gap-4">
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </a>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
            </div>
          </nav>
        </div> */}

      </div>

    </section>
  );
}

export default Footer;
