export default function contact() {
  const container = document.createElement("div");
  const para = document.createElement("p");
  const paraDiv = document.createElement("div");
  para.textContent = "Generic restaurdasant ™ has only the best foods";
  paraDiv.appendChild(para);
  container.appendChild(paraDiv);
  return container;
}
