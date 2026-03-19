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
      className={`rounded-[30px] relative md:h-[341px] flex flex-col md:flex-row md:items-center overflow-visible ${bgColor}`}
    >
      {/* Character Image */}
      <div
        className={`md:absolute md:-bottom-15 h-[200px] md:h-[110%] w-full md:w-[320px] z-10 ${
          imagePosition === "left" ? "md:-left-20" : "md:-right-6 md:order-2"
        }`}
      >
        <img
          src={image}
          alt={title}
          className="h-full w-full object-contain object-bottom"
          style={{
            animation:
              imagePosition === "left"
                ? "card-float-reverse 3s ease-in-out infinite"
                : "card-float 3s ease-in-out infinite",
          }}
        />
      </div>

      {/* Text Content */}
      <div
        className={`flex flex-col gap-[32px] min-w-0 w-full px-6 pb-6 md:my-[58px] md:px-0 text-center md:text-inherit ${
          imagePosition === "left"
            ? "md:ml-[206px] md:mr-[35px] md:text-right"
            : "md:mr-[206px] md:ml-[35px] md:text-left"
        }`}
      >
        <div className="flex flex-col gap-[10px]">
          <h2 className="text-base font-bold text-[32px] whitespace-nowrap">
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
