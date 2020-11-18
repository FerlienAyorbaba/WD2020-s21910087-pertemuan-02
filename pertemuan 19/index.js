//variabel

//let & cons

// let _umur = 25;
// _umur = 26;
// // let nilai = 95.5;
// // let sudahMenikah = false;
// // let $nama = "John Doe";
// // console.log(_umur);
// // console.log($nama);

//     let alamat;
//     console.log(alamat);

// // const tahunLahir = 2010;
// // console.log(tahunLahir);

// let angka1 = 10;
// let angka2 = 20;
// console.log(angka1+angka2);

// let umur = 30;
// let namaDepan = "John";
// let namaBelakang = "Doe";
// console.log("Nama Saya" + namaDepan + " " namaBelakang " " + umur " ");

//ternary operator
// let angka1 = 10;
// let angka2 = 9;

// console.log(angka1 <= angka2);

//operator logika
//let kondisi1 = 1<2;
//let kondisi2 = true;

//console.log(kondisi1 || kondisi2);
//console.log(!kondisi1);

//let berat = prompt("Masukan Berat: ");
//console.log("Berat yg dimasukan adalah " + berat);
//let tinggi = prompt("Masukan Tinggi: ");
//console.log("Tinggi yg dimasukan adalah " + tinggi);

//let bilangan1 = berat;
//let bilangan2 = tinggi;

//console.log(bilangan1 / bilangan2 * bilangan2);

/*let berat = prompt("Masukan berat badan anda = kg");
let tinggi = prompt("Masukan tinggi badan anda = cm");
let bmi = berat / (tinggi * tinggi);

console.log("your BMI = " + bmi);*/


//exercise #7
/*
Buatlah program Javascript untuk menghitung BMI(Body Mass Index).
Rumus = berat (kg) / (tinggi * tinggi)
gunakan promt untuk meminta input user.*/

function bmiCalculator () {
    let berat = prompt("Masukkan Berat Badan (kg) : ");
    console.log("Berat badan yang dimasukkan adalah " + berat);
    let tinggi = prompt("Masukkan Tinggi Badan (m) : ");
    console.log("Tinggi badan yang anda masukkan adalah " + tinggi);
    let hasil = berat / (tinggi * tinggi);
    console.log("BMI = " + hasil);

    if (hasil < 18.5) {
        console.log ("Underweight");
    } else if (hasil >= 18.5 && hasil < 24.9) {
        console.log("Normal Range");
    } else if (hasil >= 25.0 && hasil < 29.9) {
        console.log("Overweight (preobese)");
    } else if (hasil >= 30.0) {
        console.log ("Obese");
    } else if (hasil > 30.0 && hasil < 34.9) {
        console.log ("Class I");
    } else if (hasil > 35.0 && hasil < 39.9) {
        console.log ("Class II");
    } else if (hasil >= 40.00) {
        console.log ("Class III");
    }
}
bmiCalculator();