let x;

const numbers = [12, 45, 33, 29, 39, 102];
const mixed = [12, 'Xin chào', true, null];

const fruits = new Array('táo', 'nho', 'cam');

x = numbers[0];

x = numbers[0] + numbers[3];

x = `Trái cây yêu thích của tôi là ${fruits[2]}`;

x = numbers.length;

fruits[2] = 'lê';

fruits[3] = 'dâu';

fruits[fruits.length] = 'việt quất';
fruits[fruits.length] = 'đào';

x = fruits;

console.log(x);
