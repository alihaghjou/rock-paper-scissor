import LogoBonus from "../assets/images/logo-bonus.svg"
// import Logo from "../assets/images/logo.svg"

export default function Header({ score }: { score: number }) {
  return (
    <header className="flex justify-between items-center ring ring-[#606e85] rounded p-4 mb-10">
      <img src={LogoBonus} alt="" />
      <span className="flex flex-col justify-center items-center bg-white text-[#2a46c0] rounded p-4">
        SCORE <span className="text-4xl font-semibold text-gray-800">{score}</span>
      </span>
    </header>
  );
}
