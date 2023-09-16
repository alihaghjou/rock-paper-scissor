import { choice } from "./App";

export default function Play({handleUserChoice}: {handleUserChoice: (name: choice) => void}) {
  return (
    <>
      <button onClick={() => handleUserChoice("rock")}>Rock</button>
      <button onClick={() => handleUserChoice("paper")}>Paper</button>
      <button onClick={() => handleUserChoice("scissors")}>Scissors</button>
    </>
  );
}
