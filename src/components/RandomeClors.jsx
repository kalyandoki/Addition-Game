import { useState } from "react";
function RandomeClors() {
  const [colors, setColors] = useState([
    "#e75d7c",
    "#b16cef",
    "#53cca4",
    "#efc84d",
    "#628ef0",
    "#184b73",
    "#883e7f",
    "#ed048b",
  ]);

  const handleRandomColors = () => {
    alert("Please select");
    setColors(Math.random(0) * colors.length);
    console.log(Math.floor(Math.random(0) * colors.length));
  };

  return (
    <div className="text-2xl h-screen text-black font-semibold flex flex-col gap-6 justify-center items-center">
      <h1 className="bg-slate-800 font-bold p-4 rounded-md uppercase text-green-300">
        Randome Colors
      </h1>
      <div className="flex flex-col gap-6 justify-center items-center">
        <h1 className="text-4xl text-black-300">
          Click the below button to change color
        </h1>
        <button
          className="bg-blue-400 p-2 rounded-lg"
          onClick={handleRandomColors}
        >
          Click Me
        </button>
        <div className="w-72 h-72 rounded-xl"></div>
      </div>
    </div>
  );
}

export default RandomeClors;
