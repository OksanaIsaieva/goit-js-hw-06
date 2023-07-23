let counterValue=0;
const btnDecrement=document.querySelector('button[data-action="decrement"]')
const btnIncrement=document.querySelector('button[data-action="increment"]')
const curentValue=document.querySelector("#value");

const handleClick = function () {
    // counterValue=this.dataset.action==="decrement"? counterValue+=1 : counterValue-=1;
    counterValue+=this.dataset.action==="decrement"? -1 : 1;
//   if(this.dataset.action==="decrement")
//   {counterValue-=1;}
//   else{ counterValue+=1;}
  curentValue.innerText=counterValue;
};

btnDecrement.addEventListener("click", handleClick);
btnIncrement.addEventListener("click", handleClick);