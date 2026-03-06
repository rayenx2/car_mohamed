
import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { LanguageProvider } from './contexts/LanguageContext';

// Styling
import './tailwind.css';

// page and layout imports
import ScrollPagesTop from "./hooks/ScrollPagesTop";
import SiteHeader from "./components/SiteHeader";
import Footer from "./components/Footer";
import WhatsAppSticky from './components/WhatsAppSticky';
import StructuredData from './components/StructuredData';

// Lazy loaded pages
const LandingPage = lazy(() => import("./pages/LandingPage"));
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Stock = lazy(() => import("./pages/Stock"));
const CarPage = lazy(() => import("./pages/CarPage"));
const Thanks = lazy(() => import("./pages/Thanks"));
const Impressum = lazy(() => import("./pages/Impressum"));



// Loading fallback
const PageLoader = () => (
  <div className="min-h-[50vh] flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
  </div>
);

function App() {
  return (
    <HelmetProvider>
      <LanguageProvider>
        <Router>
          <div className="App min-h-screen relative flex flex-col">
            <StructuredData />
            <ScrollPagesTop />
            <SiteHeader />
            <main className="flex-grow">
              <Suspense fallback={<PageLoader />}>
                <Routes>
                  <Route path='/' element={<LandingPage />} />
                  <Route path='/home-legacy' element={<Home />} />
                  <Route path='/services' element={<Services />} />
                  <Route path='/stock' element={<Stock />} />
                  <Route path='/about' element={<About />} />
                  <Route path='/carpage/:id' element={<CarPage />} />
                  <Route path='/thanks' element={<Thanks />} />
                  <Route path='/impressum' element={<Impressum />} />
                </Routes>
              </Suspense>
            </main>
            <Footer />
            <WhatsAppSticky />
          </div>
        </Router>
      </LanguageProvider>
    </HelmetProvider>
  );
}

export default App;