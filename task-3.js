// # Завдання 3

// Створіть об'єкт "Користувач" з властивостями "ім'я", "прізвище" та масивом
// "друзів". У цьому масиві зберігаються об'єкти, кожен з яких містить ім'я та
// прізвище друга.

// Створіть функцію "вивестиДрузів", яка використовує метод масиву "forEach" для
// перебору масиву друзів користувача та виводу їх імені та прізвища у консоль. У
// цій функції використовуйте ключове слово "this" для звернення до поточного
// об'єкту.
const user1 = {
  firstName: "John",
  lastName: "Doe",
  friends: [
    { firstName: "Jane", lastName: "Doe" },
    { firstName: "Bob", lastName: "Smith" },
    { firstName: "Alice", lastName: "Wonderland" },
  ],
  showFriends: function () {
    this.friends.forEach(function (friend) {
      console.log(`${friend.firstName} ${friend.lastName}`);
    });
  },
};
user1.showFriends();

// Створіть ще один об'єкт "Користувач" зі своїми властивостями та масивом друзів
// та викличте функцію "вивестиДрузів" для обох об'єктів, передаючи контекст через
// методи "call()" чи "apply()". Виведіть результат у консоль.
const user2 = {
  firstName: "Juan",
  lastName: "Hernandez",
  friends: [
    { firstName: "Maria", lastName: "Garcia" },
    { firstName: "Carlos", lastName: "Rodriguez" },
    { firstName: "Ana", lastName: "Lopez" },
  ],
};
console.log("_________________");
user1.showFriends.call(user1);
console.log("_________________");
user1.showFriends.apply(user2, []);
