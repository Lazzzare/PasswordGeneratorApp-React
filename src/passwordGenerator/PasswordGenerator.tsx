import Strength from "./Strength";
import GeneratorButton from "./GeneratorButton";
import CheckBox from "./CheckBox";
import CharacterAmount from "./CharacterAmount";

interface props {
  generateRandomCharacters: () => void;
  rangeValue: number;
  handleInputChange: (e: any) => void;
}

const PasswordGenerator = ({
  generateRandomCharacters,
  rangeValue,
  handleInputChange,
}: props) => {
  return (
    <div className="bg-lightBlack p-4 md:pt-6 md:px-8 md:pb-8 mt-4 w-[343px] md:w-[540px] mx-auto">
      <CharacterAmount
        rangeValue={rangeValue}
        handleInputChange={handleInputChange}
      />
      <CheckBox />
      <Strength />
      <GeneratorButton generateRandomCharacters={generateRandomCharacters} />
    </div>
  );
};

export default PasswordGenerator;
