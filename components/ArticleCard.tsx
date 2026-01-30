import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Tag, ArrowRight } from 'lucide-react';
import { Article } from '../types';
import { OptimizedImage } from './OptimizedImage';

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ article, featured = false }) => {
  const articleUrl = `/article/${article.slug || article.id}`;

  if (featured) {
    return (
      <div className="group relative overflow-hidden rounded-[2rem] bg-white shadow-soft hover:shadow-2xl hover:shadow-sky-100/50 transition-all duration-500 border border-slate-100 hover:border-sky-100 hover:-translate-y-1 animate-on-scroll">
        <div className="grid md:grid-cols-2 h-full">
          <Link to={articleUrl} className="relative h-72 md:h-full block overflow-hidden" aria-label={`${article.title} 글 읽기`}>
            <div className="absolute inset-0 bg-slate-100 animate-pulse" />
            <OptimizedImage 
              src={article.imageUrl} 
              alt={article.title} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              containerClassName="h-full w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-60 transition-opacity duration-300" />
            <div className="absolute top-5 left-5 bg-white/95 backdrop-blur-md text-sky-700 text-xs font-bold px-3 py-1.5 rounded-lg uppercase tracking-wider z-10 shadow-sm border border-sky-50">
              {article.category}
            </div>
          </Link>
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-400 mb-5 tracking-wide uppercase">
              <Calendar size={12} className="text-sky-500" />
              <time dateTime={article.date}>{article.date}</time>
              <span className="mx-2 text-slate-300">•</span>
              <span>{article.author}</span>
            </div>
            <Link to={articleUrl} className="block group/title">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight group-hover/title:text-sky-600 transition-colors">
                {article.title}
              </h2>
            </Link>
            <p className="text-slate-600 mb-8 line-clamp-3 leading-relaxed text-base md:text-lg">
              {article.summary}
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {article.tags.map(tag => (
                <span key={tag} className="inline-flex items-center text-xs font-bold text-slate-500 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200/50 group-hover:border-sky-100 group-hover:text-sky-600 group-hover:bg-sky-50 transition-colors">
                  <Tag size={12} className="mr-1.5 opacity-70" />
                  {tag}
                </span>
              ))}
            </div>
            <Link 
              to={articleUrl} 
              className="self-start inline-flex items-center gap-2 text-sm font-bold text-white bg-slate-900 hover:bg-sky-600 px-6 py-3.5 rounded-xl transition-all shadow-lg shadow-slate-200 hover:shadow-sky-200 hover:-translate-y-0.5"
              aria-label={`${article.title} 자세히 보기`}
            >
              자세히 보기 <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <article className="group flex flex-col bg-white rounded-3xl shadow-soft hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-300 hover:-translate-y-2 border border-slate-100 hover:border-slate-200 overflow-hidden h-full animate-on-scroll">
      <Link to={articleUrl} className="relative h-56 block overflow-hidden" aria-label={`${article.title} 글 읽기`}>
        <div className="absolute inset-0 bg-slate-50" />
        <OptimizedImage 
          src={article.imageUrl} 
          alt={article.title} 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          containerClassName="w-full h-full"
        />
        <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-sky-800 text-[10px] font-bold px-2.5 py-1.5 rounded-lg shadow-sm border border-sky-50/50 tracking-wide">
          {article.category}
        </div>
      </Link>
      <div className="flex flex-col flex-grow p-7">
        <div className="flex items-center gap-2 text-xs font-bold text-slate-400 mb-3 tracking-wide">
          <time dateTime={article.date}>{article.date}</time>
        </div>
        <Link to={articleUrl} className="block mb-3">
          <h3 className="text-lg font-bold text-slate-900 line-clamp-2 group-hover:text-sky-600 transition-colors leading-snug">
            {article.title}
          </h3>
        </Link>
        <p className="text-sm text-slate-500 line-clamp-2 mb-6 flex-grow leading-relaxed">
          {article.summary}
        </p>
        <div className="flex flex-wrap gap-1.5 mt-auto pt-5 border-t border-slate-50">
           {article.tags.slice(0, 3).map(tag => (
            <span key={tag} className="text-[10px] font-bold text-slate-500 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-100 group-hover:border-sky-100 group-hover:text-sky-600 transition-colors">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};