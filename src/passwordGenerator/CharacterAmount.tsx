interface CharacterAmountProps {
  rangeValue: number;
  handleInputChange: (e: any) => void;
}

const CharacterAmount = ({
  rangeValue,
  handleInputChange,
}: CharacterAmountProps) => {
  return (
    <div className="flex flex-col">
      <div className="w-full flex flex-row justify-between items-center">
        <h3 className="text-white md:text-lg">Character Length</h3>
        <span className="text-green text-2xl md:text-[32px]">{rangeValue}</span>
      </div>
      <div className="mt-3 mx-auto w-full">
        <input
          value={rangeValue}
          type="range"
          className="mx-auto w-full"
          min={0}
          max={20}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default CharacterAmount;
