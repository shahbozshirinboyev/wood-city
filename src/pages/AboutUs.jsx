import React, { useState } from "react";
import Partners from "../components/Partners";

function AboutUs() {

  const [showAllGallery, setShowAllGallery] = useState(false)

  const partners = [
    "./partners/1.svg",
    "./partners/2.svg",
    "./partners/3.svg",
    "./partners/4.svg",
    "./partners/5.svg",
    "./partners/6.svg",
    "./partners/7.svg",
    "./partners/8.svg",
    "./partners/9.svg",
    "./partners/10.svg",
  ];

  return (
    <section className="container">

      <p className="font-bold text-[32px] text-center my-[50px]"> О нас </p>
 
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 grid-col-reverse">

        <div className="col-span-1 md:col-span-2 order-2 md:order-1">
          <p className="text-[45px] font-bold">Часть чего-то большего</p>
          <span className="my-4 block text-[22px]">
            DP-Group — это группа компаний, занимающаяся коммерческой недвижимостью, малоэтажным строительством и развитием сферы внутреннего туризма в России. 
          </span>
          <span className="my-4 block text-[22px]">
            Все проекты DP-Group активно развиваются по территории России и СНГ. Имеем ряд успешных проектов в сфере загородного отдыха и малоэтажного строительства.
          </span>
          <button className="btn mt-[35px] text-[22px]">Узнать больше</button>
        </div>

        <div className="justify-center md:justify-end grid order-1 md:order-2">
          <img src="./logo/wood_city_vertical.png" alt="" className="w-[250px]" />
        </div>
        
      </div>

      

      <p className="font-bold text-[32px] text-center my-[50px] "> Partners </p>

      <div className="mb-[50px]">
        <Partners images={partners} from={0} to={"-100%"} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        <div>
          <img className="w-full rounded-[25px] p-5" src="https://media.istockphoto.com/id/1350474131/photo/business-team-portrait.jpg?s=612x612&w=0&k=20&c=_rwVn8lkmzXc-_Q5tSyH-Jt0tt_acwxvXVYCckg8v0M=" alt="All Staffs" />
          <p className="text-[20px] mt-[20px] text-center">«Знакомство с командой DP-Module»</p>
        </div>

        <div className="pt-5">
          <img className="w-[350px]" src="./logo/wood_city_black.png" alt="" />

          <p className="mt-[35px] text-[20px]">Мы берём на себя весь спектр проектных и строительных работ: от архитектурного проектирования до строительного проекта и его исполнения, а также осуществляем авторский надзор за реализацией проекта.</p>

          <div className="grid grid-cols-3 mt-[35px] gap-4">

            <div>
              <p className="text-[55px] font-bold">13</p>
              <p className="text-[16px]">Собственных цехов</p>
            </div>

            <div>
              <p className="text-[55px] font-bold">{">"}50</p>
              <p className="text-[16px]">Готовых изделий в месяц</p>
            </div>
            
            <div>
              <p className="text-[55px] font-bold">12</p>
              <p className="text-[16px]">Лет работы в модульном строительстве</p>
            </div>

          </div>

        </div>

      </div>

      <p className="font-bold text-[32px] text-center my-[50px] "> Gallery </p>


      <div className="grid grid-cols-3 gap-4 mb-[50px]">

        {/* First show STRAT */}
        <div>
          <img className="w-full h-[300px] object-cover" src="./gallery/1-min.jpg" alt="" />
        </div>

        <div>
          <img className="w-full h-[300px] object-cover" src="./gallery/2-min.jpg" alt="" />
        </div>

        <div>
          <img className="w-full h-[300px] object-cover" src="./gallery/3-min.jpg" alt="" />
        </div>
        {/* First show STRAT */}
        
        
        {/* Show All Photo START */}
      { !showAllGallery && 
      (<div className="col-span-3 grid grid-cols-4 gap- my-[25px] ">
        <div className="col-span-3">
          <p className="font-bold text-[35px]">Ещё больше фотографий здесь</p>
        </div>
        <div className="flex justify-end items-center">
          <button className="btn font-bold text-[20px]" onClick={() => setShowAllGallery(true)}>Смотреть фото</button>
        </div>
      </div>)
      }
        {/* Show All Photo END */}

        {/* Second Show START */}
        
        { showAllGallery && (
          <>
          <div>
          <img className="w-full h-[300px] object-cover" src="./gallery/4-min.jpg" alt="" />
        </div>
        
        <div>
          <img className="w-full h-[300px] object-cover" src="./gallery/5-min.jpg" alt="" />
        </div>
        
        <div>
          <img className="w-full h-[300px] object-cover" src="./gallery/6-min.jpg" alt="" />
        </div>
        
        <div>
          <img className="w-full h-[300px] object-cover" src="./gallery/7-min.jpg" alt="" />
        </div>
        
        <div>
          <img className="w-full h-[300px] object-cover" src="./gallery/8-min.jpg" alt="" />
        </div>
        
        <div>
          <img className="w-full h-[300px] object-cover" src="./gallery/9-min.jpg" alt="" />
        </div>
        
        <div>
          <img className="w-full h-[300px] object-cover" src="./gallery/10-min.jpg" alt="" />
        </div>
        
        <div>
          <img className="w-full h-[300px] object-cover" src="./gallery/11-min.jpg" alt="" />
        </div>
        
        <div>
          <img className="w-full h-[300px] object-cover" src="./gallery/12-min.jpg" alt="" />
        </div></>)}
        {/* Second Show END */}

      </div>



    </section>
  );
}

export default AboutUs;
