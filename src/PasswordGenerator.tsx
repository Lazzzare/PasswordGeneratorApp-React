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

const PasswordGenerator = () => {
  return (
    <div className="bg-lightBlack p-4 mt-4 w-[343px] mx-auto">
      <div className="w-full flex flex-row justify-between items-center">
        <h3 className="text-white">Character Length</h3>
        <span className="text-green text-2xl">10</span>
      </div>
      {/* CharacterAmount */}
      <div className="mt-3 mx-auto w-full">
        <input type="range" className="mx-auto w-full" />
      </div>
      {/* CheckBox */}
      <div className="flex flex-col gap-5 text-white mt-8">
        <div className="flex flex-row gap-5">
          <input type="checkbox" />
          <h2>Include Uppercase Letters</h2>
        </div>
        <div className="flex flex-row gap-5">
          <input type="checkbox" />
          <h2>Include Lowercase Letters</h2>
        </div>
        <div className="flex flex-row gap-5">
          <input type="checkbox" />
          <h2>Include Numbers</h2>
        </div>
        <div className="flex flex-row gap-5">
          <input type="checkbox" />
          <h2>Include Symbols</h2>
        </div>
      </div>
      {/* Strength */}
      <div></div>
      {/* GeneratorButton */}
      <div className="flex flex-row relative mt-4">
        <button className="uppercase bg-green text-black py-[18px] w-full">
          Generator{" "}
          <span className="absolute top-6 right-24">{buttonArrowSvg}</span>
        </button>
      </div>
    </div>
  );
};

export default PasswordGenerator;
