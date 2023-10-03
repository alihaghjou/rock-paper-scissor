import SpockImg from "../../assets/images/icon-spock.svg"

export default function SpockImage({width, height}: {width: string ,height: string}) {
  return (
    <img
      src={SpockImg}
      style={{width: width, height: height}}
      className="spockBorder bg-white rounded-full p-4 bg-center"
    />
  )
}
