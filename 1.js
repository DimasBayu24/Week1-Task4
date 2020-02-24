// 1st Answer
//Sebuah program memiliki fungsi untuk membaca array of numbers dan menjumlahkan seluruh member dari array tersebut sehingga hasilnya hanya berupa satu digit saja. Buatlah function untuk merealisasikan program tersebut.
// Contoh INPUT : [123, 9, 27]
// Contoh OUTPUT: 6
// Proses Function: 
// a. 123 + 9 + 27 = 159
// b. 1 + 5 + 9 = 15
// c. 1 + 5 = 6

function check(angka) {
  // your code here
  let sum = 0;
  for (let i = 0; i < angka.length; i++) sum += angka[i];
  if (sum == 0) return 0;
  else if (sum % 9 == 0) return 9;
  else return sum % 9;
}
console.log(check([123, 9, 27])); // 159 = 1+5+9 = 15 = 1+5 = 6