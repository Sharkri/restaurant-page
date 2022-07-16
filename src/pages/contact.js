export default function contact() {
  const container = document.createElement("div");
  const para = document.createElement("p");
  const paraDiv = document.createElement("div");
  para.textContent = "Bonjour Appetite™ has only the best foods";
  paraDiv.appendChild(para);
  container.appendChild(paraDiv);
  container.classList.add("contact");
  return container;
}
