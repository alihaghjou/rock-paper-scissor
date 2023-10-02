import { useEffect, useState } from "react";
import Play from "./Components/Play";
import After from "./Components/After";
import { playGame, random } from "./functions";
import Header from "./Components/Header";
import MyModal from "./Components/Modal";

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
        localStorage.removeItem("score");
        localStorage.setItem("score", JSON.stringify(score + 1));
        setResult(res);
        setDisable(false);
      }, 1000);
    }, 2000);
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
    <main className="min-h-screen text-white p-4 pb-8">
      <section className="md:w-2/3 m-auto mb-6">
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
      <MyModal />
    </main>
  );
}

export default App;
