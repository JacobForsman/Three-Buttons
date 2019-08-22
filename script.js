let redButton = document.getElementById("red");
let greenButton = document.getElementById("green");
let blueButton = document.getElementById("blue");

////////////////////////////////////////

redButton.addEventListener('click', RedClick);
greenButton.addEventListener('click', GreenClick);
blueButton.addEventListener('click', BlueClick);

////////////////////////////////////////

function RedClick() {
    alert("You clicked the Red button!");
}

function GreenClick() {
    alert("You clicked the Green button!");
}

function BlueClick() {
    alert("You clicked the Blue button!");
}

////////////////////////////////////////