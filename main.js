const div = document.getElementById("firstDiv");
const inputText = document.getElementById("textInp");
const button = document.getElementById("addBtn");
const pTag = document.createElement("p");
pTag.className = "pTag";
const checkbox = document.querySelector("input[type='checkbox']");
const btn = document.createElement("button");
btn.className = "deleting";
btn.textContent = "delete";
button.addEventListener("click", () => {
  if (inputText.value === "") {
    alert("Can't be empty!");
  } else {
    const inputValues = inputText.value.trim();
    pTag.textContent = inputValues;
    const container = document.createElement("div");
    container.className = "container";
    checkbox.style.display = "block";
    container.append(checkbox, btn);
    pTag.append(container);
    div.append(pTag);
    window.addEventListener("offline", () => {
      localStorage.setItem("texts", pTag);
    });
    window.addEventListener("online", () => {
      localStorage.clear();
    });
    checkbox.addEventListener("change", () => {
      if (checkbox.checked) {
        pTag.style.textDecoration = "line-through";
        pTag.style.textDecorationColor = "red";
      } else {
        pTag.style.textDecoration = "none";
      }
    });
    btn.addEventListener("click", () => {
      const modalWindow = document.getElementById("modalWindow");
      modalWindow.style.display = "block";
      const yes = document.getElementById("yes");
      const cancel = document.getElementById("cancel");
      yes.addEventListener("click", () => {
        div.removeChild(pTag);
        modalWindow.style.display = "none";
      });
      cancel.addEventListener("click", () => {
        modalWindow.style.display = "none";
      });
    });
    inputText.value = "";
  }
});
