import React from "react";
import { arrow } from "../../constants/task2Constant";

const InActiveCourseCard = ({ cat, num, sub, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="relative bg-secondary-50 rounded-[35px] px-[24px] xl:px-[35px] pt-[30px] xl:pt-[41px] h-[300px] md:h-[380px] xl:h-[461px] group cursor-pointer animate-cardOut"
    >
      {/* click me icon */}
      <div className="absolute top-[-50px] left-0 right-0 flex flex-col items-center opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out z-10">
        <p className="text-[16px] font-regular text-center">Click me!</p>
        <img src={arrow} alt="hand drawn icon" width={50} height={50} />
      </div>

      <div className="flex flex-col items-center justify-center mt-5 xl:mt-7 gap-[16px] xl:gap-[24px] text-secondary-500">
        {/* rotated text */}
        <div className="flex flex-col gap-[8px] xl:gap-[12px] w-[140px] md:w-[180px] xl:w-[218px] h-28 md:h-36 xl:h-40 -rotate-90">
          <div className="text-[20px] md:text-[26px] xl:text-[32px] font-bold">{cat}</div>
          <div className="text-[13px] md:text-[16px] xl:text-[18px]">{sub}</div>
        </div>

        {/* number */}
        <div className="font-bold text-[80px] md:text-[120px] xl:text-[150px]">
          {num}
          <sup className="inline-block text-[36px] md:text-[52px] xl:text-[64px] align-super transition-all duration-300 group-hover:-translate-y-2">
            +
          </sup>
        </div>
      </div>
    </div>
  );
};

export default InActiveCourseCard;