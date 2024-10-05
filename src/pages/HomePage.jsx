import React, { useEffect, useState } from "react";

function HomePage() {
  const arr = [
    {
      id: 0,
      image: "./home_img/1.jpeg",
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
      image: "./home_img/6.jpeg",
      title: "SLIDER",
      name: "EAGLE",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.",
    },
    {
      id: 6,
      image: "./home_img/1.jpeg",
      title: "SLIDER",
      name: "KINGFISHER",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.",
    },
    {
      id: 7,
      image: "./home_img/8.jpg",
      title: "SLIDER",
      name: "PARROT",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.",
    },
    {
      id: 8,
      image: "./home_img/9.jpg",
      title: "SLIDER",
      name: "HERON",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.",
    },
    {
      id: 9,
      image: "./home_img/10.jpg",
      title: "SLIDER",
      name: "BUTTERFLY",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.",
    },
    {
      id: 10,
      image: "./home_img/11.jpg",
      title: "SLIDER",
      name: "PARROT",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.",
    },
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
              : "w-[180px] h-[250px] top-[60%] rounded-[20px]"
              } bg-cover bg-center shadow-lg`}
            style={{
              backgroundImage: `url(${item.image})`,
              left: index === 0 ? "0" : `calc(50% + ${(index - 1) * 200}px)`,
            }}
          >
            {index === 0 && (
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
            )}
          </div>
        ))}

        <div className="absolute text-white top-[500px] left-[100px] select-none">
          <button className="py-1 px-6 border rounded-xl mr-4 hover:bg-white hover:text-black transition-all duration-300" onClick={handlePrevious}> {"<"} </button>
          <button className="py-1 px-6 border rounded-xl mr-4 hover:bg-white hover:text-black transition-all duration-300" onClick={handleNext}> {">"} </button>
        </div>

      </div>


      <div>

        <p className="font-bold text-[32px] text-center my-[25px]">
          Для Гос заказов ЕИС
        </p>

        <div className="card card-side bg-base-100 border">

          <figure>
            <div className="carousel carousel-vertical h-96">
              <div className="carousel-item h-full w-[550px]">
                <img src="./state_orders/1.jpg" className="object-cover" />
              </div>
              <div className="carousel-item h-full w-[550px]">
                <img src="./state_orders/2.jpg" className="object-cover" />
              </div>
              <div className="carousel-item h-full w-[550px]">
                <img src="./state_orders/3.jpg" className="object-cover" />
              </div>
            </div>
          </figure>

          <div className="card-body">
            <h2 className="card-title">New movie is released!</h2>
            <p>Click the button to watch on Jetflix app.</p>
            <div className="card-actions justify-end">
              <button className="btn"><i class="bi bi-card-list"></i> Оставить заявку</button>
              <button className="btn"><i class="bi bi-telephone"></i> +998 (87) 456 73 23</button>
            </div>
          </div>

        </div>

      </div>

      <p className="mt-[25px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
        accusantium illo amet, tempore dolorum laudantium corporis saepe.
        Aliquid eveniet explicabo corrupti corporis alias, nam, temporibus
        reprehenderit voluptatem ut repudiandae sed deserunt! Nihil id nemo
        fugit. Optio labore voluptatibus distinctio suscipit delectus non
        reiciendis deleniti, quasi voluptas. Omnis veniam provident culpa
        corrupti eligendi cupiditate adipisci quibusdam blanditiis debitis
        reiciendis numquam dolor tempore aliquid molestiae nisi cum, sint
        distinctio harum asperiores itaque assumenda! Facilis sapiente
        necessitatibus assumenda. Hic itaque assumenda cumque quod impedit
        incidunt ut odio deleniti voluptatibus quibusdam fugit, vitae
        aspernatur, quasi voluptatem architecto inventore consequatur nam?
        Possimus ipsa, quod distinctio iste architecto animi harum facere non?
        Incidunt, eligendi? Esse delectus harum dicta laboriosam atque mollitia
        tempore hic adipisci? Sunt, laborum soluta facere corporis blanditiis
        optio placeat velit deserunt sed ab eius inventore iusto fuga rerum
        libero, non dolorem rem quo autem temporibus ipsam et, maxime possimus!
        Animi nihil excepturi libero suscipit non debitis error ullam, illum
        cum? Nihil optio cum mollitia similique quae, harum consequuntur aperiam
        alias culpa dolor a dolores officia maiores, earum quia natus libero
        temporibus, debitis facilis assumenda voluptas! Voluptate numquam, illo
        sint, nulla ab veniam eveniet repellat quae reprehenderit praesentium,
        adipisci ipsum at rerum impedit sequi voluptatibus facere quibusdam cum
        accusantium tempora? Delectus iste optio itaque libero nobis provident,
        laudantium amet a officia sit exercitationem aspernatur cum quod numquam
        aperiam necessitatibus animi quaerat possimus et nulla. Esse eum
        incidunt recusandae sapiente quis labore molestias nesciunt dolor ipsum,
        voluptas culpa quibusdam aspernatur ipsa rerum. A deleniti, cupiditate
        officia consequuntur praesentium odit nisi nam officiis soluta voluptas
        enim maxime minima blanditiis expedita ex nostrum eos odio eveniet quia
        exercitationem ea. Impedit labore rem laudantium reiciendis porro culpa
        quod perspiciatis fuga nesciunt enim, qui eius maiores vero pariatur,
        asperiores ducimus ea tenetur? Quisquam assumenda officiis natus,
        similique perspiciatis asperiores. Vitae voluptas atque, impedit velit
        quibusdam ab molestiae nostrum maxime necessitatibus libero nihil alias
        illo sit aliquid voluptates nisi minima dolore laudantium doloribus et!
        Ducimus repellendus in excepturi cum earum! Dolor officia consequatur
        qui sunt, commodi tempora dolorem quo consequuntur optio ducimus iusto
        assumenda aut! Id fuga vel soluta perferendis eaque ea ipsam, velit
        magni debitis aliquid, eos doloribus dolores ab ipsum ullam labore
        commodi et culpa fugit similique quae sunt? Laboriosam architecto
        ducimus accusamus! Sit debitis iusto enim. Vel optio voluptatum commodi
        ullam aliquid voluptatibus asperiores, labore explicabo minima ratione
        aut quas, deleniti harum? Velit iure libero odio delectus voluptatum cum
        iusto, non nemo? A deserunt reprehenderit at accusantium facilis quia
        iusto cum, sequi eum ad nisi dolorum sunt nemo voluptatibus corrupti
        voluptatem provident explicabo veniam itaque. Fuga exercitationem, animi
        sit veniam quos facilis reprehenderit doloribus alias, eos ad magnam
        quia, sint corrupti commodi esse eius cum architecto delectus?
        Consectetur doloremque maiores quaerat dolor? Doloribus ex rerum culpa,
        aliquam quaerat placeat animi, et laboriosam exercitationem quas
        quibusdam quod, perspiciatis ipsam expedita veritatis reprehenderit est
        recusandae esse assumenda sapiente qui! Nisi delectus et, dicta fugiat
        explicabo unde libero eius provident doloremque optio? Adipisci ipsam,
        reiciendis deserunt harum cum nulla earum eius suscipit deleniti
        obcaecati est eos, consectetur laudantium inventore porro autem ducimus
        consequuntur veritatis id impedit iure at? Similique consectetur eveniet
        error vitae facilis quis saepe veniam vel fugiat hic eos corporis quo
        soluta deserunt optio, recusandae perferendis animi velit repellendus ea
        accusantium et veritatis! Illo voluptate temporibus laudantium quibusdam
        quasi enim repudiandae cupiditate, cum reprehenderit impedit consequatur
        quam eaque hic, aperiam sunt, amet et magni vel minus accusamus! Iure at
        doloribus corporis temporibus. Ab sint eos ullam incidunt vero neque
        laudantium voluptate illo quidem, atque recusandae quisquam cupiditate
        ut maiores rem itaque. Deserunt assumenda molestiae temporibus eaque
        maiores, perspiciatis in possimus quam reprehenderit quisquam ipsa
        tempora quaerat. At dicta alias hic sed nihil voluptates beatae ab
        recusandae neque magnam consequuntur perspiciatis debitis, modi suscipit
        eos dolorum voluptate iusto officia ea error unde necessitatibus!
        Voluptatum perspiciatis consequatur quos cumque distinctio ducimus
        assumenda totam odio, possimus molestiae voluptatibus tenetur accusamus
        maiores maxime atque omnis impedit commodi asperiores et veniam
        necessitatibus illo! Eum, repellendus, quibusdam placeat distinctio
        officiis rem ipsum molestiae alias vitae architecto blanditiis
        excepturi! Debitis saepe nihil ab nam impedit laudantium similique quo
        tempora voluptas quidem ad porro odit cum dolor facere recusandae, esse
        autem necessitatibus. Ea error at delectus fuga ex porro consequuntur
        dolorum sapiente repellat dolor vitae illum, corrupti libero, quam
        tempore quos quasi vero enim expedita adipisci! Repudiandae maiores
        optio sapiente harum est quae inventore magnam veritatis asperiores
        neque earum, perferendis reprehenderit dignissimos laboriosam cumque
        atque rem ut itaque reiciendis qui vero praesentium quo veniam.
        Perspiciatis cupiditate id vitae libero cum error assumenda, minus sit
        doloremque nulla quasi ad adipisci, rem corrupti repellendus non natus
        odit facere. Dolore earum id at, sunt, recusandae laudantium, tempora
        nesciunt error vero ad commodi! Eveniet perferendis error modi incidunt
        molestiae cumque exercitationem, quod explicabo eius magni quis quas
        maiores ullam dignissimos similique provident quaerat quos aut, nam
        recusandae. Minima soluta id iusto neque. Nobis aliquam ad illum quaerat
        explicabo ullam laborum magni ea voluptatibus aut inventore,
        reprehenderit perferendis earum quidem, unde ratione tempora illo
        cupiditate asperiores iste repellendus dignissimos debitis? Quas
        perferendis amet voluptate aut fugiat, provident temporibus ex deleniti,
        facere quibusdam eius molestias excepturi suscipit eos ipsa cumque
        laboriosam incidunt quisquam cupiditate mollitia ducimus ipsam modi.
        Illum, ipsam delectus temporibus cupiditate ipsum quidem cum vel neque
        pariatur deleniti minus dicta nihil. Eveniet quisquam repellat alias,
        ipsa quis quidem reiciendis itaque illo voluptas nemo vero perferendis
        nisi architecto totam odit debitis voluptatum inventore ducimus unde
        eius incidunt odio. Autem ipsam quod aut nam esse. Molestiae tempore in
        alias velit autem, labore neque dolorum, vero omnis cumque reiciendis,
        odit dolorem mollitia! Consequatur dolor facilis possimus, nam ipsam,
        cumque iusto quae iste blanditiis aliquam, ducimus pariatur minima
        officia corrupti tempore laborum quisquam debitis. Nesciunt nihil
        suscipit voluptate ea eum quaerat vitae necessitatibus culpa impedit
        consectetur a labore, reprehenderit accusamus, itaque beatae explicabo
        quis. Natus alias saepe in expedita fugiat et ipsam exercitationem quia
        est? Sunt repellendus ex eius, minima in pariatur corporis excepturi,
        laboriosam quae, fugit eligendi odit ut debitis nulla at aperiam.
      </p>

    </section>
  );
}

export default HomePage;
