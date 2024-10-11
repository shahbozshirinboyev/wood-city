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
        image: "/furniture/doors/2.jpg",
        title: "Дверь под старину Древняя",
        price: "147",
        material: "Массив сосны",
        availability: "Под заказ",
        size: "2200-850-45",
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
    name: "Люстры - Светильники",
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
    name: "Столы - Стулья",
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
    name: "Эпоксидные Столы",
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
    name: "Декоративные Балки",
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
    name: "Шкафы и Кухни",
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
    name: "Kомоды",
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
        image1: "/houses/buran_plus/buran_1.jpg",
        image2: "/houses/buran_plus/buran_2.jpg",
        image3: "/houses/buran_plus/buran_3.jpg",
        image4: "/houses/buran_plus/buran_4.jpg",
        plan2d: "/houses/buran_plus/plan2d_1.jpg",
        title: "«Норвегия» 40",
        price: "154",
        project: "Дом",
        square: "35",
        module: "2",
        size: "2000-800-40",
        comment: "Уникальный проект с новаторским подходом к планировке, в котором каждый элемент был тщательно продуман, чтобы обеспечить не только эстетическое наслаждение, но и максимальный комфорт для жизни. Включает в себя: просторный зал, полноценная кухонная зона с обеденным столом, санузел, банная зона."
      },
      {
        id: uuidv4(),
        image1: "/houses/buran_plus/buran_11.jpg",
        image2: "/houses/buran_plus/buran_22.jpg",
        image3: "/houses/buran_plus/buran_33.jpg",
        image4: "/houses/buran_plus/buran_44.jpg",
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
