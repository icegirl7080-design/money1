import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { INITIAL_ARTICLES, NAV_ITEMS } from '../constants';
import { Calendar, User, Tag, ArrowLeft, Share2, ChevronRight } from 'lucide-react';
import { ShareModal } from '../components/ShareModal';
import { ArticleCard } from '../components/ArticleCard';

export const ArticleDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const article = INITIAL_ARTICLES.find(a => a.id === id);

  if (!article) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">게시글을 찾을 수 없습니다.</h2>
        <Link to="/" className="text-blue-600 hover:underline">홈으로 돌아가기</Link>
      </div>
    );
  }

  // Find category path for breadcrumbs
  const categoryItem = NAV_ITEMS.find(item => item.category === article.category);
  const categoryPath = categoryItem ? categoryItem.path : '/';

  // Fallback content
  const content = article.content || `<p>내용이 준비 중입니다.</p>`;

  // Related Articles Logic
  const relatedArticles = INITIAL_ARTICLES
    .filter(a => a.category === article.category && a.id !== article.id)
    .slice(0, 3);

  // If not enough related articles in same category, fill with others
  if (relatedArticles.length < 3) {
    const others = INITIAL_ARTICLES
      .filter(a => a.category !== article.category && a.id !== article.id)
      .slice(0, 3 - relatedArticles.length);
    relatedArticles.push(...others);
  }

  return (
    <main className="flex-grow bg-slate-50">
      {/* Breadcrumb Navigation - Enhances User Flow */}
      <div className="bg-white border-b border-slate-200 sticky top-16 z-10">
        <div className="container mx-auto px-4 py-3 flex items-center text-sm text-slate-500 overflow-x-auto whitespace-nowrap">
          <Link to="/" className="hover:text-blue-600">홈</Link>
          <ChevronRight size={14} className="mx-2" />
          <Link to={categoryPath} className="hover:text-blue-600">{article.category}</Link>
          <ChevronRight size={14} className="mx-2" />
          <span className="text-slate-800 font-medium truncate max-w-[200px]">{article.title}</span>
        </div>
      </div>

      {/* Header Image */}
      <div className="relative h-64 md:h-96 w-full">
        <img 
          src={article.imageUrl} 
          alt={article.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 container mx-auto">
          <Link to={categoryPath} className="inline-block px-3 py-1 mb-4 text-xs font-bold text-white bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 transition-colors">
            {article.category}
          </Link>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight drop-shadow-md">
            {article.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-slate-200 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <User size={18} />
              <span>{article.author}</span>
            </div>
            <div className="w-1 h-1 bg-slate-400 rounded-full hidden md:block"></div>
            <div className="flex items-center gap-2">
              <Calendar size={18} />
              <span>{article.date}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 md:py-12 max-w-4xl">
        {/* Content Body */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 md:p-12 mb-8">
           <div 
             className="prose prose-slate max-w-none text-slate-700 leading-loose"
             dangerouslySetInnerHTML={{ __html: content }} 
           />
        </div>

        {/* Tags and Share */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-4 mb-16">
          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            {article.tags.map(tag => (
              <span key={tag} className="inline-flex items-center px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-600 text-sm font-medium hover:border-blue-200 hover:text-blue-600 transition-colors cursor-default">
                <Tag size={14} className="mr-1.5" /> #{tag}
              </span>
            ))}
          </div>
          <button 
            className="flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors font-medium px-4 py-2 hover:bg-white rounded-lg border border-transparent hover:border-slate-200 hover:shadow-sm"
            onClick={() => setIsShareModalOpen(true)}
          >
            <Share2 size={20} />
            <span>공유하기</span>
          </button>
        </div>
      </div>

      {/* Related Articles - Recirculation Strategy */}
      <section className="bg-white py-12 border-t border-slate-100">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-slate-900 mb-8">관련 게시글 추천</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedArticles.map(relArticle => (
              <ArticleCard key={relArticle.id} article={relArticle} />
            ))}
          </div>
        </div>
      </section>

      <ShareModal 
        isOpen={isShareModalOpen} 
        onClose={() => setIsShareModalOpen(false)} 
        url={window.location.href}
        title={article.title}
      />
    </main>
  );
};