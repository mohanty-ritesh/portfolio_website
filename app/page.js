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
      <div className="container mx-auto px-12 py-4 mt-24">
        <HeroSection />
      </div>
      <div> <AboutSection /></div>
      <div> <ProjectSection /></div>
      <div> <SkillsSection /></div>
      <div> <EmailSection /></div>
      <div> <Footer /></div>
      <div><h2 className="bg-[#212022] text-[#585653e0] text-center py-1">© This Portfolio is Made By Ritesh Mohanty --♥--</h2></div>
    </main>
  );
}
