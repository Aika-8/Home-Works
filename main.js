const computers = [
  {
    title: "Mackbook Air M1",
    price: 85000,
  },
  {
    title: "Dell",
    price: 65000,
  },
  {
    title: "Asus ZenBook",
    price: 40000,
  },
  {
    title: "Acer Aspire",
    price: 45000,
  },
  {
    title: "MackBook Pro",
    price: 100000,
  },
];
computers.sort(function (a, b) {
  return b.price - a.price;
});
console.log(computers);
// computers.sort(function (a, b) {
//   return a.price - b.price;
// });
// console.log(computers);
const grades = [4, 4, 4, 5, 3, 5, 3, 3, 2, 5, 1];
grades.sort((a, b) => a - b);
console.log(grades);
grades.sort((a, b) => b - a);
console.log(grades);
const fruits = ["strawbery", "mango", "watermelon", "grapes", "lemon", "kiwi"];
fruits.sort();
console.log(fruits);
fruits.sort((a, b) => b.localeCompare(a));
console.log(fruits);
const numbers = [4, 123, -5, 6, 100];
let minimum = numbers[0];
for (const item of numbers) {
  if (item < minimum) {
    minimum = item;
  }
}
console.log(minimum);
let maximum = numbers[0];
for (const item of numbers) {
  if (item > maximum) {
    maximum = item;
  }
}
console.log(maximum);
function formatDate(date) {
  return date.toLocaleDateString("ru-RU", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}
const formattedDateString = formatDate(new Date("2022-09-01"));
console.log(formattedDateString);
// second var
function formatDate2(date) {
  let dd = date.getDate();
  let mm = date.getMonth();
  let yy = date.getFullYear();
  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;
  return `${dd}.${mm}.${yy}`
}
let result = formatDate2(new Date("2022-11-01"))
console.log(result);

function formatDate3(date) {
  let day = date.getDate();
  let month = date.getMonth() + 1; // добавляем 1 к месяцу
  let year = date.getFullYear();

  if (day < 10) day = "0" + day;
  if (month < 10) month = "0" + month;

  return `${day}.${month}.${year}`;
}
let result2 = formatDate3(new Date("2022-12-01"));
console.log(result2);

function formatTime(time) {
  return time.toLocaleTimeString("ru", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });
}
const formatTimeString = formatTime(new Date("2022-01-01, 10:40"));
console.log(formatTimeString);
// second var
function formatTime2(time) {
  let hours = time.getHours()
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();
  if (hours < 10) hours = "0" + hours;
  if (minutes < 10) minutes = "0" + minutes;
  if (seconds < 10) seconds = "0" + seconds;
  return `${hours}:${minutes}:${seconds}`
}
let res = formatTime2(new Date("2022-11-01, 11:40:04"))
console.log(res);

const instagramUser = {
  userName: "Uzumaki123",
  email: "user@gmail.com",
  password: "123123",
  avatarURL: "https://www.google.com/search?q=cat",
  followers: "1m",
  following: 512,
  title: "Never Giv up",
};
// console.log(Object.keys(instagramUser));
for (const key in instagramUser) {
  if (instagramUser.hasOwnProperty(key)) {
    console.log(key);
  }
}
for (const value in instagramUser) {
  if (instagramUser.hasOwnProperty(value)) {
    console.log(instagramUser[value]);
  }
}
const computers2 = [
  {
    title: "Mackbook Air M1",
    price: 85000,
  },
  {
    title: "Dell",
    price: 65000,
  },
  {
    title: "Asus ZenBook",
    price: 40000,
  },
  {
    title: "Acer Aspire",
    price: 45000,
  },
  {
    title: "MackBook Pro",
    price: 100000,
  },
];
let sum = 0;
for (const item of computers2) {
  sum = sum + item.price;
}
console.log(sum);
