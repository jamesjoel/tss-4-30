import React from 'react'
import AllRoutes from './routes/AllRoutes'
import Header from './components/Header'
import Hero from './components/Hero'
import BestSelling from './components/BestSelling'
import BlogPost from './components/BlogPost'
import Footer from './components/Footer'
import HeroBanner from './components/HeroBanner'

const App = () => {
  return (
    <>
    <Header />
    <HeroBanner />
      <div style={{minHeight : "700px"}}>
        <AllRoutes /> 

      </div>
        {/* load here the pertucal page from AllRoutes */}


    
    <BlogPost />
    <Footer />
    </>
  )
}

export default App