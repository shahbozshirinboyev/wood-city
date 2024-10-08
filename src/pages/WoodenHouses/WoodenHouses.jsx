import ScrollableMenu from "../../components/ScrollableMenu";

function WoodenHouses() {
  const handleMenuIndex = (index) => {
    console.log("Bu menu indexi:", index);
  };

  return (
    <section className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 mt-[50px] gap-8">
        <div className="">
          <img className="w-[300px] mx-auto md:ml-0" src="./logo/wood_city_black.png" alt="" />

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

      <div>
        <ScrollableMenu onMenuIndex={handleMenuIndex} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-[50px]">
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
            <p className="text-[20px] font-bold">Комплекс «Скандинавия» 1</p>
            <p className="">DP-Module</p>
            <p className="">SKU: ks_ekb</p>
            <b className="text-[25px]">1 635 000р.</b>
          </div>

          <div className="grid grid-cols-2">
            <button className="btn mr-2">Оставить заявку</button>
            <button className="btn ml-2">Подробнее →</button>
          </div>
        </div>

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
            <p className="text-[20px] font-bold">Комплекс «Скандинавия» 1</p>
            <p className="">DP-Module</p>
            <p className="">SKU: ks_ekb</p>
            <b className="text-[25px]">1 635 000р.</b>
          </div>

          <div className="grid grid-cols-2">
            <button className="btn mr-2">Оставить заявку</button>
            <button className="btn ml-2">Подробнее →</button>
          </div>
        </div>

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
            <p className="text-[20px] font-bold">Комплекс «Скандинавия» 1</p>
            <p className="">DP-Module</p>
            <p className="">SKU: ks_ekb</p>
            <b className="text-[25px]">1 635 000р.</b>
          </div>

          <div className="grid grid-cols-2">
            <button className="btn mr-2">Оставить заявку</button>
            <button className="btn ml-2">Подробнее →</button>
          </div>
        </div>

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
            <p className="text-[20px] font-bold">Комплекс «Скандинавия» 1</p>
            <p className="">DP-Module</p>
            <p className="">SKU: ks_ekb</p>
            <b className="text-[25px]">1 635 000р.</b>
          </div>

          <div className="grid grid-cols-2">
            <button className="btn mr-2">Оставить заявку</button>
            <button className="btn ml-2">Подробнее →</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WoodenHouses;
