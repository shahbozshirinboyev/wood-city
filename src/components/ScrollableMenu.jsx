import { useState, useRef, useEffect } from "react";

function ScrollableMenu({ onMenuIndex }) {
  const menus = [
    "Barcha bo'limlar",
    "1-tur mebellar",
    "2-tur mebellar",
    "3-tur mebellar",
    "4-tur mebellar",
    "5-tur mebellar",
    "6-tur mebellar+",
    "7-tur mebellar",
    "8-tur mebellar",
    "9-tur mebellar",
    "10-tur mebellar",
    "11-tur mebellar",
    "Шкафы и Кухни",
  ];
  const [activeMenuBtn, setActiveMenuBtn] = useState(0);
  const tabsListRef = useRef(null);
  const [scrollPos, setScrollPos] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);

  useEffect (() => {
    onMenuIndex(activeMenuBtn);
  }, [activeMenuBtn]);

  const activeMenu = (index) => {
    setActiveMenuBtn(index);
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
  return (
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
        {menus.map((menu, index) => (
          <li key={index}>
            <button
              className={`no-underline px-5 py-1 rounded-md whitespace-nowrap transition-all duration-200 border ${
                activeMenuBtn === index
                  ? "bg-[#160A06] text-white"
                  : "bg-white text-[#160A06]"
              }`}
              onClick={() => activeMenu(index)}
            >
              {menu}
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
  );
}

export default ScrollableMenu;
