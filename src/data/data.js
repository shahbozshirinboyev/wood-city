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

        image: "/furniture/doors/suzdal0.jpg",
        image1: "/furniture/doors/suzdal1.jpg",
        image2: "/no_images.jpg",
        image3: "/no_images.jpg",
        
        title: "Дверь Суздальская",
        price: "от  2 400 000 сум кв/м",

        availability: "Под заказ",
        material: "Сосна",
        size: "Возможно изготовление любых размеров.",
        comment: "Ручная работа, состаренное дерево."
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
        comment: "Ручная работа, состаренное дерево."
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
        comment: "Ручная работа, состаренное дерево."
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
        comment: "Ручная работа, состаренное дерево."
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
        comment: "Ручная работа, состаренное дерево."
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
        comment: "Ручная работа, состаренное дерево."
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
        comment: "Ручная работа, состаренное дерево."
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
        comment: "Ручная работа, состаренное дерево."
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
        comment: "Ручная работа, состаренное дерево."
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
        comment: "Ручная работа, состаренное дерево."
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
        comment: "Ручная работа, состаренное дерево."
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
        comment: "Ручная работа, состаренное дерево."
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
        material: "Сосна",
        size: "матраса 180х200 см",
        comment: "Ручная работа, состаренное дерево. Возможно изготовление любых размеров."
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
        comment: "Ручная работа, состаренное дерево. Возможно изготовление любых размеров."
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
        comment: "Ручная работа, состаренное дерево. Возможно изготовление любых размеров."
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
        comment: "Ручная работа, состаренное дерево. Возможно изготовление любых размеров."
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
        comment: "Ручная работа, состаренное дерево. Возможно изготовление любых размеров."
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
        comment: "Ручная работа, состаренное дерево. Возможно изготовление любых размеров."
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
        comment: "Ручная работа, состаренное дерево. Возможно изготовление любых размеров."
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
        comment: "Ручная работа, состаренное дерево. Возможно изготовление любых размеров."
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
        comment: "Ручная работа, состаренное дерево. Возможно изготовление любых размеров."
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
        comment: "Ручная работа, состаренное дерево. Возможно изготовление любых размеров."
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
        comment: "Ручная работа, состаренное дерево. Возможно изготовление любых размеров."
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
        comment: "Ручная работа, состаренное дерево. Возможно изготовление любых размеров."
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
        comment: "Ручная работа, состаренное дерево. Возможно изготовление любых размеров."
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
        comment: "Ручная работа, состаренное дерево. Возможно изготовление любых размеров."
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
        comment: "Ручная работа, состаренное дерево. Возможно изготовление любых размеров."
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
        comment: "Ручная работа, состаренное дерево. Возможно изготовление любых размеров."
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
        comment: "Ручная работа, состаренное дерево. Возможно изготовление любых размеров."
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
        comment: "Ручная работа, состаренное дерево. Возможно изготовление любых размеров."
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
        comment: "Ручная работа, состаренное дерево. Возможно изготовление любых размеров."
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
        comment: "Ручная работа, состаренное дерево. Возможно изготовление любых размеров."
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
        comment: "Ручная работа, состаренное дерево. Возможно изготовление любых размеров."
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
        comment: "Ручная работа, состаренное дерево. Возможно изготовление любых размеров."
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
        comment: "Ручная работа, состаренное дерево. Возможно изготовление любых размеров."
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
        comment: "Ручная работа, состаренное дерево. Возможно изготовление любых размеров."
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
        comment: "Ручная работа, состаренное дерево. Возможно изготовление любых размеров."
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
        comment: "Ручная работа, состаренное дерево. Возможно изготовление любых размеров."
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
        comment: "Ручная работа, состаренное дерево. Возможно изготовление любых размеров."
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
        comment: "Ручная работа, состаренное дерево. Возможно изготовление любых размеров."
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
        comment: "Ручная работа, состаренное дерево. Возможно изготовление любых размеров."
      },
    ],
  },

  {
    id: 3,
    name: "Люстры - Светильники",
    counts: [
      {
        id: uuidv4(),

        image: "/no_images.jpg",
        image1: "/no_images.jpg",
        image2: "/no_images.jpg",
        image3: "/no_images.jpg",
        
        title: "-",
        price: "от - --- --- сум",

        availability: "Под заказ",
        material: "-",
        size: "-",
        comment: "Ручная работа, состаренное дерево. Возможно изготовление любых размеров."
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
        comment: "Ручная работа, состаренное дерево. Возможно изготовление любых размеров."
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
        comment: "Ручная работа, состаренное дерево. Возможно изготовление любых размеров."
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
        comment: "Ручная работа, состаренное дерево. Возможно изготовление любых размеров."
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
        comment: "Ручная работа, состаренное дерево. Возможно изготовление любых размеров."
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
        comment: "Ручная работа, состаренное дерево. Возможно изготовление любых размеров."
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
        comment: "Ручная работа, состаренное дерево. Возможно изготовление любых размеров."
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
        comment: "Ручная работа, состаренное дерево. Возможно изготовление любых размеров."
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
        comment: "Ручная работа, состаренное дерево. Возможно изготовление любых размеров."
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
        comment: "Ручная работа, состаренное дерево. Возможно изготовление любых размеров."
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
        material: "из слэба Платан, Орех, Карагач",
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
        material: "из слэба Платан, Орех, Карагач",
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
        material: "из слэба Платан, Орех, Карагач",
        size: "140x90 см",
        comment: "Ручная работа, состаренное дерево. Возможно изготовление любых размеров."
      },
    ],
  },

  {
    id: 7,
    name: "Декоративные Балки",
    counts: [
      {
        id: uuidv4(),

        image: "/furniture/decorative_beams/decorativebeams0.jpg",
        image1: "/furniture/decorative_beams/decorativebeams1.jpg",
        image2: "/furniture/decorative_beams/decorativebeams2.jpg",
        image3: "/furniture/decorative_beams/decorativebeams3.jpg",
        
        title: "Декоративные фалщ балки",
        price: "от 250 000 сум за метр",

        availability: "Под заказ",
        material: "Сосна",
        size: "15х15х15 см П образный",
        comment: "Ручная работа, состаренное дерево. Возможно изготовление любых размеров."
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
    id: 9,
    name: "Kомоды",
    counts: [
      {
        id: uuidv4(),

        image: "/no_images.jpg",
        image1: "/no_images.jpg",
        image2: "/no_images.jpg",
        image3: "/no_images.jpg",
        
        title: "-",
        price: "от - --- --- сум",

        availability: "Под заказ",
        material: "-",
        size: "-",
        comment: "Ручная работа, состаренное дерево. Возможно изготовление любых размеров."
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

        image: "/houses/frame_houses/hometerrace0.jpg",
        image1: "/houses/frame_houses/hometerrace1.jpg",
        image2: "/houses/frame_houses/hometerrace2.jpg",
        image3: "/houses/frame_houses/hometerrace3.jpg",

        plan2d: "/houses/frame_houses/hometerrace0_plan2d.jpg",

        title: "Дом 10 на 10 с террасой",
        price: "Под Крышу: от 4 400 000 сум",
        
        project: "Дом",
        square: "91 м²",
        size: "10x10 м",
        comment: "Уникальный проект с новаторским подходом к планировке, в котором каждый элемент был тщательно продуман, чтобы обеспечить не только эстетическое наслаждение, но и максимальный комфорт для жизни. Включает в себя: просторный зал, полноценная кухонная зона с обеденным столом, санузел, банная зона."
      },
      {
        id: uuidv4(),

        image: "/houses/frame_houses/bighometerrace0.jpg",
        image1: "/houses/frame_houses/bighometerrace1.jpg",
        image2: "/houses/frame_houses/bighometerrace2.jpg",
        image3: "/houses/frame_houses/bighometerrace3.jpg",

        plan2d: "/houses/frame_houses/bighometerrace0_plan2d.jpg",

        title: "Дом 11 на 6 с большой террасой",
        price: "Под Крышу: от 4 400 000 сум",
        
        project: "Дом",
        square: "66 м²",
        size: "11x6 м",
        comment: "Уникальный проект с новаторским подходом к планировке, в котором каждый элемент был тщательно продуман, чтобы обеспечить не только эстетическое наслаждение, но и максимальный комфорт для жизни. Включает в себя: просторный зал, полноценная кухонная зона с обеденным столом, санузел, банная зона."
      },
      {
        id: uuidv4(),

        image: "/houses/frame_houses/homegableroof0.jpg",
        image1: "/houses/frame_houses/homegableroof1.jpg",
        image2: "/houses/frame_houses/homegableroof2.jpg",
        image3: "/houses/frame_houses/homegableroof3.jpg",

        plan2d: "/houses/frame_houses/homegableroof0_plan2d.jpg",

        title: "Дом 6 на 4 с двухскатной крышей",
        price: "Под Крышу: от 4 400 000 сум",
        
        project: "Дом",
        square: "21 м²",
        size: "6x4 м",
        comment: "Уникальный проект с новаторским подходом к планировке, в котором каждый элемент был тщательно продуман, чтобы обеспечить не только эстетическое наслаждение, но и максимальный комфорт для жизни. Включает в себя: просторный зал, полноценная кухонная зона с обеденным столом, санузел, банная зона."
      },
      {
        id: uuidv4(),

        image: "/houses/frame_houses/home88terrace0.jpg",
        image1: "/houses/frame_houses/home88terrace1.jpg",
        image2: "/houses/frame_houses/home88terrace2.jpg",
        image3: "/houses/frame_houses/home88terrace3.jpg",

        plan2d: "/houses/frame_houses/home88terrace0_plan2d.jpg",

        title: "Дом 8 на 8 с террасой",
        price: "Под Крышу: от 4 400 000 сум",
        
        project: "Дом",
        square: "64 м²",
        size: "8x8 м",
        comment: "Уникальный проект с новаторским подходом к планировке, в котором каждый элемент был тщательно продуман, чтобы обеспечить не только эстетическое наслаждение, но и максимальный комфорт для жизни. Включает в себя: просторный зал, полноценная кухонная зона с обеденным столом, санузел, банная зона."
      },
      {
        id: uuidv4(),

        image: "/houses/frame_houses/home88terrace20.jpg",
        image1: "/houses/frame_houses/home88terrace21.jpg",
        image2: "/houses/frame_houses/home88terrace22.jpg",
        image3: "/houses/frame_houses/home88terrace23.jpg",

        plan2d: "/houses/frame_houses/home88terrace20_plan2d.jpg",

        title: "Дом 8 на 8 с террасой 2",
        price: "Под Крышу: от 4 400 000 сум",
        
        project: "Дом",
        square: "76 м²",
        size: "8x8 м",
        comment: "Уникальный проект с новаторским подходом к планировке, в котором каждый элемент был тщательно продуман, чтобы обеспечить не только эстетическое наслаждение, но и максимальный комфорт для жизни. Включает в себя: просторный зал, полноценная кухонная зона с обеденным столом, санузел, банная зона."
      },
      {
        id: uuidv4(),

        image: "/houses/frame_houses/housewithbedrooms0.jpg",
        image1: "/houses/frame_houses/housewithbedrooms1.jpg",
        image2: "/houses/frame_houses/housewithbedrooms2.jpg",
        image3: "/houses/frame_houses/housewithbedrooms3.jpg",

        plan2d: "/houses/frame_houses/housewithbedrooms0_plan2d.jpg",

        title: "Каркасный дом 10 на 11 с 3 спальнями",
        price: "Под Крышу: от 4 400 000 сум",
        
        project: "Дом",
        square: "101 м²",
        size: "11x10 м",
        comment: "Уникальный проект с новаторским подходом к планировке, в котором каждый элемент был тщательно продуман, чтобы обеспечить не только эстетическое наслаждение, но и максимальный комфорт для жизни. Включает в себя: просторный зал, полноценная кухонная зона с обеденным столом, санузел, банная зона."
      },
    ],
  },

  {
    id: 2,
    name: "Бани и Сауны",
    counts: [
      {
        id: uuidv4(),

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
        comment: "Уникальный проект с новаторским подходом к планировке, в котором каждый элемент был тщательно продуман, чтобы обеспечить не только эстетическое наслаждение, но и максимальный комфорт для жизни. Включает в себя: просторный зал, полноценная кухонная зона с обеденным столом, санузел, банная зона."
      },
      {
        id: uuidv4(),

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
        comment: "Уникальный проект с новаторским подходом к планировке, в котором каждый элемент был тщательно продуман, чтобы обеспечить не только эстетическое наслаждение, но и максимальный комфорт для жизни. Включает в себя: просторный зал, полноценная кухонная зона с обеденным столом, санузел, банная зона."
      },
      {
        id: uuidv4(),

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
        comment: "Уникальный проект с новаторским подходом к планировке, в котором каждый элемент был тщательно продуман, чтобы обеспечить не только эстетическое наслаждение, но и максимальный комфорт для жизни. Включает в себя: просторный зал, полноценная кухонная зона с обеденным столом, санузел, банная зона."
      },
      {
        id: uuidv4(),

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
        comment: "Уникальный проект с новаторским подходом к планировке, в котором каждый элемент был тщательно продуман, чтобы обеспечить не только эстетическое наслаждение, но и максимальный комфорт для жизни. Включает в себя: просторный зал, полноценная кухонная зона с обеденным столом, санузел, банная зона."
      },
    ],
  },

  {
    id: 3,
    name: "Беседки",
    counts: [
      {
        id: uuidv4(),

        image: "/houses/terrace/terrace0.jpg",
        image1: "/houses/terrace/terrace1.jpg",
        image2: "/houses/terrace/terrace2.jpg",
        image3: "/no_images.jpg",

        plan2d: "/no_images.jpg",

        title: "Беседка",
        price: "от - --- --- сум",
        
        project: "Беседка",
        square: "10 м²",
        size: "ДxВxГ: 220x240x45 см",
        comment: "Уникальный проект с новаторским подходом к планировке, в котором каждый элемент был тщательно продуман, чтобы обеспечить не только эстетическое наслаждение, но и максимальный комфорт для жизни. Включает в себя: просторный зал, полноценная кухонная зона с обеденным столом, санузел, банная зона."
      },
    ],
  },

  // {
  //   id: 4,
  //   name: "Граф",
  //   counts: [
  //     {
  //       id: uuidv4(),
  //       image: "/furniture/7.jpg",
  //       title: "1-Стулья",
  //       price: "100",
  //       date: "29392838",
  //     },
  //     {
  //       id: uuidv4(),
  //       image: "/furniture/8.jpg",
  //       title: "2-Стулья",
  //       price: "100",
  //       date: "29392838",
  //     },
  //   ],
  // },

  // {
  //   id: 5,
  //   name: "Голд",
  //   counts: [
  //     {
  //       id: uuidv4(),
  //       image: "/furniture/9.jpg",
  //       title: "1-Эпоксидные",
  //       price: "100",
  //       date: "29392838",
  //     },
  //     {
  //       id: uuidv4(),
  //       image: "/furniture/10.jpg",
  //       title: "2-Эпоксидные",
  //       price: "100",
  //       date: "29392838",
  //     },
  //   ],
  // },

  // {
  //   id: 6,
  //   name: "Форест",
  //   counts: [
  //     {
  //       id: uuidv4(),
  //       image: "/furniture/11.jpg",
  //       title: "1-Декоративные",
  //       price: "100",
  //       date: "29392838",
  //     },
  //     {
  //       id: uuidv4(),
  //       image: "/furniture/12.jpg",
  //       title: "2-Декоративные",
  //       price: "100",
  //       date: "29392838",
  //     },
  //   ],
  // },

  // {
  //   id: 7,
  //   name: "Браун",
  //   counts: [
  //     {
  //       id: uuidv4(),
  //       image: "/furniture/13.jpg",
  //       title: "1-Кухни",
  //       price: "100",
  //       date: "29392838",
  //     },
  //     {
  //       id: uuidv4(),
  //       image: "/furniture/14.jpg",
  //       title: "2-Кухни",
  //       price: "100",
  //       date: "29392838",
  //     },
  //   ],
  // },

  // {
  //   id: 8,
  //   name: "Дeрeвянный домик.",
  //   counts: [
  //     {
  //       id: uuidv4(),
  //       image: "/furniture/15.jpg",
  //       title: "1-Комоды",
  //       price: "100",
  //       date: "29392838",
  //     },
  //     {
  //       id: uuidv4(),
  //       image: "/furniture/16.jpg",
  //       title: "2-Комоды",
  //       price: "100",
  //       date: "29392838",
  //     },
  //   ],
  // },
];
