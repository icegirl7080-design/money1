import React, { useMemo, useState } from 'react';
import { INITIAL_ARTICLES, NAV_ITEMS } from '../constants';
import { ArticleCard } from '../components/ArticleCard';
import { Category } from '../types';
import { Filter, ArrowDown } from 'lucide-react';

export const BlogOverview: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = useMemo(() => {
    const cats = NAV_ITEMS
      .filter(item => item.category)
      .map(item => item.category as string);
    return ['All', ...new Set(cats)];
  }, []);

  const sortedArticles = useMemo(() => {
    return [...INITIAL_ARTICLES].sort((a, b) => 
      new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  }, []);

  const filteredArticles = useMemo(() => {
    if (selectedCategory === 'All') return sortedArticles;
    return sortedArticles.filter(article => article.category === selectedCategory);
  }, [sortedArticles, selectedCategory]);

  return (
    <main className="flex-grow bg-slate-50 min-h-screen text-slate-900 font-sans">
      {/* Header */}
      <section className="relative bg-gradient-to-b from-sky-50 via-white to-slate-50 py-24 border-b border-slate-100 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-sky-100/30 to-transparent pointer-events-none blur-3xl"></div>
        
        <div className="container mx-auto px-4 text-center max-w-4xl relative z-10 animate-on-scroll flex flex-col items-center">
          <h1 className="text-4xl md:text-6xl font-black mb-6 text-slate-900">
            머니와이즈 <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-600">인사이트</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed break-keep font-medium mb-10">
            금융 기초부터 심화 재테크 전략까지, 머니와이즈의 모든 칼럼을 한눈에 확인하세요.
            최신 금융 트렌드와 실질적인 솔루션이 매일 업데이트됩니다.
          </p>

          <a href="#posts" className="inline-flex items-center gap-2 px-8 py-3 bg-slate-900 text-white font-bold rounded-full shadow-lg hover:bg-slate-800 transition-all hover:-translate-y-1">
            최신 글 보기 <ArrowDown size={18} />
          </a>
        </div>
      </section>

      {/* Filter & Content */}
      <section id="posts" className="py-16 scroll-mt-20">
        <div className="container mx-auto px-4 animate-on-scroll delay-100">
          
          {/* Category Filter */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            <div className="flex items-center gap-2 mr-2 text-slate-400 font-bold text-sm uppercase tracking-wider">
              <Filter size={14} />
              <span>Filter</span>
            </div>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all transform hover:-translate-y-0.5 active:translate-y-0 ${
                  selectedCategory === cat
                    ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/20'
                    : 'bg-white text-slate-500 border border-slate-200 hover:border-sky-300 hover:text-sky-600 hover:shadow-md'
                }`}
              >
                {cat === 'All' ? '전체 보기' : cat}
              </button>
            ))}
          </div>

          {/* Article Grid */}
          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article, idx) => (
                <div key={article.id} className={`animate-on-scroll delay-${Math.min((idx % 3) * 100, 300)}`}>
                  <ArticleCard article={article} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-32 bg-white rounded-3xl border border-slate-100 shadow-sm">
              <p className="text-slate-400 text-lg font-medium">해당 카테고리에 등록된 글이 없습니다.</p>
              <button 
                onClick={() => setSelectedCategory('All')}
                className="mt-6 px-6 py-2 bg-slate-100 text-slate-600 rounded-lg text-sm font-bold hover:bg-slate-200 transition-colors"
              >
                전체 글로 돌아가기
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};