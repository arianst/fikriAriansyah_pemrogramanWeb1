// alert('Selamat Datang!')
// prompt('Masukan Nama')
// console.log('Belajar JS')

// -------------------------------------------------promp, alert. console, variable, tipe data

// let nama = "Fikri";
// let usia = 22;
// let beratBadan;
// let tinggiBadan = 166.5;
// let pacar = 2;

// beratBadan = 60;

// if(pacar == 1) {
//     pacar = 1
// } else {
//     pacar = 'itu tidak benar'
// }

// switch (pacar) {
//   case 1:
//     pacar = "salwah";
//     break;
//   case 2:
//     pacar = "hanya punya 1";
//     break;
//   default:
//     pacar = "tapi boong";
//     break;
// }

// let saldoAwal = 500000;
// let tagihan = 200000;
// let saldoTambahan = 300000;
// const totalSaldo = saldoAwal + saldoTambahan;
// const jumlahSaldo = totalSaldo - tagihan;

// alert(`Nama saya ${nama}, dan usia saya ${usia}, saya memiliki berat badan ${beratBadan}kg dan tinggi badan saya ${tinggiBadan}cm, saya memiliki pacar ${pacar}`);

// alert(`Saya memiliki saldo sebesar Rp.${saldoAwal} dan Saya ingin setor tunai sebesar Rp.${saldoTambahan} jadi jumlah saldo saya Rp${totalSaldo}, tetapi saya membayar tagihan sebesar Rp${tagihan} berarti sisa saldo saya Rp${jumlahSaldo}`);

// akhir promp, alert. console, variable, tipe data

// -----------------------------------------------------------array, for loop, do-while

// const namaPonakan = ['Raffa','Azam','Saka','atta']
// for (let i = 0; i < namaPonakan.length; i++) {
//     console.log(namaPonakan[i])
// }

// let i = 0
// while (i < 10) {
//     i++;
//     console.log('Raffa', 'Azam', 'Saka', 'Atta')
// }

// let i = 0
// do {
// i++
// console.log('Fikri Ariansyah')
// } while(i < 10)

// Akhir array, for loop, do-while

// Tugas 1

// let saldoAwal = Number(prompt('Masukan Saldo awal anda'));
// let saldoTambahan = Number(prompt('Masukan jumlah setor tunai'));
// alert (`Saldo anda menjadi Rp.${saldoAwal + saldoTambahan}`);

// let tagihan = Number(prompt('Berapa tagihan anda'));
// alert (`Saldo Akhir anda adalah ${saldoAwal + saldoTambahan - tagihan}`)

// let hari = new Date(). getDay()
// const namaHari = ['Minggu','Senin','selasa','Rabu','Kamis',"Jum'at",'Sabtu']
// const hariIni = namaHari[hari]
// alert(`Hari ini adalah hari ${hariIni}`)

// Akhir Tugas 1

// Document Object Model (DOM)

// document.title = 'Fikri Ariansyah'
// const body = document.body

// const profesi = document.createElement('h2')
// profesi.textContent = 'Junior Web Developer'
// profesi.style.fontWeight = 'bold';
// profesi.style.color = 'blue';

// const prinsip = document.createElement('h1')
// prinsip.innerHTML = '<marquee>Learning, Silent, and Level UP</marquee>'

// body.append(profesi)
// body.append(prinsip)

// Akhir Document Object Model (DOM)

// ----------------------------------------------------------------Data Selector
const body = document.body;
const btn1 = document.getElementById("btn1");
const btn2 = document.querySelector(".btn2");

const textAwal1 = "Salwah";
btn1.textContent = textAwal1;
const textAwal2 = "Fikri";
btn2.textContent = textAwal2;

// Style btn1 & btn2
btn1.style.background = "pink";
btn1.style.border = "none";
btn1.style.padding = "8px";
btn1.style.fontSize = "24px";
btn1.style.fontWeight = "bold";

btn2.style.border = "none";
btn2.style.padding = "8px";
btn2.style.fontSize = "24px";
btn2.style.fontWeight = "bold";
btn2.style.background = "blue";
btn2.style.color = "white";
btn2.style.marginLeft = "2rem";

// function btn1
function clickButton() {
  btn1.style.background = "red";
  const textMuncul = document.createElement("p");
  textMuncul.textContent = "Salwah adalah anak mamah Antisah yang baik";
  body.append(textMuncul);
}
function ubahText() {
  btn1.textContent = "Salwah Cantik";
}
function textUtama() {
  btn1.textContent = textAwal1;
}

//function btn2
const textMuncul2 = document.createElement("p");
textMuncul2.textContent = "Fikri is WEB Developer, Learning, Silent, and Level UP";

function ubahText2() {
  btn2.textContent = "Fikri Ganteng";
  body.append(textMuncul2);
}
function textAwal() {
  btn2.textContent = textAwal2;
  textMuncul2.style.color = "red";
}
