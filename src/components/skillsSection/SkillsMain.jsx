import AllSkills from "./AllSkills";
import AllSkillsSM from "./AllSkillsSM";
import SkillsText from "./SkillsText";
import SubSkills from "./SubSkills";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

function SkillsMain() {
  return (
    <div id="skills">
      <div className="max-w-[1200px] px-4 mx-auto min-h-[600px] relative overflow-hidden">
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ once: false, amount: 0 }}
        >
          <SkillsText />
        </motion.div>
        <motion.div className="bottom-[50px] absolute left-[50%] -translate-x-[50%] lg:block sm:hidden">
          <AllSkills />
        </motion.div>
        <div className="sm:block lg:hidden">
          <AllSkillsSM />
        </div>
      </div>
      <SubSkills />
    </div>
  );
}

export default SkillsMain;
