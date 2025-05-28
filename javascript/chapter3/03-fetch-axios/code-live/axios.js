// axios: 써드 파티 라이브러리
import axios from "axios";

// async function get() {
//     const res = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
//     console.log(res.data);
// }

// get();

async function post() {
    const res = await axios.post("https://jsonplaceholder.typicode.com/posts", 
        {
            userId: 1,
            title: "hello",
            body: "내용입니다.",
        });
    console.log(res.data);
}

post();