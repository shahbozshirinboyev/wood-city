import { useState, useRef, useEffect } from "react";

function ScrollableMenu({ onMenuIndex }) {
  const menus = [
    "All",
    "Music",
    "Live",
    "NmaGap",
    "NQE Podcast",
    "Konsta",
    "Konsta+",
    "Brbalo",
    "Tutorials",
    "Soqqa",
    "Chumoli",
    "Done!",
    "ShunaqaGap",
    "EveryTime",
    "Ko'kJuguli",
    "NmaGap+",
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
    <div className="relative mx-auto rounded-md bg-black overflow-hidden">
      <div
        className={`absolute top-0 left-0 h-full w-[100px] bg-gradient-to-r from-black to-transparent flex items-center justify-start px-2
          ${scrollPos > 20 ? "flex" : "hidden"}`}
      >
        <i
          onClick={scrollLeft}
          className="bi bi-chevron-left text-white text-[14px] cursor-pointer hover:bg-gray-700 flex justify-center items-center w-[40px] h-[40px] rounded-full transition-all duration-200"
        ></i>
      </div>

      <ul
        ref={tabsListRef}
        onScroll={manageIcons}
        className="scrollbar-hide select-none flex gap-4 py-3 px-6 overflow-x-scroll scrollbar-hide"
      >
        {menus.map((menu, index) => (
          <li key={index}>
            <button
              className={`no-underline px-5 py-1 rounded-md whitespace-nowrap transition-all duration-200 ${
                activeMenuBtn === index
                  ? "bg-white text-black"
                  : "bg-gray-800 text-white"
              }`}
              onClick={() => activeMenu(index)}
            >
              {menu}
            </button>
          </li>
        ))}
      </ul>

      <div
        className={`absolute top-0 right-0 h-full w-[100px] bg-gradient-to-l from-black to-transparent flex items-center justify-end px-2 ${
          scrollPos < maxScroll ? "flex" : "hidden"
        }`}
      >
        <i
          onClick={scrollRight}
          className="bi bi-chevron-right text-white text-[14px] cursor-pointer hover:bg-gray-700 flex justify-center items-center w-[40px] h-[40px] rounded-full transition-all duration-200"
        ></i>
      </div>
    </div>
  );
}

export default ScrollableMenu;
