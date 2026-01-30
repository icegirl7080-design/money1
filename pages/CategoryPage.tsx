import React, { useMemo } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { INITIAL_ARTICLES, NAV_ITEMS } from '../constants';
import { ArticleCard } from '../components/ArticleCard';
import { SEO } from '../components/SEO';
import { Category } from '../types';
import { ArrowDown } from 'lucide-react';

export const CategoryPage: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname; 
  
  const navItem = NAV_ITEMS.find(item => item.path === currentPath);
  
  const categoryArticles = useMemo(() => {
    if (!navItem || !navItem.category) return [];
    
    return INITIAL_ARTICLES
      .filter(article => article.category === navItem.category)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, [navItem]);

  if (!navItem || !navItem.category) {
    return (
      <div className="container mx-auto px-4 py-32 text-center min-h-screen flex flex-col justify-center items-center">
        <SEO title="카테고리 찾기 실패" description="요청하신 카테고리를 찾을 수 없습니다." />
        <h2 className="text-3xl font-black text-slate-900 mb-4">카테고리를 찾을 수 없습니다.</h2>
        <Link to="/" className="text-sky-600 font-bold hover:underline">홈으로 돌아가기</Link>
      </div>
    );
  }

  // Dynamic Styles based on category
  const getCategoryStyles = (cat: Category) => {
    switch (cat) {
      case Category.FINANCE: return 'from-emerald-50 via-white to-white text-emerald-600 bg-emerald-50 border-emerald-100 button-emerald';
      case Category.LOAN: return 'from-sky-50 via-white to-white text-sky-600 bg-sky-50 border-sky-100 button-sky';
      case Category.INVESTMENT: return 'from-red-50 via-white to-white text-red-600 bg-red-50 border-red-100 button-red';
      case Category.WELFARE: return 'from-purple-50 via-white to-white text-purple-600 bg-purple-50 border-purple-100 button-purple';
      case Category.LIFE: return 'from-amber-50 via-white to-white text-amber-600 bg-amber-50 border-amber-100 button-amber';
      default: return 'from-slate-50 via-white to-white text-slate-600 bg-slate-50 border-slate-100 button-slate';
    }
  };

  const styles = getCategoryStyles(navItem.category);
  const gradientClass = styles.split(' ').slice(0, 3).join(' ');
  const badgeClass = styles.split(' ').slice(3, 6).join(' '); // Extract text, bg, border classes
  const btnColor = styles.split(' ').pop(); // Custom marker for button color logic

  // Helper to map button color
  const getButtonClass = () => {
    if (btnColor === 'button-emerald') return 'bg-emerald-600 shadow-emerald-200 hover:shadow-emerald-300 hover:bg-emerald-700';
    if (btnColor === 'button-sky') return 'bg-sky-600 shadow-sky-200 hover:shadow-sky-300 hover:bg-sky-700';
    if (btnColor === 'button-red') return 'bg-red-600 shadow-red-200 hover:shadow-red-300 hover:bg-red-700';
    if (btnColor === 'button-purple') return 'bg-purple-600 shadow-purple-200 hover:shadow-purple-300 hover:bg-purple-700';
    if (btnColor === 'button-amber') return 'bg-amber-600 shadow-amber-200 hover:shadow-amber-300 hover:bg-amber-700';
    return 'bg-slate-800 shadow-slate-200 hover:shadow-slate-300 hover:bg-slate-900';
  };

  return (
    <main className="flex-grow bg-slate-50 min-h-screen">
      <SEO 
        title={`${navItem.category} | 머니와이즈`}
        description={`전문가가 엄선한 ${navItem.category} 관련 최신 정보와 실전 꿀팁을 확인하세요. 당신의 금융 생활을 업그레이드할 핵심 가이드입니다.`}
        keywords={[navItem.category, '금융', '재테크', '꿀팁']}
      />

      <div className={`bg-gradient-to-b ${gradientClass} border-b border-slate-100`}>
        <div className="container mx-auto px-4 py-20 text-center md:text-left animate-on-scroll flex flex-col md:items-start items-center">
          <span className={`inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider uppercase rounded-full border ${badgeClass}`}>
            Category
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">
            {navItem.category}
          </h1>
          <p className="text-slate-500 text-lg max-w-2xl leading-relaxed font-medium mb-10 text-center md:text-left">
             전문가가 엄선한 <span className="text-slate-900 font-bold">{navItem.category}</span> 관련 최신 정보와 실전 꿀팁을 확인하세요.
             당신의 금융 생활을 업그레이드할 핵심 가이드입니다.
          </p>

          <a href="#list" className={`inline-flex items-center gap-2 px-8 py-4 text-white font-bold rounded-2xl shadow-lg transition-all hover:-translate-y-1 ${getButtonClass()}`}>
            글 목록 보기 <ArrowDown size={20} />
          </a>
        </div>
      </div>

      <div id="list" className="container mx-auto px-4 py-16 animate-on-scroll delay-100 scroll-mt-20">
        {categoryArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryArticles.map((article, idx) => (
              <div key={article.id} className={`animate-on-scroll delay-${Math.min((idx % 3) * 100, 300)}`}>
                <ArticleCard article={article} />
              </div>
            ))}
          </div>
        ) : (
          <div className="py-32 text-center text-slate-400 bg-white rounded-3xl border border-slate-100 shadow-sm">
            <p className="text-lg font-medium">아직 등록된 게시글이 없습니다.</p>
            <p className="text-sm mt-2 text-slate-400">새로운 콘텐츠가 곧 업데이트될 예정입니다.</p>
          </div>
        )}
      </div>
    </main>
  );
};