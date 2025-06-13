
function add() {
let no1 = parseFloat(document.getElementById("no1").value);
let no2 = parseFloat(document.getElementById("no2").value);
let result = no1 + no2;
document.getElementById("result").value = result;
}

function sub() {
let no1 = parseFloat(document.getElementById("no1").value);
let no2 = parseFloat(document.getElementById("no2").value);
let result = no1 - no2;
document.getElementById("result").value = result;
}

function mul() {
let no1 = parseFloat(document.getElementById("no1").value);
let no2 = parseFloat(document.getElementById("no2").value);
let result = no1 * no2;
document.getElementById("result").value = result.toFixed(2);
}

function div() {
let no1 = parseFloat(document.getElementById("no1").value);
let no2 = parseFloat(document.getElementById("no2").value);
let result = no1 / no2;
document.getElementById("result").value = result.toFixed(2);
}

function calculateBMI() {
let height = parseFloat(document.getElementById("height").value);
let weight = parseFloat(document.getElementById("weight").value);
let resultBMI = document.getElementById("resultBMI");
let bmi = weight / (height * height);
let category;
if (bmi < 18.5) {
category = "Underweight";
} else if (bmi <= 24.9) {
category = "Healthy Weight";
} else if (bmi <= 29.9) {
category = "Overweight";
} else {
category = "Obese";
}
document.getElementById("resultBMI").value = category;
}

function incomeCalculator() {
let income = parseFloat(document.getElementById("income").value);
var result; 
if (income <= 5000) {
result = 0;
} else if (income <= 20000) {
result = (income - 5000) * 0.01;
} else if (income <= 35000) {				
result = 150 + (income - 20000) * 0.03;		 
} else if (income <= 50000) {
result = 600 + (income - 35000) * 0.08;
} else if (income <= 70000) {
result = 1800 + (income - 50000) * 0.13;
} else if (income <= 100000) {
result = 4400 + (income - 70000) * 0.21;
} else if (income <= 250000) {
result = 10700 + (income - 100000) * 0.24;
} else if (income <= 400000) {
result = 46700 + (income - 250000) * 0.245;
} else if (income <= 600000) {
result = 101450 + (income - 400000) * 0.25;
} else if (income <= 1000000) {
result = 151450 + (income - 600000) * 0.26;
} else if (income <= 2000000) {
result = 255850 + (income - 1000000) * 0.28;
} else {
result = 535850 + (income - 2000000) * 0.30;
}
document.getElementById("tax").value = result.toFixed(2);
}

function cmtom() {
let num = parseFloat(document.getElementById("num").value);
let resultUnit = num / 100;
document.getElementById("resultUnit").innerText = num + " cm = " + resultUnit + " m";
}

function mtocm() {
let num = parseFloat(document.getElementById("num").value);
let resultUnit = num * 100;
document.getElementById("resultUnit").innerText = num + " m = " + resultUnit + " cm";
}

function mtokm() {
let num = parseFloat(document.getElementById("num").value);
let resultUnit = num / 1000;
document.getElementById("resultUnit").innerText = num + " m = " + resultUnit + " km";
}

function kmtom() {
let num = parseFloat(document.getElementById("num").value);
let resultUnit = num * 1000;
document.getElementById("resultUnit").innerText = num + " km = " + resultUnit + " m";
}









