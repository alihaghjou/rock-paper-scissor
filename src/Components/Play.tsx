import type { choice } from "../App";
import RockImage from "./Images/RockImage";
import PaperImage from "./Images/PaperImage";
import ScissorImage from "./Images/ScissorImage";
import LizardImage from "./Images/LizardImage";
import SpockImage from "./Images/SpockImage";

export default function Play({
  handleUserChoice,
}: {
  handleUserChoice: (name: choice) => void;
}) {
  return (
    <article className="bg-pentagon flex flex-col h-full bg-contain bg-no-repeat bg-center justify-between items-center max-w-md m-auto">
      <button onClick={() => handleUserChoice("rock")} className="-translate-y-5">
        <RockImage width="120px" height="120px" />
      </button>
      <div className="flex justify-between items-center w-full -translate-y-5">
        <button onClick={() => handleUserChoice("paper")}>
          <PaperImage width="120px" height="120px" />
        </button>
        <button onClick={() => handleUserChoice("scissors")}>
          <ScissorImage width="120px" height="120px" />
        </button>
      </div>
      <div className="flex w-full items-center justify-around translate-y-1/3">
        <button onClick={() => handleUserChoice("lizard")}>
          <LizardImage width="120px" height="120px" />
        </button>
        <button onClick={() => handleUserChoice("spock")}>
          <SpockImage width="120px" height="120px" />
        </button>
      </div>
    </article>
  );
}
