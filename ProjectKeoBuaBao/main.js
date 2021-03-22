const VALUES = [
    { id: "scissors", value: "✌" },
    { id: "rock", value: "✊" },
    { id: "paper", value: "✋" },
];

let scope = 0;
document.querySelector(".count").innerText = "Điểm số : " + scope;
// Change
let i = 0;
const change = () => {
    const computer = document.querySelector(".computer");
    computer.textContent = VALUES[i].value;
    computer.dataset.id = VALUES[i].id;
    if (i === VALUES.length - 1) {
        i = 0;
    } else {
        i++;
    }
};

const compare = (value1, value2) => {
    // trả về index của phần tử trong mảng
    const index1 = VALUES.findIndex((item) => item.id === value1);
    const index2 = VALUES.findIndex((item) => item.id === value2);

    if (index1 == 0 && index2 == 2) {
        return 1;
    }
    if (index1 == 2 && index2 == 0) {
        return -1;
    }
    if (index1 === index2) {
        return 0;
    } else {
        return index1 < index2 ? -1 : 1;
    }
};

// User click

let intervals = setInterval(change, 100);

document.querySelectorAll(".user").forEach((item) => {
    item.addEventListener("click", (event) => {
        event.target.classList.add("active");
        const value1 = event.target.id;
        clearInterval(intervals);
        const value2 = document.querySelector(".computer").dataset.id;
        const result = compare(value1, value2);
        let message;
        document.querySelector(".notification").classList.remove("d-none");
        const alert = document.querySelector(".notification .alert");
        if (result === -1) {
            message = "Bạn đã thua";
            alert.classList.add("alert-dark");
            scope--;
            if (scope < 0) {
                scope = 0;
            }
            document.querySelector(".count").innerText = "Điểm số : " + scope;
        } else if (result === 0) {
            message = "Bạn đã hòa";
            alert.classList.add("alert-warning");
        } else {
            message = "Bạn đã thắng";
            alert.classList.add("alert-success");
            scope++;
            document.querySelector(".count").innerText = "Điểm số : " + scope;
        }
        alert.textContent = message;
        document.querySelector(".play-again").classList.remove("d-none");
        document.querySelectorAll(".user").forEach((_item) => {
            _item.style.pointerEvents = "none";
        });
    });
});

// Play again
document.querySelector(".play-again").addEventListener("click", (event) => {
    intervals = setInterval(change, 100);
    document.querySelectorAll(".user").forEach((item) => {
        item.style.pointerEvents = "";
        item.classList.remove("active");
    });
    document
        .querySelector(".notification .alert")
        .classList.remove("alert-dark", "alert-warning", "alert-success");
    document.querySelector(".notification").classList.add("d-none");
    document.querySelector(".play-again").classList.add("d-none");
});