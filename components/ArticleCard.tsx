import React from 'react';
import { Calendar, Tag, ArrowRight } from 'lucide-react';
import { Article } from '../types';

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ article, featured = false }) => {
  if (featured) {
    return (
      <div className="group relative overflow-hidden rounded-2xl bg-white shadow-xl transition-all hover:shadow-2xl border border-slate-100">
        <div className="grid md:grid-cols-2 h-full">
          <div className="relative h-64 md:h-full overflow-hidden">
            <img 
              src={article.imageUrl} 
              alt={article.title} 
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
              {article.category}
            </div>
          </div>
          <div className="p-8 flex flex-col justify-center">
            <div className="flex items-center gap-2 text-sm text-slate-500 mb-3">
              <Calendar size={16} />
              <span>{article.date}</span>
              <span className="mx-2">•</span>
              <span>{article.author}</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-blue-700 transition-colors">
              {article.title}
            </h2>
            <p className="text-slate-600 mb-6 line-clamp-3 leading-relaxed">
              {article.summary}
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {article.tags.map(tag => (
                <span key={tag} className="inline-flex items-center text-xs font-medium text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded">
                  <Tag size={12} className="mr-1" />
                  {tag}
                </span>
              ))}
            </div>
            <button className="self-start flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors">
              자세히 보기 <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <article className="group flex flex-col bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-100 overflow-hidden h-full">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={article.imageUrl} 
          alt={article.title} 
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3 bg-emerald-600 text-white text-[10px] font-bold px-2 py-1 rounded-full">
          {article.category}
        </div>
      </div>
      <div className="flex flex-col flex-grow p-5">
        <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
          <span>{article.date}</span>
        </div>
        <h3 className="text-lg font-bold text-slate-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
          {article.title}
        </h3>
        <p className="text-sm text-slate-500 line-clamp-2 mb-4 flex-grow">
          {article.summary}
        </p>
        <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-slate-50">
           {article.tags.slice(0, 3).map(tag => (
            <span key={tag} className="text-[10px] text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};