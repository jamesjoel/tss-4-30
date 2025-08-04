import express from 'express';

const routes = express.Router();

routes.get("/api/v1/student", (req, res)=>{
    let student = [
        {
            id : 1,
            name : "rohit",
            class : 7
        },
        {
            id : 2,
            name : "ajay",
            class : 3
        },
        {
            id : 3,
            name : "vijay",
            class : 8
        }
    ]
    res.send(student)
})

routes.get("/api/v1/teacher", (req, res)=>{
    let teacher = [
        {
            id : 1,
            name : "jaya",
            salary : 15000
        },
        {
            id : 2,
            name : "ritesh",
            salary : 45000
        },
        {
            id : 3,
            name : "imran",
            salary : 35700
        }
    ]
    res.send(teacher)
})

export default routes;