document.getElementById("FontFamily").onclick = changeFontFamily;
var currentFontFamily = "Lato, sans-serif";
document.getElementById("buttonFont").innerHTML = "Dyslexia Font";

function changeFontFamily() {
  if (currentFontFamily == "Lato, sans-serif") {
    document.body.style.fontFamily = "OpenDyslexic3Regular";
    currentFontFamily = "OpenDyslexic3Regular";
    document.getElementById("buttonFont").innerHTML = "Normal Font";
  } else {
    document.body.style.fontFamily = "Lato, sans-serif";
    currentFontFamily = "Lato, sans-serif";
    document.getElementById("buttonFont").innerHTML = "Dyslexia Font";
  }
  return currentFontFamily;
}