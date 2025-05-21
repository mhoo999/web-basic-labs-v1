// 문제: 배열 내 최소값, 최대값을 찾아보세요.

const numbers = [15, 3, 20, 8, 42];

let max = numbers[0];
let min = numbers[0];
for (num of numbers) {
    if (num > max) max = num;
    if (num < min) min = num;
}

console.log(`max = ${max}`);
console.log(`min = ${min}`);