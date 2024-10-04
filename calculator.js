const calculator = {
    num1: null,
    operator: null,
    num2: null,
    input: ""
};

function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    if (b == 0){
        return "You silly goose! Dividing by zero is not allowed :p"
    }
    return a / b; 
};

function updateDisplay(calculator){
    h1Display.textContent = `${calculator.input}`;
}

function displayDigit(calculator, button) {
    calculator.input += button.textContent;
    updateDisplay(calculator);
}

function clearInput(calculator) {
    calculator.input = "";
    updateDisplay(calculator);
}

function clearState(calculator) {
    calculator.num1 = null;
    calculator.num2 = null;
    calculator.operator = null;
    calculator.input = "";
}

function pressOperator(calculator, button) {
    calculator.num1 = Number(calculator.input);
    calculator.operator = button.textContent;
    clearInput(calculator);
}

function evaluate(calculator) {
    calculator.num2 = Number(calculator.input);
    calculator.input = operate(calculator, calculator.operator, calculator.num1, calculator.num2);
    updateDisplay(calculator);
}

function operate(calculator, operator, num1, num2){
    if (operator == "+") return add(num1, num2);
    if (operator == "-") return subtract(num1, num2);
    if (operator == "x") return multiply(num1, num2);
    if (operator == "/") return divide(num1, num2, calculator);
};

const body = document.querySelector("body");
body.setAttribute("style", "font-family: andale mono, monospace; background-color: black")
const divTitle = document.createElement("div");
divTitle.setAttribute("style", "display: flex; justify-content: center;");
const h1Title = document.createElement("h1");
h1Title.setAttribute("style", "color: white");
h1Title.textContent = "Calculator App"
body.appendChild(divTitle);
divTitle.appendChild(h1Title);

for (let i = 0; i < 4; i++) {
    const div = document.createElement("div");
    div.setAttribute("style", "display: flex; justify-content: center; ")
    div.id = `Button Div ${i}`;
    for (let j=0; j < 4; j++) {
        const button = document.createElement("button");
        button.setAttribute("style", "font-family: andale mono, monospace; height: 80px; 80px; aspect-ratio: 1/1; font-size: 35px")
        button.id = `Button ${j}`;
        div.appendChild(button);
        
        // displaying digits on the calculator
        switch (i) {
            case 0:
                if (j == 0) {
                    button.textContent = "1";
                    button.addEventListener("click", () => {
                        displayDigit(calculator, button);
                    });
                }
                if (j == 1) {
                    button.textContent = "2";
                    button.addEventListener("click", () => {
                        displayDigit(calculator, button);
                    });
                }
                if (j == 2) {
                    button.textContent = "3";
                    button.addEventListener("click", () => {
                        displayDigit(calculator, button);
                    });
                }
                if (j == 3) {
                    button.textContent = "+";
                    button.style.backgroundColor = "rgb(121, 162, 199)";
                    button.addEventListener("click", () => {
                        pressOperator(calculator, button);
                    });
                }
                break;
                
            case 1:
                if (j == 0) {
                    button.textContent = "4";
                    button.addEventListener("click", () => {
                        displayDigit(calculator, button);
                    });  
                }
                if (j == 1) {
                    button.textContent = "5";
                    button.addEventListener("click", () => {
                        displayDigit(calculator, button);
                    });
                }
                if (j == 2) {
                    button.textContent = "6";
                    button.addEventListener("click", () => {
                        displayDigit(calculator, button);
                    });
                }
                if (j == 3) {
                    button.textContent = "-";
                    button.style.backgroundColor = "rgb(121, 162, 199)";
                    button.addEventListener("click", () => {
                        pressOperator(calculator, button);
                    });
                    
                }
                break;

            case 2:
                if (j == 0) {
                    button.textContent = "7";
                    button.addEventListener("click", () => {
                        displayDigit(calculator, button);
                    });
                }
                if (j == 1) {
                    button.textContent = "8";
                    button.addEventListener("click", () => {
                        displayDigit(calculator, button);
                    });
                }
                if (j == 2) {
                    button.textContent = "9";
                    button.addEventListener("click", () => {
                        displayDigit(calculator, button);
                    });
                }
                if (j == 3) {
                    button.textContent = "x";
                    button.style.backgroundColor = "rgb(121, 162, 199)";
                    button.addEventListener("click", () => {
                        pressOperator(calculator, button);
                    });
                }
                break;

            case 3:
                if (j == 0) {
                    button.textContent = "0";
                    button.addEventListener("click", () => {
                        displayDigit(calculator, button);
                    });
                }
                if (j == 1) {
                    button.textContent = "AC";
                    button.style.backgroundColor = "rgb(155, 209, 195)";
                    button.addEventListener("click", () => {
                        clearInput(calculator);
                        clearState(calculator);
                    })
                }
                if (j == 2) {
                    button.textContent = "=";
                    button.style.backgroundColor = "rgb(155, 209, 195)";
                    button.addEventListener("click", ()=>{
                        evaluate(calculator);
                    });
                   
                }
                if (j == 3) {
                    button.textContent = "/";
                    button.style.backgroundColor = "rgb(121, 162, 199)";
                    button.addEventListener("click", () => {
                        pressOperator(calculator, button);
                    });
                }
                break;
        }
    };
    body.appendChild(div);
}

const divDisplay = document.createElement("div");
divDisplay.setAttribute("style", "display: flex; justify-content: center");
const h1Display  = document.createElement("h1");
h1Display.setAttribute("style", "font-family: andale mono, monospace; color: white;");
divDisplay.appendChild(h1Display);
h1Display.textContent = `${calculator.input}`;
body.appendChild(divDisplay);



