
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// page and layout imports
import About from "./pages/About";

import CarPage from "./pages/CarPage";
import Contact from "./pages/Contact";
import Financing from "./pages/Financing";
import Footer from "./components/Footer";

import ScrollPagesTop from "./hooks/ScrollPagesTop";
import SiteHeader from "./components/SiteHeader";
import Thanks from "./pages/Thanks";
import Wallpaper from "./components/Wallpaper";



// Styling
import './tailwind.css';

function App() {



  return (
    <Router>
        <div className="App min-h-screen relative">
          <ScrollPagesTop />
          <SiteHeader />
          <Wallpaper />
          <Routes>
            <Route path='/about' element={<About />} /> 
 
            <Route path='/carpage/:id' element={<CarPage />} /> 
            <Route path='/contact' element={<Contact />} /> 
            <Route path='/financing' element={<Financing />} /> 
            <Route path='/' element={<div className="pt-20 pb-16 text-center">
              <h1 className="text-4xl font-bold mb-4">Welcome to Alfa Motors</h1>
              <p className="text-xl">Premium Car Dealership</p>
            </div>} />

            <Route path='/thanks' element={<Thanks />} /> 
          </Routes>
          <Footer />
        </div>
    </Router>
  );
}

export default App;