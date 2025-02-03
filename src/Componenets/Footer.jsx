import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-[#F5FCFF] py-8 md:py-20">
        <div className=" grid grid-cols-1 justify-items-center  mb-5  md:justify-items-center md:mb-16 xl:grid-cols-3">
          <div className="my-5 md:my-0">
            {/* logo */}
            <img src="src/assets/Logo.png" alt="" />
          </div>
          {/* options */}
          <div className="my-5 md:my-0">
            <div
              className="items-center justify-between w-full md:flex md:w-auto md:order-1"
              id="navbar-cta"
            >
              <ul className="flex flex-col font-medium md:p-0 mt-4  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 md:p-0 text-[#5E3BEE] rounded-sm md:bg-transparent md:dark:text-blue-500"
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#5E3BEE] md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Port Folio
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#5E3BEE] md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    About Me
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#5E3BEE] md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Testimonial
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#5E3BEE] md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#5E3BEE] md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Portfolio
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* icon */}
          <div className="flex gap-3">
            <img src="src/assets/Vector (3).png" alt=""className="object-cover" />
            <img src="src/assets/Vector copy.png" alt=""className="object-cover" />
            <img src="src/assets/Vector (1).png" alt="" className="object-cover"/>
            <img src="src/assets/Vector (2).png" alt="" className="object-cover"/>
          </div>
        </div>
        <hr />
        <div className="grid grid-cols-1 justify-items-center m-5 md:grid-cols-2  md:mt-10">
          <div className="my-5 md:m-0 ">
            <img src="src/assets/Made with 💖 by Airdokan.png" alt="" />
          </div>
          <div>
            <ul className="block gap-3  md:flex md:gap-10">
              <li>
                <a href="" className="underline">Privacy Policy</a>
              </li>
              <li>
                <a href=""  className="underline">Terms of Service</a>
              </li>
              <li>
                <a href=""  className="underline">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
