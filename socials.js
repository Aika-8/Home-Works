const body = document.getElementById("body");
body.style.backgroundColor = "teal";
body.style.display = "flex";
body.style.gap = "50px";
const socials = [
  {
    icon: "./assets/images/icons/scale_1200-Photoroom.png",
    title: "Twitter",
    description:
      "Твиттер - американский сервис микроблогов и социальная сеть, в которой пользователи публикуют сообщения, известные как твиты, и взаимодействуют с ними",
    link: "https://x.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoicnUifQ%3D%3D%22%7D",
  },
  {
    icon: "./assets/images/icons/instagram icon-Photoroom.png",
    title: "Instagram",
    description:
      "Instagram - американская социальная сеть для обмена фотографиями и видео, основонная Кевином Систромом и Майком Кригом",
    link: "https://www.instagram.com/",
  },
  {
    icon: "./assets/images/icons/Telegram_Messenger.png",
    title: "Telegram",
    description:
      "Telegram - кроссплатформенная система мгновенного обмена сообщениями с функциями обмена текстовыми, голосовыми и видеосообщениями, а также...",
    link: "https://web.telegrm.org",
  },
];
socials.forEach((item) => {
  const { icon, title, description, link } = item;
  const div1 = document.createElement("div");
  div1.className = "twitter1";
  div1.style.width = "400px";
  div1.style.height = "500px";
  div1.style.backgroundColor = "white";
  div1.style.border = "4px solid black";
  const iconimg = document.createElement("img");
  iconimg.style.width = "80px";
  iconimg.style.height = "80px";
  iconimg.src = icon;
  const h1 = document.createElement("h1");
  h1.textContent = title;
  h1.style.textTransform = "UpperCase";
  const p1 = document.createElement("p");
  p1.textContent = description;
  p1.style.fontWeight = "bold";
  p1.style.fontSize = "14px";
  p1.style.alignContent = "center";
  p1.style.margin = "0px 30px 30px 30px";
  const button = document.createElement("button");
  button.style.width = "200px";
  button.style.height = "50px";
  button.style.backgroundColor = "black";
  button.style.color = "white";
  button.style.borderRadius = "50px";
  button.textContent = "Read more";
  button.style.textTransform = "UpperCase";
  button.src = link;
  //   const links = createElement("a")
  div1.append(iconimg, h1, p1, button);
  body.appendChild(div1);
});
