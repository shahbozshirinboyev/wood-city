import { useEffect, useState } from "react";

function HomePage() {

  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => { window.removeEventListener("scroll", handleScroll); };
  }, []);

  return (
    <>
    <section
      className={`container h-svh text-justify border border-red-700 z-0 
        bg-[url('https://www.loghouse.fi/wp-content/uploads/2021/04/tilly-hirsitalo-ulkokuva-scaled.jpg')] bg-no-repeat bg-cover transition-all duration-300 ${ isScrolled ? 'rounded-[50px]' : ''}`}
    >
      <p className="text-[60px] text-white h-full flex text-center items-center justify-center  font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, illum!</p>
    </section>
    <section className="container">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis a doloribus, assumenda facilis dolorum libero dolorem at, eligendi expedita in inventore ex delectus provident autem. Incidunt delectus, quam soluta eveniet at corrupti facere nisi voluptate repellendus earum rerum fugiat voluptatem vel eos ut reiciendis, repudiandae quae accusantium tempora odio? Natus asperiores in quos fuga saepe nostrum, inventore ea ad cumque deserunt id ipsum libero quidem mollitia voluptatum ab dolore consequuntur beatae laboriosam repudiandae a expedita perferendis? Esse vel a illo quo quaerat, quisquam omnis maiores recusandae sint magni! A unde commodi repellat debitis necessitatibus. Blanditiis quod laudantium corrupti, hic accusamus expedita, veritatis officia placeat esse quaerat assumenda soluta dolore earum, eum adipisci similique neque? Neque debitis repellat veniam quis eum consectetur quia, suscipit expedita sint consequatur, tempore quo ullam tenetur aliquid fugit, odit nostrum inventore incidunt illum cum animi. Nobis eveniet excepturi maiores est illum. Minima fugit nisi corporis quis nulla quae in adipisci obcaecati optio praesentium recusandae nemo, qui excepturi eius accusantium, doloremque, quibusdam repellendus aliquam necessitatibus reiciendis ut voluptate? Necessitatibus aliquid, optio vitae fugit dolorum iste eaque est eius, quas nam nulla corporis perferendis reiciendis ad accusantium laborum iure ea dicta suscipit maiores at odit culpa? Necessitatibus nesciunt ducimus iste, consectetur distinctio nulla molestiae veritatis odio facilis illum soluta! Consequuntur tenetur maxime, libero qui illum nobis. Illo reiciendis, eum nobis eos ea a culpa nihil praesentium, deserunt suscipit laborum? In ipsa alias recusandae porro tenetur ducimus quo veritatis inventore minus reiciendis. In id accusantium fugiat soluta odio autem similique possimus vero sunt pariatur quae hic, molestias aspernatur consequuntur sequi ipsa tenetur, nam dolores eum placeat. Temporibus expedita at natus perspiciatis explicabo architecto ab, laudantium consequuntur totam sint aliquid tenetur! Tempora aut corporis possimus enim placeat omnis dicta expedita iste, veritatis obcaecati libero non voluptatem, quae provident cupiditate suscipit necessitatibus consectetur consequuntur voluptates quas cum unde? Praesentium expedita placeat, nulla ratione commodi at ut laboriosam harum adipisci sapiente soluta reprehenderit deserunt consectetur laudantium excepturi error inventore ipsam quam illo accusamus cum. Eaque expedita aspernatur iste repellat? Architecto corporis eaque dolores doloremque ex debitis tenetur, repellat deleniti! Numquam repudiandae ducimus nobis iusto blanditiis quisquam quibusdam vel, quo, est quasi odio! Ut cumque fugiat non qui vel ab. Voluptates repellat officiis alias nihil exercitationem, autem eligendi molestiae magnam neque ex sequi maiores adipisci quo error pariatur hic maxime quod repellendus debitis id perspiciatis, saepe quibusdam. Iusto aut excepturi accusantium itaque, officiis voluptatibus eius repellendus dolores, aspernatur, suscipit minima similique sequi quos fugit. Enim in illum commodi sed dicta! Inventore eveniet magni quidem dignissimos, saepe asperiores, a modi quas minima iste ea fugit provident tempora, praesentium accusamus laborum pariatur repellendus consequatur ipsa natus voluptas laudantium? Est sed nostrum dolorem provident aliquid eum tempore aliquam ad, veritatis nulla maxime hic debitis consequatur mollitia at eaque fugit praesentium similique aut pariatur numquam suscipit sunt ut. Fugiat nihil quibusdam enim sint cum provident, vero pariatur debitis, numquam quidem sunt qui! Rem ipsam accusamus perferendis exercitationem atque ipsum voluptate suscipit! Aliquid eveniet aspernatur iusto beatae aperiam.</p>
    </section>
    </>
  );
}

export default HomePage;
