export default function menu() {
  const menu = document.createElement("div");
  const container = document.createElement("div");
  menu.textContent = "menuss";
  container.appendChild(menu);
  return container;
}
