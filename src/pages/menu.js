export default function menu() {
  const content = document.querySelector("#content");
  const menu = document.createElement("div");
  const container = document.createElement("div");
  menu.textContent = "menuss";
  container.appendChild(menu);
  return container;
}
