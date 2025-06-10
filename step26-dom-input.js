document.getElementById("inputAddBtn").onclick = function() {
    const input = document.getElementById("animalInput");
    const text = input.value.trim();
    if (text) {
        const li = document.createElement("li");
        li.textContent = text;
        document.getElementById("animalList").appendChild(li);
        input.value = "";
    }
}