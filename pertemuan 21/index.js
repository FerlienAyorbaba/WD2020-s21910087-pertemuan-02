//Array

let nilai = [90,80,75,95,85];

for (let i = 0; i < nilai.length; i++){
    console.log("Nilai = ", nilai[i] + 5);
}
console.log(nilai);

//nilai[2]=90;
//console.log(nilai[nilai.lenght = 1]);

let john = ["john", "doe", 33, true];
console.log(john[john.length - 1]);
console.log(john);

//tostring()
console.log(john.toString());
//join()
console.log(john.join(" - "));

//pop()
john.pop();
console.log(john.join(" - "));
//push()
john.push();
john.push("Hello");
console.log(john.join(" - "));

//shift()
john.shift();
console.log(john.join(" - "));

//unshift()
john.unshift("john");
john.unshift("prof");
console.log(john.join(" - "));

//splice()
//let kamar = ["kasur","bantal","lemari","karpet"]
//kamar.splice(3, 0, "kursi", "laptop");
//console.log(kamar);

//concat()
//let buah =["pear","mangga","apel"];
//let sayur =["kangkung","kentang","tomat"];
//let biji =["kedelai","kacang merah","kacang tanah"];
//let makanan = buah.concat(sayur,biji);
//console.log(makanan);

//slice
//let kamarTidur=kamar.slice(3);
//console.log(kamarTidur);
//let kamarTidur=kamar.slice(0,3);
//console.log(kamarTidur);

//sort()
//buah.sort();
//console.log(buah);
//kamar.sort();
//console.log(kamar);
//nilai.sort();
//console.log(nilai);
//let nama =["Ferlien","Praycilia","Ayorbaba","Iyen","Hello"];
//nama.sort();
//console.log(nama);
//let tahunLahir =[2001,1999,1998,1997,1996];
//tahunLahir.sort();
//console.log(tahunLahir);

//reverse()
//let nama=["Ferlien","Praycilia","Ayorbaba","iyen","Hello"];
//nama.reverse();
//console.log(nama);
//nama.sort().reverse();
//console.log(nama);
