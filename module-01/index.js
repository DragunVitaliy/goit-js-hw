'use strict';

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!Задание_1!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// const name = "Генератор защитного поля";
// console.log(name);
// let price = 1000;
// console.log(price);
// let string = `Выбран ${name}, цена за штуку ${price} кредитов`;
// console.log(string);
// price = 2000;
// console.log(price);
// let string1 = `Выбран ${name}, цена за штуку ${price} кредитов`;
// console.log(string1);


//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!Задание_2!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// const total = 100;
// const ordered = 80;

// if (ordered > total) {
//     console.log('На складе недостаточно товаров!');
// } else {
//     console.log('Заказ оформлен, с вами свяжется менеджер')
// }

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!Задание_3!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// const ADMIN_PASSWORD = '132987';
// let message;
// const userInput = prompt('Пожалуйста введите пароль');

// if (userInput === null) {
//     message = 'Отменено пользователем!';
// } else if (userInput === ADMIN_PASSWORD) {
//     message = 'Добро пожаловать!'
// } else {
//     message = 'Доступ запрещен, неверный пароль!'
// }
// alert(message);

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!Задание_4!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// const credits = 23580;
// const pricePerDroid = 3000;
// const userChoice = prompt('Введите желаемое количество дроидов');
// let totalPrice;
// let message;

// if (userChoice === null) {
//     message = 'Отменено пользователем!';
// } else if (isNaN(Number(userChoice))) {
//     message = 'Было введено не число, попробуйте еще раз';
// } else {
//     totalPrice = userChoice * pricePerDroid;
//     if (totalPrice > credits) {
//         message = 'Недостаточно средств на счету!';
//     } else {
//         message = `Вы купили ${userChoice} дроидов, на счету осталось ${(credits - totalPrice)} кредитов.`;
//     }
// }
// alert(message);

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!Задание_5!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// let country;
// let cost;
// let message;
// const userChoice = prompt('Выберите страну доставки (Китай, Чили, Австралия, Индия, Ямайка)');

// if (userChoice === null) {
//     message = 'Отменено пользователем!';
// } else {
//     switch (userChoice.toLowerCase()) {
//         case country = 'китай':
//             cost = 100;
//             message = `Доставка в Китай будет стоить ${cost} кредитов`;
//             break;
//         case country = 'чили':
//             cost = 250;
//             message = `Доставка в Чили будет стоить ${cost} кредитов`;
//             break;
//         case country = 'австралия':
//             cost = 170;
//             message = `Доставка в Австралию будет стоить ${cost} кредитов`;
//             break;
//         case country = 'индия':
//             cost = 80;
//             message = `Доставка в Индию будет стоить ${cost} кредитов`;
//             break;
//         case country = 'ямайка':
//             cost = 120;
//             message = `Доставка в Ямайку будет стоить ${cost} кредитов`;
//             break;
//         default:
//             message = 'В вашей стране доставка не доступна';
//     }
// }
// alert(message);

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!Задание_6!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// let total = 0;
// let input;
// let inputNumber;

// while ((input = prompt('Введите число')) !== null) {
//     inputNumber = Number(input);
//     if (!isNaN(inputNumber))
//         total += inputNumber;
//     else {
//         alert(`Было введено не число, попробуйте еще раз`);
//     }
// }

// alert(`Общая сумма чисел равна ${total}`);









