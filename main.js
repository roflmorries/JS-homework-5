// 1.

let arrayLength;

do {
    arrayLength = parseInt(prompt("Введите длину массива (не больше 10):"));
} while (isNaN(arrayLength) || arrayLength <= 0 || arrayLength > 10);

const array = [];


for (let i = 0; i < arrayLength; i++) {
    let userValue;
    do {
        userValue = prompt(`Введите число ${i + 1}`);
    } while (isNaN(userValue) || userValue <= 0);
    array.push(userValue);
}

document.write(array.join("\n") + "<br>");

array.sort((a, b) => a - b);
document.write(array.join("\n") + "<br>");

array.splice(1,3)
document.write(array.join("\n"));


// 2.

const userArray = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];


// a.

let positiveSum = 0;
let positiveCount = 0;

for (let i = 0; i < userArray.length; i++) {
    if (userArray[i] > 0) {
        positiveSum += userArray[i];
        positiveCount++;
    }
}

document.write(`Сумма положительных чисел: ${positiveSum}` + "<br>");
document.write(`Количество положительных чисел: ${positiveCount}` + "<br>");


// b.

let minValue = userArray[0];
let indexValue = 0;

for (let i = 0; i < userArray.length; i++) {
    if (userArray[i] < minValue) {
        minValue = userArray[i];
        indexValue = i;
    }
}

document.write(`Минимальный элемент массива: ${minValue}, его индекс: ${indexValue}` + "<br>");


// c.

let maxValue = userArray[0];
let indexMaxValue = 0;

for (let i = 0; i < userArray.length; i++) {
    if (userArray[i] > maxValue) {
        maxValue = userArray[i];
        indexMaxValue = i;
    }
}

document.write(`Наибольший элемент массива: ${maxValue}, его индекс: ${indexMaxValue}` + "<br>");


// d.

let negativeCount = 0;


for (let i = 0; i < userArray.length; i++) {
    if (userArray[i] < 0) {
        negativeCount++;
    }
}

document.write(`Количество отрицательных чисел элемента: ${negativeCount}` + "<br>");


// e - h.

let oddPositiveCount = 0;
let evenPositiveCount = 0;
let oddPositiveSum = 0;
let evenPositiveSum = 0;

for (let i = 0; i < userArray.length; i++) {
    if (userArray[i] > 0) {
        if (userArray[i] % 2 === 0) {
            evenPositiveCount++;
            evenPositiveSum += userArray[i];
        } else {
            oddPositiveCount++;
            oddPositiveSum += userArray[i];
        }
    }
}

document.write(`Количество парных элементов: ${evenPositiveCount}, их сумма: ${evenPositiveSum}` + "<br>");
document.write(`Количество непарных элементов: ${oddPositiveCount}, их сумма: ${oddPositiveSum}` + "<br>");


// i.

let positiveProduct = 1;

for (let i = 0; i < userArray.length; i++) {
    if (userArray[i] > 0) {
        positiveProduct *= userArray[i];
    }
}

document.write(`Произведение всех положительных элементов: ${positiveProduct}` + "<br>");


// j.


let nullArray = [];

for (let i = 0; i < userArray.length; i++) {
    nullArray.push(i === indexMaxValue ? userArray[i] : 0);
}

document.write(nullArray.join(", "));