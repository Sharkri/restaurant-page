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
buttons.appendChild(homepageBtn);
buttons.appendChild(menuBtn);
buttons.appendChild(contactBtn);
buttons.classList.add("buttons");
content.appendChild(buttons);
const main = document.createElement("div");
main.classList.add("main");
content.appendChild(main);

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
