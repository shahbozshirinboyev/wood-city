import { v4 as uuidv4 } from "uuid";

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

export const homeContent = [
  {
    id: 0,
    image: "/home_img/1.jpg",
    description:
      "Мы производим домокомплекты каркасных домов для постоянного проживания и доставляем их по всему СНГ.",
  },
  {
    id: 1,
    image: "/home_img/2.jpg",
    description:
      "Мы производим домокомплекты каркасных домов для постоянного проживания и доставляем их по всему СНГ.",
  },
  {
    id: 2,
    image: "/home_img/3.jpg",
    description: "Строительство деревянных домов по всему Узбекистану и СНГ.",
  },
  {
    id: 3,
    image: "/home_img/4.jpg",
    description: "Строительство деревянных домов по всему Узбекистану и СНГ.",
  },
  {
    id: 4,
    image: "/home_img/5.jpg",
    description:
      "Закажите каркасный дом из сухой строганой доски от завода производителя по отличной цене!",
  },
  {
    id: 5,
    image: "/home_img/6.jpg",
    description:
      "Закажите каркасный дом из сухой строганой доски от завода производителя по отличной цене!",
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

        image: "/furniture/doors/suzdal0.jpg",
        image1: "/furniture/doors/suzdal1.jpg",
        image2: "/no_images.jpg",
        image3: "/no_images.jpg",

        title: "Дверь Суздальская",
        price: "от  2 400 000 сум кв/м",

        availability: "Под заказ",
        material: "Сосна",
        size: "Возможно изготовление любых размеров.",
        comment: "Ручная работа, состаренное дерево.",
      },
      {
        id: uuidv4(),

        image: "/furniture/doors/real0.jpg",
        image1: "/no_images.jpg",
        image2: "/no_images.jpg",
        image3: "/no_images.jpg",

        title: "Дверь Real",
        price: "от  2 200 000 сум кв/м",

        availability: "Под заказ",
        material: "Сосна",
        size: "Возможно изготовление любых размеров.",
        comment: "Ручная работа, состаренное дерево.",
      },
      {
        id: uuidv4(),

        image: "/furniture/doors/oldboard0.jpg",
        image1: "/no_images.jpg",
        image2: "/no_images.jpg",
        image3: "/no_images.jpg",

        title: "Дверь Старая доска",
        price: "от  2 200 000 сум кв/м",

        availability: "Под заказ",
        material: "Сосна",
        size: "Возможно изготовление любых размеров.",
        comment: "Ручная работа, состаренное дерево.",
      },
      {
        id: uuidv4(),

        image: "/furniture/doors/glass0.jpg",
        image1: "/no_images.jpg",
        image2: "/no_images.jpg",
        image3: "/no_images.jpg",

        title: "Дверь Стекло 1",
        price: "от  2 250 000 сум кв/м",

        availability: "Под заказ",
        material: "Сосна",
        size: "Возможно изготовление любых размеров.",
        comment: "Ручная работа, состаренное дерево.",
      },
      {
        id: uuidv4(),

        image: "/furniture/doors/enigma0.jpg",
        image1: "/furniture/doors/enigma1.jpg",
        image2: "/no_images.jpg",
        image3: "/no_images.jpg",

        title: "Дверь двухстворчатый Энигма",
        price: "от  2 200 000 сум кв/м",

        availability: "Под заказ",
        material: "Сосна",
        size: "Возможно изготовление любых размеров.",
        comment: "Ручная работа, состаренное дерево.",
      },
      {
        id: uuidv4(),

        image: "/furniture/doors/paradisglass0.jpg",
        image1: "/furniture/doors/paradisglass1.jpg",
        image2: "/furniture/doors/paradisglass2.jpg",
        image3: "/no_images.jpg",

        title: "Дверь Парадис со стеклом",
        price: "от  2 300 000 сум кв/м",

        availability: "Под заказ",
        material: "Сосна",
        size: "Возможно изготовление любых размеров.",
        comment: "Ручная работа, состаренное дерево.",
      },
      {
        id: uuidv4(),

        image: "/furniture/doors/noble0.jpg",
        image1: "/furniture/doors/noble1.jpg",
        image2: "/no_images.jpg",
        image3: "/no_images.jpg",

        title: "Дверь Знатный",
        price: "от  2 250 000 сум кв/м",

        availability: "Под заказ",
        material: "Сосна",
        size: "Возможно изготовление любых размеров.",
        comment: "Ручная работа, состаренное дерево.",
      },
      {
        id: uuidv4(),

        image: "/furniture/doors/archie0.jpg",
        image1: "/furniture/doors/archie1.jpg",
        image2: "/no_images.jpg",
        image3: "/no_images.jpg",

        title: "Дверь Арчи",
        price: "от  2 350 000 сум кв/м",

        availability: "Под заказ",
        material: "Сосна",
        size: "Возможно изготовление любых размеров.",
        comment: "Ручная работа, состаренное дерево.",
      },
      {
        id: uuidv4(),

        image: "/furniture/doors/everest0.jpg",
        image1: "/no_images.jpg",
        image2: "/no_images.jpg",
        image3: "/no_images.jpg",

        title: "Дверь Эверест",
        price: "от  2 300 000 сум кв/м",

        availability: "Под заказ",
        material: "Сосна",
        size: "Возможно изготовление любых размеров.",
        comment: "Ручная работа, состаренное дерево.",
      },
      {
        id: uuidv4(),

        image: "/furniture/doors/babadoor0.jpg",
        image1: "/no_images.jpg",
        image2: "/no_images.jpg",
        image3: "/no_images.jpg",

        title: "Дверь Баба Яга",
        price: "от  2 500 000 сум кв/м",

        availability: "Под заказ",
        material: "Сосна",
        size: "Возможно изготовление любых размеров.",
        comment: "Ручная работа, состаренное дерево.",
      },
      {
        id: uuidv4(),

        image: "/furniture/doors/paradis2glass0.jpg",
        image1: "/no_images.jpg",
        image2: "/no_images.jpg",
        image3: "/no_images.jpg",

        title: "Дверь Парадис 2 со стеклом",
        price: "от  2 300 000 сум кв/м",

        availability: "Под заказ",
        material: "Сосна",
        size: "Возможно изготовление любых размеров.",
        comment: "Ручная работа, состаренное дерево.",
      },
      {
        id: uuidv4(),

        image: "/furniture/doors/colors0.jpg",
        image1: "/furniture/doors/colors1.jpg",
        image2: "/furniture/doors/colors2.jpg",
        image3: "/furniture/doors/colors3.jpg",

        title: "Дверь Расцветки",
        price: "от  2 200 000 сум кв/м",

        availability: "Под заказ",
        material: "Сосна",
        size: "Возможно изготовление любых размеров.",
        comment: "Ручная работа, состаренное дерево.",
      },
    ],
  },

  {
    id: 2,
    name: "Диваны - Кровати",
    counts: [
      {
        id: uuidv4(),

        image: "/furniture/sofas_beds/lord0.jpg",
        image1: "/furniture/sofas_beds/lord1.jpg",
        image2: "/no_images.jpg",
        image3: "/no_images.jpg",

        title: "Кровать Лорд",
        price: "от 6 200 000 сум",

        availability: "Под заказ",
        material: "",
        size: "матраса 180х200 см",
        comment:
          "Ручная работа, состаренное дерево. Возможно изготовление любых размеров.",
      },
      {
        id: uuidv4(),

        image: "/furniture/sofas_beds/elena0.jpg",
        image1: "/furniture/sofas_beds/elena1.jpg",
        image2: "/furniture/sofas_beds/elena2.jpg",
        image3: "/no_images.jpg",

        title: "Кровать Елена",
        price: "от 5 400 000 сум",

        availability: "Под заказ",
        material: "Сосна",
        size: "матраса 180х200 см",
        comment:
          "Ручная работа, состаренное дерево. Возможно изготовление любых размеров.",
      },
      {
        id: uuidv4(),

        image: "/furniture/sofas_beds/tsarevich0.jpg",
        image1: "/furniture/sofas_beds/tsarevich1.jpg",
        image2: "/furniture/sofas_beds/tsarevich2.jpg",
        image3: "/no_images.jpg",

        title: "Кровать Царевич",
        price: "от 5 600 000 сум",

        availability: "Под заказ",
        material: "Сосна",
        size: "матраса 180х200 см",
        comment:
          "Ручная работа, состаренное дерево. Возможно изготовление любых размеров.",
      },
      {
        id: uuidv4(),

        image: "/furniture/sofas_beds/loft0.jpg",
        image1: "/furniture/sofas_beds/loft1.jpg",
        image2: "/no_images.jpg",
        image3: "/no_images.jpg",

        title: "Кровать Лофт 1",
        price: "от 8 200 000 сум",

        availability: "Под заказ",
        material: "Сосна",
        size: "матраса 180х200 см",
        comment:
          "Ручная работа, состаренное дерево. Возможно изготовление любых размеров.",
      },
      {
        id: uuidv4(),

        image: "/furniture/sofas_beds/loft20.jpg",
        image1: "/no_images.jpg",
        image2: "/no_images.jpg",
        image3: "/no_images.jpg",

        title: "Кровать Лофт 2",
        price: "от 7 800 000 сум",

        availability: "Под заказ",
        material: "Сосна",
        size: "матраса 180х200 см",
        comment:
          "Ручная работа, состаренное дерево. Возможно изготовление любых размеров.",
      },
      {
        id: uuidv4(),

        image: "/furniture/sofas_beds/loft30.jpg",
        image1: "/no_images.jpg",
        image2: "/no_images.jpg",
        image3: "/no_images.jpg",

        title: "Кровать Лофт 3",
        price: "от 7 800 000 сум",

        availability: "Под заказ",
        material: "Сосна",
        size: "матраса 180х200 см",
        comment:
          "Ручная работа, состаренное дерево. Возможно изготовление любых размеров.",
      },
      {
        id: uuidv4(),

        image: "/furniture/sofas_beds/loft40.jpg",
        image1: "/furniture/sofas_beds/loft41.jpg",
        image2: "/no_images.jpg",
        image3: "/no_images.jpg",

        title: "Кровать Лофт 4",
        price: "от 6 500 000 сум",

        availability: "Под заказ",
        material: "Сосна",
        size: "матраса 180х200 см",
        comment:
          "Ручная работа, состаренное дерево. Возможно изготовление любых размеров.",
      },
      {
        id: uuidv4(),

        image: "/furniture/sofas_beds/loft50.jpg",
        image1: "/no_images.jpg",
        image2: "/no_images.jpg",
        image3: "/no_images.jpg",

        title: "Кровать Лофт 5",
        price: "от 7 100 000 сум",

        availability: "Под заказ",
        material: "Сосна",
        size: "матраса 180х200 см",
        comment:
          "Ручная работа, состаренное дерево. Возможно изготовление любых размеров.",
      },
      {
        id: uuidv4(),

        image: "/furniture/sofas_beds/loft60.jpg",
        image1: "/no_images.jpg",
        image2: "/no_images.jpg",
        image3: "/no_images.jpg",

        title: "Кровать Лофт 6",
        price: "от 7 200 000 сум",

        availability: "Под заказ",
        material: "Сосна",
        size: "матраса 180х200 см",
        comment:
          "Ручная работа, состаренное дерево. Возможно изготовление любых размеров.",
      },
      {
        id: uuidv4(),

        image: "/furniture/sofas_beds/loft70.jpg",
        image1: "/no_images.jpg",
        image2: "/no_images.jpg",
        image3: "/no_images.jpg",

        title: "Кровать Лофт 7",
        price: "от 7 400 000 сум",

        availability: "Под заказ",
        material: "Сосна",
        size: "матраса 180х200 см",
        comment:
          "Ручная работа, состаренное дерево. Возможно изготовление любых размеров.",
      },
      {
        id: uuidv4(),

        image: "/furniture/sofas_beds/loft80.jpg",
        image1: "/no_images.jpg",
        image2: "/no_images.jpg",
        image3: "/no_images.jpg",

        title: "Кровать Лофт 8",
        price: "от 7 300 000 сум",

        availability: "Под заказ",
        material: "Сосна",
        size: "матраса 180х200 см",
        comment:
          "Ручная работа, состаренное дерево. Возможно изготовление любых размеров.",
      },
      {
        id: uuidv4(),

        image: "/furniture/sofas_beds/loft90.jpg",
        image1: "/no_images.jpg",
        image2: "/no_images.jpg",
        image3: "/no_images.jpg",

        title: "Кровать Лофт 9",
        price: "от 7 400 000 сум",

        availability: "Под заказ",
        material: "Сосна",
        size: "матраса 180х200 см",
        comment:
          "Ручная работа, состаренное дерево. Возможно изготовление любых размеров.",
      },
      {
        id: uuidv4(),

        image: "/furniture/sofas_beds/loft100.jpg",
        image1: "/no_images.jpg",
        image2: "/no_images.jpg",
        image3: "/no_images.jpg",

        title: "Кровать Лофт 10",
        price: "от 7 300 000 сум",

        availability: "Под заказ",
        material: "Сосна",
        size: "матраса 180х200 см",
        comment:
          "Ручная работа, состаренное дерево. Возможно изготовление любых размеров.",
      },
      {
        id: uuidv4(),

        image: "/furniture/sofas_beds/eduard0.jpg",
        image1: "/no_images.jpg",
        image2: "/no_images.jpg",
        image3: "/no_images.jpg",

        title: "Кровать Эдуард",
        price: "от 7 200 000 сум",

        availability: "Под заказ",
        material: "Сосна",
        size: "матраса 180х200 см",
        comment:
          "Ручная работа, состаренное дерево. Возможно изготовление любых размеров.",
      },
      {
        id: uuidv4(),

        image: "/furniture/sofas_beds/emeliya0.jpg",
        image1: "/no_images.jpg",
        image2: "/no_images.jpg",
        image3: "/no_images.jpg",

        title: "Кровать Эмилия",
        price: "от 8 200 000 сум",

        availability: "Под заказ",
        material: "Сосна",
        size: "матраса 180х200 см, Высота: 170 см",
        comment:
          "Ручная работа, состаренное дерево. Возможно изготовление любых размеров.",
      },
      {
        id: uuidv4(),

        image: "/furniture/sofas_beds/emeliya20.jpg",
        image1: "/no_images.jpg",
        image2: "/no_images.jpg",
        image3: "/no_images.jpg",

        title: "Кровать Эмилия 2",
        price: "от 8 100 000 сум",

        availability: "Под заказ",
        material: "Сосна",
        size: "матраса 180х200 см",
        comment:
          "Ручная работа, состаренное дерево. Возможно изготовление любых размеров.",
      },
      {
        id: uuidv4(),

        image: "/furniture/sofas_beds/sofaelite0.jpg",
        image1: "/no_images.jpg",
        image2: "/no_images.jpg",
        image3: "/no_images.jpg",

        title: "Диван Элит",
        price: "от 9 000 000 сум",

        availability: "Под заказ",
        material: "Сосна",
        size: "Длина: 150 см",
        comment:
          "Ручная работа, состаренное дерево. Возможно изготовление любых размеров.",
      },
      {
        id: uuidv4(),

        image: "/furniture/sofas_beds/santa0.jpg",
        image1: "/no_images.jpg",
        image2: "/no_images.jpg",
        image3: "/no_images.jpg",

        title: "Диван угловой Санта",
        price: "от 11 000 000 сум",

        availability: "Под заказ",
        material: "Сосна",
        size: "150x130 см",
        comment:
          "Ручная работа, состаренное дерево. Возможно изготовление любых размеров.",
      },
      {
        id: uuidv4(),

        image: "/furniture/sofas_beds/vizanti0.jpg",
        image1: "/no_images.jpg",
        image2: "/no_images.jpg",
        image3: "/no_images.jpg",

        title: "Диван угловой Византи",
        price: "от 14 000 000 сум",

        availability: "Под заказ",
        material: "Сосна",
        size: "150x130 см",
        comment:
          "Ручная работа, состаренное дерево. Возможно изготовление любых размеров.",
      },
      {
        id: uuidv4(),

        image: "/furniture/sofas_beds/sofaprince0.jpg",
        image1: "/no_images.jpg",
        image2: "/no_images.jpg",
        image3: "/no_images.jpg",

        title: "Диван угловой князь",
        price: "от 11 800 000 сум",

        availability: "Под заказ",
        material: "Сосна",
        size: "140x140 см",
        comment:
          "Ручная работа, состаренное дерево. Возможно изготовление любых размеров.",
      },
      {
        id: uuidv4(),

        image: "/furniture/sofas_beds/vizanti10.jpg",
        image1: "/no_images.jpg",
        image2: "/no_images.jpg",
        image3: "/no_images.jpg",

        title: "Диван Византи 1",
        price: "от 9 500 000 сум",

        availability: "Под заказ",
        material: "Сосна",
        size: "Длина: 200 см",
        comment:
          "Ручная работа, состаренное дерево. Возможно изготовление любых размеров.",
      },
      {
        id: uuidv4(),

        image: "/furniture/sofas_beds/sofaideal0.jpg",
        image1: "/no_images.jpg",
        image2: "/no_images.jpg",
        image3: "/no_images.jpg",

        title: "Диван угловой Идеал",
        price: "от 14 800 000 сум",

        availability: "Под заказ",
        material: "Сосна",
        size: "170x130 см",
        comment:
          "Ручная работа, состаренное дерево. Возможно изготовление любых размеров.",
      },
      {
        id: uuidv4(),

        image: "/furniture/sofas_beds/hug0.jpg",
        image1: "/no_images.jpg",
        image2: "/no_images.jpg",
        image3: "/no_images.jpg",

        title: "Диван HuG",
        price: "от 9 500 000 сум",

        availability: "Под заказ",
        material: "Сосна",
        size: "Длина: 180 см",
        comment:
          "Ручная работа, состаренное дерево. Возможно изготовление любых размеров.",
      },
      {
        id: uuidv4(),

        image: "/furniture/sofas_beds/viking0.jpg",
        image1: "/no_images.jpg",
        image2: "/no_images.jpg",
        image3: "/no_images.jpg",

        title: "Диван Викинг",
        price: "от 8 700 000 сум",

        availability: "Под заказ",
        material: "Сосна",
        size: "Длина: 140 см",
        comment:
          "Ручная работа, состаренное дерево. Возможно изготовление любых размеров.",
      },
      {
        id: uuidv4(),

        image: "/furniture/sofas_beds/retro0.jpg",
        image1: "/no_images.jpg",
        image2: "/no_images.jpg",
        image3: "/no_images.jpg",

        title: "Диван Ретро угловой",
        price: "от 14 800 000 сум",

        availability: "Под заказ",
        material: "Сосна",
        size: "180x120 см",
        comment:
          "Ручная работа, состаренное дерево. Возможно изготовление любых размеров.",
      },
      {
        id: uuidv4(),

        image: "/furniture/sofas_beds/tsars0.jpg",
        image1: "/furniture/sofas_beds/tsars1.jpg",
        image2: "/no_images.jpg",
        image3: "/no_images.jpg",

        title: "Диван Царский",
        price: "от 6 500 000 сум",

        availability: "Под заказ",
        material: "Сосна",
        size: "Длина: 130 см",
        comment:
          "Ручная работа, состаренное дерево. Возможно изготовление любых размеров.",
      },
      {
        id: uuidv4(),

        image: "/furniture/sofas_beds/trinity0.jpg",
        image1: "/furniture/sofas_beds/trinity1.jpg",
        image2: "/no_images.jpg",
        image3: "/no_images.jpg",

        title: "Диван Троица",
        price: "от 8 200 000 сум",

        availability: "Под заказ",
        material: "Сосна",
        size: "Длина: 150 см",
        comment:
          "Ручная работа, состаренное дерево. Возможно изготовление любых размеров.",
      },
      {
        id: uuidv4(),

        image: "/furniture/sofas_beds/sofacomfort0.jpg",
        image1: "/no_images.jpg",
        image2: "/no_images.jpg",
        image3: "/no_images.jpg",

        title: "Диван комфорт",
        price: "от 6 800 000 сум",

        availability: "Под заказ",
        material: "Сосна",
        size: "Длина: 140 см",
        comment:
          "Ручная работа, состаренное дерево. Возможно изготовление любых размеров.",
      },
      {
        id: uuidv4(),

        image: "/furniture/sofas_beds/sofaquest0.jpg",
        image1: "/no_images.jpg",
        image2: "/no_images.jpg",
        image3: "/no_images.jpg",

        title: "Диван Квест",
        price: "от 6 900 000 сум",

        availability: "Под заказ",
        material: "Сосна",
        size: "Длина: 140 см",
        comment:
          "Ручная работа, состаренное дерево. Возможно изготовление любых размеров.",
      },
    ],
  },

  {
    id: 3,
    name: "Люстры - Светильники",
    counts: [
      {
        id: uuidv4(),

        image: "/furniture/chandeliers_lighting/lustawheel0.jpg",
        image1: "/no_images.jpg",
        image2: "/no_images.jpg",
        image3: "/no_images.jpg",

        title: "Люстра Колесо",
        price: "от 1 900 000 сум",

        availability: "Под заказ",
        material: "Сосна",
        size: "Д: 100 см",
        comment:
          "Ручная работа, состаренное дерево. Возможно изготовление любых размеров.",
      },
      {
        id: uuidv4(),

        image: "/furniture/chandeliers_lighting/chandelierbath0.jpg",
        image1: "/no_images.jpg",
        image2: "/no_images.jpg",
        image3: "/no_images.jpg",

        title: "Люстра Банная",
        price: "от 1 200 000 сум",

        availability: "Под заказ",
        material: "Сосна",
        size: "Д: 70 см",
        comment:
          "Ручная работа, состаренное дерево. Возможно изготовление любых размеров.",
      },
      {
        id: uuidv4(),

        image: "/furniture/chandeliers_lighting/chandelierkolestr0.jpg",
        image1: "/no_images.jpg",
        image2: "/no_images.jpg",
        image3: "/no_images.jpg",

        title: "Люстра Колестр",
        price: "от 800 000 сум",

        availability: "Под заказ",
        material: "Сосна",
        size: "Д: 70 см",
        comment:
          "Ручная работа, состаренное дерево. Возможно изготовление любых размеров.",
      },
      {
        id: uuidv4(),

        image: "/furniture/chandeliers_lighting/chandelierbrown0.jpg",
        image1: "/no_images.jpg",
        image2: "/no_images.jpg",
        image3: "/no_images.jpg",

        title: "Люстра Браун",
        price: "от 1 100 000 сум",

        availability: "Под заказ",
        material: "Сосна",
        size: "100x100 см",
        comment:
          "Ручная работа, состаренное дерево. Возможно изготовление любых размеров.",
      },
      {
        id: uuidv4(),

        image: "/furniture/chandeliers_lighting/calibrichandelier0.jpg",
        image1: "/no_images.jpg",
        image2: "/no_images.jpg",
        image3: "/no_images.jpg",

        title: "Люстра Калибри",
        price: "от 1 100 000 сум",

        availability: "Под заказ",
        material: "Сосна",
        size: "Д: 80 см",
        comment:
          "Ручная работа, состаренное дерево. Возможно изготовление любых размеров.",
      },
      {
        id: uuidv4(),

        image: "/furniture/chandeliers_lighting/lampwithtorch0.jpg",
        image1: "/no_images.jpg",
        image2: "/no_images.jpg",
        image3: "/no_images.jpg",

        title: "Светильник Колесо с Факел",
        price: "от 500 000 сум",

        availability: "Под заказ",
        material: "Сосна",
        size: "-",
        comment:
          "Ручная работа, состаренное дерево. Возможно изготовление любых размеров.",
      },
      {
        id: uuidv4(),

        image: "/furniture/chandeliers_lighting/chandelierural0.jpg",
        image1: "/no_images.jpg",
        image2: "/no_images.jpg",
        image3: "/no_images.jpg",

        title: "Люстра Урал",
        price: "от 750 000 сум",

        availability: "Под заказ",
        material: "Сосна",
        size: "85x75 см",
        comment:
          "Ручная работа, состаренное дерево. Возможно изготовление любых размеров.",
      },
      {
        id: uuidv4(),

        image: "/furniture/chandeliers_lighting/chandelierbrus0.jpg",
        image1: "/no_images.jpg",
        image2: "/no_images.jpg",
        image3: "/no_images.jpg",

        title: "Люстра Брус",
        price: "от 1 300 000 сум",

        availability: "Под заказ",
        material: "Сосна",
        size: "100x100 см",
        comment:
          "Ручная работа, состаренное дерево. Возможно изготовление любых размеров.",
      },
      {
        id: uuidv4(),

        image: "/furniture/chandeliers_lighting/chandeliersteam0.jpg",
        image1: "/no_images.jpg",
        image2: "/no_images.jpg",
        image3: "/no_images.jpg",

        title: "Люстра Парная",
        price: "от 950 000 сум",

        availability: "Под заказ",
        material: "Сосна",
        size: "Д: 70 см",
        comment:
          "Ручная работа, состаренное дерево. Возможно изготовление любых размеров.",
      },
      {
        id: uuidv4(),

        image: "/furniture/chandeliers_lighting/chandelieroldboard0.jpg",
        image1: "/no_images.jpg",
        image2: "/no_images.jpg",
        image3: "/no_images.jpg",

        title: "Люстра  старая доска",
        price: "от 1 300 000 сум",

        availability: "Под заказ",
        material: "Сосна",
        size: "120x90 см",
        comment:
          "Ручная работа, состаренное дерево. Возможно изготовление любых размеров.",
      },
      {
        id: uuidv4(),

        image: "/furniture/chandeliers_lighting/chandeliership0.jpg",
        image1: "/no_images.jpg",
        image2: "/no_images.jpg",
        image3: "/no_images.jpg",

        title: "Люстра Кораблик",
        price: "от 750 000 сум",

        availability: "Под заказ",
        material: "Сосна",
        size: "120 см",
        comment:
          "Ручная работа, состаренное дерево. Возможно изготовление любых размеров.",
      },
      {
        id: uuidv4(),

        image: "/furniture/chandeliers_lighting/baron_chandelier0.jpg",
        image1: "/no_images.jpg",
        image2: "/no_images.jpg",
        image3: "/no_images.jpg",

        title: "Люстра Барон",
        price: "от 950 000 сум",

        availability: "Под заказ",
        material: "Сосна",
        size: "90x90 см",
        comment:
          "Ручная работа, состаренное дерево. Возможно изготовление любых размеров.",
      },
      {
        id: uuidv4(),

        image: "/furniture/chandeliers_lighting/chandelierwheel20.jpg",
        image1: "/no_images.jpg",
        image2: "/no_images.jpg",
        image3: "/no_images.jpg",

        title: "Люстра колесо 2",
        price: "от 3 400 000 сум",

        availability: "Под заказ",
        material: "Сосна",
        size: "Д: 120 см",
        comment:
          "Ручная работа, состаренное дерево. Возможно изготовление любых размеров.",
      },
      {
        id: uuidv4(),

        image: "/furniture/chandeliers_lighting/chandelierkorablik20.jpg",
        image1: "/no_images.jpg",
        image2: "/no_images.jpg",
        image3: "/no_images.jpg",

        title: "Люстра Кораблик 2",
        price: "от 950 000 сум",

        availability: "Под заказ",
        material: "Сосна",
        size: "Л: 100 см",
        comment:
          "Ручная работа, состаренное дерево. Возможно изготовление любых размеров.",
      },
      {
        id: uuidv4(),

        image: "/furniture/chandeliers_lighting/chandelierspace0.jpg",
        image1: "/no_images.jpg",
        image2: "/no_images.jpg",
        image3: "/no_images.jpg",

        title: "Люстра простор",
        price: "от 800 000 сум",

        availability: "Под заказ",
        material: "Сосна",
        size: "75x60 см",
        comment:
          "Ручная работа, состаренное дерево. Возможно изготовление любых размеров.",
      },
      {
        id: uuidv4(),

        image:
          "/furniture/chandeliers_lighting/chandelierwheelwithlantern0.jpg",
        image1: "/no_images.jpg",
        image2: "/no_images.jpg",
        image3: "/no_images.jpg",

        title: "Люстра Колесо 3 с фонарь",
        price: "от 3 700 000 сум",

        availability: "Под заказ",
        material: "Сосна",
        size: "Д: 120 см",
        comment:
          "Ручная работа, состаренное дерево. Возможно изготовление любых размеров.",
      },
      {
        id: uuidv4(),

        image: "/furniture/chandeliers_lighting/torchlamp0.jpg",
        image1: "/furniture/chandeliers_lighting/torchlamp1.jpg",
        image2: "/no_images.jpg",
        image3: "/no_images.jpg",

        title: "Cветильник Факел",
        price: "от 400 000 сум",

        availability: "Под заказ",
        material: "Сосна",
        size: "60 см",
        comment:
          "Ручная работа, состаренное дерево. Возможно изготовление любых размеров.",
      },
      {
        id: uuidv4(),

        image: "/furniture/chandeliers_lighting/lamplantern0.jpg",
        image1: "/no_images.jpg",
        image2: "/no_images.jpg",
        image3: "/no_images.jpg",

        title: "Светильник Фонарь",
        price: "от 600 000 сум",

        availability: "Под заказ",
        material: "Сосна",
        size: "-",
        comment:
          "Ручная работа, состаренное дерево. Возможно изготовление любых размеров.",
      },
      {
        id: uuidv4(),

        image: "/furniture/chandeliers_lighting/sconcelamp0.jpg",
        image1: "/no_images.jpg",
        image2: "/no_images.jpg",
        image3: "/no_images.jpg",

        title: "Светильник Бра",
        price: "от 450 000 сум",

        availability: "Под заказ",
        material: "Сосна",
        size: "-",
        comment:
          "Ручная работа, состаренное дерево. Возможно изготовление любых размеров.",
      },
      {
        id: uuidv4(),

        image: "/furniture/chandeliers_lighting/sconcelamp20.jpg",
        image1: "/no_images.jpg",
        image2: "/no_images.jpg",
        image3: "/no_images.jpg",

        title: "Светильник Бра 2",
        price: "от 450 000 сум",

        availability: "Под заказ",
        material: "Сосна",
        size: "-",
        comment:
          "Ручная работа, состаренное дерево. Возможно изготовление любых размеров.",
      },
    ],
  },

  {
    id: 4,
    name: "Скамейки",
    counts: [
      {
        id: uuidv4(),

        image: "/furniture/benches/shopprovence0.jpg",
        image1: "/no_images.jpg",
        image2: "/no_images.jpg",
        image3: "/no_images.jpg",

        title: "Лавка Прованс",
        price: "1 400 000 сум",

        availability: "Под заказ",
        material: "Сосна",
        size: "Длина: 130 см",
        comment:
          "Ручная работа, состаренное дерево. Возможно изготовление любых размеров.",
      },
      {
        id: uuidv4(),

        image: "/furniture/benches/wheels0.jpg",
        image1: "/no_images.jpg",
        image2: "/no_images.jpg",
        image3: "/no_images.jpg",

        title: "Скамья Колёс",
        price: "1 900 000 сум",

        availability: "Под заказ",
        material: "Сосна",
        size: "Длина: 150 см",
        comment:
          "Ручная работа, состаренное дерево. Возможно изготовление любых размеров.",
      },
      {
        id: uuidv4(),

        image: "/furniture/benches/home0.jpg",
        image1: "/no_images.jpg",
        image2: "/no_images.jpg",
        image3: "/no_images.jpg",

        title: "Скамья домашняя",
        price: "1 400 000 сум",

        availability: "Под заказ",
        material: "Сосна",
        size: "Длина: 130 см",
        comment:
          "Ручная работа, состаренное дерево. Возможно изготовление любых размеров.",
      },

      {
        id: uuidv4(),

        image: "/furniture/benches/countrybench0.jpg",
        image1: "/no_images.jpg",
        image2: "/no_images.jpg",
        image3: "/no_images.jpg",

        title: "Скамья дачная",
        price: "1 750 000 сум",

        availability: "Под заказ",
        material: "Сосна",
        size: "Длина: 150 см",
        comment:
          "Ручная работа, состаренное дерево. Возможно изготовление любых размеров.",
      },

      {
        id: uuidv4(),

        image: "/furniture/benches/love0.jpg",
        image1: "/no_images.jpg",
        image2: "/no_images.jpg",
        image3: "/no_images.jpg",

        title: "Скамья Любава",
        price: "1 800 000 сум",

        availability: "Под заказ",
        material: "Сосна",
        size: "Длина: 120 см",
        comment:
          "Ручная работа, состаренное дерево. Возможно изготовление любых размеров.",
      },
      {
        id: uuidv4(),

        image: "/furniture/benches/grannybench0.jpg",
        image1: "/no_images.jpg",
        image2: "/no_images.jpg",
        image3: "/no_images.jpg",

        title: "Скамья бабуля",
        price: "2 000 000 сум",

        availability: "Под заказ",
        material: "Сосна",
        size: "Длина: 130 см",
        comment:
          "Ручная работа, состаренное дерево. Возможно изготовление любых размеров.",
      },
      {
        id: uuidv4(),

        image: "/furniture/benches/softbench0.jpg",
        image1: "/no_images.jpg",
        image2: "/no_images.jpg",
        image3: "/no_images.jpg",

        title: "Скамья мягкая",
        price: "2 200 000 сум",

        availability: "Под заказ",
        material: "Сосна",
        size: "Длина: 120 см",
        comment:
          "Ручная работа, состаренное дерево. Возможно изготовление любых размеров.",
      },
      {
        id: uuidv4(),

        image: "/furniture/benches/triumph0.jpg",
        image1: "/no_images.jpg",
        image2: "/no_images.jpg",
        image3: "/no_images.jpg",

        title: "Скамья Триумф",
        price: "1 600 000 сум",

        availability: "Под заказ",
        material: "Сосна",
        size: "Длина: 120 см",
        comment:
          "Ручная работа, состаренное дерево. Возможно изготовление любых размеров.",
      },
      {
        id: uuidv4(),

        image: "/furniture/benches/spaceplus0.jpg",
        image1: "/no_images.jpg",
        image2: "/no_images.jpg",
        image3: "/no_images.jpg",

        title: "Скамья простор плюс",
        price: "1 600 000 сум",

        availability: "Под заказ",
        material: "Сосна",
        size: "Длина: 140 см",
        comment:
          "Ручная работа, состаренное дерево. Возможно изготовление любых размеров.",
      },
    ],
  },

  {
    id: 5,
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
        comment:
          "300x1000 см = цена от 12 000 000 сум. Ручная работа, состаренное дерево. Возможно изготовление любых размеров.",
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
        comment:
          "Ручная работа, состаренное дерево. Возможно изготовление любых размеров.",
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
        comment:
          "Ручная работа, состаренное дерево. Возможно изготовление любых размеров.",
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
        comment:
          "Ручная работа, состаренное дерево. Возможно изготовление любых размеров.",
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
        comment:
          "Ручная работа, состаренное дерево. Возможно изготовление любых размеров.",
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
        comment:
          "Ручная работа, состаренное дерево. Возможно изготовление любых размеров.",
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
        comment:
          "Ручная работа, состаренное дерево. Возможно изготовление любых размеров.",
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
        comment:
          "Ручная работа, состаренное дерево. Возможно изготовление любых размеров.",
      },
    ],
  },

  {
    id: 6,
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
        material: "из слэба Платан, Орех, Карагач",
        size: "200x90 см",
        comment:
          "Ручная работа, состаренное дерево. Возможно изготовление любых размеров.",
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
        material: "из слэба Платан, Орех, Карагач",
        size: "250x95 см",
        comment:
          "Ручная работа, состаренное дерево. Возможно изготовление любых размеров.",
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
        material: "из слэба Платан, Орех, Карагач",
        size: "140x85 см",
        comment:
          "Ручная работа, состаренное дерево. Возможно изготовление любых размеров.",
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
        material: "из слэба Платан, Орех, Карагач",
        size: "140x90 см",
        comment:
          "Ручная работа, состаренное дерево. Возможно изготовление любых размеров.",
      },
    ],
  },

  {
    id: 7,
    name: "Декоративные Балки",
    counts: [
      {
        id: uuidv4(),

        image: "/furniture/decorative_beams/flash-balki-square.jpg",
        image1: "/furniture/decorative_beams/decorativebeams1.jpg",
        image2: "/furniture/decorative_beams/decorativebeams2.jpg",
        image3: "/furniture/decorative_beams/decorativebeams3.jpg",

        title: "Фальш-Короб",
        price: "от 250 000 сум за метр",

        availability: "Под заказ",
        material: "Сосна",
        size: "15х15х15 см П образный",
        comment: "Ручная работа, состаренное дерево. Возможно изготовление любых размеров.",
      },
      {
        id: uuidv4(),

        image: "/furniture/decorative_beams/decorativebeams0.jpg",
        image1: "/furniture/decorative_beams/decorativebeams1.jpg",
        image2: "/furniture/decorative_beams/decorativebeams2.jpg",
        image3: "/furniture/decorative_beams/decorativebeams3.jpg",

        title: "Балка П-образная",
        price: "от 250 000 сум за метр",

        availability: "Под заказ",
        material: "Сосна",
        size: "15х15х15 см П образный",
        comment: "Ручная работа, состаренное дерево. Возможно изготовление любых размеров.",
      },
      {
        id: uuidv4(),

        image: "/furniture/decorative_beams/g-beams.jpg",
        image1: "/furniture/decorative_beams/decorativebeams1.jpg",
        image2: "/furniture/decorative_beams/decorativebeams2.jpg",
        image3: "/furniture/decorative_beams/decorativebeams3.jpg",

        title: "Балка Г-образная",
        price: "от 250 000 сум за метр",

        availability: "Под заказ",
        material: "Сосна",
        size: "15х15х15 см П образный",
        comment: "Ручная работа, состаренное дерево. Возможно изготовление любых размеров.",
      },
    ],
  },

  {
    id: 8,
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
        comment:
          "Ручная работа, состаренное дерево. Возможно изготовление любых размеров.",
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
        comment:
          "Ручная работа, состаренное дерево. Возможно изготовление любых размеров.",
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
        comment:
          "Ручная работа, состаренное дерево. Возможно изготовление любых размеров.",
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
        comment:
          "Ручная работа, состаренное дерево. Возможно изготовление любых размеров.",
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
        comment:
          "Ручная работа, состаренное дерево. Возможно изготовление любых размеров.",
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
        comment:
          "Ручная работа, состаренное дерево. Возможно изготовление любых размеров.",
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
        comment:
          "Ручная работа, состаренное дерево. Возможно изготовление любых размеров.",
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
        comment:
          "Ручная работа, состаренное дерево. Возможно изготовление любых размеров.",
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
        comment:
          "Ручная работа, состаренное дерево. Возможно изготовление любых размеров.",
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
        comment:
          "Ручная работа, состаренное дерево. Возможно изготовление любых размеров.",
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
        comment:
          "Ручная работа, состаренное дерево. Возможно изготовление любых размеров.",
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
        comment:
          "Ручная работа, состаренное дерево. Возможно изготовление любых размеров.",
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
        comment:
          "Ручная работа, состаренное дерево. Возможно изготовление любых размеров.",
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
        comment: "Ручная работа, состаренное дерево.",
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
        comment: "Ручная работа, состаренное дерево.",
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
        comment: "Ручная работа, состаренное дерево.",
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
        comment: "Ручная работа, состаренное дерево.",
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
        comment: "Ручная работа, состаренное дерево.",
      },
    ],
  },

  {
    id: 9,
    name: "Kомоды",
    counts: [
      {
        id: uuidv4(),

        image: "/furniture/drawers/drawersforaquarium0.jpg",
        image1: "/furniture/drawers/drawersforaquarium1.jpg",
        image2: "/furniture/drawers/drawersforaquarium2.jpg",
        image3: "/furniture/drawers/drawersforaquarium3.jpg",

        title: "Комод под аквариум",
        price: "от 10 400 000 сум",

        availability: "Под заказ",
        material: "Сосна",
        size: "ДxВxГ: 150x80x50 см",
        comment:
          "Ручная работа, состаренное дерево. Возможно изготовление любых размеров.",
      },
      {
        id: uuidv4(),

        image: "/furniture/drawers/drawerskhatabic0.jpg",
        image1: "/furniture/drawers/drawerskhatabic1.jpg",
        image2: "/furniture/drawers/drawerskhatabic2.jpg",
        image3: "/no_images.jpg",

        title: "Комод Хатабич",
        price: "от 7 500 000 сум",

        availability: "Под заказ",
        material: "Сосна",
        size: "ДxВxГ: 130x95x50 см",
        comment:
          "Ручная работа, состаренное дерево. Возможно изготовление любых размеров.",
      },
      {
        id: uuidv4(),

        image: "/furniture/drawers/dresserbrutal0.jpg",
        image1: "/no_images.jpg",
        image2: "/no_images.jpg",
        image3: "/no_images.jpg",

        title: "Комод брутал",
        price: "от 8 000 000 сум",

        availability: "Под заказ",
        material: "Сосна",
        size: "ДxВxГ: 140x85x50 см",
        comment:
          "Ручная работа, состаренное дерево. Возможно изготовление любых размеров.",
      },
      {
        id: uuidv4(),

        image: "/furniture/drawers/footwear20.jpg",
        image1: "/no_images.jpg",
        image2: "/no_images.jpg",
        image3: "/no_images.jpg",

        title: "Обувница 2",
        price: "от 5 200 000 сум",

        availability: "Под заказ",
        material: "Сосна",
        size: "ДxВxГ: 130x70x45 см",
        comment:
          "Ручная работа, состаренное дерево. Возможно изготовление любых размеров.",
      },
      {
        id: uuidv4(),

        image: "/furniture/drawers/footwear10.jpg",
        image1: "/no_images.jpg",
        image2: "/no_images.jpg",
        image3: "/no_images.jpg",

        title: "Обувница 1",
        price: "от 2 150 000 сум",

        availability: "Под заказ",
        material: "Сосна",
        size: "ДxВxГ: 130x70x45 см",
        comment:
          "Ручная работа, состаренное дерево. Возможно изготовление любых размеров.",
      },
      {
        id: uuidv4(),

        image: "/furniture/drawers/thebedsidetable0.jpg",
        image1: "/furniture/drawers/thebedsidetable1.jpg",
        image2: "/furniture/drawers/thebedsidetable2.jpg",
        image3: "/no_images.jpg",

        title: "Тумба Прикроватная",
        price: "от 7 500 000 сум",

        availability: "Под заказ",
        material: "Сосна",
        size: "ДxВxГ: 50x50x45 см",
        comment:
          "Ручная работа, состаренное дерево. Возможно изготовление любых размеров.",
      },
      {
        id: uuidv4(),

        image: "/furniture/drawers/draweriskra1.jpg",
        image1: "/furniture/drawers/draweriskra0.jpg",
        image2: "/furniture/drawers/draweriskra2.jpg",
        image3: "/furniture/drawers/draweriskra3.jpg",

        title: "Комод Искра",
        price: "от 8 700 000 сум",

        availability: "Под заказ",
        material: "Сосна",
        size: "ДxВxГ: 120x90x50 см",
        comment:
          "Ручная работа, состаренное дерево. Возможно изготовление любых размеров.",
      },
      {
        id: uuidv4(),

        image: "/furniture/drawers/drawersundertv0.jpg",
        image1: "/furniture/drawers/drawersundertv1.jpg",
        image2: "/furniture/drawers/drawersundertv2.jpg",
        image3: "/furniture/drawers/drawersundertv3.jpg",

        title: "Комод под тв 2",
        price: "от 4 700 000 сум",

        availability: "Под заказ",
        material: "Сосна",
        size: "ДxВxГ: 140x85x50 см",
        comment:
          "Ручная работа, состаренное дерево. Возможно изготовление любых размеров.",
      },
      {
        id: uuidv4(),

        image: "/furniture/drawers/cabinetundersink0.jpg",
        image1: "/furniture/drawers/cabinetundersink1.jpg",
        image2: "/furniture/drawers/cabinetundersink2.jpg",
        image3: "/no_images.jpg",

        title: "Тумба под раковина 1",
        price: "от 7 800 000 сум",

        availability: "Под заказ",
        material: "Сосна",
        size: "ДxВxГ: 70x75x50 см",
        comment:
          "Ручная работа, состаренное дерево. Возможно изготовление любых размеров.",
      },
      {
        id: uuidv4(),

        image: "/furniture/drawers/cornercabinetfloorbarrel0.jpg",
        image1: "/furniture/drawers/cornercabinetfloorbarrel1.jpg",
        image2: "/furniture/drawers/cornercabinetfloorbarrel2.jpg",
        image3: "/no_images.jpg",

        title: "Угловой шкаф Пол бочка",
        price: "от 2 300 000 сум",

        availability: "Под заказ",
        material: "Сосна",
        size: "ДxВxГ: 60x200x55 см",
        comment:
          "Ручная работа, состаренное дерево. Возможно изготовление любых размеров.",
      },
      {
        id: uuidv4(),

        image: "/furniture/drawers/bedsidetablebaby0.jpg",
        image1: "/furniture/drawers/bedsidetablebaby1.jpg",
        image2: "/furniture/drawers/bedsidetablebaby2.jpg",
        image3: "/furniture/drawers/bedsidetablebaby3.jpg",

        title: "Прикроватная тумба малыш",
        price: "от 1 900 000 сум",

        availability: "Под заказ",
        material: "Сосна",
        size: "ДxВxГ: 50x60x45 см",
        comment:
          "Ручная работа, состаренное дерево. Возможно изготовление любых размеров.",
      },
      {
        id: uuidv4(),

        image: "/furniture/drawers/livingroomdrawers0.jpg",
        image1: "/no_images.jpg",
        image2: "/no_images.jpg",
        image3: "/no_images.jpg",

        title: "Комод гостиный",
        price: "от 12 000 000 сум",

        availability: "Под заказ",
        material: "Сосна",
        size: "ДxВxГ: 170x80x50 см",
        comment:
          "Ручная работа, состаренное дерево. Возможно изготовление любых размеров.",
      },
      {
        id: uuidv4(),

        image: "/furniture/drawers/drawestsar0.jpg",
        image1: "/furniture/drawers/drawestsar1.jpg",
        image2: "/furniture/drawers/drawestsar2.jpg",
        image3: "/no_images.jpg",

        title: "Комод Царь",
        price: "от 12 300 000 сум",

        availability: "Под заказ",
        material: "Сосна",
        size: "ДxВxГ: 170x85x50 см",
        comment:
          "Ручная работа, состаренное дерево. Возможно изготовление любых размеров.",
      },
      {
        id: uuidv4(),

        image: "/furniture/drawers/bedsidetablesimple0.jpg",
        image1: "/no_images.jpg",
        image2: "/no_images.jpg",
        image3: "/no_images.jpg",

        title: "Тумба прикроватный Простой",
        price: "от 4 100 000 сум",

        availability: "Под заказ",
        material: "Сосна",
        size: "ДxВxГ: 50x50x45 см",
        comment:
          "Ручная работа, состаренное дерево. Возможно изготовление любых размеров.",
      },
      {
        id: uuidv4(),

        image: "/furniture/drawers/barrelshapedpedestal0.jpg",
        image1: "/furniture/drawers/barrelshapedpedestal1.jpg",
        image2: "/furniture/drawers/barrelshapedpedestal2.jpg",
        image3: "/furniture/drawers/barrelshapedpedestal3.jpg",

        title: "Тумба пол бочка",
        price: "от 3 300 000 сум",

        availability: "Под заказ",
        material: "Сосна",
        size: "ДxВxГ: 60x80x50 см",
        comment:
          "Ручная работа, состаренное дерево. Возможно изготовление любых размеров.",
      },
      {
        id: uuidv4(),

        image: "/furniture/drawers/chestofdrawersclassic0.jpg",
        image1: "/no_images.jpg",
        image2: "/no_images.jpg",
        image3: "/no_images.jpg",

        title: "Комод Классик",
        price: "от 11 500 000 сум",

        availability: "Под заказ",
        material: "Сосна",
        size: "ДxВxГ: 130x80x55 см",
        comment:
          "Ручная работа, состаренное дерево. Возможно изготовление любых размеров.",
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
    name: "Каркасные домики",
    counts: [
      {
        id: uuidv4(),
        table: "yes",

        image: "/houses/frame_houses/hometerrace0.jpg",
        image1: "/houses/frame_houses/hometerrace1.jpg",
        image2: "/houses/frame_houses/hometerrace2.jpg",
        image3: "/houses/frame_houses/hometerrace3.jpg",

        plan2d: "/houses/frame_houses/hometerrace0_plan2d.jpg",

        title: "Дом 10 на 10 с террасой",
        price: "Под крышей: от 3 600 000 сум за кв/м.",

        project: "Дом",
        square: "91 м²",
        size: "10x10 м",
        comment:
          "Уникальный проект с новаторским подходом к планировке, в котором каждый элемент был тщательно продуман, чтобы обеспечить не только эстетическое наслаждение, но и максимальный комфорт для жизни. Включает в себя: просторный зал, полноценная кухонная зона с обеденным столом, санузел, банная зона.",
      },
      {
        id: uuidv4(),
        table: "yes",

        image: "/houses/frame_houses/bighometerrace0.jpg",
        image1: "/houses/frame_houses/bighometerrace1.jpg",
        image2: "/houses/frame_houses/bighometerrace2.jpg",
        image3: "/houses/frame_houses/bighometerrace3.jpg",

        plan2d: "/houses/frame_houses/bighometerrace0_plan2d.jpg",

        title: "Дом 11 на 6 с большой террасой",
        price: "Под крышей: от 3 600 000 сум за кв/м.",

        project: "Дом",
        square: "66 м²",
        size: "11x6 м",
        comment:
          "Уникальный проект с новаторским подходом к планировке, в котором каждый элемент был тщательно продуман, чтобы обеспечить не только эстетическое наслаждение, но и максимальный комфорт для жизни. Включает в себя: просторный зал, полноценная кухонная зона с обеденным столом, санузел, банная зона.",
      },
      {
        id: uuidv4(),
        table: "yes",

        image: "/houses/frame_houses/homegableroof0.jpg",
        image1: "/houses/frame_houses/homegableroof1.jpg",
        image2: "/houses/frame_houses/homegableroof2.jpg",
        image3: "/houses/frame_houses/homegableroof3.jpg",

        plan2d: "/houses/frame_houses/homegableroof0_plan2d.jpg",

        title: "Дом 6 на 4 с двухскатной крышей",
        price: "Под крышей: от 3 600 000 сум за кв/м.",

        project: "Дом",
        square: "21 м²",
        size: "6x4 м",
        comment:
          "Уникальный проект с новаторским подходом к планировке, в котором каждый элемент был тщательно продуман, чтобы обеспечить не только эстетическое наслаждение, но и максимальный комфорт для жизни. Включает в себя: просторный зал, полноценная кухонная зона с обеденным столом, санузел, банная зона.",
      },
      {
        id: uuidv4(),
        table: "yes",

        image: "/houses/frame_houses/home88terrace0.jpg",
        image1: "/houses/frame_houses/home88terrace1.jpg",
        image2: "/houses/frame_houses/home88terrace2.jpg",
        image3: "/houses/frame_houses/home88terrace3.jpg",

        plan2d: "/houses/frame_houses/home88terrace0_plan2d.jpg",

        title: "Дом 8 на 8 с террасой",
        price: "Под крышей: от 3 600 000 сум за кв/м.",

        project: "Дом",
        square: "64 м²",
        size: "8x8 м",
        comment:
          "Уникальный проект с новаторским подходом к планировке, в котором каждый элемент был тщательно продуман, чтобы обеспечить не только эстетическое наслаждение, но и максимальный комфорт для жизни. Включает в себя: просторный зал, полноценная кухонная зона с обеденным столом, санузел, банная зона.",
      },
      {
        id: uuidv4(),
        table: "yes",

        image: "/houses/frame_houses/home88terrace20.jpg",
        image1: "/houses/frame_houses/home88terrace21.jpg",
        image2: "/houses/frame_houses/home88terrace22.jpg",
        image3: "/houses/frame_houses/home88terrace23.jpg",

        plan2d: "/houses/frame_houses/home88terrace20_plan2d.jpg",

        title: "Дом 8 на 8 с террасой 2",
        price: "Под крышей: от 3 600 000 сум за кв/м.",

        project: "Дом",
        square: "76 м²",
        size: "8x8 м",
        comment:
          "Уникальный проект с новаторским подходом к планировке, в котором каждый элемент был тщательно продуман, чтобы обеспечить не только эстетическое наслаждение, но и максимальный комфорт для жизни. Включает в себя: просторный зал, полноценная кухонная зона с обеденным столом, санузел, банная зона.",
      },
      {
        id: uuidv4(),
        table: "yes",

        image: "/houses/frame_houses/housewithbedrooms0.jpg",
        image1: "/houses/frame_houses/housewithbedrooms1.jpg",
        image2: "/houses/frame_houses/housewithbedrooms2.jpg",
        image3: "/houses/frame_houses/housewithbedrooms3.jpg",

        plan2d: "/houses/frame_houses/housewithbedrooms0_plan2d.jpg",

        title: "Каркасный дом 10 на 11 с 3 спальнями",
        price: "Под крышей: от 3 600 000 сум за кв/м.",

        project: "Дом",
        square: "101 м²",
        size: "11x10 м",
        comment:
          "Уникальный проект с новаторским подходом к планировке, в котором каждый элемент был тщательно продуман, чтобы обеспечить не только эстетическое наслаждение, но и максимальный комфорт для жизни. Включает в себя: просторный зал, полноценная кухонная зона с обеденным столом, санузел, банная зона.",
      },
      {
        id: uuidv4(),
        table: "yes",

        image: "/houses/frame_houses/aframe0.jpg",
        image1: "/houses/frame_houses/aframe1.jpg",
        image2: "/houses/frame_houses/aframe2.jpg",
        image3: "/houses/frame_houses/aframe3.jpg",

        plan2d: "/houses/frame_houses/aframe0_plan2d.jpg",

        title: "Дома «А-фрейм»",
        price: "Под крышей: от 3 600 000 сум за кв/м.",

        project: "Дом",
        square: "38,5 м²",
        size: "6x6 м",
        comment:
          "Уникальный проект с новаторским подходом к планировке, в котором каждый элемент был тщательно продуман, чтобы обеспечить не только эстетическое наслаждение, но и максимальный комфорт для жизни. Включает в себя: просторный зал, полноценная кухонная зона с обеденным столом, санузел, банная зона.",
      },
      {
        id: uuidv4(),
        table: "yes",

        image: "/houses/frame_houses/house4x40.jpg",
        image1: "/no_images.jpg",
        image2: "/no_images.jpg",
        image3: "/no_images.jpg",

        plan2d: "/houses/frame_houses/house4x40_plan2d.jpg",

        title: "Домик 4х4",
        price: "Под крышей: от 3 600 000 сум за кв/м.",

        project: "Дом",
        square: "16 м²",
        size: "4x4 м",
        comment:
          "Уникальный проект с новаторским подходом к планировке, в котором каждый элемент был тщательно продуман, чтобы обеспечить не только эстетическое наслаждение, но и максимальный комфорт для жизни. Включает в себя: просторный зал, полноценная кухонная зона с обеденным столом, санузел, банная зона.",
      },
      {
        id: uuidv4(),
        table: "yes",

        image: "/houses/frame_houses/floor2house4x60.jpg",
        image1: "/no_images.jpg",
        image2: "/no_images.jpg",
        image3: "/houses/frame_houses/floor2house4x60_plan2d1.jpg",

        plan2d: "/houses/frame_houses/floor2house4x60_plan2d.jpg",

        title: "Дачный дом",
        price: "Под крышей: от 3 600 000 сум за кв/м.",

        project: "Дом",
        square: "24 м²",
        size: "4x6 м",
        comment:
          "Уникальный проект с новаторским подходом к планировке, в котором каждый элемент был тщательно продуман, чтобы обеспечить не только эстетическое наслаждение, но и максимальный комфорт для жизни. Включает в себя: просторный зал, полноценная кухонная зона с обеденным столом, санузел, банная зона.",
      },
      {
        id: uuidv4(),
        table: "yes",

        image: "/houses/frame_houses/house6x6.jpg",
        image1: "/no_images.jpg",
        image2: "/no_images.jpg",
        image3: "/no_images.jpg",

        plan2d: "/houses/frame_houses/house6x6_plan2d.jpg",

        title: "Дом",
        price: "Под крышей: от 3 600 000 сум за кв/м.",

        project: "Дом",
        square: "36 м²",
        size: "6x6 м",
        comment:
          "Уникальный проект с новаторским подходом к планировке, в котором каждый элемент был тщательно продуман, чтобы обеспечить не только эстетическое наслаждение, но и максимальный комфорт для жизни. Включает в себя: просторный зал, полноценная кухонная зона с обеденным столом, санузел, банная зона.",
      },
      {
        id: uuidv4(),
        table: "yes",

        image: "/houses/frame_houses/CompactHouse5x5.jpg",
        image1: "/no_images.jpg",
        image2: "/no_images.jpg",
        image3: "/no_images.jpg",

        plan2d: "/houses/frame_houses/CompactHouse5x5_plan2d.jpg",

        title: "Компактный домик с террасой",
        price: "Под крышей: от 3 600 000 сум за кв/м.",

        project: "Дом",
        square: "25 м²",
        size: "5x5 м",
        comment:
          "Уникальный проект с новаторским подходом к планировке, в котором каждый элемент был тщательно продуман, чтобы обеспечить не только эстетическое наслаждение, но и максимальный комфорт для жизни. Включает в себя: просторный зал, полноценная кухонная зона с обеденным столом, санузел, банная зона.",
      },
    ],
  },

  {
    id: 2,
    name: "Бани и Сауны",
    counts: [
      {
        id: uuidv4(),
        table: "yes",

        image: "/houses/bath_villas/bathvill0.jpg",
        image1: "/no_images.jpg",
        image2: "/no_images.jpg",
        image3: "/no_images.jpg",

        plan2d: "/houses/bath_villas/bathvill0_plan2d.jpg",

        title: "Баня вилл",
        price: "от 6 990 000 сум кв/м под ключ",

        project: "Баня",
        square: "15 м²",
        size: "3x5 м",
        comment:
          "Уникальный проект с новаторским подходом к планировке, в котором каждый элемент был тщательно продуман, чтобы обеспечить не только эстетическое наслаждение, но и максимальный комфорт для жизни. Включает в себя: просторный зал, полноценная кухонная зона с обеденным столом, санузел, банная зона.",
      },
      {
        id: uuidv4(),
        table: "yes",

        image: "/houses/bath_villas/bath4x40.jpg",
        image1: "/no_images.jpg",
        image2: "/no_images.jpg",
        image3: "/no_images.jpg",

        plan2d: "/houses/bath_villas/bath4x40_plan2d.jpg",

        title: "Баня 4х4",
        price: "от 6 990 000 сум кв/м под ключ",

        project: "Баня",
        square: "16 м²",
        size: "4x4 м",
        comment:
          "Уникальный проект с новаторским подходом к планировке, в котором каждый элемент был тщательно продуман, чтобы обеспечить не только эстетическое наслаждение, но и максимальный комфорт для жизни. Включает в себя: просторный зал, полноценная кухонная зона с обеденным столом, санузел, банная зона.",
      },
      {
        id: uuidv4(),
        table: "yes",

        image: "/houses/bath_villas/bath3x30.jpg",
        image1: "/no_images.jpg",
        image2: "/no_images.jpg",
        image3: "/no_images.jpg",

        plan2d: "/houses/bath_villas/bath3x30_plan2d.jpg",

        title: "Баня Мини",
        price: "от 6 990 000 сум кв/м под ключ",

        project: "Баня",
        square: "9 м²",
        size: "3x3 м",
        comment:
          "Уникальный проект с новаторским подходом к планировке, в котором каждый элемент был тщательно продуман, чтобы обеспечить не только эстетическое наслаждение, но и максимальный комфорт для жизни. Включает в себя: просторный зал, полноценная кухонная зона с обеденным столом, санузел, банная зона.",
      },
      {
        id: uuidv4(),
        table: "yes",

        image: "/houses/bath_villas/bathterrace0.jpg",
        image1: "/no_images.jpg",
        image2: "/no_images.jpg",
        image3: "/no_images.jpg",

        plan2d: "/houses/bath_villas/bathterrace0_plan2d.jpg",

        title: "Баня Каркасная",
        price: "от 6 990 000 сум кв/м под ключ",

        project: "Баня",
        square: "16 м²",
        size: "4x4 м",
        comment:
          "Уникальный проект с новаторским подходом к планировке, в котором каждый элемент был тщательно продуман, чтобы обеспечить не только эстетическое наслаждение, но и максимальный комфорт для жизни. Включает в себя: просторный зал, полноценная кухонная зона с обеденным столом, санузел, банная зона.",
      },
    ],
  },

  {
    id: 3,
    name: "Беседки",
    counts: [
      {
        id: uuidv4(),
        table: "no",

        image: "/houses/terrace/besedkanational0.jpg",
        image1: "/no_images.jpg",
        image2: "/no_images.jpg",
        image3: "/no_images.jpg",

        plan2d: "/no_images.jpg",

        title: "Беседка Националь",
        price: "от 29 000 000 сум",

        project: "Беседка",
        square: "9 м²",
        size: "3x3 м",
        comment:
          "Уникальный проект с новаторским подходом к планировке, в котором каждый элемент был тщательно продуман, чтобы обеспечить не только эстетическое наслаждение, но и максимальный комфорт для жизни. Включает в себя: просторный зал, полноценная кухонная зона с обеденным столом, санузел, банная зона.",
      },
      {
        id: uuidv4(),
        table: "no",

        image: "/houses/terrace/gazeboconversation0.jpg",
        image1: "/no_images.jpg",
        image2: "/no_images.jpg",
        image3: "/no_images.jpg",

        plan2d: "/no_images.jpg",

        title: "Беседка Беседа",
        price: "от 22 000 000 сум",

        project: "Беседка",
        square: "9 м²",
        size: "3x3 м",
        comment:
          "Уникальный проект с новаторским подходом к планировке, в котором каждый элемент был тщательно продуман, чтобы обеспечить не только эстетическое наслаждение, но и максимальный комфорт для жизни. Включает в себя: просторный зал, полноценная кухонная зона с обеденным столом, санузел, банная зона.",
      },
      {
        id: uuidv4(),
        table: "no",

        image: "/houses/terrace/gazeboprostor0.jpg",
        image1: "/no_images.jpg",
        image2: "/no_images.jpg",
        image3: "/no_images.jpg",

        plan2d: "/no_images.jpg",

        title: "Беседка Простор",
        price: "от 22 500 000 сум",

        project: "Беседка",
        square: "9 м²",
        size: "3x3 м",
        comment:
          "Уникальный проект с новаторским подходом к планировке, в котором каждый элемент был тщательно продуман, чтобы обеспечить не только эстетическое наслаждение, но и максимальный комфорт для жизни. Включает в себя: просторный зал, полноценная кухонная зона с обеденным столом, санузел, банная зона.",
      },
      {
        id: uuidv4(),
        table: "no",

        image: "/houses/terrace/gazeboprostor20.jpg",
        image1: "/no_images.jpg",
        image2: "/no_images.jpg",
        image3: "/no_images.jpg",

        plan2d: "/no_images.jpg",

        title: "Беседка Простор 2",
        price: "от 28 000 000 сум",

        project: "Беседка",
        square: "12,25 м²",
        size: "3,5x3,5 м",
        comment:
          "Уникальный проект с новаторским подходом к планировке, в котором каждый элемент был тщательно продуман, чтобы обеспечить не только эстетическое наслаждение, но и максимальный комфорт для жизни. Включает в себя: просторный зал, полноценная кухонная зона с обеденным столом, санузел, банная зона.",
      },
      {
        id: uuidv4(),
        table: "no",

        image: "/houses/terrace/gazebogood0.jpg",
        image1: "/no_images.jpg",
        image2: "/no_images.jpg",
        image3: "/no_images.jpg",

        plan2d: "/no_images.jpg",

        title: "Беседка Добро",
        price: "от 24 000 000 сум",

        project: "Беседка",
        square: "9 м²",
        size: "3x3 м",
        comment:
          "Уникальный проект с новаторским подходом к планировке, в котором каждый элемент был тщательно продуман, чтобы обеспечить не только эстетическое наслаждение, но и максимальный комфорт для жизни. Включает в себя: просторный зал, полноценная кухонная зона с обеденным столом, санузел, банная зона.",
      },
      {
        id: uuidv4(),
        table: "no",

        image: "/houses/terrace/gazebogood20.jpg",
        image1: "/no_images.jpg",
        image2: "/no_images.jpg",
        image3: "/no_images.jpg",

        plan2d: "/no_images.jpg",

        title: "Беседка Добро 2",
        price: "от 27 300 000 сум",

        project: "Беседка",
        square: "9 м²",
        size: "3x3 м",
        comment:
          "Уникальный проект с новаторским подходом к планировке, в котором каждый элемент был тщательно продуман, чтобы обеспечить не только эстетическое наслаждение, но и максимальный комфорт для жизни. Включает в себя: просторный зал, полноценная кухонная зона с обеденным столом, санузел, банная зона.",
      },
    ],
  },
];

export const woodColors = [
  {
    id: uuidv4(),
    img: "/woodcolors/1.jpg",
  },
  {
    id: uuidv4(),
    img: "/woodcolors/2.jpg",
  },
  {
    id: uuidv4(),
    img: "/woodcolors/3.jpg",
  },
  {
    id: uuidv4(),
    img: "/woodcolors/4.jpg",
  },
  {
    id: uuidv4(),
    img: "/woodcolors/5.jpg",
  },
  {
    id: uuidv4(),
    img: "/woodcolors/6.jpg",
  },
  {
    id: uuidv4(),
    img: "/woodcolors/7.jpg",
  },
  {
    id: uuidv4(),
    img: "/woodcolors/8.jpg",
  },
  {
    id: uuidv4(),
    img: "/woodcolors/9.jpg",
  },
  {
    id: uuidv4(),
    img: "/woodcolors/10.jpg",
  },
  {
    id: uuidv4(),
    img: "/woodcolors/11.jpg",
  },
  {
    id: uuidv4(),
    img: "/woodcolors/12.jpg",
  },
  {
    id: uuidv4(),
    img: "/woodcolors/13.jpg",
  },
  {
    id: uuidv4(),
    img: "/woodcolors/14.jpg",
  },
];
