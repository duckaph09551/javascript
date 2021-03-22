const buttons = document.getElementsByClassName("btn");
for (bns of buttons) {
    bns.addEventListener("click", (event) => {
        document.querySelectorAll(".btn").forEach((item) => {
            item.classList.remove("active");
        });
        event.target.classList.add("active");
        const id = event.target.id;

        document.querySelectorAll(".content").forEach((item) => {
            if (item.dataset.id === id) {
                item.classList.add("active");
            } else {
                item.classList.remove("active");
            }
        });
    });
}