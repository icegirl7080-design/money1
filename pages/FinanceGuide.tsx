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
  Safe,
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
      
      {/* 
        H1: Hero Section 
      */}
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
                     <div className="w-full h-full bg-gradient-to-r from-emerald-400 to-blue-500 origin-left animate-[grow_2s_ease-out]"></div>
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
          
          {/* Section 1: Essence */}
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
                축구로 비유하자면 금융은 '체력과 룰에 대한 이해'이고, 재테크는 '드리블이나 슛 기술'입니다.
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
                  우리가 먼저 집중해야 할 것은 <strong>'잃지 않는 시스템'</strong>을 만드는 금융 기초입니다.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2: 4 Pillars */}
          <section id="income-structure" className="mb-24 scroll-mt-32 animate-on-scroll">
            <div className="flex items-center gap-4 mb-8">
              <span className="flex items-center justify-center w-12 h-12 rounded-2xl bg-emerald-600 text-white font-black text-xl shadow-lg shadow-emerald-200">02</span>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">돈 관리의 4가지 기둥</h2>
            </div>
            
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              건물이 튼튼하게 서 있으려면 기둥이 필요하듯, 부(Wealth)를 쌓기 위해서도 4가지 핵심 기둥이 균형을 이루어야 합니다. 
              어느 하나라도 부실하면 자산은 쌓이지 않고 흘러내립니다.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Pillar 1: Income */}
              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-100/50 hover:-translate-y-1 transition-transform duration-300">
                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <Briefcase size={28} />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4">1. 소득 (Income)</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  재테크의 엔진입니다. 초기에는 근로 소득을 높여 시드 머니를 확보하는 것이 최우선입니다. 
                  많은 사람들이 투자 수익률에만 집착하지만, 시드 머니가 작으면 수익금도 작을 수밖에 없습니다.
                </p>
                <div className="bg-blue-50/50 p-4 rounded-xl text-sm font-medium text-blue-800">
                  Action: 몸값 높이기, 부업(Side Hustle)으로 파이프라인 추가하기
                </div>
              </div>

              {/* Pillar 2: Expense */}
              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-100/50 hover:-translate-y-1 transition-transform duration-300">
                <div className="w-14 h-14 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center mb-6">
                  <Scissors size={28} />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4">2. 지출 (Expense)</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  통제 가능한 영역입니다. 아무리 많이 벌어도 지출 구멍이 크면 물은 고이지 않습니다. 
                  '선저축 후지출' 원칙이 기본이며, 고정비와 변동비를 명확히 구분해야 합니다.
                </p>
                <div className="bg-red-50/50 p-4 rounded-xl text-sm font-medium text-red-800">
                  Action: 가계부 쓰기, 신용카드 리볼빙 금지, 구독 서비스 다이어트
                </div>
              </div>

              {/* Pillar 3: Saving */}
              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-100/50 hover:-translate-y-1 transition-transform duration-300">
                <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                  <Safe size={28} />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4">3. 저축 (Saving)</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  투자를 위한 총알이자 방어막입니다. 투자를 시작하기 전, 최소 3~6개월 치 생활비를 
                  '비상금'으로 확보하여 인생의 리스크(실직, 질병)에 대비해야 합니다.
                </p>
                <div className="bg-emerald-50/50 p-4 rounded-xl text-sm font-medium text-emerald-800">
                  Action: CMA 통장(파킹통장) 활용, 통장 쪼개기로 자동 저축
                </div>
              </div>

              {/* Pillar 4: Invest */}
              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-100/50 hover:-translate-y-1 transition-transform duration-300">
                <div className="w-14 h-14 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mb-6">
                  <TrendingUp size={28} />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4">4. 투자 (Invest)</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  돈이 나를 위해 일하게 만드는 단계입니다. 인플레이션을 방어하고 자산을 증식시킵니다. 
                  장기 분산 투자로 복리 효과를 누리는 것이 핵심입니다.
                </p>
                <div className="bg-purple-50/50 p-4 rounded-xl text-sm font-medium text-purple-800">
                  Action: ETF 적립식 매수, 배당주 투자, 연금저축펀드 활용
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Consumption & Life Hacks */}
          <section id="consumption" className="mb-24 scroll-mt-32 animate-on-scroll">
             <div className="flex items-center gap-4 mb-8">
              <span className="flex items-center justify-center w-12 h-12 rounded-2xl bg-amber-500 text-white font-black text-xl shadow-lg shadow-amber-200">03</span>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">소비 통제가 안 되시나요?</h2>
            </div>

            <div className="prose prose-lg prose-slate max-w-none text-slate-600 leading-8">
              <p>
                현대 사회는 소비를 부추기는 알고리즘으로 가득 차 있습니다. 
                SNS의 화려한 삶, 원터치 결제의 편리함은 우리의 도파민을 자극하여 <strong>'감정적 소비'</strong>를 유도합니다. 
                소비는 심리전입니다. 이기기 위해서는 전략이 필요합니다.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">지출을 줄이는 생활 속 금융 꿀팁</h3>
              
              <div className="space-y-6">
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center shrink-0 mt-1">
                    <ShoppingBag size={20} className="text-slate-600"/>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">1. 3일의 법칙 (Cooling-off Period)</h4>
                    <p>
                      사고 싶은 물건이 생기면 장바구니에 담아두고 딱 3일만 기다리세요. 
                      대부분의 충동구매 욕구는 72시간 내에 사라집니다. 3일 뒤에도 꼭 필요하다면 그때 구매하세요.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center shrink-0 mt-1">
                    <CreditCard size={20} className="text-slate-600"/>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">2. 신용카드 다이어트</h4>
                    <p>
                      신용카드는 고통 없는 결제를 가능하게 하여 과소비를 유발합니다. 
                      소비 통제가 어렵다면 과감하게 신용카드를 자르고 <strong>체크카드</strong>나 <strong>현금</strong>을 사용하세요. 
                      통장 잔고가 줄어드는 것을 눈으로 확인하는 고통이 저축을 돕습니다.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center shrink-0 mt-1">
                    <DollarSign size={20} className="text-slate-600"/>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">3. 소액의 힘 (Latte Factor)</h4>
                    <p>
                      매일 마시는 5,000원 커피, 택시비, 편의점 간식을 우습게 보지 마세요. 
                      월 30만 원이면 1년에 360만 원입니다. 이 돈을 연 5% 배당주에 투자하면 10년 뒤 4,500만 원이 넘는 자산이 됩니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: System */}
          <section id="system" className="mb-24 scroll-mt-32 animate-on-scroll">
            <div className="flex items-center gap-4 mb-8">
              <span className="flex items-center justify-center w-12 h-12 rounded-2xl bg-blue-600 text-white font-black text-xl shadow-lg shadow-blue-200">04</span>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">자동화 시스템 구축</h2>
            </div>
            
            <div className="bg-slate-900 text-slate-300 rounded-[2.5rem] p-10 md:p-12 shadow-2xl relative overflow-hidden">
               {/* Background Pattern */}
               <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
               <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] pointer-events-none"></div>

               <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 relative z-10">
                 "의지력을 믿지 마세요.<br/>시스템을 믿으세요."
               </h3>
               
               <p className="text-lg leading-relaxed mb-10 max-w-2xl relative z-10">
                 매달 월급날마다 '이번 달엔 아껴 써야지' 다짐하지만 실패하는 이유는 당신의 의지력이 약해서가 아닙니다. 
                 돈이 자동으로 흘러가도록 길을 만들어두지 않았기 때문입니다.
               </p>

               <div className="grid md:grid-cols-2 gap-6 relative z-10">
                 <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
                   <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                     <Layers className="text-blue-400" size={20} /> 통장 쪼개기
                   </h4>
                   <p className="text-sm">
                     급여(수입) → 고정비 자동납부 → 저축/투자 자동이체 → 남은 돈으로 소비. 
                     이 순서를 강제하는 시스템을 만드세요.
                   </p>
                 </div>
                 <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
                   <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                     <Target className="text-emerald-400" size={20} /> 목적 자금 설정
                   </h4>
                   <p className="text-sm">
                     여행, 자동차, 결혼 등 목적별로 통장을 나누세요. 
                     목표가 명확하면 돈을 모으는 과정이 즐거워집니다.
                   </p>
                 </div>
               </div>
            </div>
          </section>

          {/* FAQ Section */}
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
                  <p>
                    대출 금리를 확인하세요. 대출 금리가 <strong>6% 이상</strong>이라면, 어떤 재테크보다 빚 상환이 최고의 투자입니다. 
                    확정 수익률 6% 이상을 내는 투자처는 거의 없습니다. 
                    단, 금리가 2~3%대의 저금리 대출(학자금, 전세자금)이라면 최소 상환만 유지하고 투자를 병행하는 것이 유리할 수 있습니다.
                  </p>
                </div>
              </details>

              <details className="group bg-white rounded-3xl border border-slate-200 open:shadow-lg transition-all duration-300">
                <summary className="flex items-center justify-between p-6 md:p-8 font-bold text-lg md:text-xl text-slate-800 cursor-pointer list-none select-none hover:text-emerald-600 transition-colors">
                  Q. 비상금은 얼마나 모아야 하나요?
                  <span className="bg-slate-100 rounded-full p-2 group-open:rotate-180 transition-transform"><ChevronRight /></span>
                </summary>
                <div className="px-6 pb-8 md:px-8 text-slate-600 leading-relaxed border-t border-slate-100 pt-6">
                  <p>
                    일반적으로 본인 <strong>월 생활비의 3~6개월 치</strong>를 권장합니다. 
                    월 지출이 200만 원이라면 600만~1,200만 원입니다. 
                    이 돈은 투자가 아닌 <strong>생존</strong>을 위한 자금이므로, 수익률보다는 언제든 뺄 수 있는 유동성이 중요합니다. 
                    CMA나 파킹통장에 보관하세요.
                  </p>
                </div>
              </details>

              <details className="group bg-white rounded-3xl border border-slate-200 open:shadow-lg transition-all duration-300">
                <summary className="flex items-center justify-between p-6 md:p-8 font-bold text-lg md:text-xl text-slate-800 cursor-pointer list-none select-none hover:text-emerald-600 transition-colors">
                  Q. 신용카드를 없애면 신용점수가 떨어지나요?
                  <span className="bg-slate-100 rounded-full p-2 group-open:rotate-180 transition-transform"><ChevronRight /></span>
                </summary>
                <div className="px-6 pb-8 md:px-8 text-slate-600 leading-relaxed border-t border-slate-100 pt-6">
                  <p>
                    오래 사용한 카드를 해지하면 신용 거래 기간이 줄어들어 점수가 소폭 하락할 수 있습니다. 
                    하지만 과소비나 리볼빙으로 인한 연체 위험보다는 해지가 낫습니다. 
                    신용점수는 <strong>체크카드</strong>를 꾸준히(월 30만 원 이상, 6개월 이상) 사용해도 충분히 올릴 수 있습니다.
                  </p>
                </div>
              </details>
            </div>
          </section>

        </article>
        
        {/* Desktop Table of Contents (Sticky) */}
        <TableOfContents />
      </div>

      {/* 
        Next Step Link
      */}
      <section className="py-24 bg-emerald-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-teal-500/20 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="container mx-auto px-4 max-w-4xl relative z-10 text-center animate-on-scroll">
          <Quote className="mx-auto text-teal-400 mb-8 opacity-50" size={48} />
          <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">
            "금융 지식은 <br className="md:hidden"/>당신의 자산을 지키는<br className="hidden md:block"/> 
            <span className="text-teal-400">가장 강력한 방패</span>입니다."
          </h2>
          <p className="text-emerald-100/80 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed break-keep">
            기초가 탄탄해졌다면, 이제는 실전 투자를 통해 자산을 증식시킬 차례입니다. 
            리스크를 최소화하고 수익을 극대화하는 투자 전략을 확인해보세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/investment-guide" 
              className="inline-flex items-center justify-center gap-3 bg-white text-emerald-900 font-bold text-lg px-8 py-4 rounded-xl hover:bg-emerald-50 hover:scale-105 transition-all shadow-xl"
            >
              <MousePointerClick />
              실전 투자 가이드
            </Link>
            <Link 
              to="/life-hacks-guide" 
              className="inline-flex items-center justify-center gap-3 bg-emerald-800 text-emerald-100 border border-emerald-700 font-bold text-lg px-8 py-4 rounded-xl hover:bg-emerald-700 transition-all shadow-lg"
            >
              <Lightbulb />
              생활비 절약 팁
            </Link>
          </div>
        </div>
      </section>

      {/* 
        Related Articles List
      */}
      <section id="latest-articles" className="py-24 bg-white border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-6xl animate-on-scroll">
          <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900">금융 에디터의 추천 칼럼</h2>
              <p className="text-slate-500 mt-2 font-medium text-lg">금융 전문가들의 깊이 있는 인사이트를 확인하세요.</p>
            </div>
            <Link to="/finance" className="hidden md:flex items-center font-bold text-emerald-600 hover:underline text-lg">
              전체 보기 <ArrowRight size={20} className="ml-1" />
            </Link>
          </div>
          
          {relatedArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {relatedArticles.map((article, idx) => (
                <div key={article.id} className={`animate-on-scroll delay-${(idx+1)*100}`}>
                  <ArticleCard article={article} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-32 bg-slate-50 rounded-[2.5rem] border border-slate-100">
              <p className="text-slate-500 font-medium text-lg">관련된 최신 글이 준비 중입니다.</p>
            </div>
          )}
          
          <div className="mt-12 md:hidden">
            <Link to="/finance" className="block w-full py-5 text-center border border-slate-200 bg-white rounded-2xl font-bold text-slate-600 hover:border-slate-300 transition-all shadow-sm text-lg">
              칼럼 전체 보기
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};