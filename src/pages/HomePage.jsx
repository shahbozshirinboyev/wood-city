import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { woodColors } from "../data/data";
import { homeContent } from "../data/data";

// npm install yet-another-react-lightbox
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

function HomePage() {
  // Lightbox
  const [open, setOpen] = React.useState(false);
  const [activeWoodColor, setActiveWoodColor] = useState();
  const sliceStart = 1;
  const sliceEnd = 6;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slicedValues, setSlicedValues] = useState([]);
  const [showMoreColors, setShowMoreColors] = useState(false);

  useEffect(() => {
    const extendedArray = [...homeContent, ...homeContent]; // Asosiy arrayni uzaytirish

    const updateSlice = () => {
      const newSlice = extendedArray.slice(
        sliceStart + currentIndex,
        sliceEnd + currentIndex
      );
      setSlicedValues(newSlice);
    };

    updateSlice(); // Komponent ishga tushganda dastlabki qiymatlarni olish
    const intervalId = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % homeContent.length); // Indexni yangilash
    }, 5000); // Har 5 sekundda yangilash

    return () => clearInterval(intervalId); // Komponent o'chirilganda intervalni to'xtatish
  }, [currentIndex]); // currentIndex ga qarab yangilash

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % homeContent.length); // Oldinga o'tish
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + homeContent.length) % homeContent.length
    ); // Orqaga qaytish
  };

  return (
    <>
      <section className="container text-greener">
        <div className="overflow-hidden relative h-[700px] mt-[25px] rounded-[20px] border">
          {slicedValues.map((item, index) => (
            <div
              key={index}
              className={`absolute transition-all duration-500 ease-in-out ${
                index === 0
                  ? "w-full h-full"
                  : "w-[180px] h-[250px] top-[60%] rounded-[20px] shadow-2xl shadow-black" //grayscale - remove
              } bg-cover bg-center`}
              style={{
                backgroundImage: `url(${item.image})`,
                left: index === 0 ? "0" : `calc(50% + ${(index - 1) * 200}px)`,
              }}
            >
              {index === 0 && (
                <div className="Для Гос заказов ЕИСabsolute top-0 left-0 rounded-[20px] transition duration-300 p-5 w-full text-lighter h-full bg-black bg-opacity-30">
                  <h1 className="text-2xl leading-normal md:text-3xl md:leading-normal lg:text-4xl lg:leading-normal xl:text-5xl xl:leading-relaxed font-bold z-[1000] uppercase md:w-[85%] mt-[50px]">
                    {item.description}
                  </h1>

                  {/* <h2 className="text-4xl font-semibold">
                  Закажите каркасный дом из сухой строганой доски от завода производителя по отличной цене!
                </h2> */}

                  {/* <p className="mt-4">
                  Мы производим домокомплекты каркасных домов для постоянного проживания и доставляем их по всему СНГ. Закажите каркасный дом из сухой строганой доски от завода производителя по отличной цене!
                </p> */}

                  <div className="mt-8 space-x-4">
                    <button
                      className="btn bg-lighter text-greener hover:bg-greener hover:text-lighter border-0"
                      onClick={() =>
                        document.getElementById("LeaveRequest").showModal()
                      }
                    >
                      Оставить заявку
                    </button>

                    {/* <button className="btn">
                    Subscribe
                  </button> */}
                  </div>
                </div>
              )}
            </div>
          ))}

          <div className="absolute top-[600px] left-[30px] md:left-[100px] select-none">
            <button
              className="btn w-[50px] h-[50px] lg:w-[60px] lg:h-[60px] border-0 rounded-full mr-4 text-greener bg-lighter transition-all duration-300 font-bold text-[18px] hover:bg-greener hover:text-lighter"
              onClick={handlePrevious}
            >
              {" "}
              {"<"}{" "}
            </button>
            <button
              className="btn w-[50px] h-[50px] lg:w-[60px] lg:h-[60px] border-0 rounded-full mr-4 text-greener bg-lighter transition-all duration-300 font-bold text-[18px] hover:bg-greener hover:text-lighter"
              onClick={handleNext}
            >
              {" "}
              {">"}{" "}
            </button>
          </div>
        </div>

        <div className="my-[25px]">
          <div className="grid grid-cols-1 md:grid-cols-2 card card-side gap-4 md:gap-8 border border-lighter bg-lighterbg p-3 rounded-[20px]">
            <NavLink to="/woodenhouses" className="w-full">
              <button className="btn text-[18px] w-full text-greener hover:text-lighter bg-lighter hover:bg-greener border-0">
                <h1>Заказать деревянный дом</h1>
              </button>
            </NavLink>
            <NavLink to="/woodenfurniture" className="w-full">
              <button className="btn text-[18px] w-full text-greener hover:text-lighter bg-lighter hover:bg-greener border-0">
                <h1>Заказать деревянную мебель</h1>
              </button>
            </NavLink>
          </div>
        </div>

        <div className="mb-[50px]">
          <h1 className="font-bold text-[32px] text-center my-[25px] text-greener">
            Для Гос заказов ЕИС
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 card card-side gap-0 md:gap-8 border border-lighter bg-lighterbg p-3 rounded-[20px]">
            <figure>
              <div className="carousel carousel-vertical h-96 rounded-[20px]">
                <div className="carousel-item h-full w-full">
                  <img
                    src="./state_orders/1.jpg"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="carousel-item h-full w-full">
                  <img
                    src="./state_orders/2.jpg"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="carousel-item h-full w-full">
                  <img
                    src="./state_orders/3.jpg"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </figure>

            <div className="card-body py-0 px-0">
              <div className="py-3 pt-3 md:pt-0">
                <h2 className="card-title">Для Гос заказов ЕИС</h2>
                <ul className="list-disc ml-[25px] py-4">
                  {/* <li className="mb-4">
                    Раздел "Для Гос заказов ЕИС" предлагает эффективную
                    платформу для оформления и мониторинга государственных
                    заказов.
                  </li>
                  <li className="mb-4">
                    Через этот раздел организации могут управлять своими
                    госзакупками и отслеживать документы в системе ЕИС.
                  </li>
                  <li>
                    Раздел "Для Гос заказов ЕИС" обеспечивает удобный и быстрый
                    процесс работы с государственными заказами для
                    государственного сектора.
                  </li> */}
                  <li className="mb-4">
                  Сотрудничество с государственными и общественными организациями
                  </li>
                </ul>
              </div>

              <div className="card-actions justify-center items-end h-full grid grid-cols-2 gap-4">
                <button
                  onClick={() =>
                    document.getElementById("LeaveRequest").showModal()
                  }
                  className="btn whitespace-nowrap text-[14px] md:text-[12px] lg:text-[14px] text-greener hover:text-lighter bg-lighter hover:bg-greener border-0"
                >
                  <i className="bi bi-card-list"></i>Оставить заявку
                </button>

                <NavLink
                  to="tel:+998770086563"
                  className="btn whitespace-nowrap text-[14px] md:text-[12px] lg:text-[14px] text-greener hover:text-lighter bg-lighter hover:bg-greener border-0"
                >
                  <i className="bi bi-telephone"></i>+998 (77) 008 65 63
                </NavLink>
              </div>
            </div>
          </div>
        </div>

        <h3 className="font-bold text-[32px] text-center my-[50px] ">
          {" "}
          Возможные цвета дерева{" "}
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-[50px]">
          {/* First show STRAT */}
          {woodColors.map(
            (woodColor, index) =>
              (index < 4 || showMoreColors) && (
                <div
                  key={woodColor.id}
                  className="border border-lighter rounded-[10px]"
                >
                  <img
                    className="w-full h-[250px] md:h-[350px] object-cover object-top rounded-[10px]"
                    src={woodColor.img}
                    alt="WoodColor"
                    onClick={() => {
                      setOpen(true);
                      setActiveWoodColor(woodColor.img);
                    }}
                  />
                </div>
              )
          )}
          {/* First show STRAT */}
        </div>
        {/* Show All Photo START */}
        {!showMoreColors && (
          <div className="md:col-span-3 grid  grid-cols-4 gap- my-[25px]">
            <div className="col-span-3 flex items-center">
              <p className="font-bold text-[16px] md:text-[25px] lg:text-[30px] xl:text-[35px]">
                Ещё больше цветов здесь
              </p>
            </div>
            <div className="flex justify-end items-center">
              <button
                className="btn font-bold text-[14px] md:text-[16px] lg:text-[18px] text-greener hover:text-lighter bg-lighter hover:bg-greener border-0"
                onClick={() => setShowMoreColors(true)}
              >
                Смотреть фото
              </button>
            </div>
          </div>
        )}
        {/* Show All Photo END */}
      </section>
      <>
        <Lightbox
          open={open}
          plugins={[Zoom]}
          close={() => setOpen(false)}
          slides={[{ src: `${activeWoodColor}` }]}
          carousel={{ finite: true }}
          styles={{ container: { backgroundColor: "rgba(0, 0, 0, .8)" } }}
          render={{
            buttonPrev: () => null, // Chapga o'tkazuvchi tugmani o'chiradi
            buttonNext: () => null, // O'ngga o'tkazuvchi tugmani o'chiradi
          }}
          zoom={{
            maxZoomPixelRatio: 5, // Zoom imkoniyatlarini oshiradi (bu qiymatni oshirishingiz mumkin)
            zoomInMultiplier: 2, // Zoom bosqichlari tezligini boshqaradi
            doubleTapDelay: 300, // Ikki marta bosish uchun kechikish vaqti (ms)
            doubleClickDelay: 300, // Ikki marta bosish uchun kechikish vaqti (ms)
            scrollToZoom: true, // Skrin qilish orqali zoom qilish imkoniyati
          }}
        />
      </>
    </>
  );
}

export default HomePage;
