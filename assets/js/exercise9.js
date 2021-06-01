/* Bengin Requirement
  9. Vừa gà vừa chó, bó lại cho tròn, 36 con, 100 chân chẵn.

  Một câu đố dân gian nổi tiếng chắc hẳn tất cả các bạn đều biết. Và bạn có thể
  cũng đã biết đáp án của câu đố trên là 22 con gà và 14 con chó. Tuy nhiên,
  thầy giáo của Hiếu lại bắt anh ấy phải giải bài tập tổng quát: "Tìm số gà, số
  chó khi số tổng số con là m và tổng số chân là n". Bạn hãy giúp Hiếu giải bài toán này nhé.

  => Đề là: viết chương trình nhập vào m là tổng số chó và gà, n là tổng số
  chân, yêu cầu tìm.
End Requirement */

// Get element by id
function getEleById(ele) {
  return document.getElementById(ele);
}

//Handle find how many dogs and chickens
function findAnimalType(m, n) {
  getEleById("sumAnimal").innerHTML = `${m} con và ${n} chân`;

  for (var i = 0; i < m; i++) {
    if (2 * i + (36 - i) * 4 == n) {
      getEleById("typeAnimal").innerHTML = `Gà ${i} con, Chó ${36 - i} con`;
    }
  }
}

findAnimalType(36, 100);
