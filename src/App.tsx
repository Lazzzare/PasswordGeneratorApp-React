import { useState } from "react";
import Input from "./passwordGenerator/Input";
import PasswordGenerator from "./passwordGenerator/PasswordGenerator";

const App = () => {
  const [randomCharacters, setRandomCharacters] = useState<string>("");
  const [rangeValue, setRangeValue] = useState(0);

  const handleInputChange = (event: any) => {
    let newValue = parseInt(event.target.value, 10);
    newValue = isNaN(newValue) ? 0 : Math.min(20, Math.max(0, newValue));
    setRangeValue(newValue);
  };

  const generateRandomCharacters = () => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?";
    const length = rangeValue;

    let result = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }

    setRandomCharacters(result);
  };

  return (
    <div className="w-full h-screen flex-col bg-bgColor flex justify-center">
      <Input
        title="Password Generator"
        randomCharacters={randomCharacters}
        setRandomCharacters={setRandomCharacters}
      />
      <PasswordGenerator
        generateRandomCharacters={generateRandomCharacters}
        rangeValue={rangeValue}
        handleInputChange={handleInputChange}
      />
    </div>
  );
};

export default App;
