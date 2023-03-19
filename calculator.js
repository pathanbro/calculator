let result = document.getElementById("result");

function inputValue(value) {
    result.value += value;
}

function clearResult() {
    result.value = "";
}

function backspace() {
    result.value = result.value.slice(0, -1);
}

function calculate() {
    let expression = result.value;
    if (expression.includes("--")) {
        expression = expression.replace("--", "+");
    }
    try {
        result.value = eval(expression);
    } catch (error) {
        result.value = "Error";
    }
}
