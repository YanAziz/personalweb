import React from "react";

const achievementsList = [
  {
    metric: "Projects",
    value: "100+",
  },
  {
    metric: "Github Stars",
    value: "100+",
  },
  {
    metric: "Users",
    value: "100+",
  },
  {
    metric: "Years",
    value: "1+",
  },
];

const AchievementsSection = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="border-[#33353F] border rounded-md py-8 px-16 flex flex-row items-center justify-between">
        {achievementsList.map((achievement, index) => {
          return (
            <div key={index} className="flex flex-col justify-center items-center mx-4">
              <h2 className="text-white font-bold text-4xl">{achievement.metric}</h2>
              <p className="text-[#ADB7BE] text-base">{achievement.value}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;
