import { useEffect, useState } from "react";
import Play from "./Play";
import After from "./After";
import { playGame, random } from "./functions";
import Header from "./Header";

export type choice = "rock" | "paper" | "scissors";

function App() {
  const [score, setScore] = useState(0);
  const [playState, setPlayState] = useState(true);
  const [result, setResult] = useState("");
  const [house, setHouse] = useState<choice | "">("");
  const [user, setUser] = useState<choice | "">("");
  const [disable, setDisable] = useState(true);
  function handleUserChoice(name: choice) {
    setResult("");
    setHouse("");
    setPlayState(false);
    const s = random(name);
    setUser(name);
    setTimeout(() => {
      setHouse(s);
      const res = playGame(name, s);
      setTimeout(() => {
        if (!res) return;
        if (res === "win") setScore((prev) => prev + 1);
        console.log(score);
        localStorage.removeItem("score");
        localStorage.setItem("score", JSON.stringify(score + 1));
        setResult(res);
        setDisable(false);
      }, 2000);
    }, 3000);
  }

  useEffect(() => {
    const storageScore = localStorage.getItem("score");
    if (storageScore) {
      const s = JSON.parse(storageScore);
      setScore(s);
    } else {
      setScore(0);
    }
  }, []);

  return (
    <main className="h-screen bg-gradient-to-r from-[#1f3756] to-[#141539] text-white p-4">
      <section className="w-2/3 m-auto">
        <Header score={score} />
        {playState && <Play handleUserChoice={handleUserChoice} />}
        {!playState && (
          <After
            user={user}
            house={house}
            disable={disable}
            result={result}
            setPlayState={setPlayState}
          />
        )}
      </section>
      <button>Rules</button>
    </main>
  );
}

export default App;
