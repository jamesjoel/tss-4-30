let Employee = (req, res)=>{
    let data = [
        {
            id : 1, 
            name : "rohit",
            age : 25
        },
        {
            id : 2, 
            name : "ajay",
            age : 22
        }
    ]
    res.send(data)
}

let EmployeePost = (req, res)=>{
    console.log(req.body);
    let emp = req.body;
    // Data Save

    res.send("Data Saved");
}

export {Employee, EmployeePost}


/*


function demo()
{
}


let demo = ()=>{

    }


app.listen(3000, function(){

})

app.listen(3000, ()=>{
    })


*/