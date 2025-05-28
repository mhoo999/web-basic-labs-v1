
// 시작 버튼을 눌렀을 때, select-count의 value만큼 questions에서 문제를 랜덤으로 스택에 추가
// 스택 empty까지 문제를 출력
// 결과를 출력
// 다시하기 = 새로고침

const viewStart = document.getElementById("view-start");
const viewQuiz = document.getElementById("view-quiz");
const viewResult = document.getElementById("view-result");
const startBtn = document.getElementById("start-btn");

let count;
let cur = 1;

startBtn.addEventListener("click", () => {
    count = document.getElementById("select-count").value;
    quizGenerator();
})

const questionArray = [];
const result = [];

async function quizGenerator() {
    // count 만큼 questions에서 데이터 가져와서 랜덤으로 배치
    const numbers = [];
    for(let i = 0; i <= 9; i++) {
        numbers.push(i)
    }
    
    const ranNums = [];
    for (let i = 0; i <= 9; i++) {
        const index = Math.floor(Math.random() * numbers.length);
        ranNums.push(numbers[index]);
        numbers.splice(index, 1);
    }

    try {
        const res = await axios.get(`data/questions.json`);
        const data = await res.data;
        for (let i = 0; i < count; i++) {
            questionArray.push(data[ranNums.pop()]);
        }
    } catch(err) {
        console.log("문제를 불러오지 못했습니다.")
    }

    viewStart.style.display = "none";
    viewQuiz.style.display = "block";

    showQuiz();
}

const progress = document.getElementById("progress");
const timer = document.getElementById("timer");
const quizBox = document.getElementById("quiz-box");

function showQuiz() {
    const question = questionArray.pop();
    result.push({"isCorrect":true, "question":question.question, "myCollect":"none", "correct":`${question.answer + 1}번: ${question.choices[question.answer]}`});

    progress.textContent = `문제 ${cur} / ${count}`;
    timer.textContent = `남은 시간: s`;

    quizBox.innerHTML = "";
    const questionDiv = document.createElement("div");
    questionDiv.style.fontWeight = "bold";
    questionDiv.style.marginBottom = "10px";
    questionDiv.textContent = question.question;
    quizBox.append(questionDiv);

    const choices = document.createElement("form");
    choices.id = "choices";
    for (let i = 0; i < question.choices.length; i++) {
        const label = document.createElement("label");
        const btn = document.createElement("input");
        btn.type = "radio";
        btn.name = "choice";
        btn.value = `${i + 1}번: ${question.choices[i]}`;
        label.append(btn, question.choices[i]);
        choices.append(label);
    }
    choices.addEventListener("change", () => {
        submitBtn.disabled = false;
    });

    quizBox.append(choices);
}

const submitBtn = document.getElementById("submit-btn");

submitBtn.addEventListener("click", () => {
    const form = document.getElementById("choices");
    const selected = form.querySelector('input[name="choice"]:checked');
    result[cur-1].myCollect = selected.value;
    result[cur-1].isCorrect = (result[cur-1].correct == result[cur-1].myCollect) ? true : false;
    console.log(result[cur-1]);
    cur++;

    if (cur <= count) {
        showQuiz();
    } else {
        showResult();
    }
});

const score = document.getElementById("score");

function showResult() {
    viewQuiz.style.display = "none";
    viewResult.style.display = "block";

    const ul = document.createElement("ul");
    ul.className = "result-list";

    let collect = 0;
    for (let i = 0; i < result.length; i++) {
        if (result[i].isCorrect == true) { collect++; }

        const li = document.createElement("li");

        const div1 = document.createElement("div");
        div1.className = "result-qnum-row";

        const span1 = document.createElement("span");
        span1.className = "result-qnum";
        span1.textContent = `Q${i+1}.`;

        const span2 = document.createElement("span");
        span2.className = "result-ox-icon";
        span2.textContent = result[i].isCorrect ? "O" : "X";

        div1.append(span1, span2);

        const div2 = document.createElement("div");
        div2.className = "result-question";
        div2.textContent = result[i].question;

        const div3 = document.createElement("div");
        div3.className = "result-choice-block";

        const div4 = document.createElement("div");
        div4.className = "result-choice";

        const span3 = document.createElement("span");
        span3.className = "result-choice-label";
        span3.textContent = "내 선택";

        div4.append(span3, result[i].myCollect);

        const div5 = document.createElement("div");
        div5.className = "result-choice";

        const span4 = document.createElement("span");
        span4.className = "result-choice-label";
        span4.textContent = "정답";

        div5.append(span4, result[i].correct);

        div3.append(div4, div5);

        li.append(div1, div2, div3);
        ul.append(li);
    }

    score.textContent = `총 ${count}문제 중 ${collect}개 정답!`;
    score.after(ul);
}

const restartBtn = document.getElementById("restart-btn");

restartBtn.addEventListener("click", () => {
    location.reload(true);
});
