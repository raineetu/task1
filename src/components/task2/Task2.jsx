import React, { useState } from "react";
import ActiveCourseCard from "./ActiveCourseCard";
import { cards } from "../../constants/task2Constant";
import InActiveCourseCard from "./InActiveCourseCard";
import { useNavigate } from "react-router-dom";

const Task2 = () => {
  const navigate = useNavigate();

  const [activeID, setActiveId] = useState(0);

  return (
    <div className="my-10 xl:my-[60px] mx-5 xl:mx-[112px]">
      {/* task 2 header */}
      <div className="flex flex-col gap-[20px]">
        <p className="text-black-900 text-[24px]">
          Explore our classes and master trending skills!
        </p>
        <p className="font-bold text-[32px]">
          Dive Into{" "}
          <span className="text-primary-500">What’s Hot Right Now! 🔥</span>
        </p>
      </div>

      {/* task 2 card */}
      <div className="mt-[48px] flex flex-col xl:flex-row gap-[32px]">
        {cards.map((card) => {
          const isActive = card.id === activeID;

          return (
            <div
              key={card.id}
              onClick={() => setActiveId(card.id)}
              className="relative transition-all duration-500 ease-in-out"
              style={{
                flex: isActive ? "2 1 0%" : "1 1 0%",
              }}
            >
              {/* Active card */}
              <div
                className="transition-opacity duration-500 ease-in-out absolute inset-0"
                style={{
                  opacity: isActive ? 1 : 0,
                  pointerEvents: isActive ? "auto" : "none",
                }}
              >
                <ActiveCourseCard
                  cat={card.cat}
                  num={card.num}
                  icons={card.icons}
                  activeSub={card.activeSub}
                />
              </div>

              {/* Inactive card */}
              <div
                className="transition-opacity duration-500 ease-in-out mt-25 xl:mt-0"
                style={{
                  opacity: isActive ? 0 : 1,
                  pointerEvents: isActive ? "none" : "auto",
                }}
              >
                <InActiveCourseCard
                  cat={card.cat}
                  num={card.num}
                  sub={card.sub}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* link to task 1 */}
      <button
        onClick={() => navigate("/")}
        className="bg-gray-700 text-white rounded-2xl px-5 py-3 mt-16 cursor-pointer"
      >
        View Task1
      </button>
    </div>
  );
};

export default Task2;
