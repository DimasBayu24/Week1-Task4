//3rd Answer
// Buatlah program yang memiliki parameter 2 buah matriks 
// dan memiliki return berupa hasil perkalian dari kedua matriks 
// tersebut (sertakan juga error handling untuk pelanggaran dalam 
// peraturan perkalian matriks)
// Contoh input: 
// A = 
// 3 4
// 1 2

// B =
// 7 5
// 6 4

// Contoh output:
// AxB=
// 45 31
// 19 13

function operasiMatrix(arr1, arr2) {
    let newArr = [];
    for (let i = 0; i < arr1.length; i++) {
      newArr[i] = [];
      for (let j = 0; j < arr2[0].length; j++) {
        let sum = 0;
        if (arr1[i].length != arr2[j].length) {
          return "Kedua matrix tidak dapat dioperasikan";
        } else {
          for (let k = 0; k < arr1[0].length; k++) {
            sum += arr1[i][k] * arr2[k][j];
          }
        }
        newArr[i][j] = sum;
      }
    }
    return newArr;
  }
  
  console.log(
    operasiMatrix(
      [
        [3, 4],
        [1, 2]
      ],
      [
        [7, 5],
        [6, 4]
      ]
    )
  );
  
  // 45 31
  // 19 13