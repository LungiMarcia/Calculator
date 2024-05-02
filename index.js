const display = document.querySelector("#screen");
const button = document.querySelector("button");

const calculate = (btnValue) => {
  console.log(btnValue);
};

button.forEach((button) => {
  button.addEventLister("click", (e) => calculate(e.target.dataset.value));
});
