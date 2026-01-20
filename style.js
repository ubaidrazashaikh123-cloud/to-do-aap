// const input = document.getElementById("todoInput");
// const priority = document.getElementById("priority");
// const addBtn = document.getElementById("addBtn");
// const list = document.getElementById("list");
// const search = document.getElementById("search");
// const progressBar = document.getElementById("progressBar");
// const progressPercent = document.getElementById("progressPercent");
// const totalEl = document.getElementById("total");
// const completedEl = document.getElementById("completed");
// const pendingEl = document.getElementById("pending");
// const empty = document.getElementById("empty");
// const undoBox = document.getElementById("undo");
// const undoBtn = document.getElementById("undoBtn");
// const modal = document.getElementById("modal");
// const editInput = document.getElementById("editInput");
// const saveEditBtn = document.getElementById("saveEditBtn");

// let todos = JSON.parse(localStorage.getItem("todos")) || [];
// let deleted = null;
// let editIndex = null;

// // Display current date
// const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
// document.getElementById('date-display').textContent = new Date().toLocaleDateString(undefined, options);

// addBtn.onclick = addTodo;
// search.oninput = () => render();

// input.addEventListener("keydown", e => { if (e.key === "Enter") addTodo() });

// function addTodo() {
//     if (!input.value.trim()) return;
//     todos.push({ 
//         text: input.value, 
//         priority: priority.value, 
//         done: false,
//         id: Date.now() 
//     });
// }

// function save() {
//     localStorage.setItem("todos", JSON.stringify(todos));
//     render();
// }

// function render() {
//     list.innerHTML = "";
//     let searchTerm = search.value.toLowerCase();
    
//     let filtered = todos.filter(t => t.text.toLowerCase().includes(searchTerm));

//     filtered.forEach((t, i) => {
//         const actualIndex = todos.findIndex(item => item.id === t.id);
        
//         const li = document.createElement("li");
//         li.className = t.priority;

//         const row = document.createElement("div");
//         row.className = "row";

//         const check = document.createElement("input");
//         check.type = "checkbox";
//         check.checked = t.done;
//         check.onchange = () => { 
//             todos[actualIndex].done = !todos[actualIndex].done; 
//             save(); 
//         };

//         const span = document.createElement("span");
//         span.textContent = t.text;
//         if (t.done) span.className = "completed-text";

//         row.append(check, span);

//         const actions = document.createElement("div");
//         actions.className = "actions";

//         const up = document.createElement("button");
//         up.className = "small update";
//         up.innerHTML = "Edit";
//         up.onclick = () => {
//             modal.style.display = "flex";
//             editInput.value = t.text;
//             editIndex = actualIndex;
//             editInput.focus();
//         };

//         const del = document.createElement("button");
//         del.className = "small delete";
//         del.innerHTML = "Delete";
//         del.onclick = () => {
//             deleted = { ...todos[actualIndex] };
//             todos.splice(actualIndex, 1);
//             showUndo();
//             save();
//         };

//         actions.append(up, del);
//         li.append(row, actions);
//         list.append(li);
//     });

//     updateStats();
// }

// function updateStats() {
//     const total = todos.length;
//     const doneCount = todos.filter(t => t.done).length;
//     const pendingCount = total - doneCount;
//     const percent = total === 0 ? 0 : Math.round((doneCount / total) * 100);

//     totalEl.textContent = total;
//     completedEl.textContent = doneCount;
//     pendingEl.textContent = pendingCount;
//     progressBar.style.width = percent + "%";
//     progressPercent.textContent = percent + "%";
//     empty.style.display = total === 0 ? "block" : "none";
// }

// function showUndo() {
//     undoBox.style.display = "flex";
//     setTimeout(() => { undoBox.style.display = "none"; }, 4000);
// }

// undoBtn.onclick = () => {
//     if (deleted) {
//         todos.push(deleted);
//         deleted = null;
//         save();
//         undoBox.style.display = "none";
//     }
// };

// saveEditBtn.onclick = () => {
//     if (editIndex !== null && editInput.value.trim()) {
//         todos[editIndex].text = editInput.value;
//         closeModal();
//         save();
//     }
// };

// function closeModal() {
//     modal.style.display = "none";
//     editIndex = null;
// }

// window.onclick = (e) => { if (e.target === modal) closeModal(); };

// render();


const input = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("list");
const search = document.getElementById("search");
const progressBar = document.getElementById("progressBar");
const progressPercent = document.getElementById("progressPercent");
const totalEl = document.getElementById("total");
const completedEl = document.getElementById("completed");
const pendingEl = document.getElementById("pending");
const empty = document.getElementById("empty");
const undoBox = document.getElementById("undo");
const undoBtn = document.getElementById("undoBtn");
const modal = document.getElementById("modal");
const editInput = document.getElementById("editInput");
const saveEditBtn = document.getElementById("saveEditBtn");

let todos = JSON.parse(localStorage.getItem("todos")) || [];
let deleted = null;
let editIndex = null;

// Display current date
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
document.getElementById('date-display').textContent = new Date().toLocaleDateString(undefined, options);

addBtn.onclick = addTodo;
search.oninput = () => render();
input.addEventListener("keydown", e => { if (e.key === "Enter") addTodo(); });

function addTodo() {
    if (!input.value.trim()) return;
    todos.push({ 
        text: input.value, 
        priority: "medium", 
        done: false,
        id: Date.now() 
    });
    input.value = "";
    save();
}

function save() {
    localStorage.setItem("todos", JSON.stringify(todos));
    render();
}

function render() {
    list.innerHTML = "";
    let searchTerm = search.value.toLowerCase();
    
    let filtered = todos.filter(t => t.text.toLowerCase().includes(searchTerm));

    filtered.forEach((t, i) => {
        const actualIndex = todos.findIndex(item => item.id === t.id);
        
        const li = document.createElement("li");
        li.className = t.priority;

        const row = document.createElement("div");
        row.className = "row";

        const check = document.createElement("input");
        check.type = "checkbox";
        check.checked = t.done;
        check.onchange = () => { 
            todos[actualIndex].done = !todos[actualIndex].done; 
            save(); 
        };

        const span = document.createElement("span");
        span.textContent = t.text;
        if (t.done) span.className = "completed-text";

        row.append(check, span);

        const actions = document.createElement("div");
        actions.className = "actions";

        const up = document.createElement("button");
        up.className = "small update";
        up.innerHTML = "Edit";
        up.onclick = () => {
            modal.style.display = "flex";
            editInput.value = t.text;
            editIndex = actualIndex;
            editInput.focus();
        };

        const del = document.createElement("button");
        del.className = "small delete";
        del.innerHTML = "Delete";
        del.onclick = () => {
            deleted = { ...todos[actualIndex] };
            todos.splice(actualIndex, 1);
            showUndo();
            save();
        };

        actions.append(up, del);
        li.append(row, actions);
        list.append(li);
    });

    updateStats();
}

function updateStats() {
    const total = todos.length;
    const doneCount = todos.filter(t => t.done).length;
    const pendingCount = total - doneCount;
    const percent = total === 0 ? 0 : Math.round((doneCount / total) * 100);

    totalEl.textContent = total;
    completedEl.textContent = doneCount;
    pendingEl.textContent = pendingCount;
    progressBar.style.width = percent + "%";
    progressPercent.textContent = percent + "%";
    empty.style.display = total === 0 ? "block" : "none";
}

function showUndo() {
    undoBox.style.display = "flex";
    setTimeout(() => { undoBox.style.display = "none"; }, 4000);
}

undoBtn.onclick = () => {
    if (deleted) {
        todos.push(deleted);
        deleted = null;
        save();
        undoBox.style.display = "none";
    }
};

saveEditBtn.onclick = () => {
    if (editIndex !== null && editInput.value.trim()) {
        todos[editIndex].text = editInput.value;
        closeModal();
        save();
    }
};

function closeModal() {
    modal.style.display = "none";
    editIndex = null;
}

window.onclick = (e) => { if (e.target === modal) closeModal(); };

render();
