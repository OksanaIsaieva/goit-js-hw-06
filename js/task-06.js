const textInput = document.querySelector("#validation-input");

textInput.addEventListener("blur",function () {
    if(textInput.value.length==this.dataset.length) {
        this.classList.add('valid');
        this.classList.remove('invalid');
    }
else{
    this.classList.add('invalid');
this.classList.remove('valid');}
});