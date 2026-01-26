"use strict";

 const foodRandomPosition = () => {
  return {
    x: Math.floor(Math.random() * 20),
    y: Math.floor(Math.random() * 20),
  };
};

const viewFood = () => {
  const foodPosition = foodRandomPosition();
  document.querySelector("#food").style.gridRow = foodPosition.y;
  document.querySelector("#food").style.gridColumn = foodPosition.x;
};
window.onload = viewFood;

const snakeX = document.querySelector("#snake").style.gridColumn.value;
const snakeY = document.querySelector("#snake").style.gridRow.value;

const snakePosition = {
  x: snakeX,
  y: snakeY,
};
console.log(snakePosition);
// window.addEventListener("keydown", (event) => {
//     switch (event.key) {
//         case "ArrowUp":
//             direction = "up";
//             break;
//         case "ArrowDown":
//             direction = "down";
//             break;
//         case "ArrowLeft":
//             direction = "left";
//             break;
//         case "ArrowRight":
//             direction = "right";
//             break;
//     }
// });
