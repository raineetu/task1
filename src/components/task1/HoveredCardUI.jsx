import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const HoveredCardUI = ({
  image,
  description,
  bgColor,
  bubbleImage,
  pageBg = "bg-white",
}) => {
  return (
    <>
      <div className="relative w-[592px] mx-auto mt-5 text-base">
        {/* Main Card Container */}
        <div
          className={`relative ${bgColor} rounded-[32px] flex items-center h-[341px] overflow-hidden`}
        >
          {/* Top-Left Bubble Image */}
          <div className="absolute top-2 left-12 w-24 z-20">
            <img src={bubbleImage} alt="wow" className="-rotate-11.91" />
          </div>

          {/* Left Side: Character Image */}
          <div className="relative w-2/3 h-full flex items-end">
            <div className="relative z-10 ">
              <img
                src={image}
                alt="Character"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Right Side: Text Content */}
          <div className=" w-[241px]">
            <h1 className="text-[20px] font-bold">{description}</h1>
          </div>

          {/* Bottom-Right Bubble Image */}
          <div className="absolute bottom-5 right-40 w-20 z-20 ">
            <img src={bubbleImage} alt="wow" className="rotate-146.52" />
          </div>

          {/* Left fake cutout — matches page background to fake a concave indent */}
          <div
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-[40%] w-[100px] h-[100px] ${pageBg} rounded-full z-10`}
          />

          {/* Right fake cutout — matches page background */}
          <div
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-[40%] w-[100px] h-[100px] ${pageBg} rounded-full z-10`}
          />
        </div>

        {/* Left Arrow Button — smaller, centered inside the cutout */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-[40%] z-30 flex items-center justify-center w-[100px] h-[100px] ">
          <button className="w-[62px] h-[62px] flex items-center justify-center rounded-full bg-base shadow-[inset_0px_6px_15px_-2px_#10182814,0px_4px_4px_0px_#00000040]">
            <ArrowLeft className="w-5 h-5 text-neutral-800" />
          </button>
        </div>

        {/* Right Arrow Button — smaller, centered inside the cutout */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-[40%] z-30 flex items-center justify-center w-[100px] h-[100px]">
          <button className="w-[62px] h-[62px] flex items-center justify-center rounded-full bg-base shadow-[inset_0px_6px_15px_-2px_#10182814,0px_4px_4px_0px_#00000040]">
            <ArrowRight className="w-5 h-5 text-neutral-800" />
          </button>
        </div>
      </div>
    </>
  );
};

export default HoveredCardUI;
