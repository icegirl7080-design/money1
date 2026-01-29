import React, { Suspense, lazy } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { Loader2 } from 'lucide-react';

// Lazy Load Pages for Performance Optimization
const Home = lazy(() => import('./pages/Home').then(module => ({ default: module.Home })));
const ArticleDetail = lazy(() => import('./pages/ArticleDetail').then(module => ({ default: module.ArticleDetail })));
const CategoryPage = lazy(() => import('./pages/CategoryPage').then(module => ({ default: module.CategoryPage })));
const LoanGuide = lazy(() => import('./pages/LoanGuide').then(module => ({ default: module.LoanGuide })));
const CreditCardGuide = lazy(() => import('./pages/CreditCardGuide').then(module => ({ default: module.CreditCardGuide })));
const InvestmentGuide = lazy(() => import('./pages/InvestmentGuide').then(module => ({ default: module.InvestmentGuide })));
const WelfareGuide = lazy(() => import('./pages/WelfareGuide').then(module => ({ default: module.WelfareGuide })));
const LifeHacksGuide = lazy(() => import('./pages/LifeHacksGuide').then(module => ({ default: module.LifeHacksGuide })));
const FinanceGuide = lazy(() => import('./pages/FinanceGuide').then(module => ({ default: module.FinanceGuide })));
const BlogOverview = lazy(() => import('./pages/BlogOverview').then(module => ({ default: module.BlogOverview })));

const LoadingFallback = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
    <Loader2 className="w-10 h-10 text-blue-600 animate-spin mb-4" />
    <p className="text-slate-500 font-medium animate-pulse">페이지를 불러오는 중입니다...</p>
  </div>
);

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col font-sans text-slate-900 bg-slate-50">
        <Header />
        
        {/* Main Content Area with Skip Link Target */}
        <div id="main-content" className="flex-grow flex flex-col">
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/article/:slug" element={<ArticleDetail />} />
              
              {/* Hub Pages */}
              <Route path="/loan-guide" element={<LoanGuide />} />
              <Route path="/credit-card-guide" element={<CreditCardGuide />} />
              <Route path="/investment-guide" element={<InvestmentGuide />} />
              <Route path="/welfare-guide" element={<WelfareGuide />} />
              <Route path="/life-hacks-guide" element={<LifeHacksGuide />} />
              <Route path="/finance-guide" element={<FinanceGuide />} />
              <Route path="/blog" element={<BlogOverview />} />
              
              {/* Category Routes */}
              <Route path="/finance" element={<CategoryPage />} />
              <Route path="/loan" element={<CategoryPage />} />
              <Route path="/investment" element={<CategoryPage />} />
              <Route path="/welfare" element={<CategoryPage />} />
              <Route path="/life" element={<CategoryPage />} />
            </Routes>
          </Suspense>
        </div>
        
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;