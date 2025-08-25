let Employee = (req, res)=>{
    res.send("All Employee");
}
let EmployeeOld = (req, res)=>{
    res.send("All old employee")
}
let EmployeeNew = (req, res)=>{
    res.send("All new Employee")
}

export { Employee, EmployeeNew, EmployeeOld}