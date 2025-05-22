// 자바스크립트의 기본 자료형
console.log("=== 기본 자료형 ===");

let name = "지수"; // 문자열
name = "지수";
name = `지수 ${2 + 3}`;
let age = 25; // 숫자
let isStudent = true; // 불리언
let nothing = null; // null
let unknown; // undefined
let symbol = Symbol("id"); // 심볼

<<<<<<< HEAD
console.log(typeof name);       // stringN
console.log(typeof age);        // number
console.log(typeof isStudent);  // boolean
console.log(typeof nothing);    // object (자바스크립트의 오래된 버그)
console.log(typeof unknown);    // undefined
console.log(typeof symbol);     // symbol
=======
console.log(name);
console.log(typeof name); // string
console.log(typeof age); // number
console.log(typeof isStudent); // boolean
console.log(typeof nothing); // object (자바스크립트의 오래된 버그)
console.log(typeof unknown); // undefined
console.log(typeof symbol); // symbol
>>>>>>> upstream/main
