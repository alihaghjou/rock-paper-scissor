import SpockImg from "../../assets/images/icon-spock.svg"

export default function SpockImage({big}: {big: boolean}) {
  return (
    <img
      src={SpockImg}
      style={
        big
          ? { width: "180px", height: "180px" }
          : { width: "128px", height: "128px" }
      }
      className="paperBorder bg-white rounded-full p-4"
    />
  )
}
