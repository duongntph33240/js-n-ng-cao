const baiViet = {
  id: 1,
  tieuDe: 'hello',
  noiDung: 'world',
};

const chuoiJSON = JSON.stringify(baiViet);

console.log(chuoiJSON.id);

const doiTuong = JSON.parse(chuoiJSON);

console.log(doiTuong.id);

const cacBaiViet = [
  {
    id: 1,
    tieuDe: 'hello',
    noiDung: 'world',
  },
  {
    id: 2,
    tieuDe: 'hello',
    noiDung: 'world',
  },
];

const chuoiJSON2 = JSON.stringify(cacBaiViet);

console.log(chuoiJSON2);
