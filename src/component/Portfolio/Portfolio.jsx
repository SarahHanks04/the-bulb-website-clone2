// src/component/Portfolio/Portfolio.jsx
import React from "react";
import Card from "./PortfolioCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Portfolio = () => {
  return (
    <section className="bg-gray-100 min-h-screen p-4 overflow-x-hidden">

      <div className="mt-14 text-center">

          {/* HEADING */}
        <h1 className="font-extrabold font-gothic text-5xl">
          Our Innovative Product Portfolio
        </h1>

        <p className="my-8 text-xl text-gray-700 font-gothic">
          Building the next generation of Africa's dynamic leaders through
          technology
        </p>

      </div>

      {/* MAPPING THE PORTFOLIO CARDS */}
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2 mx-4 mt-14 mb-10 justify-between">
      
        {Card.map((card, index) => (
          <div
            key={index}
            className="mx-5 bg-white p-6 rounded-lg shadow-2xl max-w-full"
          >

            <div>
            
              {/* FOR THE ICONS */}
              <div className="text-[#FDBF17] text-center font-thin">
                <FontAwesomeIcon icon={card.icon} size="2x" className="p-4 bg-gray-100 rounded-full" />
              </div>

              {/* FOR THE TITLE */}
              <h1 className="mt-6 text-xl font-bold text-center transition-transform duration-300 transform hover:scale-95">{card.title}</h1>

              {/* FOR THE TEXT */}
              <p className="text-gray-700 mt-4 text-md font-normal ">{card.text}</p>
            </div>
          </div>
        ))}
      </main>
    </section>
  );
};

export default Portfolio;
