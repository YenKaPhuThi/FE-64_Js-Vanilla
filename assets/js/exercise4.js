/* Bengin Requirement
  4. Viết function nhận vào tham số n, tính số lượng ước số của n. Vd: n = 8 =>
  Ước số của 8 là : 8,4,2,1
End Requirement */

// Get element by id
function getEleById(ele) {
  return document.getElementById(ele);
}

// Handle count length of divisor
function countDivisor(num) {
  getEleById("argDivisor").innerHTML = num;
  var arr = [];

  for (var i = 1; i <= num; i++) {
    if (num % i == 0) {
      arr.push(i);
    }
  }

  return arr;
}

var result = countDivisor(8);
getEleById("lenghtDivisor").innerHTML = result;
