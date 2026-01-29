import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Wallet, 
  TrendingUp, 
  PieChart, 
  ArrowRightLeft, 
  Lightbulb,
  ArrowRight
} from 'lucide-react';
import { INITIAL_ARTICLES } from '../constants';
import { Category } from '../types';
import { ArticleCard } from '../components/ArticleCard';
import { SEO } from '../components/SEO';

export const FinanceGuide: React.FC = () => {
  // Automatically fetch articles related to this guide's category
  const relatedArticles = useMemo(() => {
    return INITIAL_ARTICLES
      .filter(article => article.category === Category.FINANCE)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, []);

  return (
    <main className="flex-grow bg-white text-slate-900 font-sans leading-relaxed selection:bg-emerald-100">
      <SEO 
        title="금융 기초 가이드 | 사회초년생 돈 관리와 통장 쪼개기"
        description="금융 지식의 기초부터 실전 통장 쪼개기, 현금 흐름 관리 시스템 구축까지. 부자가 되기 위해 반드시 알아야 할 자산 관리의 핵심 원칙을 정리합니다."
        keywords={['금융기초', '돈관리', '통장쪼개기', '재테크', '자산관리', '현금흐름', '사회초년생 재테크']}
      />
      
      {/* =====================================================================================
          1. HEADER SECTION (H1)
          ===================================================================================== */}
      <section className="relative bg-slate-900 text-white py-24 overflow-hidden">
         {/* Professional Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-slate-900 to-slate-900"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        
        <div className="container mx-auto px-4 relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-bold mb-6 backdrop-blur-md uppercase tracking-wider">
            <Wallet size={14} />
            <span>Financial Basics</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-black leading-tight mb-6 break-keep">
            금융과 재테크의 본질:<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
              부를 쌓는 돈 관리 시스템 구축
            </span>
          </h1>

          <p className="text-lg text-slate-400 leading-relaxed max-w-2xl font-light mb-0 break-keep">
            돈을 많이 버는 것(High Income)과 부자가 되는 것(High Net Worth)은 다릅니다. 
            현대 사회에서 <strong>금융 문맹</strong>은 생존을 위협하는 가장 큰 위험 요소입니다.
            단순히 아끼는 것을 넘어, 자본주의 시스템 안에서 나의 자산을 지키고 불리는 
            <strong>구조적인 머니 시스템</strong>을 만드는 법을 안내합니다.
          </p>
        </div>
      </section>

      {/* =====================================================================================
          Internal Link Strategy: Cross-Link to Life Hacks
          ===================================================================================== */}
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4 py-8">
           <Link to="/life-hacks-guide" className="group flex items-center justify-between bg-white border border-slate-200 p-6 rounded-xl hover:border-amber-300 hover:shadow-md transition-all max-w-4xl mx-auto">
              <div className="flex items-center gap-4">
                <div className="bg-amber-100 text-amber-600 p-3 rounded-lg group-hover:bg-amber-500 group-hover:text-white transition-colors">
                  <Lightbulb size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg group-hover:text-amber-700 transition-colors">소비 통제가 안 되시나요?</h3>
                  <p className="text-sm text-slate-500">지출을 줄이는 생활 속 금융 꿀팁 확인하기</p>
                </div>
              </div>
              <ArrowRight className="text-slate-300 group-hover:text-amber-500 group-hover:translate-x-1 transition-all" />
           </Link>
        </div>
      </section>

      {/* =====================================================================================
          2. CORE CONTENT: FINANCE VS JAETECH (H2)
          ===================================================================================== */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-start gap-4 mb-8">
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl mt-1">
              <ArrowRightLeft size={24} />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">
                1. 금융(Finance) 이해력과 재테크의 차이
              </h2>
              <div className="prose prose-slate max-w-none text-slate-600 leading-loose">
                <p>
                  많은 사회초년생들이 재테크를 단순히 '수익률 높은 상품 찾기'로 오해합니다. 
                  하지만 <strong>금융(Finance)</strong>은 돈이 흐르는 전체적인 생태계를 이해하는 것입니다. 
                  금리가 오르면 왜 주가가 떨어지는지, 환율 변동이 내 자산에 어떤 영향을 미치는지 아는 것이 선행되어야 합니다.
                </p>
                <p>
                  <strong>재테크(Investment Tech)</strong>는 이러한 금융 지식을 바탕으로 실행하는 기술입니다. 
                  기초 체력(금융 지식) 없이 기술(투자 기법)만 배우려 한다면, 
                  작은 시장 충격에도 공들여 모은 자산이 무너질 수 있습니다.
                  머니와이즈는 '운'이 아닌 '지식'에 기반한 자산 증식을 지향합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================================
          3. CORE CONTENT: MONEY MANAGEMENT STRUCTURE (H2)
          ===================================================================================== */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-start gap-4 mb-8">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-xl mt-1">
              <PieChart size={24} />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">
                2. 돈 관리의 4가지 기둥: 소득, 지출, 저축, 투자
              </h2>
              <div className="prose prose-slate max-w-none text-slate-600 leading-loose">
                <p>
                  재무 설계의 핵심은 복잡한 상품 가입이 아니라, 
                  <strong>현금 흐름(Cash Flow)</strong>을 흑자로 유지하는 시스템을 만드는 것입니다.
                  건강한 재무 상태를 위해 다음 4가지 단계를 점검해보세요.
                </p>
                
                <ul className="space-y-6 mt-6 list-none pl-0">
                  <li className="flex gap-4 items-start">
                    <span className="font-bold text-emerald-700 w-20 shrink-0 bg-emerald-50 px-2 py-1 rounded text-center text-sm">소득(Income)</span>
                    <span>
                      재테크의 엔진입니다. 초기에는 근로 소득을 높여 <strong>시드 머니(Seed Money)</strong>를 빠르게 확보하는 것이 
                      어떤 투자 상품보다 높은 수익률을 보장합니다.
                    </span>
                  </li>
                  <li className="flex gap-4 items-start">
                    <span className="font-bold text-red-700 w-20 shrink-0 bg-red-50 px-2 py-1 rounded text-center text-sm">지출(Expense)</span>
                    <span>
                      가장 통제하기 어려운 영역입니다. '선저축 후지출' 원칙을 지키고, 
                      고정비(통신비, 보험료 등)를 줄여 <strong>잉여 현금</strong>을 만드는 것이 투자의 시작점입니다.
                    </span>
                  </li>
                  <li className="flex gap-4 items-start">
                    <span className="font-bold text-blue-700 w-20 shrink-0 bg-blue-50 px-2 py-1 rounded text-center text-sm">저축(Saving)</span>
                    <span>
                      투자를 위한 총알을 준비하는 단계입니다. 비상금(생활비의 3~6개월 치)을 먼저 확보하여 
                      예기치 못한 상황에서도 투자를 지속할 수 있는 <strong>방어막</strong>을 구축해야 합니다.
                    </span>
                  </li>
                  <li className="flex gap-4 items-start">
                    <span className="font-bold text-purple-700 w-20 shrink-0 bg-purple-50 px-2 py-1 rounded text-center text-sm">투자(Invest)</span>
                    <span>
                      돈이 나를 위해 일하게 하는 단계입니다. 인플레이션(물가 상승)을 방어하고, 
                      복리의 마법을 누리기 위해 주식, 채권, 부동산 등 자산군에 <strong>장기 분산 투자</strong>하십시오.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================================
          4. DYNAMIC CONTENT: RELATED ARTICLES (SEO HUB STRUCTURE)
          ===================================================================================== */}
      <section id="latest-articles" className="py-24 bg-white border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex items-end justify-between mb-10 border-b border-slate-100 pb-4">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">금융/재테크 최신 칼럼</h2>
              <p className="text-slate-500 mt-2">전문가가 분석한 돈 관리의 정석과 트렌드</p>
            </div>
            <Link to="/finance" className="hidden md:flex items-center text-sm font-bold text-blue-600 hover:underline">
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