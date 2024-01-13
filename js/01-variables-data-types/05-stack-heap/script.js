const ten = 'John';
const tuoi = 30;

const nguoi = {
  ten: 'Brad',
  tuoi: 40,
};

let tenMoi = ten;
tenMoi = 'Jonathan';

let nguoiMoi = nguoi;
nguoiMoi.ten = 'Bradley';

console.log(ten, tenMoi); 
console.log(nguoi, nguoiMoi);
