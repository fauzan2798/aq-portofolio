import SingleExperience from "./SingleExperience";
import { FaArrowRight } from "react-icons/fa";

const experiences = [
  {
    job: "Front-End Developer",
    company: "Alex Apps",
    date: "2022 - Present",
    responsibilites: [
      "Implemeting reusable components.",
      "Participating in large scale application.",
      "Working on the perfomance of web applications.",
      "Generating new ideas for better user experience.",
    ],
  },
  {
    job: "Course Instructor",
    company: "Nucamp",
    date: "2023 - Present",
    responsibilites: [
      "Explaining and facilitating web development concepts.",
      "Help students with their assigments and grade them weekly.",
      "Provide support for students through their learning journey.",
    ],
  },
  {
    job: "Course Instructor",
    company: "Sprints",
    date: "2024 - Present",
    responsibilites: [
      "Teaching JvaScript, React and TailwindsCSS.",
      "Participating in preparing course materials.",
      "Helping students through way in learnign web development technologies.",
    ],
  },
];

function AllExperience() {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => (
        <>
          <SingleExperience key={index} experience={experience} />
          {index < 2 && (
            <FaArrowRight className="text-6xl text-orange lg:block sm:hidden" />
          )}
        </>
      ))}
    </div>
  );
}

export default AllExperience;
