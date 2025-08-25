import React, { useState } from 'react'

const Comp1 = () => {
    let [num, setNum] = useState(400);

    let [likeBtn, setLikeBtn] = useState(true)


    let [myCls, setMyCls] = useState("fa-heart-o");

    let [likeCount, setLikeCount] = useState(107)

    let a = false;

    let handleClick = ()=>{
        setNum((x)=>{
            if(a == true)
            {
                return ++x;
            }
            else{
                return --x;
            }
        })

        // setNum(500)
    }


    let handleLike = ()=>{
        setLikeBtn((x)=>{
            // if(x==true){
            //     return false;
            // }else{
            //     return true;
            // }
            //return x==true ? false : true;
        })  
    }


    let handleClick2 = ()=>{
        setMyCls((x)=>{
            if(x == "fa-heart-o"){
                setLikeCount(++likeCount)
                return "fa-heart"
            }else{
                setLikeCount(--likeCount)
                return "fa-heart-o";
            }
        })
        
    }

  return (
    <div className="container my-5">
        <div className="row">
            <div className="col-md-12">
                <h1>welcome</h1>
                <button onClick={handleClick} className='btn btn-info'>Click Me</button>
                <h2>{num}</h2>
                <br />
                <br />
                <button onClick={handleLike} className='btn'>
                    <i className={ "fa fa-2x " + (likeBtn==true ? "fa-thumbs-o-up" : "fa-thumbs-up") } aria-hidden="true"></i>

                </button>
                <br />
                <br />
                
                <button onClick={handleClick2} className='btn'>
                    <i className={"fa fa-2x "+myCls} aria-hidden="true"></i>
                </button>
                <span className='fw-bold'>{likeCount}</span>
            </div>
        </div>

    </div>

    
    
  )
}

export default Comp1