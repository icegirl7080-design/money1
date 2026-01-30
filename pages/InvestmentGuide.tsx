
import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, 
  BarChart, 
  AlertOctagon, 
  // Added AlertTriangle and AlertCircle to fix undefined component errors
  AlertTriangle,
  AlertCircle,
  Target, 
  BrainCircuit,
  ArrowRight,
  ArrowDown,
  CheckCircle2,
  ChevronRight,
  MousePointer2,
  Wallet,
  Coins,
  ShieldCheck,
  PieChart,
  Lightbulb,
  Info,
  Layers,
  Search,
  BookOpen
} from 'lucide-react';
import { INITIAL_ARTICLES } from '../constants';
import { Category } from '../types';
import { ArticleCard } from '../components/ArticleCard';
import { SEO } from '../components/SEO';

export const InvestmentGuide: React.FC = () => {
  const relatedArticles = useMemo(() => {
    return INITIAL_ARTICLES
      .filter(article => article.category === Category.INVESTMENT)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, []);

  return (
    <main className="flex-grow bg-slate-50 font-sans text-slate-900 selection:bg-red-100 leading-relaxed">
      <SEO 
        title="주식 투자 기초 가이드 | 초보자를 위한 잃지 않는 투자 전략"
        description="주식이란 무엇인가? 주식 기초 개념부터 ETF 적립식 투자, 복리의 마법, 리스크 관리까지. 초보 투자자가 알아야 할 모든 실전 투자 정보를 머니와이즈가 상세히 안내합니다."
        keywords={['주식 기초', '투자 기초', '주식 투자 방법', '초보 투자', '주식이란 무엇인가', 'ETF 투자법', '복리의 마법', '자산배분 전략']}
      />

      {/* Hero Section */}
      <section className="relative bg-white pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden border-b border-slate-100">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-red-50/50 to-transparent pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-red-100/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10 max-w-6xl animate-on-scroll">
          <div className="flex flex-col md:items-center md:text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-600 text-white text-xs font-bold mb-8 shadow-xl shadow-red-200 uppercase tracking-widest">
              <TrendingUp size={14} />
              <span>Investment Mastery Hub</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black leading-[1.15] mb-8 break-keep text-slate-900">
              주식·투자 완전 정복:<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">
                기초부터 실전 포트폴리오까지
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-500 leading-relaxed font-medium mb-12 break-keep">
              주식은 단순히 '사고파는 종이'가 아닌, 위대한 기업의 <strong>성장 과실을 나누는 권리</strong>입니다. <br className="hidden md:block" />
              투자의 본질을 꿰뚫는 통찰력을 통해 평생 흔들리지 않는 자산 시스템을 구축하세요.
            </p>

            {/* Quick Summary Card for SEO & UX */}
            <div className="w-full max-w-3xl bg-slate-50 border border-slate-200 rounded-[2rem] p-6 md:p-8 mb-12 text-left shadow-sm">
              <h2 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                <CheckCircle2 size={16} className="text-red-600" />
                이 가이드의 핵심 포인트 (Summary)
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex flex-col gap-2">
                  <span className="text-red-600 font-bold text-lg">Ownership</span>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium">기업의 소유권을 매입하여 시스템 수익을 창출하는 원리</p>
                </div>
                <div className="flex flex-col gap-2 border-t md:border-t-0 md:border-l border-slate-200 pt-4 md:pt-0 md:pl-6">
                  <span className="text-red-600 font-bold text-lg">Compound</span>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium">시간이 지날수록 수익이 가속화되는 복리의 마법 활용</p>
                </div>
                <div className="flex flex-col gap-2 border-t md:border-t-0 md:border-l border-slate-200 pt-4 md:pt-0 md:pl-6">
                  <span className="text-red-600 font-bold text-lg">Stability</span>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium">지수 ETF와 배당주를 통한 초보자용 안정적 전략</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a href="#fundamentals" className="px-10 py-4 bg-slate-900 text-white font-bold rounded-2xl shadow-xl hover:bg-slate-800 transition-all hover:-translate-y-1 text-center">
                기초 개념 배우기
              </a>
              <Link to="/finance-guide" className="px-10 py-4 bg-white text-red-600 border border-red-100 font-bold rounded-2xl shadow-sm hover:bg-red-50 transition-all text-center flex items-center justify-center gap-2">
                돈 관리 기초부터 <ChevronRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Deep Fundamentals */}
      <section id="fundamentals" className="py-24 bg-white border-b border-slate-100 scroll-mt-20">
        <div className="container mx-auto px-4 max-w-4xl animate-on-scroll">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">주식이란 무엇인가요?</h2>
            <p className="text-slate-500 font-medium">투자의 정의부터 주식의 작동 원리까지</p>
          </div>

          <div className="grid gap-12">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-1/3 shrink-0">
                <div className="bg-red-50 p-6 rounded-3xl">
                  <h3 className="text-xl font-bold text-red-600 mb-3 flex items-center gap-2">
                    <BookOpen size={20} /> 주식의 본질
                  </h3>
                  <p className="text-sm text-red-900/70 leading-relaxed">
                    주식(Stock)은 주식회사가 자본을 마련하기 위해 발행하는 <strong>'기업 소유권 증서'</strong>입니다. 주식을 산다는 것은 그 회사의 주인이 된다는 뜻입니다.
                  </p>
                </div>
              </div>
              <div className="flex-grow prose prose-slate text-slate-600">
                <p>
                  회사가 성장하여 이익을 내면 주주는 두 가지 방식으로 보상을 받습니다. 첫째는 회사의 가치가 올라가 주식 가격이 오르는 <strong>시세 차익</strong>이고, 둘째는 벌어들인 돈의 일부를 나눠주는 <strong>배당금</strong>입니다. 주식 투자는 단순히 싼 가격에 사서 비싸게 파는 게임이 아니라, 유망한 기업의 자본가가 되어 성장의 과실을 함께 누리는 파트너십입니다.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-start border-t border-slate-100 pt-12">
              <div className="md:w-1/3 shrink-0">
                <div className="bg-emerald-50 p-6 rounded-3xl">
                  <h3 className="text-xl font-bold text-emerald-600 mb-3 flex items-center gap-2">
                    <ShieldCheck size={20} /> 투자 vs 투기
                  </h3>
                  <p className="text-sm text-emerald-900/70 leading-relaxed">
                    투자는 분석과 데이터에 기반해 <strong>원금을 보호하며 적정한 수익</strong>을 추구하는 것이고, 투기는 막연한 기대감으로 큰 위험을 감수하는 도박입니다.
                  </p>
                </div>
              </div>
              <div className="flex-grow prose prose-slate text-slate-600">
                <p>
                  많은 초보자가 '대박'을 꿈꾸며 변동성이 큰 종목에 올인합니다. 이는 투자가 아닌 투기입니다. 진정한 투자는 <strong>시간과 복리</strong>라는 엔진을 장착하고, 시장의 일시적인 하락을 견뎌내며 자산을 우상향시키는 인내의 과정입니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Why Invest (Value Defense) */}
      <section className="py-24 bg-slate-50 scroll-mt-20">
        <div className="container mx-auto px-4 max-w-4xl animate-on-scroll">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 bg-red-600 text-white rounded-2xl flex items-center justify-center font-black text-xl shadow-lg shadow-red-100">01</div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">왜 지금 투자를 시작해야 하는가?</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10 mb-16">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <Target size={20} className="text-red-600" /> 인플레이션이라는 보이지 않는 도둑
              </h3>
              <p className="text-slate-600 leading-relaxed">
                현재 1억 원의 가치는 10년 뒤에 동일하지 않습니다. 연평균 물가 상승률이 3%라면, 현금의 구매력은 매년 그만큼 줄어듭니다. 주식은 <strong>실물 자산인 기업의 가치</strong>를 대변하므로 인플레이션을 방어하는 최적의 수단입니다.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <TrendingUp size={20} className="text-red-600" /> 복리의 마법: 시간의 힘
              </h3>
              <p className="text-slate-600 leading-relaxed">
                매달 50만 원씩 연 10% 수익률로 20년을 투자하면 원금은 1.2억이지만 최종 자산은 약 <strong>3.8억</strong>이 됩니다. 수익이 다시 수익을 낳는 복리 효과는 투자를 일찍 시작할수록 기하급수적으로 커집니다.
              </p>
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-slate-200 shadow-soft">
            <h4 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Lightbulb size={24} className="text-amber-500" /> 초보자를 위한 실전 투자 로드맵
            </h4>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: "01", title: "증권계좌 개설", desc: "국내외 주식 거래가 가능한 종합계좌 개설" },
                { step: "02", title: "시드머니 확보", desc: "여유 자금으로 투자금 설정(대출 투자 금지)" },
                { step: "03", title: "지수 ETF 매수", desc: "S&P500 등 시장 지수부터 적립식 시작" },
                { step: "04", title: "자산 배분", desc: "주식, 채권, 현금 비중을 나누어 리스크 분산" }
              ].map((item, idx) => (
                <div key={idx} className="relative pl-6 border-l border-slate-100 group">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-200 group-hover:bg-red-500 transition-colors"></div>
                  <span className="block text-xs font-black text-slate-400 mb-1">{item.step}</span>
                  <h5 className="font-bold text-slate-900 mb-1">{item.title}</h5>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Detailed Strategy (ETF/Dividends) */}
      <section id="strategy" className="py-24 bg-white scroll-mt-20">
        <div className="container mx-auto px-4 max-w-4xl animate-on-scroll">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 bg-red-600 text-white rounded-2xl flex items-center justify-center font-black text-xl shadow-lg shadow-red-100">02</div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">초보자가 절대 잃지 않는 2가지 전략</h2>
          </div>

          <div className="space-y-12">
            <div className="flex flex-col md:flex-row gap-10 items-start">
              <div className="md:w-1/2 p-10 bg-gradient-to-br from-red-600 to-orange-500 text-white rounded-[2.5rem] shadow-xl shadow-red-100">
                <h3 className="text-2xl font-black mb-4">지수 추종 ETF 전략</h3>
                <p className="text-red-50 mb-8 leading-relaxed">
                  개별 종목 분석이 어렵다면 상위 500개 기업에 동시에 투자하는 <strong>S&P500 ETF(예: VOO, SPY)</strong>를 선택하세요. 시장은 단기적으로 흔들려도 장기적으로는 인류의 발전과 함께 항상 우상향해왔습니다.
                </p>
                <div className="flex items-center gap-2 text-sm font-bold bg-white/10 p-3 rounded-xl border border-white/20">
                  <Info size={16} /> 연평균 수익률 약 8~10% 기대
                </div>
              </div>
              <div className="md:w-1/2 p-10 bg-slate-900 text-white rounded-[2.5rem] shadow-xl shadow-slate-200">
                <h3 className="text-2xl font-black mb-4">배당주 현금흐름 전략</h3>
                <p className="text-slate-400 mb-8 leading-relaxed">
                  주가가 떨어져도 매달 또는 매분기 꼬박꼬박 입금되는 <strong>배당금</strong>은 하락장을 견디는 강력한 멘탈 방어막이 됩니다. 배당 성장주(예: SCHD)는 자산 가치 상승과 현금 흐름을 동시에 잡을 수 있습니다.
                </p>
                <div className="flex items-center gap-2 text-sm font-bold bg-white/10 p-3 rounded-xl border border-white/20">
                  <Coins size={16} className="text-amber-400" /> '제2의 월급' 시스템 구축
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Psychology & Risk Management */}
      <section className="py-24 bg-red-900 text-white scroll-mt-20 overflow-hidden relative">
        <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
          <AlertOctagon size={300} />
        </div>
        
        <div className="container mx-auto px-4 max-w-4xl animate-on-scroll relative z-10">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 bg-white text-red-900 rounded-2xl flex items-center justify-center font-black text-xl shadow-lg">03</div>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight">수익보다 중요한 리스크 관리 원칙</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold flex items-center gap-2">
                <Layers className="text-red-400" /> 자산 배분: 분산의 힘
              </h3>
              <p className="text-red-100 leading-relaxed">
                주식에 100% 투자하는 것은 위험합니다. 자신의 나이와 성향에 맞춰 <strong>주식(성장), 채권(안전), 현금(기회)</strong> 비중을 나누세요. 예를 들어 6:3:1 비중은 하락장에서도 자산이 녹아내리는 것을 방어해 줍니다.
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold flex items-center gap-2">
                <PieChart className="text-red-400" /> 몰빵하지 않는 분할 매수
              </h3>
              <p className="text-red-100 leading-relaxed">
                오늘이 최저점인지 아무도 알 수 없습니다. 가진 돈을 한 번에 다 쓰지 말고 <strong>한 달에 한 번씩</strong> 나누어 매수하세요. 이는 평균 단가를 낮추고 심리적 안정감을 주는 가장 과학적인 방법입니다.
              </p>
            </div>
          </div>

          <div className="mt-16 p-8 bg-red-800/50 border border-red-700 rounded-3xl">
             <h4 className="font-bold mb-4 flex items-center gap-2"><AlertTriangle className="text-amber-400" /> 주의: 이런 투자는 반드시 실패합니다</h4>
             <ul className="grid sm:grid-cols-2 gap-3 text-sm text-red-100">
               <li className="flex gap-2"><span>•</span> 지인의 추천만 듣고 사는 묻지마 투자</li>
               <li className="flex gap-2"><span>•</span> 감당할 수 없는 수준의 대출 투자(신용/미수)</li>
               <li className="flex gap-2"><span>•</span> 하루 만에 두 배를 바라는 급등주 추격 매수</li>
               <li className="flex gap-2"><span>•</span> 근거 없는 낙관론에 빠진 물타기</li>
             </ul>
          </div>
        </div>
      </section>

      {/* Internal Link CTA Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl animate-on-scroll">
          <div className="bg-slate-900 rounded-[2rem] p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-black mb-3">투자를 위한 자금을 마련 중이신가요?</h3>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed">무리한 대출은 독이 되지만, 정부 지원금이나 안전한 대출 가이드를 통해 시드머니를 확보할 수 있습니다.</p>
            </div>
            <div className="flex gap-3 shrink-0">
              <Link to="/loan-guide" className="px-6 py-4 bg-red-600 text-white font-bold rounded-xl shadow-lg hover:bg-red-700 transition-all flex items-center gap-2">
                대출 가이드 <ArrowRight size={18} />
              </Link>
              <Link to="/welfare-guide" className="px-6 py-4 bg-white text-slate-900 font-bold rounded-xl shadow-lg hover:bg-slate-100 transition-all flex items-center gap-2">
                정부 지원금 <Coins size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section (Information Density Boost) */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-4 max-w-4xl animate-on-scroll">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-slate-900 mb-4">투자자들이 자주 묻는 질문</h2>
            <p className="text-slate-500">주식 초보자를 위한 핀포인트 Q&A</p>
          </div>

          <div className="space-y-4">
            <details className="group bg-white rounded-3xl border border-slate-200 open:shadow-lg transition-all">
              <summary className="flex items-center justify-between p-6 md:p-8 font-bold text-lg text-slate-800 cursor-pointer list-none">
                Q. 지금 주가가 너무 비싼데 떨어질 때까지 기다려야 할까요?
                <span className="bg-slate-50 p-2 rounded-full group-open:rotate-180 transition-transform"><ChevronRight /></span>
              </summary>
              <div className="px-6 pb-8 md:px-8 text-slate-600 leading-relaxed border-t border-slate-50 pt-6">
                <p>시장의 타이밍을 맞추는 것은 전문가들도 실패합니다. 가장 좋은 방법은 <strong>'정액 적립식 매수'</strong>입니다. 주가가 비쌀 땐 적게 사고, 쌀 땐 많이 사게 되어 결국 평균 단가가 낮아집니다. '최적의 시기'보다는 '최대한 오래' 시장에 머무는 것이 중요합니다.</p>
              </div>
            </details>

            <details className="group bg-white rounded-3xl border border-slate-200 open:shadow-lg transition-all">
              <summary className="flex items-center justify-between p-6 md:p-8 font-bold text-lg text-slate-800 cursor-pointer list-none">
                Q. 어떤 주식을 사야 할지 모르겠어요. 종목 고르는 법은?
                <span className="bg-slate-50 p-2 rounded-full group-open:rotate-180 transition-transform"><ChevronRight /></span>
              </summary>
              <div className="px-6 pb-8 md:px-8 text-slate-600 leading-relaxed border-t border-slate-50 pt-6">
                <p>초보자라면 개별 종목보다 <strong>지수 ETF</strong>를 추천합니다. 만약 종목을 고르고 싶다면 내가 일상에서 직접 쓰고 만족하는 제품을 만드는 회사, 그리고 그 회사가 최근 3년간 이익이 꾸준히 늘었는지(재무제표)를 확인하세요. 모르는 사업 분야에는 투자하지 않는 것이 철칙입니다.</p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Latest Articles Hub */}
      <section id="latest-articles" className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl animate-on-scroll">
          <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900">심층 투자 전략 칼럼</h2>
              <p className="text-slate-500 mt-2 font-medium">더 깊이 있는 분석으로 당신의 투자 지능(IQ)을 높이세요.</p>
            </div>
            <Link to="/investment" className="hidden md:flex items-center text-sm font-bold text-red-600 hover:underline">
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
             <p className="font-bold mb-1">투자 유의사항</p>
             본 가이드는 정보 제공을 목적으로 하며, 특정 종목에 대한 매수/매도를 권유하지 않습니다. 모든 투자 결정의 책임은 본인에게 있으며, 시장 상황에 따라 원금 손실이 발생할 수 있음을 유의하십시오.
          </div>
        </div>
      </section>
    </main>
  );
};
