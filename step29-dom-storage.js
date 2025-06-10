let animals = JSON.parse(localStorage.getItem("animalList") || "[]");
renderList();

function renderList() {
    const ul = document.getElementById("animalList");
    ul.innerHTML = "";
    animals.forEach((animal, i) => {
        const li = document.createElement("li");
        li.textContent = animal;
        
        li.onclick = function() {
            animals.splice(i, 1);
            localStorage.setItem("animalList", JSON.stringify(animals));
            renderList();
        };

        li.ondblclick = function() {
            const editInput = document.createElement("input");
            editInput.type = "text";
            editInput.value = animal;
            li.textContent = "";
            li.appendChild(editInput);
            editInput.focus();

            function finishEdit() {
                const newText = editInput.value.trim()
                if (newText) {
                    animals[i] = newText;
                    localStorage.setItem("animalList", JSON.stringify(animals));
                }
                renderList();
            }
            editInput.onblur = finishEdit();
            editInput.onkeydown = function(e) {
                if (e.key === "Enter") finishEdit();
            };
        };
        ul.appendChild(li)
    });
}

document.getElementById("inputAddBtn").onclick = function() {
    const input = document.getElementById("animalInput");
    const text = input.value.trim();
    if (text) {
        animals.push(text);
        localStorage.setItem("animalList", JSON.stringify(animals));
        renderList();
        input.value = "";
    }
};