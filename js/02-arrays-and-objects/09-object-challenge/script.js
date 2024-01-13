const thuVien = [
  {
    tieuDe: 'The Road Ahead',
    tacGia: 'Bill Gates',
    tinhTrang: {
      soHuu: true,
      dangDoc: false,
      daDoc: false,
    },
  },
  {
    tieuDe: 'Steve Jobs',
    tacGia: 'Walter Isaacson',
    tinhTrang: {
      soHuu: true,
      dangDoc: false,
      daDoc: false,
    },
  },
  {
    tieuDe: 'Mockingjay',
    tacGia: 'Suzanne Collins',
    tinhTrang: {
      soHuu: true,
      dangDoc: false,
      daDoc: false,
    },
  },
];

thuVien[0].tinhTrang.daDoc = true;
thuVien[1].tinhTrang.daDoc = true;
thuVien[2].tinhTrang.daDoc = true;

const { tieuDe: sachDauTien } = thuVien[0];

console.log(sachDauTien);

const thuVienJSON = JSON.stringify(thuVien);

console.log(thuVienJSON);
