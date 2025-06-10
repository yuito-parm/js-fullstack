document.getElementById("addBtn").onclick = function() {
    const li = document.createElement("li");
    li.textContent = "ハリネズミ";
    document.getElementById("animalList").appendChild(li);
}