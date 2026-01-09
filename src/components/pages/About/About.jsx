import React from "react";
import Heading from "../../HelperComp/Heading";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

const About = () => {
  return (
    <div className="h-full page-shadow bg-slate-50/50 flex flex-col p-4 md:p-10">
      <Heading title="About" subtitle="My Journey" />



      <div className="flex-1 flex flex-col justify-center space-y-6 md:space-y-8 relative z-10">
        <div className="space-y-4 text-center font-medium font-body text-slate-600">
          <p className="leading-relaxed">
            I'm a passionate <span className="text-slate-900 font-bold">Full Stack Developer</span> with a knack for building immersive web and mobile applications.
            My journey began with a curiosity for how things work on the internet, which led me to dive deep into
            technologies like React, Flutter, and Node.js.
          </p>
          <p className="leading-relaxed">
            I love turning complex problems into simple, beautiful, and intuitive designs. When I'm not coding,
            you can find me exploring new tech trends or gaming.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6">
          <a href="#" className="text-4xl hover:text-primary transition-colors duration-300 hover:scale-110 transform">
            <AiFillGithub />
          </a>
          <a href="#" className="text-4xl hover:text-blue-600 transition-colors duration-300 hover:scale-110 transform">
            <AiFillLinkedin />
          </a>
          <a href="#" className="text-4xl hover:text-pink-600 transition-colors duration-300 hover:scale-110 transform">
            <AiFillInstagram />
          </a>
        </div>

        {/* Button container */}
        <div className="flex justify-center gap-4 pt-4">
          <a href="#" className="premium-btn shadow-xl text-sm md:text-base">
            Download Resume
          </a>
          <a href="mailto:appumanu3214@gmail.com" className="px-6 py-2 border-2 border-slate-300 rounded-full hover:border-primary hover:text-primary font-bold transition-all duration-300 text-slate-600 text-sm md:text-base">
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;

