import { useState } from "react";

const CharacterAmount = () => {
  const [rangeValue, setRangeValue] = useState(0);

  const handleInputChange = (event: any) => {
    let newValue = parseInt(event.target.value, 10);
    newValue = isNaN(newValue) ? 0 : Math.min(20, Math.max(0, newValue));
    setRangeValue(newValue);
  };
  return (
    <div className="flex flex-col">
      <div className="w-full flex flex-row justify-between items-center">
        <h3 className="text-white md:text-lg">Character Length</h3>
        <span className="text-green text-2xl md:text-[32px]">{rangeValue}</span>
      </div>
      <div className="mt-3 mx-auto w-full">
        <input
          type="range"
          className="mx-auto w-full"
          value={rangeValue}
          min={0}
          max={20}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default CharacterAmount;
