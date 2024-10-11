import { useState, useRef, useEffect } from "react";
import { woodenHouse } from "../../data/data";

function WoodenHouses() {
  const [activeMenuBtn, setActiveMenuBtn] = useState(0);
  const tabsListRef = useRef(null);
  const [scrollPos, setScrollPos] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);

  // scoll menu section START
  useEffect(() => {
    console.log(activeMenuBtn);
  }, [activeMenuBtn]);

  const activeMenu = (id) => {
    setActiveMenuBtn(id);
  };

  useEffect(() => {
    const updateMaxScroll = () => {
      setMaxScroll(
        tabsListRef.current.scrollWidth - tabsListRef.current.clientWidth
      );
    };
    updateMaxScroll();
    window.addEventListener("resize", updateMaxScroll);
    return () => window.removeEventListener("resize", updateMaxScroll);
  }, []);

  const scrollRight = () => {
    tabsListRef.current.scrollLeft += 200;
    setScrollPos(tabsListRef.current.scrollLeft);
  };

  const scrollLeft = () => {
    tabsListRef.current.scrollLeft -= 200;
    setScrollPos(tabsListRef.current.scrollLeft);
  };

  const manageIcons = () => {
    setScrollPos(tabsListRef.current.scrollLeft);
  };
  // scoll menu section END

  const getCounts = (activeMenuBtn) => {
    if (activeMenuBtn === 0) {
      // Barcha counts larni yig'ish
      return woodenHouse
        .filter((item) => item.counts) // counts bo'lmagan itemlarni filtrlaymiz
        .flatMap((item) => item.counts);
    } else {
      // Id ga mos keluvchi counts ni olish
      const category = woodenHouse.find((item) => item.id === activeMenuBtn);
      return category ? category.counts : [];
    }
  };

  useEffect(() => {
    console.log(getCounts(activeMenuBtn));
  }, [activeMenuBtn]);

  return (
    <section className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 mt-[50px] gap-8">
        <div className="">
          <img
            className="w-[300px] mx-auto md:ml-0"
            src="./logo/wood_city_black.png"
            alt=""
          />

          <p className="font-bold text-[30px] text-center md:text-start md:text-[60px] mt-[25px]">
            Готовые модульные дома и бани
          </p>

          <p className="text-[25px] text-center md:text-start md:text-[30px] mt-[25px] ">
            Загородная жизнь с комфортом{" "}
            <span className="font-bold">от 518 000 рублей</span> с установкой за
            1 день
          </p>

          <div className="mt-[50px] flex justify-center md:justify-start">
            <button className="btn mr-[25px]">Оставить заявку</button>
            <button className="btn">Получить каталог</button>
          </div>

          <div className="mt-[40px] text-[20px]">
            <p>
              Получите готовый модульный дом или баню с установкой за 1 день и
              доставкой по всей России
            </p>
          </div>
        </div>

        <div className="">
          <video className="w-full h-auto" muted loop autoPlay controls>
            <source
              src="./video/DP-Module - Модульные дома и бани.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>

      <div className="mt-[25px]">
        <p className="font-bold text-[32px] text-center my-[25px]">
          Choose the wooden Home you need
        </p>
      </div>

      <>
        <div className="relative mx-auto overflow-hidden rounded-md shadow-md bg-base-200">
          <div
            className={`absolute top-0 left-0 h-full w-[100px] bg-gradient-to-r from-base-200 to-transparent flex items-center justify-start px-2
          ${scrollPos > 20 ? "flex" : "hidden"}`}
          >
            <i
              onClick={scrollLeft}
              className="bi bi-chevron-left text-black text-[14px] cursor-pointer hover:bg-gray-300 hover:text-black flex justify-center items-center w-[40px] h-[40px] rounded-full transition-all duration-200"
            ></i>
          </div>

          <ul
            ref={tabsListRef}
            onScroll={manageIcons}
            className="flex gap-4 px-6 py-3 overflow-x-scroll font-semibold select-none scrollbar-hide"
          >
            {woodenHouse.map((menu) => (
              <li key={menu.id}>
                <button
                  className={`no-underline px-5 py-1 rounded-md whitespace-nowrap transition-all duration-200 border ${
                    activeMenuBtn === menu.id
                      ? "bg-[#160A06] text-white"
                      : "bg-white text-[#160A06]"
                  }`}
                  onClick={() => activeMenu(menu.id)}
                >
                  {menu.name}
                </button>
              </li>
            ))}
          </ul>

          <div
            className={`absolute top-0 right-0 h-full w-[100px] bg-gradient-to-l from-base-200 to-transparent flex items-center justify-end px-2 ${
              scrollPos < maxScroll ? "flex" : "hidden"
            }`}
          >
            <i
              onClick={scrollRight}
              className="bi bi-chevron-right text-black text-[14px] cursor-pointer hover:bg-gray-300 hover:text-black flex justify-center items-center w-[40px] h-[40px] rounded-full transition-all duration-200"
            ></i>
          </div>
        </div>
      </>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-[50px]">
        {getCounts(activeMenuBtn).map((card) => (
          <div className="border rounded-2xl grid grid-cols-1 px-4 py-4">
            <div className="relative">
              <img
                className="h-[350px] w-full object-cover rounded-2xl"
                src="https://img.freepik.com/free-photo/3d-rendering-wooden-house_23-2151264506.jpg"
                alt=""
              />
              <img
                className="border rounded-2xl cursor-pointer absolute top-3 left-3 w-[160px] hover:w-full hover:h-[350px] hover:top-0 hover:left-0 object-cover transition-all duration-300"
                src="https://optim.tildacdn.com/stor6532-6434-4933-b537-613962363530/-/format/webp/99134150.jpg"
                alt=""
              />
            </div>

            <div className="py-2">
              <p className="text-[20px] font-bold">{card.title}</p>
              <p className="">DP-Module</p>
              <p className="">SKU: ks_ekb</p>
              <b className="text-[25px]">1 635 000р.</b>
            </div>

            <div className="grid grid-cols-2">
              <button className="btn mr-2">Оставить заявку</button>
              <button className="btn ml-2">Подробнее →</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WoodenHouses;
