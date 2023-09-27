import ScissorsImg from "../../assets/images/icon-scissors.svg";

export default function ScissorImage({big} : {big:boolean}) {
  return (
    <img src={ScissorsImg} style={big? {width: "180px", height: "180px"} : {width: "128px", height: "128px"}} className="scissorBorder bg-white rounded-full p-4"/>
  )
}