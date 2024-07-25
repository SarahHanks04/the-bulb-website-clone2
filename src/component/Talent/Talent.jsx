import React from "react";

const Talent = () => {
  return (
    <section className="h-screen mb-[38rem] mt-[44rem]">
      <article className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-5xl font-semibold text-center py-[30px] font-gothic">
          The Bulb Tech Talent Model
        </h1>

        {/* THE TITLE */}
        <div className="flex w-full md:w-3/4 lg:w-full justify-between pt-5 mb-8">
          <h1 className="text-4xl text-gray-700 ml-[10rem]">For Talents</h1>
          <h1 className="text-4xl text-gray-700 mr-[10rem]">For Business</h1>
        </div>

              {/*TEXT CENTERED */}
        <main className="relative w-full md:w-3/4 lg:w-full p-4">
          {/* <!-- Vertical Line --> */}
          <div className="absolute inset-0 flex justify-center">
            <div className="w-1 bg-gray-300"></div>
          </div>

          {/* <!-- TIMELINE ITEM 1 --> */}
          <div classname="relative">
            {/* INNER LINE */}
            <div className="absolute w-24 h-[2px] bg-[#FDBF17] right-[42%] top-[2%]"></div>
            {/* INNER CIRCLE */}
            <div className="absolute left-[49.5%] w-5 h-5 bg-yellow-100 rounded-full mt-3">
              <div className="w-3 h-3 bg-[#FDBF17] rounded-full left-[50%]"></div>
            </div>
            {/* INNER TEXT */}
            <div className="ml-[42rem] ">
              <h3 className="text-lg font-bold py-5">StartUp Academy</h3>
              <p>
                We educate and offer training and mentorship to <br /> founders
                who are at the beginning of their startup <br /> journey.
              </p>
            </div>
          </div>

          {/* <!-- TIMELINE ITEM 2 --> */}
          <div className="relative mb-5">
            {/* INNER LINE */}
            <div className="absolute w-24 h-[2px] bg-gray-400 right-[50%] bottom-[94%]"></div>
            {/* INNER CIRCLE */}
            <div className="absolute left-[49.5%] w-5 h-5 bg-gray-200 rounded-full">
              <div className="w-3 h-3 bg-[#13162D] rounded-full left-[50%]"></div>
            </div>
            {/* INNER TEXT */}
            <div className="ml-[10rem] mt-[2rem]">
              <h3 className="text-lg font-bold py-5">Education</h3>
              <p>
                Our commitment to sustainability shines through as <br /> we
                proudly announce the generation of 5,000 <br /> megawatt-hours
                of renewable energy, contributing <br /> to a greener and more
                environmentally friendly <br /> future.
              </p>
            </div>
          </div>

          {/* <!-- TIMELINE ITEM 3 --> */}
          <div className="relative mb-10">
            {/* INNER LINE */}
            <div className="absolute w-24 h-[2px] bg-[#FDBF17] right-[42%] bottom-[94%]"></div>
            {/* INNER CIRCLE */}
            <div className="absolute left-[49.5%] w-5 h-5 bg-yellow-100 rounded-full">
              <div className="w-3 h-3 bg-[#FDBF17] rounded-full left-[50%]"></div>
            </div>
            {/* INNER TEXT */}
            <div className="ml-[42rem] mt-[2rem]">
              <h3 className="text-lg font-bold py-5">StartUp Engine</h3>
              <p>
                Our start up engine is geared towards incubating <br />{" "}
                facinating ideas, accelerating early-stage startups, <br /> and
                co-investing in startups that can drive growth <br /> and
                innovation in Africa.
              </p>
            </div>
          </div>

          {/* <!-- TIMELINE ITEM 4 --> */}
          <div className="relative mb-5">
            {/* INNER LINE */}
            <div className="absolute w-24 h-[2px] bg-gray-400 right-[50%] bottom-[94%]"></div>
            {/* INNER CIRCLE */}
            <div className="absolute left-[49.5%] w-5 h-5 bg-gray-200 rounded-full">
              <div className="w-3 h-3 bg-[#13162D] rounded-full left-[50%]"></div>
            </div>
            {/* INNER TEXT */}
            <div className="ml-[10rem] mt-[2rem]">
              <h3 className="text-lg font-bold py-5">Talent Placement</h3>
              <p>
                We help our trained talent get job placements <br /> through our
                recruitment and talent sourcing <br /> programs.
              </p>
            </div>
          </div>

          {/* <!-- TIMELINE ITEM 5 --> */}
          <div className="relative mb-10">
            {/* INNER LINE */}
            <div className="absolute w-24 h-[2px] bg-[#FDBF17] right-[42%] bottom-[94%]"></div>
            {/* INNER CIRCLE */}
            <div className="absolute left-[49.5%] w-5 h-5 bg-yellow-100 rounded-full">
              <div className="w-3 h-3 bg-[#FDBF17] rounded-full left-[50%]"></div>
            </div>
            {/* INNER TEXT */}
            <div className="ml-[42rem] mt-[2rem]">
              <h3 className="text-lg font-bold py-5">Talent-as-a-Service</h3>
              <p>
                Get access to well-trained and experienced <br /> software engineers, designers, and other tech <br /> experts to meet your business needs,Also, build <br /> best-in-class products with the top engineering <br /> talents in Africa.
              </p>
            </div>
          </div>

          {/* <!-- TIMELINE ITEM 6 --> */}
          <div className="relative mb-5">
            {/* INNER LINE */}
            <div className="absolute w-24 h-[2px] bg-gray-400 right-[50%] bottom-[94%]"></div>
            {/* INNER CIRCLE */}
            <div className="absolute left-[49.5%] w-5 h-5 bg-gray-200 rounded-full">
              <div className="w-3 h-3 bg-[#13162D] rounded-full left-[50%]"></div>
            </div>
            {/* INNER TEXT */}
            <div className="ml-[10rem] mt-[2rem]">
              <h3 className="text-lg font-bold py-5">Community For You</h3>
              <p>
                For professionals and newbie tech talents, Our <br /> Community has something for everyone. Connect, <br /> learn, and grow with technology-inclined <br /> individual across Africa.
              </p>
            </div>
          </div>

          {/* <!-- TIMELINE ITEM 7 --> */}
          <div className="relative mb-10">
            {/* INNER LINE */}
            <div className="absolute w-24 h-[2px] bg-[#FDBF17] right-[42%] bottom-[94%]"></div>
            {/* INNER CIRCLE */}
            <div className="absolute left-[49.5%] w-5 h-5 bg-yellow-100 rounded-full">
              <div className="w-3 h-3 bg-[#FDBF17] rounded-full left-[50%]"></div>
            </div>
            {/* INNER TEXT */}
            <div className="ml-[42rem] mt-[2rem]">
              <h3 className="text-lg font-bold py-5">Office Space/Virtual Office</h3>
              <p>
                We provide you a space to build, innovate and <br /> collaborate. A multi-functional location, virtual and <br /> physical office for businesses to build the next big <br /> thing.
              </p>
            </div>
          </div>

          {/* <!-- TIMELINE ITEM 8 --> */}
          <div className="relative mb-5">
            {/* INNER LINE */}
            <div className="absolute w-24 h-[2px] bg-gray-400 right-[50%] bottom-[94%]"></div>
            {/* INNER CIRCLE */}
            <div className="absolute left-[49.5%] w-5 h-5 bg-gray-200 rounded-full">
              <div className="w-3 h-3 bg-[#13162D] rounded-full left-[50%]"></div>
            </div>
            {/* INNER TEXT */}
            <div className="ml-[10rem] mt-[2rem]">
              <h3 className="text-lg font-bold py-5">Co-Working Space</h3>
              <p>
                We provide you a space to innovate and <br /> collaborate. A multi-location functional shared <br /> office for tech talents to build the next big thing.
              </p>
            </div>
          </div>

          {/* <!-- TIMELINE ITEM 9 --> */}
          <div className="relative mb-10">
            {/* INNER LINE */}
            <div className="absolute w-24 h-[2px] bg-[#FDBF17] right-[42%] bottom-[94%]"></div>
            {/* INNER CIRCLE */}
            <div className="absolute left-[49.5%] w-5 h-5 bg-yellow-100 rounded-full">
              <div className="w-3 h-3 bg-[#FDBF17] rounded-full left-[50%]"></div>
            </div>
            {/* INNER TEXT */}
            <div className="ml-[42rem] mt-[2rem]">
              <h3 className="text-lg font-bold py-5">A Community For You(Leverage)</h3>
              <p>
                A community for tech founders and enterprenuers to <br /> pitch innovative ideas and discuss relevant <br /> technological issues that could lead to more <br /> fascinating discoveries, driving further growth and development in the continent.
              </p>
            </div>
          </div>

        </main>

      </article>
    </section>
  );
};

export default Talent;
