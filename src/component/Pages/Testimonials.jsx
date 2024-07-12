import React from "react";
import Card from "./Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Testimonials = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4 overflow-x-hidden">

      {/* THE TITLE & HEADING */}
      <div className="mx-16 mt-10">
        <ul className="list-disc marker:text-[#FDBF17] text-gray-500">
          <li>Testimonial</li>
        </ul>
      </div>
        {/*  UNDERLINE  */}
      <div className="w-[100%] h-[1px] bg-gray-400 mx-3 my-4 pr-5"></div>

        {/* TITLE */}
      <div className="text-center text-4xl font-semibold mt-8">
        <h1>Words On The Street</h1>
      </div>

      {/*   MAPPING THE CARDS/TESTIMONIALS   */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-5 mt-14 justify-center">

        {Card.map((Card, index) => (
          <div
            key={index}
            className="mx-5 bg-white p-6 rounded-lg shadow-2xl max-w-full transition-transform duration-300 transform hover:scale-95"
          >
            <div>
              {/* FOR THE REVIEWS */}
              <p className="review text-gray-700 text-sm">{Card.review}</p>

              {/* FOR RATINGS */}
              <div className="mt-5">
                {[...Array(5)].map((_, i) => (
                  <FontAwesomeIcon
                    key={i}
                    icon={faStar}
                    className="pr-2"
                    color={i < Card.ratings ? "#FDBF17" : "#D3D3D3"}
                  />
                ))}
              </div>

              {/* FOR THE NAMES */}
              <p className=" text-gray-700 mt-4 text-lg font-bold">
                {Card.name}
              </p>

            </div>

          </div>
        ))}
      </div>

            {/* FOR THE BUTTON */}
      <div className="text-center mt-12">
        <button className="bg-[#FDBF17] text-lg text-gray-700 px-10 py-2 rounded-3xl text-center mb-8">
          Learn More
        </button>
      </div>

    </div>
  );
};

export default Testimonials;
