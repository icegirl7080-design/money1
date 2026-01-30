import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  ArrowRight,
  ShieldCheck,
  ArrowDown,
  TrendingUp,
  HelpCircle,
  ShieldAlert,
  Zap,
  Target,
  Calculator,
  AlertCircle,
  CheckCircle2,
  ChevronRight,
  MousePointer2,
  Wallet,
  Coins
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
              <span>Complete Loan Mastery</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black leading-[1.15] mb-8 break-keep text-slate-900">
              대출·신용 기초 가이드:<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500">
                안전하게 빌리고 현명하게 갚는 법
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-500 leading-relaxed font-medium mb-12 break-keep">
              금융 초보자에게 대출은 막연한 공포일 수 있습니다. 하지만 원리를 이해하면 신용은 자산을 불리는 가장 강력한 레버리지가 됩니다. 머니와이즈가 핵심만 짚어드립니다.
            </p>

            {/* Quick Summary Card for SEO & UX */}
            <div className="w-full max-w-3xl bg-slate-50 border border-slate-200 rounded-[2rem] p-6 md:p-8 mb-12 text-left shadow-sm">
              <h2 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                <CheckCircle2 size={16} className="text-blue-600" />
                이 페이지에서 배울 핵심 내용
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex flex-col gap-2">
                  <span className="text-blue-600 font-bold text-lg">900점+</span>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium">1금융권 대출의 핵심인 고신용점수 관리 비결</p>
                </div>
                <div className="flex flex-col gap-2 border-t md:border-t-0 md:border-l border-slate-200 pt-4 md:pt-0 md:pl-6">
                  <span className="text-blue-600 font-bold text-lg">DSR 40%</span>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium">소득 대비 대출 한도를 결정하는 가장 중요한 수치</p>
                </div>
                <div className="flex flex-col gap-2 border-t md:border-t-0 md:border-l border-slate-200 pt-4 md:pt-0 md:pl-6">
                  <span className="text-blue-600 font-bold text-lg">1금융권</span>
                  <span className="text-xs text-slate-500 leading-relaxed font-medium">신용 하락을 최소화하는 안전한 자금 융통 순서</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a href="#definition" className="px-10 py-4 bg-slate-900 text-white font-bold rounded-2xl shadow-xl hover:bg-slate-800 transition-all hover:-translate-y-1 text-center">
                상세 가이드 시작
              </a>
              <Link to="/finance-guide" className="px-10 py-4 bg-white text-blue-600 border border-blue-100 font-bold rounded-2xl shadow-sm hover:bg-blue-50 transition-all text-center flex items-center justify-center gap-2">
                금융 기초부터 보기 <ChevronRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Definition */}
      <section id="definition" className="py-24 bg-white border-b border-slate-100 scroll-mt-20">
        <div className="container mx-auto px-4 max-w-4xl animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-10 text-center">대출이란 무엇인가?</h2>
          
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-blue-600 flex items-center gap-2">
                <Target size={20} /> 미래 소득의 현재 가치화
              </h3>
              <p className="text-slate-600 leading-8">
                대출의 본질은 <strong>'미래의 소득을 현재로 당겨오는 기술'</strong>입니다. 지금 당장 자본이 부족하더라도 필요한 시점에 자금을 활용해 더 큰 가치를 창출하거나 주거 안정이라는 기회비용을 사는 행위입니다.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-blue-600 flex items-center gap-2">
                <ShieldCheck size={20} /> 약속의 수치화, 신용
              </h3>
              <p className="text-slate-600 leading-8">
                금융 시장에서 신용은 <strong>'당신이 약속을 얼마나 잘 지키는가'</strong>에 대한 증거입니다. 과거 금융 거래 이력을 분석해 빌린 돈을 제때 갚을 확률을 수치화한 것이며, 이 수치가 높을수록 낮은 이자로 더 많은 돈을 빌릴 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Credit Score Factors with Internal Link */}
      <section id="credit-score" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="container mx-auto px-4 max-w-4xl animate-on-scroll">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center font-black text-xl shadow-lg shadow-blue-100">01</div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">내 신용점수는 어떻게 결정되는가?</h2>
          </div>

          <div className="prose prose-lg prose-slate max-w-none text-slate-600 leading-8 mb-12">
            <p>
              우리나라는 KCB와 NICE 두 신용평가사의 점수를 기반으로 등급을 매깁니다. 특히 <strong>신용카드</strong>의 올바른 사용 습관은 점수를 올리는 데 가장 결정적인 역할을 합니다. 
            </p>
            <div className="mt-4">
              <Link to="/credit-card-guide" className="inline-flex items-center gap-2 text-blue-600 font-bold border-b-2 border-blue-100 hover:border-blue-600 transition-all">
                신용점수 높여주는 신용카드 사용법 알아보기 <MousePointer2 size={16} />
              </Link>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm relative">
              <div className="absolute -top-3 left-8 bg-emerald-500 text-white px-4 py-1 rounded-full text-xs font-bold">Positive Factors</div>
              <h3 className="text-xl font-bold text-slate-900 mb-6 mt-2">신용점수에 긍정적인 요소</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <div className="mt-1 bg-emerald-100 text-emerald-600 p-1 rounded-full shrink-0"><TrendingUp size={14} /></div>
                  <div>
                    <strong className="text-slate-800 block">비금융 정보 등록</strong>
                    <span className="text-sm">통신비, 공공요금 성실 납부 내역을 6개월 단위로 제출하면 즉시 가점을 얻습니다.</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="mt-1 bg-emerald-100 text-emerald-600 p-1 rounded-full shrink-0"><TrendingUp size={14} /></div>
                  <div>
                    <strong className="text-slate-800 block">적정한 신용카드 이용</strong>
                    <span className="text-sm">한도의 30~50% 내외를 연체 없이 꾸준히 사용하는 이력이 신용 평가에 유리합니다.</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm relative">
              <div className="absolute -top-3 left-8 bg-red-500 text-white px-4 py-1 rounded-full text-xs font-bold">Critical Risks</div>
              <h3 className="text-xl font-bold text-slate-900 mb-6 mt-2">신용점수를 깎는 위험 요소</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <div className="mt-1 bg-red-100 text-red-600 p-1 rounded-full shrink-0"><ShieldAlert size={14} /></div>
                  <div>
                    <strong className="text-slate-800 block">단기 연체 이력</strong>
                    <span className="text-sm">10만 원 이상, 5영업일 이상의 연체는 전 금융권에 공유되어 점수를 폭락시킵니다.</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="mt-1 bg-red-100 text-red-600 p-1 rounded-full shrink-0"><ShieldAlert size={14} /></div>
                  <div>
                    <strong className="text-slate-800 block">과도한 부채 비율</strong>
                    <span className="text-sm">소득 대비 대출 원리금 상환 부담이 높다고 판단되면 추가 대출이 제한됩니다.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Limits with Tool Config */}
      <section className="py-24 bg-blue-900 text-white scroll-mt-20 overflow-hidden relative">
        <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
          <Calculator size={300} />
        </div>
        
        <div className="container mx-auto px-4 max-w-4xl animate-on-scroll relative z-10">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 bg-white text-blue-900 rounded-2xl flex items-center justify-center font-black text-xl shadow-lg">02</div>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight">내 대출 한도는 어떻게 결정되나?</h2>
          </div>

          <p className="text-blue-100 leading-8 mb-16 text-lg">
            "내 소득은 같은데 왜 은행마다 한도가 다를까요?" 정답은 국가가 정한 <strong>DSR, LTV, DTI</strong>라는 3가지 규제 체계에 있습니다.
          </p>

          <div className="space-y-12">
            <div className="group border-l-4 border-white/20 pl-8 hover:border-white transition-colors">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                DSR (총부채원리금상환비율)
              </h3>
              <p className="text-blue-200 leading-relaxed">
                당신이 1년 동안 갚아야 할 <strong>모든 대출의 원금과 이자</strong>를 합쳐 내 연 소득의 일정 수준(보통 40%)을 넘지 못하게 합니다. 가장 강력한 규제이며, 자동차 할부나 카드 할부도 한도에 영향을 줍니다.
              </p>
            </div>

            <div className="group border-l-4 border-white/20 pl-8 hover:border-white transition-colors">
              <h3 className="text-2xl font-bold mb-4">LTV (주택담보대출비율)</h3>
              <p className="text-blue-200 leading-relaxed">
                담보로 잡을 <strong>집값 대비 대출 가능 금액</strong>의 비율입니다. 투기지역이나 정책에 따라 비율이 수시로 변하므로, 부동산 계약 전 반드시 해당 시점의 LTV를 확인해야 합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Process & Next Steps (Internal Link Strategy) */}
      <section className="py-24 bg-white scroll-mt-20">
        <div className="container mx-auto px-4 max-w-4xl animate-on-scroll">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">대출 신청은 어떤 순서로 진행되나요?</h2>
            <p className="text-slate-500 font-medium">실패 없는 대출 실행을 위한 4단계 프로세스</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-20">
            <div className="text-center group">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">1</div>
              <h3 className="font-bold text-slate-900 mb-2">사전 점검</h3>
              <p className="text-xs text-slate-500 leading-relaxed">신용점수 확인 및 기존 부채 현황 파악</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">2</div>
              <h3 className="font-bold text-slate-900 mb-2">조건 비교</h3>
              <p className="text-xs text-slate-500 leading-relaxed">여러 은행의 금리와 한도 비교 견적</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">3</div>
              <h3 className="font-bold text-slate-900 mb-2">서류 제출</h3>
              <p className="text-xs text-slate-500 leading-relaxed">소득 증빙 및 필요 증명서 제출(비대면 가능)</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-all shadow-sm">4</div>
              <h3 className="font-bold text-slate-900 mb-2">실행 및 상환</h3>
              <p className="text-xs text-slate-500 leading-relaxed">대출금 수령 및 자동이체 상환 설정</p>
            </div>
          </div>

          {/* Internal Link to Specific Article */}
          <div className="bg-slate-900 rounded-[2rem] p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-black mb-3">당장 급전이 필요한 상황인가요?</h3>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed">서류 없이 3분 만에 가능한 1금융권 비상금 대출의 실체를 확인하세요.</p>
            </div>
            <Link to="/article/emergency-loan-guide" className="px-8 py-4 bg-blue-600 text-white font-bold rounded-xl shadow-lg hover:bg-blue-700 transition-all flex items-center gap-2 shrink-0">
              비상금 대출 가이드 보기 <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Next Step Journey Cards (Internal Link Hub) */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-4">함께 학습하면 좋은 주제</h2>
            <p className="text-slate-500">대출 관리를 넘어, 당신의 금융 시스템을 완성하세요.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Link to="/finance-guide" className="group bg-white p-8 rounded-3xl border border-slate-200 hover:border-blue-600 hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                <Wallet size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">금융 기초 마스터</h3>
              <p className="text-sm text-slate-500 leading-relaxed">돈이 흐르는 원리와 파이프라인 구축 시스템을 처음부터 배웁니다.</p>
            </Link>

            <Link to="/investment-guide" className="group bg-white p-8 rounded-3xl border border-slate-200 hover:border-blue-600 hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-red-600 group-hover:text-white transition-all">
                <TrendingUp size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">자산 증식 투자 전략</h3>
              <p className="text-sm text-slate-500 leading-relaxed">빌린 돈(레버리지)을 안전하게 투자로 연결하는 핵심 원칙을 소개합니다.</p>
            </Link>

            <Link to="/welfare-guide" className="group bg-white p-8 rounded-3xl border border-slate-200 hover:border-blue-600 hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-600 group-hover:text-white transition-all">
                <Coins size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">정부 지원금 가이드</h3>
              <p className="text-sm text-slate-500 leading-relaxed">대출 전 확인해야 할 국가의 저금리 지원 정책과 복지 혜택을 정리했습니다.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Articles Hub */}
      <section id="latest-articles" className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl animate-on-scroll">
          <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900">최신 대출 전략 칼럼</h2>
              <p className="text-slate-500 mt-3 font-medium">머니와이즈가 분석한 시장의 흐름</p>
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

      {/* Footer Caution */}
      <section className="py-12 bg-red-50 border-t border-red-100">
        <div className="container mx-auto px-4 max-w-4xl flex items-start gap-4 text-red-800">
          <AlertCircle className="shrink-0 mt-1" size={20} />
          <div className="text-xs md:text-sm leading-relaxed font-medium">
             <p className="font-bold mb-1">안내 및 주의사항</p>
             본 가이드는 일반적인 금융 정보 제공을 목적으로 하며, 실제 조건은 금융사 정책에 따라 다를 수 있습니다. 과도한 채무는 고통의 시작입니다. 반드시 상환 능력을 고려하여 결정하십시오.
          </div>
        </div>
      </section>
    </main>
  );
};