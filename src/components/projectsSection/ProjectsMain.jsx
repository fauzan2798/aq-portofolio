import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";

const projects = [
  {
    name: "Vacations of Africa",
    year: "Mar2022",
    align: "right",
    image: "../../../public/images/website-img-1.jpg",
    link: "#",
  },
  {
    name: "Moola App",
    year: "Sept2022",
    align: "left",
    image: "../../../public/images/website-img-2.webp",
    link: "#",
  },
  {
    name: "Tourzania",
    year: "Jan2023",
    align: "right",
    image: "../../../public/images/website-img-3.jpg",
    link: "#",
  },
  {
    name: "Vacations of Africa",
    year: "May2024",
    align: "left",
    image: "../../../public/images/website-img-4.jpg",
    link: "#",
  },
];

function ProjectsMain() {
  return (
    <div id="projects" className="max-w-[1200px] max-auto px-4">
      <ProjectsText />
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-10">
        {projects.map((project, index) => (
          <SingleProject
            key={index}
            name={project.name}
            year={project.year}
            align={project.align}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectsMain;
