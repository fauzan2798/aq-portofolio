import AllExperience from "./AllExperience";
import ExperienceText from "./ExperienceText";
import ExperienceTop from "./ExperienceTop";

function ExperienceMain() {
  return (
    <div id="experience" className="max-w-[1200px] mx-auto px-4">
      <ExperienceText />
      <ExperienceTop />
      <div className="border-2 border-lightgrey mt-10 sm:hidden lg:block "></div>
      <AllExperience />
    </div>
  );
}

export default ExperienceMain;
