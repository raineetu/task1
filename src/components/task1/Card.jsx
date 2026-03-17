import React from "react";

const Card = ({
  image,
  title,
  subtitle,
  description,
  bgColor,
  imagePosition = "left",
}) => {
  return (
    <div
      className={`rounded-[30px]  relative flex items-center overflow-visible ${bgColor}`}
    >
      {/* Character Image */}
      <div
        className={`absolute -bottom-15 h-[110%] w-[320px] z-10 ${
          imagePosition === "left" ? "-left-20 " : "-right-6 "
        } `}
      >
        <img
          src={image}
          alt={title}
          className="h-full w-full object-contain object-bottom"
          // style={{ animation: "bounce 8s ease-in-out infinite" }}
        />
      </div>

      {/* Text Content */}
      <div
        className={`flex flex-col my-[58px] gap-[32px] min-w-0 w-full   ${
          imagePosition === "left"
            ? "ml-[206px] mr-[35px] text-right"
            : "mr-[206px] ml-[35px] text-left"
        } `}
      >
        <div className="flex flex-col gap-[10px]">
          <h2 className="text-base font-bold text-[32px] whitespace-nowrap overflow">
            {title}
          </h2>
          <p className="text-base font-medium text-[24px]">{subtitle}</p>
        </div>
        <p className="text-base text-[18px]">{description}</p>
      </div>
    </div>
  );
};

export default Card;
