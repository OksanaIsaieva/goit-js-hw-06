const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: {email, password}
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }
else{
    const elements={}
    const inputs = form.elements;

for (let i = 0; i < inputs.length; i++) {
    const input=inputs[i];
  if (input.nodeName === "INPUT" && input.type === "email"||input.type==="password") {
    elements[input.name]=input.value;
  }
}
    console.log(elements);

    event.currentTarget.reset();
}

}
