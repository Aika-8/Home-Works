console.log("task 1");
let student = {
  fullname: "Kubat Beishenov",
  age: 24,
  education: {
    university: "Ala-Too",
    faculty: "CS",
    gpa: 87,
  },
  sayHello: () => {
    console.log("Beishenov Kubat");
  },
};
function createStudant(firstName, lastName, age, university, faculty, gpa) {
  student.fullname = firstName + lastName;
  student.age = age;
  student.university = university;
  student.faculty = faculty;
  student.gpa = gpa;
}
createStudant("Kubat ", "Beishenov", 24, "ALATOO", "CS", 87);
console.log(student);
console.log("task 2");
function deleteKey(student, age) {
  if ("group" in student) {
    delete student.age;
    console.log(student);
  } else {
    console.log("Ключ ${key} отсутствует в объекте");
  }
}
deleteKey(student);
console.log("task 3");
let user = {
  name: "Aika",
  age: 21,
  email: "dzhumagulova8@gmail.com",
  password: "qwerty7890",
};
let writeEmail = prompt("Enter your email");
let sum = 5;
if (user.email !== writeEmail) {
  alert("Unfortunately, there is no such email address.");
} else if (user.email === writeEmail) {
  writrePass = prompt("Enter your password");
  if (user.password !== writrePass) {
    alert("Invalid password");
  } else if (user.password === writrePass) {
    calc = +prompt("2+3=?");
    if (calc === sum) {
      alert(" Верно! Ваша премия = ${user.sum}");
      user.sum = calc;
    } else if (calc !== sum) {
      alert("Incorrect answer");
    }
  }
}
console.log(user);
