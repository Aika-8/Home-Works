const inputText = document.getElementById("todo-list");
const addBtn = document.getElementById("addBtn");
const ul = document.querySelector("ul");
const BASE_URL = "https://60a7d58e09b460f4.mokky.dev/todo";
let editId = null;
addBtn.addEventListener("click", async (event) => {
  event.preventDefault();
  const inputValues = inputText.value.trim();
  if (inputValues !== "") {
    if (editId) {
      await updateTodoOnServer(editId, inputValues);
      editId = null;
    } else {
      const newTodo = {
        id: Date.now().toString(),
        title: inputValues,
        completed: false,
      };
      await postTodo(newTodo);
    }
    inputText.value = "";
    getTodo();
  } else {
    alert("Can't be empty!");
  }
});
async function postTodo(todos) {
  try {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(todos),
    });
    if (response === 201) {
      console.log("Succed post");
    }
    getTodo();
  } catch (error) {
    throw new Error(error);
  }
}
const getTodo = async () => {
  try {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    renderTodo(data);
    if (response === 200) {
      console.log("Succed get data");
    }
  } catch (error) {
    throw new Error(error);
  }
};
getTodo();
function renderTodo(todoArray) {
  ul.innerHTML = null;
  todoArray.forEach((item) => {
    const li = document.createElement("li");
    li.setAttribute("data-id", item.id);
    const textSpan = document.createElement("span");
    textSpan.textContent = item.title;
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.checked = item.completed;
    checkBox.addEventListener("change", () => {
      item.completed = checkBox.checked;
      textSpan.style.textDecoration = item.completed ? "line-through" : "none";
      textSpan.style.textDecorationColor = item.completed ? "red" : "initial";
    });
    const uppdateBtn = document.createElement("button");
    uppdateBtn.className = "uppdateBtn";
    uppdateBtn.innerText = "Uppdate";
    uppdateBtn.addEventListener("click", () => updateTodo(item.id));
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "deleteBtn";
    deleteBtn.innerText = "Delete";
    deleteBtn.addEventListener("click", () => deleteTodo(item.id));
    const div = document.createElement("div");
    div.className = "div";
    div.append(checkBox, uppdateBtn, deleteBtn);
    li.append(textSpan, div);
    ul.appendChild(li);
  });
}
const updateTodoOnServer = async (id, newTitle) => {
  try {
    await fetch(`${BASE_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: newTitle }),
    });
  } catch (error) {
    console.error("Ошибка при обновлении:", error);
  }
};
const updateTodo = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`);
    const data = await response.json();
    inputText.value = data.title;
    editId = id;
    document.querySelectorAll("li").forEach((li) => {
      if (li.dataset.id === id.toString()) {
        li.remove();
      }
    });
  } catch (error) {
    throw new Error(error);
  }
};
const deleteTodo = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: "DELETE",
    });
    getTodo();
  } catch (error) {
    console.error("Ошибка при удалении:", error);
  }
};
