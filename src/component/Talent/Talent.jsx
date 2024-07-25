import React from "react";

const Talent = () => {
  return (
    <section className="">
      <article className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-5xl font-semibold text-center py-[30px] font-gothic">
          The Bulb Tech Talent Model
        </h1>

        {/* THE TITLE */}
        <div className="flex w-full md:w-3/4 lg:w-full justify-between pt-5 mb-8">
          <h1 className="text-4xl text-gray-700 ml-[8rem]">For Talents</h1>
          <h1 className="text-4xl text-gray-700 mr-[8rem]">For Business</h1>
        </div>

        {/* Different */}
        <div className="relative w-full md:w-3/4 lg:w-full p-4">
          {/* <!-- Vertical Line --> */}
          <div className="absolute inset-0 flex justify-center">
            <div className="w-1 bg-gray-300"></div>
          </div>
          {/* <!-- Timeline Items 1 --> */}
          <div classname="relative">
            <div classname="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-yellow-500 rounded-full top-[30%]">
              <div classname="absolute left-3/4 transform -translate-x-1/2 w-4 h-4 bg-[#FDBF17] rounded-full top-[30%]"></div>
            </div>
            <div className="ml-[42rem] ">
              <h3 className="text-lg font-bold">StartUp Academy</h3>
              <p>
                We educate and offer training and mentorship to <br /> founders who are
                at the beginning of their startup <br /> journey.
              </p>
            </div>
          </div>
          {/* <!-- TIMELINE ITEM 2 --> */}
          <div className="relative mb-10">
                {/* INNER LINE */}
            <div className="absolute w-24 h-[2px] bg-gray-400 right-[50%] bottom-[94%]"></div>
              {/* INNER CIRCLE */}
            <div className="absolute left-[49.5%] w-5 h-5 bg-gray-200 rounded-full">
              <div className="w-3 h-3 bg-[#13162D] rounded-full left-[50%]"></div>
            </div>
            <div className="ml-[10rem] mt-[10rem]">
              <h3 className="text-lg font-bold py-5">Education</h3>
              <p>
                Our commitment to sustainability shines through as <br /> we proudly
                announce the generation of 5,000 <br /> megawatt-hours of renewable
                energy, contributing <br /> to a greener and more environmentally friendly <br /> future.
              </p>
            </div>
          </div>
          {/* <!-- Add more timeline items as needed --> */}
        </div>

        {/* THE LINE */}
        {/* <div className="w-1 h-[50%] bg-gray-400 text-center py-[10px] mb-32"></div> */}

        {/* FIRST CIRCLE */}
        {/* <main className="absolute right-[18%]">
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
        </main> */}
      </article>
    </section>
  );
};

export default Talent;
