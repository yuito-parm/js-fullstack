async function fetchusers() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        console.log(data[0]);
    } catch (err) {
        console.error("通信エラー", err);
    }
}

fetchusers();