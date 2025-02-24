import { FiGithub } from "react-icons/fi";
import SingleContactSocial from "./SingleContactSocial";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

function ContactSocial() {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="" Icon={FiGithub} />
      <SingleContactSocial link="" Icon={FaLinkedin} />
      <SingleContactSocial link="" Icon={FaInstagram} />
    </div>
  );
}

export default ContactSocial;
