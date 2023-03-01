const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");
const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");

const clearDisplay = () => (display.textContent = "");

const subtractNumerOrOperation = () => {
  let string = display.textContent.toString();
  display.textContent = string.slice(0, string.length - 1);
};

const operationResult = () => (display.textContent = eval(display.textContent));

const showError = () => (display.textContent = "Null");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // LIMPIAR CALCULADORA
    if (button.id === "clear") clearDisplay();
    // LIMPIAR UNO POR UNO
    else if (display.textContent != "" && button.id === "backspace")
      subtractNumerOrOperation();
    //   MOSTRAR EL RESULTADO MATEMATICO
    else if (display.textContent != "" && button.id === "equal")
      operationResult();
    //  MOSTRAR NULL SI NO SE INSERTA NINGUN VALOR
    else if (display.textContent == "" && button.id === "equal") showError();
    // RENDERIZAR EN PANTALLA LOS NUMEROS, SIGNOS MATEMATICOS Y RESULTADO
    else {
      display.textContent += button.id;
    }
  });
});

let isDark = true;
themeToggleBtn.addEventListener("click", () => {
  calculator.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
  isDark = !isDark;
});
