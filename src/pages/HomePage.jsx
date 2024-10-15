import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function HomePage() {
  const arr = [
    {
      id: 0,
      image: "./home_img/1.jpg",
      title: "SLIDER",
      name: "EAGLE",
      description:
        " Мы производим домокомплекты каркасных домов для постоянного проживания и доставляем их по всему СНГ.",
    },
    {
      id: 1,
      image: "./home_img/2.jpg",
      title: "SLIDER",
      name: "OWL",
      description:
        "Мы производим домокомплекты каркасных домов для постоянного проживания и доставляем их по всему СНГ.",
    },
    {
      id: 2,
      image: "./home_img/3.jpg",
      title: "SLIDER",
      name: "CROW",
      description:
        "Мы производим домокомплекты каркасных домов для постоянного проживания и доставляем их по всему СНГ.",
    },
    {
      id: 3,
      image: "./home_img/4.jpg",
      title: "SLIDER",
      name: "BUTTERFLY",
      description:
        "Закажите каркасный дом из сухой строганой доски от завода производителя по отличной цене!",
    },
    {
      id: 4,
      image: "./home_img/5.jpg",
      title: "SLIDER",
      name: "OWL",
      description:
        "Закажите каркасный дом из сухой строганой доски от завода производителя по отличной цене!",
    },
    {
      id: 5,
      image: "./home_img/6.jpg",
      title: "SLIDER",
      name: "EAGLE",
      description:
        "Закажите каркасный дом из сухой строганой доски от завода производителя по отличной цене!",
    },
    // {
    //   id: 6,
    //   image: "./home_img/1.jpeg",
    //   title: "SLIDER",
    //   name: "KINGFISHER",
    //   description:
    //     "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.",
    // },
    // {
    //   id: 7,
    //   image: "./home_img/8.jpg",
    //   title: "SLIDER",
    //   name: "PARROT",
    //   description:
    //     "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.",
    // },
    // {
    //   id: 8,
    //   image: "./home_img/9.jpg",
    //   title: "SLIDER",
    //   name: "HERON",
    //   description:
    //     "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.",
    // },
    // {
    //   id: 9,
    //   image: "./home_img/10.jpg",
    //   title: "SLIDER",
    //   name: "BUTTERFLY",
    //   description:
    //     "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.",
    // },
    // {
    //   id: 10,
    //   image: "./home_img/11.jpg",
    //   title: "SLIDER",
    //   name: "PARROT",
    //   description:
    //     "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.",
    // },
  ];
  const sliceStart = 1;
  const sliceEnd = 6;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slicedValues, setSlicedValues] = useState([]);

  useEffect(() => {
    const extendedArray = [...arr, ...arr]; // Asosiy arrayni uzaytirish

    const updateSlice = () => {
      const newSlice = extendedArray.slice(
        sliceStart + currentIndex,
        sliceEnd + currentIndex
      );
      setSlicedValues(newSlice);
    };

    updateSlice(); // Komponent ishga tushganda dastlabki qiymatlarni olish
    const intervalId = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % arr.length); // Indexni yangilash
    }, 5000); // Har 5 sekundda yangilash

    return () => clearInterval(intervalId); // Komponent o'chirilganda intervalni to'xtatish
  }, [currentIndex]); // currentIndex ga qarab yangilash

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % arr.length); // Oldinga o'tish
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + arr.length) % arr.length); // Orqaga qaytish
  };

  return (
    <section className="container text-greener">

      <div className="overflow-hidden relative h-[700px] mt-[25px] rounded-[20px] border">
        {slicedValues.map((item, index) => (
          <div
            key={index}
            className={`absolute transition-all duration-500 ease-in-out ${index === 0
              ? "w-full h-full"
              : "w-[180px] h-[250px] top-[60%] rounded-[20px] shadow-2xl shadow-black" //grayscale - remove
              } bg-cover bg-center`}
            style={{
              backgroundImage: `url(${item.image})`,
              left: index === 0 ? "0" : `calc(50% + ${(index - 1) * 200}px)`,
            }}
          >

            {index === 0 && (
              <div className="absolute top-0 left-0 rounded-[20px] transition duration-300 p-5 w-full text-lighter h-full bg-black bg-opacity-30">

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

                  <button className="btn bg-lighter text-greener hover:bg-greener hover:text-lighter border-0" onClick={() => document.getElementById("LeaveRequest").showModal()}>
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
          <button className="btn w-[50px] h-[50px] lg:w-[60px] lg:h-[60px] border-0 rounded-full mr-4 text-greener bg-lighter transition-all duration-300 font-bold text-[18px] hover:bg-greener hover:text-lighter" onClick={handlePrevious}> {"<"} </button>
          <button className="btn w-[50px] h-[50px] lg:w-[60px] lg:h-[60px] border-0 rounded-full mr-4 text-greener bg-lighter transition-all duration-300 font-bold text-[18px] hover:bg-greener hover:text-lighter" onClick={handleNext}> {">"} </button>
        </div>

      </div>


      <div className="mb-[50px]">

        <p className="font-bold text-[32px] text-center my-[25px] text-greener">
          Для Гос заказов ЕИС
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 card card-side gap-0 md:gap-8  bg-base-100 border border-lighter p-3 rounded-[20px]">

          <figure>
            <div className="carousel carousel-vertical h-96 rounded-[20px]">
              <div className="carousel-item h-full w-full">
                <img src="./state_orders/1.jpg" className="object-cover w-full h-full" />
              </div>
              <div className="carousel-item h-full w-full">
                <img src="./state_orders/2.jpg" className="object-cover w-full h-full" />
              </div>
              <div className="carousel-item h-full w-full">
                <img src="./state_orders/3.jpg" className="object-cover w-full h-full" />
              </div>
            </div>
          </figure>

          <div className="card-body py-0 px-0">

            <div className="py-3 pt-3 md:pt-0">
              <h2 className="card-title">Для Гос заказов ЕИС</h2>
                <ul className="list-disc ml-[25px] py-4">
                  <li className="mb-4">
                    Раздел "Для Гос заказов ЕИС" предлагает эффективную платформу для оформления и мониторинга государственных заказов.
                  </li>
                  <li className="mb-4">
                    Через этот раздел организации могут управлять своими госзакупками и отслеживать документы в системе ЕИС.
                  </li>
                  <li>
                    Раздел "Для Гос заказов ЕИС" обеспечивает удобный и быстрый процесс работы с государственными заказами для государственного сектора.
                  </li>
                </ul>
            </div>

            <div className="card-actions justify-center items-end h-full grid grid-cols-2 gap-4">

              <button 
                onClick={() => document.getElementById("LeaveRequest").showModal()}
                className="btn whitespace-nowrap text-[14px] md:text-[12px] lg:text-[14px] text-greener hover:text-lighter bg-lighter hover:bg-greener border-0">
                  <i className="bi bi-card-list"></i>Оставить заявку
              </button>

              <NavLink 
                to="tel:+998770086563"
                className="btn whitespace-nowrap text-[14px] md:text-[12px] lg:text-[14px] text-greener hover:text-lighter bg-lighter hover:bg-greener border-0">
                  <i className="bi bi-telephone"></i>+998 (77) 008 65 63
              </NavLink>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default HomePage;
