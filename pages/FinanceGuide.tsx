import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Wallet, 
  ArrowRight, 
  TrendingUp, 
  ArrowDown,
  CreditCard,
  Target,
  Layers,
  Briefcase,
  ShoppingBag,
  Vault,
  HelpCircle,
  ChevronRight,
  Quote,
  Lightbulb,
  AlertTriangle,
  MousePointerClick,
  Scale,
  DollarSign,
  Landmark,
  Scissors
} from 'lucide-react';
import { INITIAL_ARTICLES } from '../constants';
import { Category } from '../types';
import { ArticleCard } from '../components/ArticleCard';
import { SEO } from '../components/SEO';

// Table of Contents Component
const TableOfContents = () => (
  <nav className="hidden lg:block sticky top-28 self-start w-72 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm ml-8">
    <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2 text-lg">
      <span className="w-1.5 h-6 bg-emerald-600 rounded-full"></span>
      목차 (Index)
    </h4>
    <ul className="space-y-4 text-sm text-slate-600 font-medium">
      <li>
        <a href="#intro" className="hover:text-emerald-600 transition-colors block border-l-2 border-transparent hover:border-emerald-200 pl-3 py-1">
          1. 금융과 재테크의 본질
        </a>
      </li>
      <li>
        <a href="#income-structure" className="hover:text-emerald-600 transition-colors block border-l-2 border-transparent hover:border-emerald-200 pl-3 py-1">
          2. 돈 관리의 4가지 기둥
        </a>
      </li>
      <li>
        <a href="#consumption" className="hover:text-emerald-600 transition-colors block border-l-2 border-transparent hover:border-emerald-200 pl-3 py-1">
          3. 소비 통제와 심리학
        </a>
      </li>
      <li>
        <a href="#system" className="hover:text-emerald-600 transition-colors block border-l-2 border-transparent hover:border-emerald-200 pl-3 py-1">
          4. 자동화 시스템 구축
        </a>
      </li>
      <li>
        <a href="#faq" className="hover:text-emerald-600 transition-colors block border-l-2 border-transparent hover:border-emerald-200 pl-3 py-1">
          자주 묻는 질문 (FAQ)
        </a>
      </li>
    </ul>
  </nav>
);

export const FinanceGuide: React.FC = () => {
  const relatedArticles = useMemo(() => {
    return INITIAL_ARTICLES
      .filter(article => article.category === Category.FINANCE)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, []);

  return (
    <main className="flex-grow bg-slate-50 font-sans text-slate-900 selection:bg-emerald-100 leading-relaxed">
      <SEO 
        title="금융 기초 완전 가이드: 시스템으로 만드는 부"
        description="돈을 많이 버는 것과 부자가 되는 것은 다릅니다. 소득, 지출, 저축, 투자의 4가지 기둥을 세우고 자동으로 자산이 불어나는 머니 시스템을 구축하는 완벽 가이드입니다."
        keywords={['금융기초', '재테크', '돈관리', '시스템수익', '자산관리', '현금흐름', '복리', '소비통제', '파이프라인']}
      />
      
      {/* HERO SECTION */}
      <section className="relative bg-white pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden border-b border-slate-100">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-emerald-50/40 to-transparent pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
        
        <div className="container mx-auto px-4 relative z-10 max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="flex-1 text-center lg:text-left animate-on-scroll">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 text-white text-xs font-bold mb-8 shadow-xl shadow-slate-200/50 uppercase tracking-widest hover:scale-105 transition-transform cursor-default ring-1 ring-slate-700">
                <Wallet size={14} className="text-emerald-400" />
                <span>Wealth Building System 101</span>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.15] mb-8 break-keep text-slate-900 tracking-tight">
                금융과 재테크의 본질:<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
                  시스템으로 만드는 부
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0 break-keep font-medium">
                돈을 많이 버는 것(High Income)과 부자가 되는 것(High Net Worth)은 완전히 다른 영역입니다. <br className="hidden md:block"/>
                단순히 아끼는 것을 넘어, 자본주의 시스템 안에서 나의 자산을 지키고 불리는 <strong>구조적인 머니 시스템</strong>을 만드는 법을 안내합니다.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="#intro" className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-emerald-600 text-white font-bold rounded-2xl shadow-lg shadow-emerald-200 hover:bg-emerald-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-lg">
                  가이드 정독하기 <ArrowDown size={20} className="animate-bounce" />
                </a>
              </div>
            </div>
            
            {/* Visual Element */}
            <div className="hidden lg:block w-[480px] relative animate-on-scroll delay-200">
               <div className="relative z-10 bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-2xl transform rotate-1 hover:rotate-0 transition-all duration-500 group cursor-default">
                 <div className="absolute top-0 right-0 p-8 opacity-5">
                   <Landmark size={140} className="text-emerald-900" />
                 </div>
                 
                 <div className="space-y-8">
                   <div className="flex items-start gap-4">
                     <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                       <Scale size={24} />
                     </div>
                     <div>
                       <h3 className="text-lg font-bold text-slate-900 mb-1">금융 (Finance)</h3>
                       <p className="text-sm text-slate-500 leading-relaxed">돈이 흐르는 전체적인 생태계를 이해하는 기초 체력입니다.</p>
                     </div>
                   </div>

                   <div className="w-px h-8 bg-slate-200 ml-6"></div>

                   <div className="flex items-start gap-4">
                     <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                       <TrendingUp size={24} />
                     </div>
                     <div>
                       <h3 className="text-lg font-bold text-slate-900 mb-1">재테크 (Investment)</h3>
                       <p className="text-sm text-slate-500 leading-relaxed">기초 체력을 바탕으로 자산을 불리는 실행 기술입니다.</p>
                     </div>
                   </div>
                 </div>

                 <div className="mt-8 pt-8 border-t border-slate-100">
                   <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                     <span>Growth Potential</span>
                     <span>Infinite</span>
                   </div>
                   <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                     <div className="w-full h-full bg-gradient-to-r from-emerald-400 to-blue-500 origin-left animate-grow"></div>
                   </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-7xl flex items-start gap-12 py-16 md:py-24">
        
        {/* Main Content Body */}
        <article className="flex-1 max-w-4xl mx-auto">
          
          <section id="intro" className="mb-24 scroll-mt-32 animate-on-scroll">
            <div className="flex items-center gap-4 mb-8">
              <span className="flex items-center justify-center w-12 h-12 rounded-2xl bg-slate-900 text-white font-black text-xl shadow-lg shadow-slate-200">01</span>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">금융(Finance) vs 재테크</h2>
            </div>
            
            <div className="prose prose-lg prose-slate max-w-none text-slate-600 leading-8">
              <p className="lead text-xl md:text-2xl text-slate-800 font-bold mb-8">
                "기초 체력 없이 기술만 배우려 한다면, <br/>작은 시장 충격에도 공들여 모은 자산이 무너질 수 있습니다."
              </p>

              <p>
                많은 사람들이 '금융'과 '재테크'를 혼용해서 사용하지만, 이 둘은 명확히 다릅니다. 
                <strong>금융(Finance)</strong>은 자본주의 사회에서 돈이 흐르는 원리, 금리, 환율, 신용, 세금 등 
                돈을 다루는 전체적인 생태계와 규칙을 이해하는 <strong>'기초 체력'</strong>에 해당합니다.
              </p>
              <p>
                반면 <strong>재테크(Investment Tech)</strong>는 이러한 기초 위에서 주식, 부동산, 채권 등 
                구체적인 자산을 매매하여 수익을 내는 <strong>'실전 기술'</strong>입니다. 
              </p>

              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 my-10">
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <AlertTriangle className="text-red-500" />
                  왜 기초가 중요한가요?
                </h3>
                <p className="mb-0">
                  체력이 없는 선수가 화려한 기술만 연습하다 경기 후반에 쓰러지듯, 
                  금융 지식 없이 재테크 기술만 쫓는 사람은 경제 위기(인플레이션, 금리 인상 등)가 왔을 때 
                  대응하지 못하고 자산을 잃게 됩니다. 
                </p>
              </div>
            </div>
          </section>

          <section id="income-structure" className="mb-24 scroll-mt-32 animate-on-scroll">
            <div className="flex items-center gap-4 mb-8">
              <span className="flex items-center justify-center w-12 h-12 rounded-2xl bg-emerald-600 text-white font-black text-xl shadow-lg shadow-emerald-200">02</span>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">돈 관리의 4가지 기둥</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-100/50 hover:-translate-y-1 transition-transform duration-300">
                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <Briefcase size={28} />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4">1. 소득 (Income)</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  재테크의 엔진입니다. 초기에는 근로 소득을 높여 시드 머니를 확보하는 것이 최우선입니다. 
                </p>
                <div className="bg-blue-50/50 p-4 rounded-xl text-sm font-medium text-blue-800">
                  Action: 몸값 높이기, 부업으로 파이프라인 추가하기
                </div>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-100/50 hover:-translate-y-1 transition-transform duration-300">
                <div className="w-14 h-14 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center mb-6">
                  <Scissors size={28} />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4">2. 지출 (Expense)</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  통제 가능한 영역입니다. 아무리 많이 벌어도 지출 구멍이 크면 물은 고이지 않습니다. 
                </p>
                <div className="bg-red-50/50 p-4 rounded-xl text-sm font-medium text-red-800">
                  Action: 가계부 쓰기, 신용카드 리볼빙 금지
                </div>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-100/50 hover:-translate-y-1 transition-transform duration-300">
                <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                  <Vault size={28} />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4">3. 저축 (Saving)</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  투자를 위한 총알이자 방어막입니다. 최소 3~6개월 치 생활비를 비상금으로 확보하세요.
                </p>
                <div className="bg-emerald-50/50 p-4 rounded-xl text-sm font-medium text-emerald-800">
                  Action: CMA 통장 활용, 통장 쪼개기
                </div>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-100/50 hover:-translate-y-1 transition-transform duration-300">
                <div className="w-14 h-14 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mb-6">
                  <TrendingUp size={28} />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4">4. 투자 (Invest)</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  돈이 나를 위해 일하게 만드는 단계입니다. 장기 분산 투자로 복리 효과를 누리는 것이 핵심입니다.
                </p>
                <div className="bg-purple-50/50 p-4 rounded-xl text-sm font-medium text-purple-800">
                  Action: ETF 적립식 매수, 배당주 투자
                </div>
              </div>
            </div>
          </section>

          <section id="consumption" className="mb-24 scroll-mt-32 animate-on-scroll">
             <div className="flex items-center gap-4 mb-8">
              <span className="flex items-center justify-center w-12 h-12 rounded-2xl bg-amber-500 text-white font-black text-xl shadow-lg shadow-amber-200">03</span>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">소비 통제 전략</h2>
            </div>

            <div className="prose prose-lg prose-slate max-w-none text-slate-600 leading-8">
              <div className="space-y-6">
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center shrink-0 mt-1">
                    <ShoppingBag size={20} className="text-slate-600"/>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">1. 3일의 법칙</h4>
                    <p>충동구매 욕구는 72시간 내에 사라집니다. 장바구니에 담고 3일만 기다려 보세요.</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center shrink-0 mt-1">
                    <CreditCard size={20} className="text-slate-600"/>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">2. 신용카드 다이어트</h4>
                    <p>소비 통제가 어렵다면 체크카드로 전환하여 통장 잔고의 고통을 직접 느끼세요.</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center shrink-0 mt-1">
                    <DollarSign size={20} className="text-slate-600"/>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">3. 소액의 힘</h4>
                    <p>하루 5천 원의 커피값이 10년 뒤 배당주 투자를 통해 수천만 원의 자산이 될 수 있습니다.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="system" className="mb-24 scroll-mt-32 animate-on-scroll">
            <div className="flex items-center gap-4 mb-8">
              <span className="flex items-center justify-center w-12 h-12 rounded-2xl bg-blue-600 text-white font-black text-xl shadow-lg shadow-blue-200">04</span>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">자동화 시스템 구축</h2>
            </div>
            
            <div className="bg-slate-900 text-slate-300 rounded-[2.5rem] p-10 md:p-12 shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
               <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 relative z-10">"의지력을 믿지 마세요. 시스템을 믿으세요."</h3>
               <div className="grid md:grid-cols-2 gap-6 relative z-10">
                 <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
                   <h4 className="font-bold text-white mb-2 flex items-center gap-2"><Layers className="text-blue-400" size={20} /> 통장 쪼개기</h4>
                   <p className="text-sm">급여 → 고정비 → 저축/투자 → 소비 순으로 돈이 흐르게 하세요.</p>
                 </div>
                 <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
                   <h4 className="font-bold text-white mb-2 flex items-center gap-2"><Target className="text-emerald-400" size={20} /> 목적 자금 설정</h4>
                   <p className="text-sm">목표가 명확하면 돈을 모으는 과정이 즐거워집니다.</p>
                 </div>
               </div>
            </div>
          </section>

          <section id="faq" className="mb-24 scroll-mt-32 animate-on-scroll">
            <div className="flex items-center gap-3 mb-10">
              <HelpCircle size={36} className="text-emerald-600" />
              <h2 className="text-3xl md:text-4xl font-black text-slate-900">금융 기초 Q&A</h2>
            </div>

            <div className="space-y-4">
              <details className="group bg-white rounded-3xl border border-slate-200 open:shadow-lg transition-all duration-300">
                <summary className="flex items-center justify-between p-6 md:p-8 font-bold text-lg md:text-xl text-slate-800 cursor-pointer list-none select-none hover:text-emerald-600 transition-colors">
                  Q. 빚이 있는데 저축을 먼저 해야 하나요?
                  <span className="bg-slate-100 rounded-full p-2 group-open:rotate-180 transition-transform"><ChevronRight /></span>
                </summary>
                <div className="px-6 pb-8 md:px-8 text-slate-600 leading-relaxed border-t border-slate-100 pt-6">
                  <p>대출 금리가 6% 이상이라면 빚 상환이 최고의 투자입니다. 저금리 대출이라면 투자를 병행해도 좋습니다.</p>
                </div>
              </details>

              <details className="group bg-white rounded-3xl border border-slate-200 open:shadow-lg transition-all duration-300">
                <summary className="flex items-center justify-between p-6 md:p-8 font-bold text-lg md:text-xl text-slate-800 cursor-pointer list-none select-none hover:text-emerald-600 transition-colors">
                  Q. 비상금은 얼마나 모아야 하나요?
                  <span className="bg-slate-100 rounded-full p-2 group-open:rotate-180 transition-transform"><ChevronRight /></span>
                </summary>
                <div className="px-6 pb-8 md:px-8 text-slate-600 leading-relaxed border-t border-slate-100 pt-6">
                  <p>월 생활비의 3~6개월 치를 권장합니다. 수익률보다는 유동성이 중요하므로 파킹통장에 보관하세요.</p>
                </div>
              </details>
            </div>
          </section>
        </article>
        
        <TableOfContents />
      </div>

      <section className="py-24 bg-emerald-900 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-4xl relative z-10 text-center animate-on-scroll">
          <Quote className="mx-auto text-teal-400 mb-8 opacity-50" size={48} />
          <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">
            "금융 지식은 당신의 자산을 지키는 가장 강력한 방패입니다."
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/investment-guide" className="inline-flex items-center justify-center gap-3 bg-white text-emerald-900 font-bold text-lg px-8 py-4 rounded-xl hover:bg-emerald-50 hover:scale-105 transition-all shadow-xl">
              <MousePointerClick /> 실전 투자 가이드
            </Link>
            <Link to="/life-hacks-guide" className="inline-flex items-center justify-center gap-3 bg-emerald-800 text-emerald-100 border border-emerald-700 font-bold text-lg px-8 py-4 rounded-xl hover:bg-emerald-700 transition-all shadow-lg">
              <Lightbulb /> 생활비 절약 팁
            </Link>
          </div>
        </div>
      </section>

      <section id="latest-articles" className="py-24 bg-white border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-6xl animate-on-scroll">
          <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900">금융 에디터의 추천 칼럼</h2>
            </div>
            <Link to="/finance" className="hidden md:flex items-center font-bold text-emerald-600 hover:underline text-lg">
              전체 보기 <ArrowRight size={20} className="ml-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {relatedArticles.map((article, idx) => (
              <div key={article.id} className={`animate-on-scroll delay-${(idx+1)*100}`}>
                <ArticleCard article={article} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};