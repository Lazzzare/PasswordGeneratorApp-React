import { useState } from "react";

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

const CheckBox = () => {
  const [checked, setChecked] = useState(0);
  return (
    <div className="flex flex-col gap-5 text-white mt-8">
      {checkBoxArray.map((item) => (
        <div
          onClick={() => setChecked(item.id)}
          key={item.id}
          className="flex flex-row gap-5 items-center cursor-pointer"
        >
          {checked === item.id ? (
            checkSvg
          ) : (
            <div className="border-2 w-5 h-5 border-white"></div>
          )}
          <h2 className="text-white md:text-lg">{item.text}</h2>
        </div>
      ))}
    </div>
  );
};

export default CheckBox;
