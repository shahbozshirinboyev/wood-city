import React from "react";
import Partners from "../components/Partners";

function AboutUs() {

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

      <p className="font-bold text-[32px] text-center my-[25px]"> О нас </p>

      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="text-[45px] font-bold">Часть чего-то большего</p>
          <span className="my-4 block text-[22px]">
            DP-Group — это группа компаний, занимающаяся коммерческой недвижимостью, малоэтажным строительством и развитием сферы внутреннего туризма в России. 
          </span>
          <span className="my-4 block text-[22px]">
            Все проекты DP-Group активно развиваются по территории России и СНГ. Имеем ряд успешных проектов в сфере загородного отдыха и малоэтажного строительства.
          </span>
          <button className="btn mt-[35px] text-[22px]">Узнать больше</button>
        </div>
        <div className="justify-end grid">
          <img src="./logo/wood_city_vertical.png" alt="" className="w-[250px]" />
        </div>
        
      </div>

      

      <p className="font-bold text-[32px] text-center my-[25px] "> Partners </p>

      <div>
        <Partners images={partners} from={0} to={"-100%"} />
      </div>

      <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci facere unde, laudantium cupiditate est qui eveniet fugiat facilis quos sed magni atque ex nihil sit itaque aperiam numquam corporis commodi iure! Possimus maiores dignissimos voluptatibus rem, vel deleniti ea nisi recusandae, quam at dolorum nostrum facere vitae aut laudantium similique expedita magnam. Totam ullam ad enim? Eius a nulla alias quae aliquam, tenetur praesentium dignissimos dolores voluptates aperiam obcaecati sapiente cupiditate atque odio voluptas, fuga vitae earum! Voluptatem consectetur ipsum accusamus eveniet exercitationem, assumenda provident, est consequuntur architecto velit optio voluptate, corrupti quod unde. Totam dolorum culpa dolore. Dignissimos veniam natus eius, labore enim libero tempora eum eligendi facilis ratione consequuntur dolores recusandae voluptate! Pariatur, earum perferendis asperiores cum nesciunt adipisci itaque eos sed non aliquam doloremque nam? Deleniti voluptate neque quae porro id consectetur dolor totam labore! Voluptate rerum quisquam maiores asperiores beatae deserunt a numquam natus odit similique hic nulla vero obcaecati delectus neque mollitia commodi dolores, qui repellat saepe consequatur! Vel sequi porro maxime perferendis esse sunt labore voluptatum, autem nihil nesciunt fugiat earum, fuga blanditiis aliquid nemo! Enim maiores possimus consequatur nemo corrupti delectus doloribus neque laudantium quae at. Placeat qui nisi, non omnis quae, repellat provident voluptas eaque earum quis odio iure cumque modi porro quidem natus ea ratione nihil nobis adipisci accusantium, blanditiis et vel. Nobis nisi saepe nostrum suscipit corrupti. Corporis excepturi numquam aperiam maiores labore error temporibus nam veritatis aspernatur explicabo tenetur corrupti, amet, voluptate distinctio suscipit, nobis incidunt vel eveniet esse! Blanditiis, similique voluptatum quibusdam, nemo magni consequatur alias quaerat officiis exercitationem autem voluptatem culpa numquam aliquam? Dolorum in voluptatum est eum iusto quaerat commodi harum consequuntur asperiores officia. Aspernatur, repellat itaque eaque impedit vel eos corrupti expedita ex nemo iure necessitatibus ducimus consequuntur saepe modi ea temporibus placeat! Illum explicabo, dolor quisquam aliquam doloremque assumenda tempora quod sapiente ducimus, nobis suscipit. Blanditiis veniam consectetur eligendi, totam fuga repellendus voluptates porro quis delectus corrupti commodi, voluptate fugiat sit aperiam omnis quos quasi ipsa ab dicta quod perferendis! Praesentium, labore autem nam perferendis totam suscipit blanditiis minus saepe placeat! Illo sapiente nihil inventore reiciendis ullam. Cum quis vero officiis vitae, deleniti nobis quo maxime ab eius dolorem obcaecati possimus sequi. Laborum odit reiciendis ratione illum iusto aliquid! Ipsum voluptatem quisquam nihil excepturi ex nulla, sequi facere? Aspernatur laudantium nisi voluptates unde maiores, nobis dolore modi exercitationem consequatur. Eaque veniam minus deleniti dicta eligendi soluta nam libero animi velit ipsam accusantium aspernatur saepe temporibus consequuntur nihil iusto molestias, neque perferendis. At accusamus sapiente id fuga ratione. Quidem dolore, autem quas eos vero in vel quaerat temporibus, aliquam ducimus eaque! Esse dolorem ipsa consectetur placeat vero, eligendi, aperiam officia distinctio magni dolore, adipisci incidunt similique at. Autem nisi odit voluptatem aliquam perferendis debitis voluptatibus dolores quo ipsum esse ipsam eveniet veniam ratione perspiciatis tempore impedit dignissimos atque fugiat architecto odio quod, recusandae cupiditate minus vel. Illo ratione soluta quas accusantium aliquam! Aut velit modi soluta ullam qui, atque tempora nemo rerum nam consectetur unde dicta voluptas veniam libero, eius omnis culpa. Neque nihil quae ab perferendis libero dolorum hic fuga sit! Rerum libero neque dolore repellat reprehenderit eum eaque beatae quo quibusdam illum earum sint fugit alias minima nulla magni magnam, ullam sed et dolorum! Perferendis, molestias. Eum, accusantium! Corrupti blanditiis, repellendus delectus, quibusdam harum, aperiam molestias sequi beatae laboriosam aspernatur reiciendis eaque fugit placeat perferendis nobis recusandae molestiae illum quis nemo iste autem. Sapiente quaerat quibusdam corporis, adipisci aspernatur, repudiandae ut voluptatum fuga accusamus quo commodi ullam earum repellendus. Dignissimos odit blanditiis alias dolorum nobis amet sequi porro iste qui. Voluptate, tempore exercitationem veniam nesciunt aliquam hic neque reiciendis obcaecati, repudiandae ex impedit mollitia esse, quo quam! Autem, reprehenderit cumque molestiae dolores odio beatae distinctio est obcaecati doloribus similique quidem quos facilis? Placeat nesciunt repudiandae quo voluptatem et similique repellat dignissimos tempora! Voluptate mollitia atque asperiores aspernatur itaque unde recusandae quasi cum voluptatibus reiciendis pariatur maxime, consectetur dolor in provident commodi exercitationem laudantium officiis quo beatae debitis alias dolores esse. Voluptates maiores fugiat aliquid minima blanditiis magni dolorum pariatur iste quia fuga, quaerat eligendi recusandae sequi amet assumenda vitae ipsum saepe exercitationem provident tempore quisquam praesentium. Laborum quisquam commodi voluptatibus, architecto aspernatur earum. </p>



    </section>
  );
}

export default AboutUs;
