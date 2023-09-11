import { useState, ChangeEvent } from "react";
import Input from "./passwordGenerator/Input";
import PasswordGenerator from "./passwordGenerator/PasswordGenerator";

const App = () => {
  const [randomCharacters, setRandomCharacters] = useState<string>("");
  const [rangeValue, setRangeValue] = useState(0);
  const [checkboxStates, setCheckboxStates] = useState([
    false,
    false,
    false,
    false,
  ]);

  const handleCheckboxClick = (index: number) => {
    const updatedCheckboxStates = [...checkboxStates];
    updatedCheckboxStates[index] = !updatedCheckboxStates[index];
    setCheckboxStates(updatedCheckboxStates);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    let newValue = parseInt(event.target.value, 10);
    newValue = isNaN(newValue) ? 0 : Math.min(20, Math.max(0, newValue));
    setRangeValue(newValue);
  };

  const generateRandomCharacters = () => {
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+[]{}|;:,.<>?";

    let validChars = "";

    if (checkboxStates[0]) validChars += uppercaseChars;
    if (checkboxStates[1]) validChars += lowercaseChars;
    if (checkboxStates[2]) validChars += numberChars;
    if (checkboxStates[3]) validChars += symbolChars;

    let result = "";
    const length = rangeValue;

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * validChars.length);
      result += validChars.charAt(randomIndex);
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
        //
        handleCheckboxClick={handleCheckboxClick}
        checkBoxArray={[
          { id: 0, text: "Uppercase Letters" },
          { id: 1, text: "Lowercase Letters" },
          { id: 2, text: "Numbers" },
          { id: 3, text: "Symbols" },
        ]}
        checkboxStates={checkboxStates}
      />
    </div>
  );
};

export default App;
// import React, { useState, ChangeEvent } from "react";
// import Input from "./passwordGenerator/Input";
// import PasswordGenerator from "./passwordGenerator/PasswordGenerator";

// const App = () => {
//   const [randomCharacters, setRandomCharacters] = useState<string>("");
//   const [rangeValue, setRangeValue] = useState(0);
//   const [checkboxStates, setCheckboxStates] = useState([
//     false,
//     false,
//     false,
//     false,
//   ]);
//   // const [generateClicked, setGenerateClicked] = useState(false); // New state to track Generate button click

//   const handleCheckboxClick = (index: number) => {
//     const updatedCheckboxStates = [...checkboxStates];
//     updatedCheckboxStates[index] = !updatedCheckboxStates[index];
//     setCheckboxStates(updatedCheckboxStates);
//   };

//   const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
//     let newValue = parseInt(event.target.value, 10);
//     newValue = isNaN(newValue) ? 0 : Math.min(20, Math.max(0, newValue));
//     setRangeValue(newValue);
//   };

//   const generateRandomCharacters = () => {
//     const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
//     const numberChars = "0123456789";
//     const symbolChars = "!@#$%^&*()_+[]{}|;:,.<>?";

//     let validChars = "";

//     if (checkboxStates[0]) validChars += uppercaseChars;
//     if (checkboxStates[1]) validChars += lowercaseChars;
//     if (checkboxStates[2]) validChars += numberChars;
//     if (checkboxStates[3]) validChars += symbolChars;

//     let result = "";
//     const length = rangeValue;

//     for (let i = 0; i < length; i++) {
//       const randomIndex = Math.floor(Math.random() * validChars.length);
//       result += validChars.charAt(randomIndex);
//     }

//     setRandomCharacters(result);
//     setGenerateClicked(true); // Set Generate button clicked to true
//   };

//   return (
//     <div className="w-full h-screen flex-col bg-bgColor flex justify-center">
//       <Input
//         title="Password Generator"
//         randomCharacters={randomCharacters}
//         setRandomCharacters={setRandomCharacters}
//       />
//       <PasswordGenerator
//         generateRandomCharacters={generateRandomCharacters}
//         rangeValue={rangeValue}
//         handleInputChange={handleInputChange}
//         handleCheckboxClick={handleCheckboxClick}
//         checkBoxArray={[
//           { id: 0, text: "Uppercase Letters" },
//           { id: 1, text: "Lowercase Letters" },
//           { id: 2, text: "Numbers" },
//           { id: 3, text: "Symbols" },
//         ]}
//         checkboxStates={checkboxStates}
//         // generateClicked={generateClicked} // Pass the generateClicked state to PasswordGenerator
//       />
//     </div>
//   );
// };

// export default App;
