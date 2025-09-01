import React, { useState } from 'react'
import axios from 'axios'
const News = () => {

    let [allNews, setAllNews] = useState([])

    let getNews = () => {
        axios
        .get("https://newsdata.io/api/1/latest?apikey=pub_960388141367493ba43ebb64c7391af2&q=india&language=hi&category=science&timezone=Asia/Kolkata")
        .then(response=>{
            // console.log(response.data.results)
            setAllNews(response.data.results);
        })
    }


    let timing = (x)=>{

        
        let currDate = new Date();
        let pubDate = new Date(x);
        const differenceInMs = currDate - pubDate;
        const h = differenceInMs / (1000 * 60 * 60)
        const y = Math.floor(h);
        return <span style={{backgroundColor : "red"}}>{y}</span>;
    }

    return (
        <div className="container">
            <button onClick={getNews} className='btn btn-info'>Get All News</button>
            <div className="row">
                {
                    allNews.map(item => <div className="col-md-4 my-3">
                                    <div className='card border border-dark'>
                                    <div className="card-header bg-info">{item.title}</div>
                                    <div className="card-body">
                                        <img src={item.image_url} className='img-thumbnail' style={{height : "250px"}}/>
                                        <p>{item.country}</p>
                                        <p>{timing(item.pubDate)} घंटे पहले</p>
                                    </div>
                                    </div>
                                </div>

                    )
                }



            </div>
        </div>
    )
}

export default News