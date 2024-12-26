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
document.write(array.join("\n") + "<br>");


// 2.

const userArray = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];


let positiveSum = 0;
let positiveCount = 0;

let minValue = userArray[0];
let indexValue = 0;

let maxValue = userArray[0];
let indexMaxValue = 0;

let negativeCount = 0;

let oddPositiveCount = 0;
let evenPositiveCount = 0;
let oddPositiveSum = 0;
let evenPositiveSum = 0;

let positiveProduct = 1;



for (let i = 0; i < userArray.length; i++) {

    if (userArray[i] > 0) {
        positiveSum += userArray[i];
        positiveCount++;
        positiveProduct *= userArray[i];

        if (userArray[i] % 2 === 0) {
            evenPositiveCount++;
            evenPositiveSum += userArray[i];
        } else {
            oddPositiveCount++;
            oddPositiveSum += userArray[i];
        }
    }

    if (userArray[i] < 0) {
        negativeCount++;
    }

    if (userArray[i] < minValue) {
        minValue = userArray[i];
        indexValue = i;
    }

    if (userArray[i] > maxValue) {
        maxValue = userArray[i];
        indexMaxValue = i;
    }
}


let nullArray = [];

for (let i = 0; i < userArray.length; i++) {
    nullArray.push(i === indexMaxValue ? userArray[i] : 0);
}


// a.

document.write(`Сумма положительных чисел: ${positiveSum}` + "<br>");
document.write(`Количество положительных чисел: ${positiveCount}` + "<br>");

// b.

document.write(`Минимальный элемент массива: ${minValue}, его индекс: ${indexValue}` + "<br>");

// c.

document.write(`Наибольший элемент массива: ${maxValue}, его индекс: ${indexMaxValue}` + "<br>");

// d.

document.write(`Количество отрицательных чисел элемента: ${negativeCount}` + "<br>");

// e - h.

document.write(`Количество парных элементов: ${evenPositiveCount}, их сумма: ${evenPositiveSum}` + "<br>");
document.write(`Количество непарных элементов: ${oddPositiveCount}, их сумма: ${oddPositiveSum}` + "<br>");

// i.

document.write(`Произведение всех положительных элементов: ${positiveProduct}` + "<br>");

// j.

document.write(nullArray.join(", "));

