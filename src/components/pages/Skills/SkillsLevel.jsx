import React from "react";

const SkillsLevel = ({ skillName, percentage }) => {
  return (
    <div className="mt-2 sm:mt-3 md:mt-4 space-y-1.5 sm:space-y-2">
      <div className="flex justify-between items-end">
        <p className="font-bold text-sm sm:text-base md:text-lg lg:text-xl">{skillName}</p>
        <p className="text-xs sm:text-sm">{percentage}</p>
      </div>
      <div className="w-full bg-slate-200 h-1.5 sm:h-2 rounded-full">
        <div
          style={{ width: `${percentage}` }}
          className="h-1.5 sm:h-2 bg-primary rounded-full transition-all duration-500"
        ></div>
      </div>
    </div>
  );
};

export default SkillsLevel;
