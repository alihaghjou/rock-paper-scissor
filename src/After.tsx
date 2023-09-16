import { choice } from "./App";
import ScissorsImg from "./assets/images/icon-scissors.svg";
import rockImg from "./assets/images/icon-rock.svg";
import paperImg from "./assets/images/icon-paper.svg";

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
    <article className="flex justify-between">
      <div className="flex flex-col">
        <h2 className="uppercase">You picked</h2>
        <img src={userImage} />
      </div>{" "}
      <div>
        <div>{result}</div>
        <button disabled={disable} onClick={() => setPlayState(true)}>
          Play Again
        </button>
      </div>
      <div className="flex flex-col">
        <h2 className="uppercase">the House picked</h2>
        <img src={houseImage} />
      </div>
    </article>
  );
}
