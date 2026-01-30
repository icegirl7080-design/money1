import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Landmark,
  ArrowRight,
  ShieldCheck,
  ArrowDown,
  Percent,
  TrendingUp,
  Info,
  ListChecks,
  HelpCircle,
  ShieldAlert,
  Zap,
  Target,
  Calculator,
  AlertCircle
} from 'lucide-react';
import { INITIAL_ARTICLES } from '../constants';
import { Category } from '../types';
import { ArticleCard } from '../components/ArticleCard';
import { SEO } from '../components/SEO';

export const LoanGuide: React.FC = () => {
  const relatedArticles = useMemo(() => {
    return INITIAL_ARTICLES
      .filter(article => article.category === Category.LOAN)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, []);

  return (
    <main className="flex-grow bg-slate-50 font-sans text-slate-900 selection:bg-blue-100 leading-relaxed">
      <SEO 
        title="대출·신용 가이드 | 초보자를 위한 안전한 금융 활용 전략"
        description="대출 기초 개념부터 신용점수 900점 관리법, DSR·LTV 한도 계산 원리까지. 금융 초보자가 반드시 알아야 할 대출의 모든 정보를 머니와이즈가 상세히 안내합니다."
        keywords={['대출 기초', '신용점수 관리', 'DSR 계산법', 'LTV 뜻', '1금융권 대출 조건', '비상금대출 추천', '신용등급 올리는 법']}
      />

      {/* Hero Section */}
      <section className="relative bg-white pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden border-b border-slate-100">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50/50 to-transparent pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10 max-w-6xl animate-on-scroll">
          <div className="flex flex-col md:items-center md:text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600 text-white text-xs font-bold mb-8 shadow-xl shadow-blue-200 uppercase tracking-widest">
              <BookOpen size={14} />
              <span>Comprehensive Loan Guide</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black leading-[1.15] mb-8 break-keep text-slate-900">
              똑똑하게 빌리고<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500">
                현명하게 관리하는 대출의 기술
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-500 leading-relaxed font-medium mb-10 break-keep">
              대출은 단순히 갚아야 할 빚이 아닙니다. 자본주의 경제 시스템 속에서 <br className="hidden md:block" />
              나의 <strong>신용(Credit)</strong>이라는 무형의 자산을 현금 흐름으로 전환하는 고도의 경제 활동입니다. <br className="hidden md:block" />
              금융 문맹에서 벗어나 대출의 주인으로 거듭나기 위한 로드맵을 시작하세요.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a href="#definition" className="px-10 py-4 bg-slate-900 text-white font-bold rounded-2xl shadow-xl hover:bg-slate-800 transition-all hover:-translate-y-1 text-center">
                기초부터 배우기
              </a>
              <a href="#latest-articles" className="px-10 py-4 bg-white text-blue-600 border border-blue-100 font-bold rounded-2xl shadow-sm hover:bg-blue-50 transition-all text-center">
                최신 정보 읽기
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section: Fundamental Definitions */}
      <section id="definition" className="py-24 bg-white border-b border-slate-100 scroll-mt-20">
        <div className="container mx-auto px-4 max-w-4xl animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-10 text-center">대출과 신용의 본질</h2>
          
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-blue-600 flex items-center gap-2">
                <Target size={20} /> 대출(Loan)이란?
              </h3>
              <p className="text-slate-600 leading-8">
                대출은 금융기관으로부터 자금을 빌리는 행위입니다. 하지만 본질적으로는 <strong>'미래의 소득을 현재로 당겨오는 것'</strong>입니다. 지금 당장 자본이 부족하더라도 주거 안정을 꾀하거나 투자를 통해 더 큰 이익을 낼 수 있는 '시간을 사는 행위'이기도 합니다.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-blue-600 flex items-center gap-2">
                <ShieldCheck size={20} /> 신용(Credit)이란?
              </h3>
              <p className="text-slate-600 leading-8">
                금융 시장에서 신용은 곧 <strong>'약속을 지킬 수 있다는 증거'</strong>입니다. 과거의 금융 거래 이력을 통해 당신이 빌린 돈을 제때 갚을 확률을 수치화한 것이 신용점수입니다. 이 점수가 높을수록 은행은 당신에게 더 많은 돈을, 더 낮은 이자로 빌려줍니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Deep Dive into Credit Score */}
      <section id="credit-score" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="container mx-auto px-4 max-w-4xl animate-on-scroll">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center font-black text-xl shadow-lg shadow-blue-100">01</div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">신용점수 900점의 벽을 넘는 법</h2>
          </div>

          <div className="prose prose-lg prose-slate max-w-none text-slate-600 leading-8 mb-12">
            <p>
              우리나라는 1,000점 만점 제도를 사용합니다. 보통 <strong>900점 이상</strong>이면 1금융권 우량 대출 대상자가 됩니다. 신용점수는 '현재의 부'가 아니라 '거래의 성실함'을 평가한다는 점을 명심해야 합니다. 억대 연봉자라도 연체가 잦으면 신용점수는 낮을 수 있습니다.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm relative">
              <div className="absolute -top-3 left-8 bg-emerald-500 text-white px-4 py-1 rounded-full text-xs font-bold">Positive Factors</div>
              <h3 className="text-xl font-bold text-slate-900 mb-6 mt-2">점수가 오르는 활동</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <div className="mt-1 bg-emerald-100 text-emerald-600 p-1 rounded-full shrink-0"><TrendingUp size={14} /></div>
                  <div>
                    <strong className="text-slate-800 block">통신비/공공요금 성실 납부</strong>
                    <span className="text-sm">6개월 이상 연체 없이 납부한 내역을 신용평가사에 등록하면 즉시 가점을 받습니다.</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="mt-1 bg-emerald-100 text-emerald-600 p-1 rounded-full shrink-0"><TrendingUp size={14} /></div>
                  <div>
                    <strong className="text-slate-800 block">신용카드 한도의 30% 사용</strong>
                    <span className="text-sm">한도를 꽉 채워 쓰는 것보다, 넉넉한 한도 내에서 적정 금액만 꾸준히 쓰는 것이 신뢰도를 높입니다.</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm relative">
              <div className="absolute -top-3 left-8 bg-red-500 text-white px-4 py-1 rounded-full text-xs font-bold">Critical Risks</div>
              <h3 className="text-xl font-bold text-slate-900 mb-6 mt-2">점수가 깎이는 활동</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <div className="mt-1 bg-red-100 text-red-600 p-1 rounded-full shrink-0"><ShieldAlert size={14} /></div>
                  <div>
                    <strong className="text-slate-800 block">단기 연체 (5영업일 이상)</strong>
                    <span className="text-sm">10만 원 이상의 금액을 5일만 연체해도 전 금융권에 공유되어 점수가 폭락합니다.</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="mt-1 bg-red-100 text-red-600 p-1 rounded-full shrink-0"><ShieldAlert size={14} /></div>
                  <div>
                    <strong className="text-slate-800 block">잦은 카드론/현금서비스</strong>
                    <span className="text-sm">현금이 급해 카드 대출을 쓰는 것은 "당장 유동성 위기가 있다"는 신호로 해석됩니다.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Financial Tiers & Safety */}
      <section id="loan-types" className="py-24 bg-white scroll-mt-20">
        <div className="container mx-auto px-4 max-w-4xl animate-on-scroll">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 bg-sky-500 text-white rounded-2xl flex items-center justify-center font-black text-xl shadow-lg shadow-sky-100">02</div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">금융권의 위계와 안전선</h2>
          </div>

          <p className="text-slate-600 leading-8 mb-12">
            대출을 어디서 받느냐에 따라 나의 금융 인생이 바뀝니다. 무조건 <strong>1금융권부터</strong> 두드리는 것이 원칙입니다. 급하다고 순서를 건너뛰면 나중에 더 좋은 조건의 대출을 받을 기회가 영구적으로 사라질 수 있습니다.
          </p>

          <div className="space-y-12">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-1/3 bg-blue-600 text-white p-8 rounded-3xl shrink-0">
                <h3 className="text-2xl font-bold mb-4">제1금융권</h3>
                <p className="text-sm opacity-90 leading-relaxed mb-6">시중은행, 인터넷은행, 지방은행 등</p>
                <div className="text-3xl font-black mb-1">4.0% ~</div>
                <div className="text-xs uppercase tracking-tighter opacity-70">Average Interest Rate</div>
              </div>
              <div className="flex-grow">
                <h4 className="text-xl font-bold text-slate-900 mb-4">가장 먼저 방문해야 할 안전지대</h4>
                <p className="text-slate-600 mb-6 text-sm md:text-base">심사가 가장 까다롭지만, 금리가 가장 저렴하고 신용점수 하락이 거의 없습니다. 최근에는 직장인이 아니어도 1금융권에서 '비상금 대출'을 받을 수 있는 길이 열려 있으니 앱을 통해 먼저 한도를 조회하세요.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-lg">#카카오뱅크</span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-lg">#토스뱅크</span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-lg">#시중은행</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-1/3 bg-slate-800 text-white p-8 rounded-3xl shrink-0">
                <h3 className="text-2xl font-bold mb-4">제2금융권</h3>
                <p className="text-sm opacity-90 leading-relaxed mb-6">저축은행, 보험사, 카드사, 캐피탈</p>
                <div className="text-3xl font-black mb-1">9.0% ~</div>
                <div className="text-xs uppercase tracking-tighter opacity-70">Average Interest Rate</div>
              </div>
              <div className="flex-grow">
                <h4 className="text-xl font-bold text-slate-900 mb-4">유동성이 필요할 때의 전략적 대안</h4>
                <p className="text-slate-600 mb-6 text-sm md:text-base">1금융권 한도가 꽉 찼을 때 선택합니다. 금리가 높고 신용점수 하락 폭이 1금융권보다 큽니다. 하지만 대부업체로 넘어가기 전의 최후의 보루입니다. 이용 후 상환 시 신용점수 회복에 시간이 걸립니다.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-lg">#보험사대출</span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-lg">#저축은행</span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-lg">#카드론</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Understanding Limits (DSR/LTV/DTI) */}
      <section className="py-24 bg-blue-900 text-white scroll-mt-20 overflow-hidden relative">
        <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
          <Calculator size={300} />
        </div>
        
        <div className="container mx-auto px-4 max-w-4xl animate-on-scroll relative z-10">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 bg-white text-blue-900 rounded-2xl flex items-center justify-center font-black text-xl shadow-lg">03</div>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight">대출의 한도, 어떻게 결정되나?</h2>
          </div>

          <p className="text-blue-100 leading-8 mb-16 text-lg">
            "내 집 마련을 위해 5억이 필요한데, 왜 은행은 3억만 빌려주나요?" <br/>
            그 이유는 국가가 정한 <strong>3가지 규제 장치</strong> 때문입니다. 이 개념을 모르면 자금 계획은 물거품이 됩니다.
          </p>

          <div className="space-y-12">
            <div className="group border-l-4 border-white/20 pl-8 hover:border-white transition-colors">
              <h4 className="text-2xl font-bold mb-4 flex items-center gap-3">
                DSR (총부채원리금상환비율)
                <span className="text-xs font-normal bg-white/10 px-2 py-1 rounded">가장 강력한 규제</span>
              </h4>
              <p className="text-blue-200 leading-relaxed">
                당신이 1년 동안 갚아야 할 <strong>모든 대출의 원금과 이자</strong>를 합친 금액이 연 소득의 일정 비율(보통 40%)을 넘지 못하게 합니다. 
                즉, 연봉이 5,000만 원이라면 1년에 상환액이 2,000만 원을 넘는 수준의 대출은 불가능합니다. 자동차 할부나 카드 할부도 여기에 포함되니 주의하세요.
              </p>
            </div>

            <div className="group border-l-4 border-white/20 pl-8 hover:border-white transition-colors">
              <h4 className="text-2xl font-bold mb-4">LTV (주택담보대출비율)</h4>
              <p className="text-blue-200 leading-relaxed">
                집값 대비 빌릴 수 있는 돈의 비율입니다. 예를 들어 10억짜리 아파트에 LTV가 70%라면 최대 7억까지 빌릴 수 있습니다. 
                하지만 내 DSR 한도가 3억뿐이라면, 집값이 아무리 비싸도 결국 3억만 빌릴 수 있게 됩니다.
              </p>
            </div>
            
            <div className="group border-l-4 border-white/20 pl-8 hover:border-white transition-colors">
              <h4 className="text-2xl font-bold mb-4">DTI (총부채상환비율)</h4>
              <p className="text-blue-200 leading-relaxed">
                DSR과 비슷하지만, 주택 대출 외의 다른 대출은 <strong>'이자'</strong>만 합산합니다. 
                과거에는 DTI를 주로 봤으나, 현재는 훨씬 엄격한 DSR이 적용되므로 DSR 관리가 대출 한도의 핵심입니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Loan Application Lifecycle (New Section for depth) */}
      <section className="py-24 bg-white scroll-mt-20">
        <div className="container mx-auto px-4 max-w-4xl animate-on-scroll">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">실전 대출 실행 4단계</h2>
            <p className="text-slate-500 font-medium">당황하지 않고 최고의 조건을 찾는 프로세스</p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-slate-100 -translate-x-1/2"></div>
            
            <div className="space-y-16 relative">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2 text-right hidden md:block">
                  <h4 className="text-xl font-bold text-slate-900">준비: 나의 상태 파악</h4>
                  <p className="text-sm text-slate-500 mt-2">KCB/NICE 앱을 통해 신용점수를 확인하고,<br/>기존 부채 현황을 정리합니다.</p>
                </div>
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold relative z-10 shadow-lg">1</div>
                <div className="md:w-1/2 md:hidden">
                   <h4 className="text-xl font-bold text-slate-900">준비: 나의 상태 파악</h4>
                   <p className="text-sm text-slate-500 mt-2">신용점수 확인 및 기존 부채 정리</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                <div className="md:w-1/2 text-left hidden md:block">
                  <h4 className="text-xl font-bold text-slate-900">탐색: 금리 비교</h4>
                  <p className="text-sm text-slate-500 mt-2">핀다, 카카오페이 등 대출 비교 플랫폼을 통해<br/>여러 금융기관의 예상 한도와 금리를 비교합니다.</p>
                </div>
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold relative z-10 shadow-lg">2</div>
                <div className="md:w-1/2 md:hidden">
                   <h4 className="text-xl font-bold text-slate-900">탐색: 금리 비교</h4>
                   <p className="text-sm text-slate-500 mt-2">비교 플랫폼을 활용한 최적의 조건 탐색</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2 text-right hidden md:block">
                  <h4 className="text-xl font-bold text-slate-900">신청: 서류 제출</h4>
                  <p className="text-sm text-slate-500 mt-2">비대면 스크래핑 서비스를 활용하거나<br/>필요 서류를 지참하여 은행에 신청합니다.</p>
                </div>
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold relative z-10 shadow-lg">3</div>
                <div className="md:w-1/2 md:hidden">
                   <h4 className="text-xl font-bold text-slate-900">신청: 서류 제출</h4>
                   <p className="text-sm text-slate-500 mt-2">본인 인증 및 필요 서류(소득증빙 등) 제출</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                <div className="md:w-1/2 text-left hidden md:block">
                  <h4 className="text-xl font-bold text-slate-900">실행 및 사후 관리</h4>
                  <p className="text-sm text-slate-500 mt-2">대출금 수령 후 자동이체를 설정하고,<br/>정기적으로 신용점수를 모니터링합니다.</p>
                </div>
                <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold relative z-10 shadow-lg"><Zap size={18} /></div>
                <div className="md:w-1/2 md:hidden">
                   <h4 className="text-xl font-bold text-slate-900">실행 및 사후 관리</h4>
                   <p className="text-sm text-slate-500 mt-2">상환 계획 수립 및 자동이체 설정</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Tips / FAQ Hub */}
      <section className="py-24 bg-slate-50 scroll-mt-20">
        <div className="container mx-auto px-4 max-w-4xl animate-on-scroll">
          <div className="bg-white rounded-3xl p-10 md:p-16 border border-slate-200 shadow-soft">
            <h2 className="text-3xl font-black text-slate-900 mb-10 flex items-center gap-3">
              <HelpCircle className="text-blue-600" /> 대출 전 자주 묻는 질문
            </h2>

            <div className="space-y-8">
              <div className="group">
                <h4 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <span className="text-blue-600">Q.</span> 대출 상담만 받아도 신용점수가 떨어지나요?
                </h4>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                  <strong>아니요.</strong> 과거에는 조회만으로 점수가 하락하기도 했지만, 현재는 단순히 한도와 금리를 조회하는 행위는 신용점수에 전혀 영향을 주지 않습니다. 안심하고 비교 플랫폼을 활용하세요.
                </p>
              </div>

              <div className="group">
                <h4 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <span className="text-blue-600">Q.</span> 마이너스 통장, 안 써도 빚으로 잡히나요?
                </h4>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                  <strong>네, 그렇습니다.</strong> 마이너스 통장은 실제 사용하지 않았더라도 약정된 한도 전액이 '부채'로 간주됩니다. 따라서 다른 큰 대출을 앞두고 있다면 불필요한 마이너스 통장 한도는 줄이거나 해지하는 것이 유리합니다.
                </p>
              </div>

              <div className="group">
                <h4 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <span className="text-blue-600">Q.</span> 중도상환수수료가 무엇인가요?
                </h4>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                  약정된 기간보다 일찍 돈을 갚을 때 은행이 받는 '중도 해지 위약금'입니다. 보통 0.5%~1.5% 수준이며, 대출 실행 후 3년이 지나면 면제되는 경우가 많습니다. 자금 계획 시 이 비용도 반드시 고려해야 합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles Hub */}
      <section id="latest-articles" className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-6xl animate-on-scroll">
          <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900">최신 대출 전략 칼럼</h2>
              <p className="text-slate-500 mt-3 font-medium">매일 업데이트되는 전문가의 금융 분석</p>
            </div>
            <Link to="/loan" className="hidden md:flex items-center text-sm font-bold text-blue-600 hover:underline">
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

      {/* Final Warning / Footer Note */}
      <section className="py-12 bg-red-50 border-t border-red-100">
        <div className="container mx-auto px-4 max-w-4xl flex items-start gap-4 text-red-800">
          <AlertCircle className="shrink-0 mt-1" size={20} />
          <div className="text-xs md:text-sm leading-relaxed font-medium">
             <p className="font-bold mb-1">안내 및 주의사항</p>
             본 가이드는 일반적인 금융 지식 제공을 목적으로 하며, 실제 대출 조건은 개인의 신용도와 금융기관의 정책에 따라 상이할 수 있습니다. 
             과도한 빚은 개인과 가정에 큰 고통을 줄 수 있습니다. 대출 실행 전 반드시 본인의 상환 능력을 냉정하게 평가하시기 바랍니다. 
             머니와이즈는 금융 상품 직접 판매자가 아니며, 어떠한 경우에도 불법 사금융 이용을 권장하지 않습니다.
          </div>
        </div>
      </section>
    </main>
  );
};