function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const input=document.querySelector('input[type="number"]');
const btnCreate=document.querySelector("button[data-create]");
const btnDestroy=document.querySelector("button[data-destroy]");
const boxes=document.querySelector("#boxes");
const destroyFunction=()=>{
  boxes.innerHTML="";
}
const createBoxes=(amount)=>{
  for(let i=0; i<amount; i++){
    let width= i == 0 ? 30 : 30 + i*10;
    const div=document.createElement("div");
    div.style.backgroundColor=getRandomHexColor();
    div.style.width=width+"px";
    div.style.height=width+"px";

    boxes.append(div);
  }
}
btnCreate.addEventListener('click', function () {
  createBoxes(input.value)
});
btnDestroy.addEventListener('click', function () {
  destroyFunction()
});