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
      return woodenFurniture
        .filter((item) => item.counts)
        .flatMap((item) => item.counts);
    } else {
      const category = woodenFurniture.find(
        (item) => item.id === activeMenuBtn
      );
      return category ? category.counts : [];
    }
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
          <div key={card.title} className="rounded-[10px] border bg-white">
            <div className="p-3">
              <img
                src={card.image}
                alt=""
                className="object-cover object-center h-[250px] w-full rounded-[10px]"
              />
            </div>

            <div className="p-3">
              <p className="font-semibold text-[16px] mb-2">{card.title}</p>
              <span className="text-[18px] text-red-700 font-semibold mb-2 block">
                <span className="font-bold">$</span>
                &nbsp;92
              </span>
              <div className="grid grid-cols-2 gap-4">
                {/* <button className="w-full px-2 py-1 border rounded-[5px] hover:bg-green-500 hover:text-white font-semibold transition-all duration-300">
                  Звонить
                </button> */}
                <button
                  className="btn"
                  onClick={() =>
                    document.getElementById(`order_${card.id}`).showModal()
                  }
                >
                  Оставить заявку
                </button>
                {/* Modal button */}
                <button
                  className="btn"
                  onClick={() =>
                    document.getElementById(`info_${card.id}`).showModal()
                  }
                >
                  Подробнее →
                </button>
              </div>
            </div>

            {/* Modal START */}
            {/* Open the modal using document.getElementById('ID').showModal() method */}

            <dialog id={`order_${card.id}`} className="modal">
              <div className="modal-box w-11/12 max-w-5xl p-0">
                {/* Modal header Start */}
                <form
                  method="dialog"
                  className="border-b-[2px] border-base-200 h-[60px] grid grid-cols-2 items-center px-[24px] bg-custom-green-10"
                >
                  <span className="text-custom-green-dark font-bold">
                    {card.id}
                  </span>
                  <div className="text-end">
                    <button className="btn btn-sm border-0 btn-circle text-custom-green-dark bg-custom-green-10 hover:bg-custom-green-30">
                      ✕
                    </button>
                  </div>
                </form>
                {/* Modal header End */}
                <div className="border border-red-700 p-2">
                  <p>
                    ORDER <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Earum soluta expedita qui officia tempore reiciendis nobis
                    quod repellat sed doloremque perspiciatis totam
                    voluptatibus, sint eligendi perferendis incidunt tenetur
                    dolores iste ullam laudantium ratione debitis distinctio!
                    Molestias mollitia quibusdam officiis voluptates nisi dicta
                    architecto iusto placeat laudantium explicabo sint
                    distinctio, deserunt beatae facilis voluptatum voluptatibus
                    est exercitationem asperiores et corporis illo enim
                    possimus. At asperiores cum recusandae iste voluptate
                    accusantium eius nam, aliquam possimus ad necessitatibus
                    illum adipisci praesentium repudiandae consequuntur
                    perferendis illo nostrum nesciunt obcaecati aspernatur
                    excepturi, provident beatae laudantium. Consectetur, hic!
                    Id, necessitatibus accusantium sunt natus minima facilis
                    tempora. Quod voluptates in maxime perspiciatis hic eum,
                    eaque, aliquid animi molestias reiciendis, porro praesentium
                    quos nesciunt blanditiis doloremque consequatur vitae
                    deserunt provident totam sequi excepturi. Veritatis ducimus
                    molestias, assumenda rem vero commodi quaerat, doloremque
                    cupiditate cumque magni atque labore aliquid nostrum. Vitae
                    nemo nisi assumenda hic rem recusandae officiis ab vel error
                    accusamus quae cupiditate dolorum tempore soluta, at aut.
                    Fugiat explicabo perspiciatis ut magni sapiente a sunt
                    ducimus earum quas cupiditate dolor porro ipsa quis animi at
                    quia, autem suscipit nulla. Fugiat est itaque voluptate
                    nobis eveniet expedita, fugit animi exercitationem tenetur
                    illo porro. Nisi impedit dolorem nemo! Ea voluptas ullam hic
                    facilis cumque doloribus beatae consequatur iure
                    reprehenderit. Id vel numquam voluptatibus adipisci? Sit,
                    fuga! Perferendis impedit dolorem accusamus perspiciatis
                    reiciendis libero obcaecati dicta dolore ex nihil corporis
                    placeat veritatis doloribus eveniet ab repudiandae at
                    necessitatibus illum recusandae expedita, consequuntur ea
                    odio? Reiciendis at corrupti quod. Obcaecati laboriosam,
                    iusto quis quibusdam ipsam excepturi officia necessitatibus
                    asperiores sit recusandae, aliquam mollitia soluta
                    exercitationem repellat aut. Tempora blanditiis dicta ut
                    quam quidem, nemo nesciunt possimus laboriosam quae!
                    Asperiores et illo reprehenderit vel vero voluptas sint non,
                    necessitatibus laborum temporibus perferendis dolorem
                    exercitationem corporis quia est consectetur laboriosam,
                    dolores error voluptatibus.
                  </p>
                </div>
              </div>
              {/* Outside close section */}
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
              {/* Outside close section */}
            </dialog>
            {/* Order Modal */}
            <dialog id={`info_${card.id}`} className="modal">
              <div className="modal-box w-11/12 max-w-5xl p-0">
                {/* Modal header Start */}
                <form
                  method="dialog"
                  className="border-b-[2px] border-base-200 h-[60px] grid grid-cols-2 items-center px-[24px] bg-custom-green-10"
                >
                  <span className="text-custom-green-dark font-bold">
                    {card.id}
                  </span>
                  <div className="text-end">
                    <button className="btn btn-sm border-0 btn-circle text-custom-green-dark bg-custom-green-10 hover:bg-custom-green-30">
                      ✕
                    </button>
                  </div>
                </form>
                {/* Modal header End */}
                <div className="border border-red-700 p-2">
                  <p>
                    INFO Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Earum soluta expedita qui officia tempore reiciendis
                    nobis quod repellat sed doloremque perspiciatis totam
                    voluptatibus, sint eligendi perferendis incidunt tenetur
                    dolores iste ullam laudantium ratione debitis distinctio!
                    Molestias mollitia quibusdam officiis voluptates nisi dicta
                    architecto iusto placeat laudantium explicabo sint
                    distinctio, deserunt beatae facilis voluptatum voluptatibus
                    est exercitationem asperiores et corporis illo enim
                    possimus. At asperiores cum recusandae iste voluptate
                    accusantium eius nam, aliquam possimus ad necessitatibus
                    illum adipisci praesentium repudiandae consequuntur
                    perferendis illo nostrum nesciunt obcaecati aspernatur
                    excepturi, provident beatae laudantium. Consectetur, hic!
                    Id, necessitatibus accusantium sunt natus minima facilis
                    tempora. Quod voluptates in maxime perspiciatis hic eum,
                    eaque, aliquid animi molestias reiciendis, porro praesentium
                    quos nesciunt blanditiis doloremque consequatur vitae
                    deserunt provident totam sequi excepturi. Veritatis ducimus
                    molestias, assumenda rem vero commodi quaerat, doloremque
                    cupiditate cumque magni atque labore aliquid nostrum. Vitae
                    nemo nisi assumenda hic rem recusandae officiis ab vel error
                    accusamus quae cupiditate dolorum tempore soluta, at aut.
                    Fugiat explicabo perspiciatis ut magni sapiente a sunt
                    ducimus earum quas cupiditate dolor porro ipsa quis animi at
                    quia, autem suscipit nulla. Fugiat est itaque voluptate
                    nobis eveniet expedita, fugit animi exercitationem tenetur
                    illo porro. Nisi impedit dolorem nemo! Ea voluptas ullam hic
                    facilis cumque doloribus beatae consequatur iure
                    reprehenderit. Id vel numquam voluptatibus adipisci? Sit,
                    fuga! Perferendis impedit dolorem accusamus perspiciatis
                    reiciendis libero obcaecati dicta dolore ex nihil corporis
                    placeat veritatis doloribus eveniet ab repudiandae at
                    necessitatibus illum recusandae expedita, consequuntur ea
                    odio? Reiciendis at corrupti quod. Obcaecati laboriosam,
                    iusto quis quibusdam ipsam excepturi officia necessitatibus
                    asperiores sit recusandae, aliquam mollitia soluta
                    exercitationem repellat aut. Tempora blanditiis dicta ut
                    quam quidem, nemo nesciunt possimus laboriosam quae!
                    Asperiores et illo reprehenderit vel vero voluptas sint non,
                    necessitatibus laborum temporibus perferendis dolorem
                    exercitationem corporis quia est consectetur laboriosam,
                    dolores error voluptatibus.
                  </p>
                </div>
              </div>
              {/* Outside close section */}
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
              {/* Outside close section */}
            </dialog>
            {/* Modal END */}
          </div>
        ))}
      </div>
      {/* Cards END */}
    </section>
  );
}

export default WoodenFurniture;
