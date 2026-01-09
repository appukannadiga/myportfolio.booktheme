import React from "react";
import ProjectBox from "./ProjectBox";
import Heading from "../../HelperComp/Heading";

const Projects = ({ ProjectData }) => {
  return (
    <div className="h-full page-shadow bg-slate-50/50 flex flex-col p-4 md:p-10 overflow-hidden">
      <Heading title="Projects" subtitle="Recent Works" />


      <div className="flex-1 w-full flex flex-col justify-center">
        <ProjectBox ProjectData={ProjectData} />
      </div>
    </div>
  );
};

export default Projects;

