//components
import ScrollableMenu from "../../components/ScrollableMenu";

//images
import furniture_1 from "../../../public/furniture/6.jpg";
import furniture_2 from "../../../public/furniture/24.jpg";
import furniture_3 from "../../../public/furniture/16.jpg";

import product1 from "../../../public/furniture/1.jpg";
import product2 from "../../../public/furniture/2.jpg";
import product3 from "../../../public/furniture/3.jpg";
import product4 from "../../../public/furniture/4.jpg";
import product5 from "../../../public/furniture/5.jpg";
import product6 from "../../../public/furniture/6.jpg";
import product7 from "../../../public/furniture/7.jpg";
import product8 from "../../../public/furniture/8.jpg";
import product9 from "../../../public/furniture/9.jpg";
import product10 from "../../../public/furniture/10.jpg";
import product11 from "../../../public/furniture/11.jpg";
import product12 from "../../../public/furniture/12.jpg";
import product13 from "../../../public/furniture/13.jpg";
import product14 from "../../../public/furniture/14.jpg";
import product15 from "../../../public/furniture/15.jpg";
import product16 from "../../../public/furniture/16.jpg";
import product17 from "../../../public/furniture/17.jpg";
import product18 from "../../../public/furniture/18.jpg";
import product19 from "../../../public/furniture/19.jpg";
import product20 from "../../../public/furniture/20.jpg";
import product21 from "../../../public/furniture/21.jpg";
import product22 from "../../../public/furniture/22.jpg";
import product23 from "../../../public/furniture/23.jpg";
import product24 from "../../../public/furniture/24.jpg";


function WoodenFurniture() {
  const handleMenuIndex = (index) => {
    console.log("Bu menu indexi:", index);
  };

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

          {/* <div className="relative">
            <button className="border rounded-lg w-[100px] p-1 font-bold text-white m-4 text-[18px]">
              Client
            </button>

            <p className="font-normal text-white m-4 text-[25px]">
              Become a <span className="uppercase">regular customer</span>
            </p>

            <p className="font-bold text-white m-4 text-[35px]">
              Enter in the furniture world
            </p>
          </div> */}
        </div>

        <div className="relative">
          <img
            src={furniture_3}
            alt=""
            className="absolute top-0 left-0 w-full h-full object-cover  blur-[0px]"
          />

          {/* <div className="relative">
            <button className="border rounded-lg w-[100px] p-1 font-bold text-white m-4 text-[18px]">
              Client
            </button>

            <p className="font-normal text-white m-4 text-[25px]">
              Become a <span className="uppercase">regular customer</span>
            </p>

            <p className="font-bold text-white m-4 text-[35px]">
              Enter in the furniture world
            </p>
          </div> */}
        </div>
      </div>

      <div className="mt-[25px]">
        <p className="font-bold text-[32px] text-center my-[25px]">
          Choose the wooden furniture you need
        </p>
      </div>

      <div>
        <ScrollableMenu onMenuIndex={handleMenuIndex} />
      </div>

      {/* Cards START */}
      <div className="grid grid-cols-1 gap-3 py-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        
        <div className="relative rounded-[10px] border bg-white shadow-md">
          
          <div className="absolute grid w-full grid-cols-2 px-4 py-2 font-normal text-white">
            <div className="text-start">
              <span>20.04.2025</span>
            </div>
            <div className="text-end">
              <i className="bi bi-star"></i>
            </div>
          </div>

          <div>
            <img
              src={product1}
              alt=""
              className="object-cover object-center h-[250px] w-full rounded-t-[10px]"
            />
          </div>

          <div className="p-4">
            <p className="font-semibold text-[16px] mb-2">
              Тумба прикроватная Сальвадор Wood
            </p>
            <span className="text-[18px] text-red-700 font-semibold mb-2 block">
              <span className="font-bold">$</span>
              &nbsp;92
            </span>
            <div className="flex gap-4">
              <button className="w-full px-2 py-1 border rounded-[5px] hover:bg-green-500 hover:text-white font-semibold transition-all duration-300">Звонить</button>
              <button className="w-full px-2 py-1 border rounded-[5px] hover:bg-sky-500 hover:text-white font-semibold transition-all duration-300">Заказить</button>
            </div>
          </div>
        </div>

        <div className="relative rounded-[10px] border bg-white shadow-md">
          <div className="absolute grid w-full grid-cols-2 px-4 py-2 font-normal text-white">
            <div className="text-start">
              <span>20.04.2025</span>
            </div>
            <div className="text-end">
              <i className="bi bi-star"></i>
            </div>
          </div>

          <div>
            <img
              src={product4}
              alt=""
              className="object-cover object-center h-[250px] w-full rounded-t-[10px]"
            />
          </div>

          <div className="p-4">
            <p className="font-semibold text-[16px] mb-2">
              Тумба прикроватная Сальвадор Wood
            </p>
            <span className="text-[18px] text-red-700 font-semibold mb-2 block">
              <span className="font-bold">$</span>
              &nbsp;92
            </span>
            <div className="flex gap-4">
              <button className="w-full px-2 py-1 border rounded-[5px] hover:bg-green-500 hover:text-white font-semibold transition-all duration-300">Звонить</button>
              <button className="w-full px-2 py-1 border rounded-[5px] hover:bg-sky-500 hover:text-white font-semibold transition-all duration-300">Заказить</button>
            </div>
          </div>
        </div>

        <div className="relative rounded-[10px] border bg-white shadow-md">
          <div className="absolute grid w-full grid-cols-2 px-4 py-2 font-normal text-white">
            <div className="text-start">
              <span>20.04.2025</span>
            </div>
            <div className="text-end">
              <i className="bi bi-star"></i>
            </div>
          </div>

          <div>
            <img
              src={product7}
              alt=""
              className="object-cover object-center h-[250px] w-full rounded-t-[10px]"
            />
          </div>

          <div className="p-4">
            <p className="font-semibold text-[16px] mb-2">
              Тумба прикроватная Сальвадор Wood
            </p>
            <span className="text-[18px] text-red-700 font-semibold mb-2 block">
              <span className="font-bold">$</span>
              &nbsp;92
            </span>
            <div className="flex gap-4">
              <button className="w-full px-2 py-1 border rounded-[5px] hover:bg-green-500 hover:text-white font-semibold transition-all duration-300">Звонить</button>
              <button className="w-full px-2 py-1 border rounded-[5px] hover:bg-sky-500 hover:text-white font-semibold transition-all duration-300">Заказить</button>
            </div>
          </div>
        </div>

        <div className="relative rounded-[10px] border bg-white shadow-md">
          <div className="absolute grid w-full grid-cols-2 px-4 py-2 font-normal text-white">
            <div className="text-start">
              <span>20.04.2025</span>
            </div>
            <div className="text-end">
              <i className="bi bi-star"></i>
            </div>
          </div>

          <div>
            <img
              src={product2}
              alt=""
              className="object-cover object-center h-[250px] w-full rounded-t-[10px]"
            />
          </div>

          <div className="p-4">
            <p className="font-semibold text-[16px] mb-2">
              Тумба прикроватная Сальвадор Wood
            </p>
            <span className="text-[18px] text-red-700 font-semibold mb-2 block">
              <span className="font-bold">$</span>
              &nbsp;92
            </span>
            <div className="flex gap-4">
              <button className="w-full px-2 py-1 border rounded-[5px] hover:bg-green-500 hover:text-white font-semibold transition-all duration-300">Звонить</button>
              <button className="w-full px-2 py-1 border rounded-[5px] hover:bg-sky-500 hover:text-white font-semibold transition-all duration-300">Заказить</button>
            </div>
          </div>
        </div>

        <div className="relative rounded-[10px] border bg-white shadow-md">
          <div className="absolute grid w-full grid-cols-2 px-4 py-2 font-normal text-white">
            <div className="text-start">
              <span>20.04.2025</span>
            </div>
            <div className="text-end">
              <i className="bi bi-star"></i>
            </div>
          </div>

          <div>
            <img
              src={product3}
              alt=""
              className="object-cover object-center h-[250px] w-full rounded-t-[10px]"
            />
          </div>

          <div className="p-4">
            <p className="font-semibold text-[16px] mb-2">
              Тумба прикроватная Сальвадор Wood
            </p>
            <span className="text-[18px] text-red-700 font-semibold mb-2 block">
              <span className="font-bold">$</span>
              &nbsp;92
            </span>
            <div className="flex gap-4">
              <button className="w-full px-2 py-1 border rounded-[5px] hover:bg-green-500 hover:text-white font-semibold transition-all duration-300">Звонить</button>
              <button className="w-full px-2 py-1 border rounded-[5px] hover:bg-sky-500 hover:text-white font-semibold transition-all duration-300">Заказить</button>
            </div>
          </div>
        </div>

        <div className="relative rounded-[10px] border bg-white shadow-md">
          <div className="absolute grid w-full grid-cols-2 px-4 py-2 font-normal text-white">
            <div className="text-start">
              <span>20.04.2025</span>
            </div>
            <div className="text-end">
              <i className="bi bi-star"></i>
            </div>
          </div>

          <div>
            <img
              src={product4}
              alt=""
              className="object-cover object-center h-[250px] w-full rounded-t-[10px]"
            />
          </div>

          <div className="p-4">
            <p className="font-semibold text-[16px] mb-2">
              Тумба прикроватная Сальвадор Wood
            </p>
            <span className="text-[18px] text-red-700 font-semibold mb-2 block">
              <span className="font-bold">$</span>
              &nbsp;92
            </span>
            <div className="flex gap-4">
              <button className="w-full px-2 py-1 border rounded-[5px] hover:bg-green-500 hover:text-white font-semibold transition-all duration-300">Звонить</button>
              <button className="w-full px-2 py-1 border rounded-[5px] hover:bg-sky-500 hover:text-white font-semibold transition-all duration-300">Заказить</button>
            </div>
          </div>
        </div>

        <div className="relative rounded-[10px] border bg-white shadow-md">
          <div className="absolute grid w-full grid-cols-2 px-4 py-2 font-normal text-white">
            <div className="text-start">
              <span>20.04.2025</span>
            </div>
            <div className="text-end">
              <i className="bi bi-star"></i>
            </div>
          </div>

          <div>
            <img
              src={product5}
              alt=""
              className="object-cover object-center h-[250px] w-full rounded-t-[10px]"
            />
          </div>

          <div className="p-4">
            <p className="font-semibold text-[16px] mb-2">
              Тумба прикроватная Сальвадор Wood
            </p>
            <span className="text-[18px] text-red-700 font-semibold mb-2 block">
              <span className="font-bold">$</span>
              &nbsp;92
            </span>
            <div className="flex gap-4">
              <button className="w-full px-2 py-1 border rounded-[5px] hover:bg-green-500 hover:text-white font-semibold transition-all duration-300">Звонить</button>
              <button className="w-full px-2 py-1 border rounded-[5px] hover:bg-sky-500 hover:text-white font-semibold transition-all duration-300">Заказить</button>
            </div>
          </div>
        </div>

        <div className="relative rounded-[10px] border bg-white shadow-md">
          <div className="absolute grid w-full grid-cols-2 px-4 py-2 font-normal text-white">
            <div className="text-start">
              <span>20.04.2025</span>
            </div>
            <div className="text-end">
              <i className="bi bi-star"></i>
            </div>
          </div>

          <div>
            <img
              src={product6}
              alt=""
              className="object-cover object-center h-[250px] w-full rounded-t-[10px]"
            />
          </div>

          <div className="p-4">
            <p className="font-semibold text-[16px] mb-2">
              Тумба прикроватная Сальвадор Wood
            </p>
            <span className="text-[18px] text-red-700 font-semibold mb-2 block">
              <span className="font-bold">$</span>
              &nbsp;92
            </span>
            <div className="flex gap-4">
              <button className="w-full px-2 py-1 border rounded-[5px] hover:bg-green-500 hover:text-white font-semibold transition-all duration-300">Звонить</button>
              <button className="w-full px-2 py-1 border rounded-[5px] hover:bg-sky-500 hover:text-white font-semibold transition-all duration-300">Заказить</button>
            </div>
          </div>
        </div>

        <div className="relative rounded-[10px] border bg-white shadow-md">
          <div className="absolute grid w-full grid-cols-2 px-4 py-2 font-normal text-white">
            <div className="text-start">
              <span>20.04.2025</span>
            </div>
            <div className="text-end">
              <i className="bi bi-star"></i>
            </div>
          </div>

          <div>
            <img
              src={product7}
              alt=""
              className="object-cover object-center h-[250px] w-full rounded-t-[10px]"
            />
          </div>

          <div className="p-4">
            <p className="font-semibold text-[16px] mb-2">
              Тумба прикроватная Сальвадор Wood
            </p>
            <span className="text-[18px] text-red-700 font-semibold mb-2 block">
              <span className="font-bold">$</span>
              &nbsp;92
            </span>
            <div className="flex gap-4">
              <button className="w-full px-2 py-1 border rounded-[5px] hover:bg-green-500 hover:text-white font-semibold transition-all duration-300">Звонить</button>
              <button className="w-full px-2 py-1 border rounded-[5px] hover:bg-sky-500 hover:text-white font-semibold transition-all duration-300">Заказить</button>
            </div>
          </div>
        </div>

        <div className="relative rounded-[10px] border bg-white shadow-md">
          <div className="absolute grid w-full grid-cols-2 px-4 py-2 font-normal text-white">
            <div className="text-start">
              <span>20.04.2025</span>
            </div>
            <div className="text-end">
              <i className="bi bi-star"></i>
            </div>
          </div>

          <div>
            <img
              src={product8}
              alt=""
              className="object-cover object-center h-[250px] w-full rounded-t-[10px]"
            />
          </div>

          <div className="p-4">
            <p className="font-semibold text-[16px] mb-2">
              Тумба прикроватная Сальвадор Wood
            </p>
            <span className="text-[18px] text-red-700 font-semibold mb-2 block">
              <span className="font-bold">$</span>
              &nbsp;92
            </span>
            <div className="flex gap-4">
              <button className="w-full px-2 py-1 border rounded-[5px] hover:bg-green-500 hover:text-white font-semibold transition-all duration-300">Звонить</button>
              <button className="w-full px-2 py-1 border rounded-[5px] hover:bg-sky-500 hover:text-white font-semibold transition-all duration-300">Заказить</button>
            </div>
          </div>
        </div>

        <div className="relative rounded-[10px] border bg-white shadow-md">
          <div className="absolute grid w-full grid-cols-2 px-4 py-2 font-normal text-white">
            <div className="text-start">
              <span>20.04.2025</span>
            </div>
            <div className="text-end">
              <i className="bi bi-star"></i>
            </div>
          </div>

          <div>
            <img
              src={product9}
              alt=""
              className="object-cover object-center h-[250px] w-full rounded-t-[10px]"
            />
          </div>

          <div className="p-4">
            <p className="font-semibold text-[16px] mb-2">
              Тумба прикроватная Сальвадор Wood
            </p>
            <span className="text-[18px] text-red-700 font-semibold mb-2 block">
              <span className="font-bold">$</span>
              &nbsp;92
            </span>
            <div className="flex gap-4">
              <button className="w-full px-2 py-1 border rounded-[5px] hover:bg-green-500 hover:text-white font-semibold transition-all duration-300">Звонить</button>
              <button className="w-full px-2 py-1 border rounded-[5px] hover:bg-sky-500 hover:text-white font-semibold transition-all duration-300">Заказить</button>
            </div>
          </div>
        </div>

        <div className="relative rounded-[10px] border bg-white shadow-md">
          <div className="absolute grid w-full grid-cols-2 px-4 py-2 font-normal text-white">
            <div className="text-start">
              <span>20.04.2025</span>
            </div>
            <div className="text-end">
              <i className="bi bi-star"></i>
            </div>
          </div>

          <div>
            <img
              src={product10}
              alt=""
              className="object-cover object-center h-[250px] w-full rounded-t-[10px]"
            />
          </div>

          <div className="p-4">
            <p className="font-semibold text-[16px] mb-2">
              Тумба прикроватная Сальвадор Wood
            </p>
            <span className="text-[18px] text-red-700 font-semibold mb-2 block">
              <span className="font-bold">$</span>
              &nbsp;92
            </span>
            <div className="flex gap-4">
              <button className="w-full px-2 py-1 border rounded-[5px] hover:bg-green-500 hover:text-white font-semibold transition-all duration-300">Звонить</button>
              <button className="w-full px-2 py-1 border rounded-[5px] hover:bg-sky-500 hover:text-white font-semibold transition-all duration-300">Заказить</button>
            </div>
          </div>
        </div>

        <div className="relative rounded-[10px] border bg-white shadow-md">
          <div className="absolute grid w-full grid-cols-2 px-4 py-2 font-normal text-white">
            <div className="text-start">
              <span>20.04.2025</span>
            </div>
            <div className="text-end">
              <i className="bi bi-star"></i>
            </div>
          </div>

          <div>
            <img
              src={product11}
              alt=""
              className="object-cover object-center h-[250px] w-full rounded-t-[10px]"
            />
          </div>

          <div className="p-4">
            <p className="font-semibold text-[16px] mb-2">
              Тумба прикроватная Сальвадор Wood
            </p>
            <span className="text-[18px] text-red-700 font-semibold mb-2 block">
              <span className="font-bold">$</span>
              &nbsp;92
            </span>
            <div className="flex gap-4">
              <button className="w-full px-2 py-1 border rounded-[5px] hover:bg-green-500 hover:text-white font-semibold transition-all duration-300">Звонить</button>
              <button className="w-full px-2 py-1 border rounded-[5px] hover:bg-sky-500 hover:text-white font-semibold transition-all duration-300">Заказить</button>
            </div>
          </div>
        </div>

        <div className="relative rounded-[10px] border bg-white shadow-md">
          <div className="absolute grid w-full grid-cols-2 px-4 py-2 font-normal text-white">
            <div className="text-start">
              <span>20.04.2025</span>
            </div>
            <div className="text-end">
              <i className="bi bi-star"></i>
            </div>
          </div>

          <div>
            <img
              src={product12}
              alt=""
              className="object-cover object-center h-[250px] w-full rounded-t-[10px]"
            />
          </div>

          <div className="p-4">
            <p className="font-semibold text-[16px] mb-2">
              Тумба прикроватная Сальвадор Wood
            </p>
            <span className="text-[18px] text-red-700 font-semibold mb-2 block">
              <span className="font-bold">$</span>
              &nbsp;30
            </span>
            <div className="flex gap-4">
              <button className="w-full px-2 py-1 border rounded-[5px] hover:bg-green-500 hover:text-white font-semibold transition-all duration-300">Звонить</button>
              <button className="w-full px-2 py-1 border rounded-[5px] hover:bg-sky-500 hover:text-white font-semibold transition-all duration-300">Заказить</button>
            </div>
          </div>
        </div>


      </div>
      {/* Cards END */}
    </section>
  );
}

export default WoodenFurniture;
