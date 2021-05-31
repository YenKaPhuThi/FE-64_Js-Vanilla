/* Bengin Requirement
  1. In một bảng số từ 1-100 thỏa mãn điều kiện: (gợi ý dùng 2 vòng for lồng
    nhau, để ý chỗ bước nhảy)
End Requirement */

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

// Create table, tbody and get listNumber
var tagTable = createEle("table");
var tagTbody = createEle("tbody");
var listNumber = getEleById("listNumber");

tagTable.setAttribute("class", "table table-striped mx-auto");

// Create row
for (var i = 0; i < numberRow; i++) {
  var tagTr = createEle("tr");
  var x10 = 10 * i;

  tagTbody.appendChild(tagTr);

  // Create col
  for (var j = 1; j <= numberCol; j++) {
    var tagTd = createEle("td");

    var textNode = document.createTextNode(j + x10);

    tagTd.appendChild(textNode);
    tagTr.appendChild(tagTd);
  }
}

tagTable.appendChild(tagTbody);
listNumber.appendChild(tagTable);
