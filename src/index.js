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
img.src = `https://images.unsplash.com/photo-1541709521-b9bae54e4aae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80`;
buttons.appendChild(homepageBtn);
buttons.appendChild(menuBtn);
buttons.appendChild(contactBtn);

const header = document.createElement("div");
header.classList.add("header");
const headerText = document.createElement("h1");
headerText.textContent = "generic restaurant";

header.appendChild(headerText);
header.appendChild(buttons);

const main = document.createElement("div");
main.classList.add("main");

content.appendChild(header);
content.appendChild(main);
content.appendChild(img);
// Default Page
switchTab(home());

function switchTab(tab) {
  main.innerHTML = "";

  main.appendChild(tab);
}
buttons.childNodes.forEach((tab) => {
  tab.addEventListener("click", () => {
    console.log(tab.textContent);
    if (tab.textContent == "Home") switchTab(home());
    if (tab.textContent == "Menu") switchTab(menu());
    if (tab.textContent == "Contact") switchTab(contact());
  });
});
