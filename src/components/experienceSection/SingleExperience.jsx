/* eslint-disable react/prop-types */
function SingleExperience({ experience }) {
  return (
    <div className="md:h-[350px] md:w-[250px] sm:w-full sm:h-auto border-2 border-orange border-dashed rounded-2xl mt-12 p-4">
      <p className="font-bold text-cyan">{experience.job}</p>
      <p className="text-orange">{experience.company}</p>
      <p className="text-lightgrey">{experience.date}</p>
      <ul className="list-disc mt-4 ml-4 text-white">
        {experience.responsibilites.map((respon, index) => (
          <li key={index}>{respon}</li>
        ))}
      </ul>
    </div>
  );
}

export default SingleExperience;
