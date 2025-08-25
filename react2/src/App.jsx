import {Routes, Route} from 'react-router-dom'
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Help from './pages/Help';
import Comp1 from './pages/Comp1';
import Product from './pages/Product';

let App = ()=>{
    return(
        <>
        <Header />
        <div className="container" style={{minHeight : "700px"}}>
            <Routes>
                <Route path='/' element={<Home />}  />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/help' element={<Help />} />
                <Route path='/comp1' element={<Comp1 />} />
                <Route path='/product' element={<Product />} />
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