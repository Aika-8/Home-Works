const h2 = document.getElementById("main-heading");
const aside = document.querySelector("aside");
aside.remove();
const h3 = document.querySelector("h3");
h3.classList.remove("heading");
h2.style.fontSize = "50px";
h2.style.color = "red";
h2.textContent = "Popular poducts";
