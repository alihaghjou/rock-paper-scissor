import paperImg from "../../assets/images/icon-paper.svg";

export default function PaperImage({width, height}: {width: string ,height: string}) {
  return (
    <img
      src={paperImg}
      style={{width: width, height: height}}
      className="paperBorder bg-white rounded-full p-4"
    />
  );
}
