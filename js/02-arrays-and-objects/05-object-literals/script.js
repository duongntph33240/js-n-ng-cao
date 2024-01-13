let x;

const nguoi = {
  ten: 'John Doe',
  tuoi: 30,
  isAdmin: true,
  diaChi: {
    duong: '123 Main st',
    thanhPho: 'Boston',
    tinh: 'MA',
  },
  soThich: ['âm nhạc', 'thể thao'],
};

x = nguoi.ten;
x = nguoi['tuoi'];
x = nguoi.diaChi.tinh;
x = nguoi.soThich[0];

nguoi.ten = 'Jane Doe';
nguoi['isAdmin'] = false;

delete nguoi.tuoi;

nguoi.coCon = true;

nguoi.chao = function () {
  console.log(`Xin chào, tên tôi là ${this.ten}`);
};

nguoi.chao();

const nguoi2 = {
  'tên đầu': 'Brad',
  'tên cuối': 'Traversy',
};

x = nguoi2['tên đầu'];

console.log(x);
