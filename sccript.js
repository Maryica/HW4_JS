// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число


for (let i = 0; i <= 10; i++) {
    if (i === 0) {
        console.log(`${i} – это ноль`);
    } else if (i % 2 == 0) {
        console.log(`${i} - четное число`);
    } else {
        console.log(`${i} - нечетное число`);
    }
}



// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

// const arrayNum = [1, 2, 3, 4, 5, 6, 7];
// const arrayNum2 = arrayNum.slice(0, 3);
// console.log(arrayNum2);
// const arrayNum3 = arrayNum.slice(5, 7);
// console.log(arrayNum3);
// arrayNum2.push(...arrayNum3);
// console.log(arrayNum2);


// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

// const arrayRandom = [];
// for (i = 0; i < 5; i++) {
//     arrayRandom.push(Math.floor(Math.random() * 10));
// }
// console.log(arrayRandom);
// let arraySum = 0;
// for (i = 0; i < arrayRandom.length; i++) {
//     arraySum += arrayRandom[i];
// }
// console.log(arraySum);

// let arrayMin = arrayRandom[0];
// for (i = 0; i < arrayRandom.length; i++) {
//     if (arrayRandom[i] < arrayMin) {
//         arrayMin = arrayRandom[i];
//     }
// }
// console.log(arrayMin);

// if (arrayRandom.indexOf(3) !== -1) {
//     console.log('В данном массиве есть число 3');

// } else {
//     console.log('В данном массиве нет числа 3');
// }


