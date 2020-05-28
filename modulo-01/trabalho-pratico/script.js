function handlerChanges() {
    changeInputValues();
    changeBoxColor();
}

function getInputRangeValue(id) {
    return document.querySelector(`${id} .range-input`).value
}

function setInputValue(id, value) {
    return document.querySelector(`${id} .range-value`).value = value
}

function getColorsRanges() {
    return {
        red: getInputRangeValue("#range-red"),
        green: getInputRangeValue("#range-green"),
        blue: getInputRangeValue("#range-blue")
    }
}

function changeBoxColor() {
    var newRgbColor = "rgb(" + getColorsRanges().red + ", " + getColorsRanges().green + ", " + getColorsRanges().blue +")";
    var colorBox = document.querySelector('.range-color-box')
    colorBox.style.backgroundColor = newRgbColor
}

function changeInputValues() {
    setInputValue("#range-red", getColorsRanges().red);
    setInputValue("#range-green", getColorsRanges().green);
    setInputValue("#range-blue", getColorsRanges().blue);
}

window.addEventListener("change", handlerChanges)

