const student = {
  name: "John",
  lang: "KG",
  age: 24,
};
let student2 = Object.assign({}, student)
delete student2.age;
console.log(student);
console.log(student2);
const array = [
  1,
  true,
  3,
  { name: "ZH", hobbies: ["swimming", "reading"] },
  5,
  "hello",
  "hi",
];
//
console.log(array[1]);
console.log(array[4]);
console.log(array[3].hobbies);
array[3].hobbies.pop();
console.log(array[3].hobbies);
array.unshift("Welcome");
console.log(array);
array.push("Good bye");
console.log(array);
array.shift();
console.log(array);
console.log(array.indexOf("hello"));
array.slice(0, 3);
console.log(array);
array[3].hobbies.push("football");
console.log(array);
array.splice(4, 2);
console.log(array);
let width = array.length;
console.log(width);
console.log("task 3");
const array2 = [1, 2, 3, "sdf", 4, "sdf", {}, 3, !true, 2, [1, 6, 3], 1];
// let flat = array2.flat();
// console.log(flat); выводит вложеный массив в массив
let transformations = array2.flat().map((n) => +n || 0);
let sum = 0;
function sumInArr() {
  for (i = 0; i < transformations.length; i++) {
    sum = sum + transformations[i];
  }
  console.log(sum);
}
sumInArr();
