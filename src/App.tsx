import { useEffect, useRef, useState } from "react";

type choice = "rock" | "paper" | "scisser";

const choiceArray: choice[] = ["rock", "paper", "scisser"];

function random(user: choice): choice {
  const copy = [...choiceArray];
  const index = copy.indexOf(user);
  if (index > -1) {
    // only splice array when item is found
    copy.splice(index, 1); // 2nd parameter means remove one item only
  }
  return copy[Math.floor(Math.random() * 2)];
}

function play(user: choice, house: choice) {
  switch (user) {
    case "paper":
      if (house === "scisser") return "lose";
      if (house === "rock") return "win";
      break;
    case "rock":
      if (house === "scisser") return "win";
      if (house === "paper") return "lose";
      break;
    case "scisser":
      if (house === "rock") return "lose";
      if (house === "paper") return "win";
      break;
  }
}

function App() {
  const [playState, setPlayState] = useState(true);
  const [result, setResult] = useState("");
  const [house, setHouse] = useState<choice | "">("");
  const [user, setUser] = useState<choice | "">("");
  const [disable, setDisable] = useState(true);
  function handleClick(name: choice) {
    setResult("");
    setHouse("");
    setPlayState(false);
    const s = random(name);
    setUser(name);
    setTimeout(() => {
      setHouse(s);
      const res = play(name, s);
      setTimeout(() => {
        if (!res) return;
        setResult(res);
        setDisable(false);
      }, 2000);
    }, 3000);
  }

  return (
    <main>
      {playState && (
        <>
          <button onClick={() => handleClick("rock")}>Rock</button>
          <button onClick={() => handleClick("paper")}>Paper</button>
          <button onClick={() => handleClick("scisser")}>Scisser</button>
        </>
      )}
      {!playState && (
        <>
          <div>You: {user}</div>
          <div>House: {house}</div>
          <div>{result}</div>
          <button disabled={disable} onClick={() => setPlayState(true)}>
            Play Again
          </button>
        </>
      )}
    </main>
  );
}

export default App;
