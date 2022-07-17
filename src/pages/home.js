export default function home() {
  const container = document.createElement("div");

  const locationInfo = document.createElement("p");
  locationInfo.textContent = "446 Cactus Ave. Maplewood, Maine";

  const hours = document.createElement("p");
  const styledSpan = document.createElement("span");
  const hoursInfo = document.createElement("span");
  hoursInfo.textContent = "8am-8:30pm";
  styledSpan.textContent = "Wed-Sun: ";
  styledSpan.style.color = "#ef4444";
  hours.appendChild(styledSpan);
  hours.appendChild(hoursInfo);

  const clock = document.createElement("div");
  clock.classList.add("clock");
  const clockSVG = createSVG(
    "#ef4444",
    "M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M16.2,16.2L11,13V7H12.5V12.2L17,14.9L16.2,16.2Z"
  );
  clock.appendChild(clockSVG);
  clock.appendChild(hours);

  const location = document.createElement("div");
  location.classList.add("location");
  const locationSVG = createSVG(
    "#ef4444",
    "M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z"
  );

  location.appendChild(locationSVG);
  location.appendChild(locationInfo);

  const info = document.createElement("div");
  info.classList.add("info");
  info.appendChild(location);
  info.appendChild(clock);

  const header = document.createElement("h1");
  header.textContent = "Bonjour Appetite";

  const para = document.createElement("p");
  para.classList.add("mainPara");
  para.textContent = `At Bonjour Appetite we strive to bring people
  the best food prepared using the freshest
  and best ingredients.`;

  const text = document.createElement("div");
  text.appendChild(header);
  text.appendChild(para);
  container.appendChild(text);
  container.appendChild(info);
  container.classList.add("home");
  return container;
}
function createSVG(color, d) {
  const SVG = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  SVG.setAttribute("viewBox", "0 0 24 24");
  path.setAttribute("fill", color);
  path.setAttribute("d", d);
  SVG.appendChild(path);
  return SVG;
}
