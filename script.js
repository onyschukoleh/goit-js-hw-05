// Задание 1
// Напиши функцию-конструктор Account,
//  которая создает объект со свойствами login и email.
//  В prototype функции-конструктора добавь метод getInfo(),
// который выводит в консоль значения полей login и email объекта который его вызвал.

// function Account(obj) {
//   this.login = obj.login;
//   this.email = obj.email;
// }

// Account.prototype.getInfo = function () {
//   console.log("Login: " + this.login + ", " + "Email: " + this.email);
// };

// const mango = new Account({
//   login: "Mangozedog",
//   email: "mango@dog.woof",
// });
// console.log(mango);
// mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof
// const poly = new Account({
//   login: "Poly",
//   email: "poly@mail.com",
// });
// console.log(poly);
// poly.getInfo(); // Login: Poly, Email: poly@mail.com

// Задание 2
// Напиши класс User для создания пользователя со следующим свойствами:
// name - строка
// age - число
// followers - число
// Добавь метод getInfo(), который, выводит строку: User ${имя} is ${возраст} years old and has ${кол-во фоловеров} followers

// class User {
//   constructor(obj) {
//     (this.name = obj.name),
//       (this.age = obj.age),
//       (this.followers = obj.followers);
//   }
// }
// console.log(User);

// const mango = new User({
//   name: "Mango",
//   age: 2,
//   followers: 20,
// });

// console.log(mango);
// User.prototype.getInfo = function () {
//   console.log(
//     `User ${this.name} is ${this.age} years old and has ${this.followers} followers`
//   );
// };

// mango.getInfo(); // User Mango is 2 years old and has 20 followers

// const poly = new User({
//   name: "Poly",
//   age: 3,
//   followers: 17,
// });
// console.log(poly);
// poly.getInfo(); // User Poly is 3 years old and has 17 followers

// Задание 3
// Напиши класс Storage, который будет создавать объекты
// для управления складом товаров.
// При вызове будет получать один аргумент - начальный массив товаров,
//  и записывать его в свойство items.

// Добавь методы класса:

// getItems() - возвращает массив текущих товаров
// addItem(item) - получает новый товар и добавляет его к текущим
// removeItem(item) - получет товар и, если он есть, удаляет его из текущих

// class Storage {
//   constructor(arr) {
//     this.items = arr;
//   }
// }

// const storage = new Storage([
//   "Нанитоиды",
//   "Пролонгер",
//   "Железные жупи",
//   "Антигравитатор",
// ]);
// console.log(storage);

// Storage.prototype.getItems = function () {
//   console.log(this.items);
// };
// storage.getItems();

// // const items = storage.getItems();
// // console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

// Storage.prototype.addItem = function (item) {
//   this.items.push(item);
// };

// storage.addItem("Дроид");
// console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

// Storage.prototype.removeItem = function (itemName) {
//   this.items = this.items.filter((item) => item !== itemName);
// };

// storage.removeItem("Пролонгер");
// console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]

// Задание 4
// Напиши класс StringBuilder. На вход он получает один параметр -
// строку, которую записывает в свойство _value.

// Добавь классу следующий функционал:

// Метод prepend(str) - получает парметр str (строку) и добавляет ее в начало value
// Метод pad(str) - получает парметр str (строку) и добавляет ее в начало и в конец _value

class StringBuilder {
  constructor(value) {
    this._value = value;
  }
  // Метод Геттер value - возвращает текущее значение поля _value
  get value() {
    return this._value;
  }

  // Метод append(str) - получает парметр str (строку) и добавляет ее в конец _value

  append(str) {
    this._value = this._value.concat(str);
    return this._value.concat(str);
  }

  prepend(str) {
    this._value = str.concat(this._value);
    return this._value;
  }
  pad(str) {
    this._value = str.concat(this._value).concat(str);
    return this._value;
  }
}

const builder = new StringBuilder(".");
console.log(builder.value);

builder.append("^");
console.log(builder.value);

builder.prepend("^");
console.log(builder.value); // '^.^'

builder.pad("=");
console.log(builder.value); // '=^.^='
