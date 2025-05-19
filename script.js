console.log("Namaste Javascript");

const screen = document.querySelector(".screen");

const btnInput = document.querySelector(".btn-input");

let screenValue = "";

const allBtns = document.querySelectorAll(".btn");

allBtns.forEach((btn) => {
  // attaching the event listener to each button
  btn.addEventListener("click", (e) => {
    if (btn.innerText != "C" && btn.innerText != "=") {
      screenValue += e.target.innerText;
      btnInput.value = screenValue;
    } else if (btn.innerText == "C") {
      // we have to clear the screen
      screenValue = "";
      btnInput.value = screenValue;
    } else if (btn.innerText == "=") {
      if (!btnInput.value) {
        btnInput.value = "";
      } else {
        screenValue = eval(screenValue);
        btnInput.value = screenValue
      }
    }
  });
});
