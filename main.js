console.log("Hello World");
function difference(a, b) {
  return Math.abs(a - b);
}
let y = "баллов из 100";
let firstUserName = "Alisher";
console.log(`${firstUserName} - ${difference(100, 3)} ${y}`);
let secondUserName = "Nooruz";
console.log(`${secondUserName} - ${difference(100, 11)} ${y}`);
let thirdUserName = "Jakshylyk";
console.log(`${thirdUserName} - ${difference(100, 25)} ${y}`);
let fourthUserName = "Aziret";
console.log(`${fourthUserName} - ${difference(100, 10)} ${y}`);
let averagePoint = "Экзамендин орточо баллы";
let text = "балл";
let c = (97 + 89 + 75 + 90) / 4;
console.log(`${averagePoint}: ${c} ${text}`);

const multiplicationTables = () => {
  for (i = 1; i <= 9; i++) {
    console.log(`${i}`);
    for (j = 1; j <= 9; j++) {
      console.log(`${i} x ${j} = ${i * j}`);
    }
  }
};
multiplicationTables();

alert("Вы успешно зарегистрировались!");
let question = confirm(
  "При перезагрузке сайта, введённые данные на форме будут очищены, Вы уверены что хотите перезагрузить?"
);
console.log(question);
let userName = prompt("Введите ваше имя");
console.log(userName);
