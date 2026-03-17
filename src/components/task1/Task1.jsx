// import React from "react";
// import Card from "./Card";
// import { Task1Data, Task1DataHovered } from "../../constants/task1Constant";
// import HoveredCardUI from "./HoveredCardUI";

// const Task1 = () => {
//   const headline = "Step In. Skill Up. Stand Out. 🚀";
//   const greenWords = ["Step", "Skill", "Stand"];

//   return (
//     <div className="mt-5 xl:mt-[22px] mx-10 xl:mx-[113.5px] mb-[60px]">
//       {/* teask 1 header */}
//       <div className="flex flex-col gap-[24px]">
//         <p className="text-black-900 font-medium text-[24px]">
//           Your SkillShikshya Journey
//         </p>
//         <p className="text-[32px] font-bold">
//           {headline.split(" ").map((word, i) => (
//             <span
//               key={i}
//               className={greenWords.includes(word) ? "text-primary-500" : ""}
//             >
//               {word}{" "}
//             </span>
//           ))}
//         </p>
//       </div>

//       {/* task 1 card section */}
//       <div className="mt-[48px] grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[32px]">
//         {Task1DataHovered.map((card) => (
//           // <Card
//           //   key={card.id}
//           //   image={card.image}
//           //   title={card.title}
//           //   subtitle={card.subtitle}
//           //   description={card.description}
//           //   bgColor={card.bgColor}
//           //   imagePosition={card.imagePosition}
//           // />
//           <HoveredCardUI
//             key={card.id}
//             image={card.image}
//             description={card.description}
//             bgColor={card.bgColor}
//             imagePosition={card.imagePosition}
//             bubbleImage={card.bubbleImage}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Task1;

import React, { useState } from "react";
import Card from "./Card";
import { Task1Data, Task1DataHovered } from "../../constants/task1Constant";
import HoveredCardUI from "./HoveredCardUI";

const Task1 = () => {
  const headline = "Step In. Skill Up. Stand Out. 🚀";
  const greenWords = ["Step", "Skill", "Stand"];
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div className="mt-5 xl:mt-[22px] mx-10 xl:mx-[113.5px] mb-[60px]">
      {/* task 1 header */}
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

      {/* task 1 card section */}
      <div className="mt-[48px] grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[32px]">
        {Task1Data.map((card, index) => {
          const hoveredCard = Task1DataHovered[index];
          const isHovered = hoveredId === card.id;

          return (
            <div
              key={card.id}
              className="relative"
              onMouseEnter={() => setHoveredId(card.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Normal Card */}
              <div
                className="transition-all duration-300"
                style={{ opacity: isHovered ? 0 : 1 }}
              >
                <Card
                  image={card.image}
                  title={card.title}
                  subtitle={card.subtitle}
                  description={card.description}
                  bgColor={card.bgColor}
                  imagePosition={card.imagePosition}
                />
              </div>

              {/* Hovered Card — same position, fades in */}
              {hoveredCard && (
                <div
                  className="absolute inset-0 transition-all duration-300"
                  style={{
                    opacity: isHovered ? 1 : 0,
                    pointerEvents: isHovered ? "auto" : "none",
                  }}
                >
                  <HoveredCardUI
                    image={hoveredCard.image}
                    description={hoveredCard.description}
                    bgColor={hoveredCard.bgColor}
                    imagePosition={hoveredCard.imagePosition}
                    bubbleImage={hoveredCard.bubbleImage}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Task1;
