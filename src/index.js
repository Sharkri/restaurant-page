import home from "./pages/home";
import contact from "./pages/contact";
import menu from "./pages/menu";

const content = document.querySelector("#content");

const homepageBtn = document.createElement("button");
const menuBtn = document.createElement("button");
const contactBtn = document.createElement("button");
homepageBtn.textContent = "Home";
menuBtn.textContent = "Menu";
contactBtn.textContent = "Contact";
const buttons = document.createElement("div");
buttons.classList.add("buttons");
const img = new Image();
img.src = "../images/food.png";
buttons.appendChild(homepageBtn);
buttons.appendChild(menuBtn);
buttons.appendChild(contactBtn);

const header = document.createElement("div");
header.classList.add("header");
const headerText = document.createElement("h1");
headerText.textContent = "Bonjour Appetite";

header.appendChild(headerText);
header.appendChild(buttons);

const main = document.createElement("div");
main.classList.add("main");

content.appendChild(header);
content.appendChild(main);
content.appendChild(img);
// Default
homepageBtn.classList.toggle("active");
console.log(homepageBtn);
switchTab(home());

function switchTab(tab) {
  main.innerHTML = "";
  main.appendChild(tab);
}

function turnOffActive() {
  buttons.childNodes.forEach((a) => {
    if (a.classList.length) a.classList.toggle("active");
  });
}

buttons.childNodes.forEach((tab) => {
  tab.addEventListener("click", () => {
    turnOffActive();
    if (tab.classList.length == 0) tab.classList.toggle("active");

    if (tab.textContent == "Home") switchTab(home());
    if (tab.textContent == "Menu") switchTab(menu());
    if (tab.textContent == "Contact") switchTab(contact());
  });
});
