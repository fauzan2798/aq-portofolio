import ExperienceInfo from "./ExperienceInfo";

function ExperienceTopLeft() {
  return (
    <div className="flex flex-col gap-6 w-[300px]">
      <p className="text-orange font-bold uppercase text-3xl font-special text-center">
        Since 2022
      </p>
      <div className="flex justify-center items-center gap-4">
        <ExperienceInfo number="3" text="years" />
        <p className="font-bold text-6xl text-lightbrown">-</p>
        <ExperienceInfo number={"23"} text={"Websites"} />
      </div>
      <p className="text-white text-center">
        With 3 years of experience building dynamic and user-friendly web
        applications.
      </p>
      <ExperienceInfo number={"$100k"} text={"Max Budget"} />
    </div>
  );
}

export default ExperienceTopLeft;
