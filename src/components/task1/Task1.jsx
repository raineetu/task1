import React from "react";
import Card from "./Card";
import { Task1Data } from "../../constants/task1Constant";

const Task1 = () => {
  const headline = "Step In. Skill Up. Stand Out. 🚀";
  const greenWords = ["Step", "Skill", "Stand"];

  return (
    <div className="mt-5 xl:mt-[22px] mx-10 xl:mx-[113.5px] mb-[60px]">
      {/* header */}
      <div className="flex flex-col gap-[24px]">
        <p className="text-black-900 font-medium text-[24px]">
          Your SkillShikshya Journey
        </p>
        <p className="text-[32px] font-bold">
          {headline.split(" ").map((word, i) => (
            <span
              key={i}
              className={greenWords.includes(word) ? "text-primary-500" : ""}
            >
              {word}{" "}
            </span>
          ))}
        </p>
      </div>

      {/* card section */}
      <div className="mt-[48px] grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[32px]">
        {Task1Data.map((card) => (
          <Card
            key={card.id}
            image={card.image}
            title={card.title}
            subtitle={card.subtitle}
            description={card.description}
            bgColor={card.bgColor}
            imagePosition={card.imagePosition}
          />
        ))}
      </div>
    </div>
  );
};

export default Task1;
