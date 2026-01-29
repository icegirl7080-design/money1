import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { ArticleDetail } from './pages/ArticleDetail';
import { CategoryPage } from './pages/CategoryPage';
import { LoanGuide } from './pages/LoanGuide';
import { CreditCardGuide } from './pages/CreditCardGuide';
import { BlogOverview } from './pages/BlogOverview';
import { ScrollToTop } from './components/ScrollToTop';

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col font-sans text-slate-900 bg-slate-50">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/article/:id" element={<ArticleDetail />} />
          <Route path="/loan-guide" element={<LoanGuide />} />
          <Route path="/credit-card-guide" element={<CreditCardGuide />} />
          <Route path="/blog" element={<BlogOverview />} />
          
          {/* Category Routes */}
          <Route path="/finance" element={<CategoryPage />} />
          <Route path="/loan" element={<CategoryPage />} />
          <Route path="/investment" element={<CategoryPage />} />
          <Route path="/welfare" element={<CategoryPage />} />
          <Route path="/life" element={<CategoryPage />} />
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;