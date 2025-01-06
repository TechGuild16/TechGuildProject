import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Navbar from './components/Navigationbar/Navbar/Navbar.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import Services from './pages/Services/Services.jsx';
import Projects from './pages/Projects/Projects.jsx';
import About from './pages/About/About.jsx';
import Careers from './pages/Careers/Careers.jsx';
import Blog from './pages/Blogs/Blogs.jsx';
import ContactUs from './pages/ContactUs/ContactUs.jsx';
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
