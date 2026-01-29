import React, { useMemo, useState } from 'react';
import { INITIAL_ARTICLES, NAV_ITEMS } from '../constants';
import { ArticleCard } from '../components/ArticleCard';
import { Category } from '../types';
import { Filter } from 'lucide-react';

export const BlogOverview: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Retrieve all unique categories from the NAV_ITEMS that have a category defined
  const categories = useMemo(() => {
    const cats = NAV_ITEMS
      .filter(item => item.category)
      .map(item => item.category as string);
    return ['All', ...new Set(cats)];
  }, []);

  // Sort all articles by date (newest first)
  const sortedArticles = useMemo(() => {
    return [...INITIAL_ARTICLES].sort((a, b) => 
      new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  }, []);

  // Filter based on selection
  const filteredArticles = useMemo(() => {
    if (selectedCategory === 'All') return sortedArticles;
    return sortedArticles.filter(article => article.category === selectedCategory);
  }, [sortedArticles, selectedCategory]);

  return (
    <main className="flex-grow bg-slate-50 min-h-screen text-slate-900 font-sans">
      {/* HEADER */}
      <section className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-3xl md:text-5xl font-black mb-6">
            머니와이즈 <span className="text-blue-400">전체 칼럼</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed break-keep">
            금융 기초부터 심화 재테크 전략까지, 머니와이즈의 모든 인사이트를 한눈에 확인하세요.
            최신 금융 트렌드와 실질적인 솔루션이 매일 업데이트됩니다.
          </p>
        </div>
      </section>

      {/* FILTER & CONTENT */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          
          {/* Category Filter */}
          <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-slate-200">
            <div className="flex items-center gap-2 mr-4 text-slate-500 font-bold text-sm">
              <Filter size={16} />
              <span>필터:</span>
            </div>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-blue-300 hover:text-blue-600'
                }`}
              >
                {cat === 'All' ? '전체 보기' : cat}
              </button>
            ))}
          </div>

          {/* Article Grid */}
          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map(article => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-2xl border border-slate-200">
              <p className="text-slate-500 text-lg">해당 카테고리에 등록된 글이 없습니다.</p>
              <button 
                onClick={() => setSelectedCategory('All')}
                className="mt-4 text-blue-600 font-bold hover:underline"
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