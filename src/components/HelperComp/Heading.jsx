import React from "react";

const Heading = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col items-center mb-8 group">
      <h1 className="text-3xl md:text-4xl font-bold font-heading text-slate-800 relative pb-4 uppercase tracking-wider">
        {title}
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full transition-all duration-300 group-hover:w-24"></span>
      </h1>
      <p className="text-xs md:text-sm text-slate-500 font-medium mt-4 uppercase tracking-[0.2em]">
        {subtitle}
      </p>
    </div>
  );
};

export default Heading;

