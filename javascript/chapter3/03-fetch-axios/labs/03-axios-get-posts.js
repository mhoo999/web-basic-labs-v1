/*
[문제] axios로 아래 API에 GET 요청을 보내
모든 게시글의 제목(title)만 콘솔에 출력하세요.

GET: https://jsonplaceholder.typicode.com/posts
*/

import axios from "axios";

async function get() {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    res.data.forEach((post) => {
        console.log(post.title);
    })
}

get();