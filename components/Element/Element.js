import { getRandomColor } from "../../utils/randomColor.js";

export function Element(classname) {
  const element = document.createElement("div");
  element.classList.add(classname);
  element.addEventListener("click", () => {
    element.style.backgroundColor = getRandomColor();
  });

  return element;
}
