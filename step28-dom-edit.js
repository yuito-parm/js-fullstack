document.getElementById("inputAddBtn").onclick = function() {
    const input = document.getElementById("animalInput");
    const text = input.value.trim();
    if (text) {
        const li = document.createElement("li");
        li.textContent = text;

        // li.onclick = function() {
        //     li.remove();
        // };
        li.ondblclick = function() {
            const currentText = li.textContent;
            const editInput = document.createElement("input");
            editInput.tyoe = "text";
            editInput.value = currentText;
            li.textContent = "";
            li.appendChild(editInput);
            editInput.focus();

            editInput.onblur = editInput.onkeydown = function(e) {
                if (!e || e.type === "blur" || (e.key === "Enter")) {
                    const newText = editInput.value.trim();
                    li.textContent = newText ? newText : currentText;
                }
            };
        };
        document.getElementById("animalList").appendChild(li);
        input.value = "";
    }
};