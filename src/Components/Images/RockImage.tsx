import rockImg from "../../assets/images/icon-rock.svg";

export default function RockImage({
  width,
  height,
}: {
  width: string;
  height: string;
}) {
  return (
    <img
      src={rockImg}
      style={{width: width, height: height}}
      className="rockBorder bg-white rounded-full p-4"
    />
  );
}
