import ScissorsImg from "../../assets/images/icon-scissors.svg";

export default function ScissorImage({
  width,
  height,
}: {
  width: string;
  height: string;
}) {
  return (
    <img
      src={ScissorsImg}
      style={{width: width, height: height}}
      className="scissorBorder bg-white rounded-full p-4"
    />
  );
}
