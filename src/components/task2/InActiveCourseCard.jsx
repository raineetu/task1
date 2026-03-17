import React from "react";

const InActiveCourseCard = ({ cat, num, activeSub }) => {
  return (
    <div className="bg-secondary-50 rounded-[35px] px-[35px] pt-[41px] h-[461px]">
      <div className="flex flex-col items-center justify-center gap-[24px] text-secondary-500">
        {/* category and active sub */}
        <div className="flex flex-col gap-[12px]  w-[218px] h-[138px] -rotate-90">
          <div className="text-[32px] font-bold">{cat}</div>

          <div className="text-[18px]">{activeSub}</div>
        </div>
        {/* Number */}
        <div className="font-bold text-[150px]">
          {num}
          <sup className="text-[64px] font-bold align-super">+</sup>
        </div>
      </div>
    </div>
  );
};

export default InActiveCourseCard;
