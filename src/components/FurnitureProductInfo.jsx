import React, { useState } from 'react'

function FurnitureProductInfo() {

    const [images, setImages] = useState({
        img1 : "https://optim.tildacdn.com/stor3662-3066-4630-a134-343731316562/-/format/webp/53149545.jpg",
        img2 : "https://optim.tildacdn.com/stor3036-6335-4031-b038-353837623437/-/format/webp/58415204.jpg",
        img3 : "https://optim.tildacdn.com/stor3338-6432-4034-b838-326466646463/-/format/webp/53095761.jpg",
        img4 : "https://optim.tildacdn.com/stor6166-3463-4366-b865-326537303862/-/format/webp/90456582.jpg"
    })

    const [activeImg, setActiveImage] = useState(images.img1)

    const [animate, setAnimate] = useState(false);

    const changeImage = (newImg) => {
        setAnimate(true); // Animatsiyani boshlash
        setTimeout(() => {
            setActiveImage(newImg); // Yangi rasmni qo'yish
            setAnimate(false); // Animatsiyani to'xtatish
        }, 200); // 300ms davomida animatsiya
    };

    const [amount, setAmount] = useState(1);

  return (
    <>
        <div className='flex flex-col justify-between lg:flex-row gap-6 p-6'>

            <div className='flex flex-col gap-6 lg:w-2/4'>

            <img 
                src={activeImg} 
                alt="Active" 
                className={`w-full h-full aspect-square object-cover rounded-xl transition-all duration-200 border border-base-200 ${animate ? '-translate-x-[5%] opacity-0' : '-translate-x-0 opacity-100'}`} 
            />

                <div className='flex flex-row justify-between h-26 border-[2px] border-base-200 p-2 rounded-lg'>
                    <img src={images.img1} alt="" className='w-24 h-24 rounded-md cursor-pointer border border-base-200 hover:opacity-50 hover:scale-[95%] transition-all duration-200' onClick={() => changeImage(images.img1)} />
                    <img src={images.img2} alt="" className='w-24 h-24 rounded-md cursor-pointer border border-base-200 hover:opacity-50 hover:scale-[95%] transition-all duration-200' onClick={() => changeImage(images.img2)} />
                    <img src={images.img3} alt="" className='w-24 h-24 rounded-md cursor-pointer border border-base-200 hover:opacity-50 hover:scale-[95%] transition-all duration-200' onClick={() => changeImage(images.img3)} />
                    <img src={images.img4} alt="" className='w-24 h-24 rounded-md cursor-pointer border border-base-200 hover:opacity-50 hover:scale-[95%] transition-all duration-200' onClick={() => changeImage(images.img4)} />
                </div>

            </div>

            
            <div className='flex flex-col gap-4 lg:w-2/4 h-full'>

                <div>
                    <p className='text-3xl py-4'>«Модерн» 30-2</p>
                    <p className='text-[18px]'>DP-Module</p>
                    <p className='text-[16px]'>SKU: mod30-2_ekb</p>
                </div>

                <div>
                    <p className='font-bold text-xl'>1 405 000р.</p>
                </div>

                <div>
                    <button className='btn mr-4'>Прямой звонок</button>
                    <button className='btn'>Оставить заявку</button>
                </div>

                <div>
                    <ul className='mt-5'>
                        <li>
                            <span className='font-semibold'>Проект:</span>                      <span>Модерн</span>                         
                        </li>
                        <li>
                            <span className='font-semibold'>Тип проекта:</span>                 <span>Дом</span>
                        </li>
                        <li>
                            <span className='font-semibold'>Проект:</span>                      <span>30м²</span>
                        </li>
                        <li>
                            <span className='font-semibold'>Количество модулей:</span>          <span>2</span>
                        </li>
                        <li>
                            <span className='font-semibold'>LxWxH:</span>                       <span>600x500x270 sm</span>
                        </li>
                    </ul>
                </div>

                <div>
                    <p>
                    Продумана каждая деталь: просторная гостиная, совмещенная со спальней, полноценная кухонная зона с обеденным столом и санузел.
                    </p>
                </div>

            </div>

        </div>
    </>
  )
}

export default FurnitureProductInfo