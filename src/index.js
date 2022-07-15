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
content.appendChild(homepageBtn);
content.appendChild(menuBtn);
content.appendChild(contactBtn);
const main = document.createElement("div");
content.appendChild(main);

// Default Page
switchTab(home());

function switchTab(tab) {
  main.innerHTML = "";

  main.appendChild(tab);
}
const buttonTabs = document.querySelectorAll("button");
buttonTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    console.log(tab.textContent);
    if (tab.textContent == "Home") switchTab(home());
    if (tab.textContent == "Menu") switchTab(menu());
    if (tab.textContent == "Contact") switchTab(contact());
  });
});
