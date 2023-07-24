function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const text=document.querySelector("span.color");
const btn=document.querySelector("button.change-color");
btn.addEventListener('click', function () {
  const curentColor=getRandomHexColor();
text.innerText=curentColor;
document.body.style.backgroundColor=curentColor; 

})