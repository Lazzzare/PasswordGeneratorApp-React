import Strength from "./Strength";
import GeneratorButton from "./GeneratorButton";
import CheckBox from "./CheckBox";
import CharacterAmount from "./CharacterAmount";

const PasswordGenerator = () => {
  return (
    <div className="bg-lightBlack p-4 md:pt-6 md:px-8 md:pb-8 mt-4 w-[343px] md:w-[540px] mx-auto">
      <CharacterAmount />
      <CheckBox />
      <Strength />
      <GeneratorButton />
    </div>
  );
};

export default PasswordGenerator;
