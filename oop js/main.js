let obj = {
    0: "hello",
    1: "world",
    length: 2,
};

// obj.join = Array.prototype.join;
console.log(obj.__proto__);
obj.__proto__ = Array.prototype;
console.log(obj.join(" "));