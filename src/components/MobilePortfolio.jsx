import React from "react";
import FirstPage from "./pages/Hero/FirstPage";
import Skills from "./pages/Skills/Skills";
import Services from "./pages/Services/Services";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Cover/Cover"; // Using Cover as Contact/End for now or we can make a dedicated Contact section

// Import Assets
import ProjectImg1 from "../assets/projects/nutriguide.jpg";
import ProjectImg2 from "../assets/projects/smartcare-ai.jpg";
import ProjectImg3 from "../assets/projects/reshme-info.jpg";
import ProjectImg4 from "../assets/projects/kannada-keyboard.jpg";

const ProjectData = [
    {
        name: "NutriGuide",
        description: "Comprehensive fitness and nutrition tracking app built with Flutter for meal planning and health monitoring",
        image: ProjectImg1,
        previewLink: "https://github.com/NextGenXplorer/NutriGuideFLU",
    },
    {
        name: "SmartCare AI",
        description: "Full-stack healthcare application with AI features, built with JavaScript and deployed on Vercel",
        image: ProjectImg2,
        previewLink: "https://smartcare-ai-frontend.vercel.app",
    },
];
const ProjectData2 = [
    {
        name: "Reshme Info",
        description: "Mobile application for sericulture farmers providing market information and farming guidance",
        image: ProjectImg3,
        previewLink: "https://github.com/NextGenXplorer/Reshme_Info",
    },
    {
        name: "Kannada Keyboard",
        description: "Android virtual keyboard enabling users to text in Kannada language with multi-language support",
        image: ProjectImg4,
        previewLink: "https://github.com/appukannadiga/kannadakeybynxg",
    },
];

const MobilePortfolio = () => {
    return (
        <div className="w-full bg-slate-900 overflow-x-hidden">

            {/* Hero Section */}
            <section className="min-h-screen w-full">
                <FirstPage />
            </section>

            {/* Skills Section */}
            <section className="min-h-screen w-full">
                <Skills />
            </section>

            {/* Services Section */}
            <section className="min-h-screen w-full">
                <Services />
            </section>

            {/* Projects Section 1 */}
            <section className="min-h-screen w-full">
                <Projects ProjectData={ProjectData} />
            </section>

            {/* Projects Section 2 */}
            <section className="min-h-screen w-full">
                <Projects ProjectData={ProjectData2} />
            </section>

            {/* About Section */}
            <section className="min-h-screen w-full">
                <About />
            </section>

            {/* Footer / Contact */}
            <footer className="py-8 bg-slate-900 text-center text-slate-500 text-sm">
                <p>© 2024 Manvanth Gowda M. All rights reserved.</p>
            </footer>

        </div>
    );
};

export default MobilePortfolio;
