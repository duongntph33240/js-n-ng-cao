let x;

const congViec = new Object();

congViec.id = 1;
congViec.ten = 'Mua sữa';
congViec.hoanThanh = false;

x = congViec;

const nguoi = {
  diaChi: {
    toaDo: {
      lat: 42.9384,
      lng: -71.3232,
    },
  },
};

x = nguoi.diaChi.toaDo.lat;

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const obj3 = { ...obj1, ...obj2 };
const obj4 = Object.assign({}, obj1, obj2);

const congViecs = [
  { id: 1, ten: 'Mua sữa' },
  { id: 2, ten: 'Đi đón con từ trường' },
  { id: 3, ten: 'Đổ rác' },
];

x = congViecs[0].ten;

x = Object.keys(congViec);

x = Object.keys(congViec).length;

x = Object.values(congViec);

x = Object.entries(congViec);

x = congViec.hasOwnProperty('tuoi');

console.log(x);
