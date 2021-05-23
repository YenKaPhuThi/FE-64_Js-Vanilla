// Get element by id
function getEleById(ele) {
  return document.getElementById(ele);
}

// Create element
function createEle(ele) {
  return document.createElement(ele);
}

// Common variables
var numberRow = 10;
var numberCol = 10;

// Create table
var tagTable = createEle("table");
tagTable.setAttribute("class", "mx-auto");
console.log("tagTable", tagTable);

// Create row
for (var i = 0; i < numberRow; i++) {
  var tagTr = createEle("tr");
  tagTable.appendChild(tagTr);

  var x10 = 10 * i;
  // Create col
  for (var j = 0; j < numberCol; j++) {
    var tagTd = createEle("td");

    var textNode = document.createTextNode(j + x10);

    tagTd.appendChild(textNode);
    tagTr.appendChild(tagTd);
  }
}

var table = getEleById("table");
table.appendChild(tagTable);
