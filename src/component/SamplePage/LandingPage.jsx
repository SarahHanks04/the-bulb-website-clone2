import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBell,
  faMagnifyingGlass,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

const LandingPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const togglemenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="container bg-[#f7f8fa] min-h-screen">
      <div className="marquee-container bg-[#FDBF17] z-[9999] fixed flex justify-center transition-all p-2 w-full overflow-hidden whitespace-nowrap">
        <div className="font-400 underline text-md sm:text-xm md:text-sm lg:text-x1 animation-zoom-in-out animate-marquee inline-block">
          <a href="#">
            Break into tech! &#8358;25 million naira worth of scholarship
            available for the Fellowship Program. Apply Now!
          </a>
        </div>
      </div>

      <nav className="bg-[#f7f8fa] pt-4 px-4 fixed top-0 left-0 right-0 shadow-md z-50 items-center">
        <div className="container pt-4 mx-auto flex justify-between items-center">
          <img
            className="img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1wlasXGmziQxYZawQ1sx3mVM6k8RMsfmmHgR4cQ8Hljl8zIsxr7UBTyMX4XMhOBN8E-I&usqp=CAU"
            alt="The Bulb Africa"
            width={80}
            height={80}
          />

          <ul className=" hidden md:flex links justify-between items-center gap-6 text-gray-700">
            <li>
              <a href="#" className="hover:text-gray-900">
                Home
              </a> 
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                AboutUs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                Info
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                Community
              </a>
            </li>
          </ul>

          <div className="hidden md:flex search-input items-center border border-gray-300 rounded-md p-1">
            <input
              type="text"
              placeholder="Search"
              className="input pl-2 p-1 outline-none"
            />
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="serach-icon ml-2 text-gray-500"
              size="lg"
            />
          </div>

          <div className="hidden md:flex notification items-center gap-4">
            <FontAwesomeIcon
              icon={faBell}
              className="text-gray-700"
              size="lg"
            />
            <button className="bg-[#13162D] text-white py-2 px-4 rounded-3xl mr-8">
              Get Started
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={togglemenu}>
              <FontAwesomeIcon
                icon={menuOpen ? faTimes : faBars}
                className="text-gray-700 text-2xl"
              />
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden flex flex-col items-center bg-white py-4 shadow-md">
            <ul className="links flex flex-col items-center gap-4 text-gray-700">
              <li>
                <a href="#" className="hover:text-gray-900">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Info
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Community
                </a>
              </li>
            </ul>

            <div className="search-input flex items-center border border-gray-300 rounded-md p-1 my-4">
              <input
                type="text"
                placeholder="Search"
                className="input pl-2 p-1 outline-none"
              />
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="search-icon ml-2 text-gray-500"
              />
            </div>

            <div className="notification flex items-center gap-4">
              <FontAwesomeIcon icon={faBell} className="text-gray-700" />
              <button className="bg-[#FDBF17] text-white py-2 px-4 rounded-md">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default LandingPage;
