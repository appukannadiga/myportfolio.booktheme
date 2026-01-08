import HTMLFlipBook from "react-pageflip";
import Page from "./Page";
import Cover from "./pages/Cover/Cover";
import coverImg from "../assets/cover.png";
import EndImg from "../assets/last-page.png";
import FirstPage from "./pages/Hero/FirstPage";
import Skills from "./pages/Skills/Skills";
import Services from "./pages/Services/Services";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects.jsx";
import { useState, useEffect } from "react";

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

function MyBook(props) {
  const [dimensions, setDimensions] = useState({ width: 600, height: 700 });

  useEffect(() => {
    const updateDimensions = () => {
      const width = window.innerWidth;

      if (width < 480) {
        // Mobile phones
        setDimensions({ width: Math.min(width - 40, 300), height: 400 });
      } else if (width < 768) {
        // Tablets portrait
        setDimensions({ width: Math.min(width - 60, 450), height: 550 });
      } else if (width < 1024) {
        // Tablets landscape
        setDimensions({ width: 500, height: 600 });
      } else {
        // Desktop
        setDimensions({ width: 600, height: 700 });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return (
    <HTMLFlipBook
      width={dimensions.width}
      height={dimensions.height}
      showCover={true}
      className="shadow-2xl"
    >
      <Page number={1}>
        <Cover coverImg={coverImg} title="Manvanth Gowda M" />
      </Page>
      <Page number={2}>
        <FirstPage />
      </Page>
      <Page number={3}>
        <Skills />
      </Page>
      <Page number={4}>
        <Services />
      </Page>
      <Page number={5}>
        <About />
      </Page>
      <Page number={6}>
        <Projects ProjectData={ProjectData} />
      </Page>
      <Page number={7}>
        <Projects ProjectData={ProjectData2} />
      </Page>
      <Page number={8}>
        <Cover coverImg={EndImg} title="Thanks" />
      </Page>
    </HTMLFlipBook>
  );
}

export default MyBook;
