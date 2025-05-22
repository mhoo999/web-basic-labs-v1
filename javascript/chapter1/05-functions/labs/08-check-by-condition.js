// 문제: 숫자 조건 검사기 만들기
// 숫자 하나와 조건을 전달받아, 조건을 만족하는지를 판단하는 함수를 작성하세요.
// checkByCondition(num, callback) 형태로 작성하며,
// callback 함수는 해당 숫자가 조건을 만족하면 true, 아니면 false를 반환합니다.

function checkByCondition(num, callback) {
  return callback(num);
}

checkByCondition(4, (num) => {
  console.log(num % 2 == 0 ? "짝수" : "홀수");
})

checkByCondition(5, (num) => {
  console.log(num % 2 == 0 ? "짝수" : "홀수");
})

console.log(checkByCondition(5, (num) => num > 10));
console.log(checkByCondition(15, (num) => num > 10));

console.log(checkByCondition(3, (num) => num % 3 == 0));
console.log(checkByCondition(17, (num) => num % 3 == 0));

// 1) 짝수인지 검사
// 2) 10보다 큰지 검사
// 3) 3의 배수인지 검사
