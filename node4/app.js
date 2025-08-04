import express from 'express';
const app = express.Router();

console.log(app)
/*
app.get("/api/v1", (req, res)=>{
    let data = [
        {
            name : "rohit",
            age : 25
        },
        {
            name : "ajay",
            age : 21
        }
    ]
    res.send(data);
});

app.get("/api/v1/about", (req, res)=>{
    let data = [
        {
            name : "rohit",
            age : 25
        },
        {
            name : "ajay",
            age : 21
        }
    ]
    res.send(data)    
})

app.get("/api/v1/contact", (req, res)=>{
    let data = [
        {
            name : "rohit",
            age : 25
        },
        {
            name : "ajay",
            age : 21
        }
    ]

    res.send(data)    
    
})


app.listen(3000, ()=>{
    console.log("server running");
});
*/