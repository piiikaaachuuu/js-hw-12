// # Завдання 2

// Створіть об'єкт "користувач" з властивостями "ім'я" та "баланс". Додайте до
// об'єкту метод "додати гроші", який збільшує баланс користувача на вказану суму.
// Додайте до об'єкту метод "вивести баланс", який виводить поточний баланс
// користувача в консоль.
const user = {
  name: "Alice",
  balance: 500,
  addMoney: function (num) {
    this.balance += num;
    console.log(this.balance);
  },
};
user.addMoney(50);

// Створіть масив "користувачів", який містить кілька об'єктів типу "користувач".
// Використовуючи метод "forEach()", викличте метод "додати гроші" на кожному
// елементі масиву "користувачів". Використовуючи метод "filter()", створіть новий
// масив, який міститиме тільки ті об'єкти типу "користувач", у яких баланс більший
// за вказану суму. Використовуючи метод "map()", створіть новий масив, який
// містить баланс кожного користувача з масиву "користувачів". Виведіть цей масив в
// консоль.
const users = [
  { name: "Alice", balance: 500 },
  { name: "Bob", balance: 200 },
  { name: "Charlie", balance: 1000 },
];

users.forEach((user) => {
  user.addMoney = function (amount) {
    this.balance += amount;
  };
  user.addMoney(50);
});

const filteredUsers = users.filter((user) => user.balance > 400);
console.table(filteredUsers);

const balanceUser = users.map((user) => user.balance);
console.log(balanceUser);

// Використайте метод "call()", щоб викликати метод "вивести баланс" на конкретному
// об'єкті "користувач". Перевірте, що в контексті методу "вивести баланс" значення
// "this" вказує на конкретний об'єкт "користувач".
function balanceUsers() {
  console.log(this.balance);
}

users.forEach(function (user) {
  balanceUsers.call(user);
});
