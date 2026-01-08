import React from "react";
import personImg from "../../../assets/profile.jpg";

const FirstPage = () => {
  return (
    <div className="h-full">
      <main className="h-full w-full bg-secondary page-shadow">
        <div className="p-6 md:p-10 space-y-4">
          {/* image-container */}
          <div>
            <img src={personImg} alt="Manvanth Gowda M" className="w-[200px] md:w-[300px] mx-auto rounded-full" />
          </div>
          {/* text-container */}
          <div>
            <div className="space-y-3">
              <p className="uppercase text-sm md:text-base">Hello</p>
              <p className="text-3xl md:text-4xl lg:text-6xl font-bold text-black/80">
                I'm Manvanth Gowda M
              </p>
              <p className="text-black/75 text-left text-sm md:text-base">UI Developer • Vibe Coder • Full Stack App Developer</p>
              <p className="text-black/75 text-sm md:text-base">
                Computer Science Engineering student passionate about creating beautiful,
                functional applications. Specializing in UI development, full-stack solutions,
                and mobile app development.
              </p>
              <a
                className="inline-block primary-btn "
                href="mailto:appumanu3214@gmail.com"
              >
                {" "}
                Hire me
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FirstPage;
