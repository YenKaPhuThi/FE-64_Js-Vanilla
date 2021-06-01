/* Bengin Requirement
  7. Viết function nhận vào số n, in ra bảng cửu chương tương ứng với số đó. 
  Vd: n = 3
  3 x 0 = 0
  3 x 1 = 3
  3 x 2 = 6
  3 x 3 = 9
  3 x 4 = 12
  3 x 5 = 15
  3 x 6 = 18
  3 x 7 = 21
  3 x 8 = 24
  3 x 9 = 27
  3 x 10 = 30
End Requirement */

// Get element by id
function getEleById(ele) {
  return document.getElementById(ele);
}

// Create element
function createEle(ele) {
  return document.createElement(ele);
}

var tableMulti = getEleById("tableMulti");

// Handle print mutilplication table
function printTableMulti(num) {
  getEleById("multiNUmber").innerHTML = num;

  for (var i = 0; i <= 10; i++) {
    var tagSpan = createEle("li");

    tagSpan.setAttribute("class", "list-group-item");
    tagSpan.innerHTML = `${num} x ${i} = ${num * i}`;

    tableMulti.appendChild(tagSpan);
  }
}

printTableMulti(3);
