const tenDauTien = 'Sara';
const tuoi = 30;
const nhietDo = 98.9;
const coCon = true;
const soCanHo = null;
const diem = undefined;
const id = Symbol('id');
const n = 9007199254740991n;
const so = [1, 2, 3, 4];
const nguoi = { ten: 'Brad' };

function sayHello() {
  console.log('Xin chào');
}

const ketQua = sayHello;

console.log(ketQua, typeof ketQua);
