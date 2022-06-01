document.getElementById("FontFamily").onclick = changeFontFamily;

//set localstorage values once only, if not set
if (!localStorage.getItem("buttonVar")) {
  localStorage.setItem("buttonVar", "Dyslexia Font");
  localStorage.setItem("bodyVar", "Lato, sans-serif");
}

//set the initial css rules
document.body.style.fontFamily = localStorage.getItem("bodyVar");
document.getElementById("buttonFont").innerHTML =
  localStorage.getItem("buttonVar");
document.getElementById("buttonFont").innerHTML = "Dyslexia Font";

function changeFontFamily() {
  if (localStorage.getItem("buttonVar") == "Normal Font") {
    document.body.style.fontFamily = "OpenDyslexic3Regular";
    document.getElementById("buttonFont").innerHTML = "Dyslexia Font";
    localStorage.setItem("buttonVar", "Dyslexia Font");
    localStorage.setItem("bodyVar", "OpenDyslexic3Regular");
  } else {
    document.body.style.fontFamily = "Lato, sans-serif";
    document.getElementById("buttonFont").innerHTML = "Dyslexia Font";
    localStorage.setItem("buttonVar", "Normal Font");
    localStorage.setItem("bodyVar", "Lato, sans-serif");
  }
}

//SUBMIT BUTTON

const alertPlaceholder = document.getElementById("liveAlertPlaceholder");

const alert = (message, type) => {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible alert-success" role="alert" style="margin-top: 10px;">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    "</div>",
  ].join("");

  alertPlaceholder.append(wrapper);
};

const alertTrigger = document.getElementById("submitButton");

if (alertTrigger) {
  alertTrigger.addEventListener("click", () => {
    alert("Submitted!");
  });
}

//nameInput != null && emailInput != null && workInput != null && descriptionOfWork != null;
