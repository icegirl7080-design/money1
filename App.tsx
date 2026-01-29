import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';

// Since this is a SPA, we wrap the content in a layout
// We use HashRouter as requested in the guidelines
const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col font-sans text-slate-900 bg-slate-50">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Placeholder routes for other categories to demonstrate structure */}
          <Route path="/finance" element={<Home />} />
          <Route path="/loan" element={<Home />} />
          <Route path="/investment" element={<Home />} />
          <Route path="/welfare" element={<Home />} />
          <Route path="/life" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;