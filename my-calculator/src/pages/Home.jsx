import React, { useState } from 'react'
import Button from '../ui/Button'

const Home = () => {

    let [ans, setAns] = useState("");
    let [oldValues, setOldValues] = useState(null);
    let [operation, setOperation] = useState("");
    let [checkOpe, setCheckOpe] = useState(true);

    let arr = Array.from({length : 10});

    let handleClick = (num, type)=>{
        if(type=="num"){
            if(operation !=""){
                if(checkOpe){
                    setAns("");
                    setCheckOpe(false);

                }
                setAns((curr)=> curr+num);
            }else{
                setAns((curr)=> curr+num);
            }
        }
        if(type=="ope"){
            setOperation(num);
            setOldValues(ans);
            
        }
        if(type=="ans"){
            
            let x;
            switch(operation){
                case "+" : x = parseInt(oldValues)+ parseInt(ans);
                            break;
                            
                case "-" : x = oldValues-ans;
                            break;
                case "x" : x = oldValues*ans;
                            break;
                case "/" : x = oldValues/ans;
                            break;
            }
            setAns(x);
        }
    }
    


  return (
    <div className="container-fluid bg-dark d-flex justify-content-center align-items-center" style={{ height : "100vh"}}>
        <div style={{ height : "450px", width : "300px",  borderRadius : "15px", boxShadow : "0 0 10px #fff"}}>
            <div style={{height : "25%", width : "100%", borderBottom : "1px solid #fff"}}>
                <div className="row">
                    <div className="col-md-12 pt-5 px-4">
                        <input value={ans} type='text' className='form-control' style={{textAlign : "right"}} />
                    </div>
                </div>
            </div>
            
            <div style={{height : "75%", width : "100%"}} className='p-3'>

                {
                    arr.map((_, index)=><Button btnType={'num'} lable={index} handleClick={handleClick} key={index} />)
                }

                <br />
                <Button lable={'+'} btnType={'ope'} handleClick={handleClick} />
                <Button lable={'-'} btnType={'ope'} handleClick={handleClick} />
                <Button lable={'/'} btnType={'ope'} handleClick={handleClick} />
                <Button lable={'x'} btnType={'ope'} handleClick={handleClick} />
                <Button lable={'='} btnType={'ans'} handleClick={handleClick} />
            </div>

            
            
        </div>
    </div>
  )
}

export default Home