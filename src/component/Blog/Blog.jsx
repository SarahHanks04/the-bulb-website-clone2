import React from "react";
import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <section className="min-h-screen p-8 overflow-x-hidden">
      <article className="mx-10 mt-10">
        <h1 className="text-[#13162D] font-bold text-2xl lg:text-4xl pb-6 relative">
          Lighting Up Africa The Bulb Way
        </h1>

        <p className="text-gray-700 w-full lg:w-[65%] mt-4 text-md">
          The Bulb Africa cultivates a pipeline of African tech talent by
          equipping individuals and businesses with in-demand skills, fostering
          professional networks through its communities, and fascinating career
          opportunities through its recruitment engine.
        </p>
      </article>

      {/* MAPPING THE BLOGCARDS */}
      <main className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 mx-5 mt-14 mr-6 justify-center">

        {/* MAPPING THROUGH */}
        {BlogCard.map((BlogCard, index) => (
          <div
            key={index}
            className="mx-5 bg-gray-200 p-6 rounded-lg shadow-xl w-full lg:w-[50%] transition-transform duration-300 transform hover:scale-95 mb-8"
          >
            <div>
              {/* FOR THE TITLE */}
              <p className="review text-[#13162D] text-lg font-bold">{BlogCard.title}</p>

              {/* FOR THE INFO */}
              <p className=" text-gray-700 mt-4 text-md">
                {BlogCard.info}
              </p>
            </div>

          </div>
        ))}
      </main>

        {/*  IMAGE  */}
      <div className=" mx-5 mt-4 mb-14 flex justify-center lg:absolute lg:right-0 lg:bottom-[-878%] lg:mx-10 lg:ml-5">
        <img
         src="https://www.thebulb.africa/static/media/serviceImage.e61be5ab538045c3b21e.png"
          alt=""
          className="w-full max-w-[600px] h-auto"
        />
      </div>
    </section>
  );
};

export default Blog;
