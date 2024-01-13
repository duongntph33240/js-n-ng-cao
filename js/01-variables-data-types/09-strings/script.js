let x;

const name = 'John';
const age = 31;

x = 'Xin chào, tôi tên là ' + name + ' và tôi ' + age + ' tuổi';

x = `Xin chào, tôi tên là ${name} và tôi ${age} tuổi`;

const s = new String('Xin chào');

x = typeof s;

x = s.length;

x = s[0];

x = s.__proto__;

x = s.toUpperCase();
x = s.toLowerCase();

x = s.charAt(0);

x = s.indexOf('d');

x = s.substring(2, 5);
x = s.substring(7);

x = s.slice(-11, -6);

x = '         Xin chào';
x = x.trim();

x = s.replace('Xin chào', 'John');

x = s.includes('Xin');

x = s.valueOf();

x = s.split('');

console.log(x);
