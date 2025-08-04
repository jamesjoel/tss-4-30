let fee = (per, gen, f=100000)=>{
    
    let s = 0;
    if(per > 80 && gen == "f")
    {
        s = f * 10 /100;
    }
    if(per > 80 && gen == "m")
    {
        s = f * 5 / 100;
    }
    if(per <= 80 && gen == "f")
    {
        s = f * 5 / 100;
    }
    let ans = f - s;
    return ans;

}

let x = fee(89, "m", 120000)
console.log(x)