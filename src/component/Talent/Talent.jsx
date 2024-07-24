import React from "react";

const Talent = () => {
  return (
    <section className="h-screen">
      <article>
        <h1 className="text-5xl font-semibold text-center py-[30px] font-gothic">
          The Bulb Tech Talent Model
        </h1>

        {/* THE TITLE */}
        <div className="flex justify-between py-10">
          <h1 className="ml-[7rem] text-4xl text-gray-700">For Talents</h1>
          <h1 className="mr-[7rem] text-4xl text-gray-700">For Business</h1>
        </div>
        {/* THE LINE */}
        <div className="w-1 h-[50%] bg-gray-400 text-center py-[10px] mb-32"></div>

        {/* FIRST CIRCLE */}
        <main className="absolute right-[18%]">
          <div className="flex absolute right-[95%]">
            <div className="">
              <div className="flex items-center justify-center w-5 h-5 bg-yellow-100 rounded-full">
                <div className="w-3 h-3 bg-[#FDBF17] rounded-full"></div>
              </div>
            </div>
            <div className="w-16 h-[2px] bg-[#FDBF17]"></div>
          </div>

          <div className="text">
            <h2 className="text-xl text-[#13162D] font-bold">
              StartUp Academy
            </h2>
            <p>
              We educate and offer training and mentorship to <br /> founders
              who are at the begining of the start up <br /> journey.
            </p>
          </div>
        </main>
      </article>
    </section>
  );
};

export default Talent;
