import React from 'react';

const About = () => {
  return (
    <div className="my-10">
      <div className="content mx-5 flex flex-col gap-6 lg:gap-10 lg:flex-row justify-between items-center md:flex-col">
        <div className=" lg:max-w-full md: max-w-full ml-8">
          <h1 className="text-[#13162D] font-semibold text-3xl lg:text-3xl pb-6 leading-normal">
            We connect innovation <br /> from Africa to local and global opportunities.
          </h1>

          <p className="text-lg lg:text-xl leading-relaxed text-gray-500 pt-5">
            We exist to inspire and empower the next generation of tech experts and innovators to build transferable and transportable skill sets for the fast-changing global workspace.
          </p>
          <button className="bg-[#FDBF17] text-lg text-gray-700 px-6 py-2 my-6 rounded-3xl">
            Learn More
          </button>
        </div>
        <div className="w-full flex justify-center lg:w-auto mt-8 lg:mt-0">
          <img
            src="https://www.thebulb.africa/static/media/about.250f6f3b25da49648b00.gif"
            alt="Gif"
            className="w-[90%] h-auto lg:w-[100%] pl-14"
          />
        </div>
      </div>
    </div>
  );
};

export default About;

