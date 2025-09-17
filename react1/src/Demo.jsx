// import './Demo.css'
let Demo = ()=>{
    let y = "green";
    let x = { 
        backgroundColor : y, 
        fontSize : "20px",
        marginTop : "50px"
    };
    return(
        <>
        <div style={x}>

            <h1>Welcome</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis cum corrupti sed praesentium hic reprehenderit beatae voluptates aliquam odio voluptas. Similique, porro. Explicabo ea ipsa totam, maiores in veniam. Numquam.</p>
        </div>
        </>
    )
}

export default Demo;