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

interface CheckBoxProps {
  handleCheckboxClick: (index: number) => void;
  checkBoxArray: Array<{ id: number; text: string }>;
  checkboxStates: Array<boolean>;
}

const CheckBox = ({
  handleCheckboxClick,
  checkBoxArray,
  checkboxStates,
}: CheckBoxProps) => {
  return (
    <div className="flex flex-col gap-5 text-white mt-8">
      {checkBoxArray.map((item, index) => (
        <div
          onClick={() => handleCheckboxClick(index)}
          key={item.id}
          className="flex flex-row gap-5 items-center cursor-pointer"
        >
          {checkboxStates[index] ? (
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
