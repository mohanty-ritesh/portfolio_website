import HeroSection from "./Components/HeroSection";
import NavBar from "./Components/NavBar";
import AboutSection from "./Components/AboutSection";
import ProjectSection from "./Components/ProjectSection";
import EmailSection from "./Components/EmailSection";
import SkillsSection from "./Components/SkillsSection";
import Footer from "./Components/Footer";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <NavBar />
      <div id="hi" className="container mx-auto xl:px-12 py-4 mt-24 bg-[#1E1C2094] rounded-md">
        <HeroSection />
      </div>
      <div id="about_me" className="container mx-auto    bg-[#212022]  rounded-md"> <AboutSection /></div>
      <div id="skills" className="container mx-auto    bg-[#212022]  rounded-md"> <SkillsSection /></div>
      <div id="projects" className="container mx-auto px-10 py-4  bg-[#212022]  rounded-md"> <ProjectSection /></div>
      <div id="get_in_touch" className="container mx-auto    bg-[#212022]  rounded-md"> <EmailSection /></div>
      <div  className="container mx-auto  text-[#c4acd0e8]  bg-[#121212] "> <Footer /></div>
      <div><h2 className="bg-[#121212] text-[#585653e0] px-5 text-center py-1">© This Portfolio is Made By Ritesh Mohanty --♥--</h2></div>
    </main>
  );
}
