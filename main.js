const lastEpisodes = [
  {
    images: "./assets/images/Бакас.jpg",
    star: "./assets/images/icons/star.svg",
    rating: "7.0",
    title: "Бакас Алгачкы шоу...",
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
    title: "Кыргызстан, мен...",
    status: "Аренда",
  },
  {
    images: "./assets/images/Акча.jpg",
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
const firstSection = document.getElementsByClassName("first_section");
lastEpisodes.map((item) => {
  const { images, star, rating, title, status } = item;
  const div = document.createElement("div");
  //   div.className = "last_Episode";
  const image = document.createElement("img");
  const divRating = document.createElement("div");
  const starImg = document.createElement("img");
  const pRating = document.createElement("p");
  const titleP = document.createElement("p");
  const titleStatus = document.createElement("p");
  divRating.append(starImg, pRating);
  //
  image.className = "img_moveies";
  image.src = images;
  divRating.className = "divRating";
  starImg.className = "image_star";
  starImg.src = star;
  pRating.className = "p_rating";
  pRating.textContent = rating;
  titleP.className = "p_title";
  titleP.textContent = title;
  titleStatus.className = "p_status";
  titleStatus.textContent = status;
  div.append(image, divRating, titleP, titleStatus);
  firstSection[0].appendChild(div);
});
const serial = [
  {
    images: "./assets/images/Тайган.jpg",
    star: "./assets/images/icons/star.svg",
    rating: "8.6",
    title: "Тайган",
    status: "Аренда эпизода",
  },
  {
    images: "./assets/images/Чоочун киши 2.jpg",
    star: "./assets/images/icons/star.svg",
    rating: "9.1",
    title: "Чоочун киши 2",
    status: "Аренда эпизода",
  },
  {
    images: "./assets/images/Муз устундогу.jpg",
    star: "./assets/images/icons/star.svg",
    rating: "8.2",
    title: "Муз усутундогу гулдор",
    status: "Аренда эпизода",
  },
  {
    images: "./assets/images/Жизнь.jpg",
    star: "./assets/images/icons/star.svg",
    rating: "7.5",
    title: "Жизнь",
    status: "Аренда эпизода",
  },
  {
    images: "./assets/images/Ата-эне тилеги.jpg",
    star: "./assets/images/icons/star.svg",
    title: "Ата-эне тилеги",
    rating: "7.3",
    status: "Аренда эпизода",
  },
  {
    images: "./assets/images/Чоочун киши 1.jpg",
    star: "./assets/images/icons/star.svg",
    rating: "9.1",
    title: "Чоочун киши",
    status: "Бесплатно",
  },
];
const second_section = document.getElementsByClassName("second_section");
serial.map((item) => {
  const { images, star, rating, title, status } = item;
  const div = document.createElement("div");
  const image = document.createElement("img");
  const divRating = document.createElement("div");
  const starImg = document.createElement("img");
  const pRating = document.createElement("p");
  const titleP = document.createElement("p");
  const titleStatus = document.createElement("p");
  divRating.append(starImg, pRating);
  //
  image.className = "img_moveies";
  image.src = images;
  divRating.className = "divRating";
  starImg.className = "image_star";
  starImg.src = star;
  pRating.className = "p_rating";
  pRating.textContent = rating;
  titleP.className = "p_title";
  titleP.textContent = title;
  titleStatus.className = "p_status";
  titleStatus.textContent = status;
  div.append(image, divRating, titleP, titleStatus);
  second_section[0].appendChild(div);
});
