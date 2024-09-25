import React from "react";

function WoodenFurniture() {
  return (
    <section className="container border border-red-700">

      <div className="border border-red-700">
        <p className="text-olivegreen font-bold text-[32px] text-center my-[25px]">WoodenFurniture</p>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-3 gap-4">

        <div class="row-span-2 col-span-2 bg-beige">

          <img src="https://optim.tildacdn.com/stor3666-3764-4565-a337-306435306538/-/format/webp/37587386.jpg" alt="" className="w-full h-full" />

        </div>

        <div class="bg-beige">
          <img src="https://optim.tildacdn.com/tild3639-3263-4430-b766-643137633138/-/format/webp/4-min.jpg" alt="" className="w-full h-full  blur-[2px]" />

          {/* <button className="btn">Client</button>

          <p>Become a regular customer</p>

          <p>Enter in the furniture world</p> */}

        </div>

        <div class="bg-beige">
          <img src="https://optim.tildacdn.com/tild3435-6464-4663-a436-383033653562/-/format/webp/9-min.jpg" alt="" className="w-full h-full  blur-[2px]" />

          {/* <button className="btn">Product</button> */}

          <p></p>

        </div>

      </div>

    </section>
  );
}

export default WoodenFurniture;
