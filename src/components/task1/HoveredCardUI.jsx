import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const HoveredCardUI = ({
  image,
  description,
  bgColor,
  bubbleImage,
  imagePosition = "left",
  pageBg = "bg-white",
}) => {
  const isImageLeft = imagePosition === "left";

  return (
    <div className="relative text-base px-10">
      {/* main card container */}
      <div
        className={`relative ${bgColor} rounded-[32px] flex items-center h-[341px] overflow-hidden`}
      >
        {/* bubble image - top left */}
        {bubbleImage && (
          <div className="absolute top-2 left-12 w-24 z-20">
            <img src={bubbleImage} alt="wow" className="-rotate-12" />
          </div>
        )}

        {/* character image — left position */}
        {isImageLeft && (
          <div className="absolute w-[352px] h-[323px] top-[18px] left-[24px] z-10">
            <img
              src={image}
              alt="Character"
              className="w-full h-full object-contain rounded-bl-[23px]"
            />
          </div>
        )}

        {/* character image — right position */}
        {!isImageLeft && (
          <div className="absolute w-[572px] h-[329px] top-[38px] left-[62px] z-10">
            <img
              src={image}
              alt="Character"
              className="w-full h-full object-contain"
            />
          </div>
        )}

        {/* text content */}
        <div
          className={`absolute z-20 ${
            isImageLeft
              ? "right-6 top-18 -translate-y-1/2 w-[200px]"
              : "left-6 top-6 w-[220px]"
          }`}
        >
          <h1 className="text-[20px] font-bold">{description}</h1>
        </div>

        {/* bubble image - bottom right */}
        {bubbleImage && (
          <div className="absolute bottom-5 right-40 w-20 z-20">
            <img src={bubbleImage} alt="wow" className="rotate-45" />
          </div>
        )}

        {/* left circle cutout */}
        <div
          className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-[100px] h-[100px] ${pageBg} rounded-full z-10`}
        />

        {/* right circle cutout */}
        <div
          className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-[100px] h-[100px] ${pageBg} rounded-full z-10`}
        />
      </div>

      {/* left arrow button */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 z-30 flex items-center justify-center w-[100px] h-[100px]">
        <button className="w-[62px] h-[62px] flex items-center justify-center rounded-full bg-base shadow-[inset_0px_6px_15px_-2px_#10182814,0px_4px_4px_0px_#00000040]">
          <ArrowLeft className="w-5 h-5 text-neutral-800" />
        </button>
      </div>

      {/* right arrow button */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 z-30 flex items-center justify-center w-[100px] h-[100px]">
        <button className="w-[62px] h-[62px] flex items-center justify-center rounded-full bg-base shadow-[inset_0px_6px_15px_-2px_#10182814,0px_4px_4px_0px_#00000040]">
          <ArrowRight className="w-5 h-5 text-neutral-800" />
        </button>
      </div>
    </div>
  );
};

export default HoveredCardUI;
