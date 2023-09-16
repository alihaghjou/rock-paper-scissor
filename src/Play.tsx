import { choice } from "./App";
import ScissorsImg from "./assets/images/icon-scissors.svg";
import rockImg from "./assets/images/icon-rock.svg";
import paperImg from "./assets/images/icon-paper.svg";

export default function Play({
  handleUserChoice,
}: {
  handleUserChoice: (name: choice) => void;
}) {
  return (
    <article className="bg-triangle h-80 flex flex-col bg-contain bg-no-repeat bg-center justify-between items-center m-auto max-w-sm">
      <div className="flex justify-between w-full -translate-y-3">
        <button onClick={() => handleUserChoice("rock")} className="">
          <img src={rockImg} />
        </button>
        <button onClick={() => handleUserChoice("paper")}>
          <img src={paperImg} />
        </button>
      </div>
      <button onClick={() => handleUserChoice("scissors")}>
        <img src={ScissorsImg} />
      </button>
    </article>
  );
}