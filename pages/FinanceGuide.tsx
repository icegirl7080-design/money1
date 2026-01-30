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
  Lightbulb,
  CreditCard,
  Coins,
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
  BarChart3
} from 'lucide-react';
import { INITIAL_ARTICLES } from '../constants';
import { Category } from '../types';
import { ArticleCard } from '../components/ArticleCard';
import { SEO } from '../components/SEO';

// Reusable Connector Component
const SectionConnector = ({ label }: { label?: string }) => (
  <div className="flex flex-col items-center justify-center py-8 md:py-12 relative z-10 animate-on-scroll">
    <div className="h-8 md:h-12 w-px border-l-2 border-dashed border-emerald-200"></div>
    {label && (
      <div className="bg-white text-emerald-700 text-[10px] md:text-xs font-bold px-3 py-1 md:px-4 md:py-1.5 rounded-full border border-emerald-100 shadow-sm my-2 z-20 hover:scale-110 transition-transform duration-300 cursor-default whitespace-nowrap">
        {label}
      </div>
    )}
    <div className="text-emerald-300 animate-bounce mt-1">
      <ChevronsDown size={20} className="md:w-6 md:h-6" />
    </div>
  </div>
);

export const FinanceGuide: React.FC = () => {
  const relatedArticles = useMemo(() => {
    return INITIAL_ARTICLES
      .filter(article => article.category === Category.FINANCE)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, []);

  return (
    <main className="flex-grow bg-slate-50 font-sans text-slate-900 selection:bg-emerald-100">
      <SEO 
        title="금융 기초 완전 가이드 | 사회초년생 돈 관리와 재테크"
        description="금융 기초 지식부터 필수 용어 정리, 5단계 돈 관리 로드맵, 그리고 실전 통장 쪼개기까지. 부자가 되기 위해 반드시 알아야 할 재테크의 모든 것을 담았습니다."
        keywords={['금융기초', '돈관리', '재테크', '사회초년생', '통장쪼개기', '금융용어', '자산관리', '현금흐름']}
      />
      
      {/* 
        H1: Main Title Section 
      */}
      <section className="relative bg-white pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden border-b border-slate-100">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-emerald-50/60 to-transparent pointer-events-none"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-emerald-100/20 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="container mx-auto px-4 relative z-10 max-w-5xl">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div className="flex-1 text-center md:text-left animate-on-scroll">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-bold mb-4 md:mb-6 shadow-sm uppercase tracking-wider hover:bg-emerald-100 transition-colors cursor-default">
                <Wallet size={14} />
                <span>Financial Basics Guide</span>
              </div>

              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight mb-6 md:mb-8 break-keep text-slate-900">
                금융 기초 완전 가이드: <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                  사회초년생 돈 관리의 정석
                </span>
              </h1>
              
              <div className="prose prose-lg text-slate-600 mb-8 max-w-2xl mx-auto md:mx-0 leading-relaxed break-keep">
                <p>
                  돈을 버는 능력과 돈을 관리하는 능력은 완전히 다릅니다. 
                  많은 사회초년생들이 높은 연봉을 목표로 하지만, 정작 들어온 돈을 어떻게 지키고 불릴지에 대한 <strong>금융 기초 지식</strong>은 부족합니다.
                </p>
                <p>
                  이 가이드는 복잡한 금융 이론 대신, 당장 실천할 수 있는 <strong>현실적인 돈 관리 방법</strong>을 제시합니다. 
                  현금 흐름 파악부터 통장 쪼개기, 그리고 투자의 기초까지 차근차근 따라오세요.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a href="#definition" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 text-white font-bold rounded-2xl shadow-lg hover:bg-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  가이드 시작하기 <ArrowDown size={20} className="animate-bounce" />
                </a>
              </div>
            </div>
            
            {/* Visual Element */}
            <div className="hidden md:block w-[400px] relative animate-on-scroll delay-200">
               <div className="absolute inset-0 bg-emerald-100/50 rounded-full blur-[60px]"></div>
               <div className="relative bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-500">
                 <div className="flex items-center gap-4 mb-6">
                   <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600">
                     <TrendingUp size={24} />
                   </div>
                   <div>
                     <div className="text-sm font-bold text-slate-400">Target Goal</div>
                     <div className="text-xl font-black text-slate-900">1억 모으기</div>
                   </div>
                 </div>
                 <div className="space-y-3">
                   <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
                     <div className="flex items-center gap-2">
                       <CheckCircle2 size={16} className="text-emerald-500" />
                       <span className="text-sm font-bold text-slate-600">통장 쪼개기</span>
                     </div>
                     <span className="text-xs font-bold text-emerald-600 bg-emerald-100 px-2 py-0.5 rounded">완료</span>
                   </div>
                   <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
                     <div className="flex items-center gap-2">
                       <CheckCircle2 size={16} className="text-emerald-500" />
                       <span className="text-sm font-bold text-slate-600">비상금 확보</span>
                     </div>
                     <span className="text-xs font-bold text-emerald-600 bg-emerald-100 px-2 py-0.5 rounded">완료</span>
                   </div>
                   <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl opacity-60">
                     <div className="flex items-center gap-2">
                       <div className="w-4 h-4 rounded-full border-2 border-slate-300"></div>
                       <span className="text-sm font-bold text-slate-600">ETF 투자</span>
                     </div>
                     <span className="text-xs font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded">진행중</span>
                   </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      <SectionConnector label="Intro" />

      {/* 
        Section 1: What is Financial Basics? (H2)
      */}
      <section id="definition" className="py-16 md:py-24 bg-slate-50 scroll-mt-20">
        <div className="container mx-auto px-4 max-w-4xl animate-on-scroll">
          <div className="flex items-start gap-4 mb-8">
            <div className="p-3 bg-emerald-100 text-emerald-700 rounded-2xl shrink-0">
              <BookOpen size={28} />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-4">
                금융 기초란 무엇인가?
              </h2>
              <div className="prose prose-lg text-slate-600 leading-loose">
                <p>
                  금융 기초(Financial Literacy)는 단순히 '돈을 많이 버는 법'이 아닙니다. 
                  자본주의 사회에서 생존하기 위해 필수적인 <strong>돈의 언어와 규칙을 이해하는 능력</strong>을 말합니다.
                </p>
                <p>
                  물가 상승(인플레이션)으로 인해 현금의 가치는 매일 떨어지고 있습니다. 
                  금융 기초가 없다면 열심히 일해서 번 돈의 가치가 시간이 지날수록 증발하는 것을 지켜볼 수밖에 없습니다.
                  반대로 이 원리를 이해하면, 노동 소득을 자본 소득으로 전환하여 <strong>경제적 자유</strong>에 한 걸음 다가갈 수 있습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        Section 2: Essential Terminology (H2)
      */}
      <section className="py-16 md:py-24 bg-white border-y border-slate-200">
        <div className="container mx-auto px-4 max-w-5xl animate-on-scroll">
          <div className="text-center mb-12">
            <span className="text-emerald-600 font-bold tracking-wider text-xs uppercase mb-2 block">Vocabulary</span>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-4">
              사회초년생 필수 금융 용어 정리
            </h2>
            <p className="text-slate-500 text-base md:text-lg">
              이 3가지만 제대로 이해해도 금융 문맹에서 탈출할 수 있습니다.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <article className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:border-emerald-200 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-emerald-600 mb-6">
                <TrendingUp size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">복리 (Compound Interest)</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                '이자에 이자가 붙는' 마법입니다. 원금뿐만 아니라 불어난 이자에도 수익이 발생하기 때문에, 시간이 지날수록 자산이 기하급수적으로 증가합니다.
              </p>
              <div className="text-xs font-bold text-emerald-700 bg-emerald-100 inline-block px-2 py-1 rounded">
                핵심: 하루라도 일찍 시작할 것
              </div>
            </article>

            <article className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-blue-600 mb-6">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">신용점수 (Credit Score)</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                금융 사회에서의 성적표입니다. 대출 한도와 금리를 결정하는 절대적인 지표입니다. 연체는 신용점수의 가장 큰 적입니다.
              </p>
              <div className="text-xs font-bold text-blue-700 bg-blue-100 inline-block px-2 py-1 rounded">
                핵심: 신용카드 대금 연체 금지
              </div>
            </article>

            <article className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:border-purple-200 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-purple-600 mb-6">
                <BarChart3 size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">인플레이션 (Inflation)</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                물가가 지속적으로 오르는 현상입니다. 은행 예금 이자가 물가 상승률보다 낮다면, 내 돈의 실질 가치는 하락하는 것입니다.
              </p>
              <div className="text-xs font-bold text-purple-700 bg-purple-100 inline-block px-2 py-1 rounded">
                핵심: 투자해야 하는 이유
              </div>
            </article>
          </div>
        </div>
      </section>

      <SectionConnector label="Roadmap" />

      {/* 
        Section 3: 5-Step Roadmap (H2)
      */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-5xl animate-on-scroll">
          <div className="text-center mb-16">
            <span className="text-emerald-600 font-bold tracking-wider text-xs uppercase mb-2 block">Step-by-Step</span>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6">
              돈 관리 핵심 로드맵 5단계
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              재테크에도 순서가 있습니다. 기초 공사 없이 투자부터 시작하면 작은 위기에도 무너집니다.
            </p>
          </div>

          <div className="space-y-6">
            {/* Step 1 */}
            <article className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col md:flex-row gap-6 md:items-start hover:shadow-md transition-shadow">
              <div className="bg-slate-100 text-slate-500 font-black text-xl w-12 h-12 rounded-2xl flex items-center justify-center shrink-0">1</div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <Calculator size={20} className="text-emerald-500" />
                  현금 흐름 파악하기
                </h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  나의 <strong>실수령액(Net Income)</strong>과 <strong>고정 지출</strong>을 10원 단위까지 정확히 파악하는 것이 시작입니다. 
                  많은 사람들이 '대충 이 정도 쓰겠지'라고 생각하지만, 실제로 가계부를 적어보면 새는 돈(Latte Factor)이 상상 이상으로 많다는 것을 발견하게 됩니다.
                </p>
                <div className="bg-slate-50 p-4 rounded-xl text-sm text-slate-500 border border-slate-100">
                  <strong>Action:</strong> 뱅크샐러드나 토스 같은 자산 관리 앱을 연동하여 지난 3개월간의 지출 내역을 엑셀로 정리해보세요.
                </div>
              </div>
            </article>

            {/* Step 2 */}
            <article className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col md:flex-row gap-6 md:items-start hover:shadow-md transition-shadow">
              <div className="bg-slate-100 text-slate-500 font-black text-xl w-12 h-12 rounded-2xl flex items-center justify-center shrink-0">2</div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <Layers size={20} className="text-emerald-500" />
                  통장 쪼개기 (시스템 구축)
                </h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  돈을 모으는 것은 의지력이 아니라 <strong>시스템</strong>입니다. 
                  급여가 들어오면 내 손을 거치지 않고 저축, 고정비, 용돈 통장으로 자동 이체되도록 설정하세요. 
                  돈이 섞이지 않게 물리적으로 분리하는 것이 핵심입니다.
                </p>
              </div>
            </article>

            {/* Step 3 */}
            <article className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col md:flex-row gap-6 md:items-start hover:shadow-md transition-shadow">
              <div className="bg-slate-100 text-slate-500 font-black text-xl w-12 h-12 rounded-2xl flex items-center justify-center shrink-0">3</div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <Umbrella size={20} className="text-emerald-500" />
                  비상금 확보 (3~6개월 치)
                </h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  갑작스러운 실직, 병원비 등 인생의 위기에 대비한 안전판입니다. 
                  최소 <strong>월 생활비의 3배</strong>를 모을 때까지는 투자를 보류하고 비상금부터 만드세요. 
                  이 돈은 언제든 뺄 수 있는 CMA 통장에 넣어두는 것이 유리합니다.
                </p>
              </div>
            </article>

            {/* Step 4 */}
            <article className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col md:flex-row gap-6 md:items-start hover:shadow-md transition-shadow">
              <div className="bg-slate-100 text-slate-500 font-black text-xl w-12 h-12 rounded-2xl flex items-center justify-center shrink-0">4</div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <Scissors size={20} className="text-emerald-500" />
                  나쁜 빚 상환하기
                </h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  신용카드 리볼빙, 카드론, 고금리 마이너스 통장 등은 <strong>자산 증식의 가장 큰 적</strong>입니다. 
                  주식 투자 수익률(연 5~10%)보다 대출 이자(연 6~19%)가 높다면, 빚을 갚는 것이 최고의 재테크입니다.
                </p>
              </div>
            </article>

            {/* Step 5 */}
            <article className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col md:flex-row gap-6 md:items-start hover:shadow-md transition-shadow">
              <div className="bg-slate-100 text-slate-500 font-black text-xl w-12 h-12 rounded-2xl flex items-center justify-center shrink-0">5</div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <Landmark size={20} className="text-emerald-500" />
                  투자와 자산 증식
                </h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  비상금이 확보되고 빚이 없다면, 이제 잉여 자금으로 투자를 시작합니다. 
                  개별 주식보다는 시장 전체를 사는 <strong>ETF</strong>나 현금 흐름을 만드는 <strong>배당주</strong>로 안전하게 시작하세요.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <SectionConnector label="Practical" />

      {/* 
        Section 4: 4-Account System (H2)
      */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-2/3 h-full bg-emerald-50/50 -skew-x-12 transform origin-top-right -z-10"></div>
        
        <div className="container mx-auto px-4 max-w-6xl animate-on-scroll">
          <div className="text-center md:text-left mb-12">
            <span className="text-emerald-600 font-bold tracking-wider text-xs uppercase mb-2 block">Action Plan</span>
            <h2 className="text-2xl md:text-4xl font-black text-slate-900 mb-6">
              실전 적용: '4개의 통장' 쪼개기 시스템
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl leading-relaxed">
              의지력에 기대지 마세요. 월급이 들어오면 자동으로 흩어지는 <strong>자동화 시스템(Automation)</strong>을 구축해야 합니다.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Account 1 */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:border-blue-300 hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Briefcase size={20} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">1. 급여 통장</h3>
              <p className="text-sm text-slate-500 mb-4 h-10">모든 수입이 들어오고 고정비가 나가는 허브(Hub)입니다.</p>
              <ul className="text-xs text-slate-600 space-y-2 bg-slate-50 p-3 rounded-xl">
                <li>• 월급 수령</li>
                <li>• 공과금/통신비 자동이체</li>
                <li>• <strong>목표 잔액: 0원</strong></li>
              </ul>
            </div>

            {/* Account 2 */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:border-emerald-300 hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <PiggyBank size={20} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">2. 투자 통장</h3>
              <p className="text-sm text-slate-500 mb-4 h-10">미래를 위한 돈입니다. 선저축 후지출의 핵심입니다.</p>
              <ul className="text-xs text-slate-600 space-y-2 bg-slate-50 p-3 rounded-xl">
                <li>• 적금/주식/펀드</li>
                <li>• 월급일+1일 자동이체</li>
                <li>• <strong>절대 건드리지 않기</strong></li>
              </ul>
            </div>

            {/* Account 3 */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:border-amber-300 hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                <ShoppingBag size={20} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">3. 소비 통장</h3>
              <p className="text-sm text-slate-500 mb-4 h-10">한 달 동안 사용할 생활비만 넣어두는 체크카드 통장입니다.</p>
              <ul className="text-xs text-slate-600 space-y-2 bg-slate-50 p-3 rounded-xl">
                <li>• 식비/교통비/쇼핑</li>
                <li>• 정해진 예산 내 소비</li>
                <li>• <strong>부족하면 안 쓰기</strong></li>
              </ul>
            </div>

            {/* Account 4 */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:border-slate-400 hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 bg-slate-100 text-slate-600 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-slate-700 group-hover:text-white transition-colors">
                <Safe size={20} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">4. 비상금 통장</h3>
              <p className="text-sm text-slate-500 mb-4 h-10">예기치 못한 지출을 방어하는 CMA 파킹통장입니다.</p>
              <ul className="text-xs text-slate-600 space-y-2 bg-slate-50 p-3 rounded-xl">
                <li>• 경조사/병원비</li>
                <li>• 남은 돈 보관</li>
                <li>• <strong>연 2~3% 이자 수익</strong></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 
        Section 5: FAQ (H2)
      */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-4xl animate-on-scroll">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 flex items-center justify-center gap-2 mb-4">
              <HelpCircle className="text-emerald-600" />
              자주 묻는 질문 (FAQ)
            </h2>
            <p className="text-slate-500">금융 초보자들이 가장 많이 궁금해하는 내용을 정리했습니다.</p>
          </div>

          <div className="space-y-4">
            <details className="group bg-white rounded-2xl border border-slate-200 shadow-sm open:shadow-md transition-all">
              <summary className="flex items-center justify-between p-6 font-bold text-lg text-slate-800 cursor-pointer list-none select-none">
                <h3 className="text-lg font-bold">Q. 신용카드는 아예 쓰지 않는 게 좋나요?</h3>
                <ChevronRight className="text-slate-400 group-open:rotate-90 transition-transform" />
              </summary>
              <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                <p className="mb-2">무조건 나쁜 것은 아닙니다. 신용카드는 <strong>신용점수(Credit Score)</strong>를 쌓는 데 도움이 됩니다. 신용 활동이 아예 없으면 나중에 대출 시 불리할 수 있습니다.</p>
                <p>단, 사회초년생이라면 소비 통제가 어렵기 때문에 <strong>체크카드를 주력으로 사용</strong>하고, 신용카드는 통신비 할인 등 고정비 지출용으로만 제한적으로(한도의 50% 미만) 사용하는 것을 추천합니다.</p>
              </div>
            </details>

            <details className="group bg-white rounded-2xl border border-slate-200 shadow-sm open:shadow-md transition-all">
              <summary className="flex items-center justify-between p-6 font-bold text-lg text-slate-800 cursor-pointer list-none select-none">
                <h3 className="text-lg font-bold">Q. CMA 통장이 뭔가요? 꼭 만들어야 하나요?</h3>
                <ChevronRight className="text-slate-400 group-open:rotate-90 transition-transform" />
              </summary>
              <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                <p>CMA(Cash Management Account)는 증권사에서 만드는 수시 입출금 통장입니다. 일반 은행 입출금 통장은 이자가 거의 없지만(0.1%), CMA는 <strong>하루만 맡겨도 연 2~3%대의 이자</strong>를 줍니다.</p>
                <p>비상금처럼 잠시 보관하는 돈을 넣어두기에 가장 적합하므로 하나쯤 만들어두는 것이 좋습니다. 요즘은 모바일로 비대면 개설이 매우 쉽습니다.</p>
              </div>
            </details>
            
             <details className="group bg-white rounded-2xl border border-slate-200 shadow-sm open:shadow-md transition-all">
              <summary className="flex items-center justify-between p-6 font-bold text-lg text-slate-800 cursor-pointer list-none select-none">
                <h3 className="text-lg font-bold">Q. 저축과 투자의 비율은 어떻게 정하나요?</h3>
                <ChevronRight className="text-slate-400 group-open:rotate-90 transition-transform" />
              </summary>
              <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                <p>개인의 성향에 따라 다르지만, 사회초년생이라면 <strong>저축 60% : 투자 40%</strong> 정도의 비율을 추천합니다.</p>
                <p>아직 시드머니가 충분하지 않기 때문에 원금 보장이 되는 적금 비중을 높게 가져가고, 소액으로 ETF 적립식 투자를 병행하며 투자 경험을 쌓는 것이 좋습니다. 비상금이 확보되지 않았다면 저축 100%로 시작하세요.</p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* 
        Next Step Link
      */}
      <section className="py-16 bg-emerald-900 text-emerald-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-4 max-w-4xl relative z-10 text-center animate-on-scroll">
          <h2 className="text-xl md:text-3xl font-black mb-6 leading-tight">
            "금융 기초를 다졌다면, <br className="md:hidden"/>이제 실전 투자로 넘어갈 차례입니다"
          </h2>
          <p className="text-emerald-200 text-sm md:text-base mb-8 max-w-2xl mx-auto leading-relaxed break-keep">
            돈이 모이는 시스템을 구축하셨나요? <br className="hidden md:block"/>
            이제는 자본이 나를 위해 일하게 만드는 <strong>안전한 투자 방법</strong>을 배워보세요.
          </p>
          <Link 
            to="/investment-guide" 
            className="inline-flex items-center gap-2 bg-white text-emerald-900 font-bold px-8 py-4 rounded-full hover:bg-emerald-50 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-emerald-900/50 text-base"
          >
            투자 가이드 바로가기 <ArrowRight size={18} />
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
              <h2 className="text-2xl md:text-4xl font-black text-slate-900">금융 기초 추천 칼럼</h2>
              <p className="text-slate-500 mt-2 font-medium text-sm md:text-base">전문가가 정리한 재테크 필수 정보</p>
            </div>
            <Link to="/finance" className="hidden md:flex items-center text-sm font-bold text-emerald-600 hover:underline">
              전체 보기 <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
          
          {relatedArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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
          
          <div className="mt-8 md:hidden">
            <Link to="/finance" className="block w-full py-4 text-center border border-slate-200 bg-white rounded-xl font-bold text-slate-600 hover:border-slate-300 transition-all shadow-sm">
              칼럼 전체 보기
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};