const signUpPage = document.querySelector(".container");
const successPage = document.querySelector(".success__container");
const signUpForm = document.querySelector(".container__left form");
const emailInput = document.querySelector("form input");
const formButton = document.querySelector(".form-button");
const dismissButton = document.querySelector(".success__container-button");
const submittedEmail = document.querySelector(".submitted-email");

// Event listeners
formButton.addEventListener("click", submitEmail);
dismissButton.addEventListener("click", togglePage);

// Functions
// Add your submitEmail and togglePage functions here

function togglePage() {
  console.log("hello");
  signUpPage.classList.toggle("hide");
  successPage.classList.toggle("hide");
}

function submitEmail(e) {
  e.preventDefault();
  console.log("submit button clicked");

  if (validateEmail(emailInput.value)) {
    submittedEmail.innerText = emailInput.value;
    emailInput.value = "";
    togglePage();

    signUpForm.classList.remove("error");
  } else {
    signUpForm.classList.add("error");
  }
}

// email validation
function validateEmail(email) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}
