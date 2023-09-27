import rockImg from "../../assets/images/icon-rock.svg";

export default function RockImage({big} : {big:boolean}) {
  return <img src={rockImg} style={big? {width: "180px", height: "180px"} : {width: "128px", height: "128px"}} className="rockBorder bg-white rounded-full p-4" />;
}
