import { choice } from "./App";

const choiceArray: choice[] = ["rock", "paper", "scissors", "lizard", "spock"];

export function random(user: choice): choice {
  const copy = [...choiceArray];
  const index = copy.indexOf(user);
  if (index > -1) {
    copy.splice(index, 1);
  }
  return copy[Math.floor(Math.random() * 2)];
}

export function playGame(user: choice, house: choice) {
  switch (user) {
    case "paper":
      if (house === "scissors") return "lose";
      if (house === "rock") return "win";
      if (house === "lizard") return "lose";
      if (house === "spock") return "win"
      break;
    case "rock":
      if (house === "scissors") return "win";
      if (house === "paper") return "lose";
      if (house === "lizard") return "win"
      if (house === "spock") return "lose"
      break;
    case "scissors":
      if (house === "rock") return "lose";
      if (house === "paper") return "win";
      if (house === "lizard") return "win"
      if (house === "spock") return "lose"
      break;
    case "lizard":
      if (house === "rock") return "lose";
      if (house === "paper") return "win";
      if (house === "scissors") return "lose"
      if (house === "spock") return "win"
      break
    case "spock":
      if (house === "rock") return "win";
      if (house === "paper") return "lose";
      if (house === "scissors") return "win"
      if (house === "lizard") return "lose"
      break
  }
}
