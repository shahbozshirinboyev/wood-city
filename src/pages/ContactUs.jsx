import React from "react";

function ContactUs() {
  return (
    <section className="container my-[25px]">
      <p className="font-bold text-[32px] text-center  my-[25px]">
        Contact Us
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
          <div className="grid grid-cols-2 gap-4">
            
            <div className="border p-6">
              <i className="bi bi-telephone-forward-fill text-[22px] border p-2 rounded-lg"></i>
              <p className="mt-[15px] text-[20px] font-semibold">Phone Call</p>
              <span className="text-[18px] block mt-1">+998 94 005 78 56</span>
              <button className="border p-1 rounded-md mt-2 w-[150px]">Call Phone</button>
            </div>

            <div className="border p-6">
              <i className="bi bi-telegram text-[22px] border p-2 rounded-lg"></i>
              <p className="mt-[15px] text-[20px] font-semibold">Chat to Support</p>
              <span className="text-[18px] block mt-1">+998 94 005 78 56</span>
              <button className="border p-1 rounded-md mt-2 w-[150px]">Open Telegram</button>
            </div>

            <div className="col-span-2 border p-6">
              <i className="bi bi-geo-alt-fill text-[22px] border p-2 rounded-lg"></i>
              <p className="mt-[15px] text-[20px] font-semibold">Visit Us</p>
              <span className="text-[18px] block mt-1">Visit our offices</span>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque possimus numquam aspernatur adipisci quo unde!
              </p>
            </div>

        </div>

        <div>
            <iframe
              src="https://yandex.uz/map-widget/v1/?ll=69.281712%2C41.320213&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgoxNTQzMTQxMjAzEktPyrt6YmVraXN0b24sIFRvc2hrZW50LCBZdW51c29ib2QgeW_Ku25hbGlzaGksIEFiZHVsbGEgUW9kaXJpeSBtZXRybyBiZWthdGkiCg08kIpCFeZHJUI%2C&z=16.04"
              allowFullScreen
              className="relative w-full h-full"
            ></iframe>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
