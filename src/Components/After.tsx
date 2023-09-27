import { choice } from "../App";
import ScissorImage from "./Images/ScissorImage";
import RockImage from "./Images/RockImage";
import PaperImage from "./Images/PaperImage";

const arr = [
  {
    name: "scissors",
    image: <ScissorImage big={true} />,
  },
  {
    name: "rock",
    image: <RockImage big={true} />,
  },
  {
    name: "paper",
    image: <PaperImage big={true} />,
  },
];

type propsType = {
  user: "" | choice;
  house: "" | choice;
  result: string;
  disable: boolean;
  setPlayState: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function After({
  user,
  house,
  result,
  disable,
  setPlayState,
}: propsType) {
  const userImage = arr.find((item) => item.name === user)?.image;
  const houseImage = arr.find((item) => item.name === house)?.image;
  return (
    <article className="flex justify-between items-center">
      <div className="flex flex-col items-center justify-center gap-6">
        <h2 className="uppercase">You picked</h2>
        {userImage}
      </div>{" "}
      {result && (
        <div className="flex flex-col animate-in">
          <div className="text-center uppercase text-3xl animate-bounce">You {result}</div>
          <button
            className="bg-white text-black rounded py-1"
            disabled={disable}
            onClick={() => setPlayState(true)}
          >
            Play Again
          </button>
        </div>
      )}
      <div className="flex flex-col items-center justify-center relative gap-6">
        <h2 className="uppercase text-center">the House picked</h2>
        {!house ? (
          <p className="animate-pulse">Selecting...</p>
        ) : (
          <span className="animate-in">{houseImage}</span>
        )}
      </div>
    </article>
  );
}
