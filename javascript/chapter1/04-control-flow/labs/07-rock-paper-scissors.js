/* 
사용자와 컴퓨터가 가위바위보 게임을 합니다.
사용자는 "가위", "바위", "보" 중 하나를 입력하고, 컴퓨터는 무작위로 선택합니다.
3판 2선승제로 승부를 결정하세요.

-- 출력 예시 -- 

[1라운드]
당신의 선택: 가위
컴퓨터의 선택: 보
당신이 이겼습니다! (1승 0패)

[2라운드]
당신의 선택: 보
컴퓨터의 선택: 바위
당신이 이겼습니다! (2승 0패)

🎉 게임 종료: 당신의 승리입니다!

Math.random() - 난수 생성 함수
*/ 

let input;
let userWinCount = 0;
let comWinCount = 0;
let userChoice;
let comsChoice;

while (userWinCount < 2 && comWinCount < 2) {
    comsChoice = Math.floor(Math.random() * 3);
    input = prompt("가위~ 바위~ 보!");
    if (input = "가위") {
        userChoice = 0;
    } else if (input = "바위") {
        userChoice = 1;
    } else if (input = "보") {
        userChoice = 2;
    }   

    
}