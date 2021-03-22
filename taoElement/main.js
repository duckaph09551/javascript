// //theem 1 phan tu
// const el = document.createElement("div");
// //TODO C1 el.className = "card p-2 mb-3";
// // el.classList.add("card", "p-2", "mb-3");
// el.setAttribute("class", "card mb-3 p-2");
// el.id = "123";
// // el.innerText = "Choi game";
// el.appendChild(document.createTextNode("Choi game"));

// document.querySelector(".container").appendChild(el);

//==============================================================
//==============================================================
// xoa va thay the element
// const card = document.getElementsByClassName("card");
// document.querySelector(".container").removeChild(card[2]);

// document.getElementsByClassName("card")[2].classList.add("bg-info");
// // document.getElementsByClassName("card")[2].classList.remove("p-2");
// document.getElementsByClassName("card")[2].setAttribute("data-name", "123");
// document.getElementsByClassName("card")[2].removeAttribute("data-name");

//========================================================
//========================================================
//sự kiên mouse
const btn = document.querySelector(".btn.btn-primary");
btn.addEventListener("click", (event) => {
    event.preventDefault();
    // console.log(event.target.parentElement);
    const value = document.getElementsByTagName("input")[0].value;
    // console.log(value);
});

document.querySelector(".container").addEventListener("mousemove", (event) => {
    event.target.style.background = `rgb(${event.clientX},${event.clientY}, 60)`;
});

// su kien ban phim
document.getElementById("name").addEventListener("change", (event) => {
    // console.log(event.target.value);
});

// localstorage , cookies
//ccookies cho phep luu tru thong tin nguoi dung website vao may tinh