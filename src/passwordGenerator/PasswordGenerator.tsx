import React, { useState } from "react";
import Strength from "./Strength";
import GeneratorButton from "./GeneratorButton";
import CheckBox from "./CheckBox";
import CharacterAmount from "./CharacterAmount";
import { ChangeEvent } from "react";

interface PasswordGeneratorProps {
  generateRandomCharacters: () => void;
  rangeValue: number;
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void; // Update type here
  handleCheckboxClick: (index: number) => void;
  checkBoxArray: { id: number; text: string }[];
  checkboxStates: boolean[];
}

const PasswordGenerator: React.FC<PasswordGeneratorProps> = () => {
  const [checkboxStates, setCheckboxStates] = useState<boolean[]>([
    false,
    false,
    false,
    false,
  ]);
  const [rangeValue, setRangeValue] = useState<number>(0);
  const [count, setCount] = useState<number>(0);

  const handleCheckboxClick = (index: number) => {
    const updatedCheckboxStates = [...checkboxStates];
    updatedCheckboxStates[index] = !updatedCheckboxStates[index];
    setCheckboxStates(updatedCheckboxStates);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = parseInt(event.target.value, 10);
    newValue = isNaN(newValue) ? 0 : Math.min(20, Math.max(0, newValue));
    setRangeValue(newValue);
  };

  const generateRandomCharacters = () => {
    const trueCount = checkboxStates.filter((item) => item).length;
    setCount(trueCount);
  };

  return (
    <div className="bg-lightBlack p-4 md:pt-6 md:px-8 md:pb-8 mt-4 w-[343px] md:w-[540px] mx-auto">
      <CharacterAmount
        rangeValue={rangeValue}
        handleInputChange={handleInputChange}
      />
      <CheckBox
        handleCheckboxClick={handleCheckboxClick}
        checkBoxArray={[
          { id: 0, text: "Uppercase Letters" },
          { id: 1, text: "Lowercase Letters" },
          { id: 2, text: "Numbers" },
          { id: 3, text: "Symbols" },
        ]}
        checkboxStates={checkboxStates}
      />
      <Strength
        checkboxStates={checkboxStates}
        generateRandomCharacters={generateRandomCharacters}
        count={count}
      />
      <GeneratorButton generateRandomCharacters={generateRandomCharacters} />
    </div>
  );
};

export default PasswordGenerator;
