//2nd Answer
// Buatlah program yang memiliki parameter sebuah matriks
//(array 2 dimensi) dan memiliki return berupa transpose 
//dari matriks tersebut.
// Contoh input:
// 1 2 3
// 4 5 6
// 7 8 9

// Contoh output:
// 1 4 7
// 2 5 8
// 3 6 9

// function transpose(a) {

//     // Calculate the width and height of the Array
//     var w = a.length || 0;
//     var h = a[0] instanceof Array ? a[0].length : 0;
  
//     // In case it is a zero matrix, no transpose routine needed.
//     if(h === 0 || w === 0) { return []; }
  
//     /**
//      * @var {Number} i Counter
//      * @var {Number} j Counter
//      * @var {Array} t Transposed data is stored in this array.
//      */
//     var i, j, t = [];
  
//     // Loop through every item in the outer array (height)
//     for(i=0; i<h; i++) {
  
//       // Insert a new row (array)
//       t[i] = [];
  
//       // Loop through every item per item in outer array (width)
//       for(j=0; j<w; j++) {
  
//         // Save transposed data.
//         t[i][j] = a[j][i];
//       }
//     }
  
//     return t;
//   }
  
//   console.log(transpose([[1,2,3],[4,5,6],[7,8,9]]));

  function transpose(a) {
    return Object.keys(a[0]).map(function(c) {
        return a.map(function(r) { 
            return r[c]; });
    });
}

console.table(transpose([
    [1,2,3],
    [4,5,6],
    [7,8,9]
]));