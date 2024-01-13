const firstName = 'nguyen';
const lastName = 'duong';
const age = 30;

const person = {
  firstName,
  lastName,
  age,
};

console.log(person.age);

const todo = {
  id: 1,
  title: 'xin chao',
  user: {
    name: 'duong',
  },
};

const {
  id: todoId,
  title,
  user: { name },
} = todo;

console.log(todoId);

const numbers = [23, 67, 33, 49, 52];

const [first, second, ...rest] = numbers;

console.log(first, second, rest);
