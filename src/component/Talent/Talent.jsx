import React from "react";

const Talent = () => {
  return (
    <section>
      <article>
        <h1 className="text-5xl font-semibold text-center py-[30px] relative">
          The Bulb Tech Talent Model
        </h1>

        {/* THE TITLE */}
        <div className="flex justify-between">
          <h1 className="">For Talents</h1>
          <h1>For Business</h1>
        </div>
        {/* THE LINE */}
        <div className="w-1 h-[90%] bg-gray-300 absolute right-[50%] text-center py-[20px] mt-[10rem]"></div>

        {/* FIRST CIRCLE */}
        <div class="flex items-center justify-center w-5 h-5 bg-yellow-100 rounded-full">
          <div class="w-3 h-3 bg-[#FDBF17] rounded-full"></div>
          <div></div>
        </div>
      </article>
    </section>
  );
};

export default Talent;
