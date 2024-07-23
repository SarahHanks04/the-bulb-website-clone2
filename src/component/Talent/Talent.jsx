import React from "react";

const Talent = () => {
  return (
    <section>
      <h1 className="text-5xl font-semibold text-center py-[30px] relative">
        The Bulb Tech Talent Model
      </h1>
      <div className="w-1 h-[90%] bg-gray-300 flex justify-center align-middle text-center py-[20px]"></div>

      {/* FIRST CIRCLE */}
      <div class="flex items-center justify-center w-52 h-52 bg-blue-500 rounded-full">
        <div class="w-24 h-24 bg-red-500 rounded-full"></div>
        <div></div>
      </div>
    </section>
  );
};

export default Talent;
