const inputText=document.querySelector("input#name-input");
const outputText=document.querySelector("span#name-output");
inputText.addEventListener("input", (event) => {
    outputText.textContent = inputText.value==="" ? "Anonymous" : event.currentTarget.value;
    // if(inputText.value===""){
    //     outputText.textContent = "Anonymous"
    // }
    // else{outputText.textContent = event.currentTarget.value;}
  });