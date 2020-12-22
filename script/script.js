window.onload = function () {
  const btn = document.querySelector("button");

  const fisrtName = document.querySelector("#first");
  const lastName = document.querySelector("#last");
  const email = document.querySelector("#inputEmail");
  const password = document.querySelector("#inputPassword");

  const warningFisrtName = document.querySelector("#firstName");
  const warningLastName = document.querySelector("#lastName");
  const warningEmail = document.querySelector("#email");
  const warningPassword = document.querySelector("#password");

  btn.addEventListener("click", () => {
    if (fisrtName.value == "") warningFisrtName.classList.add("active");
    else warningFisrtName.classList.remove("active");

    if (lastName.value == "") warningLastName.classList.add("active");
    else warningLastName.classList.remove("active");

    if (password.value == "") warningPassword.classList.add("active");
    else warningPassword.classList.remove("active");

    if (!ValidateEmail(email)) {
      warningEmail.classList.add("active");
    } else {
      warningEmail.classList.remove("active");
    }
  });

  function ValidateEmail(inputText) {
    let mailformat = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (inputText.value.match(mailformat)) {
      return true;
    } else {
      return false;
    }
  }
};
