import { useState, useRef, useEffect } from "react";
import { woodenFurniture } from "../../data/data";

//images
import furniture_1 from "../../../public/furniture/6.jpg";
import furniture_2 from "../../../public/furniture/24.jpg";
import furniture_3 from "../../../public/furniture/16.jpg";


function WoodenFurniture() {
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
      return woodenFurniture
        .filter((item) => item.counts) // counts bo'lmagan itemlarni filtrlaymiz
        .flatMap((item) => item.counts);
    } else {
      // Id ga mos keluvchi counts ni olish
      const category = woodenFurniture.find(
        (item) => item.id === activeMenuBtn
      );
      return category ? category.counts : [];
    }
  };

  useEffect(() => {
    console.log(getCounts(activeMenuBtn));
  }, [activeMenuBtn]);

  return (
    <section className="container mb-[25px] text-[#160A06]">
      <div>
        <p className="font-bold text-[32px] text-center my-[25px]">
          Wooden furniture
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        <div className="col-span-2 row-span-2 bg-beige">
          <img src={furniture_1} alt="" className="w-full h-full" />
        </div>

        <div className="relative">
          <img
            src={furniture_2}
            alt=""
            className="absolute top-0 left-0 w-full h-full object-cover blur-[0px]"
          />
        </div>

        <div className="relative">
          <img
            src={furniture_3}
            alt=""
            className="absolute top-0 left-0 w-full h-full object-cover  blur-[0px]"
          />
        </div>
      </div>

      <div className="mt-[25px]">
        <p className="font-bold text-[32px] text-center my-[25px]">
          Choose the wooden furniture you need
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
            {woodenFurniture.map((menu) => (
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

      {/* Cards START */}
      <div className="grid grid-cols-1 gap-3 py-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        
        {getCounts(activeMenuBtn).map((card) => (
          <div key={card.title} className="relative rounded-[10px] border bg-white shadow-md">
          <div className="absolute grid w-full grid-cols-2 px-4 py-2 font-normal text-white">
            <div className="text-start">
              <span>{card.date}</span>
            </div>
            <div className="text-end">
              <i className="bi bi-star"></i>
            </div>
          </div>

          <div>
            <img
              src={card.image}
              alt=""
              className="object-cover object-center h-[250px] w-full rounded-t-[10px]"
            />
          </div>

          <div className="p-4">
            <p className="font-semibold text-[16px] mb-2">
              {card.title}
            </p>
            <span className="text-[18px] text-red-700 font-semibold mb-2 block">
              <span className="font-bold">$</span>
              &nbsp;92
            </span>
            <div className="flex gap-4">
              <button className="w-full px-2 py-1 border rounded-[5px] hover:bg-green-500 hover:text-white font-semibold transition-all duration-300">
                Звонить
              </button>
              <button className="w-full px-2 py-1 border rounded-[5px] hover:bg-sky-500 hover:text-white font-semibold transition-all duration-300">
                Заказить
              </button>
            </div>
          </div>
        </div>
        ))}
        

      </div>
      {/* Cards END */}
    </section>
  );
}

export default WoodenFurniture;
