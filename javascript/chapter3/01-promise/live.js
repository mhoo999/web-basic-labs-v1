function getUserDate(callback) {
    setTimeout(() => {
        callback({id:1, name:"유유저"});
    }, 1000);
    console.log("진행중");
}

getUserDate((user) => {
    console.log(user);
});

console.log("outer");