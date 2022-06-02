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
var alertTrigger;

(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        } else {
          alertTrigger = "true";
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

//SUBMIT MODAL SETUP
const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

//SUBMIT MODAL ACTIVATE
document.getElementById("submitButton").addEventListener("click", function () {
  if (alertTrigger == "true") {
    Toast.fire({
      icon: "success",
      title: "Submitted successfully",
    });
    setTimeout(location.reload.bind(location), 3000);
  }
});