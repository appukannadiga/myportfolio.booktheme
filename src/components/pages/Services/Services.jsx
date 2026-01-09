import React from "react";
import ServicesBox from "./ServicesBox";
import Heading from "../../HelperComp/Heading";

const Services = () => {
  return (
    <div className="h-full page-shadow bg-slate-50/50 flex flex-col p-4 md:p-12 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute bottom-[-10%] right-[-10%] w-56 h-56 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 h-full flex flex-col">
        <Heading title="Services" subtitle="What I offer" />
        <div className="flex-1 flex flex-col justify-center">
          <ServicesBox />
        </div>
      </div>
    </div>
  );
};

export default Services;

