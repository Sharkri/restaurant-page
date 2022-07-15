export default function home() {
  const header = document.createElement("h1");
  const para = document.createElement("p");
  const paraDiv = document.createElement("div");
  const container = document.createElement("div");

  header.textContent = "Generic restaurant ™";
  para.textContent = "Generic restaurant ™ has only the best foods";
  container.appendChild(header);
  paraDiv.appendChild(para);
  container.appendChild(paraDiv);
  return container;
}
