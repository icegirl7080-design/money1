import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, 
  BarChart3, 
  AlertOctagon, 
  Shield, 
  Target, 
  Hourglass,
  Wallet,
  BrainCircuit,
  ArrowRight
} from 'lucide-react';
import { INITIAL_ARTICLES } from '../constants';
import { Category } from '../types';
import { ArticleCard } from '../components/ArticleCard';

export const InvestmentGuide: React.FC = () => {
  // Automatically fetch articles related to this guide's category
  const relatedArticles = useMemo(() => {
    return INITIAL_ARTICLES
      .filter(article => article.category === Category.INVESTMENT)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, []);

  return (
    <main className="flex-grow bg-white text-slate-900 font-sans leading-relaxed selection:bg-red-100">
      {/* =====================================================================================
          1. HEADER SECTION (H1)
          ===================================================================================== */}
      <section className="relative bg-slate-900 text-white py-24 overflow-hidden">
        {/* Professional Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-900 via-slate-900 to-slate-900"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
        
        <div className="container mx-auto px-4 relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-300 text-xs font-bold mb-6 backdrop-blur-md uppercase tracking-wider">
            <TrendingUp size={14} />
            <span>Investment Fundamentals</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-black leading-tight mb-6 break-keep">
            주식 투자의 정석:<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
              투기와 투자를 가르는 기준
            </span>
          </h1>

          <p className="text-lg text-slate-400 leading-relaxed max-w-2xl font-light mb-0 break-keep">
            주식 투자를 '운에 맡기는 도박'이나 '전문가들의 전유물'로 오해하고 계신가요? 
            많은 사람들이 단기간에 큰돈을 벌려는 욕심으로 시장에 뛰어들었다가 실패를 맛보곤 합니다. 
            하지만 <strong>투자</strong>는 자본주의 사회에서 내 자산을 지키고 불리는 가장 정직한 수단입니다. 
            본 페이지는 막연한 두려움을 걷어내고, 평생 자산 관리를 위한 투자의 기본 골격을 제시합니다.
          </p>
        </div>
      </section>

      {/* =====================================================================================
          2. CORE CONTENT: INVESTMENT VS SPECULATION (H2)
          ===================================================================================== */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-start gap-4 mb-8">
            <div className="p-3 bg-red-50 text-red-600 rounded-xl mt-1">
              <BrainCircuit size={24} />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">
                1. 투자(Investment)란 무엇인가?
              </h2>
              <div className="prose prose-slate max-w-none text-slate-600 leading-loose">
                <p>
                  주식을 산다는 것은 단순히 차트의 숫자에 베팅하는 것이 아닙니다. 
                  그것은 <strong>기업의 소유권(Ownership)</strong>을 매입하는 행위입니다. 
                  내가 일하지 않아도 유능한 경영진과 직원들이 나를 위해 돈을 벌어오는 시스템, 이것이 투자의 본질입니다.
                </p>
                <div className="mt-6 p-6 bg-slate-50 border border-slate-200 rounded-2xl">
                  <strong className="block text-slate-900 mb-3">투자와 투기의 결정적 차이</strong>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex gap-2">
                      <span className="text-red-500 font-bold">· 투자:</span> 
                      <span>기업의 내재 가치(Value)를 분석하고, 성장 가능성에 자금을 댄 뒤 시간을 두고 결실을 공유하는 것.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-slate-500 font-bold">· 투기:</span> 
                      <span>기업의 가치는 무시한 채, 오직 시장의 가격 변동(Price)과 심리 게임을 통해 단기 차익을 노리는 것.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================================
          3. DYNAMIC CONTENT: RELATED ARTICLES (SEO HUB STRUCTURE)
          ===================================================================================== */}
      <section id="latest-articles" className="py-24 bg-white border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex items-end justify-between mb-10 border-b border-slate-100 pb-4">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">투자/주식 최신 분석</h2>
              <p className="text-slate-500 mt-2">시장 흐름을 읽고 자산을 불리는 구체적인 전략</p>
            </div>
            <Link to="/investment" className="hidden md:flex items-center text-sm font-bold text-blue-600 hover:underline">
              전체 보기 <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
          
          {/* Dynamic Article Grid */}
          {relatedArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedArticles.map(article => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-slate-50 rounded-xl">
              <p className="text-slate-500">관련된 최신 글이 준비 중입니다.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};