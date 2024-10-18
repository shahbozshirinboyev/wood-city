import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
// react-hot-toast
import { Toaster, toast } from "react-hot-toast";
// react phone input 2
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
// data
import { woodenFurniture } from "../../data/data";
// http
import http from "../../services/http";
//images
// import furniture_1 from "../../../public/furniture/6.jpg";
// import furniture_2 from "../../../public/furniture/24.jpg";
// import furniture_3 from "../../../public/furniture/16.jpg";
// npm install yet-another-react-lightbox
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

function WoodenFurniture() {
  const [activeMenuBtn, setActiveMenuBtn] = useState(0);
  const tabsListRef = useRef(null);
  const [scrollPos, setScrollPos] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);
  // img modal
  const [open, setOpen] = useState(false);

  // Scoll Menu Section START
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
  // Scoll Menu Section END

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

  // Order Modal START
  const [nameValue, setNameValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const [closeModalId, setCloseModalId] = useState("");
  const [activeCardInfo, setActiveCardInfo] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(activeCardInfo);
    if (!nameValue) {
      toast.error("Введите свое имя!");
      return;
    }
    if (!phoneValue) {
      toast.error("Введите свой номер телефона!");
      return;
    }
    if (!(phoneValue.length >= 11)) {
      toast.error("Номер телефона введен неверно :(");
      return;
    }

    const photo = `${window.location.origin}${activeCardInfo.card.image}`;

    toast.promise(
      http.post("/sendPhoto", {
        chat_id: "-1002294640036", // test my group
        // chat_id: "-1001631640240", // main
        photo: photo,
        caption: `Новый запрос:\n\nЗаказ: ${activeCardInfo.card.title}\nЦена: ${activeCardInfo.card.price}\n\nИмя: ${nameValue}\nТелефон: +${phoneValue}\n\nКлиент выразил интерес к деревянной мебели и попросил связаться с ним по номеру телефона.`,
      }),
      {
        loading: "Отправка сообщения...",
        success: (response) => {
          closeModal();
          console.log(response);
          return <b>Сообщение успешно отправлено!</b>;
        },
        error: (error) => {
          console.log(error);
          return <b>Не удалось отправить сообщение.</b>;
        },
      }
    );
  };

  const closeModal = () => {
    const modal = document.getElementById(closeModalId);
    modal.close();
    setNameValue("");
    setPhoneValue("998");
  };
  // Order Modal END

  // Product Info Modal START
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

  useEffect(() => {
    setActiveImage(images.img1);
  }, [images.img1]);

  const [animate, setAnimate] = useState(false);

  const changeImage = (newImg) => {
    setAnimate(true);
    setTimeout(() => {
      setActiveImage(newImg);
      setAnimate(false);
    }, 200);
  };
  // Product Info Modal END

  return (
    <>
    <section className="container mb-[25px] text-greener">
      
      {/* <div>
        <p className="font-bold text-[32px] text-center my-[25px]">Деревянная мебель</p>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        <div className="col-span-2 row-span-2 bg-beige">
          <img src={furniture_1} alt="" className="w-full h-full" />
        </div>

        <div className="relative">
          <img src={furniture_2} alt="" className="absolute top-0 left-0 w-full h-full object-cover blur-[0px]" />
        </div>

        <div className="relative">
          <img src={furniture_3} alt="" className="absolute top-0 left-0 w-full h-full object-cover  blur-[0px]" />
        </div>
      </div> */}

      <div className="mt-[25px]">
        <p className="font-bold text-[32px] text-center my-[25px]">Выберите нужную вам деревянную мебель</p>
      </div>

      {/* Scroll Navigation links START */}
      <>
        <div className="relative mx-auto overflow-hidden rounded-md shadow-md bg-lighter">
          {/* Left button start */}
          <div className={`absolute top-0 left-0 h-full w-[100px] bg-gradient-to-r from-lighter to-transparent flex items-center justify-start px-2 ${scrollPos > 20 ? "flex" : "hidden"}`}>
            <i onClick={scrollLeft} className="bi bi-chevron-left text-greener text-[14px] cursor-pointer hover:bg-lighter hover:text-greener flex justify-center items-center w-[40px] h-[40px] rounded-full transition-all duration-200"></i>
          </div>
          {/* Left button end */}
          <ul ref={tabsListRef} onScroll={manageIcons} className="flex gap-4 px-6 py-3 overflow-x-scroll font-semibold select-none scrollbar-hide">
            {woodenFurniture.map((menu) => (
              <li key={menu.id}>
                <button className={`no-underline px-5 py-1 rounded-md whitespace-nowrap transition-all duration-200 border-0 
                  ${activeMenuBtn === menu.id
                      ? "bg-greener text-lighter"
                      : "bg-white text-greener"
                  }`}
                  onClick={() => activeMenu(menu.id)}
                >{menu.name}</button>
              </li>
            ))}
          </ul>
          {/* Right button start */}
          <div className={`absolute top-0 right-0 h-full w-[100px] bg-gradient-to-l from-lighter to-transparent flex items-center justify-end px-2 ${scrollPos < maxScroll ? "flex" : "hidden"}`}>
            <i onClick={scrollRight} className="bi bi-chevron-right text-greener text-[14px] cursor-pointer hover:bg-lighter hover:text-greener flex justify-center items-center w-[40px] h-[40px] rounded-full transition-all duration-200"></i>
          </div>
          {/* Right button end */}
        </div>
      </>
      {/* Scroll Navigation links END */}

      {/* Cards START */}
      <div className="grid grid-cols-1 gap-3 py-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {getCounts(activeMenuBtn).map((card) => (
          <div key={card.id} className="rounded-[10px] border border-lighter bg-white">

            {/* Card elements Start */}
            <>
            <div className="p-3">

              <label htmlFor={`info_${card.id}`} onClick={()=>{setActiveCardInfo({card})}}>
                <img src={card.image} alt={card.title} className="cursor-pointer object-cover object-center h-[250px] w-full rounded-[10px]"/>
              </label>

            </div>

            <div className="p-3"> 

              <p className="font-bold text-[20px] pl-2">{card.title}</p>

              <span className="text-[16px] text-greener text-opacity-70 font-semibold mb-2 block">
                <span className="font-bold pl-2">{card.price}</span>
              </span>

              <div className="grid grid-cols-2 pt-4">
                <button className="btn mr-2 text-greener hover:text-lighter bg-lighter hover:bg-greener border-0"
                 onClick={() => { document.getElementById(`order_${card.id}`).showModal(); setActiveCardInfo({card}); setCloseModalId(`order_${card.id}`); }} >
                  Оставить заявку
                </button>
                {/* <button className="btn ml-2 text-oranger hover:text-lighter bg-lighter hover:bg-oranger border-0" 
                  onClick={() => { document.getElementById(`info_${card.id}`).showModal(); setActiveCardInfo({card}); }} > 
                  Подробнее →
                </button> */}
                  <label className="btn ml-2 text-oranger hover:text-lighter bg-lighter hover:bg-oranger border-0"
                         htmlFor={`info_${card.id}`} onClick={ ()=>{ setActiveCardInfo({card}) } }>
                  Подробнее →
                  </label>
              </div>

            </div>
            </>
            {/* Card elements Start */}

            {/* Modals START */}

            {/* Order Modal Start */}
            <dialog id={`order_${card.id}`} className="modal">
              <Toaster />
              <div className="modal-box w-11/12 max-w-xl p-0 ">
                {/* Modal header Start */}
                <form method="dialog" className="border-b-[2px] border-base-200 h-[60px] grid grid-cols-2 items-center px-[24px] bg-custom-green-10">
                  <span className="text-custom-green-dark font-bold">Оставить заявку</span>
                  <div className="text-end">
                    <button className="btn btn-sm border-0 btn-circle text-custom-green-dark bg-custom-green-10 hover:bg-custom-green-30">{" "}✕{" "}</button>
                  </div>
                </form>
                {/* Modal header End */}

                <div className="p-4">
                  <div className="px-6 mb-4">

                    <p className="font-bold">Ваш заказ:</p>

                    <div className="flex gap-8 p-2">

                      <div> <img className="w-[100px] h-[100px] object-cover rounded-[15px]" src={card.image} alt="" /> </div>

                      <div className="">
                        <p className="font-bold text-[20px]">{card.title}</p>
                        <p className="font-bold text-[16px] opacity-70">{card.price}</p>
                        <p><span className="font-semibold">Размер:</span>{" "}<span>{card.size}</span></p>
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
                        value={nameValue}
                        onChange={(e) => setNameValue(e.target.value)}
                        type="text"
                        // required
                        placeholder="Ваше имя"
                        className="input input-bordered w-full"
                        style={{ borderRadius: ".25rem", height: "45px", fontSize: "16px", }}
                      />
                    </label>

                    <label className="form-control w-full mb-2">
                      <div className="label">
                        <span className="label-text">Ваше номер телефона:</span>
                        {/* <span className="label-text-alt">Top Right label</span> */}
                      </div>
                      <PhoneInput
                        value={phoneValue} 
                        onChange={setPhoneValue}
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
                        inputStyle={{ width: "100%", height: "45px", border: "1px solid #ccc", borderRadius: ".25rem", transition: "border-color 0.2s", fontSize: "16px",}}
                        inputProps={{ name: "phone", required: true }}
                      />
                    </label>

                    <p className="py-2 text-start text-[14px] lg:text-[16px]">Специалист компании свяжется с вами в ближайшее время, а на вашу почту будет отправлена презентация проекта для ознакомления</p>

                    <button className="btn my-4 w-full">Отправить</button>

                  </form>
                </div>
              </div>
              {/* Outside close section start */}
              <form method="dialog" className="modal-backdrop"><button>close</button></form>
              {/* Outside close section end */}
            </dialog>
            {/* Order Modal End */}

            {/* Information Modal Start */}
            <>
              <input type="checkbox" id={`info_${card.id}`} className="modal-toggle" />

              <div className="modal transition-all duration-300" role="dialog">
                <Toaster />

                <div className="modal-box w-11/12 max-w-5xl p-0">
                {/* Modal header Start */}
                <form method="dialog" className="border-b-[2px] border-base-200 h-[60px] grid grid-cols-2 items-center px-[24px] bg-custom-green-10">
                  <span className="text-custom-green-dark font-bold">Подробнее →</span>
                  <div className="text-end">
                  <label htmlFor={`info_${card.id}`} className="btn btn-sm border-0 btn-circle">{" "}✕{" "}</label>
                  </div>
                </form>
                {/* Modal header End */}

                <>
                  <div className="flex flex-col justify-between lg:flex-row gap-6 p-6">

                    <div className="flex flex-col gap-6 lg:w-2/4">
                      <img
                        onClick={ () => { setOpen(true); }}
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
                          className="w-16 h-16 md:w-20 md:h-20 rounded-md cursor-pointer object-cover border border-base-200 hover:opacity-50 hover:scale-[95%] transition-all duration-200"
                          onClick={() => changeImage(images.img1)}
                        />
                        <img
                          src={images.img2}
                          alt=""
                          className="w-16 h-16 md:w-20 md:h-20 rounded-md cursor-pointer object-cover border border-base-200 hover:opacity-50 hover:scale-[95%] transition-all duration-200"
                          onClick={() => changeImage(images.img2)}
                        />
                        <img
                          src={images.img3}
                          alt=""
                          className="w-16 h-16 md:w-20 md:h-20 rounded-md cursor-pointer object-cover border border-base-200 hover:opacity-50 hover:scale-[95%] transition-all duration-200"
                          onClick={() => changeImage(images.img3)}
                        />
                        <img
                          src={images.img4}
                          alt=""
                          className="w-16 h-16 md:w-20 md:h-20 rounded-md cursor-pointer object-cover border border-base-200 hover:opacity-50 hover:scale-[95%] transition-all duration-200"
                          onClick={() => changeImage(images.img4)}
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-4 lg:w-2/4 h-full">

                      <div>
                        <p className="text-2xl font-bold py-4 pb-0">{card.title}</p>
                        <p className="font-semibold text-xl opacity-80">{card.price}</p>
                      </div>

                      

                      <div>
                        <ul>
                          <li>
                            <span className="font-semibold">Наличие:</span>{" "}<span>{card.availability}</span>
                          </li>
                          <li>
                            <span className="font-semibold">Материал:</span>{" "}<span>{card.material}</span>
                          </li>
                          <li>
                            <span className="font-semibold">Размер:</span>{" "}<span>{card.size}</span>
                          </li>
                          <li>
                            <span className="font-semibold">Примечание:</span>{" "}<span>{card.comment}</span>
                          </li>
                        </ul>
                      </div>

                      <div className="">
                        <NavLink to="tel:+998934563421" className="btn mr-4 text-greener hover:text-lighter bg-lighter hover:bg-greener border-0">Прямой звонок</NavLink>
                        <button onClick={() => { document.getElementById(`order_${card.id}`).showModal(); setCloseModalId(`order_${card.id}`); setActiveCardInfo({ card }); }} 
                                className="btn text-greener hover:text-lighter bg-lighter hover:bg-greener border-0">
                          Оставить заявку
                        </button>
                      </div>

                    </div>
                  </div>
                </>
                  
                </div>
                {/* Outside close section start */}
                <label class="modal-backdrop" for={`info_${card.id}`}> Close </label>
              </div>
            </>
            {/* Information Modal End */}

            {/* Modals END */}
          </div>
        ))}
      </div>
      {/* Cards END */}
    </section>
      <>
        <Lightbox
            open={open}
            plugins={[Zoom]}
            close={() => setOpen(false)}
            slides={[ { src: `${activeImg}` } ]}
            carousel={{ finite: true }}
            styles={{ container: { backgroundColor: "rgba(0, 0, 0, .8)" } }}
            render={{
                buttonPrev: () => null, // Chapga o'tkazuvchi tugmani o'chiradi
                buttonNext: () => null, // O'ngga o'tkazuvchi tugmani o'chiradi
              }}
              zoom={{
                maxZoomPixelRatio: 5,  // Zoom imkoniyatlarini oshiradi (bu qiymatni oshirishingiz mumkin)
                zoomInMultiplier: 2,   // Zoom bosqichlari tezligini boshqaradi
                doubleTapDelay: 300,   // Ikki marta bosish uchun kechikish vaqti (ms)
                doubleClickDelay: 300, // Ikki marta bosish uchun kechikish vaqti (ms)
                scrollToZoom: true,    // Skrin qilish orqali zoom qilish imkoniyati
            }}
        />
      </>
    </>
  );
}

export default WoodenFurniture;