import { ChangeEvent } from "react";
import Strength from "./Strength";
import GeneratorButton from "./GeneratorButton";
import CheckBox from "./CheckBox";
import CharacterAmount from "./CharacterAmount";

interface props {
  generateRandomCharacters: () => void;
  rangeValue: number;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleCheckboxClick: (index: number) => void;
  checkBoxArray: { id: number; text: string }[];
  checkboxStates: boolean[];
}

const PasswordGenerator = ({
  generateRandomCharacters,
  rangeValue,
  handleInputChange,
  handleCheckboxClick,
  checkBoxArray,
  checkboxStates,
}: props) => {
  const trueCount = checkboxStates.filter((item) => item).length;

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
      <Strength count={trueCount} />
      <GeneratorButton
        generateRandomCharacters={generateRandomCharacters}
        updateStrength={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    </div>
  );
};

export default PasswordGenerator;
