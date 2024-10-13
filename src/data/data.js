import { v4 as uuidv4 } from 'uuid';

export const NavbarMenu = [
  {
    id: 1,
    title: "Главная",
    link: "/",
  },
  {
    id: 2,
    title: "О нас",
    link: "/aboutus",
  },
  {
    id: 3,
    title: "Деревянные дома",
    link: "/woodenhouses",
  },
  {
    id: 4,
    title: "Деревянная мебель",
    link: "/woodenfurniture",
  },
  {
    id: 5,
    title: "Контакты",
    link: "/contactus",
  },
];

export const woodenFurniture = [
  {
    id: 0,
    name: "Все категории",
  },

  {
    id: 1,
    name: "Двери",
    counts: [
      {
        id: uuidv4(),

        image: "/furniture/doors/1.jpg",
        image1: "/furniture/1.jpg",
        image2: "/furniture/6.jpg",
        image3: "/furniture/7.jpg",

        title: "Дверь под старину Добрыня",
        price: "154",
        material: "Сосна",
        availability: "Под заказ",
        size: "2000-800-40",
        comment: "Заполняя данную форму, я даю свое согласие на обработку моих персональных данных в сети интернет."
      },
      {
        id: uuidv4(),

        image: "/furniture/doors/1.jpg",
        image1: "/furniture/1.jpg",
        image2: "/furniture/6.jpg",
        image3: "/furniture/7.jpg",
        
        title: "Дверь под старину Добрыня",
        price: "154",
        material: "Сосна",
        availability: "Под заказ",
        size: "2000-800-40",
        comment: "Заполняя данную форму, я даю свое согласие на обработку моих персональных данных в сети интернет."
      },
    ],
  },

  {
    id: 2,
    name: "Диваны - Кровати",
    counts: [
      {
        id: uuidv4(),

        image: "/furniture/doors/1.jpg",
        image1: "/furniture/1.jpg",
        image2: "/furniture/6.jpg",
        image3: "/furniture/7.jpg",
        
        title: "Дверь под старину Добрыня",
        price: "154",
        material: "Сосна",
        availability: "Под заказ",
        size: "2000-800-40",
        comment: "Заполняя данную форму, я даю свое согласие на обработку моих персональных данных в сети интернет."
      },
      {
        id: uuidv4(),

        image: "/furniture/doors/1.jpg",
        image1: "/furniture/1.jpg",
        image2: "/furniture/6.jpg",
        image3: "/furniture/7.jpg",
        
        title: "Дверь под старину Добрыня",
        price: "154",
        material: "Сосна",
        availability: "Под заказ",
        size: "2000-800-40",
        comment: "Заполняя данную форму, я даю свое согласие на обработку моих персональных данных в сети интернет."
      },
    ],
  },

  {
    id: 3,
    name: "Люстры - Светильники",
    counts: [
      {
        id: uuidv4(),

        image: "/furniture/doors/1.jpg",
        image1: "/furniture/1.jpg",
        image2: "/furniture/6.jpg",
        image3: "/furniture/7.jpg",
        
        title: "Дверь под старину Добрыня",
        price: "154",
        material: "Сосна",
        availability: "Под заказ",
        size: "2000-800-40",
        comment: "Заполняя данную форму, я даю свое согласие на обработку моих персональных данных в сети интернет."
      },
      {
        id: uuidv4(),

        image: "/furniture/doors/1.jpg",
        image1: "/furniture/1.jpg",
        image2: "/furniture/6.jpg",
        image3: "/furniture/7.jpg",
        
        title: "Дверь под старину Добрыня",
        price: "154",
        material: "Сосна",
        availability: "Под заказ",
        size: "2000-800-40",
        comment: "Заполняя данную форму, я даю свое согласие на обработку моих персональных данных в сети интернет."
      },
    ],
  },

  {
    id: 4,
    name: "Столы - Стулья",
    counts: [
      {
        id: uuidv4(),

        image: "/furniture/tables_chairs/dining0.jpg",
        image1: "/furniture/tables_chairs/dining1.jpg",
        image2: "/furniture/tables_chairs/dining2.jpg",
        image3: "/furniture/tables_chairs/dining3.jpg",
        
        title: "Стол Обеденный",
        price: "от 7 500 000 сум",
        
        availability: "Под заказ",
        material: "Сосна",
        size: "200x90 см",
        comment: "300x1000 см = цена от 12 000 000 сум. Ручная работа, состаренное дерево. Возможно изготовление любых размеров."
      },
      {
        id: uuidv4(),

        image: "/furniture/tables_chairs/n2dining0.jpg",
        image1: "/no_images.jpg",
        image2: "/no_images.jpg",
        image3: "/no_images.jpg",
        
        title: "Стол Обеденный N2",
        price: "от 6 700 000 сум",

        availability: "Под заказ",
        material: "Сосна",
        size: "200x80 см",
        comment: "Ручная работа, состаренное дерево. Возможно изготовление любых размеров."
      },
      {
        id: uuidv4(),

        image: "/furniture/tables_chairs/sailor0.jpg",
        image1: "/furniture/tables_chairs/sailor1.jpg",
        image2: "/no_images.jpg",
        image3: "/no_images.jpg",
        
        title: "Стол Моряк",
        price: "от 4 800 000 сум",

        availability: "Под заказ",
        material: "Сосна",
        size: "120x80 см",
        comment: "Ручная работа, состаренное дерево. Возможно изготовление любых размеров."
      },
      {
        id: uuidv4(),

        image: "/furniture/tables_chairs/conversation0.jpg",
        image1: "/furniture/tables_chairs/conversation1.jpg",
        image2: "/no_images.jpg",
        image3: "/no_images.jpg",
        
        title: "Стол Беседа",
        price: "от 3 200 000 сум",

        availability: "Под заказ",
        material: "Сосна",
        size: "120x80 см",
        comment: "Ручная работа, состаренное дерево. Возможно изготовление любых размеров."
      },
      {
        id: uuidv4(),

        image: "/furniture/tables_chairs/massive0.jpg",
        image1: "/furniture/tables_chairs/massive1.jpg",
        image2: "/furniture/tables_chairs/massive2.jpg",
        image3: "/no_images.jpg",
        
        title: "Стол Массивный",
        price: "от 6 300 000 сум",

        availability: "Под заказ",
        material: "Сосна",
        size: "200x90 см",
        comment: "Ручная работа, состаренное дерево. Возможно изготовление любых размеров."
      },
      {
        id: uuidv4(),

        image: "/furniture/tables_chairs/lord0.jpg",
        image1: "/furniture/tables_chairs/lord1.jpg",
        image2: "/no_images.jpg",
        image3: "/no_images.jpg",
        
        title: "Стол Лорд",
        price: "от 12 000 000 сум",

        availability: "Под заказ",
        material: "Сосна",
        size: "300x100 см",
        comment: "Ручная работа, состаренное дерево. Возможно изготовление любых размеров."
      },
      {
        id: uuidv4(),

        image: "/furniture/tables_chairs/snaffle0.jpg",
        image1: "/no_images.jpg",
        image2: "/no_images.jpg",
        image3: "/no_images.jpg",
        
        title: "Стол Трензель",
        price: "от 7 500 000 сум",

        availability: "Под заказ",
        material: "Сосна",
        size: "200x90 см",
        comment: "Ручная работа, состаренное дерево. Возможно изготовление любых размеров."
      },
      {
        id: uuidv4(),

        image: "/furniture/tables_chairs/compound0.jpg",
        image1: "/no_images.jpg",
        image2: "/no_images.jpg",
        image3: "/no_images.jpg",
        
        title: "Стол Kомпонион",
        price: "от 13 000 000 сум за комплект",

        availability: "Под заказ",
        material: "Сосна",
        size: "120x80 см",
        comment: "Ручная работа, состаренное дерево. Возможно изготовление любых размеров."
      },
    ],
  },

  {
    id: 5,
    name: "Эпоксидные Столы",
    counts: [
      {
        id: uuidv4(),

        image: "/furniture/epoxy_table/vintage0.jpg",
        image1: "/furniture/epoxy_table/vintage1.jpg",
        image2: "/no_images.jpg",
        image3: "/no_images.jpg",
        
        title: "Эпоксидный стол Винтаж",
        price: "от 16 500 000 сум",
        
        availability: "Под заказ",
        material: "Сосна",
        size: "200x90 см",
        comment: "Ручная работа, состаренное дерево. Возможно изготовление любых размеров."
      },
      {
        id: uuidv4(),

        image: "/furniture/epoxy_table/river0.jpg",
        image1: "/furniture/epoxy_table/river1.jpg",
        image2: "/furniture/epoxy_table/river2.jpg",
        image3: "/no_images.jpg",
        
        title: "Эпоксидный стол Река",
        price: "от 19 000 000 сум",
        
        availability: "Под заказ",
        material: "Сосна",
        size: "250x95 см",
        comment: "Ручная работа, состаренное дерево. Возможно изготовление любых размеров."
      },
      {
        id: uuidv4(),

        image: "/furniture/epoxy_table/oval0.jpg",
        image1: "/furniture/epoxy_table/oval1.jpg",
        image2: "/no_images.jpg",
        image3: "/no_images.jpg",
        
        title: "Эпоксидный стол Овал",
        price: "от 12 800 000 сум",
        
        availability: "Под заказ",
        material: "Сосна",
        size: "140x85 см",
        comment: "Ручная работа, состаренное дерево. Возможно изготовление любых размеров."
      },
      {
        id: uuidv4(),

        image: "/furniture/epoxy_table/loft0.jpg",
        image1: "/no_images.jpg",
        image2: "/no_images.jpg",
        image3: "/no_images.jpg",
        
        title: "Эпоксидный стол Лофт",
        price: "от 12 800 000 сум",
        
        availability: "Под заказ",
        material: "Сосна",
        size: "140x90 см",
        comment: "Ручная работа, состаренное дерево. Возможно изготовление любых размеров."
      },
    ],
  },

  {
    id: 6,
    name: "Декоративные Балки",
    counts: [
      {
        id: uuidv4(),

        image: "/furniture/doors/1.jpg",
        image1: "/furniture/1.jpg",
        image2: "/furniture/6.jpg",
        image3: "/furniture/7.jpg",
        
        title: "Дверь под старину Добрыня",
        price: "154",
        material: "Сосна",
        availability: "Под заказ",
        size: "2000-800-40",
        comment: "Заполняя данную форму, я даю свое согласие на обработку моих персональных данных в сети интернет."
      },
      {
        id: uuidv4(),

        image: "/furniture/doors/1.jpg",
        image1: "/furniture/1.jpg",
        image2: "/furniture/6.jpg",
        image3: "/furniture/7.jpg",
        
        title: "Дверь под старину Добрыня",
        price: "154",
        material: "Сосна",
        availability: "Под заказ",
        size: "2000-800-40",
        comment: "Заполняя данную форму, я даю свое согласие на обработку моих персональных данных в сети интернет."
      },
    ],
  },

  {
    id: 7,
    name: "Шкафы и Кухни",
    counts: [
      {
        id: uuidv4(),

        image: "/furniture/cabinets_kitchens/esabel0.jpg",
        image1: "/furniture/cabinets_kitchens/esabel1.jpg",
        image2: "/furniture/cabinets_kitchens/esabel2.jpg",
        image3: "/furniture/cabinets_kitchens/esabel3.jpg",
        
        title: "Кухня Эсабель",
        price: "от 6 500 000 сум пг/м",

        availability: "Под заказ",
        material: "Сосна",
        size: "-",
        comment: "Ручная работа, состаренное дерево. Возможно изготовление любых размеров."
      },
      {
        id: uuidv4(),

        image: "/furniture/cabinets_kitchens/space0.jpg",
        image1: "/no_images.jpg",
        image2: "/no_images.jpg",
        image3: "/no_images.jpg",
        
        title: "Кухня Простор",
        price: "от 6 300 000 сум пг/м",

        availability: "Под заказ",
        material: "Сосна",
        size: "-",
        comment: "Ручная работа, состаренное дерево. Возможно изготовление любых размеров."
      },
      {
        id: uuidv4(),

        image: "/furniture/cabinets_kitchens/lord0.jpg",
        image1: "/no_images.jpg",
        image2: "/no_images.jpg",
        image3: "/no_images.jpg",
        
        title: "Кухня Лорд",
        price: "от 7 800 000 сум пг/м",

        availability: "Под заказ",
        material: "Сосна",
        size: "-",
        comment: "Ручная работа, состаренное дерево. Возможно изготовление любых размеров."
      },
      {
        id: uuidv4(),

        image: "/furniture/cabinets_kitchens/arabica0.jpg",
        image1: "/no_images.jpg",
        image2: "/no_images.jpg",
        image3: "/no_images.jpg",
        
        title: "Кухня Арабика",
        price: "от 6 700 000 сум пг/м",

        availability: "Под заказ",
        material: "Сосна",
        size: "-",
        comment: "Ручная работа, состаренное дерево. Возможно изготовление любых размеров."
      },
      {
        id: uuidv4(),

        image: "/furniture/cabinets_kitchens/catherine0.jpg",
        image1: "/no_images.jpg",
        image2: "/no_images.jpg",
        image3: "/no_images.jpg",
        
        title: "Кухня Екатерина",
        price: "от 7 700 000 сум пг/м",

        availability: "Под заказ",
        material: "Сосна",
        size: "-",
        comment: "Ручная работа, состаренное дерево. Возможно изготовление любых размеров."
      },
      {
        id: uuidv4(),

        image: "/furniture/cabinets_kitchens/taiga0.jpg",
        image1: "/no_images.jpg",
        image2: "/no_images.jpg",
        image3: "/no_images.jpg",
        
        title: "Кухня Тайга",
        price: "от 6 200 000 сум пг/м",

        availability: "Под заказ",
        material: "Сосна",
        size: "-",
        comment: "Ручная работа, состаренное дерево. Возможно изготовление любых размеров."
      },
      {
        id: uuidv4(),

        image: "/furniture/cabinets_kitchens/winecellar0.jpg",
        image1: "/furniture/cabinets_kitchens/winecellar1.jpg",
        image2: "/furniture/cabinets_kitchens/winecellar2.jpg",
        image3: "/furniture/cabinets_kitchens/winecellar3.jpg",
        
        title: "Винный Погреб",
        price: "от 19 300 000 сум",

        availability: "Под заказ",
        material: "Сосна",
        size: "ДxВxГ: 220x240x45 см",
        comment: "Ручная работа, состаренное дерево. Возможно изготовление любых размеров."
      },
      {
        id: uuidv4(),

        image: "/furniture/cabinets_kitchens/barrelcellar0.jpg",
        image1: "/no_images.jpg",
        image2: "/no_images.jpg",
        image3: "/no_images.jpg",
        
        title: "Бочка Погреб",
        price: "от 7 200 000 сум",

        availability: "Под заказ",
        material: "Сосна",
        size: "Диаметр: 80 см, Высота: 90 см",
        comment: "Ручная работа, состаренное дерево. Возможно изготовление любых размеров."
      },
      {
        id: uuidv4(),

        image: "/furniture/cabinets_kitchens/prince0.jpg",
        image1: "/no_images.jpg",
        image2: "/no_images.jpg",
        image3: "/no_images.jpg",
        
        title: "Буфет Князь",
        price: "от 19 800 000 сум",

        availability: "Под заказ",
        material: "Сосна",
        size: "ДxВxГ: 240x220x50 см",
        comment: "Ручная работа, состаренное дерево. Возможно изготовление любых размеров."
      },
      {
        id: uuidv4(),

        image: "/furniture/cabinets_kitchens/hottabych0.jpg",
        image1: "/no_images.jpg",
        image2: "/no_images.jpg",
        image3: "/no_images.jpg",
        
        title: "Буфет Хатабич",
        price: "от 13 700 000 сум",

        availability: "Под заказ",
        material: "Сосна",
        size: "ДxВxГ: 120x220x50 см",
        comment: "Ручная работа, состаренное дерево. Возможно изготовление любых размеров."
      },
      {
        id: uuidv4(),

        image: "/furniture/cabinets_kitchens/caesar0.jpg",
        image1: "/furniture/cabinets_kitchens/caesar1.jpg",
        image2: "/no_images.jpg",
        image3: "/no_images.jpg",
        
        title: "Буфет Цезарь",
        price: "от 14 000 000 сум",

        availability: "Под заказ",
        material: "Сосна",
        size: "ДxВxГ: 120x220x50 см",
        comment: "Ручная работа, состаренное дерево. Возможно изготовление любых размеров."
      },
      {
        id: uuidv4(),

        image: "/furniture/cabinets_kitchens/special0.jpg",
        image1: "/furniture/cabinets_kitchens/special1.jpg",
        image2: "/furniture/cabinets_kitchens/special2.jpg",
        image3: "/no_images.jpg",
        
        title: "Буфет Особый",
        price: "от 17 500 000 сум",

        availability: "Под заказ",
        material: "Сосна",
        size: "ДxВxГ: 190x220x50 см",
        comment: "Ручная работа, состаренное дерево. Возможно изготовление любых размеров."
      },
      {
        id: uuidv4(),

        image: "/furniture/cabinets_kitchens/provence0.jpg",
        image1: "/furniture/cabinets_kitchens/provence1.jpg",
        image2: "/no_images.jpg",
        image3: "/no_images.jpg",
        
        title: "Буфет Прованс",
        price: "от 17 500 000 сум",

        availability: "Под заказ",
        material: "Сосна",
        size: "ДxВxГ: 150x220x55 см",
        comment: "Ручная работа, состаренное дерево. Возможно изготовление любых размеров."
      },
      {
        id: uuidv4(),

        image: "/furniture/cabinets_kitchens/furniturehallway0.jpg",
        image1: "/furniture/cabinets_kitchens/furniturehallway1.jpg",
        image2: "/furniture/cabinets_kitchens/furniturehallway2.jpg",
        image3: "/furniture/cabinets_kitchens/furniturehallway3.jpg",
        
        title: "Мебель для Прихожей",
        price: "Договорная",

        availability: "Под заказ",
        material: "Сосна",
        size: "Возможно изготовление любых размеров.",
        comment: "Ручная работа, состаренное дерево."
      },
      {
        id: uuidv4(),

        image: "/furniture/cabinets_kitchens/hangertantny0.jpg",
        image1: "/no_images.jpg",
        image2: "/no_images.jpg",
        image3: "/no_images.jpg",
        
        title: "Обувьница вешалка Знатный",
        price: "от 6 500 000 сум",

        availability: "Под заказ",
        material: "Сосна",
        size: "ДxВ: 120x220 см",
        comment: "Ручная работа, состаренное дерево."
      },
      {
        id: uuidv4(),

        image: "/furniture/cabinets_kitchens/guestwardrobe0.jpg",
        image1: "/no_images.jpg",
        image2: "/no_images.jpg",
        image3: "/no_images.jpg",
        
        title: "Гардероб Гость",
        price: "от 8 700 000 сум",

        availability: "Под заказ",
        material: "Сосна",
        size: "ДxВxГ: 130x220x50 см",
        comment: "Ручная работа, состаренное дерево."
      },
      {
        id: uuidv4(),

        image: "/furniture/cabinets_kitchens/hangercomfort0.jpg",
        image1: "/no_images.jpg",
        image2: "/no_images.jpg",
        image3: "/no_images.jpg",
        
        title: "Обувница вешалка Уют",
        price: "от 7 200 000 сум",

        availability: "Под заказ",
        material: "Сосна",
        size: "ДxВxГ: 130x220x45 см",
        comment: "Ручная работа, состаренное дерево."
      },
      {
        id: uuidv4(),

        image: "/furniture/cabinets_kitchens/hangerhunter0.jpg",
        image1: "/no_images.jpg",
        image2: "/no_images.jpg",
        image3: "/no_images.jpg",
        
        title: "Обувница вешалка Охотник",
        price: "от 7 100 000 сум",

        availability: "Под заказ",
        material: "Сосна",
        size: "ДxВxГ: 140x220x45 см",
        comment: "Ручная работа, состаренное дерево."
      },
    ],
  },

  {
    id: 8,
    name: "Kомоды",
    counts: [
      {
        id: uuidv4(),

        image: "/furniture/doors/1.jpg",
        image1: "/furniture/1.jpg",
        image2: "/furniture/6.jpg",
        image3: "/furniture/7.jpg",
        
        title: "Дверь под старину Добрыня",
        price: "154",
        material: "Сосна",
        availability: "Под заказ",
        size: "2000-800-40",
        comment: "Заполняя данную форму, я даю свое согласие на обработку моих персональных данных в сети интернет."
      },
      {
        id: uuidv4(),

        image: "/furniture/doors/1.jpg",
        image1: "/furniture/1.jpg",
        image2: "/furniture/6.jpg",
        image3: "/furniture/7.jpg",
        
        title: "Дверь под старину Добрыня",
        price: "154",
        material: "Сосна",
        availability: "Под заказ",
        size: "2000-800-40",
        comment: "Заполняя данную форму, я даю свое согласие на обработку моих персональных данных в сети интернет."
      },
    ],
  },
];

export const woodenHouse = [
  {
    id: 0,
    name: "Все категории",
  },

  {
    id: 1,
    name: "Браун плюс",
    counts: [
      {
        id: uuidv4(),

        image: "/houses/buran_plus/buran_1.jpg",
        image1: "/houses/buran_plus/buran_2.jpg",
        image2: "/houses/buran_plus/buran_3.jpg",
        image3: "/houses/buran_plus/buran_4.jpg",

        plan2d: "/houses/buran_plus/plan2d_1.jpg",

        title: "«Норвегия» 40",
        price: "154",
        
        project: "Дом",
        square: "35",
        size: "2000-800-40",
        comment: "Уникальный проект с новаторским подходом к планировке, в котором каждый элемент был тщательно продуман, чтобы обеспечить не только эстетическое наслаждение, но и максимальный комфорт для жизни. Включает в себя: просторный зал, полноценная кухонная зона с обеденным столом, санузел, банная зона."
      },
      {
        id: uuidv4(),
        image: "/houses/buran_plus/buran_11.jpg",
        image1: "/houses/buran_plus/buran_22.jpg",
        image2: "/houses/buran_plus/buran_33.jpg",
        image3: "/houses/buran_plus/buran_44.jpg",
        plan2d: "/houses/buran_plus/plan2d_2.jpg",
        title: "«Норвегия» 445",
        price: "164",
        project: "Дом",
        square: "65",
        module: "3",
        size: "20300-8500-405",
        comment: "Футуристичный дизайн и эргономика пространства с сохранением максимального функционала. Парное отделение и просторная зона отдыха, а также удобная терраса."
      },
    ],
  },

  {
    id: 2,
    name: "Баня",
    counts: [
      {
        id: uuidv4(),
        image: "/furniture/3.jpg",
        title: "1-Диваны",
        price: "100",
        date: "29392838",
      },
      {
        id: uuidv4(),
        image: "/furniture/4.jpg",
        title: "2-Диваны",
        price: "100",
        date: "29392838",
      },
    ],
  },

  {
    id: 3,
    name: "Домик с баней",
    counts: [
      {
        id: uuidv4(),
        image: "/furniture/5.jpg",
        title: "1-Светильники",
        price: "100",
        date: "29392838",
      },
      {
        id: uuidv4(),
        image: "/furniture/6.jpg",
        title: "2-Светильники",
        price: "100",
        date: "29392838",
      },
    ],
  },

  {
    id: 4,
    name: "Граф",
    counts: [
      {
        id: uuidv4(),
        image: "/furniture/7.jpg",
        title: "1-Стулья",
        price: "100",
        date: "29392838",
      },
      {
        id: uuidv4(),
        image: "/furniture/8.jpg",
        title: "2-Стулья",
        price: "100",
        date: "29392838",
      },
    ],
  },

  {
    id: 5,
    name: "Голд",
    counts: [
      {
        id: uuidv4(),
        image: "/furniture/9.jpg",
        title: "1-Эпоксидные",
        price: "100",
        date: "29392838",
      },
      {
        id: uuidv4(),
        image: "/furniture/10.jpg",
        title: "2-Эпоксидные",
        price: "100",
        date: "29392838",
      },
    ],
  },

  {
    id: 6,
    name: "Форест",
    counts: [
      {
        id: uuidv4(),
        image: "/furniture/11.jpg",
        title: "1-Декоративные",
        price: "100",
        date: "29392838",
      },
      {
        id: uuidv4(),
        image: "/furniture/12.jpg",
        title: "2-Декоративные",
        price: "100",
        date: "29392838",
      },
    ],
  },

  {
    id: 7,
    name: "Браун",
    counts: [
      {
        id: uuidv4(),
        image: "/furniture/13.jpg",
        title: "1-Кухни",
        price: "100",
        date: "29392838",
      },
      {
        id: uuidv4(),
        image: "/furniture/14.jpg",
        title: "2-Кухни",
        price: "100",
        date: "29392838",
      },
    ],
  },

  {
    id: 8,
    name: "Дeрeвянный домик.",
    counts: [
      {
        id: uuidv4(),
        image: "/furniture/15.jpg",
        title: "1-Комоды",
        price: "100",
        date: "29392838",
      },
      {
        id: uuidv4(),
        image: "/furniture/16.jpg",
        title: "2-Комоды",
        price: "100",
        date: "29392838",
      },
    ],
  },
];
