import { NavLink } from "react-router-dom";

function ContactUs() {
  return (
    <section className="container mb-[25px] text-greener">
      <div className="">
        <p className="font-bold text-[32px] text-center  my-[25px]">Контакты</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="border border-lighter rounded-[10px] p-3 lg:p-6">
            <i className="bi bi-telephone-forward-fill text-[22px] border border-lighter p-2 rounded-lg w-[45px] h-[45px] flex justify-center items-center text-forestgreen"></i>
            <p className="mt-[15px] text-[16px] lg:text-[20px] font-semibold">
              Телефонный звонок
            </p>
            <span className="text-[14px] lg:text-[16px] block mt-1">
              +998 77 008 65 63
            </span>
            <button className="border border-lighter p-1 rounded-md mt-2 w-[150px] hover:bg-greener font-medium hover:text-lighter transition-all duration-300 hover:border-forestgreen">
              <NavLink to="tel:+998770086563" className="block w-full h-full">
                Позвонить
              </NavLink>
            </button>
          </div>

          <div className="border border-lighter rounded-[10px] p-3 lg:p-6">
            <i className="bi bi-telegram text-[22px] border border-lighter p-2 rounded-lg w-[45px] h-[45px] flex justify-center items-center text-sky-500"></i>
            <p className="mt-[15px] text-[16px] lg:text-[20px] font-semibold">
              Чат для поддержки
            </p>
            <span className="text-[14px] lg:text-[16px] block mt-1">
              t.me/wood_city_uz
            </span>
            <button className="border border-lighter p-1 rounded-md mt-2 w-[150px] hover:bg-sky-500 font-medium hover:text-lighter transition-all duration-300 hover:border-sky-500">
              <NavLink
                to="https://t.me/wood_city_uz"
                className="block w-full h-full"
              >
                Телеграм
              </NavLink>
            </button>
          </div>

          <div className="col-span-2 border border-lighter p-3 lg:p-6 rounded-[10px]">
            <i className="bi bi-geo-alt-fill text-[22px] border border-lighter p-2 rounded-lg w-[45px] h-[45px] flex justify-center items-center text-red-500"></i>
            <p className="mt-[15px] text-[20px] font-semibold">Посетите нас</p>
            <span className="text-[14px] lg:text-[16px] block mt-1">
              Посетите наши офисы
            </span>
            <p>
              <span className="font-semibold">Адрес: </span>г. Чирчик, ул. Амира
              Темура, 68А.
            </p>
          </div>
        </div>

        <div className="border border-lighter rounded-[10px] h-[300px] md:h-full">
          <iframe
            src="https://yandex.uz/map-widget/v1/?ll=69.561178%2C41.456412&mode=search&sll=69.566018%2C41.458024&text=41.458024%2C69.566018&z=16.47"
            allowFullScreen
            className="relative w-full h-full rounded-[10px]"
          ></iframe>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 my-[25px]">
        <div>
          <div className="flex items-center">
            <span className="text-[60px] font-bold pr-4 text-oranger opacity-80">
              6
            </span>
            <span className="text-[25px]">
              {" "}
              простых шагов, которые отделяют вас от дома мечты.
            </span>
          </div>
        </div>

        <div className="hidden md:flex justify-end items-center">
          <button
            onClick={() => document.getElementById("LeaveRequest").showModal()}
            className="flex justify-end items-end rounded-lg p-2 text-greener hover:text-lighter bg-lighter hover:bg-greener border-0 transition-all duration-300"
          >
            Оставить заявку
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-lighter rounded-lg p-5">
          <div className="grid grid-cols-2 items-center">
            <span className="text-start font-semibold text-[20px]">
              Знакомство
            </span>
            <span className="text-end font-bold text-[25px] opacity-50 text-oranger">
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

        <div className="bg-lighter rounded-lg p-5">
          <div className="grid grid-cols-2 items-center">
            <span className="text-start font-semibold text-[20px]">
              Презентация
            </span>
            <span className="text-end font-bold text-[25px] opacity-50 text-oranger">
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

        <div className="bg-lighter rounded-lg p-5">
          <div className="grid grid-cols-2 items-center">
            <span className="text-start font-semibold text-[20px]">
              Договор и оплата
            </span>
            <span className="text-end font-bold text-[25px] opacity-50 text-oranger">
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

        <div className="bg-lighter rounded-lg p-5">
          <div className="grid grid-cols-2 items-center">
            <span className="text-start font-semibold text-[20px]">
              Изготовление
            </span>
            <span className="text-end font-bold text-[25px] opacity-50 text-oranger">
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

        <div className="bg-lighter rounded-lg p-5">
          <div className="grid grid-cols-2 items-center">
            <span className="text-start font-semibold text-[20px]">
              Доставка
            </span>
            <span className="text-end font-bold text-[25px] opacity-50 text-oranger">
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

        <div className="bg-lighter rounded-lg p-5">
          <div className="grid grid-cols-2 items-center">
            <span className="text-start font-semibold text-[20px]">Монтаж</span>
            <span className="text-end font-bold text-[25px] opacity-50 text-oranger">
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

        <div className="collapse collapse-plus bg-lighter mb-[15px]">
          <input type="checkbox" name="my-accordion-3" />
          <div className="collapse-title text-xl font-semibold">
            Сезонность, энергоэффективность, отопление
          </div>
          <div className="collapse-content">
            <p className="font-bold mb-2">
              Подходит ли такой дом для круглогодичного проживания, тепло ли в
              доме?
            </p>
            <ul className="list-disc">
              <li className="ml-7 mb-[15px]">
                Дом подходит для круглогодичного проживания. Стены с
                высокоэффективным утеплителем и герметичные ПВХ-окна со
                стеклопакетами хорошо сохраняют тепло даже в сильные морозы.
                Наши дома можно размещать во всех климатических зонах, от
                крайнего Севера до Южных районов. Даже полярники в Арктике живут
                в аналогичных домах, построенных по технологии модульного дома.
              </li>
            </ul>
            <p className="font-bold mb-2">Как решается отопление модулей?</p>
            <ul className="list-disc">
              <li className="ml-7 mb-[15px]">
                Стандартная комплектация подразумевает отопление электрическими
                конвекторами с автоматической терморегуляцией. За счёт низкой
                теплопроводности утеплителя, расходы на отопление получаются
                небольшие.
              </li>
            </ul>
            <p className="font-bold mb-2">
              В описании проекта указана толщина утеплителя — 100 мм. Крыша и
              пол утеплены так же?
            </p>
            <ul className="list-disc">
              <li className="ml-7 mb-[15px]">
                Нет, дом утеплён по всему периметру одинаково. А потолок и пол
                имеют толщину — 150 мм.
              </li>
            </ul>
          </div>
        </div>

        <div className="collapse collapse-plus bg-lighter mb-[15px]">
          <input type="checkbox" name="my-accordion-3" />
          <div className="collapse-title text-xl font-semibold">
            Фундамент и доставка
          </div>

          <div className="collapse-content">
            <p className="font-bold mb-2">
              Есть ли рекомендованная конфигурация фундамента?
            </p>
            <ul className="list-disc">
              <li className="ml-7 mb-[15px]">
                Конечно, для установки дома достаточно выставленных по уровню
                фундаментных блоков или сваи.
              </li>
            </ul>
            <p className="font-bold mb-2">Какой нужен фундамент?</p>
            <ul className="list-disc">
              <li className="ml-7 mb-[15px]">
                По умолчанию для установки дома достаточно выставленных по
                уровню фундаментных блоков или свайный фундамент.
              </li>
            </ul>
            <p className="font-bold mb-2">Фундамент делает заказчик?</p>
            <ul className="list-disc">
              <li className="ml-7 mb-[15px]">
                По умолчанию для установки дома достаточно выставленных по
                уровню фундаментных блоков или свайный фундамент. Также заказчик
                может заказать установку свайного фундамента у наших
                рекомендованных подрядчиков.
              </li>
            </ul>
          </div>
        </div>

        <div className="collapse collapse-plus bg-lighter mb-[15px]">
          <input type="checkbox" name="my-accordion-3" />
          <div className="collapse-title text-xl font-semibold">
            Общие вопросы, оплата, договор и сроки
          </div>
          <div className="collapse-content">
            <p className="font-bold mb-2">Какие условия оплаты?</p>
            <ul className="list-disc">
              <li className="ml-7 mb-[15px]">
                70% оплата в момент подписания договора, 30% по готовности дома
                на заводе, перед перевозкой и монтажем.
              </li>
            </ul>
            <p className="font-bold mb-2">
              Если ли возможность посетить место производства?
            </p>
            <ul className="list-disc">
              <li className="ml-7 mb-[15px]">
                Да, необходимо заранее договориться с менеджером на просмотр
                производства.
              </li>
            </ul>
            <p className="font-bold mb-2">
              Каковы гарантии изготовителя на дома от «DP-module»?
            </p>
            <ul className="list-disc">
              <li className="ml-7 mb-[15px]">
                Мы предоставляем гарантию 5 лет на силовой каркас и 1 год на
                отделку и прочие элементы.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
