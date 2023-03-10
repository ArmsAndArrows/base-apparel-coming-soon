const emailInput = document.getElementById("email");
const submitButton = document.getElementById("submit");
const errmessage = document.getElementsByClassName("errmessage")[0];
const erricon = document.getElementsByClassName("err-icon")[0];
const emptymessage = document.getElementsByClassName("emptymessage")[0];

emailInput.addEventListener("input", () => {
  if (emailInput.value.trim() === "") {
    emailInput.style.borderColor = "initial";
    errmessage.style.display = "none";
    
    erricon.style.display = "none";
    
  } else {
    emptymessage.style.display = "none";
    if (!emailInput.checkValidity()) {
      emailInput.style.borderColor = "red";
      errmessage.style.display = "grid";
      erricon.style.display = "flex";
    } else {
      emailInput.style.borderColor = "initial";
      errmessage.style.display = "none";
      erricon.style.display = "none";
    }
  }
});

submitButton.addEventListener("click", (event) => {
  if (emailInput.value.trim() === "") {
    event.preventDefault();
    emailInput.style.borderColor = "red";
    emptymessage.style.display = "grid";
    erricon.style.display = "flex";
  } else if (!emailInput.checkValidity()) {
    event.preventDefault();
    emailInput.style.borderColor = "red";
    errmessage.style.display = "grid";
    erricon.style.display = "flex";
  } else {
    emailInput.style.borderColor = "initial";
    errmessage.style.display = "none";
    emptymessage.style.display = "none";
    erricon.style.display = "none";
  }
});