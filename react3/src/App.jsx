let App = ()=>{
    
    let arr = ["red", "green", "blue", "yellow", "black", "white", "gray", "pink", "hello", "sgsdfgs"];

    return(
        <>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, reprehenderit veniam porro enim a vitae accusamus vero id error quasi doloremque, facere laboriosam minus beatae nisi eveniet repellat quaerat tempora?</p>
            {
                arr.map((item, index)=>{
                    return(
                        <>
                        {
                            <h3 style={{backgroundColor : (index+1) % 2==0 ? "gray" : "pink" }}>{item}</h3>
                        }
                        </>
                    )
                })
            }
        </>
    )
}

export default App;

/*
HOF

    .forEach
    .map


    arr.forEach((item, index, newarr)=>{ 

    })

 let x = arr.map((item, index, newarr)=>{ 

        return 
    })


    .filter
    .reduce

*/