import LizardImg from "../../assets/images/icon-lizard.svg"

export default function LizardImage({width, height}: {width: string ,height: string}) {
  return (
    <img
      src={LizardImg}
      style={{width: width, height: height}}
      className="lizardBorder bg-white rounded-full p-4"
    />
  )
}
