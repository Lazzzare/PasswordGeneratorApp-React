import Input from "./passwordGenerator/Input";
import PasswordGenerator from "./passwordGenerator/PasswordGenerator";

const App = () => {
  return (
    <div className="w-full h-screen flex-col bg-bgColor flex justify-center">
      <Input title="Password Generator" />
      <PasswordGenerator />
    </div>
  );
};

export default App;
