// TODO: student 객체를 생성하고 name, age, major 속성을 포함하세요.
// 그 후 각 속성을 출력해보세요.

const student = {
  // 여기에 name, age, major 추가
  name : "윤학생",
  age : 21,
  major : "컴퓨터공학"
};

console.log(student.name);
console.log(student["age"]);

student.grade = 'A';
console.log(student.grade);

// 예시 출력:
// 이름: 윤학생
// 나이: 21
// 전공: 컴퓨터공학
