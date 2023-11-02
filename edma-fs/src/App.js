import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import Language from './Context/Language';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <Language>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/about-us' element={<AboutUsPage/>}/>
        </Routes>
      </BrowserRouter>
    </Language>
  );
}

export default App;
