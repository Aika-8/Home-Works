const main = document.querySelector("main");
const lastEpisodes = [
  {
    images: "./assets/images/Бакас.jpg",
    star: "./assets/images/icons/star.svg",
    rating: "7.0",
    title: "Бакас Алгачкы шоу-концерт",
    status: "Аренда",
  },
  {
    images: "./assets/images/Перегонщик.jpg",
    star: "./assets/images/icons/star.svg",
    rating: "7.8",
    title: "Перегонщик",
    status: "Абонемент",
  },
  {
    images: "./assets/images/Белек.jpg",
    star: "./assets/images/icons/star.svg",
    rating: "7.9",
    title: "Белек",
    status: "Абонемент",
  },
  {
    images: "./assets/images/Кыргызстан.jpg",
    star: "./assets/images/icons/star.svg",
    rating: "7.3",
    title: "Кыргызстан, мен сени суйом",
    status: "Аренда",
  },
  {
    images: "/assets/images/Акча.jpg",
    star: "./assets/images/icons/star.svg",
    title: "Акча",
    rating: "7.7",
    status: "Абонемент",
  },
  {
    images: "./assets/images/Алданганмын.jpg",
    star: "./assets/images/icons/star.svg",
    rating: "7.3",
    title: "Алданганмын",
    status: "Абонемент",
  },
];
lastEpisodes.forEach((item) => {
  const { images, star, rating, title, status } = item;
  const div = document.createElement("div");
  const image = document.createElement("img");
  const divRating = document.createElement("div");
  const starImg = document.createElement("img");
  const pRating = document.createElement("p");
  const titleP = document.createElement("p");
  const titleStatus = document.createElement("p");
  div.className = "last_Episode";
  div.style.width = "172px";
  div.style.height = "370px";
  div.style.marginRight = "30px";
  div.style.backgroundColor = "rgb(16, 16, 16)";
  div.style.display = "flex";
  div.style.flexDirection = "column";
  div.style.justifyContent = "center";
  div.style.alignItems = "flex-start";
  div.style.gap = "10px";
  div.style.border = "2px solid blue";
  image.className = "img_Last_Episode";
  image.style.width = "169px";
  image.style.height = "255px";
  image.src = images;
  divRating.className = "divRating";
  (divRating.style.width = "36px"), (divRating.style.height = "20px");
  divRating.style.backgroundColor = "#22C55E";
  divRating.style.display = "flex";
  divRating.style.justifyContent = "center";
  divRating.style.alignItems = "center";
  divRating.style.gap = "5px";
  starImg.style.width = "11px";
  starImg.style.height = "12px";
  starImg.src = star;
  pRating.style.fontSize = "10px";
  pRating.style.color = "white";
  pRating.style.marginTop = "2px";
  pRating.style.fontWeight = "bold";
  pRating.textContent = rating;
  divRating.append(starImg, pRating);
  titleP.style.color = "#E5E7EB";
  titleP.textContent = title;
  titleStatus.style.fontSize = "12px";
  titleStatus.style.color = "#3B82F6";
  titleStatus.textContent = status;
  div.append(image, divRating, titleP, titleStatus);
  main.appendChild(div);
});
