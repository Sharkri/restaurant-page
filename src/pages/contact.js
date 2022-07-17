export default function contact() {
  const phoneSVG = createSVG(
    "#ef4444",
    "M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z"
  );
  const locationSVG = createSVG(
    "#ef4444",
    "M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z"
  );
  const clockSVG = createSVG(
    "#ef4444",
    "M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M16.2,16.2L11,13V7H12.5V12.2L17,14.9L16.2,16.2Z"
  );

  const days = document.createElement("span");
  days.textContent = "Wed-Sun: ";
  days.style.color = "#ef4444";
  const hours = document.createTextNode("8am-8:30pm");
  const clockContainer = document.createElement("p");
  clockContainer.appendChild(clockSVG);
  clockContainer.appendChild(days);
  clockContainer.appendChild(hours);

  const number = document.createTextNode("(888)-123 5232");
  const phoneNumber = document.createElement("p");
  phoneNumber.appendChild(phoneSVG);
  phoneNumber.appendChild(number);

  const locationAddr = document.createTextNode(
    "446 Cactus Ave. Maplewood, Maine"
  );
  const location = document.createElement("p");
  location.appendChild(locationSVG);
  location.appendChild(locationAddr);

  const contactInfo = document.createElement("div");
  contactInfo.classList.add("contactInfo");

  contactInfo.appendChild(phoneNumber);
  contactInfo.appendChild(location);
  contactInfo.appendChild(clockContainer);

  const map = new Image();
  map.src = "../images/location.png";

  const container = document.createElement("div");
  container.classList.add("contact");
  container.appendChild(contactInfo);
  container.appendChild(map);
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
