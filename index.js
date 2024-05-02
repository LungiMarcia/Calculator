document.addEventListener("DOMContentLoaded", function () {
  var screen = document.getElementById("screen");
  var buttons = document.querySelectorAll(".calculator button");

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      var value = this.getAttribute("data-value");

      if (value === "=") {
        try {
          screen.value = eval(screen.value);
        } catch (error) {
          screen.value = "Error";
        }
      } else if (value === "AC") {
        screen.value = "";
      } else if (value === "C") {
        screen.value = screen.value.slice(0, -1);
      } else {
        screen.value += value;
      }
    });
  });
});
