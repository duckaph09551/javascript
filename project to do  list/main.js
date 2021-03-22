// const tasks = [];
const getTasks = () => JSON.parse(localStorage.getItem("tasks")) || [];
//add item vao bang
const addTask = (obj) => {
    const taskItem = document.createElement("div");
    taskItem.className =
        "align-items-center d-flex justify-content-between p-2 shadow task-item mb-2";
    taskItem.innerHTML = `
         <span>${obj.value}</span>
         <button class="btn btn-danger btn-remove">X</button>
        `;

    taskItem.addEventListener("click", (event) => {
        if (event.target.classList.contains("btn-remove")) {
            const check = confirm(`Ban co chac muon xoa ${obj.value}`);
            if (check) {
                taskItem.remove();
                const tasks = getTasks();
                const index = tasks.findIndex((taskItem) => taskItem === obj.value);
                tasks.splice(index, 1);
                localStorage.setItem("tasks", JSON.stringify(tasks));
            }
        }
    });

    document.querySelector(".task").appendChild(taskItem);
};

document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();
    const value = document.querySelector("form input").value.trim();
    if (value) {
        const item = {
            id: new Date().toISOString(),
            value,
        };

        const tasks = getTasks();
        tasks.push(item);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        addTask(item);

        document.querySelector("form input").value = "";
    }
});
//ffilter
document.querySelector(".filter input").addEventListener("keyup", (event) => {
    const value = event.target.value;
    const task = document.querySelector(".task");
    task.innerHTML = "";

    const tasks = getTasks();
    tasks.forEach((items) => {
        if (items.value.toLowerCase().includes(value.toLowerCase().trim())) {
            addTask(items);
        }
    });
});
// xoas heet
document.querySelector(".btn-remove-all").addEventListener("click", (event) => {
    document.querySelector(".task").innerHTML = " ";
    document.querySelector("form input").value = "";
    localStorage.removeItem("tasks");
});

getTasks().forEach((element) => {
    addTask(element);
});