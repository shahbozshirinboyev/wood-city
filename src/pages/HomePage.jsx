import React, { useEffect, useState } from "react";

function HomePage() {
  const arr = [
    {
      id: 0,
      image: "./home_img/1.jpg",
      title: "SLIDER",
      name: "EAGLE",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.",
    },
    {
      id: 1,
      image: "./home_img/2.jpg",
      title: "SLIDER",
      name: "OWL",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.",
    },
    {
      id: 2,
      image: "./home_img/3.jpg",
      title: "SLIDER",
      name: "CROW",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.",
    },
    {
      id: 3,
      image: "./home_img/4.jpg",
      title: "SLIDER",
      name: "BUTTERFLY",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.",
    },
    {
      id: 4,
      image: "./home_img/5.jpg",
      title: "SLIDER",
      name: "OWL",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.",
    },
    {
      id: 5,
      image: "./home_img/6.jpg",
      title: "SLIDER",
      name: "EAGLE",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.",
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
    <section className="container">

      <div className="overflow-hidden relative h-[700px] mt-[25px] rounded-[20px]">
        {slicedValues.map((item, index) => (
          <div
            key={index}
            className={`absolute transition-all duration-500 ease-in-out ${index === 0
              ? "w-full h-full"
              : "w-[180px] h-[250px] top-[60%] rounded-[20px] grayscale shadow-2xl"
              } bg-cover bg-center`}
            style={{
              backgroundImage: `url(${item.image})`,
              left: index === 0 ? "0" : `calc(50% + ${(index - 1) * 200}px)`,
            }}
          >

            {/* {index === 0 && (
              <div className="absolute top-1/3 left-[100px] transform -translate-y-1/2 text-white w-[650px]">
                <h1 className="text-6xl font-bold uppercase">{item.title}</h1>
                <h2 className="text-4xl font-semibold">{item.name}</h2>
                <p className="mt-4">{item.description}</p>
                <div className="mt-8 space-x-4">
                  <button className="px-6 py-2 border border-white text-white hover:bg-white hover:text-black transition">
                    See More
                  </button>
                  <button className="px-6 py-2 bg-transparent text-green-500 border border-white hover:bg-green-500 hover:text-white transition">
                    Subscribe
                  </button>
                </div>
              </div>
            )} */}
            
          </div>
        ))}

        <div className="absolute text-[#160A06] top-[600px] left-[30px] md:left-[100px] select-none">
          <button className="py-1 px-6 border rounded-xl mr-4 bg-white transition-all duration-300" onClick={handlePrevious}> {"<"} </button>
          <button className="py-1 px-6 border rounded-xl mr-4 bg-white transition-all duration-300" onClick={handleNext}> {">"} </button>
        </div>

      </div>


      <div className="mb-[50px]">

        <p className="font-bold text-[32px] text-center my-[25px]">
          Для Гос заказов ЕИС
        </p>

        <div className=" grid grid-cols-1 md:grid-cols-2 card card-side gap-0 md:gap-8  bg-base-100 border p-3 rounded-[20px]">

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

          <div className="card-body py-0 px-0 bt">

            <div className="py-5">
              <h2 className="card-title">New movie is released!</h2>
              <p>Click the button to watch on Jetflix app.</p>
            </div>

            <div className="card-actions justify-center md:justify-end grid grid-cols-2 gap-4">
              <button className="btn whitespace-nowrap text-[14px] md:text-[12px] lg:text-[14px]"><i className="bi bi-card-list"></i>Оставить заявку</button>
              <button className="btn whitespace-nowrap text-[14px] md:text-[12px] lg:text-[14px]"><i className="bi bi-telephone"></i>+998 (87) 456 73 23</button>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default HomePage;
