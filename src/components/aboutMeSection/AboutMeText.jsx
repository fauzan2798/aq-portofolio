function AboutMeText() {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p className="text-white">
        I&apos;m Abdelrahman, a web developer instructor with a passion for
        teaching and coding. I specialize in React and front-end development,
        helping students build real-world projects and master modern web
        technologies also run a Youtube channel, CodeNest, where I create
        tutorials and courses to guide aspiring developers in ther journey
        toward successful careeers in tech. Outside of coding, I enjoy
        continuous learning and sharing knowledge to inspire others to achieve
        their goals.{" "}
      </p>
      <button className="border-orange border rounded-full px-2 py-4 text-lg flex items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white hover:text-cyan">
        My Projects
      </button>
    </div>
  );
}

export default AboutMeText;
