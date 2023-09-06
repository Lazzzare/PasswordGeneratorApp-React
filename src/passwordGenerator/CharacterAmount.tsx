const CharacterAmount = () => {
  return (
    <div className="flex flex-col">
      <div className="w-full flex flex-row justify-between items-center">
        <h3 className="text-white md:text-lg">Character Length</h3>
        <span className="text-green text-2xl md:text-[32px]">10</span>
      </div>
      <div className="mt-3 mx-auto w-full">
        <input type="range" className="mx-auto w-full" />
      </div>
    </div>
  );
};

export default CharacterAmount;
