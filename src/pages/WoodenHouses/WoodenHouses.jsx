import ScrollableMenu from "../../components/ScrollableMenu";

function WoodenHouses() {

  const handleMenuIndex = (index) => {
    console.log("Bu menu indexi:", index);
  };

  return (
    <section className="container">

      <div className="grid grid-cols-2 mt-[50px] gap-8">

        <div className="">
          <img className="w-[300px]" src="./logo/wood_city_black.png" alt="" />

          <p className="font-bold text-[60px] mt-[25px]">Готовые модульные дома и бани</p>

          <p className="text-[30px] mt-[25px]">Загородная жизнь с комфортом <span className="font-bold">от 518 000 рублей</span> с установкой за 1 день</p>

          <div className="mt-[50px]">
            <button className="btn mr-[25px]">Оставить заявку</button>
            <button className="btn">Получить каталог</button>
          </div>

          <div className="mt-[40px] text-[20px]">
            <p>Получите готовый модульный дом или баню с установкой за 1 день и доставкой по всей России</p>
          </div>

        </div>

        <div className="">
          <video className="w-full h-auto" muted loop autoplay controls>
            <source src="./video/DP-Module - Модульные дома и бани.mp4" type="video/mp4" />
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


      <div className="grid grid-cols-1 gap-4">

        <div className=""></div>

      </div>


      

    </section>
  );
}

export default WoodenHouses;
