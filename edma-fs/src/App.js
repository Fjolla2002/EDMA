import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import ArchitecturePage from './pages/ArchitecturePage';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import Language from './Context/Language';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import SingleProject from './components/ProjectsComponents/SingleProject';
import ScrollToTop from './components/ScrollToTop';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <Language>
      <BrowserRouter>
      <ScrollToTop/>
      <Navbar/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/about-us' element={<AboutUsPage/>}/>
          <Route path='/architecture' element={<ArchitecturePage/>}/>
          <Route path='/services' element={<ServicesPage/>}/>
          <Route path='/projects' element={<ProjectsPage/>}/>
          <Route path='/projects/:title' element={<SingleProject/>}/>
          <Route path='/contact' element={<ContactPage/>}/>
          <Route path='*' element={<ErrorPage/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </Language>
  );
}

export default App;
