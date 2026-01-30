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
  Safe
} from 'lucide-react';
import { INITIAL_ARTICLES } from '../constants';
import { Category } from '../types';
import { ArticleCard } from '../components/ArticleCard';
import { SEO } from '../components/SEO';

// Reusable Connector Component for visual flow
const SectionConnector = ({ label }: { label?: string }) => (
  <div className="flex flex-col items-center justify-center py-8 relative z-10 animate-on-scroll">
    <div className="h-12 w-px border-l-2 border-dashed border-emerald-200"></div>
    {label && (
      <div className="bg-white text-emerald-700 text-xs font-bold px-4 py-1.5 rounded-full border border-emerald-100 shadow-sm my-2 z-20 hover:scale-110 transition-transform duration-300 cursor-default">
        {label}
      </div>
    )}
    <div className="text-emerald-300 animate-bounce mt-1">
      <ChevronsDown size={24} />
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
        title="금융 기초 가이드 | 사회초년생 돈 관리와 통장 쪼개기"
        description="금융 지식의 기초부터 실전 통장 쪼개기, 현금 흐름 관리 시스템 구축까지. 부자가 되기 위해 반드시 알아야 할 자산 관리의 핵심 원칙을 정리합니다."
        keywords={['금융기초', '돈관리', '통장쪼개기', '재테크', '자산관리', '현금흐름', '사회초년생 재테크', '금융용어']}
      />
      
      {/* 
        1. Hero Section 
      */}
      <section className="relative bg-white pt-32 pb-20 overflow-hidden border-b border-slate-100">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-emerald-50/60 to-transparent pointer-events-none"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-emerald-100/20 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="container mx-auto px-4 relative z-10 max-w-5xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 text-center md:text-left animate-on-scroll">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-bold mb-6 shadow-sm uppercase tracking-wider hover:bg-emerald-100 transition-colors cursor-default">
                <Wallet size={14} />
                <span>Financial Basics</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-black leading-tight mb-8 break-keep text-slate-900">
                금융 기초 가이드: <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                  누구나 쉽게 시작하는 돈 관리
                </span>
              </h1>

              {/* Improved Readability: Checklist with Hover Effects */}
              <div className="flex flex-col gap-4 mb-10 max-w-lg mx-auto md:mx-0">
                <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100 hover:border-emerald-200 hover:shadow-md hover:bg-white transition-all duration-300 group cursor-default">
                  <div className="bg-white p-1.5 rounded-full shadow-sm text-emerald-500 group-hover:scale-110 transition-transform">
                    <CheckCircle2 size={18} />
                  </div>
                  <span className="text-slate-600 font-medium text-sm md:text-base group-hover:text-slate-900 transition-colors">어려운 용어 없는 <strong>직관적인 설명</strong></span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100 hover:border-emerald-200 hover:shadow-md hover:bg-white transition-all duration-300 group cursor-default">
                  <div className="bg-white p-1.5 rounded-full shadow-sm text-emerald-500 group-hover:scale-110 transition-transform">
                    <CheckCircle2 size={18} />
                  </div>
                  <span className="text-slate-600 font-medium text-sm md:text-base group-hover:text-slate-900 transition-colors">사회초년생을 위한 <strong>월급 관리 시스템</strong> 구축</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100 hover:border-emerald-200 hover:shadow-md hover:bg-white transition-all duration-300 group cursor-default">
                   <div className="bg-white p-1.5 rounded-full shadow-sm text-emerald-500 group-hover:scale-110 transition-transform">
                    <CheckCircle2 size={18} />
                  </div>
                  <span className="text-slate-600 font-medium text-sm md:text-base group-hover:text-slate-900 transition-colors">소비 통제부터 <strong>시드머니 1억</strong> 만들기 로드맵</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a href="#roadmap" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 text-white font-bold rounded-2xl shadow-lg hover:bg-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  가이드 시작하기 <ArrowDown size={20} className="animate-bounce" />
                </a>
              </div>
            </div>
            
            {/* Hero Illustration */}
            <div className="w-full md:w-[450px] aspect-square bg-emerald-50 rounded-[3rem] relative flex items-center justify-center border border-emerald-100 shadow-inner animate-on-scroll delay-200 hover:scale-[1.02] transition-transform duration-500">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
              <div className="relative z-10 text-center p-8">
                <div className="w-24 h-24 bg-white rounded-3xl shadow-xl flex items-center justify-center text-emerald-500 mx-auto mb-6 transform -rotate-6 group-hover:rotate-0 transition-transform">
                  <PiggyBank size={48} />
                </div>
                <h3 className="text-2xl font-black text-slate-800 mb-2">Money System</h3>
                <p className="text-slate-500 font-medium">자동으로 모이는 <br/>돈 관리 시스템 구축하기</p>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute top-10 left-10 bg-white p-3 rounded-2xl shadow-lg animate-bounce duration-[3000ms]">
                <TrendingUp size={24} className="text-red-500" />
              </div>
              <div className="absolute bottom-12 right-12 bg-white p-3 rounded-2xl shadow-lg animate-bounce duration-[4000ms]">
                <ShieldCheck size={24} className="text-blue-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONNECTOR: Intro -> Roadmap */}
      <SectionConnector label="Step 1. 전체 지도 보기" />

      {/* 
        2. Financial Roadmap Section 
        - Phase 01: Overview
      */}
      <section id="roadmap" className="py-20 bg-slate-50 scroll-mt-10">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16 animate-on-scroll">
            <span className="text-emerald-600 font-bold tracking-wider text-xs uppercase mb-2 block">Phase 01</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
              재테크 로드맵: 금융 초보 탈출 5단계
            </h2>
            <p className="text-slate-500 text-lg">
              부자가 되기 위해 거쳐야 할 필수 코스를 확인하세요.
            </p>
          </div>

          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-[2.5rem] left-0 w-full h-1 bg-slate-200 z-0 rounded-full"></div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative z-10">
              {/* Step 1 */}
              <article className="bg-white p-6 rounded-3xl shadow-soft border border-slate-100 text-center group hover:-translate-y-2 hover:shadow-xl hover:shadow-emerald-100/40 transition-all duration-300 flex flex-col items-center animate-on-scroll delay-100">
                <div className="w-20 h-20 bg-slate-50 text-slate-400 rounded-full border-4 border-white shadow-sm flex items-center justify-center mb-6 group-hover:bg-emerald-50 group-hover:text-emerald-600 group-hover:border-emerald-100 transition-all duration-300 relative z-10">
                  <Calculator size={32} />
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-slate-900 text-white rounded-full text-xs flex items-center justify-center font-bold">1</div>
                </div>
                <h3 className="font-bold text-slate-900 mb-3 text-lg">현금 흐름 파악</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  나의 <span className="font-bold text-emerald-600">실수령액</span>과 <span className="font-bold text-red-500">고정 지출</span>을 10원 단위까지 적어보세요.
                </p>
              </article>

              {/* Step 2 */}
              <article className="bg-white p-6 rounded-3xl shadow-soft border border-slate-100 text-center group hover:-translate-y-2 hover:shadow-xl hover:shadow-emerald-100/40 transition-all duration-300 flex flex-col items-center animate-on-scroll delay-200">
                <div className="w-20 h-20 bg-slate-50 text-slate-400 rounded-full border-4 border-white shadow-sm flex items-center justify-center mb-6 group-hover:bg-emerald-50 group-hover:text-emerald-600 group-hover:border-emerald-100 transition-all duration-300 relative z-10">
                  <Layers size={32} />
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-slate-900 text-white rounded-full text-xs flex items-center justify-center font-bold">2</div>
                </div>
                <h3 className="font-bold text-slate-900 mb-3 text-lg">통장 쪼개기</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  급여, 소비, 비상금 통장을 <span className="font-bold text-emerald-600">물리적으로 분리</span>하여 돈을 관리하세요.
                </p>
              </article>

              {/* Step 3 */}
              <article className="bg-white p-6 rounded-3xl shadow-soft border border-slate-100 text-center group hover:-translate-y-2 hover:shadow-xl hover:shadow-emerald-100/40 transition-all duration-300 flex flex-col items-center animate-on-scroll delay-300">
                <div className="w-20 h-20 bg-slate-50 text-slate-400 rounded-full border-4 border-white shadow-sm flex items-center justify-center mb-6 group-hover:bg-emerald-50 group-hover:text-emerald-600 group-hover:border-emerald-100 transition-all duration-300 relative z-10">
                  <Umbrella size={32} />
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-slate-900 text-white rounded-full text-xs flex items-center justify-center font-bold">3</div>
                </div>
                <h3 className="font-bold text-slate-900 mb-3 text-lg">비상금 확보</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  월 생활비의 <span className="font-bold text-emerald-600">3배 금액</span>을 CMA 통장에 넣어 안전판을 만드세요.
                </p>
              </article>

              {/* Step 4 */}
              <article className="bg-white p-6 rounded-3xl shadow-soft border border-slate-100 text-center group hover:-translate-y-2 hover:shadow-xl hover:shadow-emerald-100/40 transition-all duration-300 flex flex-col items-center animate-on-scroll delay-400">
                <div className="w-20 h-20 bg-slate-50 text-slate-400 rounded-full border-4 border-white shadow-sm flex items-center justify-center mb-6 group-hover:bg-emerald-50 group-hover:text-emerald-600 group-hover:border-emerald-100 transition-all duration-300 relative z-10">
                  <Scissors size={32} />
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-slate-900 text-white rounded-full text-xs flex items-center justify-center font-bold">4</div>
                </div>
                <h3 className="font-bold text-slate-900 mb-3 text-lg">부채 상환</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  <span className="font-bold text-red-500">고금리 대출</span>부터 갚아 '마이너스 현금 흐름'을 차단하세요.
                </p>
              </article>

              {/* Step 5 */}
              <article className="bg-white p-6 rounded-3xl shadow-soft border border-slate-100 text-center group hover:-translate-y-2 hover:shadow-xl hover:shadow-emerald-100/40 transition-all duration-300 flex flex-col items-center animate-on-scroll delay-500">
                <div className="w-20 h-20 bg-slate-50 text-slate-400 rounded-full border-4 border-white shadow-sm flex items-center justify-center mb-6 group-hover:bg-emerald-50 group-hover:text-emerald-600 group-hover:border-emerald-100 transition-all duration-300 relative z-10">
                  <TrendingUp size={32} />
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-slate-900 text-white rounded-full text-xs flex items-center justify-center font-bold">5</div>
                </div>
                <h3 className="font-bold text-slate-900 mb-3 text-lg">투자와 증식</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  준비된 시드머니로 <span className="font-bold text-emerald-600">ETF, 배당주</span> 등 우량 자산을 매수하세요.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* CONNECTOR: Roadmap -> Key Concepts */}
      <SectionConnector label="Step 2. 기본기 다지기" />

      {/* 
        3. Key Concepts Summary 
        - Phase 02: Knowledge
      */}
      <section className="py-20 bg-white border-y border-slate-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12 animate-on-scroll">
            <span className="text-emerald-600 font-bold tracking-wider text-xs uppercase mb-2 block">Phase 02</span>
            <h2 className="text-3xl font-black text-slate-900 mb-4">
              금융 기초 지식: 필수 용어와 핵심 원칙
            </h2>
            <p className="text-slate-500 text-lg">
              실전에서 흔들리지 않기 위한 3가지 원칙을 기억하세요.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-slate-50 rounded-[2rem] p-8 border border-slate-100 hover:border-emerald-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group animate-on-scroll delay-100">
              <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-emerald-600 mb-6 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                <PiggyBank size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-emerald-700 transition-colors">저축의 기본 원칙</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-1 min-w-[1.25rem] text-emerald-500"><CheckCircle2 size={18} /></div>
                  <div>
                    <strong className="block text-slate-900 text-sm mb-1">선저축 후지출</strong>
                    <span className="text-slate-500 text-sm leading-snug block">월급의 <span className="bg-emerald-100 px-1 rounded text-emerald-800 font-bold">50%</span>는 받는 즉시 저축 계좌로 보내세요.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 min-w-[1.25rem] text-emerald-500"><CheckCircle2 size={18} /></div>
                  <div>
                    <strong className="block text-slate-900 text-sm mb-1">파킹통장 활용</strong>
                    <span className="text-slate-500 text-sm leading-snug block">비상금은 매일 이자가 쌓이는 <span className="bg-emerald-100 px-1 rounded text-emerald-800 font-bold">CMA 통장</span>에 보관하세요.</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="bg-slate-50 rounded-[2rem] p-8 border border-slate-100 hover:border-blue-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group animate-on-scroll delay-200">
              <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <BookOpen size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-700 transition-colors">필수 금융 용어</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-1 min-w-[1.25rem] text-blue-500"><CheckCircle2 size={18} /></div>
                  <div>
                    <strong className="block text-slate-900 text-sm mb-1">복리 (Compound Interest)</strong>
                    <span className="text-slate-500 text-sm leading-snug block">이자에도 이자가 붙는 마법. <span className="bg-blue-100 px-1 rounded text-blue-800 font-bold">시간</span>이 핵심 변수입니다.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 min-w-[1.25rem] text-blue-500"><CheckCircle2 size={18} /></div>
                  <div>
                    <strong className="block text-slate-900 text-sm mb-1">신용점수 (Credit Score)</strong>
                    <span className="text-slate-500 text-sm leading-snug block">점수가 높을수록 <span className="bg-blue-100 px-1 rounded text-blue-800 font-bold">대출 이자</span>가 저렴해집니다.</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className="bg-slate-50 rounded-[2rem] p-8 border border-slate-100 hover:border-purple-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group animate-on-scroll delay-300">
              <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-purple-600 mb-6 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                <TrendingUp size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-purple-700 transition-colors">투자의 핵심 원칙</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-1 min-w-[1.25rem] text-purple-500"><CheckCircle2 size={18} /></div>
                  <div>
                    <strong className="block text-slate-900 text-sm mb-1">분산 투자</strong>
                    <span className="text-slate-500 text-sm leading-snug block">계란을 한 바구니에 담지 마세요. <span className="bg-purple-100 px-1 rounded text-purple-800 font-bold">리스크 관리</span>가 최우선입니다.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 min-w-[1.25rem] text-purple-500"><CheckCircle2 size={18} /></div>
                  <div>
                    <strong className="block text-slate-900 text-sm mb-1">시드머니 (Seed Money)</strong>
                    <span className="text-slate-500 text-sm leading-snug block">투자의 효율을 위해 최소 <span className="bg-purple-100 px-1 rounded text-purple-800 font-bold">1천만 원</span>부터 모으세요.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CONNECTOR: Concepts -> System */}
      <SectionConnector label="Step 3. 실전 적용 예시" />

      {/* 
        4. The 4-Account System (Actionable Tip)
        - Phase 03: Practice
      */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-0 left-0 w-full h-full bg-emerald-50/30 skew-y-3 transform origin-top-left -z-10"></div>

        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center md:text-left mb-12 animate-on-scroll">
            <span className="text-emerald-600 font-bold tracking-wider text-xs uppercase mb-2 block">Phase 03</span>
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">
                 실전 돈 관리: <span className="text-emerald-600">'4개의 통장'</span> 시스템 구축
              </h2>
              <span className="hidden md:inline-block px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-full">실전편</span>
            </div>
            <p className="text-slate-600 text-lg mt-4 max-w-2xl leading-relaxed">
              의지력에 기대지 마세요. <br className="md:hidden"/> 
              월급이 들어오자마자 알아서 흩어지는 <strong>자동화된 시스템</strong>을 만드는 것이 핵심입니다.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12">
            <div className="flex-1 space-y-4">
              {/* Account 1 */}
              <div className="group flex items-start gap-5 p-5 bg-white rounded-2xl border border-slate-200 shadow-sm hover:border-blue-300 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 animate-on-scroll delay-100 cursor-default">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <Briefcase size={20} strokeWidth={2.5} />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-slate-900 text-lg mb-2 group-hover:text-blue-700 transition-colors">급여 통장 (Hub)</h3>
                  <div className="space-y-1">
                    <p className="text-sm text-slate-600"><span className="font-bold text-slate-800">역할:</span> 모든 수입 집결 및 고정비 납부</p>
                    <p className="text-sm text-slate-500">통신비, 월세, 보험료 등 <span className="underline decoration-blue-200 decoration-2">고정 지출만</span> 여기서 빠져나가게 하세요.</p>
                  </div>
                </div>
              </div>

              {/* Account 2 */}
              <div className="group flex items-start gap-5 p-5 bg-white rounded-2xl border border-slate-200 shadow-sm hover:border-emerald-300 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 animate-on-scroll delay-200 cursor-default">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                  <PiggyBank size={20} strokeWidth={2.5} />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-slate-900 text-lg mb-2 group-hover:text-emerald-700 transition-colors">투자/저축 통장</h3>
                  <div className="space-y-1">
                    <p className="text-sm text-slate-600"><span className="font-bold text-slate-800">역할:</span> 강제 저축 (선저축)</p>
                    <p className="text-sm text-slate-500">월급 입금 다음 날, <span className="underline decoration-emerald-200 decoration-2">자동 이체</span>로 적금이나 펀드 계좌로 돈을 옮기세요.</p>
                  </div>
                </div>
              </div>

              {/* Account 3 */}
              <div className="group flex items-start gap-5 p-5 bg-white rounded-2xl border border-slate-200 shadow-sm hover:border-amber-300 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 animate-on-scroll delay-300 cursor-default">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 group-hover:bg-amber-600 group-hover:text-white transition-colors duration-300">
                  <ShoppingBag size={20} strokeWidth={2.5} />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-slate-900 text-lg mb-2 group-hover:text-amber-700 transition-colors">소비 통장 (체크카드)</h3>
                  <div className="space-y-1">
                    <p className="text-sm text-slate-600"><span className="font-bold text-slate-800">역할:</span> 변동 지출 관리</p>
                    <p className="text-sm text-slate-500">식비, 쇼핑 등 생활비는 <span className="underline decoration-amber-200 decoration-2">정해진 예산</span> 안에서만 사용하세요.</p>
                  </div>
                </div>
              </div>

               {/* Account 4 */}
               <div className="group flex items-start gap-5 p-5 bg-white rounded-2xl border border-slate-200 shadow-sm hover:border-slate-400 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 animate-on-scroll delay-400 cursor-default">
                <div className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-600 flex items-center justify-center shrink-0 group-hover:bg-slate-700 group-hover:text-white transition-colors duration-300">
                  <Safe size={20} strokeWidth={2.5} />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-slate-900 text-lg mb-2 group-hover:text-slate-700 transition-colors">비상금 통장 (CMA)</h3>
                  <div className="space-y-1">
                    <p className="text-sm text-slate-600"><span className="font-bold text-slate-800">역할:</span> 예비 자금 보관</p>
                    <p className="text-sm text-slate-500">남은 돈이나 보너스는 모두 이곳에 모아 <span className="underline decoration-slate-300 decoration-2">예기치 못한 지출</span>에 대비하세요.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Example */}
            <div className="w-full md:w-1/2 bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 relative animate-on-scroll delay-500 hover:shadow-2xl transition-shadow duration-500">
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-yellow-400/20 rounded-full blur-2xl animate-pulse"></div>
              
              <div className="flex items-center justify-center gap-2 mb-6">
                <Lightbulb className="text-yellow-500" size={20} />
                <h3 className="font-bold text-slate-900 text-center">월급(250만원) 배분 예시</h3>
              </div>
              
              <div className="flex flex-col gap-4 items-center">
                <div className="w-full p-5 bg-blue-50 rounded-2xl border border-blue-100 text-center shadow-sm relative group hover:border-blue-300 transition-colors">
                  <div className="absolute top-1/2 -left-3 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold -translate-y-1/2 shadow-lg group-hover:scale-110 transition-transform">IN</div>
                  <span className="block text-xs font-bold text-blue-500 mb-1 tracking-wider">INCOME (수입)</span>
                  <span className="font-black text-slate-800 text-xl">250만 원</span>
                </div>
                
                <div className="h-6 w-px border-l-2 border-dashed border-slate-300"></div>
                
                <div className="grid grid-cols-2 gap-3 w-full">
                  <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100 text-center shadow-sm hover:border-emerald-300 hover:-translate-y-1 transition-all">
                     <div className="flex items-center justify-center gap-1 mb-1">
                       <PiggyBank size={14} className="text-emerald-500"/>
                       <span className="text-[11px] font-bold text-emerald-600">저축 (40%)</span>
                     </div>
                     <span className="font-bold text-slate-700 text-lg">100만</span>
                  </div>
                  <div className="p-4 bg-amber-50 rounded-2xl border border-amber-100 text-center shadow-sm hover:border-amber-300 hover:-translate-y-1 transition-all">
                     <div className="flex items-center justify-center gap-1 mb-1">
                       <CreditCard size={14} className="text-amber-500"/>
                       <span className="text-[11px] font-bold text-amber-600">소비 (40%)</span>
                     </div>
                     <span className="font-bold text-slate-700 text-lg">100만</span>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 text-center shadow-sm col-span-2 hover:border-slate-300 hover:-translate-y-1 transition-all">
                     <div className="flex items-center justify-center gap-1 mb-1">
                       <Coins size={14} className="text-slate-500"/>
                       <span className="text-[11px] font-bold text-slate-600">고정비 (20%)</span>
                     </div>
                     <span className="font-bold text-slate-700 text-lg">50만</span>
                  </div>
                </div>
                
                <div className="h-6 w-px border-l-2 border-dashed border-slate-300"></div>
                
                <div className="w-full p-4 bg-gray-50 rounded-xl border border-dashed border-gray-300 text-center hover:bg-gray-100 transition-colors">
                  <span className="text-xs text-gray-500 block mb-1">남는 돈은 모두 여기로</span>
                  <div className="flex items-center justify-center gap-2 text-slate-700 font-bold">
                    <Target size={16} className="text-red-500 animate-pulse" />
                    비상금 통장 (CMA)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONNECTOR: System -> Hook */}
      <SectionConnector label="Next Step" />

      {/* 
        5. Internal Link (Hook) 
      */}
      <section className="py-16 bg-emerald-900 text-emerald-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-4 max-w-4xl relative z-10 text-center animate-on-scroll">
          <h2 className="text-2xl md:text-3xl font-black mb-6">
            "금융 기초 다음 단계: 실전 투자 시작하기"
          </h2>
          <p className="text-emerald-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            돈 관리 시스템이 갖춰졌다면, 이제는 돈이 나를 위해 일하게 만들 차례입니다. <br className="hidden md:block"/>
            초보자도 잃지 않는 안전한 투자법을 확인해보세요.
          </p>
          <Link 
            to="/investment-guide" 
            className="inline-flex items-center gap-2 bg-white text-emerald-900 font-bold px-8 py-4 rounded-full hover:bg-emerald-50 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-emerald-900/50"
          >
            투자 기초 가이드 바로가기 <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* 
        6. Article List 
      */}
      <section id="latest-articles" className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl animate-on-scroll">
          <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900">금융 기초 추천 칼럼</h2>
              <p className="text-slate-500 mt-2 font-medium">읽으면 돈이 되는 기초 금융 지식</p>
            </div>
            <Link to="/finance" className="hidden md:flex items-center text-sm font-bold text-emerald-600 hover:underline">
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