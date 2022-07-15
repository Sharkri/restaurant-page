export default function home() {
  const para = document.createElement("p");
  const paraDiv = document.createElement("div");
  const container = document.createElement("div");
  para.textContent = "Generic restaurant ™ has only the best foods";
  paraDiv.appendChild(para);
  container.appendChild(paraDiv);
  return container;
}
