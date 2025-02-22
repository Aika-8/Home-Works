async function getPhotos() {
  const params2 = new URLSearchParams({ limit: 15 });
  try {
    const response = await fetch(
      `https://dummyjson.com/recipes?${params2.toString()}`
    );
    const data = await response.json();
    console.log(data);
    renderRecipes(data);
  } catch (error) {
    console.log(new Error(error));
  }
}
getPhotos();
const renderRecipes = (object) => {
  if (object.length === 0) {
    const pTag = document.createElement("p");
    pTag.textContent = "Здесь пока ниего нету!";
    pTag.style.color = "red";
    pTag.style.fontSize = "30px";
    document.body.appendChild(pTag);
  } else {
    const displayBlock = document.getElementById("heading");
    displayBlock.style.display = "block";
    displayBlock.style.display = "flex";
    displayBlock.style.justifyContent = "space-between";
    object.recipes.map(({ image, name }) => {
      const container = document.createElement("div");
      container.className = "container-recipes";
      const image_recipes = document.createElement("img");
      image_recipes.classList.add("photo-recipes");
      const container2 = document.createElement("div");
      container2.classList.add("title");
      const title = document.createElement("h3");
      const span = document.createElement("span");
      const meatBalls = document.createElement("img");
      meatBalls.className = "meatBalls";
      meatBalls.src = "./assets/images/3661476.png";
      image_recipes.src = image;
      span.textContent = "Название: ";
      title.appendChild(span);
      title.appendChild(document.createTextNode(name));
      container2.appendChild(title);
      container.append(image_recipes, container2, meatBalls);
      document.body.appendChild(container);
    });
  }
};
