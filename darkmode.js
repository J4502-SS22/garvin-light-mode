"use strict";

//This is the body element
var theBody = document.getElementById("overallBody");

//This is the button element
var darkModeToggle = document.getElementById("toggleButton");

function checkDarkMode(){
  if (theBody.classList.contains("darkMode")) {
    theBody.classList.remove("darkMode");
    darkModeToggle.innerText = "Switch to dark mode";
  } else {
    theBody.classList.add("darkMode");
    darkModeToggle.innerText = "Switch to light mode";
  }
}

darkModeToggle.onclick = checkDarkMode;
