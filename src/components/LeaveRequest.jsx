import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import { useState } from "react";

// react-hot-toast
import { Toaster, toast } from "react-hot-toast";

// http
import http from "../services/http";

function LeaveRequest() {
  const [nameValue, setNameValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nameValue) {
      toast.error("Введите свое имя!");
      return;
    }
    if (!phoneValue) {
      toast.error("Введите свой номер телефона!");
      return;
    }
    if (!(phoneValue.length >= 11)) {
      toast.error("Номер телефона введен неверно :(");
      return;
    }
    toast.promise(
      http.post("/sendMessage", {
        chat_id: "-1002294640036", // test my group
        // chat_id: "-1001631640240", // main
        // yangi chat ID olish uchun so'rov yuborish kerak: https://api.telegram.org/bot8110745041:AAGgqllrE9mwsCkQK8mhFsiG2quMGJHkD8I/getUpdates
        //                                                  https://api.telegram.org/bot${token}/getUpdates
        text: `Новый запрос:\n\nИмя: ${nameValue}\nТелефон: +${phoneValue}\n\nКлиент попросил, чтобы с ним связались по номеру телефона.`,
      }),
      {
        loading: "Отправка сообщения...", // Kutish holati
        success: (response) => {
          closeModal();
          //   console.log(response); // Muvaffaqiyatli natija
          return <b>Сообщение успешно отправлено!</b>;
        },
        error: (error) => {
          //   console.log(error); // Xato holati
          return <b>Не удалось отправить сообщение.</b>;
        },
      }
    );
  };

  const closeModal = () => {
    const modal = document.getElementById("LeaveRequest");
    modal.close(); // Modalni yopish
    setNameValue(""); // Ism inputini tozalash
    setPhoneValue("998"); // Telefon raqami inputini tozalash
  };

  return (
    <>
      <dialog id="LeaveRequest" className="modal">
        <Toaster />

        <div className="modal-box w-11/12 max-w-xl p-0 ">
          {/* Modal header Start */}
          <form
            method="dialog"
            className="border-b-[2px] border-base-200 h-[60px] grid grid-cols-2 items-center px-[24px] bg-custom-green-10"
          >
            <span className="text-custom-green-dark font-bold">
              Оставить заявку
            </span>
            <div className="text-end">
              <button className="btn btn-sm border-0 btn-circle text-custom-green-dark bg-custom-green-10 hover:bg-custom-green-30">
                {" "}
                ✕{" "}
              </button>
            </div>
          </form>
          {/* Modal header End */}

          <div className="p-4">
            <p className="text-center py-4 font-bold text-[20px] md:text-[22px] lg:text-[24px] xl:text-[26px]">
              Заказать обратный звонок
            </p>

            <p className="p-4 text-center text-[14px] lg:text-[16px]">
              Специалист компании свяжется с вами в ближайшее время, а на вашу
              почту будет отправлена презентация проекта для ознакомления.
            </p>

            <form action="" className="px-6" onSubmit={handleSubmit}>
              <label className="form-control w-full mb-2">
                <div className="label">
                  <span className="label-text">Ваше имя:</span>
                  {/* <span className="label-text-alt">Top Right label</span> */}
                </div>

                <input
                  value={nameValue} // Ism qiymatini boshqarish
                  onChange={(e) => setNameValue(e.target.value)} // Ism o'zgarganda yangilash
                  type="text"
                  required
                  placeholder="Ваше имя"
                  className="input input-bordered w-full"
                  style={{
                    borderRadius: ".25rem",
                    height: "45px",
                    fontSize: "16px",
                  }}
                />
              </label>

              <label className="form-control w-full mb-10">
                <div className="label">
                  <span className="label-text">Ваше номер телефона:</span>
                  {/* <span className="label-text-alt">Top Right label</span> */}
                </div>

                <PhoneInput
                  value={phoneValue} // Telefon raqami qiymatini boshqarish
                  onChange={setPhoneValue} // Telefon raqami o'zgarganda yangilash
                  country={"uz"}
                  onlyCountries={["uz", "kz", "kg", "tj", "tm"]}
                  masks={{
                    uz: "(..) ...-..-..", // O'zbekiston
                    kz: "(...) ...-..-..", // Qozog'iston
                    kg: "(..) ...-..-..", // Qirg'iziston
                    tj: "(..) ...-..-..", // Tojikiston
                    tm: "(..) ..-..-..", // Turkmaniston
                  }}
                  inputClass="input input-bordered w-full"
                  inputStyle={{
                    width: "100%",
                    height: "45px",
                    border: "1px solid #ccc",
                    borderRadius: ".25rem",
                    transition: "border-color 0.2s",
                    fontSize: "16px",
                  }}
                  inputProps={{ name: "phone", required: true }}
                />
              </label>

              <button className="btn my-4 w-full">Отправить</button>
            </form>
          </div>
        </div>

        {/* Outside close section start */}
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
        {/* Outside close section end */}
      </dialog>
    </>
  );
}

export default LeaveRequest;
