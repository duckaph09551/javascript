// function Persion(firstname, age) {
//     this.firstname = firstname;
//     this.age = age;
// }
// Persion.prototype.show = function() {
//     console.log("xin chao" + this.firstname);
// };

// const duoc = new Persion("duoc", 25);
// console.log(duoc);

//TODO: =======================================

class persion {
    constructor(firstName, age) {
        this.firstName = firstName;
        this.age = age;
    }

    show() {
        alert("xin chao" + this.firstName);
    }
}
// console.log(typeof persion); //  class cung la function
const duoc = new persion("duoc", 25);

//================================

// class user {
//     constructor(name) {
//         this.name = name;
//     }

//     get name() {
//         return this._name;
//     }
//     set name(value) {
//         if (value.length < 4) {
//             console.log("nho");
//             return;
//         }
//         this._name = value;
//     }
// }

//TODO: ==========================================
class Button {
    constructor(value) {
        this.value = value;
    }
    click = () => {
        console.log(this.value);
    };
}

let button = new Button("hello");
setTimeout(() => button.click(), 1000);