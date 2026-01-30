import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Landmark,
  CreditCard,
  ArrowRight,
  ShieldCheck,
  Ban,
  ArrowDown,
  Percent,
  TrendingUp,
  Info,
  ListChecks,
  HelpCircle,
  ShieldAlert
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
        title="대출·신용 가이드 | 똑똑하게 빌리고 안전하게 갚는 법"
        description="대출 기초 지식부터 신용점수 관리 비법, DSR·LTV 용어 풀이까지. 초보자를 위한 안전한 대출 활용 전략과 1금융권 비상금 대출 정보를 머니와이즈가 완벽 정리해 드립니다."
        keywords={['대출 기초', '신용점수 올리는 법', '1금융권 대출 조건', 'DSR 계산', 'LTV 뜻', '비상금대출', '신용등급 관리']}
      />

      {/* Hero Section */}
      <section className="relative bg-white pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden border-b border-slate-100">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50/50 to-transparent pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10 max-w-6xl animate-on-scroll">
          <div className="flex flex-col md:items-center md:text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600 text-white text-xs font-bold mb-8 shadow-xl shadow-blue-200 uppercase tracking-widest">
              <BookOpen size={14} />
              <span>Loan & Credit Mastery</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black leading-[1.15] mb-8 break-keep text-slate-900">
              대출은 빚이 아닌 전략이다:<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500">
                안전한 자금 융통과 신용 관리
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-500 leading-relaxed font-medium mb-10 break-keep">
              "대출은 무조건 피해야 한다"는 생각은 기회를 좁힐 뿐입니다. <br className="hidden md:block" />
              자본주의 사회에서 대출은 자산 증식을 위한 강력한 레버리지입니다. <br className="hidden md:block" />
              감당할 수 있는 범위 안에서 <strong>신용점수</strong>를 무기로 활용하는 법을 안내합니다.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a href="#understanding" className="px-10 py-4 bg-slate-900 text-white font-bold rounded-2xl shadow-xl hover:bg-slate-800 transition-all hover:-translate-y-1 text-center">
                가이드 정독하기
              </a>
              <a href="#latest-articles" className="px-10 py-4 bg-white text-blue-600 border border-blue-100 font-bold rounded-2xl shadow-sm hover:bg-blue-50 transition-all text-center">
                최신 대출 정보
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation / Internal Hub */}
      <section className="py-12 bg-slate-50 border-b border-slate-200/60">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a href="#credit-score" className="group p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all flex items-center gap-4">
              <div className="bg-blue-50 text-blue-600 p-3 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <TrendingUp size={24} />
              </div>
              <span className="font-bold text-slate-800">신용점수 관리 비법</span>
            </a>
            <a href="#loan-types" className="group p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all flex items-center gap-4">
              <div className="bg-sky-50 text-sky-600 p-3 rounded-xl group-hover:bg-sky-600 group-hover:text-white transition-colors">
                <Landmark size={24} />
              </div>
              <span className="font-bold text-slate-800">금융권별 대출 특징</span>
            </a>
            <a href="#repayment" className="group p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all flex items-center gap-4">
              <div className="bg-indigo-50 text-indigo-600 p-3 rounded-xl group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                <ListChecks size={24} />
              </div>
              <span className="font-bold text-slate-800">안전한 상환 전략</span>
            </a>
          </div>
        </div>
      </section>

      {/* Content Section 1: Understanding Credit */}
      <section id="understanding" className="py-24 bg-white scroll-mt-20">
        <div className="container mx-auto px-4 max-w-4xl animate-on-scroll">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center font-black text-xl shadow-lg shadow-blue-100">01</div>
            <h2 id="credit-score" className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">신용점수가 곧 자산입니다</h2>
          </div>

          <div className="prose prose-lg prose-slate max-w-none text-slate-600 leading-8">
            <p className="mb-8">
              대출 심사의 시작과 끝은 <strong>신용점수</strong>입니다. 우리나라는 KCB(올크레딧)와 NICE 두 신용평가사의 점수를 기반으로 등급을 산정합니다. 
              단 1점 차이로 대출 승인 여부가 갈릴 뿐만 아니라, 수백만 원의 이자 비용이 차이 날 수 있습니다.
            </p>

            <div className="grid md:grid-cols-2 gap-8 my-12">
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <TrendingUp className="text-blue-600" size={20} /> 점수를 올리는 요소
                </h3>
                <ul className="space-y-3 text-sm font-medium">
                  <li className="flex gap-2"><span className="text-blue-500">•</span> 통신비, 공공요금 6개월 이상 성실 납부</li>
                  <li className="flex gap-2"><span className="text-blue-500">•</span> 적정한 신용카드 사용 (한도의 30~50%)</li>
                  <li className="flex gap-2"><span className="text-blue-500">•</span> 체크카드 꾸준한 사용 이력</li>
                  <li className="flex gap-2"><span className="text-blue-500">•</span> 대출 원금의 성실한 상환</li>
                </ul>
              </div>
              <div className="bg-red-50/30 p-8 rounded-3xl border border-red-50">
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <ShieldAlert className="text-red-500" size={20} /> 점수를 깎는 요소
                </h3>
                <ul className="space-y-3 text-sm font-medium text-slate-600">
                  <li className="flex gap-2"><span className="text-red-400">•</span> 10만 원 이상의 소액이라도 5일 이상 연체</li>
                  <li className="flex gap-2"><span className="text-red-400">•</span> 잦은 현금서비스 및 카드론 이용</li>
                  <li className="flex gap-2"><span className="text-red-400">•</span> 리볼빙 서비스 이용 (부채 이월)</li>
                  <li className="flex gap-2"><span className="text-red-400">•</span> 짧은 기간 내 과도한 대출 조회</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section 2: Loan Types */}
      <section id="loan-types" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="container mx-auto px-4 max-w-4xl animate-on-scroll">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-12 bg-sky-500 text-white rounded-2xl flex items-center justify-center font-black text-xl shadow-lg shadow-sky-100">02</div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">나에게 맞는 금융권 찾기</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:border-blue-200 transition-colors group">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">제1금융권 (시중은행)</h3>
                <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-lg text-xs font-bold">낮은 금리 / 높은 신뢰</span>
              </div>
              <p className="text-slate-600 mb-4">국민, 신한, 우리은행 및 카카오뱅크, 토스뱅크 등이 해당합니다. 심사는 까다롭지만 금리가 가장 낮고 신용점수 하락 폭이 적습니다.</p>
              <div className="flex items-center gap-4 text-sm font-bold text-slate-400">
                <span className="flex items-center gap-1"><Percent size={14} /> 금리: 연 4%~8%</span>
                <span className="flex items-center gap-1 text-emerald-600"><ShieldCheck size={14} /> 신용 영향: 낮음</span>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:border-sky-200 transition-colors group">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors">제2금융권 (비은행권)</h3>
                <span className="bg-sky-50 text-sky-600 px-3 py-1 rounded-lg text-xs font-bold">빠른 승인 / 보통 금리</span>
              </div>
              <p className="text-slate-600 mb-4">저축은행, 카드사, 캐피탈 등이 해당합니다. 1금융권에서 한도가 부족하거나 승인이 나지 않을 때 대안으로 선택합니다.</p>
              <div className="flex items-center gap-4 text-sm font-bold text-slate-400">
                <span className="flex items-center gap-1"><Percent size={14} /> 금리: 연 8%~18%</span>
                <span className="flex items-center gap-1 text-amber-600"><Info size={14} /> 신용 영향: 보통</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section 3: Core Terminology */}
      <section className="py-24 bg-white scroll-mt-20">
        <div className="container mx-auto px-4 max-w-4xl animate-on-scroll">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-12 bg-indigo-500 text-white rounded-2xl flex items-center justify-center font-black text-xl shadow-lg shadow-indigo-100">03</div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">대출 한도를 결정하는 3요소</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <h4 className="text-indigo-600 font-black text-xl mb-2">DSR</h4>
              <p className="text-xs text-slate-500 mb-3 font-bold uppercase">Debt Service Ratio</p>
              <p className="text-sm text-slate-600 leading-relaxed"><strong>총부채원리금상환비율.</strong> 모든 대출의 원금과 이자를 합쳐 내 연봉의 일정 수준(보통 40%)을 넘지 못하게 제한합니다.</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <h4 className="text-indigo-600 font-black text-xl mb-2">LTV</h4>
              <p className="text-xs text-slate-500 mb-3 font-bold uppercase">Loan To Value</p>
              <p className="text-sm text-slate-600 leading-relaxed"><strong>주택담보대출비율.</strong> 집값의 몇 %까지 빌릴 수 있는지를 결정합니다. 지역과 정책에 따라 달라집니다.</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <h4 className="text-indigo-600 font-black text-xl mb-2">DTI</h4>
              <p className="text-xs text-slate-500 mb-3 font-bold uppercase">Debt To Income</p>
              <p className="text-sm text-slate-600 leading-relaxed"><strong>총부채상환비율.</strong> 주택대출 원리금과 다른 대출의 '이자'만 합산하여 소득 대비 상환 능력을 봅니다.</p>
            </div>
          </div>
          
          <div className="bg-indigo-900 rounded-[2rem] p-8 md:p-12 text-white relative overflow-hidden">
             <div className="absolute top-0 right-0 p-8 opacity-10">
               <HelpCircle size={120} />
             </div>
             <h3 className="text-2xl font-bold mb-4 relative z-10">왜 한도가 줄어드나요?</h3>
             <p className="text-indigo-100 mb-0 relative z-10 leading-relaxed">
               정부의 가계부채 관리 정책으로 인해 <strong>DSR 규제</strong>가 강화되고 있습니다. 
               이는 무리한 영끌을 막기 위한 안전장치이지만, 실질적인 대출 한도를 줄이는 주된 원인이 됩니다. 
               신용카드 할부나 자동차 할부도 부채로 잡혀 DSR 한도를 깎을 수 있으니 유의하세요.
             </p>
          </div>
        </div>
      </section>

      {/* Action Plan: Repayment Strategy */}
      <section id="repayment" className="py-24 bg-slate-900 scroll-mt-20">
        <div className="container mx-auto px-4 max-w-4xl animate-on-scroll">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">안전한 대출 이용 3원칙</h2>
            <p className="text-slate-400 font-medium">잘 빌리는 것보다 잘 갚는 것이 실력입니다.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-2xl mb-6 shadow-lg shadow-blue-900/40">1</div>
              <h4 className="text-xl font-bold text-white mb-3">상환 방식 결정</h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                원리금균등, 원금균등, 만기일시상환 중 나의 현금 흐름에 가장 적합한 방식을 선택하세요.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-2xl mb-6 shadow-lg shadow-blue-900/40">2</div>
              <h4 className="text-xl font-bold text-white mb-3">금리인하요구권</h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                취업, 승진 등으로 신용 상태가 좋아졌다면 반드시 은행에 금리 인하를 당당히 요구하세요.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-2xl mb-6 shadow-lg shadow-blue-900/40">3</div>
              <h4 className="text-xl font-bold text-white mb-3">자동이체는 필수</h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                단 하루의 연체도 신용에 치명적입니다. 급여일 다음 날로 이자 납부일을 설정하여 자동이체하세요.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles Hub */}
      <section id="latest-articles" className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-6xl animate-on-scroll">
          <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900">최신 대출 꿀팁 & 사례 분석</h2>
              <p className="text-slate-500 mt-3 font-medium">실생활에 즉시 적용 가능한 대출 정보</p>
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

      {/* Final CTA */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4 max-w-3xl text-center animate-on-scroll">
           <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6">아직 궁금한 점이 있으신가요?</h2>
           <p className="text-slate-500 mb-10 leading-relaxed">머니와이즈의 금융 에디터들이 정리한 <br/>다양한 대출 상황별 가이드를 확인해보세요.</p>
           <div className="flex flex-col sm:flex-row justify-center gap-4">
             <Link to="/blog" className="px-8 py-3 bg-blue-600 text-white font-bold rounded-xl shadow-lg hover:bg-blue-700 transition-all">전체 칼럼 읽기</Link>
             <Link to="/life-hacks-guide" className="px-8 py-3 bg-white text-slate-700 border border-slate-200 font-bold rounded-xl hover:bg-slate-50 transition-all">생활비 절약 팁</Link>
           </div>
        </div>
      </section>
    </main>
  );
};