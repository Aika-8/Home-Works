let a = 9;
if (a === 10) {
  console.log("Верно");
} else {
  console.log("Неверно");
}
let batir = 91;
if (batir <= 20) {
  console.log("подъезд №1");
} else if (batir <= 48) {
  console.log("подъезд №2");
} else if (batir <= 90) {
  console.log("подъезд №3");
} else {
  console.log("Вы ошиблись адресом");
}
let b = 5;
if (b <= 5) {
  console.log("Верно");
} else {
  console.log("Неверно");
}
const hour = 13;
if (hour == 6 && hour <= 12) {
  console.log("Доброе утро!");
} else if (hour >= 13 && hour <= 17) {
  console.log("Добрый день!");
} else {
  console.log("Добрый вечер!");
}
const nameHour = 5;
if (nameHour == 6 && nameHour <= 12) {
  console.log("Доброе утро, Айка!");
} else if (nameHour >= 13 && nameHour <= 17) {
  console.log("Добрый день, Айка!");
} else {
  console.log("Добрый вечер, Айка!");
}
let consumer = 2;
if (consumer <= 6 || consumer >= 65) {
  console.log("Скидки есть");
} else {
  console.log("Скидка нет");
}
let player1 = prompt("Первый игрок");
let player2 = prompt("Второй игрок");
if (
  (player1 == "Камень" && player2 == "Ножницы") ||
  (player1 == "Ножницы" && player2 == "Бумага") ||
  (player1 == "Бумага" && player2 == "Камень") ||
  (player1 == "камень" && player2 == "ножницы") ||
  (player1 == "ножницы" && player2 == "бумага") ||
  (player1 == "бумага" && player2 == "камень")
) {
  console.log("Выигривает первый игрок");
} else if (
  (player1 == "Камень" && player2 == "Бумага") ||
  (player1 == "Ножницы" && player2 == "Камень") ||
  (player1 == "Бумага" && player2 == "Ножницы") ||
  (player1 == "камень" && player2 == "бумага") ||
  (player1 == "ножницы" && player2 == "камень") ||
  (player1 == "бумага" && player2 == "ножницы")
) {
  console.log("Выигривает второй игрок");
} else if (
  (player1 == "Камень" && player2 == "Камень") ||
  (player1 == "Ножницы" && player2 == "Ножницы") ||
  (player1 == "Бумага" && player2 == "Бумага") ||
  (player1 == "камень" && player2 == "камень") ||
  (player1 == "ножницы" && player2 == "ножницы") ||
  (player1 == "бумага" && player2 == "бумага")
) {
  console.log("Ничья");
} else {
  console.log("Ошибка, повторите попытку");
}
let c = 17;
if (c % 2 === 0) {
  console.log("Число чётное");
  //   если число в значении делиться на 2 без остатка то выйдет в консоле Число четное, в обратном случае Число нечетное.
} else {
  console.log("Число нечётное");
}
let num = 4;
console.log(num === 5 ? "Five" : "Not five");
