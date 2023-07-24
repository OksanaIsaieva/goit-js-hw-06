const inputField = document.querySelector("#font-size-control");
const inputText = document.querySelector("#text");
inputField.addEventListener('change', function () {
 inputText.style.fontSize = this.value+"px";
})