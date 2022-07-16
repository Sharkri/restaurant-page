export default function menu() {
  const menu = document.createElement("div");
  const container = document.createElement("div");
  const header = document.createElement("h1");
  header.textContent = "Menu";
  menu.textContent = "menuss";
  container.appendChild(header);
  container.appendChild(menu);
  return container;
}
