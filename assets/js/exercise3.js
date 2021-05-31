/* Bengin Requirement
  3. Viết function nhận vào tham số n, tính S=(2+3+4...+n)+2n
End Requirement */

// Get element by id
function getEleById(ele) {
  return document.getElementById(ele);
}

// Handle sum
function sum(num) {
  getEleById("arg").innerHTML = num;
  var sum = 0;

  for (var i = 2; i <= num; i++) {
    sum = sum + i;
  }

  sum = sum + 2 * num;
  return sum;
}

var result = sum(6);
getEleById("sum").innerHTML = result;
