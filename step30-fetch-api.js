// thenチェーンで書く場合
fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => {
    console.log(data); // ユーザー配列
    })
    .catch(err => {
    console.error("通信エラー", err);
    });

// async/awaitで書く場合（関数の中で）
async function fetchUsers() {
    try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    console.log(data); // ユーザー配列
    } catch (err) {
    console.error("通信エラー", err);
    }
}
fetchUsers();