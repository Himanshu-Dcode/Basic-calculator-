function showOnDisplay(value) {
    const display= document.getElementById("display");
    display.value += value;
}
function allClear() {
    const display= document.getElementById("display");
    display.value = "";
}
function calculatorResult() {
    const display= document.getElementById("display")
    try{
        display.value = eval(display.value)
    }
    catch(error){
        dispaly.value = "ERROR"
    }
}
