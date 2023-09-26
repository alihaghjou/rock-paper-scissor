import { choice } from "../App";
import ScissorsImg from "../assets/images/icon-scissors.svg";
import rockImg from "../assets/images/icon-rock.svg";
import paperImg from "../assets/images/icon-paper.svg";

const arr = [
  {
    name: "scissors",
    image: ScissorsImg,
  },
  {
    name: "rock",
    image: rockImg,
  },
  {
    name: "paper",
    image: paperImg,
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
      <div className="flex flex-col items-center justify-center">
        <h2 className="uppercase">You picked</h2>
        <img src={userImage} className="w-24"/>
      </div>{" "}
      {result && (
        <div className="flex flex-col">
        <div className="text-center uppercase text-3xl">You {result}</div>
        <button className="bg-white text-black rounded py-1" disabled={disable} onClick={() => setPlayState(true)}>
          Play Again
        </button>
      </div>
        )}
      <div className="flex flex-col items-center justify-center">
        <h2 className="uppercase">the House picked</h2>
        <img className="w-24" src={houseImage} />
      </div>
    </article>
  );
}
