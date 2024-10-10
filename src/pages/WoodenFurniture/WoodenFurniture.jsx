import { useState, useRef, useEffect } from "react";
import { woodenFurniture } from "../../data/data";

//images
import furniture_1 from "../../../public/furniture/6.jpg";
import furniture_2 from "../../../public/furniture/24.jpg";
import furniture_3 from "../../../public/furniture/16.jpg";
import FurnitureProductInfo from "../../components/FurnitureProductInfo";

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

      {/* Scroll Navigation links START */}
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
      {/* Scroll Navigation links END */}


      {/* Cards START */}
      <div className="grid grid-cols-1 gap-3 py-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

        {getCounts(activeMenuBtn).map((card) => (

          <div key={card.title} className="rounded-[10px] border bg-white">
            
            <div className="p-3">
              <img 
                onClick={() => document.getElementById(`info_${card.id}`).showModal()}
                src={card.image} alt={card.title} className="cursor-pointer object-cover object-center h-[250px] w-full rounded-[10px]"
              />
            </div>

            <div className="p-3">

              <p className="font-semibold text-[18px] pl-2 mb-2">{card.title}</p>

              <span className="text-[20px] text-sky-500 font-semibold mb-2 block">
                <span className="font-bold pl-2">$</span> &nbsp;{card.price} 
              </span>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <button className="btn" onClick={() => document.getElementById(`order_${card.id}`).showModal()} >
                  Оставить заявку
                </button>
                <button className="btn" onClick={() => document.getElementById(`info_${card.id}`).showModal()}>
                  Подробнее →
                </button>
              </div>
              
            </div>

            {/* Modal START */}

            {/* Modal Info */}
            <dialog id={`order_${card.id}`} className="modal">
              <div className="modal-box w-11/12 max-w-5xl p-0">

                {/* Modal header Start */}
                <form method="dialog" className="border-b-[2px] border-base-200 h-[60px] grid grid-cols-2 items-center px-[24px] bg-custom-green-10">
                  <span className="text-custom-green-dark font-bold">Оставить заявку</span>
                  <div className="text-end">
                    <button className="btn btn-sm border-0 btn-circle text-custom-green-dark bg-custom-green-10 hover:bg-custom-green-30"> ✕ </button>
                  </div>
                </form>
                {/* Modal header End */}

                <div className="border border-red-700 p-2">
                  <p className="">
                    ORDER <br />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla officia commodi sapiente? Esse porro maxime, sed, exercitationem quas nulla quo modi voluptatibus repellat laborum velit, ut tempora ab. Non possimus, id aperiam accusantium eveniet sed mollitia! Officiis unde, nulla illum dolorum necessitatibus minima itaque ullam molestias dignissimos est distinctio veniam ducimus. Reprehenderit aperiam possimus, cum veritatis architecto minus ex quaerat sit unde harum laudantium quisquam ad, facilis pariatur? Perspiciatis cupiditate porro, blanditiis deleniti, omnis animi saepe ut sit quia consequuntur explicabo autem quaerat doloremque sed distinctio. Quibusdam similique numquam nostrum ab officia, corrupti ipsam voluptatibus dolores mollitia et pariatur consectetur doloribus iure animi error saepe accusamus, explicabo, ullam neque ad ex? Nostrum eaque tempore ipsam deserunt in alias praesentium voluptatibus, sapiente voluptates quisquam sed cum ab, ex rem repellat cumque sequi? Est, impedit numquam? Voluptatum eius quo, sint quod aliquid fuga dolores error sed quam! Voluptatem iste, est omnis consequatur, enim fugit ipsa sint modi saepe assumenda ducimus nesciunt doloribus natus mollitia sed incidunt possimus fuga quam recusandae velit ut sequi! Magnam libero eum dolorum soluta iure ab deserunt nam saepe distinctio aspernatur optio adipisci, ducimus labore, enim est? Quos fugiat neque iure numquam quo blanditiis autem possimus consectetur ullam aliquam quaerat magni saepe, quidem aspernatur, nostrum, facere perspiciatis! Non earum, voluptate aliquam ex exercitationem ipsum sapiente odit eveniet accusamus, deserunt autem molestias sed asperiores itaque architecto nostrum laboriosam! Laudantium necessitatibus itaque, nemo aliquid facilis sunt vitae ipsum consectetur labore soluta atque. Nemo itaque facilis enim cumque dolorum harum, architecto doloribus obcaecati assumenda exercitationem eveniet odio, quam qui reprehenderit nulla, quas voluptatum quaerat rerum ipsum illum voluptas id autem earum! Suscipit, eaque doloribus consequatur mollitia repellat quos. Quos doloribus modi ullam placeat asperiores, possimus a voluptas officia atque tempora excepturi blanditiis eaque earum quod sed, ab doloremque sapiente. Nam eius quibusdam commodi labore, consequuntur cum, qui sint aliquid numquam corrupti nemo modi recusandae atque id perspiciatis? Pariatur deleniti excepturi natus dolore. Illo cumque cupiditate temporibus, explicabo quasi, accusamus, voluptate dolores dolor numquam minima ratione id dignissimos expedita nemo? Expedita delectus esse accusamus numquam quibusdam harum fuga animi perferendis architecto at? Odio amet quo iusto esse eaque sed ipsa sit aperiam distinctio ea, blanditiis possimus temporibus animi, architecto earum voluptatem? Consequuntur, sapiente. Consequatur ab molestias quibusdam dolorem magnam consequuntur magni quidem incidunt repellendus ratione voluptatum vitae doloribus beatae maiores repudiandae alias delectus aliquam optio saepe voluptates officia, quo, nulla maxime. Quo eaque, cumque vel tempore corporis impedit, laborum eos fugit maxime modi veritatis beatae minus illum magnam non tenetur itaque earum ipsa quod voluptates nemo eum voluptatem! Laboriosam animi natus iste velit saepe iusto voluptate sint modi maxime omnis fugit sit illum corrupti impedit dolor odit eveniet vel, distinctio, quo odio possimus molestiae culpa? Maxime distinctio repellat dolores quae praesentium voluptatibus! Quibusdam animi dolore pariatur consequuntur eum explicabo totam porro. Dolore repellat autem sed corrupti ratione. Officiis iusto veniam debitis reprehenderit delectus et, officia esse id magni totam quo ipsa quas commodi reiciendis mollitia dolores aliquid aperiam sequi. Temporibus, et facere? Iste rerum, nostrum architecto voluptatum, explicabo unde quas excepturi facere esse laboriosam optio minima vero. Illum vero ipsam veritatis aliquid quos rerum molestiae, eveniet nobis mollitia ut laboriosam temporibus. Minus, tempore, praesentium doloremque omnis adipisci aspernatur iure numquam eos quasi laborum unde nostrum culpa excepturi error provident distinctio facilis, rerum ipsa nam ea repellendus exercitationem? Quae laudantium maiores possimus, delectus consectetur labore sint, commodi quod modi a iusto esse molestiae voluptas deleniti odio, doloribus consequatur adipisci? Repellendus eos modi voluptatem mollitia officiis nulla excepturi odit harum! Voluptatem earum vero non et exercitationem aliquam, enim ducimus. Sit maiores eligendi omnis. Eos quisquam beatae sequi adipisci maiores similique aliquid quibusdam tempore nisi dolore cum eveniet ut veniam reprehenderit nobis numquam amet, esse ea odit tenetur! Hic, labore recusandae laborum neque itaque ab amet! Harum eius doloribus blanditiis nobis assumenda aliquam, incidunt iste? Quia quam ad quae qui dolor et reiciendis fuga. Distinctio iure eos obcaecati ipsam dolores tempora sed earum eius iusto, incidunt nihil at odit quasi? Repudiandae velit tempora praesentium illum aut distinctio culpa ad hic impedit! Possimus delectus labore harum rerum deserunt excepturi cumque nisi sapiente aliquam repudiandae eum pariatur ratione dignissimos quo, ipsam magnam eaque, vitae ipsum natus nobis veniam. Maxime autem dolore aliquid unde nostrum molestias in similique corporis quod nisi odit, soluta omnis itaque, atque iusto blanditiis exercitationem recusandae veniam id! Quidem laborum minima et doloremque animi dignissimos ratione? Eligendi optio veritatis quisquam cumque totam? Sit blanditiis, doloribus iste qui dolorum laborum quis similique ipsum adipisci eos error nesciunt. Hic amet voluptatum molestiae perspiciatis, obcaecati provident. Ipsam molestias placeat quaerat, accusantium iure voluptatem voluptate nam accusamus? Accusantium porro aliquam dignissimos iure, necessitatibus vel obcaecati odio explicabo unde repellendus ipsum nostrum beatae sint quibusdam soluta quam aspernatur rem quisquam doloribus! Maxime facere ipsum enim. Quod ipsum quae nemo eveniet ullam. Itaque cumque velit provident impedit harum soluta nemo enim dignissimos molestiae? Hic, adipisci quisquam quasi, pariatur at nemo voluptates eligendi cum illo vel totam, ducimus eaque a illum veritatis debitis? Quae, quia! At, enim culpa ullam voluptate quae soluta quisquam rem facilis laborum distinctio a quos porro voluptates fuga iste nemo. Nostrum reiciendis quibusdam dolore. Ducimus deleniti dicta, perferendis obcaecati maiores hic odit accusamus, nam praesentium eveniet soluta, qui molestias ullam consequuntur ipsam placeat ipsum voluptatibus architecto. Dicta officiis, deserunt, blanditiis ab, et impedit excepturi maxime voluptatum nulla unde delectus molestias consequuntur dolore iste voluptas error? Ipsum, aliquam. Ratione sint deleniti laudantium animi aliquam voluptatem consequatur laboriosam aut debitis! Veritatis in dicta modi, atque quasi fugiat nam itaque optio quo, beatae iusto hic id eligendi possimus animi est qui officia ex cum officiis enim ratione, quod rerum aspernatur. Voluptas rem delectus aperiam amet repudiandae, quo nostrum voluptatum vel nulla corporis, quas eaque voluptates cumque iste, dignissimos tenetur temporibus ullam minus exercitationem libero fugit perspiciatis quaerat hic! Et dolorum quidem quibusdam laudantium, tenetur itaque illum error suscipit dicta totam in doloribus est, sunt maxime enim debitis expedita magni non consectetur sint iure a veritatis voluptates vitae! Deleniti, quibusdam esse.
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
              {/* Outside close section start */}
              <form method="dialog" className="modal-backdrop"><button>close</button></form>
              {/* Outside close section end */}
            </dialog>

            {/* Order Modal */}
            <dialog id={`info_${card.id}`} className="modal">
              <div className="modal-box w-11/12 max-w-5xl p-0">

                {/* Modal header Start */}
                <form method="dialog" className="border-b-[2px] border-base-200 h-[60px] grid grid-cols-2 items-center px-[24px] bg-custom-green-10">
                  <span className="text-custom-green-dark font-bold">Подробнее →</span>
                  <div className="text-end">
                    <button className="btn btn-sm border-0 btn-circle text-custom-green-dark bg-custom-green-10 hover:bg-custom-green-30"> ✕ </button>
                  </div>
                </form>
                {/* Modal header End */}

                
                  <FurnitureProductInfo />
                

              </div>
              {/* Outside close section start */}
              <form method="dialog" className="modal-backdrop"><button>close</button></form>
              {/* Outside close section end */}
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
