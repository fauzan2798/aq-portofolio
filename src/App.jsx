import AboutMeMain from "./components/aboutMeSection/AboutMeMain";
import ExperienceMain from "./components/experienceSection/ExperienceMain";
import HelperSection from "./components/HelperSection";
import HeroGradient from "./components/heroSection/HeroGradient";
import HeroMain from "./components/heroSection/HeroMain";
import SubHeroSection from "./components/heroSection/SubHeroSection";
import NavbarMain from "./components/navbar/NavbarMain";
import ProjectsMain from "./components/projectsSection/ProjectsMain";
import SkillsMain from "./components/skillsSection/SkillsMain";

function App() {
  return (
    <div className="font-body">
      <NavbarMain />
      <HeroMain />
      <HeroGradient />
      <SubHeroSection />
      <AboutMeMain />
      <SkillsMain />
      <ExperienceMain />
      <ProjectsMain />
      <HelperSection />
    </div>
  );
}

export default App;
