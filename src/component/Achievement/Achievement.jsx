import React from "react";

const Achievement = () => {
  return (
    <section
      className="relative h-[70%] bg-cover bg-center mt-[3rem]"
      style={{
        backgroundImage:
          "url('https://www.shutterstock.com/image-photo/close-portrait-beautiful-woman-smiling-600nw-2198784679.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <main className="mt-20 px-10">

        <div className="relative z-10 h-full">
          <h1 className="p-6 text-3xl font-bold font-gothic text-[#E4E4E7] md:text-5xl lg:text-6xl mb-14">
            We have over 85% employability rate.
          </h1>

          <p className="font-medium lg:leading-[40px] text-sm lg:text-2xl md:text-[16px] text-white">
            Our graduates enjoy an 85% employment rate upon completion, thanks
            to our partnershipes with leading local and international companies.
            We equip you with the in-demand skills employers seek, making you a
            highly sought-after talent in the global tech market.
          </p>

          <div className="w-full md:w-[30%] md:py-0 py-6 flex justify-center md:justify-end my-10 ml-[28%]">
            <button className="text-center border-[#FFFFFF] border rounded-full px-[40px] py-[14px] w-[173px] bg-transparent text-[#FFFFFF] text-md">
              Learn More
            </button>
          </div>

        </div>

      </main>
      
    </section>

  );
};

export default Achievement;
