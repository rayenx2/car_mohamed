
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';

// page and layout imports
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Stock from "./pages/Stock";
import FAQ from "./pages/FAQ";
import CarPage from "./pages/CarPage";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

import ScrollPagesTop from "./hooks/ScrollPagesTop";
import SiteHeader from "./components/SiteHeader";
import Thanks from "./pages/Thanks";
import Wallpaper from "./components/Wallpaper";



// Styling
import './tailwind.css';

function App() {



  return (
    <LanguageProvider>
      <Router>
        <div className="App min-h-screen relative">
          <ScrollPagesTop />
          <SiteHeader />
          <Wallpaper />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/services' element={<Services />} /> 
            <Route path='/stock' element={<Stock />} /> 
            <Route path='/faq' element={<FAQ />} /> 
            <Route path='/about' element={<About />} /> 
            <Route path='/carpage/:id' element={<CarPage />} /> 
            <Route path='/contact' element={<Contact />} /> 
            <Route path='/thanks' element={<Thanks />} /> 
          </Routes>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;