import LizardImg from "../../assets/images/icon-lizard.svg"

export default function LizardImage({big}: {big: boolean}) {
  return (
    <img
      src={LizardImg}
      style={
        big
          ? { width: "180px", height: "180px" }
          : { width: "128px", height: "128px" }
      }
      className="paperBorder bg-white rounded-full p-4"
    />
  )
}
