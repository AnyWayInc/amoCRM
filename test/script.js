// window.addEventListener("DOMContentLoaded", (event) => {
//   let element = document.querySelector("button");
//   window.addEventListener("change", function (event) {
//     let input1 = document.getElementById("input1").value;
//     let input2 = document.getElementById("input2").value;
//     let input3 = document.getElementById("input3");
//     let input4 = document.getElementById("input4").value;
//     let input5 = document.getElementById("input5").value;

//     input3.value = `${Number(input1) + Number(input2)}`;
//     e.preventDefault;
//   });
// });
obj = {
  1119107: {
    ID: 1119107,
    NAME: "Пользовательское соглашение",
    TYPE_ID: 3,
    ACCOUNT_ID: 31256266,
    DESCRIPTION: null,
  },
  1119109: {
    ID: 1119109,
    NAME: "Слагаемое А",
    TYPE_ID: 2,
    ACCOUNT_ID: 31256266,
    DESCRIPTION: null,
  },
  1119111: {
    ID: 1119111,
    NAME: "Слагаемое В",
    TYPE_ID: 2,
    ACCOUNT_ID: 31256266,
    DESCRIPTION: null,
  },
  1119113: {
    ID: 1119113,
    NAME: "Форма",
    TYPE_ID: 1,
    ACCOUNT_ID: 31256266,
    DESCRIPTION: null,
  },
  1119115: {
    ID: 1119115,
    NAME: "Ограничить",
    TYPE_ID: 3,
    ACCOUNT_ID: 31256266,
    DESCRIPTION: null,
  },
  1119117: {
    ID: 1119117,
    NAME: "Сумма",
    TYPE_ID: 2,
    ACCOUNT_ID: 31256266,
    DESCRIPTION: null,
  },
  1266703: {
    ID: 1266703,
    NAME: "jjj",
    TYPE_ID: 1,
    ACCOUNT_ID: 31256266,
    DESCRIPTION: null,
  },
};

let second_obj = [];
let names = "name";
Object.keys(obj).forEach(function (key, index) {
  second_obj.push({ id: index, name: obj[key].NAME, idEl: obj[key].ID });
});
console.log(second_obj);

let firsObj = 6;
let secondObj = 2;
let threeObj = 1;
let firstElID = 0;
let secondElID = 0;
let threeElID = 0;
for (let i = 0; i <= second_obj.length - 1; i++) {
  if (firsObj === second_obj[i].id) {
    firstElID = second_obj[i].idEl;
  }
  if (secondObj === second_obj[i].id) {
    secondElID = second_obj[i].idEl;
  }
  if (threeObj === second_obj[i].id) {
    threeElID = second_obj[i].idEl;
  }
}
console.log(firstElID,secondElID, threeElID);
// console.log(second_obj[1].id);
