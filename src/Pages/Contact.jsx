import { useState } from "react";

const Contactpage = () => {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  async function handleSendContact() {
    const res = await fetch("http://localhost:8000/message/sendMessage", {
      method: 'POST',
      headers: {
        'Content-Type': 'appllication/json'
      },
      body: {
        nama, email,comment
      }
    })

    if(res.ok) {
      const json = await res.json();
      console.log(json);
    }

    const json = await res.json();
    console.log(json);
  }

  return (
    <section className="pt-30  " id="Contact">
      <div className="dark:bg-[#141414] bg-[#e0e0e0] pt-10 pb-30">
        <div className="lg:px-25 px-10">
          <h1 className="dark:text-white text-gray-700 font-semibold text-2xl md:text-4xl lg:text-5xl">Let's Connect</h1>
          <p className="text-[#7B7B7B] font-light text-[15px] tracking-[1px] mt-15 sm:pr-60 leading-[24px] md:pr-80 lg:text-xl lg:pr-100 xl:pr-150 lg:mt-20 lg:leading-8">
            Interested in collaborating or just want to say hello? Feel free to
            drop a message below.
          </p>
          <p className="text-[#7B7B7B] mt-7 lg:text-lg ">
            <span className="dark:text-white text-gray-800">Email : </span>Fardani834@gmail.com
          </p>
          <p className="text-[#7B7B7B] mt-3 lg:text-lg">
            <span className="dark:text-white text-gray-800">Location : </span>Palembang, Indonesian
          </p>
        </div>

        <div className="p-8 w-full lg:mt-18 py-15">
          <form action="" className="w-full" onSubmit={handleSendContact}>

            <div className="flex justify-center gap-20 items-center flex-wrap">
              <div className="w-full md:w-2/5">
                <div className="w-full lg:-mt-30">
                  <label htmlFor="" className="dark:text-white font-semibold text-gray-800">Nama</label>
                  <input
                    type="text"
                    name="user_name"
                    value={nama}
                    onChange={e => setNama(e.target.value)}
                    className="border-[1px] border-[#2A2A2A] dark:bg-[#0F0F0F] bg-[#949494] py-1 rounded-md mt-2 mx-auto w-full h-10 px-3"
                  />
                </div>
                <div className="w-full mt-8">
                  <label htmlFor="" className="dark:text-white font-semibold text-gray-800">Email</label>
                  <input
                    type="email"
                    name="user_email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="border-[1px] border-[#2A2A2A] dark:bg-[#0F0F0F] bg-[#949494] py-1 rounded-md mt-2 mx-auto w-full h-10 px-3"
                  />
                </div>
              </div>


              <div className=" mt-2 lg:mt-0 w-full md:w-2/5">
                <label htmlFor="" className="dark:text-white font-semibold text-gray-800">Comment</label>
                <textarea
                  name="message"
                  value={comment}
                  onChange={e => setComment(e.target.value)}
                  className="border-[1px] border-[#2A2A2A] dark:bg-[#0F0F0F] w-full py-1 rounded-md mt-2 bg-[#949494] h-70 p-3"
                />
              </div>
            </div>
            <button className="mt-15 text-white dark:bg-[#2c2c2c] bg-[#949494] px-5 rounded-sm py-1 font-semibold lg:mx-auto w-full lg:w-[85%] xl:h-10 flex justify-center items-center cursor-pointer">Kirim!</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contactpage;
