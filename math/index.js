console.log("Basic Calculator");

const mathCalculation = {
    add : (a, b) => (a + b),
    minus : (a, b) => (a - b),
    multiply : (a, b) => (a * b),
    division : (a, b) => (a / b),
    pow : (a, b) => (a ** b), 
}

const inputNumber = prompt("Masukkan angka") 
const inputNumber2 = prompt("Masukkan angka satu lagi")

const totalAdd = mathCalculation.add(parseInt(inputNumber), parseInt(inputNumber2));
const totalMinus = mathCalculation.minus(parseInt(inputNumber), parseInt(inputNumber2));
const totalMultiply = mathCalculation.multiply(parseInt(inputNumber), parseInt(inputNumber2));
const totalDivision = mathCalculation.division(parseInt(inputNumber), parseInt(inputNumber2));
const totalPower = mathCalculation.pow(parseInt(inputNumber), parseInt(inputNumber2));

console.log(totalAdd);
console.log(totalMinus);
console.log(totalMultiply);
console.log(totalDivision);
console.log(totalPower);

