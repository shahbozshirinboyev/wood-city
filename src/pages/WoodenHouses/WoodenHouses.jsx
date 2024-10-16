import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
// react-hot-toast
import { Toaster, toast } from "react-hot-toast";
// react phone input 2
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
// logo
import logo from '/logo/wood_city.png'
// data
import { woodenHouse } from "../../data/data";
// video
import video from '/video/video.mp4'
// http
import http from "../../services/http";
// npm install yet-another-react-lightbox
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

function WoodenHouses() {

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
      return woodenHouse
        .filter((item) => item.counts)
        .flatMap((item) => item.counts);
    } else {
      const category = woodenHouse.find(
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
      toast.error("Ismingizni kiriting!");
      return;
    }
    if (!phoneValue) {
      toast.error("Telefon raqamingizni kiriting!");
      return;
    }
    if (phoneValue.length !== 12) {
      toast.error("Telefon raqam to'g'ri kiritilmagan :(");
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
        img5: activeCardInfo.card.plan2d ? activeCardInfo.card.plan2d : "",
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
    <></>
    <section className="container mb-[25px] text-greener">
      
      <div className="grid grid-cols-1 md:grid-cols-2 mt-[25px] gap-8 p-5">
        <div>
          <img
            className="w-[200px] md:w-[220px] lg:w-[280px] xl:w-[320px] mx-auto md:ml-0"
            src={logo}
            alt=""
          />

          {/* <p className="font-bold text-[30px] md:text-[25px] xl:text-[30px] text-center md:text-start mt-[25px]">
            Готовые модульные дома и бани
          </p> */}

          <p className="text-[20px] md:text-[18px] text-center md:text-start mt-[25px]">
            
          Загородный жизнь с комфортом<br /><span><b>от 4 400 000 сум кв/м.</b></span>
          </p>

            <br />

          <div className="text-[20px] md:text-[18px]">
            <p className="text-center md:text-start"> Под Крышу – от 4 400 000 сум </p>
            <p className="text-center md:text-start"> Под Ключ – от 6 980 000 сум  </p>
          </div>

            <br />
            <p className="text-center md:text-start">
              Деревянные каркасные дома + Деревянные мебели под старину из массива.
            </p>
            <br />

          <div className="flex justify-center md:justify-start">

            <button 
              onClick={() => document.getElementById("LeaveRequest").showModal()}
              className="btn mr-[20px] text-[14px] lg:text-[18px] text-greener hover:text-lighter bg-lighter hover:bg-greener border-0">
                Оставить заявку
            </button>

            <button 
              onClick={() => document.getElementById("LeaveRequest").showModal()}
              className="btn text-[14px] lg:text-[18px] text-greener hover:text-lighter bg-lighter hover:bg-greener border-0">
                Получить каталог
            </button>

          </div>

            {/* <br /> */}

          {/* <div className="text-[14px] md:text-[16px]">
            <p className="text-center md:text-start">
              Получите готовый модульный дом или баню с установкой за 1 день и доставкой по всей СНГ
            </p>
          </div> */}
          
        </div>

        <div>
          <video className="w-full h-[400px] md:h-[500px] object-cover rounded-[20px]" muted loop autoPlay controls>
            <source
              src={video}
              type="video/mp4"
            />
          </video>
        </div>
      </div>

      <div className="mt-[25px]">
        <p className="font-bold text-[32px] text-center my-[25px]">Выберите нужный вам деревянный дом</p>
      </div>

      {/* Scroll Navigation links START */}
      <>
        <div className="relative mx-auto overflow-hidden rounded-md shadow-md bg-lighter">
          <div
            className={`absolute top-0 left-0 h-full w-[100px] bg-gradient-to-r from-lighter to-transparent flex items-center justify-start px-2
          ${scrollPos > 20 ? "flex" : "hidden"}`}
          >
            <i
              onClick={scrollLeft}
              className="bi bi-chevron-left text-greener text-[14px] cursor-pointer hover:bg-lighter hover:text-greener flex justify-center items-center w-[40px] h-[40px] rounded-full transition-all duration-200"
            ></i>
          </div>
          <ul
            ref={tabsListRef}
            onScroll={manageIcons}
            className="flex gap-4 px-6 py-3 overflow-x-scroll font-semibold select-none scrollbar-hide"
          >
            {woodenHouse.map((menu) => (
              <li key={menu.id}>
                <button
                  className={`no-underline px-5 py-1 rounded-md whitespace-nowrap transition-all duration-200 border-0 ${
                    activeMenuBtn === menu.id
                      ? "bg-greener text-lighter"
                      : "bg-white text-greener"
                  }`}
                  onClick={() => activeMenu(menu.id)}
                >
                  {menu.name}
                </button>
              </li>
            ))}
          </ul>

          <div
            className={`absolute top-0 right-0 h-full w-[100px] bg-gradient-to-l from-lighter to-transparent flex items-center justify-end px-2 ${
              scrollPos < maxScroll ? "flex" : "hidden"
            }`}
          >
            <i
              onClick={scrollRight}
              className="bi bi-chevron-right text-greener text-[14px] cursor-pointer hover:bg-lighter hover:text-greener flex justify-center items-center w-[40px] h-[40px] rounded-full transition-all duration-200"
            ></i>
          </div>
        </div>
      </>
      {/* Scroll Navigation links END */}

      {/* Cards START */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-[50px]">
        {getCounts(activeMenuBtn).map((card) => (
          <div key={card.id} className="border border-lighter rounded-2xl grid grid-cols-1 px-4 py-4">

            {/* Card elements Start */}
            <>
            <div className="relative">

              {/* <img onClick={() => { document.getElementById(`info_${card.id}`).showModal(); setActiveCardInfo({card}); }}
                   className="h-[350px] w-full object-cover rounded-2xl"
                   src={card.image}
                   alt=""
              /> */}

              <label htmlFor={`info_${card.id}`} onClick={()=>{setActiveCardInfo({card})}}>
                <img src={card.image} alt={card.title} className="cursor-pointer object-cover object-center h-[350px] w-full rounded-2xl"/>
              </label>

              <img
                // onClick={() => { document.getElementById(`info_${card.id}`).showModal(); setActiveCardInfo({card}); }}
                className="rounded-2xl cursor-pointer absolute top-3 left-3 w-[160px] hover:w-full hover:h-[350px] hover:top-0 hover:left-0 object-cover transition-all duration-300"
                src={card.plan2d}
                alt=""
              />
            </div>

            <div className="py-2 ml-2">
              <p className="text-[20px] font-bold">{card.title}</p>
              <b className="text-[18px] opacity-70">{card.price}</b>
            </div>

            <div className="grid grid-cols-2 pt-4">
              <button className="btn mr-2 text-greener hover:text-lighter bg-lighter hover:bg-greener border-0" 
                onClick={() => { document.getElementById(`order_${card.id}`).showModal(); setActiveCardInfo({card}); setCloseModalId(`order_${card.id}`); }}>
                Оставить заявку
              </button>
              {/* <button className="btn ml-2 text-oranger hover:text-lighter bg-lighter hover:bg-oranger border-0" 
                onClick={() => { document.getElementById(`info_${card.id}`).showModal(); setActiveCardInfo({card}); }}>
                Подробнее →
              </button> */}
              <label className="btn ml-2 text-oranger hover:text-lighter bg-lighter hover:bg-oranger border-0"
                         htmlFor={`info_${card.id}`} onClick={ ()=>{ setActiveCardInfo({card}) } }>
                  Подробнее →
              </label>
            </div>
            </>
            {/* Card elements Start */}

            {/* Modals START */}

            {/* Order Modal Start */}
            <dialog id={`order_${card.id}`} className="modal">

              <Toaster />

              <div className="modal-box w-11/12 max-w-xl p-0">
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
                        <p className="font-semibold text-[20px]">{card.title}</p>
                        <p className="font-bold text-[16px] opacity-70">{card.price}</p>
                        <p><span className="font-semibold">Размер:</span>{" "}<span>{card.size}</span></p>
                      </div>

                    </div>

                  </div>

                  {/* <p className="text-center py-4 font-bold text-[20px] md:text-[22px] lg:text-[24px] xl:text-[26px]">Заказать обратный звонок</p> */}

                  <form action="" className="px-6" onSubmit={handleSubmit}>

                    <label className="form-control w-full mb-2">
                      <div className="label">
                        <span className="label-text text-greener">Ваше имя:</span>
                        {/* <span className="label-text-alt">Top Right label</span> */}
                      </div>
                      <input
                        value={nameValue}
                        onChange={(e) => setNameValue(e.target.value)}
                        type="text"
                        // required
                        placeholder="Ваше имя"
                        className="input input-bordered border-lighter w-full focus:border-lighter"
                        style={{ borderRadius: ".25rem", height: "45px", fontSize: "16px", }}
                      />
                    </label>

                    <label className="form-control w-full mb-2">
                      <div className="label">
                        <span className="label-text text-greener">Ваше номер телефона:</span>
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
                        inputStyle={{ width: "100%", height: "45px", border: "1px solid #F5F2DC", borderRadius: ".25rem", transition: "border-color 0.2s", fontSize: "16px",}}
                        inputProps={{ name: "phone", required: true }}
                        buttonStyle={{border: "1px solid #F5F2DC"}}
                      />
                    </label>

                    <p className="py-2 text-start text-[14px] lg:text-[16px]">Специалист компании свяжется с вами в ближайшее время, а на вашу почту будет отправлена презентация проекта для ознакомления</p>

                    <button className="btn my-4 w-full mr-2 text-greener hover:text-lighter bg-lighter hover:bg-greener border-0">Отправить</button>

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
                          className="w-16 h-16 md:w-20 md:h-20 rounded-md cursor-pointer border border-base-200 hover:opacity-50 hover:scale-[95%] transition-all duration-200"
                          onClick={() => changeImage(images.img1)}
                        />
                        <img
                          src={images.img2}
                          alt=""
                          className="w-16 h-16 md:w-20 md:h-20 rounded-md cursor-pointer border border-base-200 hover:opacity-50 hover:scale-[95%] transition-all duration-200"
                          onClick={() => changeImage(images.img2)}
                        />
                        <img
                          src={images.img3}
                          alt=""
                          className="w-16 h-16 md:w-20 md:h-20 rounded-md cursor-pointer border border-base-200 hover:opacity-50 hover:scale-[95%] transition-all duration-200"
                          onClick={() => changeImage(images.img3)}
                        />
                        <img
                          src={images.img4}
                          alt=""
                          className="w-16 h-16 md:w-20 md:h-20 rounded-md cursor-pointer border border-base-200 hover:opacity-50 hover:scale-[95%] transition-all duration-200"
                          onClick={() => changeImage(images.img4)}
                        />
                        <img
                          src={images.img5}
                          alt=""
                          className="w-16 h-16 md:w-20 md:h-20 rounded-md cursor-pointer border border-base-200 hover:opacity-50 hover:scale-[95%] transition-all duration-200"
                          onClick={() => changeImage(images.img5)}
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-4 lg:w-2/4 h-full">

                      <div>
                        <p className="text-2xl font-bold py-4 pb-0">{card.title}</p>
                        <p className="font-bold text-xl">{card.price}</p>
                      </div>

                      <div>
                        <NavLink to="tel:+998934563421" className="mr-4 btn text-greener hover:text-lighter bg-lighter hover:bg-greener border-0">Прямой звонок</NavLink>
                        <button onClick={() => { document.getElementById(`order_${card.id}`).showModal(); setCloseModalId(`order_${card.id}`); setActiveCardInfo({ card }); }} 
                                className="btn mr-2 text-greener hover:text-lighter bg-lighter hover:bg-greener border-0">
                          Оставить заявку
                        </button>
                      </div>

                      <div>
                        <ul className="mt-5">
                          <li>
                            <span className="font-semibold">Тип проекта:</span>{" "}<span>{card.project}</span>
                          </li>
                          <li>
                            <span className="font-semibold">Площадь:</span>{" "}<span>{card.square}</span>
                          </li>
                          <li>
                            <span className="font-semibold">Размер:</span>{" "}<span>{card.size}</span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <p>
                          {card.comment}
                        </p>
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

export default WoodenHouses;
