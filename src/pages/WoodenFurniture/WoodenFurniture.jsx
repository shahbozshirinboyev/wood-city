import { useState, useRef, useEffect } from "react";
import { woodenFurniture } from "../../data/data";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import { NavLink } from "react-router-dom";

// react-hot-toast
import { Toaster, toast } from "react-hot-toast";

// http
import http from "../../services/http";

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

  // -----------------------order
  const [nameValue, setNameValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const [closeModalId, setCloseModalId] = useState("");
  const [activeCardInfo, setActiveCardInfo] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(activeCardInfo);
    // Ism va telefon raqamini tekshirish
    if (!nameValue) {
      toast.error("Ismingizni kiriting!");
      // console.log(closeModalId)
      return;
    }
    if (!phoneValue) {
      toast.error("Telefon raqamingizni kiriting!");
      return;
    }

    const photo = `${window.location.origin}${activeCardInfo.card.image}`;

    toast.promise(
      http.post("/sendPhoto", {
        chat_id: "-1002294640036",
        photo: photo,
        caption: ` Запрос отложен:\n\nOrder: ${activeCardInfo.card.title}\n👤Имя: ${nameValue}\n📱Телефон: +${phoneValue}`,
      }),
      {
        loading: "Отправка сообщения...", // Kutish holati
        success: (response) => {
          closeModal();
          console.log(response); // Muvaffaqiyatli natija
          return <b>Сообщение успешно отправлено!</b>;
        },
        error: (error) => {
          console.log(error); // Xato holati
          // console.log(photo)
          return <b>Не удалось отправить сообщение.</b>;
        },
      }
    );
  };

  const closeModal = () => {
    const modal = document.getElementById(closeModalId);
    modal.close(); // Modalni yopish
    setNameValue(""); // Ism inputini tozalash
    setPhoneValue("998"); // Telefon raqami inputini tozalash
    // setCloseModalId('');
  };

  // Produc Info =============================================>
    const [images, setImages] = useState({
      img1: "",
      img2: "",
      img3: "",
      img4: "",
    });
  
    const [activeImg, setActiveImage] = useState(images.img1);
  
    useEffect(() => {
      if (activeCardInfo?.card) {
        setImages({
          img1: activeCardInfo.card.image ? activeCardInfo.card.image : "",
          img2: activeCardInfo.card.image1 ? activeCardInfo.card.image1 : "",
          img3: activeCardInfo.card.image2 ? activeCardInfo.card.image2 : "",
          img4: activeCardInfo.card.image3 ? activeCardInfo.card.image3 : "",
        });
      }
    }, [activeCardInfo]);
  
    // To update the active image whenever images.img1 changes
    useEffect(() => {
      setActiveImage(images.img1);
    }, [images.img1]);

  const [animate, setAnimate] = useState(false);

  const changeImage = (newImg) => {
    setAnimate(true); // Animatsiyani boshlash
    setTimeout(() => {
      setActiveImage(newImg); // Yangi rasmni qo'yish
      setAnimate(false); // Animatsiyani to'xtatish
    }, 200); // 300ms davomida animatsiya
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
                onClick={() =>
                  document.getElementById(`info_${card.id}`).showModal()
                }
                src={card.image}
                alt={card.title}
                className="cursor-pointer object-cover object-center h-[250px] w-full rounded-[10px]"
              />
            </div>

            <div className="p-3">
              <p className="font-semibold text-[18px] pl-2 mb-2">
                {card.title}
              </p>

              <span className="text-[20px] text-sky-500 font-semibold mb-2 block">
                <span className="font-bold pl-2">$</span> &nbsp;{card.price}
              </span>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <button
                  className="btn"
                  onClick={() => {
                    document.getElementById(`order_${card.id}`).showModal();
                    setCloseModalId(`order_${card.id}`);
                    setActiveCardInfo({ card });
                  }}
                >
                  Оставить заявку
                </button>
                <button
                  className="btn"
                  onClick={() =>{
                    document.getElementById(`info_${card.id}`).showModal(); setActiveCardInfo({ card });
                  }
                  }
                >
                  Подробнее →
                </button>
              </div>
            </div>

            {/* Modal START */}

            {/* Modal Info */}
            <dialog id={`order_${card.id}`} className="modal">
              <Toaster />

              <div className="modal-box w-11/12 max-w-xl p-0 ">
                {/* Modal header Start */}
                <form
                  method="dialog"
                  className="border-b-[2px] border-base-200 h-[60px] grid grid-cols-2 items-center px-[24px] bg-custom-green-10"
                >
                  <span className="text-custom-green-dark font-bold">
                    Оставить заявку
                  </span>
                  <div className="text-end">
                    <button className="btn btn-sm border-0 btn-circle text-custom-green-dark bg-custom-green-10 hover:bg-custom-green-30">
                      {" "}
                      ✕{" "}
                    </button>
                  </div>
                </form>
                {/* Modal header End */}

                <div className="p-4">
                  <div className="px-6 mb-4">
                    <p className="font-bold">Ваш заказ:</p>
                    <div className="flex gap-8 p-2">
                      <div>
                        <img
                          className="w-[100px] h-[100px] object-cover"
                          src={card.image}
                          alt=""
                        />
                      </div>
                      <div className="">
                        <p className="font-semibold text-[20px]">
                          {card.title}
                        </p>
                        <p className="font-bold text-[16px] opacity-70">
                          $ {card.price}
                        </p>
                        <p>Размер: {card.size} см</p>
                      </div>
                    </div>
                  </div>

                  {/* <p className="text-center py-4 font-bold text-[20px] md:text-[22px] lg:text-[24px] xl:text-[26px]">Заказать обратный звонок</p> */}

                  <form action="" className="px-6" onSubmit={handleSubmit}>
                    <label className="form-control w-full mb-2">
                      <div className="label">
                        <span className="label-text">Ваше имя:</span>
                        {/* <span className="label-text-alt">Top Right label</span> */}
                      </div>

                      <input
                        value={nameValue} // Ism qiymatini boshqarish
                        onChange={(e) => setNameValue(e.target.value)} // Ism o'zgarganda yangilash
                        type="text"
                        // required
                        placeholder="Ваше имя"
                        className="input input-bordered w-full"
                        style={{
                          borderRadius: ".25rem",
                          height: "45px",
                          fontSize: "16px",
                        }}
                      />
                    </label>

                    <label className="form-control w-full mb-2">
                      <div className="label">
                        <span className="label-text">Ваше номер телефона:</span>
                        {/* <span className="label-text-alt">Top Right label</span> */}
                      </div>

                      <PhoneInput
                        value={phoneValue} // Telefon raqami qiymatini boshqarish
                        onChange={setPhoneValue} // Telefon raqami o'zgarganda yangilash
                        country={"uz"}
                        onlyCountries={["uz", "kz", "kg", "tj", "tm"]}
                        masks={{
                          uz: "(..) ...-..-..", // O'zbekiston
                          kz: "(...) ...-..-..", // Qozog'iston
                          kg: "(..) ...-..-..", // Qirg'iziston
                          tj: "(..) ...-..-..", // Tojikiston
                          tm: "(..) ..-..-..", // Turkmaniston
                        }}
                        inputClass="input input-bordered w-full"
                        inputStyle={{
                          width: "100%",
                          height: "45px",
                          border: "1px solid #ccc",
                          borderRadius: ".25rem",
                          transition: "border-color 0.2s",
                          fontSize: "16px",
                        }}
                        inputProps={{ name: "phone", required: true }}
                      />
                    </label>

                    <p className="py-2 text-start text-[14px] lg:text-[16px]">
                      Специалист компании свяжется с вами в ближайшее время, а
                      на вашу почту будет отправлена презентация проекта для
                      ознакомления.
                    </p>

                    <button className="btn my-4 w-full">Отправить</button>
                  </form>
                </div>
              </div>

              {/* Outside close section start */}
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
              {/* Outside close section end */}
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
                    Подробнее →
                  </span>
                  <div className="text-end">
                    <button className="btn btn-sm border-0 btn-circle text-custom-green-dark bg-custom-green-10 hover:bg-custom-green-30">
                      {" "}
                      ✕{" "}
                    </button>
                  </div>
                </form>
                {/* Modal header End */}

                {/* <FurnitureProductInfo  /> */}

                <>
                  <div className="flex flex-col justify-between lg:flex-row gap-6 p-6">
                    <div className="flex flex-col gap-6 lg:w-2/4">
                      <img
                        src={activeImg}
                        alt="Active"
                        className={`w-full h-full aspect-square object-cover rounded-xl transition-all duration-200 border border-base-200 ${
                          animate
                            ? "-translate-x-[5%] opacity-0"
                            : "-translate-x-0 opacity-100"
                        }`}
                      />

                      <div className="flex flex-row justify-between h-26 border-[2px] border-base-200 p-2 rounded-lg">
                        <img
                          src={images.img1}
                          alt=""
                          className="w-24 h-24 rounded-md cursor-pointer border border-base-200 hover:opacity-50 hover:scale-[95%] transition-all duration-200"
                          onClick={() => changeImage(images.img1)}
                        />
                        <img
                          src={images.img2}
                          alt=""
                          className="w-24 h-24 rounded-md cursor-pointer border border-base-200 hover:opacity-50 hover:scale-[95%] transition-all duration-200"
                          onClick={() => changeImage(images.img2)}
                        />
                        <img
                          src={images.img3}
                          alt=""
                          className="w-24 h-24 rounded-md cursor-pointer border border-base-200 hover:opacity-50 hover:scale-[95%] transition-all duration-200"
                          onClick={() => changeImage(images.img3)}
                        />
                        <img
                          src={images.img4}
                          alt=""
                          className="w-24 h-24 rounded-md cursor-pointer border border-base-200 hover:opacity-50 hover:scale-[95%] transition-all duration-200"
                          onClick={() => changeImage(images.img4)}
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-4 lg:w-2/4 h-full">
                      <div>
                        <p className="text-3xl py-4">«Модерн» 30-2</p>
                        <p className="text-[18px]">DP-Module</p>
                        <p className="text-[16px]">SKU: mod30-2_ekb</p>
                      </div>

                      <div>
                        <p className="font-bold text-xl">1 405 000р.</p>
                      </div>

                      <div>
                        <NavLink 
                        to="tel:+998934563421"
                        className="btn mr-4" >Прямой звонок</NavLink>
                        <button 
                        onClick={() => { document.getElementById(`order_${card.id}`).showModal(); setCloseModalId(`order_${card.id}`); setActiveCardInfo({ card }); }}
                        className="btn" >Оставить заявку</button>
                      </div>

                      <div>
                        <ul className="mt-5">
                          <li>
                            <span className="font-semibold">Проект:</span>{" "}
                            <span>Модерн</span>
                          </li>
                          <li>
                            <span className="font-semibold">Тип проекта:</span>{" "}
                            <span>Дом</span>
                          </li>
                          <li>
                            <span className="font-semibold">Проект:</span>{" "}
                            <span>30м²</span>
                          </li>
                          <li>
                            <span className="font-semibold">
                              Количество модулей:
                            </span>{" "}
                            <span>2</span>
                          </li>
                          <li>
                            <span className="font-semibold">LxWxH:</span>{" "}
                            <span>600x500x270 sm</span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <p>
                          Продумана каждая деталь: просторная гостиная,
                          совмещенная со спальней, полноценная кухонная зона с
                          обеденным столом и санузел.
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              </div>
              {/* Outside close section start */}
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
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
