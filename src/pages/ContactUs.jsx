function ContactUs() {
  return (
    <section className="container mb-[25px] text-[#160A06]">
      <div className="">
        <p className="font-bold text-[32px] text-start  my-[25px]">Контакты</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="border rounded-[10px] p-6">
            <i className="bi bi-telephone-forward-fill text-[22px] border p-2 rounded-lg w-[45px] h-[45px] flex justify-center items-center text-forestgreen"></i>
            <p className="mt-[15px] text-[20px] font-semibold">Phone Call</p>
            <span className="text-[14px] lg:text-[16px] block mt-1">
              +998 94 005 78 56
            </span>
            <button className="border p-1 rounded-md mt-2 w-[150px] hover:bg-forestgreen font-medium hover:text-white transition-all duration-300 hover:border-forestgreen">
              Call Phone
            </button>
          </div>

          <div className="border rounded-[10px] p-6">
            <i className="bi bi-telegram text-[22px] border p-2 rounded-lg w-[45px] h-[45px] flex justify-center items-center text-sky-500"></i>
            <p className="mt-[15px] text-[20px] font-semibold">
              Chat to Support
            </p>
            <span className="text-[14px] lg:text-[16px] block mt-1">
              t.me/wood_city
            </span>
            <button className="border p-1 rounded-md mt-2 w-[150px] hover:bg-sky-500 font-medium hover:text-white transition-all duration-300 hover:border-sky-500">
              Open Telegram
            </button>
          </div>

          <div className="col-span-2 border p-6 rounded-[10px]">
            <i className="bi bi-geo-alt-fill text-[22px] border p-2 rounded-lg w-[45px] h-[45px] flex justify-center items-center text-red-500"></i>
            <p className="mt-[15px] text-[20px] font-semibold">Visit Us</p>
            <span className="text-[14px] lg:text-[16px] block mt-1">
              Visit our offices
            </span>
            <p>
              <span className="italic font-semibold">Address:</span> Uzbekistan,
              Tashkent vil. Chirchiq shahar 10-mavze, Wood City MCHJ
            </p>
          </div>
        </div>

        <div className="border rounded-[10px]">
          <iframe
            src="https://yandex.uz/map-widget/v1/?ll=69.281712%2C41.320213&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgoxNTQzMTQxMjAzEktPyrt6YmVraXN0b24sIFRvc2hrZW50LCBZdW51c29ib2QgeW_Ku25hbGlzaGksIEFiZHVsbGEgUW9kaXJpeSBtZXRybyBiZWthdGkiCg08kIpCFeZHJUI%2C&z=16.04"
            allowFullScreen
            className="relative w-full h-full rounded-[10px]"
          ></iframe>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 my-[25px]">
        <div>
          <div className="flex items-center">
            <span className="text-[60px] font-bold pr-4 text-[#160A06]">6</span>
            <span className="text-[25px]">
              {" "}
              простых шагов, которые отделяют вас от дома мечты.
            </span>
          </div>
        </div>

        <div className="hidden md:flex justify-end items-center">
          <button className="border flex justify-end items-end rounded-lg p-2 hover:bg-beige hover:border-beige transition-all duration-300">
            Оставить заявку
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-base-200 rounded-lg p-5">
          <div className="grid grid-cols-2 items-center">
            <span className="text-start font-semibold text-[20px]">
              Знакомство
            </span>
            <span className="text-end font-bold text-[25px] opacity-50 text-lightwood">
              01
            </span>
          </div>
          <div className="py-4">
            <p>
              Нам поступает ваш звонок. Вы получаете бесплатную консультацию и
              ответы на интересующие вопросы.
            </p>
          </div>
        </div>

        <div className="bg-base-200 rounded-lg p-5">
          <div className="grid grid-cols-2 items-center">
            <span className="text-start font-semibold text-[20px]">
              Презентация
            </span>
            <span className="text-end font-bold text-[25px] opacity-50 text-lightwood">
              02
            </span>
          </div>
          <div className="py-4">
            <p>
              Вы смотрите модели, выбираете понравившийся проект или вносите
              свои пожелания в планировки.
            </p>
          </div>
        </div>

        <div className="bg-base-200 rounded-lg p-5">
          <div className="grid grid-cols-2 items-center">
            <span className="text-start font-semibold text-[20px]">
              Договор и оплата
            </span>
            <span className="text-end font-bold text-[25px] opacity-50 text-lightwood">
              03
            </span>
          </div>
          <div className="py-4">
            <p>
              Мы заключаем договор и согласовываем сроки. Вы оплачиваете 70% от
              стоимости дома.
            </p>
          </div>
        </div>

        <div className="bg-base-200 rounded-lg p-5">
          <div className="grid grid-cols-2 items-center">
            <span className="text-start font-semibold text-[20px]">
              Изготовление
            </span>
            <span className="text-end font-bold text-[25px] opacity-50 text-lightwood">
              04
            </span>
          </div>
          <div className="py-4">
            <p>
              В среднем изготовление модульного дома занимает от 30 дней, если
              готовых домов в наличии нет.
            </p>
          </div>
        </div>

        <div className="bg-base-200 rounded-lg p-5">
          <div className="grid grid-cols-2 items-center">
            <span className="text-start font-semibold text-[20px]">
              Доставка
            </span>
            <span className="text-end font-bold text-[25px] opacity-50 text-lightwood">
              05
            </span>
          </div>
          <div className="py-4">
            <p>
              После полной оплаты мы даем актуальные рекомендации по перевозке и
              дом доставляется к вам.
            </p>
          </div>
        </div>

        <div className="bg-base-200 rounded-lg p-5">
          <div className="grid grid-cols-2 items-center">
            <span className="text-start font-semibold text-[20px]">Монтаж</span>
            <span className="text-end font-bold text-[25px] opacity-50 text-lightwood">
              06
            </span>
          </div>
          <div className="py-4">
            <p>
              Установка дома на участке в назначенную дату за 1−2 дня, после
              чего вы можете сразу заезжать в него.
            </p>
          </div>
        </div>
      </div>

      <div className="">
        <p className="font-bold text-[32px] text-start  my-[25px]">
          Часто задаваемые вопросы
        </p>
      

      <div className="collapse collapse-plus bg-base-200 mb-[15px]">
        <input type="checkbox" name="my-accordion-3" defaultChecked />
        <div className="collapse-title text-xl font-bold">
          Сезонность, энергоэффективность, отопление
        </div>
        <div className="collapse-content">
          <p className="font-bold mb-2">Подходит ли такой дом для круглогодичного проживания, тепло ли в доме?</p>
          <ul className="list-disc">
            <li className="ml-7 mb-[15px]">Дом подходит для круглогодичного проживания. Стены с высокоэффективным утеплителем и герметичные ПВХ-окна со стеклопакетами хорошо сохраняют тепло даже в сильные морозы. Наши дома можно размещать во всех климатических зонах, от крайнего Севера до Южных районов. Даже полярники в Арктике живут в аналогичных домах, построенных по технологии модульного дома.</li>
          </ul>
          <p className="font-bold mb-2">Как решается отопление модулей?</p>
          <ul className="list-disc">
            <li className="ml-7 mb-[15px]">Стандартная комплектация подразумевает отопление электрическими конвекторами с автоматической терморегуляцией. За счёт низкой теплопроводности утеплителя, расходы на отопление получаются небольшие.</li>
          </ul>
          <p className="font-bold mb-2">В описании проекта указана толщина утеплителя — 100 мм. Крыша и пол утеплены так же?</p>
          <ul className="list-disc">
            <li className="ml-7 mb-[15px]">Нет, дом утеплён по всему периметру одинаково. А потолок и пол имеют толщину — 150 мм.</li>
          </ul>
        </div>
      </div>

      <div className="collapse collapse-plus bg-base-200 mb-[15px]">
        <input type="checkbox" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          Материалы и конструкция
        </div>
        <div className="collapse-content">
          <p>Ответ</p>
        </div>
      </div>

      <div className="collapse collapse-plus bg-base-200 ">
        <input type="checkbox" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          Фундамент и доставка
        </div>
        <div className="collapse-content">
          <p>Ответ</p>
        </div>
      </div>
      </div>
    </section>
  );
}

export default ContactUs;
