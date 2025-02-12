const div = document.getElementById("firstDiv");
const inputText = document.getElementById("textInp");
const button = document.getElementById("addBtn");
const checkBox = document.querySelector("input[type='checkbox']");
button.addEventListener("click", () => {
  if (inputText.value === "") {
    alert("Can't be empty!");
  } else {
    checkBox.style.display = "block";
    const btn = document.createElement("button");
    btn.className = "deleting";
    btn.textContent = "delete";
    const inputValues = inputText.value.trim();
    const pTag = document.createElement("p");
    pTag.className = "pTag";
    pTag.textContent = inputValues;
    const container = document.createElement("div");
    container.className = "container";
    container.append(checkBox, btn);
    pTag.append(container);
    div.append(pTag);
    inputText.value = "";
    window.addEventListener("offline", () => {
      localStorage.setItem("texts", inputValues);
    });
    window.addEventListener("online", () => {
      localStorage.clear();
    });
    checkBox.addEventListener("change", () => {
      if (checkBox.checked) {
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
        pTag.remove();
        modalWindow.style.display = "none";
      });
      cancel.addEventListener("click", () => {
        modalWindow.style.display = "none";
      });
    });
  }
});
