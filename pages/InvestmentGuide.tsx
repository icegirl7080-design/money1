import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, 
  BarChart3, 
  AlertOctagon, 
  Target, 
  Hourglass,
  BrainCircuit,
  ArrowRight,
  ArrowDown
} from 'lucide-react';
import { INITIAL_ARTICLES } from '../constants';
import { Category } from '../types';
import { ArticleCard } from '../components/ArticleCard';
import { SEO } from '../components/SEO';

export const InvestmentGuide: React.FC = () => {
  const relatedArticles = useMemo(() => {
    return INITIAL_ARTICLES
      .filter(article => article.category === Category.INVESTMENT)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, []);

  return (
    <main className="flex-grow bg-slate-50 font-sans text-slate-900 selection:bg-red-100">
      <SEO 
        title="투자 가이드 | 주식 초보를 위한 ETF와 배당주 전략"
        description="투기와 투자의 차이점, ETF 적립식 투자, 배당주 포트폴리오 구성 등 잃지 않는 투자를 위한 핵심 원칙을 가이드합니다."
        keywords={['주식투자', 'ETF', '배당주', '미국주식', '자산배분', '포트폴리오']}
      />

      {/* Hero Section */}
      <section className="relative bg-red-50 pt-32 pb-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-bl from-white/80 via-transparent to-transparent pointer-events-none"></div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-orange-200/30 rounded-full blur-3xl pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10 max-w-5xl animate-on-scroll flex flex-col items-start md:items-center md:text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 border border-red-200 text-red-600 text-xs font-bold mb-6 shadow-sm backdrop-blur-sm uppercase tracking-wider">
            <TrendingUp size={14} />
            <span>Investment Fundamentals</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6 break-keep text-slate-900">
            주식 투자의 정석:<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
              잃지 않는 자산 증식의 기술
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl font-medium mb-8 break-keep">
            주식을 도박처럼 하고 계신가요? 시장의 소음에 흔들리지 않고, 
            <strong>시간(Time)</strong>과 <strong>복리(Compound Interest)</strong>를 내 편으로 만드는 
            건전한 투자 철학을 제시합니다.
          </p>

          <a href="#content" className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 text-white font-bold rounded-2xl shadow-lg shadow-red-200 hover:shadow-red-300 hover:bg-red-700 transition-all hover:-translate-y-1">
            투자 전략 확인하기 <ArrowDown size={20} />
          </a>
        </div>
      </section>

      {/* Concept Section */}
      <section id="content" className="py-16 bg-white relative z-20 -mt-10 rounded-t-[3rem] shadow-[0_-20px_40px_-15px_rgba(0,0,0,0.05)] scroll-mt-20">
        <div className="container mx-auto px-4 max-w-4xl animate-on-scroll delay-100">
          <div className="flex items-start gap-5 mb-10">
            <div className="p-3 bg-red-50 text-red-600 rounded-2xl shadow-inner">
              <BrainCircuit size={28} />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-4">
                1. 투기(Speculation) vs 투자(Investment)
              </h2>
              <div className="prose prose-slate max-w-none text-slate-600 leading-loose">
                <p>
                  주식을 산다는 것은 차트의 숫자에 베팅하는 것이 아닙니다. 
                  <strong>기업의 소유권(Ownership)</strong>을 매입하여, 그 기업이 창출하는 이익을 공유하는 것입니다.
                  내가 잠든 사이에도 기업의 시스템이 나를 위해 일하게 만드는 것, 그것이 투자의 본질입니다.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-50/50 p-8 rounded-3xl border border-red-100 hover:bg-red-50 transition-colors">
              <strong className="flex items-center gap-2 text-red-700 text-lg mb-4 font-black">
                <AlertOctagon size={20} /> 투기 (Speculation)
              </strong>
              <p className="text-sm text-slate-700 leading-relaxed font-medium">
                기업의 가치는 무시한 채, 오직 <strong>가격 변동(Price)</strong>과 시장의 광기에 기대어 단기 차익을 노리는 행위. 
                결국 수수료와 심리 싸움에서 져 자산을 잃게 됩니다.
              </p>
            </div>
            <div className="bg-emerald-50/50 p-8 rounded-3xl border border-emerald-100 hover:bg-emerald-50 transition-colors">
              <strong className="flex items-center gap-2 text-emerald-700 text-lg mb-4 font-black">
                <Target size={20} /> 투자 (Investment)
              </strong>
              <p className="text-sm text-slate-700 leading-relaxed font-medium">
                기업의 <strong>내재 가치(Value)</strong>를 분석하고, 성장 가능성에 자금을 댄 뒤 시간을 두고 결실을 공유하는 것. 
                복리의 마법을 누리는 유일한 길입니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategies Section */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl animate-on-scroll">
          <div className="flex items-center gap-4 mb-10 justify-center md:justify-start">
            <div className="p-3 bg-orange-50 text-orange-600 rounded-2xl shadow-inner">
              <BarChart3 size={28} />
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900">
              초보자를 위한 필승 전략
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-3xl shadow-lg shadow-slate-200/50 border border-slate-100 hover:-translate-y-1 transition-all duration-300 group">
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-red-600 transition-colors">ETF 적립식 매수</h3>
              <p className="text-slate-600 leading-relaxed">
                개별 기업 분석이 어렵다면 시장 전체를 사십시오. <strong>S&P500</strong>이나 <strong>나스닥100</strong> 같은 지수 추종 ETF를 매달 월급날 기계적으로 매수하는 것만으로도 상위 10%의 수익률을 낼 수 있습니다.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg shadow-slate-200/50 border border-slate-100 hover:-translate-y-1 transition-all duration-300 group">
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-red-600 transition-colors">배당주 재투자</h3>
              <p className="text-slate-600 leading-relaxed">
                주가가 횡보하더라도 <strong>현금 흐름(Cash Flow)</strong>을 만드는 배당주(리얼티인컴, SCHD 등)에 투자하세요. 받은 배당금으로 다시 주식을 사면 자산이 눈덩이처럼 불어나는 스노우볼 효과가 발생합니다.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg shadow-slate-200/50 border border-slate-100 hover:-translate-y-1 transition-all duration-300 group">
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-red-600 transition-colors">자산 배분 (Asset Allocation)</h3>
              <p className="text-slate-600 leading-relaxed">
                계란을 한 바구니에 담지 마십시오. 주식 60%, 채권/현금 40%와 같이 상관관계가 낮은 자산에 분산 투자하여 하락장의 충격을 방어해야 합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section id="latest-articles" className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-6xl animate-on-scroll">
          <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900">투자/주식 최신 분석</h2>
              <p className="text-slate-500 mt-2 font-medium">시장 흐름을 읽고 자산을 불리는 구체적인 전략</p>
            </div>
            <Link to="/investment" className="hidden md:flex items-center text-sm font-bold text-red-600 hover:underline">
              전체 보기 <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
          
          {relatedArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedArticles.map((article, idx) => (
                <div key={article.id} className={`animate-on-scroll delay-${(idx+1)*100}`}>
                  <ArticleCard article={article} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-slate-50 rounded-3xl border border-slate-100">
              <p className="text-slate-500 font-medium">관련된 최신 글이 준비 중입니다.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};