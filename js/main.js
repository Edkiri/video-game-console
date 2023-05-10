let startButton = document.getElementById("startButton");
let ledStartLight = document.getElementById("startLed");
let isStarted = false;

startButton.addEventListener("click", toggleLed)

function toggleLed() {
  isStarted = !isStarted;
  if(isStarted) {
    ledStartLight.style.backgroundColor = "green";
  } else {
    ledStartLight.style.backgroundColor = "red";
  }
}