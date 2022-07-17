export default function menu() {
  const menu = document.createElement("div");
  menu.classList.add("foods");
  const container = document.createElement("div");
  const header = document.createElement("h1");
  header.textContent = "Menu";

  const food1 = createMenuItem(
    "Waffle - €6.50",
    "Waffles sprinkled with powdered sugar and topped with fresh raspberries",
    "../images/waffle.png"
  );
  const food2 = createMenuItem(
    "Buttered croissant - €4",
    "Authentic French croissants",
    "../images/croissant.png"
  );
  const food3 = createMenuItem(
    "French Toast - €4",
    `Three slices of the best french toast you will ever eat, served with locally sourced maple syrup.`,
    "../images/toast.png"
  );
  const food4 = createMenuItem(
    "French Fries - €2.50",
    "Delicious french fries seasoned with garlic and herbs.",
    "../images/fries.png"
  );
  const food5 = createMenuItem(
    "Coffee - €2.75",
    "Coffee made with vanilla extract topped with a pinch of sugar.",
    "../images/coffee.png"
  );
  const food6 = createMenuItem(
    "Chocolate Macaroons - €7.50",
    `Deliciously tasty chocolate macaroons.`,
    "../images/macaroon.png"
  );
  menu.appendChild(food1);
  menu.appendChild(food2);
  menu.appendChild(food3);
  menu.appendChild(food4);
  menu.appendChild(food5);
  menu.appendChild(food6);

  container.appendChild(header);
  container.appendChild(menu);
  container.classList.add("menu");
  return container;
}

function createMenuItem(title, ingredients, img) {
  const menuItem = document.createElement("div");
  const foodTitle = document.createElement("h3");
  foodTitle.textContent = title;
  foodTitle.style.color = "#ef4444";

  const foodIngredients = document.createElement("p");
  foodIngredients.textContent = ingredients;

  const foodImage = new Image();
  foodImage.src = img;

  menuItem.appendChild(foodImage);
  menuItem.appendChild(foodTitle);
  menuItem.appendChild(foodIngredients);
  return menuItem;
}
