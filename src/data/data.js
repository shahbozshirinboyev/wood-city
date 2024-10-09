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
        image: "./furniture/1.jpg",
        title: "1-eshik",
        price: "100",
        date: "29392838",
      },
      {
        id: uuidv4(),
        image: "./furniture/2.jpg",
        title: "2-eshik",
        price: "100",
        date: "29392838",
      },
    ],
  },

  {
    id: 2,
    name: "Диваны - Кровати",
    counts: [
      {
        id: uuidv4(),
        image: "./furniture/3.jpg",
        title: "1-Диваны",
        price: "100",
        date: "29392838",
      },
      {
        id: uuidv4(),
        image: "./furniture/4.jpg",
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
        image: "./furniture/5.jpg",
        title: "1-Светильники",
        price: "100",
        date: "29392838",
      },
      {
        id: uuidv4(),
        image: "./furniture/6.jpg",
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
        image: "./furniture/7.jpg",
        title: "1-Стулья",
        price: "100",
        date: "29392838",
      },
      {
        id: uuidv4(),
        image: "./furniture/8.jpg",
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
        image: "./furniture/9.jpg",
        title: "1-Эпоксидные",
        price: "100",
        date: "29392838",
      },
      {
        id: uuidv4(),
        image: "./furniture/10.jpg",
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
        image: "./furniture/11.jpg",
        title: "1-Декоративные",
        price: "100",
        date: "29392838",
      },
      {
        id: uuidv4(),
        image: "./furniture/12.jpg",
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
        image: "./furniture/13.jpg",
        title: "1-Кухни",
        price: "100",
        date: "29392838",
      },
      {
        id: uuidv4(),
        image: "./furniture/14.jpg",
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
        image: "./furniture/15.jpg",
        title: "1-Комоды",
        price: "100",
        date: "29392838",
      },
      {
        id: uuidv4(),
        image: "./furniture/16.jpg",
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
        image: "./furniture/1.jpg",
        title: "1-eshik",
        price: "100",
        date: "29392838",
      },
      {
        id: uuidv4(),
        image: "./furniture/2.jpg",
        title: "2-eshik",
        price: "100",
        date: "29392838",
      },
    ],
  },

  {
    id: 2,
    name: "Баня",
    counts: [
      {
        id: uuidv4(),
        image: "./furniture/3.jpg",
        title: "1-Диваны",
        price: "100",
        date: "29392838",
      },
      {
        id: uuidv4(),
        image: "./furniture/4.jpg",
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
        image: "./furniture/5.jpg",
        title: "1-Светильники",
        price: "100",
        date: "29392838",
      },
      {
        id: uuidv4(),
        image: "./furniture/6.jpg",
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
        image: "./furniture/7.jpg",
        title: "1-Стулья",
        price: "100",
        date: "29392838",
      },
      {
        id: uuidv4(),
        image: "./furniture/8.jpg",
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
        image: "./furniture/9.jpg",
        title: "1-Эпоксидные",
        price: "100",
        date: "29392838",
      },
      {
        id: uuidv4(),
        image: "./furniture/10.jpg",
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
        image: "./furniture/11.jpg",
        title: "1-Декоративные",
        price: "100",
        date: "29392838",
      },
      {
        id: uuidv4(),
        image: "./furniture/12.jpg",
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
        image: "./furniture/13.jpg",
        title: "1-Кухни",
        price: "100",
        date: "29392838",
      },
      {
        id: uuidv4(),
        image: "./furniture/14.jpg",
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
        image: "./furniture/15.jpg",
        title: "1-Комоды",
        price: "100",
        date: "29392838",
      },
      {
        id: uuidv4(),
        image: "./furniture/16.jpg",
        title: "2-Комоды",
        price: "100",
        date: "29392838",
      },
    ],
  },
];
