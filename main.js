console.log("task 1");
const user = {
  id: 1,
  first_name: "Garrott",
  last_name: "Eberdt",
  email: "geberdt0@wp.com",
  gender: "Male",
  ip_address: "49.230.15.110",
  isAdmin: true,
};
const { id, first_name, last_name, email, gender, ip_address, isAdmin } = user;
console.log(id, first_name, last_name, email, gender, ip_address, isAdmin);
console.log("task 2");
const fruits = ["apple", "banana", "lemon", "kiwi", true];
const [, , , first, second] = fruits;
console.log(first, second);
console.log("task 3");
const workers = [
  {
    id: 1,
    name: "Emile",
    lastname: "Van Weedenburg",
    email: "evanweedenburg0@technorati.com",
  },
  {
    id: 2,
    name: "Orv",
    lastname: "Gretton",
    email: "ogretton1@about.me",
  },
];
workers.forEach(({ id, name, lastname, email }) => {
  console.log(id, name, lastname, email);
});
console.log("task 4");
const product = {
  id: 1,
  details: {
    title: "Phone",
    price: 300,
  },
};
const {
  details: { title, price },
} = product;
console.log(title, price);
console.log("task 5");
const posts = {
  name: "posts",
  isLoading: true,
  byID: {
    post: {
      id: "post1",
      author: "user1",
      body: "......",
      comments: ["comment1", "comment2"],
    },
    post2: {
      id: "post2",
      author: "user2",
      body: "......",
      comments: ["comment3", "comment4", "comment5"],
    },
  },
  allIds: ["post1", "post2"],
};
const copyOfPosts = { ...posts };
// copyOfPosts.byID.post.author = "user3"; для себя
console.log(copyOfPosts);
// console.log("original object"); для себя, чтобы посравнить
// console.log(posts);
console.log("task 6");
const deepCopyOfPosts = JSON.parse(JSON.stringify(posts));
// deepCopyOfPosts.byID.post.author = "user4" для себя
console.log(deepCopyOfPosts);
// console.log("original object"); для себя, чтобы посравнить
// console.log(posts);
// "task 7"
const post = {
  name: "posts",
  isLoading: true,
  id: "post1",
  author: "user1",
  body: "......",
  comments: ["comment1", "comment2"],
};
const { comments: color, hello, ...rest } = post;
// color бизде comments: ["comment1", "comment2"]
// hello бизде undefind
// rest  у нас ошибка

const comments = ["comment3", "comment4", "comment5", "comment1"];
const [undefind, coment1, ...qwery] = comments;
// undefind = "comment3"
// comment1 = "comment4"
// qwery = "comment5", "comment1 и еще массивке салып берет.
