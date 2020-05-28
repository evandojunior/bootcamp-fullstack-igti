function handlerChanges() {
    changeInputValues();
    changeBoxColor();
}

function changeBoxColor() {
    var red = document.querySelector("#range-red .range-input").value
    var green = document.querySelector("#range-green .range-input").value
    var blue = document.querySelector("#range-blue .range-input").value
    
    var newRgbColor = "rgb("+red+", "+green+", "+blue+")";
    var colorBox = document.querySelector('.range-color-box')
    colorBox.style.backgroundColor = newRgbColor
}

function changeInputValues() {
    var red = document.querySelector("#range-red .range-input").value
    document.querySelector("#range-red .range-value").value = red;
    
    var green = document.querySelector("#range-green .range-input").value
    document.querySelector("#range-green .range-value").value = green;
    var blue = document.querySelector("#range-blue .range-input").value
    document.querySelector("#range-blue .range-value").value = blue;
}

window.addEventListener("load", function() {
    window.addEventListener("change", handlerChanges)
})

