import paperImg from "../../assets/images/icon-paper.svg";

export default function PaperImage({ big }: { big: boolean }) {
  return (
    <img
      src={paperImg}
      style={
        big
          ? { width: "180px", height: "180px" }
          : { width: "128px", height: "128px" }
      }
      className="paperBorder bg-white rounded-full p-4"
    />
  );
}
