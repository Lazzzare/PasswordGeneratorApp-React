import Input from "./Input";
import PasswordGenerator from "./PasswordGenerator";

const App = () => {
  return (
    <div className="w-full h-screen bg-bgColor flex flex-col">
      <Input title="Password Generator" />
      <PasswordGenerator />
    </div>
  );
};

export default App;
