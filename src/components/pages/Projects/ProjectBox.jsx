import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const ProjectBox = ({ ProjectData }) => {
  return (
    <div className="grid grid-cols-1 gap-6 w-full">
      {ProjectData.map((project, index) => (
        <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group border border-slate-100 relative">

          <div className="relative h-32 md:h-40 overflow-hidden">
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10"></div>
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
          </div>

          <div className="p-4 relative z-20 bg-white">
            <h3 className="text-lg md:text-xl font-bold mb-1 font-heading text-slate-800 flex justify-between items-center">
              {project.name}
              <a href={project.previewLink} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:text-amber-600 transition-colors">
                <FaExternalLinkAlt />
              </a>
            </h3>
            <p className="text-slate-500 text-xs md:text-sm line-clamp-2 leading-relaxed h-10">
              {project.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectBox;

