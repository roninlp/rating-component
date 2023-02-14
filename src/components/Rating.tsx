import { useState } from "react";
import star from "../assets/icon-star.svg";
import thankYouIllustration from "../assets/illustration-thank-you.svg";

import { AiFillStar } from "react-icons/ai";

const Rating = () => {
  const [active, setActive] = useState<number>();
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <div className="w-[410px] rounded-[40px] bg-gradient-to-b from-darkBlue to-veryDarkBlue p-8 ">
      {isSubmitted ? (
        <div className="flex flex-col items-center justify-center">
          <img src={thankYouIllustration} alt="thanks" />
          <div className="mt-8 w-fit rounded-full bg-slate-700 py-2 px-4 text-center text-orange-500">
            <p>You selected {active} out of 5</p>
          </div>
          <h2 className="pt-8 pb-4 text-3xl font-bold text-white">
            Thank You!
          </h2>
          <p className="text-center text-[15px] text-lightGray">
            We appreciate you taking the time to give a rating. If you ever need
            more support, don't hesitate to get in touch.
          </p>
        </div>
      ) : (
        <form onSubmit={() => setIsSubmitted(true)}>
          <div className="w-fit rounded-full bg-gray-700 p-4">
            <img src={star} alt="star" />
          </div>
          <h2 className="pt-4 pb-4 font-sans text-2xl font-bold text-white">
            How did we do?
          </h2>
          <p className="pb-8 text-gray-400">
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
          <div className="flex justify-between pb-8">
            {[1, 2, 3, 4, 5].map((rating) => (
              <button
                onClick={() => setActive(rating)}
                type="button"
                className={`h-14 w-14 rounded-full p-3 text-xl font-bold   ${
                  active == rating
                    ? "bg-primary text-white"
                    : "bg-gray-800 text-lightGray hover:bg-lightGray hover:text-white"
                }`}
              >
                {rating}
              </button>
            ))}
          </div>
          <button
            disabled={!active}
            className="w-full rounded-full bg-primary py-4 text-lg  font-bold uppercase tracking-widest text-white hover:bg-white hover:text-primary disabled:bg-gray-500 disabled:text-gray-300"
          >
            submit
          </button>
        </form>
      )}
    </div>
  );
};
export default Rating;
