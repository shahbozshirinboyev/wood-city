//components
import ScrollableMenu from "../../components/ScrollableMenu";

//images
import furniture_1 from "../../../public/furniture/furniture_1.jpg"
import furniture_2 from "../../../public/furniture/furniture_2.jpg"
import furniture_3 from "../../../public/furniture/furniture_3.jpg"

function WoodenFurniture() {

  const handleMenuIndex = (index) => {
    console.log("Bu menu indexi:", index)
  }

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
            src={furniture_1}
            alt=""
            className="w-full h-full"
          />
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

      <div className="border border-red-700 mt-[25px]">
        <p className="text-olivegreen font-semibold text-[32px] text-center my-[25px]">
          Choose the wooden furniture you need
        </p>
      </div>

      <div>
        <ScrollableMenu onMenuIndex={handleMenuIndex} />
      </div>

      {/* Cards START */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 py-10">

        <div className="bg-base-200">
          <div>
            <img src="" alt="" />
          </div>
        </div>

        <div className="h-[500px] bg-base-200"></div>

        <div className="h-[500px] bg-base-200"></div>

        <div className="h-[500px] bg-base-200"></div>

        <div className="h-[500px] bg-base-200"></div>
        
        <div className="h-[500px] bg-base-200"></div>

      </div>
      {/* Cards END */}

    </section>
  );
}

export default WoodenFurniture;
