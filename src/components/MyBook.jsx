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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // Switch to single page mode (portrait) on smaller screens
      setIsMobile(window.innerWidth < 850);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Dimensions
  // Mobile: Maximize width within safe bounds. 
  // We want to be as large as possible without overflowing horizontally.

  // Dynamic calculation
  const getDimensions = () => {
    if (isMobile) {
      // Mobile Portrait Mode (Single Page)
      // Aim for nearly full width (window width - margins)
      // Height should be proportional or fit available height
      const w = window.innerWidth - 20; // 10px margin each side
      const h = window.innerHeight - 40; // 20px margin top/bottom

      // Cap max size to avoid looking absurd on tablets treated as mobile
      return {
        width: Math.min(w, 550),
        height: Math.min(h, 700)
      };
    }
    // Desktop Landscape (Double Page)
    return { width: 550, height: 700 };
  };

  const dim = getDimensions();

  return (
    <HTMLFlipBook
      width={dim.width}
      height={dim.height}
      size="fixed"
      minWidth={300}
      maxWidth={1000}
      minHeight={400}
      maxHeight={1533}

      showCover={true}
      usePortrait={isMobile}
      flippingTime={1000}
      className="shadow-2xl"
      startZIndex={0}
      autoSize={true}
      maxShadowOpacity={0.5}
      showPageCorners={true}
      disableFlipByClick={false}
      mobileScrollSupport={true}
      clickEventForward={true}
      swipeDistance={30}
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

