import { Element } from "./components/Element/Element.js";
import { Pentagon } from "./components/Pentagon/Pentagon.js";
import { Square } from "./components/Square/Square.js";
import { getRandomColor } from "./utils/randomColor.js";

console.clear();

const root = document.getElementById("root");
/*
const circle = document.createElement("div");
circle.classList.add("circle");
circle.addEventListener("click", () => {
  circle.style.backgroundColor = getRandomColor();
});

const square = Square();

const pentagon = Pentagon();
*/
const circle = Element("circle");

const square = Element("square");

const pentagon = Element("pentagon");

root.append(circle, square, pentagon);
