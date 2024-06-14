const boxes = document.querySelector("#boxes"); 
const input = document.querySelector("input"); 
const createBtn = document.querySelector("[data-create]"); 
const destroyBtn = document.querySelector("[data-destroy]");

createBtn.addEventListener("click", hendlerCreate)
destroyBtn.addEventListener("click", hendlerDestroy)

function hendlerCreate() {
  const value = Number(input.value);
  if (value < 1 || value >  100 ) {
    return     ;
  }
 
 boxes.innerHTML = createBoxes(value);
}
function hendlerDestroy () {
  boxes.innerHTML = ""
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes (amount) {
  let markup = "";
  let size = 20;
  for (let i = 0; i < amount; i += 1) {
  size += 10;
  markup += `<div style="background-color:${getRandomHexColor()}; width: ${size}px; height: ${size}px  "></div>`;
    
  }
 return markup;
}

