import ScrollableMenu from "../../components/ScrollableMenu";

// motion farmer
import { motion } from "framer-motion";

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


      <div className="grid grid-cols-2 gap-4 my-[50px]">

        <div className="border rounded-lg grid grid-cols-1">

          <motion.div className="group relative" whileHover={{ scale: 1.00 }} whileTap={{ scale: 0.950 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
            <img className="h-[450px] w-full object-cover" src="https://optim.tildacdn.com/stor6663-3264-4630-b536-353537643736/-/format/webp/76691465.jpg" alt="" />
            {/* <img className="w-[200px]" src="https://optim.tildacdn.com/stor6532-6434-4933-b537-613962363530/-/format/webp/99134150.jpg" alt="" /> */}
            
            <div  className="absolute top-0 left-0 z-[1234] bg-red-300 w-full h-[450px] hidden group-hover:block"></div>
            
          </motion.div>

          <div>
            <p>Комплекс «Скандинавия» 1</p>
            <span>DP-Module</span>
            <br />
            <span>SKU: ks_ekb</span>
            <br />
            <b>1 635 000р.</b>
          </div>

          <div className="grid grid-cols-2">
            <button className="btn mr-2">Оставить заявку</button>
            <button className="btn ml-2">Подробнее →</button>
          </div>

        </div>

        <div className="border rounded-lg grid grid-cols-1">

          <div className="group">
            <img className="h-[450px] w-full object-cover" src="https://optim.tildacdn.com/stor6663-3264-4630-b536-353537643736/-/format/webp/76691465.jpg" alt="" />
            {/* <img className="w-[200px]" src="https://optim.tildacdn.com/stor6532-6434-4933-b537-613962363530/-/format/webp/99134150.jpg" alt="" /> */}
            <div className="relative">
              <div className="absolute top-0 left-0 z-[1234] bg-red-400 w-full h-full"></div>
            </div>
          </div>

          <div>
            <p>Комплекс «Скандинавия» 1</p>
            <span>DP-Module</span>
            <br />
            <span>SKU: ks_ekb</span>
            <br />
            <b>1 635 000р.</b>
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
