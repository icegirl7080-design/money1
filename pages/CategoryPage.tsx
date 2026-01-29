import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { INITIAL_ARTICLES, NAV_ITEMS } from '../constants';
import { ArticleCard } from '../components/ArticleCard';
import { NavItem } from '../types';

export const CategoryPage: React.FC = () => {
  const location = useLocation();
  // Remove the leading slash to match article paths in NAV_ITEMS (e.g. '/finance' -> 'finance')
  // or match directly with the path.
  const currentPath = location.pathname; // e.g., "/finance"
  
  const navItem = NAV_ITEMS.find(item => item.path === currentPath);
  
  if (!navItem || !navItem.category) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">카테고리를 찾을 수 없습니다.</h2>
        <Link to="/" className="text-blue-600 hover:underline">홈으로 돌아가기</Link>
      </div>
    );
  }

  const categoryArticles = INITIAL_ARTICLES.filter(
    article => article.category === navItem.category
  );

  return (
    <main className="flex-grow bg-slate-50">
      <div className="bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
            {navItem.category}
          </h1>
          <p className="text-slate-500 text-lg max-w-2xl">
             전문가가 엄선한 {navItem.category} 관련 최신 정보와 꿀팁을 확인하세요.
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
          <div className="py-20 text-center text-slate-500 bg-white rounded-2xl border border-slate-100">
            <p>아직 등록된 게시글이 없습니다.</p>
          </div>
        )}
      </div>
    </main>
  );
};