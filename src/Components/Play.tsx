import type { choice } from "../App";
import RockImage from "./Images/RockImage";
import PaperImage from "./Images/PaperImage";
import ScissorImage from "./Images/ScissorImage";

export default function Play({
  handleUserChoice,
}: {
  handleUserChoice: (name: choice) => void;
}) {
  return (
    <article className="bg-triangle h-80 flex flex-col bg-contain bg-no-repeat bg-center justify-between items-center m-auto max-w-sm">
      <div className="flex justify-between w-full -translate-y-3">
        <button
          onClick={() => handleUserChoice("rock")}
          
        >
          <RockImage />
        </button>
        <button
          onClick={() => handleUserChoice("paper")}
          
        >
          <PaperImage />
        </button>
      </div>
      <button
        onClick={() => handleUserChoice("scissors")}
        
      >
        <ScissorImage />
      </button>
    </article>
  );
}
