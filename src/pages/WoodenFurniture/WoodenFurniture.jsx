import { useState } from "react";

function WoodenFurniture() {
  const woodenFurnitureList = [
    "All",
    "Music",
    "Live",
    "NQE Podcast",
    "Aziz Rahimov",
    "NmaGap Podcast",
    "Konsta+",
    "Second",
    "Third",
    "Okay",
    "NmaGap",
    "Shunaqa",
    "Odamlar sdsducha olar",
    "Second",
    "Third",
    "Okay",
    "NmaGap",
    "Shunaqa",
    "Odamlar ucha olar",
  ];

  const [activeMenuBtn, setActiveMenuBtn] = useState(0);

  const activeMenu = (index) => {
    console.log(index);
    setActiveMenuBtn(index);
  };

  return (
    <section className="container mb-[25px] border border-red-700">
      <div className="border border-red-700">
        <p className="text-olivegreen font-bold text-[32px] text-center my-[25px]">
          Wooden furniture
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="row-span-2 col-span-2 bg-beige">
          <img
            src="https://optim.tildacdn.com/stor3666-3764-4565-a337-306435306538/-/format/webp/37587386.jpg"
            alt=""
            className="w-full h-full"
          />
        </div>

        <div className="relative">
          <img
            src="https://optim.tildacdn.com/tild3639-3263-4430-b766-643137633138/-/format/webp/4-min.jpg"
            alt=""
            className="absolute top-0 left-0 w-full h-full object-cover blur-[0px]"
          />

          <div className="relative">
            <button className="border rounded-lg w-[100px] p-1 font-bold text-white m-4 text-[18px]">
              Client
            </button>

            <p className="font-normal text-white m-4 text-[25px]">
              Become a <span className="uppercase">regular customer</span>
            </p>

            <p className="font-bold text-white m-4 text-[35px]">
              Enter in the furniture world
            </p>
          </div>
        </div>

        <div className="relative">
          <img
            src="https://optim.tildacdn.com/tild3435-6464-4663-a436-383033653562/-/format/webp/9-min.jpg"
            alt=""
            className="absolute top-0 left-0 w-full h-full object-cover  blur-[0px]"
          />

          <div className="relative">
            <button className="border rounded-lg w-[100px] p-1 font-bold text-white m-4 text-[18px]">
              Client
            </button>

            <p className="font-normal text-white m-4 text-[25px]">
              Become a <span className="uppercase">regular customer</span>
            </p>

            <p className="font-bold text-white m-4 text-[35px]">
              Enter in the furniture world
            </p>
          </div>
        </div>
      </div>

      <div className="border border-red-700 mt-[25px]">
        <p className="text-olivegreen font-semibold text-[32px] text-center my-[25px]">
          Choose the wooden furniture you need
        </p>
      </div>

      <div className="bg-beige my-[25px] rounded-lg select-none overflow-hidden relative">
        {/* flex  - hidden */}
        <div className="hidden p-[8px] cursor-pointer absolute h-full top-0 w-[100px] items-center justify-start px-2 bg-gradient-to-r from-beige to-transparent">
          <i className="bi bi-chevron-left text-[24px] text-black"></i>
        </div>

        <ul className="scrollbar-hide flex gap-6 p-3 overflow-x-auto">
          {woodenFurnitureList.map((name, index) => (
            <li className="" key={index}>
              <button
                className={`whitespace-nowrap px-2 py-1 bg-lightgray text-gray font-medium rounded-xl ${
                  activeMenuBtn === index ? "bg-black text-white" : ""
                } transition-all duration-300 border border-black
                      hover:bg-black hover:text-white`}
                onClick={() => activeMenu(index)}
              >
                {name}
              </button>
            </li>
          ))}
        </ul>

        <div className="p-[8px] cursor-pointer absolute h-full top-0 w-[100px] flex items-center justify-end px-2 bg-gradient-to-l from-beige to-transparent right-0">
          <i className="bi bi-chevron-right text-[24px] text-black"></i>
        </div>
      </div>
    </section>
  );
}

export default WoodenFurniture;
