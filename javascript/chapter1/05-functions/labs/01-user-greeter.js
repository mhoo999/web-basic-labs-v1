// 문제 : 사용자 이름을 받아 인사 출력하는 함수를 만드세요
// TODO: greetUser(name) → "안녕하세요, OO님!"
// 출력은 브라우저 혹은 콘솔 환경 중 선택

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const greetUser = function(name) {
    console.log(`안녕하세요, ${name}님`);
}

rl.question("이름을 입력하세요.", function(name) {
    greetUser(name);
    rl.close();
});

