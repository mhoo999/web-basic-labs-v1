// 아래 코드에서 각각의 연산 결과가 true인지 false인지 적어보세요.

<<<<<<< HEAD
console.log(5 == "5"); // true
console.log(5 === "5"); // false
console.log(7 > 2 && 2 > 7); // false
console.log(0 == false); // true
=======
// console.log(5 == "5");
// console.log(5 === "5");
// console.log(7 > 2 && 2 > 7);
console.log("0" == false);
>>>>>>> upstream/main

let x = false;
let y = true;
let z = false;

console.log(x || (y && z)); // false
console.log((x || y) && z); // false

let a = 2;
let b = 3;
let c = 4;

let result = a++ + --b * c--;
<<<<<<< HEAD
console.log(result); // 10
=======
// console.log(result);
>>>>>>> upstream/main
