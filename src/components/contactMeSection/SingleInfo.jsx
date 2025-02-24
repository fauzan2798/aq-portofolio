/* eslint-disable react/prop-types */
function SingleInfo({ text, Image }) {
  return (
    <div className="flex gap-4 items-center justify-center">
      <Image className="text-3xl" />
      <p>{text}</p>
    </div>
  );
}

export default SingleInfo;
