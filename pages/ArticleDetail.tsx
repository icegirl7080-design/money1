import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { INITIAL_ARTICLES, NAV_ITEMS } from '../constants';
import { Calendar, User, Tag, Share2, ChevronRight } from 'lucide-react';
import { ShareModal } from '../components/ShareModal';
import { ArticleCard } from '../components/ArticleCard';
import { SEO } from '../components/SEO';
import { OptimizedImage } from '../components/OptimizedImage';

export const ArticleDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  
  const article = INITIAL_ARTICLES.find(a => a.slug === slug || a.id === slug);

  if (!article) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <SEO title="페이지를 찾을 수 없습니다" description="요청하신 게시글을 찾을 수 없습니다." />
        <h2 className="text-2xl font-bold text-slate-900 mb-4">게시글을 찾을 수 없습니다.</h2>
        <Link to="/" className="text-blue-600 hover:underline">홈으로 돌아가기</Link>
      </div>
    );
  }

  const categoryItem = NAV_ITEMS.find(item => item.category === article.category);
  const categoryPath = categoryItem ? categoryItem.path : '/';
  const content = article.content || `<p>내용이 준비 중입니다.</p>`;

  const relatedArticles = INITIAL_ARTICLES
    .filter(a => a.category === article.category && a.id !== article.id)
    .slice(0, 3);

  if (relatedArticles.length < 3) {
    const others = INITIAL_ARTICLES
      .filter(a => a.category !== article.category && a.id !== article.id)
      .slice(0, 3 - relatedArticles.length);
    relatedArticles.push(...others);
  }

  return (
    <main className="flex-grow bg-slate-50">
      <SEO 
        title={article.title} 
        description={article.summary} 
        keywords={article.tags} 
      />

      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="bg-white border-b border-slate-200 sticky top-16 z-20 shadow-sm">
        <div className="container mx-auto px-4 py-3 flex items-center text-sm text-slate-500 overflow-x-auto whitespace-nowrap">
          <Link to="/" className="hover:text-blue-600 transition-colors">홈</Link>
          <ChevronRight size={14} className="mx-2 text-slate-300" />
          <Link to={categoryPath} className="hover:text-blue-600 transition-colors">{article.category}</Link>
          <ChevronRight size={14} className="mx-2 text-slate-300" />
          <span className="text-slate-800 font-medium truncate max-w-[200px]" aria-current="page">{article.title}</span>
        </div>
      </nav>

      {/* Hero Section with Optimized Image */}
      <div className="relative h-[400px] md:h-[500px] w-full bg-slate-900">
        <OptimizedImage 
          src={article.imageUrl} 
          alt="" /* Decorative background image, empty alt */
          className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay"
          containerClassName="w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
        
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 container mx-auto z-10">
          <Link 
            to={categoryPath} 
            className="inline-block px-4 py-1.5 mb-6 text-xs font-bold text-white bg-blue-600 rounded-full shadow-lg hover:bg-blue-500 transition-all hover:-translate-y-0.5"
          >
            {article.category}
          </Link>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight drop-shadow-lg break-keep">
            {article.title}
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-slate-200 text-sm md:text-base font-medium">
            <div className="flex items-center gap-2">
              <User size={18} className="text-blue-400" />
              <span>{article.author}</span>
            </div>
            <div className="w-1.5 h-1.5 bg-slate-500 rounded-full hidden md:block"></div>
            <div className="flex items-center gap-2">
              <Calendar size={18} className="text-blue-400" />
              <time dateTime={article.date}>{article.date}</time>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Content Body - Enhanced Typography for Mobile */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-6 md:p-12 mb-12">
           <article 
             className="
               prose prose-slate max-w-none 
               prose-base md:prose-lg 
               prose-headings:font-bold prose-headings:text-slate-900 prose-headings:leading-tight
               prose-p:leading-loose prose-p:text-slate-700
               prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
               prose-strong:text-slate-900 prose-strong:font-bold
               prose-ul:list-disc prose-ul:pl-5
               prose-li:my-2
               prose-img:rounded-xl prose-img:shadow-md
               prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:bg-slate-50 prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:rounded-r-lg prose-blockquote:not-italic
             "
             dangerouslySetInnerHTML={{ __html: content }} 
           />
        </div>

        {/* Tags and Share */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-6 border-t border-slate-200 mb-20">
          <div className="flex flex-wrap gap-2 justify-center md:justify-start w-full md:w-auto">
            {article.tags.map(tag => (
              <span key={tag} className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-600 text-sm font-medium hover:border-blue-400 hover:text-blue-600 transition-colors cursor-default shadow-sm">
                <Tag size={14} className="mr-2" /> #{tag}
              </span>
            ))}
          </div>
          <button 
            className="flex items-center gap-2 bg-slate-900 text-white hover:bg-slate-800 transition-colors font-bold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0 w-full md:w-auto justify-center"
            onClick={() => setIsShareModalOpen(true)}
          >
            <Share2 size={20} />
            <span>친구에게 공유하기</span>
          </button>
        </div>
      </div>

      {/* Related Articles */}
      <section className="bg-slate-50 py-16 border-t border-slate-200">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2">
            <span className="w-1 h-8 bg-blue-600 rounded-full inline-block"></span>
            관련 게시글 추천
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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