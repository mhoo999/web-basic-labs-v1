// 문제: 사용자가 정답 숫자를 맞힐 때까지 계속 입력받는 게임을 만들어보세요. (while 사용)
// Math.random()으로 1~10 중 하나를 고르고 맞힐 때까지 반복
// prompt()

<<<<<<< HEAD
const ranNum = Math.floor(Math.random() * 10) + 1;

var collect = 1;
while (collect) {
    const answer = prompt();
    if (answer == ranNum) {
        alert("정답");
        collect = 0;
    } else {
        alert("땡");
    }
}
=======
let guessNum;
let isMatch = false;
let randomNum = Math.floor(Math.random() * 10) + 1;
while (true) {
  guessNum = prompt("1~10 까지 숫자 중 아무거나 입력하세요");
  // 종료 조건
  if (guessNum == randomNum) {
    alert("정답입니다.");
    break;
  } else {
    alert("오답입니다.");
  }
}
>>>>>>> upstream/main
