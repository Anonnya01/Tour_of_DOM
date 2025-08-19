// document.getElementById("players-cont").childNodes[1].parentNode.parentNode;

// create element and set innerText or HTML
const newChild = document.createElement("li");
newChild.innerText = "I do not like football.";

// find the parent

const playerList = document.getElementById("player-list");

// append child
playerList.appendChild(newChild);
