import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, 
  BarChart, 
  AlertOctagon, 
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
  BookOpen,
  Zap,
  Star,
  ShieldAlert,
  Calculator,
  Compass,
  GraduationCap,
  Sparkles
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
        title="주식·투자 기초 완벽 가이드 | 2024년 실전 투자 전략 및 리스크 관리"
        description="주식이란 무엇인가? 주식 기초부터 ETF 투자법, 배당주 전략, 복리의 마법까지. 초보 투자자가 잃지 않는 투자를 위해 알아야 할 모든 실전 금융 정보를 머니와이즈가 안내합니다."
        keywords={['주식 기초', '투자 기초', '주식 투자 방법', '초보 투자', '주식이란 무엇인가', 'ETF 투자법', '복리의 마법', '자산배분 전략', '2024 주식 전망']}
      />

      {/* Hero Section */}
      <section className="relative bg-white pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden border-b border-slate-100">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-red-50/50 to-transparent pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-red-100/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10 max-w-6xl animate-on-scroll">
          <div className="flex flex-col md:items-center md:text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-600 text-white text-[10px] md:text-xs font-bold mb-8 shadow-xl shadow-red-200 uppercase tracking-widest">
              <Sparkles size={14} className="fill-current" />
              <span>Investment Hub: Mastery 2024</span>
            </div>

            <h1 className="text-3xl md:text-6xl font-black leading-[1.2] md:leading-[1.15] mb-6 md:mb-8 break-keep text-slate-900">
              주식·투자 기초 완벽 가이드:<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">
                잃지 않는 자산을 위한 실전 로드맵
              </span>
            </h1>

            <p className="text-base md:text-xl text-slate-500 leading-relaxed max-w-2xl mb-10 md:mb-12 break-keep font-medium">
              주식은 도박이 아닌 자본주의 시스템에 승선하는 일입니다. <br className="hidden md:block" />
              올바른 지식으로 <strong>경제적 자유</strong>를 향한 파이프라인을 구축하세요.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a href="#definition" className="px-10 py-4 bg-red-600 text-white font-bold rounded-2xl shadow-xl hover:bg-red-700 transition-all hover:-translate-y-1 text-center">
                학습 가이드 시작
              </a>
              <Link to="/finance-guide" className="px-10 py-4 bg-white text-slate-900 border border-slate-200 font-bold rounded-2xl shadow-sm hover:bg-slate-50 transition-all text-center flex items-center justify-center gap-2">
                금융 기초부터 정복 <ChevronRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Definition */}
      <section id="definition" className="py-20 bg-slate-50 scroll-mt-20 border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-5xl animate-on-scroll">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight">1. 주식이란 무엇인가: 투자의 본질</h2>
            <p className="text-slate-500">단순한 매매를 넘어 기업의 소유권을 이해하는 단계</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-soft">
              <div className="w-14 h-14 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center mb-8">
                <BookOpen size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">기업의 주인(주주)이 된다는 것</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                주식(Stock)은 기업의 자본을 구성하는 단위이자 소유권을 나타냅니다. 주식을 보유한다는 것은 기업이 벌어들이는 이익에 대한 권리와 자산에 대한 지분을 갖는 <strong>'자본가'</strong>가 됨을 의미합니다.
              </p>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-soft">
              <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-8">
                <ShieldCheck size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">자본주의의 과실을 나누는 법</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                투자는 세상에 가치를 더하는 기업의 성장에 동참하는 행위입니다. 시간이 지날수록 기업의 가치가 오르고, 이익의 일부를 배당으로 돌려받는 구조는 <strong>노동 소득을 넘어선 시스템 수익</strong>을 만듭니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Strategy */}
      <section id="strategy" className="py-24 bg-white scroll-mt-20 border-b border-slate-100">
        <div className="container mx-auto px-4 max-w-5xl animate-on-scroll">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight">2. 주식 투자 방법: ETF와 배당주의 차이</h2>
            <p className="text-slate-500">자신의 투자 성향에 맞는 도구를 선택하세요</p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="p-10 bg-slate-900 text-white rounded-[3rem] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Layers size={120} />
              </div>
              <h3 className="text-2xl font-black mb-6 flex items-center gap-2">
                지수 추종 ETF <Info size={18} className="text-red-500" />
              </h3>
              <p className="text-slate-400 mb-8 leading-relaxed">
                시장 전체를 사서 평균 수익률을 추구합니다. S&P500(VOO, SPY)이나 나스닥100(QQQ) 같은 ETF는 개별 기업의 파산 리스크를 자동 분산해주어 <strong>초보자에게 가장 안전한 선택</strong>입니다.
              </p>
              <div className="text-sm font-bold text-red-400">#시장우상향 #자동분산 #저비용</div>
            </div>

            <div className="p-10 bg-red-600 text-white rounded-[3rem] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-20">
                <Coins size={120} />
              </div>
              <h3 className="text-2xl font-black mb-6 flex items-center gap-2">
                배당 성장주 <TrendingUp size={18} />
              </h3>
              <p className="text-red-100 mb-8 leading-relaxed">
                주가가 하락해도 현금 흐름을 만들어냅니다. 배당금을 재투자할 때 발생하는 <strong>복리의 마법</strong>은 자산을 눈덩이처럼 불려줍니다. 매달 월급처럼 들어오는 배당금은 하락장의 심리적 방패가 됩니다.
              </p>
              <div className="text-sm font-bold text-red-200">#현금흐름 #제2의월급 #재투자</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Internal Interlinking Hub (SEO Strength) */}
      <section className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-6xl animate-on-scroll">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">함께 읽으면 좋은 금융 핵심 가이드</h2>
            <p className="text-slate-500 font-medium">투자를 위한 기초 체력과 리스크 방어막을 구축하세요.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Link to="/finance-guide" className="group bg-white p-8 rounded-3xl border border-slate-200 hover:border-red-600 hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                <Wallet size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-red-600 transition-colors">금융 기초 마스터</h3>
              <p className="text-sm text-slate-500 leading-relaxed">돈 관리 시스템(통장 쪼개기)을 통해 투자용 시드머니를 확보하는 법을 배웁니다.</p>
            </Link>

            <Link to="/loan-guide" className="group bg-white p-8 rounded-3xl border border-slate-200 hover:border-red-600 hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-red-600 transition-colors">대출·신용 관리</h3>
              <p className="text-sm text-slate-500 leading-relaxed">레버리지를 활용하기 전, 나의 신용점수를 지키고 안전한 대출 한도를 확인하는 법을 공개합니다.</p>
            </Link>

            <Link to="/welfare-guide" className="group bg-white p-8 rounded-3xl border border-slate-200 hover:border-red-600 hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-600 group-hover:text-white transition-all">
                <Coins size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-red-600 transition-colors">정부 지원 복지 혜택</h3>
              <p className="text-sm text-slate-500 leading-relaxed">무주택 청년이나 사회초년생을 위한 저금리 정책 대출과 지원금을 투자금으로 활용하세요.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 4: Next Steps Summary (SEO & UX) */}
      <section className="py-24 bg-white scroll-mt-20">
        <div className="container mx-auto px-4 max-w-4xl animate-on-scroll">
          <div className="bg-slate-900 rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-red-600/20 rounded-full blur-[100px]"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-black mb-10 flex items-center gap-3">
                <Compass className="text-red-500" size={36} />
                다음 단계: 지금 바로 실천할 3가지
              </h2>

              <div className="space-y-8">
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 border border-white/10 font-black text-xl text-red-500">01</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">증권계좌 개설 및 소액 투자 시작</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      공부만 하는 것보다 1만 원이라도 직접 사보는 것이 실력 향상에 빠릅니다. 국내외 주식 소수점 투자 기능을 활용해 지수 ETF를 1주씩 모아보세요.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 border border-white/10 font-black text-xl text-red-500">02</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">자산 현황 파악 및 포트폴리오 설정</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      현재 보유한 현금과 부채 비중을 파악하고, 자신의 위험 성향에 맞춰 주식과 채권의 비중(예: 6:4)을 설정하세요.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 border border-white/10 font-black text-xl text-red-500">03</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">지속적인 학습과 경제 뉴스 모니터링</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      시장의 소음(Hype)과 신호(Signal)를 구분하는 능력을 키워야 합니다. 머니와이즈의 최신 칼럼을 매주 확인하며 투자 지능을 높이세요.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-16 pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
                 <p className="text-slate-400 text-sm font-medium">더 많은 인사이트가 필요하신가요?</p>
                 <Link to="/blog" className="px-10 py-4 bg-white text-slate-900 font-bold rounded-2xl hover:bg-red-50 transition-all shadow-xl flex items-center gap-2">
                   전체 칼럼 보러가기 <ArrowRight size={20} />
                 </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles Hub */}
      <section id="latest-articles" className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-6xl animate-on-scroll">
          <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900">심층 투자 전략 칼럼</h2>
              <p className="text-slate-500 mt-2 font-medium">전문가가 분석한 최신 투자 트렌드</p>
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
            <div className="text-center py-20 bg-white rounded-3xl border border-slate-100">
              <p className="text-slate-500 font-medium">관련된 최신 글이 준비 중입니다.</p>
            </div>
          )}
        </div>
      </section>

      {/* Footer Disclaimer */}
      <section className="py-12 bg-red-50 border-t border-red-100">
        <div className="container mx-auto px-4 max-w-4xl flex items-start gap-4 text-red-800">
          <AlertCircle className="shrink-0 mt-1" size={20} />
          <div className="text-xs md:text-sm leading-relaxed font-medium">
             <p className="font-bold mb-1 underline decoration-red-200">투자자 유의사항</p>
             본 가이드는 정보 제공을 목적으로 작성되었으며, 특정 종목의 매수/매도를 권유하지 않습니다. 시장 상황에 따라 원금 손실이 발생할 수 있으며, 모든 투자 결정에 대한 최종 책임은 투자자 본인에게 있습니다.
          </div>
        </div>
      </section>
    </main>
  );
};