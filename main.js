// async function getUsers() {
//   try {
//     let response = await fetch("https://jsonplaceholder.typicode.com/users");
//     let data = await response.json();
//     console.log(data);
//     renderUsers(data);
//   } catch (error) {
//     console.log(new Error(error));
//   }
// }
// getUsers();
// let renderUsers = (object) => {
//   object.map(({ name, phone, email, photo }) => {
//     const users = document.createElement("div");
//     // const companyTitle = document.createElement("h2");
//     const usersName = document.createElement("h2");
//     const usersPhone = document.createElement("p");
//     const usersEmail = document.createElement("p");
//     const usersImage = document.createElement("img");
//     //
//     usersName.textContent = name;
//     usersPhone.textContent = phone;
//     usersEmail.textContent = email;
//     usersImage.src = phone;
//     usersImage.className = "images_users";
//     users.className = "div_users";
//     users.append(usersImage, usersName, usersPhone, usersEmail);
//     document.body.appendChild(users);
//   });
// };

// task 2
async function getPhotos() {
  const params = new URLSearchParams({ limit: 2 });
  try {
    let reaction = await fetch(
      `https://jsonplaceholder.typicode.com/photos?${params.toString()}`
    );
    let record = await reaction.json();
    console.log(record);
    // renderPhotos(record);
  } catch (error) {
    console.log(new Error(error));
  }
}
getPhotos();
let renderPhotos = (object) => {
  if (object.length <= 0) {
    const pTag = document.createElement("p");
    pTag.textContent = "Здесь пока ничего нет";
    pTag.style.fontSize = "30px";
    document.body.appendChild(pTag);
  } else {
    object.carts.map(({ albumId }) => {
      albumId.map(({ title, url, thumbnailUrl }) => {
        const div_photos = document.createElement("div");
        const title_photo = document.createElement("h3");
        const url_photo = document.createElement("img");
        const img_photo = document.createElement("img");
        title_photo.textContent = title;
        url_photo.src = url;
        img_photo.src = thumbnailUrl;
        url_photo.className = "img_photo";
        div_photos.className = "div_photos";
        div_photos.append(img_photo, title_photo);
        document.body.appendChild(div_photos);
      });
    });
  }
};

// example
// async function getCarts() {
//   try {
//     let response = await fetch("https://dummyjson.com/carts");
//     let data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(new Error(error));
//   }
// }
// getCarts()
