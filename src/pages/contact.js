export default function contact() {
  const container = document.createElement("div");
  const header = document.createElement("h1");
  const para = document.createElement("p");
  const paraDiv = document.createElement("div");
  header.textContent = "Generic restaurant ™";
  para.textContent = "Generic restaurdasant ™ has only the best foods";
  container.appendChild(header);
  paraDiv.appendChild(para);
  container.appendChild(paraDiv);
  return container;
}
