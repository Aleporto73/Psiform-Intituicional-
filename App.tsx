
import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AbaSimplesPage from './pages/AbaSimplesPage';
import NeuroRastreioPage from './pages/NeuroRastreioPage';
import WhitePaperPage from './pages/WhitePaperPage';
import Header from './components/Header';
import Footer from './components/Footer';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/abasimples" element={<AbaSimplesPage />} />
            <Route path="/neurorastreio" element={<NeuroRastreioPage />} />
            <Route path="/whitepaper" element={<WhitePaperPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
