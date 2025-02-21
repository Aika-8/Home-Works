const inputText = document.getElementById("textInp");
const button = document.getElementById("addBtn");
const ul = document.getElementById("todo_list");
const modalWindow = document.getElementById("modalWindow");
const yes = document.getElementById("yes");
const cancel = document.getElementById("cancel");
let array = JSON.parse(localStorage.getItem("texts")) || [];
renderTodos();
button.addEventListener("click", (event) => {
  event.preventDefault();
  const inputValues = inputText.value.trim();
  if (!inputValues) {
    alert("Can't be empty!");
    return;
  }
  const newTodo = {
    id: Date.now().toString(),
    title: inputValues,
    completed: false,
  };
  array.push(newTodo);
  inputText.value = "";
  saveAndRender();
});
function renderTodos() {
  ul.innerHTML = "";
  array.forEach((item) => {
    const li = document.createElement("li");
    const textSpan = document.createElement("span");
    textSpan.textContent = item.title;
    if (item.completed) {
      textSpan.style.textDecoration = "line-through";
      textSpan.style.textDecorationColor = "red";
    } else {
      textSpan.style.textDecoration = "none";
    }
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.checked = item.completed;
    checkBox.addEventListener("change", () => {
      item.completed = checkBox.checked;
      saveAndRender();
    });
    const btn = document.createElement("button");
    btn.className = "deleting";
    btn.textContent = "delete";
    btn.addEventListener("click", () => confirmDeletion(item.id));
    const container = document.createElement("div");
    container.className = "container_texts";
    const container1 = document.createElement("div");
    container1.className = "container_textSpan";
    const container2 = document.createElement("div");
    container2.className = "container_check-btn";
    container1.appendChild(textSpan);
    container2.append(checkBox, btn);
    container.append(container1, container2);
    li.appendChild(container);
    ul.appendChild(li);
  });
}
function confirmDeletion(id) {
  modalWindow.style.display = "block";
  yes.onclick = () => {
    array = array.filter((todo) => todo.id !== id);
    saveAndRender();
    modalWindow.style.display = "none";
  };
  cancel.onclick = () => {
    modalWindow.style.display = "none";
  };
}
function saveAndRender() {
  localStorage.setItem("texts", JSON.stringify(array));
  renderTodos();
}
window.addEventListener("offline", () => {
  localStorage.setItem("texts", JSON.stringify(array));
});
window.addEventListener("online", () => {
  localStorage.removeItem("texts");
});
