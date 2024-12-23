import { useState } from "react";

function AdditionGame() {
  const [userValue, setUserValue] = useState(null);
  const [firstValue, setFirstValue] = useState(
    parseInt(Math.floor(Math.random(0) * 100))
  );
  const [secondValue, setSecondValue] = useState(
    parseInt(Math.floor(Math.random(0) * 100))
  );
  const [correct, setCorrect] = useState(false);
  const [inCorrect, setIncorrect] = useState(false);

  const handleUserInput = (e) => {
    e.preventDefault();
    const userAdd = parseInt(userValue);
    console.log(typeof userAdd);
    console.log(firstValue + secondValue);
    if (userAdd === firstValue + secondValue) {
      // alert("Correct!");
      setCorrect(true);
      // setUserValue("");
    } else {
      // alert("Incorrect!");
      setIncorrect(true);
      // setUserValue("");
    }
  };

  const handleRestart = () => {
    setUserValue("");
    setIncorrect("");
    setCorrect(false);
    setFirstValue(parseInt(Math.floor(Math.random(0) * 100)));
    setSecondValue(parseInt(Math.floor(Math.random(0) * 100)));
  };

  return (
    <div className="text-2xl h-screen w-full border-4 border-x-red-500 border-y-green-500 text-black font-semibold flex flex-col gap-6 justify-center items-center rounded-2xl">
      <h1 className="bg-slate-800 font-bold p-4 rounded-md uppercase text-green-300">
        Addition Game
      </h1>
      <div className="flex flex-col gap-6 justify-center items-center">
        <img
          src="https://img.freepik.com/free-vector/grades-concept-illustration_114360-697.jpg?t=st=1734951799~exp=1734955399~hmac=fd6ebf01cc9650f3af60c351b0cb0ad779100d984578f9007f586b1c82a0bc49&w=996"
          alt="maths"
          className="w-72 h-72 rounded-lg"
        />
        <div className="md:w-96 w-72 h-40 bg-slate-500 rounded-xl flex items-center justify-center">
          <h1 className="w-12 h-10 rounded-xl bg-white text-center">
            {firstValue}
          </h1>
          <h1 className="text-2xl m-2">+</h1>
          <h1 className="w-12 h-10 rounded-xl bg-white text-center">
            {secondValue}
          </h1>
          <h1 className="text-2xl m-2">=</h1>
          <input
            className="w-16 h-10 rounded-xl bg-white text-center"
            type="text"
            value={userValue}
            onChange={(e) => setUserValue(e.target.value)}
          />
        </div>
        <div>
          <button
            onClick={handleUserInput}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md m-2"
          >
            Check
          </button>
          <button
            onClick={handleRestart}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md m-2"
          >
            Restart
          </button>
          {correct ? (
            <h1 className="bg-green-500 text-black p-2 text-center mt-3 rounded-lg w-full">
              Congratulations!
            </h1>
          ) : (
            ""
          )}
          {inCorrect ? (
            <h1 className="text-center bg-red-500 text-black p-2 mt-3 rounded-lg">
              Please Try Again!
            </h1>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default AdditionGame;
