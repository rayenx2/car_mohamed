
import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';

// Styling
import './tailwind.css';

// page and layout imports
import ScrollPagesTop from "./hooks/ScrollPagesTop";
import SiteHeader from "./components/SiteHeader";
import Footer from "./components/Footer";
import WhatsAppSticky from './components/WhatsAppSticky';

// Lazy loaded pages
const LandingPage = lazy(() => import("./pages/LandingPage"));
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Stock = lazy(() => import("./pages/Stock"));
const CarPage = lazy(() => import("./pages/CarPage"));
const Thanks = lazy(() => import("./pages/Thanks"));



// Loading fallback
const PageLoader = () => (
  <div className="min-h-[50vh] flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
  </div>
);

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="App min-h-screen relative flex flex-col">
          <ScrollPagesTop />
          <SiteHeader />
          {/* <Wallpaper /> Removing Wallpaper for new design compatibility on Home, keep for others if needed or handle inside pages */}
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
              </Routes>
            </Suspense>
          </main>
          <Footer />
          <WhatsAppSticky />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;