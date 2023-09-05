import { useState } from "react";

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

const checkBoxArray = [
  {
    id: 1,
    text: "Include Uppercase Letters",
  },
  {
    id: 2,
    text: "Include Lowercase Letters",
  },
  {
    id: 3,
    text: "Include Numbers",
  },
  {
    id: 4,
    text: "Include Symbols",
  },
];

const checkSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
  >
    <rect width="20" height="20" fill="#A4FFAF" />
    <path
      d="M4 10.6066L7.39341 14L15.3934 6"
      stroke="#18171F"
      strokeWidth="3"
    />
  </svg>
);

const PasswordGenerator = () => {
  const [checked, setChecked] = useState(0);

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
      {checkBoxArray.map((item, id) => {
        return (
          <div key={id} className="flex flex-col gap-5 text-white mt-8">
            <div
              onClick={() => setChecked(item.id)}
              className="flex flex-row gap-5 items-center cursor-pointer"
            >
              {checked === item.id ? (
                checkSvg
              ) : (
                <div className="border-2 w-5 h-5 border-white"></div>
              )}
              <h2>{item.text}</h2>
            </div>
          </div>
        );
      })}

      {/* Strength */}
      <div></div>
      {/* GeneratorButton */}
      <div className="flex flex-row relative mt-4">
        <button className="uppercase bg-green text-black py-[18px] w-full">
          Generate{" "}
          <span className="absolute top-6 right-24">{buttonArrowSvg}</span>
        </button>
      </div>
    </div>
  );
};

export default PasswordGenerator;
