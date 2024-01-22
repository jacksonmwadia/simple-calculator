class Calculator {
    constructor() {
        this.display = "";
    }

    appendToDisplay(value) {
        this.display += value;
        this.updateDisplay();
    }

    clearDisplay() {
        this.display = "";
        this.updateDisplay();
    }

    calculateResult() {
        try {
            this.display = eval(this.display).toString();
            this.updateDisplay();
        } catch (error) {
            this.display = "Error";
            this.updateDisplay();
        }
    }

    updateDisplay() {
        document.getElementById("display").value = this.display;
    }
}

const calculator = new Calculator();

function appendToDisplay(value) {
    calculator.appendToDisplay(value);
}

function clearDisplay() {
    calculator.clearDisplay();
}

function calculateResult() {
    calculator.calculateResult();
}
