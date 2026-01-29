import React from 'react';
import { Link } from 'react-router-dom';
import { ArticleCard } from '../components/ArticleCard';
import { INITIAL_ARTICLES } from '../constants';
import { 
  ArrowRight, 
  ShieldCheck, 
  Coins, 
  CreditCard, 
  Landmark, 
  ChevronRight, 
  HelpCircle,
  CheckCircle2,
  TrendingUp,
  PieChart,
  AlertTriangle
} from 'lucide-react';

export const Home: React.FC = () => {
  const recentArticles = INITIAL_ARTICLES.slice(0, 3);

  return (
    <main className="flex-grow bg-white text-slate-900 font-sans leading-relaxed selection:bg-blue-100">
      
      {/* =====================================================================================
          1. HEADER SECTION (H1)
          페이지의 핵심 주제를 정의하고 사용자에게 신뢰성을 전달하는 도입부
          ===================================================================================== */}
      <section className="relative bg-slate-900 text-white pt-32 pb-40 overflow-hidden">
        {/* Professional Gradient Background instead of Slow AI Image */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-black"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        
        <div className="container mx-auto px-4 relative z-10 max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/80 border border-slate-700 text-blue-400 text-sm font-bold mb-8 backdrop-blur-sm shadow-lg">
            <ShieldCheck size={16} />
            <span>검증된 금융 정보 포털</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight mb-8 break-keep">
            금융의 불확실성을 <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-emerald-400 to-teal-400">
              확실한 자산 증식의 기회
            </span>로 전환하십시오.
          </h1>

          <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-3xl mx-auto mb-12 font-light break-keep">
            머니와이즈는 정보의 홍수 속에서 <strong>실질적인 금융 솔루션</strong>만을 선별하여 제공합니다. 
            기초 자산 관리부터 심화 투자 전략까지, 당신의 경제적 자유를 위한 로드맵을 지금 확인하세요.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/finance-guide" 
              className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:translate-y-[-2px] flex items-center justify-center gap-2"
            >
              돈 관리 기초부터 시작하기 <ArrowRight size={20} />
            </Link>
            <Link 
              to="/blog" 
              className="w-full sm:w-auto px-8 py-4 bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium rounded-xl border border-slate-700 transition-all flex items-center justify-center gap-2"
            >
              <span>전체 칼럼 보기</span>
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================================================
          2. CORE CONTENT: LOAN SAFETY (H2)
          주제: 소액 대출의 정의, 메커니즘, 안전한 활용법
          ===================================================================================== */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-blue-50 rounded-xl text-blue-600">
              <ShieldCheck size={28} />
            </div>
            <span className="text-blue-600 font-bold tracking-wider text-sm uppercase">Safe Lending Guide</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-8 leading-snug break-keep">
            긴급 자금 마련의 정석: <br/>
            <span className="text-blue-600">소액 비상금 대출</span>의 구조와 활용
          </h2>

          <div className="prose prose-lg text-slate-600 max-w-none">
            <p>
              살다 보면 예기치 못한 순간에 현금 유동성이 필요한 상황이 발생합니다. 
              이때 많은 분들이 단순히 '빠르다'는 이유로 고금리 대출이나 현금서비스를 이용하곤 합니다. 
              하지만 금융 지식이 있다면, 신용점수를 지키면서도 안전하게 자금을 융통할 수 있습니다.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-10 mb-4">1. 비상금 대출의 작동 원리</h3>
            <p>
              일반적으로 300만 원 이하의 <strong>소액 대출</strong>은 재직 증명이나 소득 증빙 없이도 실행이 가능합니다. 
              이것이 가능한 이유는 <strong>서울보증보험</strong>이 개인의 통신 등급(Telco Score)이나 금융 거래 이력을 바탕으로 
              은행에 보증서를 발급해주기 때문입니다. 즉, 은행은 개인의 신용이 아닌 보증보험의 보증서를 믿고 돈을 빌려주는 구조입니다.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-10 mb-4">2. 왜 1금융권을 고집해야 하는가?</h3>
            <p>
              대출을 실행하면 신용점수 하락은 필연적입니다. 그러나 <strong>1금융권(시중은행, 인터넷전문은행)</strong> 대출은 
              2금융권(저축은행, 캐피탈)이나 대부업체 대출에 비해 신용점수 하락 폭이 현저히 적습니다. 
              또한, 대출 이력이 '건전한 금융 거래'로 인식되어 성실 상환 시 오히려 신용점수 가산 요인이 될 수 있습니다.
            </p>

            <div className="my-10 p-6 bg-slate-50 border border-slate-200 rounded-2xl">
              <h4 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
                <CheckCircle2 size={20} className="text-blue-600" />
                대출 신청 전 체크리스트
              </h4>
              <ul className="space-y-3 text-sm">
                <li className="flex gap-2">
                  <span className="text-blue-400">•</span>
                  <span>'마이너스 통장' 방식을 선택하여 사용한 금액에 대해서만 이자를 납부하는 것이 유리합니다.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-400">•</span>
                  <span>금리인하요구권 적용 대상 상품인지 확인하여, 추후 신용 개선 시 금리 인하를 요청하십시오.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-400">•</span>
                  <span>법정 최고 금리(연 20%)를 초과하거나 선이자를 요구하는 곳은 불법 사금융이므로 절대 피해야 합니다.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 flex justify-end">
            <Link to="/loan-guide" className="inline-flex items-center text-blue-600 font-bold hover:gap-2 transition-all">
              안전한 대출 가이드 전체 읽기 <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================================================
          3. CORE CONTENT: ASSET LIQUIDATION (H2)
          주제: 신용카드 포인트 현금화, 합법과 불법의 차이
          ===================================================================================== */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-amber-50 rounded-xl text-amber-600">
              <Coins size={28} />
            </div>
            <span className="text-amber-600 font-bold tracking-wider text-sm uppercase">Asset Liquidation</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-8 leading-snug break-keep">
            잠자는 자산의 재발견: <br/>
            <span className="text-amber-600">신용카드 현금화</span>와 포인트 유동화 전략
          </h2>

          <div className="prose prose-lg text-slate-600 max-w-none">
            <p>
              '현금화'라는 단어를 들으면 불법적인 '카드깡'을 떠올리기 쉽습니다. 
              하지만 금융 소비자가 정당하게 행사해야 할 권리로서의 <strong>합법적 현금화</strong>는 
              자산 관리의 중요한 한 축을 담당합니다. 매년 소멸되는 수천억 원의 카드 포인트를 내 계좌로 옮기는 것부터 시작하십시오.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-10 mb-4">1. 여신금융협회 통합 조회 시스템</h3>
            <p>
              과거에는 각 카드사 앱을 일일이 접속해야 했지만, 현재는 <strong>여신금융협회</strong>의 
              '카드포인트 통합조회' 서비스를 통해 모든 카드사의 잔여 포인트를 한 번에 조회할 수 있습니다. 
              중요한 점은 이 포인트를 1:1 비율(1포인트 = 1원)로 본인 명의 계좌에 <strong>즉시 입금</strong>할 수 있다는 사실입니다. 
              이는 카드사의 혜택이 아닌 소비자의 <strong>자산</strong>입니다.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-10 mb-4">2. 상테크(상품권 재테크)의 이해</h3>
            <p>
              합법적인 테두리 내에서 카드 실적을 채우고 현금 유동성을 확보하는 방법으로 '상테크'가 있습니다. 
              온라인 쇼핑몰에서 상품권을 할인된 가격에 구매하고, 이를 포인트로 전환하거나 페이 앱을 통해 환급받는 방식입니다. 
              단, 환급 한도(월 100만 원~200만 원)와 수수료율(약 8%)을 정확히 계산해야 손해를 보지 않습니다.
            </p>

            <div className="flex flex-col md:flex-row gap-6 mt-10">
              <div className="flex-1 bg-white p-6 rounded-2xl shadow-sm border border-amber-100">
                <div className="text-amber-600 font-bold mb-2 flex items-center gap-2">
                  <CreditCard size={20} /> 합법적 포인트 현금화
                </div>
                <p className="text-sm">적립된 포인트를 계좌로 이체하는 것으로, 100% 합법이며 권장되는 소비자의 권리입니다.</p>
              </div>
              <div className="flex-1 bg-white p-6 rounded-2xl shadow-sm border border-red-100">
                <div className="text-red-600 font-bold mb-2 flex items-center gap-2">
                  <AlertTriangle size={20} /> 불법 카드깡 주의
                </div>
                <p className="text-sm">실제 물품 거래 없이 허위 매출을 일으켜 현금을 융통하는 행위는 여신전문금융업법 위반으로 형사 처벌 대상입니다.</p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-end">
            <Link to="/life-hacks-guide" className="inline-flex items-center text-amber-600 font-bold hover:gap-2 transition-all">
              생활 금융 꿀팁 더 보기 <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================================================
          4. COMPREHENSIVE GUIDE: INVESTMENT & WELFARE (H2/H3)
          주제: 투자 전략, 복지 정책, 재테크 기초
          ===================================================================================== */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
              자산을 지키고 불리는<br/>
              스마트한 금융 포트폴리오
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              공격적인 투자보다는 잃지 않는 투자를, <br/>
              모르면 못 받는 정부 지원금은 꼼꼼하게 챙기는 것이 재테크의 핵심입니다.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* 투자 */}
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 transition-all hover:shadow-lg">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-red-600 mb-6 shadow-sm">
                <TrendingUp size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">ETF & 배당주 투자</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                개별 주식의 변동성이 두렵다면 시장 지수(S&P500 등)를 추종하는 <strong>ETF 적립식 투자</strong>가 정답입니다. 
                여기에 분기별로 배당금을 지급하는 우량 배당주를 포트폴리오에 담아 '제2의 월급' 시스템을 구축하십시오.
              </p>
              <Link to="/investment-guide" className="text-sm font-bold text-red-600 flex items-center hover:gap-2 transition-all">
                투자의 정석 가이드 <ChevronRight size={16} />
              </Link>
            </div>

            {/* 복지 */}
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 transition-all hover:shadow-lg">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-purple-600 mb-6 shadow-sm">
                <Landmark size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">2024 필수 복지 정책</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                <strong>청년도약계좌</strong>, <strong>부모급여</strong>, <strong>근로장려금</strong> 등 
                정부가 지원하는 금융 혜택은 신청 기간을 놓치면 받을 수 없습니다. 
                소득 요건이 완화되었으니 꼭 확인해 보세요.
              </p>
              <Link to="/welfare-guide" className="text-sm font-bold text-purple-600 flex items-center hover:gap-2 transition-all">
                복지 정책 가이드 <ChevronRight size={16} />
              </Link>
            </div>

            {/* 재테크 */}
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 transition-all hover:shadow-lg">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-emerald-600 mb-6 shadow-sm">
                <PieChart size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">통장 쪼개기 시스템</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                재테크의 시작은 지출 통제입니다. 급여가 들어오는 즉시 생활비, 비상금, 투자금 통장으로 
                자동 이체되는 <strong>시스템</strong>을 만드십시오. 돈이 머물지 않고 흐르도록 설계하는 것이 자산 관리의 첫걸음입니다.
              </p>
              <Link to="/finance-guide" className="text-sm font-bold text-emerald-600 flex items-center hover:gap-2 transition-all">
                돈 관리 기초 가이드 <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================================
          5. DYNAMIC CONTENT: LATEST INSIGHTS
          ===================================================================================== */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">최신 금융 인사이트</h2>
              <p className="text-slate-500 mt-2">금융 에디터가 작성한 심층 분석 칼럼을 확인하세요.</p>
            </div>
            <Link to="/blog" className="hidden md:flex items-center text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors">
              전체 칼럼 보기 <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentArticles.map(article => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>

          <div className="mt-8 md:hidden">
            <Link to="/blog" className="block w-full py-4 text-center border border-slate-200 rounded-xl font-bold text-slate-600 hover:bg-slate-50">
              더 많은 글 보기
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================================================
          6. FAQ SECTION & DISCLAIMER
          SEO 타겟팅: 롱테일 키워드 (질문형 검색어) 대응
          ===================================================================================== */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-slate-900 flex items-center justify-center gap-2">
              <HelpCircle className="text-blue-600" /> 자주 묻는 질문 (FAQ)
            </h2>
            <p className="text-slate-500 mt-2">금융 초보자들이 가장 많이 검색하는 질문에 답해드립니다.</p>
          </div>

          <div className="space-y-4">
            <details className="group bg-white rounded-2xl p-6 shadow-sm open:shadow-md transition-all cursor-pointer">
              <summary className="flex items-center justify-between font-bold text-lg text-slate-800 list-none select-none">
                Q. 소액 대출을 받으면 신용점수가 많이 떨어지나요?
                <span className="text-slate-400 group-open:rotate-180 transition-transform"><ChevronRight /></span>
              </summary>
              <div className="mt-4 text-slate-600 leading-relaxed pl-4 border-l-2 border-blue-500">
                <p>
                  대출 실행 시 일시적인 신용점수 하락은 발생합니다. 하지만 <strong>1금융권(카카오, 토스 등)</strong>의 
                  비상금 대출을 이용하고 연체 없이 상환한다면 하락 폭은 미미하며 금방 회복됩니다. 
                  반면, 카드론이나 현금서비스를 빈번하게 이용하면 신용평가사에서 '자금 사정 악화'로 판단하여 점수가 크게 하락할 수 있습니다.
                </p>
              </div>
            </details>

            <details className="group bg-white rounded-2xl p-6 shadow-sm open:shadow-md transition-all cursor-pointer">
              <summary className="flex items-center justify-between font-bold text-lg text-slate-800 list-none select-none">
                Q. 신용카드 포인트 현금화는 어떻게 하나요?
                <span className="text-slate-400 group-open:rotate-180 transition-transform"><ChevronRight /></span>
              </summary>
              <div className="mt-4 text-slate-600 leading-relaxed pl-4 border-l-2 border-amber-500">
                <p>
                  <strong>여신금융협회</strong>의 '카드포인트 통합조회' 서비스를 이용하면 됩니다. 
                  별도의 회원가입 없이 본인 인증만으로 모든 카드사의 포인트를 조회하고, 본인 명의 계좌로 입금 신청이 가능합니다. 
                  신청 후 대부분 즉시 입금되거나 다음 영업일에 입금됩니다.
                </p>
              </div>
            </details>

            <details className="group bg-white rounded-2xl p-6 shadow-sm open:shadow-md transition-all cursor-pointer">
              <summary className="flex items-center justify-between font-bold text-lg text-slate-800 list-none select-none">
                Q. 주식 투자는 얼마부터 시작하는 게 좋은가요?
                <span className="text-slate-400 group-open:rotate-180 transition-transform"><ChevronRight /></span>
              </summary>
              <div className="mt-4 text-slate-600 leading-relaxed pl-4 border-l-2 border-emerald-500">
                <p>
                  금액보다는 <strong>시작하는 시기</strong>가 중요합니다. 최근에는 '천 원' 단위로 해외 우량주에 투자할 수 있는 
                  미니스탁이나 소수점 투자 서비스가 많습니다. 커피 한 잔 값을 아껴 S&P500 ETF를 꾸준히 매수하는 것만으로도 
                  복리의 효과를 누릴 수 있습니다.
                </p>
              </div>
            </details>
          </div>

          <div className="mt-16 pt-8 border-t border-slate-200 text-center text-xs text-slate-400 leading-relaxed">
            <p className="font-bold mb-2">[면책 조항 및 법적 고지]</p>
            <p>
              머니와이즈는 금융상품 판매 및 중개 대행사가 아니며, 특정 금융 상품의 가입을 권유하지 않습니다.<br/>
              제공되는 모든 정보는 일반적인 금융 지식 전달을 목적으로 하며, 정보의 정확성과 최신성을 보장하기 위해 노력하지만 법적 책임을 지지는 않습니다.<br/>
              최종 투자 및 대출 결정에 대한 책임은 본인에게 있으며, 과도한 빚은 고통의 시작이 될 수 있음을 유의하시기 바랍니다.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};