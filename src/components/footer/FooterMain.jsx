import { Link } from "react-scroll";

const links = [
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Experience", section: "experience" },
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" },
];

function FooterMain() {
  return (
    <div className="px-4">
      <div className="w-full h-[1px] bg-lightgrey mt-24"></div>
      <div className="md:flex sm:hidden justify-between mt-4 max-w-[1200px]">
        <p className="text-3xl text-lightgrey">Abdelrahman Qassem</p>
        <ul className="flex gap-4 text-lightgrey text-xl">
          {links.map((link, index) => (
            <li key={index}>
              <Link
                href={link.section}
                to={link.section}
                smooth={true}
                spy={true}
                duration={500}
                offset={-130}
                className="hover:text-white transition-all duration-500 cursor-pointer"
              >
                {link.link}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <p className="max-w-[1200px] mx-auto text-right mt-2 mb-12 text-sm text-lightbrown">
        2024 Abdelrahman | Al Rights Reserved.
      </p>
    </div>
  );
}

export default FooterMain;
