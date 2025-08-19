const mainContainer = document.getElementById("main");

// create child

const placeSection = document.createElement("section");
const h1 = document.createElement("h1");
h1.innerText = "things I love";
const ul = document.createElement("ul");

const li1 = document.createElement("li");
li1.innerText ="cats";
ul.appendChild(li1)

const li2 = document.createElement("li");
li2.innerText ="food";
ul.appendChild(li2)
const li3 = document.createElement("li");
li3.innerText ="quran";

// append

mainContainer.appendChild(placeSection);
placeSection.appendChild(h1);
placeSection.appendChild(ul);

ul.appendChild(li3)
