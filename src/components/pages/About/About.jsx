import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { MdFacebook } from "react-icons/md";
import Heading from "../../HelperComp/Heading";

const About = () => {
  return (
    <div className="h-full page-shadow bg-white p-10">
      {/* heading */}
      <Heading
        title="About"
        subtitle="Computer Science Engineering Student | Developer | Tech Enthusiast"
      />

      {/* Details section  */}

      <div className="mt-10 text-slate-500">
        <p>
          I'm a Computer Science Engineering student with a passion for building
          innovative applications that solve real-world problems. My journey in tech
          has been driven by curiosity and a desire to create meaningful digital experiences.
        </p>{" "}
        <br />
        <p>
          From developing healthcare AI solutions to creating language-specific mobile
          keyboards, I love exploring diverse technologies and pushing the boundaries
          of what's possible with code.
        </p>
        {/* Social Links */}
        <div className="flex space-x-4 mt-10">
          <a href="https://www.instagram.com/appu_kannadigaa" target="_blank" rel="noopener noreferrer">
            <AiFillInstagram className="social-btn" />
          </a>
          <a href="https://github.com/appukannadiga" target="_blank" rel="noopener noreferrer">
            <AiFillGithub className="social-btn" />
          </a>
          <a href="https://www.linkedin.com/in/manvanth-gowda-m-50288039b" target="_blank" rel="noopener noreferrer">
            <AiFillLinkedin className="social-btn" />
          </a>
        </div>
        {/* Button Links */}
        <div className="flex space-x-4 mt-4">
          <a href="/Manvanth_Gowda_Resume.html" target="_blank" className="primary-btn">
            Download Resume
          </a>
          <a href="mailto:appumanu3214@gmail.com" className="outline-btn">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
