// ===============================================================
/* Задание 1 функциz-конструктор Account, которая создает объект со свойствами login и email.
  В prototype функции-конструктора добавь метод getInfo(), который выводит в консоль значения полей login и email объекта который его вызвал.*/
// ===============================================================
console.log("#============================================");
function Account(obj) {
  this.login = obj.login;
  this.email = obj.email;
}

Account.prototype.getInfo = function () {
  console.log("#1 : Login: " + this.login + ", " + "Email: " + this.email);
};

const mango1 = new Account({
  login: "Mangozedog",
  email: "mango@dog.woof",
});
console.log("#1 :", mango1);
mango1.getInfo(); // Login: Mangozedog, Email: mango@dog.woof
const poly1 = new Account({
  login: "Poly",
  email: "poly@mail.com",
});
console.log("#1 :", poly1);
poly1.getInfo(); // Login: Poly, Email: poly@mail.com
console.log("#============================================");
// ===============================================================
// Задание 2 Kласс User для создания пользователя name - строка, age - число, followers - число
// метод getInfo() выводит строку: User ${имя} is ${возраст} years old and has ${кол-во фоловеров} followers
// ===============================================================
class User {
  constructor(obj) {
    (this.name = obj.name),
      (this.age = obj.age),
      (this.followers = obj.followers);
  }
}

const mango2 = new User({
  name: "Mango",
  age: 2,
  followers: 20,
});

console.log("#2 :", mango2);
User.prototype.getInfo = function () {
  console.log(
    "#2 :",
    `User ${this.name} is ${this.age} years old and has ${this.followers} followers`
  );
};

mango2.getInfo(); // User Mango is 2 years old and has 20 followers

const poly2 = new User({
  name: "Poly",
  age: 3,
  followers: 17,
});
console.log("#2 :", poly2);
poly2.getInfo(); // User Poly is 3 years old and has 17 followers
console.log("#============================================");
// ===============================================================
// Задание 3 Kласс Storage, который будет создавать объекты для управления складом товаров.
// При вызове будет получать один аргумент - начальный массив товаров, и записывать его в свойство items.
// Добавь методы класса:    getItems() - возвращает массив текущих товаров
//                          addItem(item) - получает новый товар и добавляет его к текущим
//                          removeItem(item) - получет товар и, если он есть, удаляет его из текущих
// ===============================================================
class Storage {
  constructor(arr) {
    this.items = arr;
  }
}

const storage = new Storage([
  "Нанитоиды",
  "Пролонгер",
  "Железные жупи",
  "Антигравитатор",
]);
console.log("#3 :", storage);

Storage.prototype.getItems = function () {
  console.log("#3 :", this.items);
};
storage.getItems();

// const items = storage.getItems();
// console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

Storage.prototype.addItem = function (item) {
  this.items.push(item);
};

storage.addItem("Дроид");
console.table("#3 :", storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

Storage.prototype.removeItem = function (itemName) {
  this.items = this.items.filter((item) => item !== itemName);
};

storage.removeItem("Пролонгер");
console.table("#3 :", storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]
console.log("#============================================");

// ===============================================================
// Задание 4 Класс StringBuilder. На вход он получает один параметр - строку и записывает ее в свойство _value.
// Добавь классу следующий функционал: Метод prepend(str) - получает парметр str (строку) и добавляет ее в начало value
//                                      Метод pad(str) - получает парметр str (строку) и добавляет ее в начало и в конец _value
// ===============================================================
class StringBuilder {
  constructor(value) {
    this._value = value;
  }
  get value() {
    return this._value;
  }
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
console.log("#4 :", builder.value);

builder.append("^");
console.log("#4 :", builder.value);

builder.prepend("^");
console.log("#4 :", builder.value); // '^.^'

builder.pad("=");
console.log("#4 :", builder.value); // '=^.^='
console.log("#============================================");
// ===============================================================
// Задание 5
// ===============================================================
class Car {
  static getSpecs(object) {
    console.log(
      "#5 :",
      `MaxSpeed : ${object.maxSpeed} km/h, `,
      `Speed: ${object.speed} km/h,  `,
      `isOn: ${object.isOn}, `,
      `Distance: ${object.distance} km,  `,
      `Price: ${object.price} $ `
    );
  }
  constructor(object) {
    (this.maxSpeed = object.maxSpeed),
      object.speed ? (this.speed = object.speed) : (this.speed = 0),
      (this.isOn = false),
      object.distance ? (this.distance = object.distance) : (this.distance = 0),
      (this._price = object.price);
  }

  get price() {
    return this._price;
  }

  set price(value) {
    this._price = value;
  }
  turnOn() {
    return (this.isOn = true);
  }
  turnOff() {
    return (this.isOn = false), (this.speed = 0);
  }
  decelerate(value) {
    if (this.speed - value > 0) return (this.speed = this.speed - value);
  }
  accelerate(value) {
    if (this.maxSpeed > this.speed + value)
      return (this.speed = this.speed + value);
  }
  drive(hours) {
    if (this.isOn) return (this.distance = this.distance + this.speed * hours);
  }
}
const mustang = new Car({ maxSpeed: 200, price: 2000 });

Car.getSpecs(mustang);
console.log("#5 :", mustang.turnOn(), mustang.accelerate(50), mustang.drive(2));
Car.getSpecs(mustang);
console.log(
  "#5 :",
  mustang.decelerate(20),
  mustang.drive(1),
  mustang.turnOff()
);
Car.getSpecs(mustang);
console.log("#5 : Price=", mustang.price); // 2000
mustang.price = 4000;
console.log("#5 :", mustang.price); // 4000
