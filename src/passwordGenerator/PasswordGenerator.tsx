import { useState, ChangeEvent } from "react";
import Strength from "./Strength";
import GeneratorButton from "./GeneratorButton";
import CheckBox from "./CheckBox";
import CharacterAmount from "./CharacterAmount";

interface props {
  generateRandomCharacters: () => void;
  rangeValue: number;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

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

const PasswordGenerator = ({
  generateRandomCharacters,
  rangeValue,
  handleInputChange,
}: props) => {
  const [checkboxStates, setCheckboxStates] = useState(
    checkBoxArray.map(() => false)
  );

  const handleCheckboxClick = (index: number) => {
    const updatedStates = [...checkboxStates];
    updatedStates[index] = !updatedStates[index];
    setCheckboxStates(updatedStates);
  };
  return (
    <div className="bg-lightBlack p-4 md:pt-6 md:px-8 md:pb-8 mt-4 w-[343px] md:w-[540px] mx-auto">
      <CharacterAmount
        rangeValue={rangeValue}
        handleInputChange={handleInputChange}
      />
      <CheckBox
        handleCheckboxClick={handleCheckboxClick}
        checkBoxArray={checkBoxArray}
        checkboxStates={checkboxStates}
      />
      <Strength />
      <GeneratorButton generateRandomCharacters={generateRandomCharacters} />
    </div>
  );
};

export default PasswordGenerator;
