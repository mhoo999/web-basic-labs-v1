/*
[문제] 두 개의 외부 API를 fetch로 병렬 처리한 뒤, 둘의 결과를 모두 출력하세요.

1) https://jsonplaceholder.typicode.com/posts/2
2) https://jsonplaceholder.typicode.com/users/1

- async/await와 Promise.all을 활용
- 두 API 모두의 데이터를 받아서 각각 출력
*/

async function fetchData() {
    try {
        const response = [
            "https://jsonplaceholder.typicode.com/posts/2",
            "https://jsonplaceholder.typicode.com/users/1"
        ];
        const results = await Promise.all(response);
        for (i in results) {
            console.log("data: ", i);
        }
    } catch(err) {
        console.log("에러", err);
    }
}

fetchData();