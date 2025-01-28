console.log("task 1");
const numbers = [1, 2, 3, 4, 5];
const degree = numbers.map((x) => x * x);
console.log(degree);
console.log("task 2");
const users = [
  { firstName: "John", lastName: "Obama", age: 24, gender: "male" },
  { firstName: "Ariana", lastName: "Grande", age: 22, gender: "female" },
  { firstName: "Naruto", lastName: "Uzumaki", age: 19, gender: "male" },
  { firstName: "Cristiano", lastName: "Ronaldo", age: 38, gender: "male" },
];
const joinNames = users.map((item) => {
  return {
    fullName: item.firstName + item.lastName,
    age: item.age,
    gender: item.gender,
  };
});
console.log(joinNames);

console.log("task 3");
const numbers2 = [1, 2, 3, 4, 5, 4, 8, 34, 3, 6];
const evenNums = numbers2.filter(function (n) {
  return n % 2 === 0;
});
console.log(evenNums);
console.log("task 4");
const users2 = [
  { firstName: "John", lastName: "Obama", age: 24, gender: "male" },
  { firstName: "Ariana", lastName: "Grande", age: 22, gender: "female" },
  { firstName: "Naruto", lastName: "Uzumaki", age: 19, gender: "male" },
  { firstName: "Kakshi", lastName: "Hatake", age: 28, gender: "male" },
  { firstName: "Sakura", lastName: "Chan", age: 18, gender: "female" },
];
const justFemale = users2.filter((users2) => users2.gender === "female");
console.log(justFemale);
console.log("task 5");
const numbers3 = [1, 2, 3, 4, 5, 4, 8, 34, 3, 6];
let sum = 0;
const odd = numbers3.forEach(oddNumbers);
function oddNumbers(item) {
  if (item % 2 !== 0) {
    sum = sum + item;
  }
}
console.log(sum);
console.log("task 6");
const users3 = [
  { firstName: "John", lastName: "Obama", age: 24, gender: "male" },
  { firstName: "Ariana", lastName: "Grande", age: 22, gender: "female" },
  { firstName: "Naruto", lastName: "Uzumaki", age: 19, gender: "male" },
  { firstName: "Kakshi", lastName: "Hatake", age: 28, gender: "male" },
  { firstName: "Sakura", lastName: "Chan", age: 18, gender: "female" },
];
console.log(users3.find((users3) => users3.firstName === "Naruto"));

console.log("task 7");
const numbers4 = [1, 2, 3, 4, 5, 4, 8, 34, 3, 6];
const find34 = numbers4.findIndex((numbers4) => numbers4 === 34);
console.log(find34);
console.log("task 8");
const users4 = [
  {
    firstName: "John",
    lastName: "Obama",
    age: 24,
    gender: "male",
    id: "QWasdRT-8ugAUt",
  },
  {
    firstName: "Ariana",
    lastName: "Grande",
    age: 22,
    gender: "female",
    id: "QWasdRT-8ugAUtI",
  },
  {
    firstName: "Naruto",
    lastName: "Uzumaki",
    age: 19,
    gender: "male",
    id: "QWasdRT-8ugAUtI",
    id: "QWasdRT-8ugAUtS",
  },
  {
    firstName: "Cristiano",
    lastName: "Ronaldo",
    age: 38,
    gender: "male",
    id: "QWasdRT-8ugAUtFd",
  },
];
const usersObj = users4.reduce((acc, item) => {
  acc[item.id] = {firstName: item.firstName, lastName: item.lastName, age: item.age, gender: item.gender};
  return acc;
  // Начальное значение {}
}, {});
console.log("New Object", usersObj);