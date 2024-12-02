
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import Navbar from './component/Navigationbar/Navbar/Navbar.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './component/Navigationbar/Home/Home.js';
import Services from './component/Navigationbar/Services/Services.js';
import Projects from './component/Navigationbar/Projects/Projects.js';
import About from './component/Navigationbar/About/About.js';
import Careers from './component/Navigationbar/Careers/Careers.js';
import Blog from './component/Navigationbar/Blogs/Blogs.js';
import ContactUs from './component/Navigationbar/ContactUs/ContactUs.js';
function App() {
  return (
    <div className="App">
        

        <BrowserRouter>
        <Navbar/>
          <Routes>

            <Route path='/' element={<Home/>}/>
            <Route path='/Services' element={<Services/>}/>
            <Route path='/Projects' element={<Projects/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/Careers' element={<Careers/>}/>
            <Route path='/Blogs' element={<Blog/>}/>
            <Route path='/ContactUs' element={<ContactUs/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
