import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faFacebookF, faInstagram, faLinkedinIn, faTiktok, faTwitter } from "@fortawesome/free-brands-svg-icons";


const Footer = () => {

  // FOR COPYRIGHT AT THE FOOTER MAIN
  const currentYear = new Date().getFullYear();
  // ENDS

  return (
    <footer className="bg-[#13162D] min-h-screen text-white py-10 px-10">
      <main className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        {/* COLUMN ONE START */}
        <div className="col-span-1">
          <img
            src="https://www.thebulb.africa/static/media/bulblogo.69a90cf023e0bd1ccac45e7e3cba1c96.svg"
            alt="logo"
            width={145}
            height={44}
            className="mb-2"
          />
          <div>
            <div className="flex gap-4 items-center pt-6">
              <img
                src="https://www.thebulb.africa/static/media/addressicon.5376200aeb87ad663ee39cb7fc799b6a.svg"
                alt=""
              />
              <span>39 Ikorodu-Ososun Rd. Jibowu, Lagos.</span>
            </div>

            <div className="flex gap-4 items-center pt-6">
              <img
                src="https://www.thebulb.africa/static/media/contacticon.7debc0d430cd7591d73749e9fcfd3859.svg"
                alt=""
              />
              <span className="hover:cursor-pointer hover:text-blue-700">
                <a href="">+234 700 834 2852</a>
              </span>
            </div>

            <div className="flex gap-4 items-center pt-6">
              <img
                src="https://www.thebulb.africa/static/media/mailicon.4ff85157344f83e88c9aaa54be7bfed2.svg"
                alt=""
              />
              <span className="hover:cursor-pointer hover:text-blue-700">
                <a href="info@thebulb.africa">info@thebulb.africa</a>
              </span>
            </div>

          </div>

        </div>

        {/* COLUMN TWO START */}

        <div className="col-span-1">

          <h1 className="font-bold mb-6 font-gothic">For Businesses</h1>

          <ul className="md:text-[14px] text-[18px] font-light">

            <li className="hover:underline hover:text-blue-700 pt-3">
              <a href="">Startup Academy</a>
            </li>
            <li className="hover:underline hover:text-blue-700 pt-3">
              <a href="">Corporate Training</a>
            </li>
            <li className="hover:underline hover:text-blue-700 pt-3">
              <a href="">Hire Our Talents</a>
            </li>
            <li className="hover:underline hover:text-blue-700 pt-3">
              <a href="">Partner With Us</a>
            </li>
            <li className="hover:underline hover:text-blue-700 pt-3">
              <a href="">Office Space</a>
            </li>
            <li className="hover:underline hover:text-blue-700 pt-3">
              <a href="">Product Development</a>
            </li>
            <li className="hover:underline hover:text-blue-700 pt-3">
              <a href="">App Support</a>
            </li>
            <li className="hover:underline hover:text-blue-700 pt-3">
              <a href="">Startup Engine</a>
            </li>
            <li className="hover:underline hover:text-blue-700 pt-3">
              <a href="">Leverage Of The Bulb</a>
            </li>

          </ul>

        </div>

        {/* COLUMN THREE START */}
        <div className="col-span-1">

          <h1 className="font-bold mb-6 font-gothic">For Talent</h1>

          <ul className="text-[14px] md:text-[18px] font-light">

            <li className="hover:underline hover:text-blue-700 pt-3">
              <a href="">Fellowship of the Bulb</a>
            </li>
            <li className="hover:underline hover:text-blue-700 pt-3">
              <a href="">Career Advance</a>
            </li>
            <li className="hover:underline hover:text-blue-700 pt-3">
              <a href="">NextGen</a>
            </li>
            <li className="hover:underline hover:text-blue-700 pt-3">
              <a href="">Co-working Space</a>
            </li>
            <li className="hover:underline hover:text-blue-700 pt-3">
              <a href="">Tech Jewel</a>
            </li>
            <li className="hover:underline hover:text-blue-700 pt-3">
              <a href="">Alumi Network</a>
            </li>
            <li className="hover:underline hover:text-blue-700 pt-3">
              <a href="">IWD Event</a>
            </li>
            <li className="hover:underline hover:text-blue-700 pt-3">
              <a href="">Future Z</a>
            </li>
            <li className="hover:underline hover:text-blue-700 pt-3">
              <a href="">Find Jobs</a>
            </li>
            <li className="hover:underline hover:text-blue-700 pt-3">
              <a href="">communities</a>
            </li>
            <li className="hover:underline hover:text-blue-700 pt-3">
              <a href="">The Institute</a>
            </li>

          </ul>

        </div>

        {/* COLUMN FOUR START */}
        <div className="col-span-1">

          <h1 className="font-bold mb-6 font-gothic">Our Solutions</h1>

          <ul className="text-[18px] md:text-[14px] font-light">

            <li className="hover:underline hover:text-blue-700 pt-3">
              <a href="">Software/Web Development</a>
            </li>
            <li className="hover:underline hover:text-blue-700 pt-3">
              <a href="">Product/Project Management</a>
            </li>
            <li className="hover:underline hover:text-blue-700 pt-3">
              <a href="">Mobile App Management</a>
            </li>
            <li className="hover:underline hover:text-blue-700 pt-3">
              <a href="">Data Analytics</a>
            </li>
            <li className="hover:underline hover:text-blue-700 pt-3">
              <a href="">App Maintenance and Support</a>
            </li>
            <li className="hover:underline hover:text-blue-700 pt-3">
              <a href="">The Desk</a>
            </li>
          </ul>
        </div>

        {/* COLUMN FIVE START */}
        <div className="col-span-1">

          <h1 className="font-bold mb-6 font-gothic">Why The Bulb</h1>

          <ul className="text-[14px] md:text-[18px] font-light">

            <li className="hover:underline hover:text-blue-700 pt-3">
              <a href="">About Us</a>
            </li>
            <li className="hover:underline hover:text-blue-700 pt-3">
              <a href="">Blogs</a>
            </li>
            <li className="hover:underline hover:text-blue-700 pt-3">
              <a href="">Newsletter</a>
            </li>
            <li className="hover:underline hover:text-blue-700 pt-3">
              <a href="">Success Stories</a>
            </li>
            <li className="hover:underline hover:text-blue-700 pt-3">
              <a href="">Subtracks</a>
            </li>
            <li className="hover:underline hover:text-blue-700 pt-3">
              <a href="">Careers</a>
            </li>
            <li className="hover:underline hover:text-blue-700 pt-3">
              <a href="">Useful Resources</a>
            </li>
            <li className="hover:underline hover:text-blue-700 pt-3">
              <a href="">Contact Us</a>
            </li>

          </ul>

        </div>

        {/* COLUMN SIX START */}
        <div className="col-span-1">

          <h1 className="font-bold mb-6 font-gothic">Login</h1>

          <ul className="text-[14px] md:text-[18px] font-light">

            <li className="hover:underline hover:text-blue-700 pt-3">
              <a href="">For Students</a>
            </li>
            <li className="hover:underline hover:text-blue-700 pt-3">
              <a href="">For Employees</a>
            </li>
            <li className="hover:underline hover:text-blue-700 pt-3">
              <a href="">For DSA</a>
            </li>

          </ul>

        </div>

      </main>


      {/* FOOTER NEWSLETTER BELOW */}
      <main className="p-4">

        <div className="mt-20 font-gothic md:w-full">
          <h1 className="text-center font-extrabold text-[34px] transition-transform duration-300 transform hover:scale-95">Stay In The Loop!</h1>
          <p className="text-center font-normal text-[18px] pt-5">
            Sign up for our newsletter to receive updates on exciting new features and product releases.
          </p>
        </div>

        <div className="mt-5 flex flex-col md:flex-row justify-center">
          <input
            type="email"
            placeholder="Enter Your Email..."
            className="p-3 rounded-full placeholder-gray-400 placeholder-opacity-75 pl-10 outline-none focus:none w-full md:w-[30%] text-black mb-4 md:mb-0 md:mr-4"
          />
          <button
            type="submit"
            className="bg-[#FDBF17] text-black cursor-pointer rounded-full p-3 w-full md:w-[20%]"
          >
            Subscribe
          </button>
        </div>

          
        <div className="text-center font-gothic mt-6 text-[18px] md:w-full">
          <p>
            P.S: We take your privacy seriously. Check out our <a href="" className="hover:underline hover:text-blue-700">Privacy Policy</a> to learn more. You can unsubscribe at any time.
          </p>
        </div>

        {/* UNDERLINE */}
        <div className="w-full h-[1px] bg-[#FDBF17] mt-11 mb-6"></div>

          {/* LAST FOOTER AFTER UNDERLINE */}
        <div className="flex flex-col md:flex-row justify-between">
          
          <div className="flex">
            <span className="hover:underline hover:text-blue-700"><a href="">Our Partners</a></span>
            <div className="w-[1.5px] h-[24px] bg-[#FDBF17] ml-4"></div>
          </div>

          <div className="flex">
            <span className="hover:underline hover:text-blue-700"><a href="">Terms Of Use</a></span>
            <div className="w-[1.4px] h-[24px] bg-[#FDBF17] ml-4"></div>
          </div>

          <div>
            <span className="hover:underline hover:text-blue-700"><a href="">Privacy Policy</a></span>
          </div>

          {/* COPYRIGHT */}
          <div>
            <p>Copyright &copy; {currentYear} The Bulb. All Rights Reserved.</p>
          </div>~

          <div>
            <p>Contact with Us</p>
          </div>

          {/* SOCIAL MEDIA LINKS */}
          <div className="flex flex-col justify-between">

            <ul className="flex flex-col md:flex-row justify-between gap-5">

              <li className="text-[#FDBF17]">
                <a href="https://www.facebook.com/ThebulbAfrica/">
                  <FontAwesomeIcon icon = {faFacebookF} />
                </a>
              </li>

              <li className="text-[#FDBF17]">
                <a href="https://www.twitter.com/thebulbafrica">
                  <FontAwesomeIcon icon= {faTwitter} />
                </a>
              </li>

              <li className="text-[#FDBF17]">
                <a href="https://www.instagram.com/thebulbafrica/">
                  <FontAwesomeIcon icon= {faInstagram} />
                </a>
              </li>

              <li className="text-[#FDBF17]">
                <a href="https://discord.gg/v7uzp9xvjg">
                  <FontAwesomeIcon icon= {faDiscord} />
                </a>
              </li>

              <li className="text-[#FDBF17]">
                <a href="https://www.tiktok.com/@thebulbafrica? t=8VICx62j0x4& r=1">
                  <FontAwesomeIcon icon= {faTiktok} />
                </a>
              </li>

              <li className="text-[#FDBF17]">
                <a href="https://www.linkedin.com/company/64547766/">
                  <FontAwesomeIcon icon= {faLinkedinIn} />
                </a>
              </li>

            </ul>

          </div>

        </div>

      </main>

    </footer>

  );

}

export default Footer;