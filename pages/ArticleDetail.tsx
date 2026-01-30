import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { INITIAL_ARTICLES, NAV_ITEMS } from '../constants';
import { Calendar, User, Tag, Share2, ChevronRight, Home as HomeIcon, CheckCircle } from 'lucide-react';
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
      <div className="container mx-auto px-4 py-32 text-center min-h-screen flex flex-col justify-center items-center">
        <SEO title="페이지를 찾을 수 없습니다" description="요청하신 게시글을 찾을 수 없습니다." />
        <h2 className="text-3xl font-black text-slate-900 mb-4">게시글을 찾을 수 없습니다.</h2>
        <Link to="/" className="text-sky-600 font-bold hover:underline flex items-center gap-2">
          <HomeIcon size={20} /> 홈으로 돌아가기
        </Link>
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

      {/* Breadcrumb Navigation - Sticky */}
      <nav aria-label="Breadcrumb" className="bg-white/90 backdrop-blur-xl border-b border-slate-200/80 sticky top-16 md:top-20 z-30 shadow-[0_2px_10px_-5px_rgba(0,0,0,0.05)] transition-all">
        <div className="container mx-auto px-4 py-3 flex items-center text-sm text-slate-500 overflow-x-auto whitespace-nowrap scrollbar-hide">
          <Link to="/" className="hover:text-sky-600 transition-colors flex items-center gap-1"><HomeIcon size={14} /> 홈</Link>
          <ChevronRight size={14} className="mx-2 text-slate-300" />
          <Link to={categoryPath} className="hover:text-sky-600 transition-colors font-bold text-slate-600">{article.category}</Link>
          <ChevronRight size={14} className="mx-2 text-slate-300" />
          <span className="text-slate-900 font-bold truncate max-w-[200px]" aria-current="page">{article.title}</span>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-[450px] md:h-[500px] w-full bg-slate-900 overflow-hidden">
        <OptimizedImage 
          src={article.imageUrl} 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-overlay scale-105 blur-[2px]"
          containerClassName="w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-slate-900/20"></div>
        
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 pb-20 container mx-auto z-10 animate-on-scroll">
          <div className="flex items-center gap-3 mb-6">
            <Link 
              to={categoryPath} 
              className="inline-block px-3 py-1 text-xs font-bold text-white bg-sky-600 rounded-lg shadow-lg hover:bg-sky-500 transition-all hover:-translate-y-0.5"
            >
              {article.category}
            </Link>
            <span className="flex items-center gap-1.5 px-3 py-1 bg-white/10 text-white/90 rounded-lg text-xs font-bold backdrop-blur-sm border border-white/10">
              <CheckCircle size={12} className="text-emerald-400" />
              전문가 검수 완료
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-5xl font-black text-white mb-8 leading-tight drop-shadow-sm break-keep max-w-4xl">
            {article.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-slate-300 text-sm font-medium">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-slate-300">
                <User size={16} />
              </div>
              <span className="text-white font-bold">{article.author}</span>
            </div>
            <span className="w-1 h-1 bg-slate-500 rounded-full"></span>
            <div className="flex items-center gap-2">
              <Calendar size={16} className="text-slate-400" />
              <time dateTime={article.date}>{article.date}</time>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area - Card Style */}
      <div className="container mx-auto px-4 py-12 max-w-4xl -mt-16 relative z-20">
        <div className="bg-white rounded-3xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-slate-100 p-8 md:p-14 mb-12 animate-on-scroll delay-100">
           <article 
             className="
               prose prose-slate max-w-none 
               prose-base md:prose-lg 
               prose-headings:font-bold prose-headings:text-slate-900 prose-headings:leading-tight prose-headings:-tracking-wide
               prose-p:leading-8 prose-p:text-slate-600 prose-p:mb-6
               prose-a:text-sky-600 prose-a:font-bold prose-a:no-underline hover:prose-a:underline hover:prose-a:text-sky-700
               prose-strong:text-slate-900 prose-strong:font-black
               prose-ul:list-disc prose-ul:pl-6 prose-ul:text-slate-600
               prose-li:my-2 prose-li:marker:text-sky-400
               prose-img:rounded-2xl prose-img:shadow-lg prose-img:my-10 prose-img:w-full prose-img:border prose-img:border-slate-100
               prose-blockquote:border-l-4 prose-blockquote:border-sky-500 prose-blockquote:bg-sky-50/30 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-xl prose-blockquote:not-italic prose-blockquote:text-slate-700
               prose-hr:border-slate-100 prose-hr:my-12
             "
             dangerouslySetInnerHTML={{ __html: content }} 
           />
        </div>

        {/* Tags and Share */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-20 animate-on-scroll delay-200">
          <div className="flex flex-wrap gap-2 justify-center md:justify-start w-full md:w-auto">
            {article.tags.map(tag => (
              <span key={tag} className="inline-flex items-center px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-600 text-sm font-bold hover:border-sky-400 hover:text-sky-600 hover:shadow-md transition-all cursor-default">
                <Tag size={14} className="mr-2 opacity-70" /> #{tag}
              </span>
            ))}
          </div>
          <button 
            className="flex items-center gap-2 bg-slate-900 text-white hover:bg-sky-600 transition-all font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-sky-200 transform hover:-translate-y-1 active:translate-y-0 w-full md:w-auto justify-center"
            onClick={() => setIsShareModalOpen(true)}
          >
            <Share2 size={20} />
            <span>친구에게 공유하기</span>
          </button>
        </div>
      </div>

      {/* Related Articles */}
      <section className="bg-white py-20 border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-6xl animate-on-scroll">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-10 flex items-center gap-3">
            <span className="w-1.5 h-8 bg-sky-600 rounded-full inline-block"></span>
            함께 읽으면 좋은 금융 꿀팁
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedArticles.map((relArticle, idx) => (
              <div key={relArticle.id} className={`animate-on-scroll delay-${(idx+1)*100}`}>
                <ArticleCard article={relArticle} />
              </div>
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