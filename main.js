const div = document.getElementById("firstDiv");
const inputText = document.getElementById("textInp");
const button = document.getElementById("addBtn");
const ul = document.getElementById("todo_list");
// let getData = localStorage.getItem("texts");
// if (getData !== "" && getData !== null) {
//   texts = JSON.parse(getData);
// }
let array = [];
button.addEventListener("click", (event) => {
  event.preventDefault();
  const inputValues = inputText.value.trim();
  if (inputText.value === "") {
    alert("Can't be empty!");
  } else {
    const newTodo = {
      id: Date.now().toString(),
      title: inputValues,
    };
    array.push(newTodo);
    inputText.value = "";
    todo(array);
  }
});
function todo(data) {
  ul.innerHTML = "";
  return data.map((item) => {
    const li = document.createElement("li");
    li.textContent = item.title;
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    const btn = document.createElement("button");
    btn.className = "deleting";
    btn.textContent = "delete";
    const container = document.createElement("div");
    container.className = "container";
    container.append(checkBox, btn);
    li.appendChild(container);
    ul.appendChild(li);
    // localStorage.setItem("texts", JSON.stringify(array));
    window.addEventListener("offline", () => {
      localStorage.setItem("texts", JSON.stringify(array));
    });
    window.addEventListener("online", () => {
      localStorage.clear();
    });
    checkBox.addEventListener("change", () => {
      if (checkBox.checked) {
        li.style.textDecoration = "line-through";
        li.style.textDecorationColor = "red";
      } else {
        li.style.textDecoration = "none";
      }
    });
    btn.addEventListener("click", () => {
      const modalWindow = document.getElementById("modalWindow");
      modalWindow.style.display = "block";
      const yes = document.getElementById("yes");
      const cancel = document.getElementById("cancel");
      yes.addEventListener("click", () => {
        li.remove();
        modalWindow.style.display = "none";
      });
      cancel.addEventListener("click", () => {
        modalWindow.style.display = "none";
      });
    });
  });
}

// button.addEventListener("click", () => {
//   if (inputText.value === "") {
//     alert("Can't be empty!");
//   } else {
//     const checkBox = document.createElement("input");
//     checkBox.type = "checkbox";
//     const btn = document.createElement("button");
//     btn.className = "deleting";
//     btn.textContent = "delete";
//     const inputValues = inputText.value.trim();
//     const pTag = document.createElement("p");
//     pTag.className = "pTag";
//     pTag.textContent = inputValues;
//     const container = document.createElement("div");
//     container.className = "container";
//     container.append(checkBox, btn);
//     pTag.appendChild(container);
//     div.appendChild(pTag);
//     inputText.value = "";
//     window.addEventListener("offline", () => {
//       localStorage.setItem("texts", inputValues);
//     });
//     window.addEventListener("online", () => {
//       localStorage.clear();
//     });
//     checkBox.addEventListener("change", () => {
//       if (checkBox.checked) {
//         pTag.style.textDecoration = "line-through";
//         pTag.style.textDecorationColor = "red";
//       } else {
//         pTag.style.textDecoration = "none";
//       }
//     });
//     btn.addEventListener("click", () => {
//       const modalWindow = document.getElementById("modalWindow");
//       modalWindow.style.display = "block";
//       const yes = document.getElementById("yes");
//       const cancel = document.getElementById("cancel");
//       yes.addEventListener("click", () => {
//         pTag.remove();
//         modalWindow.style.display = "none";
//       });
//       cancel.addEventListener("click", () => {
//         modalWindow.style.display = "none";
//       });
//     });
//     array.push(localStorage.setItem("texts", inputValues));
//   }
// });
