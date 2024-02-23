function displayValue(input) {
    display.value += input; 
};

function displayClear(button) {
    document.getElementById("display").value = ' ';
};

function deleteOneNumber(button) {
    let display = document.getElementById("display");

    let currentValue = display.value;

    if (currentValue > 0) {
        currentValue = currentValue.slice(0, -1);
    };

    document.getElementById("display").value = currentValue;
};

function calculate() {
    display.value = eval(display.value);
};



