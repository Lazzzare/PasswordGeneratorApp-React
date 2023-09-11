import React from "react";

interface StrengthProps {
  checkboxStates: boolean[];
}

const Strength: React.FC<StrengthProps> = ({ checkboxStates }) => {
  // Count the number of checked checkboxes
  const numberOfCheckedCheckboxes = checkboxStates.filter(
    (isChecked) => isChecked
  ).length;

  // Determine the background color class based on the number of checked checkboxes
  let backgroundColorClass = "";
  if (numberOfCheckedCheckboxes === 0) {
    backgroundColorClass = "bg-red-500"; // Default color when no checkboxes are checked
  } else if (numberOfCheckedCheckboxes === 1) {
    backgroundColorClass = "bg-yellow-500"; // Color when 1 checkbox is checked
  } else if (numberOfCheckedCheckboxes === 2) {
    backgroundColorClass = "bg-blue-500"; // Color when 2 checkboxes are checked
  } else {
    backgroundColorClass = "bg-green-500"; // Color when 3 or more checkboxes are checked
  }

  return (
    <div
      className={`py-[14px] px-4 mt-9 flex flex-row justify-between items-center ${backgroundColorClass}`}
    >
      <h3 className="text-grey">STRENGTH</h3>
      <div className="flex items-center gap-4">
        <h2 className="text-grey text-lg">Weak</h2>
        {/* Bars */}
        <div className="flex flex-row gap-2">
          {/* Render bars here */}
          <div className="w-[10px] h-7 border-2 border-white"></div>
          <div className="w-[10px] h-7 border-2 border-white"></div>
          <div className="w-[10px] h-7 border-2 border-white"></div>
          <div className="w-[10px] h-7 border-2 border-white"></div>
        </div>
      </div>
    </div>
  );
};

export default Strength;
