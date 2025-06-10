async function showUsers() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users")
        const users = await res.json()
        const ul = document.getElementById("userList");
        users.forEach(user => {
            const li = document.createElement("li");
            li.textContent = user.name;
            ul.appendChild(li);
        });
    } catch (err) {
        console.error("API取得エラー", err);
    }
}

showUsers();