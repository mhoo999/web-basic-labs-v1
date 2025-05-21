/* 사용자가 입력한 비밀번호가 다음 조건을 만족하는지 확인하고 모든 조건 만족 시 "강한 비밀번호", 아니면 부족한 항목을 명시하세요.
조건:
- 길이 8자 이상
- 대문자 1개 이상
- 숫자 1개 이상
- 특수문자 1개 이상 (!@#$%^&*)
*/ 

let password = prompt("비밀번호를 입력하세요.");
let degree = "강한 비밀번호"

if (password.length < 8) {
    alert("길이가 8자 미만입니다.");
    degree = "다시 입력하세요.";
}

if (!/[A-Z]/.test(password)) {
    alert("대문자가 1개 이상이어야 합니다.");
    degree = "다시 입력하세요.";
}

if (!/[0-9]/.test(password)) {
    alert("숫자가 1개 이상이어야 합니다.");
    degree = "다시 입력하세요.";
}

if (!/[!@#$%^&*]/.test(password)) {
    alert("특수문자가 1개 이상이어야 합니다.");
    degree = "다시 입력하세요.";
}

alert(degree);