import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clients } from "../Features/Testimonial/TestimonialSlice";
const Testimonial = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.clients.clientDetail);
  console.log(data[0].name);

  return (
    <>
      <div className="grid grid-cols-1 justify-center xl:grid-cols-3   ">
        {data.map(({ name, index, sirName, img }) => (
          <div key={index} className="bg-[#f5fcff] w-full py-10 md:py-20 flex justify-center">
            <div className="max-w-sm flex flex-col gap-4 border rounded-2xl p-6 md:p-8">
              <div>
                <p>Clients Feedback</p>
                <p>Customers Testimonial</p>
              </div>
              {/* stars div */}
              <div className="flex">
                <img src="src/assets/Vector.png" alt="" />
                <img src="src/assets/Vector.png" alt="" />
                <img src="src/assets/Vector.png" alt="" />
                <img src="src/assets/Vector.png" alt="" />
                <img src="src/assets/Vector.png" alt="" />
              </div>
              {/* lorem p */}
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra.
              </p>
              <figcaption className="flex justify-start items-center space-x-3">
                <img
                  className="w-9 h-9 rounded-full"
                  src={img}
                  alt="profile picture"
                />
                <div className="space-y-0.5 font-medium dark:text-white text-left">
                  <div>{name}</div>
                  <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                    {sirName}
                  </div>
                </div>
              </figcaption>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Testimonial;
