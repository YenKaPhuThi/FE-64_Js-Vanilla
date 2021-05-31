/* Bengin Requirement
  2. Viết function nhận vào tham số là một mảng số nguyên, tìm và in ra các số
nguyên tố trong mảng
End Requirement */

// Get element by id
function getEleById(ele) {
  return document.getElementById(ele);
}

// Define number array
var arrNumber = [
  -1, -2, -3, -4, -5, -6, -7, -8, -9, -10, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
];

// Handle find prime number
function isPrime(arrNumber) {
  for (var i = 2; i <= Math.sqrt(arrNumber); i++) {
    if (arrNumber % i === 0) {
      return false;
    }
  }

  return arrNumber > 1;
}

var arrPrime = arrNumber.filter(isPrime);

getEleById("arrNumber").innerHTML = arrNumber;
getEleById("arrPrime").innerHTML = arrPrime;
