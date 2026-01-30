import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Wallet, 
  ArrowRight, 
  TrendingUp, 
  ShieldCheck, 
  PiggyBank,
  CheckCircle2,
  ArrowDown,
  BookOpen,
  ChevronsDown,
  CreditCard,
  Target,
  Calculator,
  Layers,
  Umbrella,
  Scissors,
  Briefcase,
  ShoppingBag,
  Safe,
  HelpCircle,
  ChevronRight,
  Landmark,
  BarChart3,
  Quote,
  Lightbulb,
  AlertTriangle,
  MousePointerClick
} from 'lucide-react';
import { INITIAL_ARTICLES } from '../constants';
import { Category } from '../types';
import { ArticleCard } from '../components/ArticleCard';
import { SEO } from '../components/SEO';

// Navigation for long content
const TableOfContents = () => (
  <nav className="hidden lg:block sticky top-24 self-start w-64 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm ml-8">
    <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
      <span className="w-1 h-5 bg-emerald-500 rounded-full"></span>
      목차 (Index)
    </h4>
    <ul className="space-y-3 text-sm text-slate-600">
      <li><a href="#intro" className="hover:text-emerald-600 transition-colors block border-l-2 border-transparent hover:border-emerald-200 pl-3">1. 자본주의와 돈의 본질</a></li>
      <li><a href="#mindset" className="hover:text-emerald-600 transition-colors block border-l-2 border-transparent hover:border-emerald-200 pl-3">2. 부자의 심리 vs 빈자의 심리</a></li>
      <li><a href="#roadmap" className="hover:text-emerald-600 transition-colors block border-l-2 border-transparent hover:border-emerald-200 pl-3">3. 5단계 재테크 로드맵</a></li>
      <li><a href="#system" className="hover:text-emerald-600 transition-colors block border-l-2 border-transparent hover:border-emerald-200 pl-3">4. 실전! 4개의 통장 시스템</a></li>
      <li><a href="#spending" className="hover:text-emerald-600 transition-colors block border-l-2 border-transparent hover:border-emerald-200 pl-3">5. 소비 통제와 저축의 기술</a></li>
      <li><a href="#faq" className="hover:text-emerald-600 transition-colors block border-l-2 border-transparent hover:border-emerald-200 pl-3">자주 묻는 질문 (FAQ)</a></li>
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
        title="금융 기초 완전 정복: 사회초년생 돈 관리의 모든 것"
        description="월급 관리, 통장 쪼개기, 복리 효과, 인플레이션 방어까지. 부자가 되기 위해 반드시 알아야 할 금융 지식과 실전 로드맵을 총정리했습니다."
        keywords={['금융기초', '재테크', '돈관리', '사회초년생', '통장쪼개기', '복리', '자산관리', '현금흐름', '경제적자유']}
      />
      
      {/* 
        H1: Main Title Section 
      */}
      <section className="relative bg-white pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden border-b border-slate-100">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-emerald-50/60 to-transparent pointer-events-none"></div>
        <div className="absolute top-20 right-20 w-[500px] h-[500px] bg-emerald-100/20 rounded-full blur-[80px] pointer-events-none"></div>
        
        <div className="container mx-auto px-4 relative z-10 max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="flex-1 text-center lg:text-left animate-on-scroll">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 text-white text-xs font-bold mb-6 shadow-lg shadow-slate-200 uppercase tracking-wider hover:scale-105 transition-transform cursor-default">
                <Wallet size={14} className="text-emerald-400" />
                <span>Financial Mastery Course 101</span>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.1] mb-8 break-keep text-slate-900 tracking-tight">
                금융 문맹 탈출,<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                  부의 추월차선에<br/>올라타라
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0 break-keep font-medium">
                열심히 일만 해서 부자가 될 수 있을까요? <br className="hidden md:block"/>
                자본주의 사회에서 노동 소득만으로는 인플레이션을 이길 수 없습니다. <br className="hidden md:block"/>
                돈이 나를 위해 일하게 만드는 <strong>'금융 시스템'</strong>을 구축하는 법을 지금 시작합니다.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="#intro" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-600 text-white font-bold rounded-2xl shadow-lg shadow-emerald-200 hover:bg-emerald-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  가이드 정독하기 <ArrowDown size={20} className="animate-bounce" />
                </a>
                <Link to="/blog" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-700 border border-slate-200 font-bold rounded-2xl hover:bg-slate-50 hover:border-slate-300 transition-all duration-300">
                  칼럼 전체 보기 <ArrowRight size={20} />
                </Link>
              </div>
            </div>
            
            {/* Visual Element: Money Growth Concept */}
            <div className="hidden lg:block w-[450px] relative animate-on-scroll delay-200">
               <div className="relative z-10 bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-2xl transform rotate-2 hover:rotate-0 transition-all duration-500 group cursor-default">
                 <div className="absolute top-0 right-0 p-8 opacity-10">
                   <BarChart3 size={120} className="text-emerald-600" />
                 </div>
                 <div className="relative z-10">
                   <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-lg mb-4">Compound Effect</span>
                   <h3 className="text-3xl font-black text-slate-900 mb-2">복리의 마법</h3>
                   <p className="text-slate-500 mb-6 text-sm">시간이 지날수록 자산은 기하급수적으로 성장합니다.</p>
                   
                   <div className="space-y-4">
                     <div className="flex items-center justify-between">
                        <span className="text-sm font-bold text-slate-400">Year 1</span>
                        <div className="w-1/4 h-2 bg-emerald-200 rounded-full"></div>
                     </div>
                     <div className="flex items-center justify-between">
                        <span className="text-sm font-bold text-slate-400">Year 5</span>
                        <div className="w-1/2 h-2 bg-emerald-300 rounded-full"></div>
                     </div>
                     <div className="flex items-center justify-between">
                        <span className="text-sm font-bold text-slate-400">Year 10</span>
                        <div className="w-3/4 h-2 bg-emerald-500 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.5)]"></div>
                     </div>
                     <div className="flex items-center justify-between">
                        <span className="text-sm font-bold text-slate-800">Year 20</span>
                        <div className="w-full h-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full shadow-[0_0_20px_rgba(20,184,166,0.6)]"></div>
                     </div>
                   </div>
                 </div>
               </div>
               
               {/* Floating Badges */}
               <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-50 animate-bounce duration-[3000ms]">
                 <div className="flex items-center gap-3">
                   <div className="bg-blue-50 p-2 rounded-full text-blue-600"><Target size={20} /></div>
                   <div>
                     <div className="text-[10px] text-slate-400 font-bold uppercase">Goal</div>
                     <div className="text-sm font-black text-slate-900">1억 모으기</div>
                   </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-7xl flex items-start gap-8 py-12 md:py-20">
        
        {/* Main Content Body */}
        <article className="flex-1 max-w-4xl mx-auto">
          
          {/* Section 1: Intro */}
          <section id="intro" className="mb-20 scroll-mt-24 animate-on-scroll">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-emerald-600 font-black text-6xl opacity-20 -ml-1">01</span>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900">자본주의와 돈의 본질</h2>
            </div>
            
            <div className="prose prose-lg prose-slate max-w-none text-slate-600 leading-8">
              <p className="lead text-xl text-slate-700 font-medium border-l-4 border-emerald-500 pl-6 italic mb-8 bg-emerald-50/50 py-4 rounded-r-xl">
                "돈을 좇지 마라, 돈이 따라오게 하라." <br/>
                우리는 이 말을 수없이 들었지만, 정작 돈이 어떻게 움직이는지 학교에서 배운 적은 없습니다.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6 flex items-center gap-2">
                <AlertTriangle className="text-amber-500" />
                왜 열심히 일하는데 가난해질까?
              </h3>
              <p>
                자본주의 사회에는 보이지 않는 세금이 있습니다. 바로 <strong>인플레이션(Inflation)</strong>입니다. 
                정부가 화폐를 찍어낼수록 돈의 가치는 하락하고 물가는 오릅니다. 
                여러분이 은행 예금(연 3%)에 돈을 넣어두는 동안, 실제 물가 상승률이 4~5%라면 여러분의 자산은 
                매년 <strong>마이너스 성장</strong>을 하고 있는 것입니다.
              </p>
              <p>
                가만히 있으면 벼락거지가 된다는 말은 농담이 아닙니다. 
                현금을 그대로 보유하는 것은 가장 위험한 투자입니다. 
                우리는 자산을 방어하기 위해 반드시 투자를 해야만 하는 시스템 속에 살고 있습니다.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">금융 문맹(Financial Illiteracy)의 대가</h3>
              <p>
                앨런 그린스펀 전 미 연준 의장은 이렇게 말했습니다. 
                <strong>"글을 모르는 문맹은 생활을 불편하게 하지만, 금융 문맹은 생존을 불가능하게 만든다."</strong>
              </p>
              <ul className="grid md:grid-cols-2 gap-4 list-none pl-0 my-8">
                <li className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                  <strong className="block text-slate-900 mb-2 text-lg">📉 기회 비용 상실</strong>
                  복리 효과를 누리지 못하고 평생 노동 소득에만 의존하게 됩니다.
                </li>
                <li className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                  <strong className="block text-slate-900 mb-2 text-lg">🏦 금융 사기 노출</strong>
                  폰지 사기, 리딩방 등 비정상적인 수익률 유혹에 쉽게 빠집니다.
                </li>
              </ul>
            </div>
          </section>

          <hr className="border-slate-200 my-16" />

          {/* Section 2: Mindset */}
          <section id="mindset" className="mb-20 scroll-mt-24 animate-on-scroll">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-emerald-600 font-black text-6xl opacity-20 -ml-1">02</span>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900">부자의 심리 vs 빈자의 심리</h2>
            </div>

            <div className="prose prose-lg prose-slate max-w-none text-slate-600">
              <p>
                재테크 기술보다 중요한 것은 마인드셋입니다. 
                로또 1등 당첨자의 90%가 다시 가난해지는 이유는 돈을 담을 그릇이 준비되지 않았기 때문입니다.
              </p>

              <div className="bg-slate-900 text-slate-300 rounded-3xl p-8 md:p-10 my-10 shadow-2xl">
                <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                  <div className="space-y-4">
                    <h4 className="text-2xl font-bold text-white border-b border-slate-700 pb-4 mb-4">빈자의 사고방식</h4>
                    <p className="flex gap-3"><span className="text-red-500">✕</span> <span>돈을 소비의 수단으로만 본다.</span></p>
                    <p className="flex gap-3"><span className="text-red-500">✕</span> <span>"월급날만 기다린다." (시간을 팔아 돈을 범)</span></p>
                    <p className="flex gap-3"><span className="text-red-500">✕</span> <span>남에게 보이기 위한 부채(차, 명품)를 산다.</span></p>
                    <p className="flex gap-3"><span className="text-red-500">✕</span> <span>즉각적인 만족을 추구한다.</span></p>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-2xl font-bold text-emerald-400 border-b border-slate-700 pb-4 mb-4">부자의 사고방식</h4>
                    <p className="flex gap-3"><span className="text-emerald-500">○</span> <span>돈을 자산 증식의 씨앗으로 본다.</span></p>
                    <p className="flex gap-3"><span className="text-emerald-500">○</span> <span>"돈이 나를 위해 일하게 한다." (시스템 구축)</span></p>
                    <p className="flex gap-3"><span className="text-emerald-500">○</span> <span>현금 흐름을 만드는 자산(주식, 부동산)을 산다.</span></p>
                    <p className="flex gap-3"><span className="text-emerald-500">○</span> <span>만족 지연(Delayed Gratification)을 실천한다.</span></p>
                  </div>
                </div>
              </div>
              
              <p>
                부자들은 <strong>자산(Asset)</strong>과 <strong>부채(Liability)</strong>를 명확히 구분합니다. 
                내 주머니에 돈을 넣어주는 것은 자산이고, 내 주머니에서 돈을 빼가는 것은 부채입니다. 
                여러분이 타고 다니는 자동차는 자산일까요, 부채일까요? 유지비와 감가상각을 고려하면 그것은 명백한 부채입니다.
              </p>
            </div>
          </section>

          <hr className="border-slate-200 my-16" />

          {/* Section 3: Roadmap */}
          <section id="roadmap" className="mb-20 scroll-mt-24 animate-on-scroll">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-emerald-600 font-black text-6xl opacity-20 -ml-1">03</span>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900">금융 초보 탈출 5단계 로드맵</h2>
            </div>
            <p className="text-lg text-slate-600 mb-10">
              재테크는 순서가 생명입니다. 빚이 있는데 투자를 하거나, 비상금도 없이 주식에 올인하는 것은 모래성 쌓기입니다.
              다음 5단계를 차근차근 밟아가세요.
            </p>

            <div className="space-y-6">
              <div className="flex gap-6 items-start p-6 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-xl font-black text-slate-500 shrink-0">1</div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">현금 흐름 파악 (자기 객관화)</h3>
                  <p className="text-slate-600">
                    '숨만 쉬어도 나가는 돈'을 정확히 아는 것부터 시작입니다. 
                    지난 3개월간의 카드 명세서와 입출금 내역을 엑셀이나 가계부 앱으로 정리하세요. 
                    소득(Net Income)에서 고정 지출을 뺀 <strong>잉여 자금</strong>이 얼마인지 10원 단위까지 파악해야 합니다.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start p-6 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-xl font-black text-slate-500 shrink-0">2</div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">통장 쪼개기 (시스템 구축)</h3>
                  <p className="text-slate-600">
                    의지에 의존하지 마세요. 월급이 들어오는 순간 자동으로 분류되도록 시스템을 만드세요. 
                    급여, 투자, 소비, 비상금 통장을 물리적으로 분리하는 것이 핵심입니다. (4장 상세 설명)
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start p-6 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-xl font-black text-slate-500 shrink-0">3</div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">비상금 확보 (방어막)</h3>
                  <p className="text-slate-600">
                    투자를 시작하기 전, 최소 <strong>월 생활비의 3~6개월 치</strong>를 현금으로 확보하세요. 
                    이 돈은 실직, 질병 등 인생의 위기 상황에서 당신의 자산을 지켜줄 최후의 보루입니다. 
                    이자율이 높은 CMA(파킹통장)에 넣어두세요.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start p-6 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-xl font-black text-slate-500 shrink-0">4</div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">나쁜 부채 상환 (누수 차단)</h3>
                  <p className="text-slate-600">
                    주식 기대 수익률(연 8%)보다 높은 금리의 대출(연 10%~)이 있다면, 투자는 미루고 빚부터 갚아야 합니다. 
                    특히 카드론, 현금서비스, 리볼빙은 자산 증식의 암적인 존재이므로 최우선으로 제거하세요.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start p-6 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-xl font-black text-slate-500 shrink-0">5</div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">종잣돈 모으기 & 투자 (성장)</h3>
                  <p className="text-slate-600">
                    방어막이 갖춰졌다면, 이제는 공격입니다. 
                    '선저축 후지출'로 1천만 원, 3천만 원, 1억 원 단위의 종잣돈(Seed Money)을 모으고, 
                    이를 ETF나 우량 자산에 투자하여 <strong>복리 효과</strong>를 누리세요.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <hr className="border-slate-200 my-16" />

          {/* Section 4: System (4 Accounts) */}
          <section id="system" className="mb-20 scroll-mt-24 animate-on-scroll">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-emerald-600 font-black text-6xl opacity-20 -ml-1">04</span>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900">실전! 4개의 통장 시스템</h2>
            </div>
            
            <div className="bg-emerald-900 text-emerald-50 p-8 rounded-3xl mb-12 shadow-xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none"></div>
               <h3 className="text-2xl font-bold mb-4 relative z-10">왜 통장을 쪼개야 하나요?</h3>
               <p className="leading-relaxed relative z-10">
                 하나의 통장에 월급이 들어오고, 카드값이 나가고, 저축도 하면 
                 내가 한 달에 정확히 얼마를 쓰는지 파악할 수 없습니다. 
                 돈에 <strong>이름표(목적)</strong>를 붙여주어 서로 섞이지 않게 관리해야 합니다.
               </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <article className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-blue-300 transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                  <Briefcase size={24} />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600">1. 급여 통장 (Hub)</h4>
                <p className="text-sm text-slate-600 mb-4 h-12">
                  수입의 관문. 모든 돈은 이곳으로 들어오고, 고정비를 납부한 뒤 각 통장으로 흩어집니다.
                </p>
                <div className="bg-slate-50 p-3 rounded-lg text-xs text-slate-500">
                  <strong>Tip:</strong> 통신비, 보험료 등 고정 지출 자동이체 설정. 잔액은 항상 0원으로 유지.
                </div>
              </article>

              <article className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-emerald-300 transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                  <PiggyBank size={24} />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-emerald-600">2. 투자 통장 (Saving)</h4>
                <p className="text-sm text-slate-600 mb-4 h-12">
                  '선저축'을 위한 통장. 미래의 나를 위해 떼어놓는 돈입니다.
                </p>
                <div className="bg-slate-50 p-3 rounded-lg text-xs text-slate-500">
                  <strong>Tip:</strong> 월급일 다음 날 자동이체 설정. 절대 출금 카드를 만들지 말 것.
                </div>
              </article>

              <article className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-amber-300 transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4">
                  <ShoppingBag size={24} />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-amber-600">3. 소비 통장 (Spending)</h4>
                <p className="text-sm text-slate-600 mb-4 h-12">
                  한 달 용돈. 식비, 교통비, 쇼핑 등 변동 지출을 관리합니다.
                </p>
                <div className="bg-slate-50 p-3 rounded-lg text-xs text-slate-500">
                  <strong>Tip:</strong> 체크카드와 연동. 잔액이 부족하면? 그 달은 굶어야 합니다.
                </div>
              </article>

              <article className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-slate-400 transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center mb-4">
                  <Safe size={24} />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-slate-600">4. 비상금 통장 (Spare)</h4>
                <p className="text-sm text-slate-600 mb-4 h-12">
                  예비비. 경조사, 병원비 등 예상치 못한 지출에 대비합니다.
                </p>
                <div className="bg-slate-50 p-3 rounded-lg text-xs text-slate-500">
                  <strong>Tip:</strong> 매일 이자가 붙는 CMA 활용. 남은 생활비는 모두 이곳으로 이체.
                </div>
              </article>
            </div>
          </section>

          <hr className="border-slate-200 my-16" />

          {/* Section 5: Spending Control */}
          <section id="spending" className="mb-20 scroll-mt-24 animate-on-scroll">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-emerald-600 font-black text-6xl opacity-20 -ml-1">05</span>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900">소비 통제와 저축의 기술</h2>
            </div>
            
            <div className="prose prose-lg prose-slate max-w-none text-slate-600">
              <h3 className="font-bold text-slate-900">라떼 효과 (The Latte Factor)</h3>
              <p>
                "고작 커피 한 잔 값인데..."라고 생각하시나요? 
                하루 5,000원의 커피값은 한 달이면 15만 원, 1년이면 180만 원입니다. 
                이 돈을 연 5% 수익률로 30년 투자한다면 <strong>약 1억 2천만 원</strong>이 됩니다. 
                소액 지출을 무시하는 순간, 부자가 될 기회는 멀어집니다.
              </p>

              <h3 className="font-bold text-slate-900 mt-8">파킨슨의 법칙 (Parkinson's Law)</h3>
              <p>
                "소득이 늘어나면 지출도 그만큼 늘어난다." 
                월급이 200만 원일 때 저축을 못 했던 사람은 500만 원을 벌어도 저축을 못 합니다. 
                삶의 수준(Lifestyle)을 올리는 것은 쉽지만, 다시 내리는 것은 불가능에 가깝습니다. 
                소득이 늘어나도 생활 수준을 일정 기간 유지하며 그 차액을 모두 투자해야 부의 추월차선을 탈 수 있습니다.
              </p>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 my-8 rounded-r-xl">
                 <strong className="block text-yellow-800 text-lg mb-2 flex items-center gap-2"><Lightbulb size={20}/> 72의 법칙 (Rule of 72)</strong>
                 <p className="text-sm text-yellow-900 mb-0">
                   내 자산이 2배가 되는 데 걸리는 시간을 계산하는 공식입니다.<br/>
                   <strong>72 ÷ 연 수익률(%) = 걸리는 시간(년)</strong><br/>
                   예를 들어, 연 6% 수익률로 투자한다면 72 ÷ 6 = 12년 뒤에 자산이 2배가 됩니다.
                 </p>
              </div>
            </div>
          </section>

          <hr className="border-slate-200 my-16" />

          {/* Section 6: FAQ */}
          <section id="faq" className="mb-20 scroll-mt-24 animate-on-scroll">
            <div className="flex items-center gap-3 mb-10">
              <HelpCircle size={36} className="text-emerald-600" />
              <h2 className="text-3xl md:text-4xl font-black text-slate-900">자주 묻는 질문 (FAQ)</h2>
            </div>

            <div className="space-y-6">
              <details className="group bg-white rounded-3xl border border-slate-200 open:shadow-lg transition-all duration-300">
                <summary className="flex items-center justify-between p-6 md:p-8 font-bold text-lg md:text-xl text-slate-800 cursor-pointer list-none select-none hover:text-emerald-600 transition-colors">
                  Q. 학자금 대출이 있는데 저축부터 해도 되나요?
                  <span className="bg-slate-100 rounded-full p-2 group-open:rotate-180 transition-transform"><ChevronRight /></span>
                </summary>
                <div className="px-6 pb-8 md:px-8 text-slate-600 leading-relaxed border-t border-slate-100 pt-6">
                  <p>
                    대출 금리를 확인해보세요. 학자금 대출 금리가 2~3%대로 낮다면, 굳이 전액 상환을 서두를 필요는 없습니다. 
                    최소한의 상환만 하면서 여유 자금으로 시드머니를 모으거나 연 5% 이상의 투자처에 넣는 것이 유리할 수 있습니다. 
                    단, 대출 금리가 5% 이상이라면 무조건 상환이 1순위 투자입니다.
                  </p>
                </div>
              </details>

              <details className="group bg-white rounded-3xl border border-slate-200 open:shadow-lg transition-all duration-300">
                <summary className="flex items-center justify-between p-6 md:p-8 font-bold text-lg md:text-xl text-slate-800 cursor-pointer list-none select-none hover:text-emerald-600 transition-colors">
                  Q. 신용카드는 꼭 잘라버려야 하나요?
                  <span className="bg-slate-100 rounded-full p-2 group-open:rotate-180 transition-transform"><ChevronRight /></span>
                </summary>
                <div className="px-6 pb-8 md:px-8 text-slate-600 leading-relaxed border-t border-slate-100 pt-6">
                  <p className="mb-4">
                    아닙니다. 신용카드는 '양날의 검'입니다. 잘 쓰면 신용점수를 올리고 혜택을 받지만, 못 쓰면 빚쟁이가 됩니다. 
                    사회초년생에게 추천하는 방법은 다음과 같습니다.
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
                    <li><strong>통제력이 약하다면:</strong> 체크카드 100% 사용 권장.</li>
                    <li><strong>통제력이 있다면:</strong> 신용카드는 고정비(통신비, 교통비) 납부용으로만 사용하고, 한도의 30% 미만으로 유지.</li>
                    <li><strong>할부 금지:</strong> 할부는 미래 소득을 당겨쓰는 마약입니다. 무조건 일시불만 사용하세요.</li>
                  </ul>
                </div>
              </details>

              <details className="group bg-white rounded-3xl border border-slate-200 open:shadow-lg transition-all duration-300">
                <summary className="flex items-center justify-between p-6 md:p-8 font-bold text-lg md:text-xl text-slate-800 cursor-pointer list-none select-none hover:text-emerald-600 transition-colors">
                  Q. CMA 통장이 뭔가요? 꼭 만들어야 하나요?
                  <span className="bg-slate-100 rounded-full p-2 group-open:rotate-180 transition-transform"><ChevronRight /></span>
                </summary>
                <div className="px-6 pb-8 md:px-8 text-slate-600 leading-relaxed border-t border-slate-100 pt-6">
                  <p className="mb-4">
                    CMA(Cash Management Account)는 증권사에서 만드는 수시 입출금 통장입니다. 
                    일반 은행 입출금 통장은 이자가 거의 없지만(0.1%), CMA는 <strong>하루만 맡겨도 연 2.5~3.5%의 이자</strong>를 줍니다.
                  </p>
                  <p>
                    비상금이나 잠시 머무르는 돈을 넣어두기에 가장 적합합니다. 
                    예를 들어 500만 원의 비상금을 일반 통장에 두면 이자가 1년에 5,000원이지만, CMA에 두면 약 15만 원입니다. 
                    반드시 만들어야 할 필수 통장입니다.
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
      <section className="py-20 md:py-32 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-emerald-500/20 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="container mx-auto px-4 max-w-4xl relative z-10 text-center animate-on-scroll">
          <Quote className="mx-auto text-emerald-500 mb-6 opacity-50" size={48} />
          <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">
            "가장 좋은 투자 시점은<br/> 10년 전이었고,<br/>
            두 번째로 좋은 시점은 <span className="text-emerald-400">바로 지금</span>입니다."
          </h2>
          <p className="text-slate-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed break-keep">
            금융 기초를 다지셨나요? 이제는 실전 투자를 통해 자산을 증식시킬 차례입니다. 
            초보자도 잃지 않는 안전한 ETF 투자 전략을 확인해보세요.
          </p>
          <Link 
            to="/investment-guide" 
            className="inline-flex items-center gap-3 bg-emerald-600 text-white font-bold text-lg px-10 py-5 rounded-full hover:bg-emerald-500 hover:scale-105 active:scale-95 transition-all shadow-xl shadow-emerald-900/50"
          >
            <MousePointerClick />
            실전 투자 가이드 바로가기
          </Link>
        </div>
      </section>

      {/* 
        Related Articles List
      */}
      <section id="latest-articles" className="py-24 bg-white border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-6xl animate-on-scroll">
          <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900">함께 읽으면 좋은 칼럼</h2>
              <p className="text-slate-500 mt-2 font-medium text-lg">금융 전문가들의 인사이트를 확인하세요.</p>
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