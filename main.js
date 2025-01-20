console.log("task 1.1");
const showCordinates = (x, y) => {
  if (x > y) {
    for (let i = x; i >= y; i--) {
      console.log(i);
    }
  } else {
    for (let i = x; i <= y; i++) {
      console.log(i);
    }
  }
};
showCordinates(4, 18);
showCordinates(8, -5);
console.log("task 1.2");

function showCordinates1(x, y) {
  if (x > y) {
    for (let i = x; i >= y; i--) {
      console.log(i);
    }
  } else {
    for (let i = x; i <= y; i++) {
      console.log(i);
    }
  }
}
showCordinates1(8, 20);
showCordinates1(5, -10);
console.log("task 1.3");

const showCordinates2 = function (x, y) {
  if (x > y) {
    for (let i = x; i >= y; i--) {
      console.log(i);
    }
  } else {
    for (let i = x; i <= y; i++) {
      console.log(i);
    }
  }
};
showCordinates2(3, 10);
showCordinates2(3, -10);
console.log("task 2.1");
const getEvenNum = (x, y) => {
  if (x > y) {
    for (let i = x; i >= y; i--) {
      if (i % 2 === 0) console.log(i);
    }
  } else {
    for (let i = x; i <= y; i++) {
      if (i % 2 === 0) console.log(i);
    }
  }
};
getEvenNum(3, 20);
getEvenNum(6, -9);
console.log("task 2.1");
function getEvenNum1(x, y) {
  if (x > y) {
    for (let i = x; i >= y; i--) {
      if (i % 2 === 0) console.log(i);
    }
  } else {
    for (let i = x; i <= y; i++) {
      if (i % 2 === 0) console.log(i);
    }
  }
}
getEvenNum1(4, 10);
getEvenNum1(4, -10);
console.log("task 2.3");
const getEvenNum2 = function (x, y) {
  if (x > y) {
    for (let i = x; i >= y; i--) {
      if (i % 2 === 0) console.log(i);
    }
  } else {
    for (let i = x; i <= y; i++) {
      if (i % 2 === 0) console.log(i);
    }
  }
};
getEvenNum2(3, 10);
getEvenNum2(3, -10);

console.log("task 3");
const calcEvenNum = (x, y) => {
  let sum = 0;
  if (x > y) {
    for (let i = x; i >= y; i--) {
      if (i % 2 === 0) {
        sum = sum + i;
      }
    }
  } else {
    for (let i = x; i <= y; i++) {
      if (i % 2 === 0) {
        sum = sum + i;
      }
    }
  }
  return sum;
};
const resultEvenNum = calcEvenNum(7, 50);
console.log(resultEvenNum);
console.log("task 4");
const findChar = (word, char) => {
  for (let count = 0; count <= word.length; count++) {
    if (word.charAt(count) === char) {
      console.log(`${true}, ${char} located under the index  ${count}`);
    } else {
      console.log(false);
    }
  }
};
findChar("Bill Gates", "e");
console.log("task 5");
function reverseString(str) {
  let newString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  console.log(newString);
}
reverseString("hello");
// Шаг 1. Используем метод split(), чтобы получить массив из строки

// Шаг 2. Используем метод reverse(), чтобы перевернуть элементы в полученном массиве

// Шаг 3. Используем метод join(), чтобы соединить элементы массива

// Шаг 4. Возвращаем перевернутую строку
// ? Агай, вопрос. Мен биринчисинде функцинын ичине return str.split("").reverse().jion("");
// ? деп жазсам почему-то иштеген жок, хотя экинчи вариант тоже самое только фордун ичинде и ленгз мн болду да.
// function reverseWord(str) {
//   return str.split("").reverse().join ("");
// }
// reverseWord("hello");
