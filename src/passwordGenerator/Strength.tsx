import React from "react";

interface StrengthProps {
  count: number;
  rangeValue: number;
  generateRandomCharacters: () => void;
}

const Strength: React.FC<StrengthProps> = ({ count, rangeValue }) => {
  const determineStrength = (count: number) => {
    if (count === 1 && rangeValue < 5 && rangeValue) {
      return "TOO WEAK!";
    } else if (count === 2 && rangeValue > 10) {
      return "MEDIUM";
    } else if (count === 3 && rangeValue > 8) {
      return "STRONG";
    } else if (count === 4 && rangeValue > 10) {
      return "STRONG";
    } else if (count === 1 && rangeValue >= 5) {
      return "WEAK";
    } else if (count === 2 && rangeValue <= 5) {
      return "TOO WEAK";
    } else if (count === 2 && rangeValue < 11) {
      return "WEAK";
    } else if (count === 3 && rangeValue <= 4) {
      return "TOO WEAK";
    } else if (count === 3 && rangeValue <= 8) {
      return "MEDIUM";
    } else if (count === 4 && rangeValue <= 4) {
      return "WEAK";
    } else if (count === 4 && rangeValue <= 10) {
      return "MEDIUM";
    }
    return "";
  };

  const renderBars = (count: number) => {
    const bars = [];
    for (let i = 0; i < 4; i++) {
      const isActive = i < count;
      const barClassName = isActive ? "active-bar" : "inactive-bar";
      bars.push(
        <div key={i} className={`w-[10px] h-7 border-2 ${barClassName}`}></div>
      );
    }
    return bars;
  };

  return (
    <div
      className={`py-[14px] px-4 mt-9 flex flex-row justify-between items-center bg-darkBlack`}
    >
      <h3 className="text-grey">STRENGTH</h3>
      <div className="flex items-center gap-4">
        <h2 className="text-grey text-lg">{determineStrength(count)}</h2>
        {/* Barssss */}
        <div className="flex flex-row gap-2">{renderBars(count)}</div>
      </div>
    </div>
  );
};

export default Strength;
