import React from "react";

const HerPage = () => {
  return (
    <div className="bg-[#f7f8fa] mt-6">
      {/* SLIDE ONE */}
      <div className="content mx-10 my-24 flex justify-between">
        <div>
          <p className="font-normal text-[#13162D] text-4xl py-5">We are a</p>
          <h1 className="text-[#13162D] font-semibold text-5xl pb-6">
            Tech Talent Incubator
          </h1>

          <p className="text-2xl leading-normal text-gray-500 mr-4">
            We nurture, equip 7 build Africa's rising tech <br /> talents
            through immersive training programs designed to <br /> meet the
            innovations of the future.
          </p>
          <button className="bg-[#FDBF17] text-lg text-gray-700 p-2 md:w-40 my-6 rounded-3xl">
            Learn More
          </button>
        </div>
        <div className="video py-6">
          <iframe
            width="480"
            height="300"
            src="https://www.youtube.com/embed/FSTzqzwYfF0?si=IGQPlTvJqLIMRrc4"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      {/* SLIDE TWO */}

      <div className="my-24 flex justify-between">
        <div className="content mx-14">
          <h1 className="text-[#13162D] font-semibold text-5xl pb-6 leading-normal">
            Building Sustainable <br /> Business Leveraging <br /> Technology
          </h1>

          <p className="text-2xl leading-normal text-gray-500">
            We incubate,accelerate, and provide funding for mission-driven
            early-stage African tech startups.
          </p>
          <button className="bg-[#FDBF17] text-lg text-gray-700 p-3 px-10 my-6 rounded-3xl">
            Build The Next Big Thing
          </button>
        </div>

        <div className="video py-6 pr-10">
          <img
            src="https://www.thebulb.africa/static/media/hero1.31aaaa093328a58086e8.jpg"
            alt=""
          />
        </div>
      </div>

      {/* SLIDE THREE */}

      <div className="mx-10 my-24 flex justify-between">
        <div className="text">
          <h1 className="text-[#13162D] font-semibold text-5xl pb-6 leading-normal">
            Bridging The Talent Gap <br /> In Africa
          </h1>

          <p className="text-2xl leading-normal text-gray-500">
            We educate and connect tech talents from Africa to job opportunities
            in Africa and across the globe.
          </p>
          <button className="bg-[#FDBF17] text-lg text-gray-700 p-3 px-7 my-6 rounded-3xl">
            Hire Our Talents
          </button>
        </div>
        <div className="video py-6 pl-10">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/LkSKJ3EXIus?si=fuoyGGTe3q5hM1lK"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      {/* SLIDE FOUR */}

      <div className="mx-5 my-24 flex justify-between">
        <div className="text">
          <h1 className="text-[#13162D] font-semibold text-5xl pb-6 leading-normal">
            Building Scalable <br /> Products With Top Tech <br /> Talents
          </h1>

          <p className="text-2xl leading-normal text-gray-500">
            We transform your fascinating ideas into leading-edge web and mobile
            applications. Design, build, and launch digital solutions.
          </p>
          <button className="bg-[#FDBF17] text-lg text-gray-700 p-3 px-8 my-6 rounded-3xl">
            Let Build With You
          </button>
        </div>

        <div className="video py-6 pl-10">
          <img
            src="https://www.thebulb.africa/static/media/hero2.5de043f6b411b98fcf84.jpg"
            alt=""
          />
        </div>
      </div>

      {/* SLIDE FIVE */}

      <div className="mx-4 my-24 flex justify-between">
        <div className="text">
          <h1 className="text-[#13162D] font-semibold text-5xl pb-6 leading-normal">
            Empowering Women In <br /> Tech
          </h1>

          <p className="text-2xl leading-normal text-gray-500">
            We run programs that inspire and boost female participation in tech.
          </p>
          <button className="bg-[#FDBF17] text-lg text-gray-700 p-3 px-7 my-6 rounded-3xl">
            Learn More
          </button>
        </div>

        <div className="video py-6 pl-8">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/22jRoSCSFhM?si=6fs54hpu9Lffu9Nj"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      {/* SLIDE SIX */}

      <div className="mx-4 my-24 flex justify-between">
        <div className="text">
          <h1 className="font-semibold text-[#13162D] text-5xl pb-5 leading-normal">
            Building The World's <br /> Largest Community For <br /> African
            Tech Talents
          </h1>

          <p className="text-2xl leading-normal text-gray-500">
            We provide communities and co-working spaces for tech enthusiasts at
            all levels to inspire, build and collaborate.
          </p>
          <button className="bg-[#FDBF17] text-lg text-gray-700 p-3 px-7 my-6 rounded-3xl">
            Come Hangout With Us
          </button>
        </div>

        <div className="video py-6 pl-8">
          <img
            src="https://www.thebulb.africa/static/media/hero3.b8dd425e22f6539dcd86.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default HerPage;
