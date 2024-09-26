import React from "react";

function WoodenFurniture() {
  const woodenFurnitureList = [
    "First",
    "Second",
    "Third",
    "Okay",
    "NmaGap",
    "Shunaqa",
    "Odamlar ucha olar",
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

  return (
    <section className="container mb-[25px] border border-red-700">
      <div className="border border-red-700">
        <p className="text-olivegreen font-bold text-[32px] text-center my-[25px]">
          Wooden furniture
        </p>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div class="row-span-2 col-span-2 bg-beige">
          <img
            src="https://optim.tildacdn.com/stor3666-3764-4565-a337-306435306538/-/format/webp/37587386.jpg"
            alt=""
            className="w-full h-full"
          />
        </div>

        <div class="relative">
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

        <div class="relative">
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

      <div>
        <ul className="flex flex-row gap-4 overflow-y-auto">
          {woodenFurnitureList.map((name) => (
            <li className="px-2 py-1 bg-beige rounded-full text-nowrap">{name}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default WoodenFurniture;
