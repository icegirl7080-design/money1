import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Wallet, 
  PieChart, 
  ArrowRightLeft, 
  Lightbulb,
  ArrowRight,
  TrendingUp,
  CreditCard,
  Landmark,
  ArrowDown
} from 'lucide-react';
import { INITIAL_ARTICLES } from '../constants';
import { Category } from '../types';
import { ArticleCard } from '../components/ArticleCard';
import { SEO } from '../components/SEO';

export const FinanceGuide: React.FC = () => {
  const relatedArticles = useMemo(() => {
    return INITIAL_ARTICLES
      .filter(article => article.category === Category.FINANCE)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, []);

  return (
    <main className="flex-grow bg-slate-50 font-sans text-slate-900 selection:bg-emerald-100">
      <SEO 
        title="금융 기초 가이드 | 사회초년생 돈 관리와 통장 쪼개기"
        description="금융 지식의 기초부터 실전 통장 쪼개기, 현금 흐름 관리 시스템 구축까지. 부자가 되기 위해 반드시 알아야 할 자산 관리의 핵심 원칙을 정리합니다."
        keywords={['금융기초', '돈관리', '통장쪼개기', '재테크', '자산관리', '현금흐름', '사회초년생 재테크']}
      />
      
      {/* Hero Section */}
      <section className="relative bg-emerald-50 pt-32 pb-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-bl from-white/80 via-transparent to-transparent pointer-events-none"></div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-emerald-200/30 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="container mx-auto px-4 relative z-10 max-w-5xl animate-on-scroll flex flex-col items-start md:items-center md:text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 border border-emerald-200 text-emerald-600 text-xs font-bold mb-6 shadow-sm backdrop-blur-sm uppercase tracking-wider">
            <Wallet size={14} />
            <span>Financial Basics</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6 break-keep text-slate-900">
            금융과 재테크의 본질:<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
              시스템으로 만드는 부
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl font-medium mb-8 break-keep">
            돈을 많이 버는 것(High Income)과 부자가 되는 것(High Net Worth)은 다릅니다. 
            단순히 아끼는 것을 넘어, 자본주의 시스템 안에서 나의 자산을 지키고 불리는 
            <strong>구조적인 머니 시스템</strong>을 만드는 법을 안내합니다.
          </p>

          <a href="#content" className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 text-white font-bold rounded-2xl shadow-lg shadow-emerald-200 hover:shadow-emerald-300 hover:bg-emerald-700 transition-all hover:-translate-y-1">
            기초부터 시작하기 <ArrowDown size={20} />
          </a>
        </div>
      </section>

      {/* Internal Link Card */}
      <section className="relative -mt-10 mb-20 z-20 px-4">
        <div className="container mx-auto max-w-4xl">
           <Link to="/life-hacks-guide" className="group flex flex-col md:flex-row items-center justify-between bg-white border border-slate-100 p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:shadow-amber-100 hover:-translate-y-1 transition-all duration-300 animate-on-scroll delay-100">
              <div className="flex items-center gap-6 w-full md:w-auto mb-4 md:mb-0">
                <div className="bg-amber-50 text-amber-600 p-4 rounded-2xl group-hover:bg-amber-500 group-hover:text-white transition-colors duration-300 shrink-0">
                  <Lightbulb size={32} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-xl group-hover:text-amber-700 transition-colors">소비 통제가 안 되시나요?</h3>
                  <p className="text-slate-500 mt-1 text-sm md:text-base">지출을 줄이는 생활 속 금융 꿀팁 확인하기</p>
                </div>
              </div>
              <div className="bg-slate-50 p-3 rounded-full group-hover:bg-amber-50 transition-colors self-end md:self-auto">
                <ArrowRight className="text-slate-400 group-hover:text-amber-500 group-hover:translate-x-1 transition-all" />
              </div>
           </Link>
        </div>
      </section>

      {/* Concept Section */}
      <section id="content" className="py-12 bg-slate-50 scroll-mt-20">
        <div className="container mx-auto px-4 max-w-4xl animate-on-scroll">
          <div className="flex items-start gap-5 mb-10">
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-2xl shadow-inner">
              <ArrowRightLeft size={28} />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-4">
                1. 금융(Finance) vs 재테크
              </h2>
              <div className="prose prose-slate max-w-none text-slate-600 leading-loose">
                <p>
                  <strong>금융</strong>은 돈이 흐르는 전체적인 생태계를 이해하는 기초 체력이고, 
                  <strong>재테크</strong>는 이를 바탕으로 실행하는 기술입니다. 
                  기초 체력 없이 기술만 배우려 한다면, 작은 시장 충격에도 공들여 모은 자산이 무너질 수 있습니다.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-10 shadow-sm border border-slate-100 mb-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl">
                <PieChart size={28} />
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900">
                2. 돈 관리의 4가지 기둥
              </h2>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-emerald-50/50 border border-emerald-100">
                <strong className="block text-emerald-800 text-lg mb-2 flex items-center gap-2"><TrendingUp size={18}/> 소득 (Income)</strong>
                <p className="text-sm text-slate-600 font-medium">재테크의 엔진. 초기에는 근로 소득을 높여 시드 머니를 확보하는 것이 최우선입니다.</p>
              </div>
              <div className="p-6 rounded-2xl bg-red-50/50 border border-red-100">
                <strong className="block text-red-800 text-lg mb-2 flex items-center gap-2"><CreditCard size={18}/> 지출 (Expense)</strong>
                <p className="text-sm text-slate-600 font-medium">통제 불가능한 영역을 줄이세요. '선저축 후지출' 원칙이 기본입니다.</p>
              </div>
              <div className="p-6 rounded-2xl bg-blue-50/50 border border-blue-100">
                <strong className="block text-blue-800 text-lg mb-2 flex items-center gap-2"><Landmark size={18}/> 저축 (Saving)</strong>
                <p className="text-sm text-slate-600 font-medium">투자를 위한 총알. 비상금을 먼저 확보하여 방어막을 구축해야 합니다.</p>
              </div>
              <div className="p-6 rounded-2xl bg-purple-50/50 border border-purple-100">
                <strong className="block text-purple-800 text-lg mb-2 flex items-center gap-2"><PieChart size={18}/> 투자 (Invest)</strong>
                <p className="text-sm text-slate-600 font-medium">돈이 나를 위해 일하게 하세요. 장기 분산 투자로 복리 효과를 누리세요.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section id="latest-articles" className="py-24 bg-white border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-6xl animate-on-scroll">
          <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900">금융/재테크 최신 칼럼</h2>
              <p className="text-slate-500 mt-2 font-medium">전문가가 분석한 돈 관리의 정석</p>
            </div>
            <Link to="/finance" className="hidden md:flex items-center text-sm font-bold text-sky-600 hover:underline">
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