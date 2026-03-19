import React from "react";
import { ArrowRight } from "lucide-react";

const ActiveCourseCard = ({ cat, num, icons, activeSub }) => {
  return (
    <div className="bg-secondary-500 w-full xl:max-w-[592px] py-[40px] pr-[38px] rounded-[35px] text-secondary-50 flex flex-col items-center justify-center">
      {/* view link */}
      <button className="group flex items-center gap-[8px] ml-auto text-right font-semibold text-[18px]">
        View all Courses{" "}
        <ArrowRight
          size={20}
          className="transition-transform duration-300 group-hover:translate-x-1.5"
        />
      </button>

      {/* icons */}
      <div className="mx-5 xl:mx-[66px] mt-[48px]">
        <div className="flex gap-5 xl:gap-[42px]">
          {icons.map((icon, i) => (
            <img
              key={i}
              src={icon}
              alt={`course-icon-${i}`}
              className="w-[75px] h-[75px] rounded-xl object-contain"
            />
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-[24px]">
          {/* Number */}
          <div className="font-bold text-[90px] xl:text-[150px]">
            {num}
            <sup className="text-[64px] font-bold align-super">+</sup>
          </div>

          {/* category and active sub */}
          <div className="flex flex-col gap-[12px]">
            <div className="text-[32px] font-bold">{cat}</div>

            <div className="text-[18px]">{activeSub}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveCourseCard;
