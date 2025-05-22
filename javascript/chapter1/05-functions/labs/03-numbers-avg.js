// 문제 : 세 개의 숫자를 입력받아 평균을 반환하는 함수를 작성하세요.

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const avg = function(a, b, c) {
    console.log(`avg = ${(a + b + c) / 3}`);
}

rl.question("숫자 세 개를 공백으로 구분해서 입력하세요.", function(input) {
    const [aStr, bStr, cStr] = input.trim().split(" ");
    const a = Number(aStr);
    const b = Number(bStr);
    const c = Number(cStr);

    avg(a, b, c);
    rl.close();
})