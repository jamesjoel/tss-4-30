let stu = {
    name :  "rohit",
    age : 21,
    fee : 5000,
    city : "indore"
}

// let {...old_stu} = stu;
let old_stu = {...stu};

stu.age = 22;
stu.fee = 6500;
stu.city = "mhow";

console.log(stu)
console.log(old_stu)