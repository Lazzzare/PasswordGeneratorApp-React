const buttonArrowSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
  >
    <path
      d="M5.10553 12L11.1055 6.00002L5.10553 0L3.84051 1.26501L7.681 5.10547L6.10352e-05 5.10547V6.8946L7.681 6.8946L3.84051 10.735L5.10553 12Z"
      fill="#24232C"
    />
  </svg>
);

const GeneratorButton = () => {
  return (
    <div className="flex flex-row relative mt-4 md:mt-8">
      <button className="uppercase bg-green text-black py-[18px] w-full">
        Generate{" "}
        <span className="absolute top-6 right-24 md:right-44">
          {buttonArrowSvg}
        </span>
      </button>
    </div>
  );
};

export default GeneratorButton;
