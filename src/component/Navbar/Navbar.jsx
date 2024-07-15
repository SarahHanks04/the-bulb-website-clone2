import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faChevronDown,
  faChevronUp,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  // FOR DROPDOWN MENU
  const [hovered, setHovered] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const handleMouseEnter = (index) => {
    setHovered(index);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  const handleDropdownClick = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  // FOR HAMBUDGER(BARS)

  const [menuOpen, setMenuOpen] = useState(false);

  const togglemenu = () => {
    setMenuOpen(!menuOpen);
  };

  // THE STATE TO TRACK WINDOW WIDTH

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // TO UPDATE THE STATE ON WINDOW RESIZE

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="container bg-[#f7f8fa] min-h-20 w-full">

      {/*  MARQUEE  */}
      <div className="marquee-container bg-[#FDBF17] z-[9999] fixed flex justify-center transition-all p-1 w-full whitespace-nowrap">
        <div className="font-400 underline text-md sm:text-xm md:text-sm lg:text-x1 animation-zoom-in-out animate-marquee inline-block">
          <a href="#">
            Break into tech! &#8358;25 million naira worth of scholarship
            available for the Fellowship Program. Apply Now!
          </a>
        </div>
      </div>

      {/*   MAIN NAVBAR   */}
      <nav className="bg-[#f7f8fa] shadow-lg fixed p-1 flex items-center justify-between w-full mt-7 pb-4 z-50 pt-2">
        <div className="text-xl pl-8">
          <a className="max-w-35" href="#">
            <img src="https://www.thebulb.africa/static/media/bulblogoblue.f8aa821e41a7a4a52e37c9b8a25a773f.svg" alt="Logo" />
          </a>
        </div>

        <ul className="hidden md:flex items-center space-x-4 text-gray-700 gap-6 font-normal">
          <li
            className="relative group hover:text-gray-900"
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={handleMouseLeave}
          >
            <span className="cursor-pointer">
              For Businesses{" "}
              <FontAwesomeIcon
                icon={hovered === 1 ? faChevronDown : faChevronUp}
                className="ml-2"
              />
            </span>
            <ul className="absolute left-0 mt-2 w-40 bg-white shadow-lg hidden group-hover:block hover:text-gray-900">
              <li className="px-4 py-2 hover:bg-gray-100">
                Corporate Training
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">Hire Our Talents</li>
              <li className="px-4 py-2 hover:bg-gray-100">Office Space</li>
            </ul>
          </li>

          <li
            className="relative group hover:text-gray-900"
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={handleMouseLeave}
          >
            <span className="cursor-pointer">
              For Talent{" "}
              <FontAwesomeIcon
                icon={hovered === 2 ? faChevronDown : faChevronUp}
                className="ml-2"
              />
            </span>
            <ul className="absolute left-0 mt-2 w-40 bg-white shadow-lg hidden group-hover:block hover:text-gray-900">
              <li className="px-4 py-2 hover:bg-gray-100">
                Fellowship Programes
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">Career Advance</li>
              <li className="px-4 py-2 hover:bg-gray-100">Community</li>
            </ul>
          </li>

          <li
            className="relative group hover:text-gray-900"
            onMouseEnter={() => handleMouseEnter(3)}
            onMouseLeave={handleMouseLeave}
          >
            <span className="flex items-center cursor-pointer">
              Talent-as-a-Service{" "}
              <FontAwesomeIcon
                icon={hovered === 3 ? faChevronDown : faChevronUp}
                className="ml-2"
              />
            </span>
            <ul className="absolute left-0 mt-2 w-40 bg-white shadow-lg hidden group-hover:block hover:text-gray-900">
              <li className="px-4 py-2 hover:bg-gray-100">Recruitment</li>
              <li className="px-4 py-2 hover:bg-gray-100">
                Product Development
              </li>
            </ul>
          </li>

          <li
            className="relative group hover:text-gray-900"
            onMouseEnter={() => handleMouseEnter(4)}
            onMouseLeave={handleMouseLeave}
          >
            <span className="flex items-center cursor-pointer">
              Why The Bulb{" "}
              <FontAwesomeIcon
                icon={hovered === 4 ? faChevronDown : faChevronUp}
                className="ml-2"
              />
            </span>
            <ul className="absolute left-0 mt-2 w-40 bg-white shadow-lg hidden group-hover:block hover:text-gray-900">
              <li className="px-4 py-2 hover:bg-gray-100">About Us</li>
              <li className="px-4 py-2 hover:bg-gray-100">Blogs</li>
              <li className="px-4 py-2 hover:bg-gray-100">Newsletter</li>
              <li className="px-4 py-2 hover:bg-gray-100">Success Stories</li>
            </ul>
          </li>
        </ul>

        <div className="hidden md:flex items-center space-x-4 mr-8 gap-6">
          <button className="bg-[#13162D] text-white px-4 py-2 rounded-3xl">
            Get Started
          </button>

          <button
            className="relative group bg-transparent hover:text-gray-900 px-4 py-2 font-medium"
            onMouseEnter={() => handleMouseEnter(5)}
            onMouseLeave={handleMouseLeave}
          >
            <span className="flex items-center cursor-pointer">
              Login{" "}
              <FontAwesomeIcon
                icon={hovered === 5 ? faChevronDown : faChevronUp}
                className="ml-5"
              />
            </span>
            <ul className="absolute left-0 right-0 mt-2 w-30 bg-white shadow-lg hidden group-hover:block text-gray-900">
              <li className="px-4 py-2 hover:bg-gray-100">For Students</li>
              <li className="px-4 py-2 hover:bg-gray-100">For Employee</li>
              <li className="px-4 py-2 hover:bg-gray-100">For DSA</li>
            </ul>
          </button>
        </div>

        {/*   HAMBUDGER MENU(BARS)    */}

        <div className="md:hidden flex items-center mr-8">
          <button onClick={togglemenu}>
            <FontAwesomeIcon
              icon={menuOpen ? faTimes : faBars}
              className="text-gray-700 text-2xl"
            />
          </button>
        </div>
      </nav>

      {/*  WHEN HAMBUDGER IS CLICKED  */}

      {menuOpen && (
        <div className="md:hidden flex flex-col items-center bg-white py-4 shadow-md transition-transform duration-300 transform translate-x-0">
          <ul className="flex flex-col items-center gap-16 text-gray-700 mt-24">
            <li
              className="relative group hover:text-gray-900"
              onClick={() => handleDropdownClick(1)}
            >
              <span className="cursor-pointer">
                For Businesses{" "}
                <FontAwesomeIcon
                  icon={dropdownOpen === 1 ? faChevronDown : faChevronUp}
                  className="ml-2"
                />
              </span>
              <ul
                className={`absolute left-0 mt-2 w-40 bg-white shadow-lg ${
                  dropdownOpen === 1 ? "block" : "hidden"
                } hover:text-gray-900`}
              >
                <li className="px-4 py-2 hover:bg-gray-100">
                  Corporate Training
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  Hire Our Talents
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">Office Space</li>
              </ul>
            </li>

            <li
              className="relative group hover:text-gray-900"
              onClick={() => handleDropdownClick(2)}
            >
              <span className="cursor-pointer">
                For Talent{" "}
                <FontAwesomeIcon
                  icon={dropdownOpen === 2 ? faChevronDown : faChevronUp}
                  className="ml-2"
                />
              </span>
              <ul
                className={`absolute left-0 mt-2 w-40 bg-white shadow-lg ${
                  dropdownOpen === 2 ? "block" : "hidden"
                } hover:text-gray-900`}
              >
                <li className="px-4 py-2 hover:bg-gray-100">
                  Fellowship Programes
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">Career Advance</li>
                <li className="px-4 py-2 hover:bg-gray-100">Community</li>
              </ul>
            </li>

            <li
              className="relative group hover:text-gray-900"
              onClick={() => handleDropdownClick(3)}
            >
              <span className="flex items-center cursor-pointer">
                Talent-as-a-Service{" "}
                <FontAwesomeIcon
                  icon={dropdownOpen === 3 ? faChevronDown : faChevronUp}
                  className="ml-2"
                />
              </span>
              <ul
                className={`absolute left-0 mt-2 w-40 bg-white shadow-lg ${
                  dropdownOpen === 3 ? "block" : "hidden"
                } hover:text-gray-900`}
              >
                <li className="px-4 py-2 hover:bg-gray-100">Recruitment</li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  Product Development
                </li>
              </ul>
            </li>

            <li
              className="relative group hover:text-gray-900"
              onClick={() => handleDropdownClick(4)}
            >
              <span className="flex items-center cursor-pointer">
                Why The Bulb{" "}
                <FontAwesomeIcon
                  icon={dropdownOpen === 4 ? faChevronDown : faChevronUp}
                  className="ml-2"
                />
              </span>
              <ul
                className={`absolute left-0 mt-2 w-40 bg-white shadow-lg ${
                  dropdownOpen === 4 ? "block" : "hidden"
                } hover:text-gray-900`}
              >
                <li className="px-4 py-2 hover:bg-gray-100">About Us</li>
                <li className="px-4 py-2 hover:bg-gray-100">Blogs</li>
                <li className="px-4 py-2 hover:bg-gray-100">Newsletter</li>
                <li className="px-4 py-2 hover:bg-gray-100">Success Stories</li>
              </ul>
            </li>
          </ul>

          <div className="hidden md:flex items-center space-x-4 mr-8 gap-6">
            <button className="bg-[#13162D] text-white px-4 py-2 rounded-3xl">
              Get Started
            </button>

            <button
              className="relative group bg-transparent hover:text-gray-900 px-4 py-2"
              onClick={() => handleDropdownClick(5)}
            >
              <span className="flex items-center cursor-pointer">
                Login{" "}
                <FontAwesomeIcon
                  icon={dropdownOpen === 5 ? faChevronDown : faChevronUp}
                  className="ml-5"
                />
              </span>
              <ul
                className={`absolute left-0 right-0 mt-2 w-30 bg-white shadow-lg ${
                  dropdownOpen === 5 ? "block" : "hidden"
                } text-gray-900`}
              >
                <li className="px-4 py-2 hover:bg-gray-100">For Students</li>
                <li className="px-4 py-2 hover:bg-gray-100">For Employee</li>
                <li className="px-4 py-2 hover:bg-gray-100">For DSA</li>
              </ul>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Navbar;
