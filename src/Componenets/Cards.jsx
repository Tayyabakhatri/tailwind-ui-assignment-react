import React from "react";

const Cards = () => {
  let data = [
    {
      img: "src/assets/Image copy 2.png",
      heading: "Ahuse",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      index: 1,
    },
    {
      img: "src/assets/Image copy.png",
      heading: "App Dashboard",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      index: 2,
    },
    {
      img: "src/assets/Image.png",
      heading: "Easy Rent",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      index: 3,
    },
  ];
  return (
    <>
      <div className="my-40">
        <h1 className="text-center text-4xl font-bold my-6">My projects</h1>
        <div className="flex flex-wrap gap-4 justify-center mt-[50px]">
          {data.map(({ img, index, heading, text }) => (
            <div key={index} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
              <div key={index}>
                <a href="#">
                  <img src={img} className="rounded-t-lg" alt="" />
                </a>
              </div>
              ;
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {heading}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {text}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black underline   rounded-lg hover:bg-[#5E3BEE] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  View in Dribble
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Cards;
