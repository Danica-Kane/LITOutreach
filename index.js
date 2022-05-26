document.getElementById("FontFamily").onclick = changeFontFamily;

//set localstorage values once only, if not set
if (!localStorage.getItem('buttonVar')) {
    localStorage.setItem('buttonVar', "Dyslexia Font");
    localStorage.setItem('bodyVar',"Lato, sans-serif" );
}

//set the initial css rules 
document.body.style.fontFamily = localStorage.getItem('bodyVar');
document.getElementById("buttonFont").innerHTML = localStorage.getItem('buttonVar');
document.getElementById("buttonFont").innerHTML = "Dyslexia Font";


function changeFontFamily() {
  if (localStorage.getItem("buttonVar") == "Normal Font") {
    document.body.style.fontFamily = "OpenDyslexic3Regular";
    document.getElementById("buttonFont").innerHTML = "Dyslexia Font";
    localStorage.setItem('buttonVar', "Dyslexia Font");
    localStorage.setItem('bodyVar',"OpenDyslexic3Regular" );
   
  } else {
    document.body.style.fontFamily = "Lato, sans-serif";
    document.getElementById("buttonFont").innerHTML = "Dyslexia Font";
    localStorage.setItem('buttonVar', "Normal Font");
    localStorage.setItem('bodyVar',"Lato, sans-serif" );
   
  }
  
}
