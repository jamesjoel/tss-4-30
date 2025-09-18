import {Routes, Route} from 'react-router-dom'
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Help from './pages/Help';
import Comp1 from './pages/Comp1';
import Product from './pages/Product';
import Weather from './pages/Weather';
import News from './pages/News';
import Comp2 from './pages/Comp2';
import Comp3 from './pages/Comp3';
import Comp4 from './pages/Comp4';
import Comp5 from './pages/Comp5';
import Comp6 from './pages/Comp6';
import Comp7 from './pages/Comp7';
import Comp8 from './pages/Comp8';
import More from './pages/More';
import Info from './pages/Info';
import AboutBox from './pages/AboutBox';

let App = ()=>{
    return(
        <>
        <Header />
        <div className="" style={{minHeight : "700px"}}>
            <Routes>
                <Route path='/' element={<Home />}  />

                <Route path='/' element={<AboutBox />}>

                    <Route path='about' element={<About />} />
                    
                    <Route path='about/more' element={<More />} />
                    <Route path='about/info' element={<Info />} />

                </Route>

                <Route path='/contact' element={<Contact />} />
                <Route path='/help' element={<Help />} />
                <Route path='/comp1' element={<Comp1 />} />
                <Route path='/product' element={<Product />} />
                <Route path='/weather' element={<Weather />} />
                <Route path='/news' element={<News />} />
                <Route path='/comp2' element={<Comp2 />} />
                <Route path='/comp3' element={<Comp3 />} />
                <Route path='/comp4' element={<Comp4 />} />
                <Route path='/comp5' element={<Comp5 />} />
                <Route path='/comp6' element={<Comp6 />} />
                <Route path='/comp7' element={<Comp7 />} />
                <Route path='/comp8' element={<Comp8 />} />
            </Routes>
        </div>
        <Footer />
        </>
    )
}
export default App;

/*
HTML
    <div class="container"></div>
    <img src="" />
    <a href=""></a>

JSX
    <div className=""
            props


SPA ---- Single Page Application


react-router-dom
    <BrowserRouter>
    <Routes>
    <Route>
    <NavLink>

*/