import { choice } from "./App";

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
  return (
    <>
      <div>You: {user}</div>
      <div>House: {house}</div>
      <div>{result}</div>
      <button disabled={disable} onClick={() => setPlayState(true)}>
        Play Again
      </button>
    </>
  );
}
