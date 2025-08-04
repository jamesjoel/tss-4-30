let a = {}; // empty object
let b = { x : "red", y : "blue", z : "green" };


let info = {
    name : "rohit",
    age : 25,
    city : "indore",
    hobby : { a : "cricket", b : "football", c : b }
}

console.log(info.hobby.c.z);