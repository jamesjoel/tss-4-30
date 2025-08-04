let Student = (req, res)=>{
    res.send("Student")
}

let StudentPass = (req, res)=>{
    
    res.send("All Pass Student")
}

let StudentFail = (req, res)=>{
    res.send("All Fail Student")


}

export {Student, StudentFail, StudentPass}