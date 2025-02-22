async function getUsers() {
  const params = new URLSearchParams({ limit: 15 });
  try {
    const response = await fetch(
      `https://dummyjson.com/users?${params.toString()}`
    );
    const data = await response.json();
    renderUsers(data);
  } catch (error) {
    console.log(new Error(error));
  }
}
getUsers();
const renderUsers = (object) => {
  if (object.length === 0) {
    const pTag = document.createElement("p");
    pTag.textContent = "Здесь пока ниего нету!";
    pTag.style.color = "red";
    pTag.style.fontSize = "30px";
    document.body.appendChild(pTag);
  } else {
    object.users.map(({ image, firstName, phone, email, company }) => {
      const container = document.createElement("div");
      container.className = "container";
      const container2 = document.createElement("div");
      container2.classList.add("container2");
      const photo = document.createElement("img");
      photo.classList.add("avatar");
      const name = document.createElement("h2");
      const phoneNum = document.createElement("p");
      const email_adress = document.createElement("p");
      const major = document.createElement("h3");
      const spanPhone = document.createElement("span");
      const spanEmail = document.createElement("span");
      const spanMajor = document.createElement("span");
      const meatBalls = document.createElement("img");
      meatBalls.className = "meatBalls";
      meatBalls.src = "./assets/images/3661476.png";
      photo.src = image;
      name.textContent = firstName;
      spanPhone.textContent = "Телефон: ";
      spanEmail.textContent = "Email: ";
      spanMajor.textContent = "Отдел: ";
      phoneNum.appendChild(spanPhone);
      phoneNum.appendChild(document.createTextNode(phone));
      email_adress.appendChild(spanEmail);
      email_adress.appendChild(document.createTextNode(email));
      major.appendChild(spanMajor);
      major.appendChild(document.createTextNode(company.department));
      container2.append(name, major, phoneNum, email_adress);
      container.append(photo, container2, meatBalls);
      document.body.appendChild(container);
    });
  }
};
