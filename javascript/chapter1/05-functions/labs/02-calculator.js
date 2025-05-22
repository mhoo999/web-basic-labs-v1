// TODO: add, subtract, multiply, divide 함수 만들고 결과 출력

const readline = require('readline');

const rl = readline.Interface({
    input: process.stdin,
    output: process.stdout
})

const add = function(a, b) {
    console.log(`add = ${a+b}`);
}

const subtract = function(a, b) {
    console.log(`subtract = ${a-b}`);
}

const multiply = function(a, b) {
    console.log(`multiply = ${a*b}`);
}

const divide = function(a, b) {
    console.log(`divide = ${a/b}`);
}

rl.question("숫자 두 개를 공백으로 구분해서 입력하세요.", function(input) {
    const [aStr, bStr] = input.trim().split(" ");
    const a = Number(aStr);
    const b = Number(bStr);

    add(a, b);
    subtract(a, b);
    multiply(a, b);
    divide(a, b);
    rl.close();
});