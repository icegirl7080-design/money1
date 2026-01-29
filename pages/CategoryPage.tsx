import React, { useMemo } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { INITIAL_ARTICLES, NAV_ITEMS } from '../constants';
import { ArticleCard } from '../components/ArticleCard';

export const CategoryPage: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname; // e.g., "/finance"
  
  const navItem = NAV_ITEMS.find(item => item.path === currentPath);
  
  // Memoize the filtered and sorted articles to optimize performance
  const categoryArticles = useMemo(() => {
    if (!navItem || !navItem.category) return [];
    
    return INITIAL_ARTICLES
      .filter(article => article.category === navItem.category)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, [navItem]);

  if (!navItem || !navItem.category) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">카테고리를 찾을 수 없습니다.</h2>
        <Link to="/" className="text-blue-600 hover:underline">홈으로 돌아가기</Link>
      </div>
    );
  }

  return (
    <main className="flex-grow bg-slate-50 min-h-screen">
      <div className="bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 py-16 text-center md:text-left">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-blue-600 uppercase bg-blue-50 rounded-full">
            Category
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">
            {navItem.category}
          </h1>
          <p className="text-slate-500 text-lg max-w-2xl leading-relaxed">
             전문가가 엄선한 <span className="text-slate-900 font-bold">{navItem.category}</span> 관련 최신 정보와 실전 꿀팁을 확인하세요.
             당신의 금융 생활을 업그레이드할 핵심 가이드입니다.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {categoryArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryArticles.map(article => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center text-slate-500 bg-white rounded-2xl border border-slate-100 shadow-sm">
            <p className="text-lg">아직 등록된 게시글이 없습니다.</p>
            <p className="text-sm mt-2 text-slate-400">새로운 콘텐츠가 곧 업데이트될 예정입니다.</p>
          </div>
        )}
      </div>
    </main>
  );
};