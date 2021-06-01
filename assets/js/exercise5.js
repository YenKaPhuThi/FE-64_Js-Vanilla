/* Bengin Requirement
  5. Viết chương trình tìm số đảo ngược của 1 số nguyên dương n nhập từ bàn phím.
  Vd :1234 => 4321 (Gợi y: duyệt chuỗi giống như duyệt mảng)
End Requirement */

// Get element by id
function getEleById(ele) {
  return document.getElementById(ele);
}

// Handle count length of divisor
function revertNumber(num) {
  getEleById("argRevertNUmber").innerHTML = num;

  var digit,
    result = 0;

  while (num) {
    digit = num % 10;
    result = result * 10 + digit;
    num = (num / 10) | 0;
  }

  return result;
}

var result = revertNumber(12345);
getEleById("resultRevertNUmber").innerHTML = result;
