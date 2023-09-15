const Strength = () => {
  return (
    <div
      className={`py-[14px] px-4 mt-9 flex flex-row justify-between items-center bg-darkBlack`}
    >
      <h3 className="text-grey">STRENGTH</h3>
      <div className="flex items-center gap-4">
        <h2 className="text-grey text-lg">Weak</h2>
        {/* Bars */}
        <div className="flex flex-row gap-2">
          <div className="w-[10px] h-7 border-2 border-white"></div>
          <div className="w-[10px] h-7 border-2 border-white"></div>
          <div className="w-[10px] h-7 border-2 border-white"></div>
          <div className="w-[10px] h-7 border-2 border-white"></div>
        </div>
      </div>
    </div>
  );
};

export default Strength;
