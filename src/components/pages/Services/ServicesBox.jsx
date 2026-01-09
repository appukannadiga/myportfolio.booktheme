import React from "react";
import { FaCode, FaMobileAlt, FaPalette, FaServer } from "react-icons/fa"; // Updated icons for consistency

const ServicesData = [
  {
    name: "Web Development",
    description: "Building responsive, modern websites with React and Next.js.",
    icon: <FaCode className="text-3xl" />,
    bgColor: "from-blue-400 to-blue-600",
  },
  {
    name: "App Development",
    description: "Creating cross-platform mobile apps using Flutter and React Native.",
    icon: <FaMobileAlt className="text-3xl" />,
    bgColor: "from-lime-400 to-lime-600",
  },
  {
    name: "UI/UX Design",
    description: "Designing intuitive and aesthetic user interfaces for web and mobile.",
    icon: <FaPalette className="text-3xl" />,
    bgColor: "from-fuchsia-400 to-fuchsia-600",
  },
  {
    name: "Backend",
    description: "Developing robust APIs and database architectures with Node.js.",
    icon: <FaServer className="text-3xl" />,
    bgColor: "from-orange-400 to-orange-600",
  },
];

const ServicesBox = () => {
  return (
    <div className="grid grid-cols-2 gap-4 md:gap-6 h-full content-center pb-8 p-1">
      {ServicesData.map(({ name, description, icon, bgColor }, index) => (
        <div
          key={index}
          className="group bg-white/50 backdrop-blur-sm rounded-xl p-4 md:p-6 shadow-lg border border-white/60 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center"
        >
          <div className={`p-4 rounded-full text-white mb-4 bg-gradient-to-br ${bgColor} shadow-md group-hover:scale-110 transition-transform duration-300`}>
            {icon}
          </div>
          <h1 className="text-sm md:text-base font-bold font-heading mb-2 text-slate-800">{name}</h1>
          <p className="text-slate-500 text-[10px] md:text-xs leading-relaxed">
            {description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ServicesBox;

