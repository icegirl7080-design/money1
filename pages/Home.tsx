import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArticleCard } from '../components/ArticleCard';
import { INITIAL_ARTICLES } from '../constants';
import { SEO } from '../components/SEO';
import { 
  ArrowRight, 
  ShieldCheck, 
  Coins, 
  HelpCircle,
  CheckCircle2,
  TrendingUp,
  PieChart,
  ChevronRight,
  Landmark,
  UserCheck,
  FileCheck,
  Zap
} from 'lucide-react';

export const Home: React.FC = () => {
  const recentArticles = useMemo(() => {
    return [...INITIAL_ARTICLES]
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 3);
  }, []);

  return (
    <main className="flex-grow font-sans text-slate-900 selection:bg-sky-200 selection:text-sky-900">
      <SEO 
        title="머니와이즈 | 금융, 대출, 투자, 복지의 모든 것"
        description="소액 대출, 신용카드 현금화 팁, 주식 투자 전략, 정부 복지 정책까지. 당신의 금융 생활을 업그레이드할 필수 정보를 제공합니다."
        keywords={['소액', '대출', '신용카드', '현금화', '재테크', '주식', '복지']}
      />
      
      {/* 
        HERO SECTION 
      */}
      <section className="relative pt-32 pb-40 overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-3/4 h-full bg-gradient-to-l from-sky-50/50 via-white to-white pointer-events-none"></div>
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-blue-100/20 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="container mx-auto px-4 relative z-10 max-w-6xl animate-on-scroll">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-100 text-sky-700 text-xs font-bold mb-8 shadow-sm animate-on-scroll delay-100">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
                </span>
                <span>검증된 금융 정보 업데이트</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tight mb-8 text-slate-900 animate-on-scroll delay-200">
                복잡한 금융을 <br className="hidden md:block"/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-600">
                  가장 쉽고 명확하게.
                </span>
              </h1>

              <p className="text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto md:mx-0 mb-10 font-medium break-keep animate-on-scroll delay-300">
                머니와이즈는 정보의 비대칭을 해결합니다. 
                전문가가 검증한 <strong>대출, 투자, 복지</strong> 정보를 통해 당신의 금융 의사결정을 지원합니다.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 animate-on-scroll delay-300">
                <Link 
                  to="/finance-guide" 
                  className="w-full sm:w-auto px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl transition-all shadow-lg hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  시작하기
                </Link>
                <Link 
                  to="/blog" 
                  className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 text-slate-700 font-bold rounded-xl border border-slate-200 transition-all hover:border-slate-300 flex items-center justify-center gap-2"
                >
                  칼럼 보기 <ArrowRight size={18} />
                </Link>
              </div>
            </div>
            
            <div className="hidden md:block w-96 relative animate-on-scroll delay-300">
              {/* Abstract Illustration/Graphic */}
              <div className="relative z-10 bg-white p-6 rounded-3xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-slate-100 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center text-sky-600"><ShieldCheck size={20} /></div>
                    <div>
                      <div className="h-2.5 w-24 bg-slate-100 rounded mb-1.5"></div>
                      <div className="h-2 w-16 bg-slate-50 rounded"></div>
                    </div>
                  </div>
                  <div className="px-3 py-1 bg-green-50 text-green-600 text-xs font-bold rounded-full">안전</div>
                </div>
                <div className="space-y-4">
                   <div className="h-20 bg-slate-50 rounded-xl w-full"></div>
                   <div className="h-20 bg-slate-50 rounded-xl w-full"></div>
                </div>
              </div>
              <div className="absolute top-10 -right-10 z-0 bg-sky-50 p-6 rounded-3xl w-full h-full transform -rotate-6 border border-sky-100"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        TRUST INDICATORS
      */}
      <section className="py-10 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-4 max-w-6xl">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
             <div className="flex items-center justify-center md:justify-start gap-4 opacity-80 hover:opacity-100 transition-opacity cursor-default">
               <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-sky-600 shrink-0">
                 <UserCheck size={20} />
               </div>
               <div className="text-left">
                 <div className="font-bold text-slate-900 text-sm">전문가 검수</div>
                 <div className="text-[11px] text-slate-500">정보의 정확성 보장</div>
               </div>
             </div>
             <div className="flex items-center justify-center md:justify-start gap-4 opacity-80 hover:opacity-100 transition-opacity cursor-default">
               <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-blue-600 shrink-0">
                 <FileCheck size={20} />
               </div>
               <div className="text-left">
                 <div className="font-bold text-slate-900 text-sm">최신 데이터</div>
                 <div className="text-[11px] text-slate-500">실시간 정책 반영</div>
               </div>
             </div>
             <div className="flex items-center justify-center md:justify-start gap-4 opacity-80 hover:opacity-100 transition-opacity cursor-default">
               <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-emerald-600 shrink-0">
                 <ShieldCheck size={20} />
               </div>
               <div className="text-left">
                 <div className="font-bold text-slate-900 text-sm">금융 사기 예방</div>
                 <div className="text-[11px] text-slate-500">안전한 가이드라인</div>
               </div>
             </div>
             <div className="flex items-center justify-center md:justify-start gap-4 opacity-80 hover:opacity-100 transition-opacity cursor-default">
               <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-purple-600 shrink-0">
                 <Zap size={20} />
               </div>
               <div className="text-left">
                 <div className="font-bold text-slate-900 text-sm">핵심 요약</div>
                 <div className="text-[11px] text-slate-500">3분 만에 읽는 꿀팁</div>
               </div>
             </div>
           </div>
        </div>
      </section>

      {/* 
        CORE CONTENT: LOAN SAFETY 
      */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 max-w-4xl animate-on-scroll">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-sky-600 font-bold tracking-wider text-xs uppercase bg-sky-50 px-3 py-1 rounded-md">Safe Lending Guide</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 leading-snug break-keep">
            긴급 자금 마련의 정석: <br/>
            <span className="text-sky-600 underline decoration-sky-200 underline-offset-4 decoration-4">소액 비상금 대출</span>의 구조
          </h2>

          <div className="prose prose-lg prose-slate text-slate-600 max-w-none leading-loose">
            <p>
              살다 보면 예기치 못한 순간에 현금 유동성이 필요한 상황이 발생합니다. 
              이때 많은 분들이 단순히 '빠르다'는 이유로 고금리 대출이나 현금서비스를 이용하곤 합니다. 
              하지만 금융 지식이 있다면, 신용점수를 지키면서도 안전하게 자금을 융통할 수 있습니다.
            </p>

            <div className="bg-slate-50 rounded-3xl p-8 my-10 border border-slate-100 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span className="bg-sky-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                비상금 대출의 작동 원리
              </h3>
              <p className="mb-6 text-sm md:text-base">
                일반적으로 300만 원 이하의 <strong>소액 대출</strong>은 재직 증명이나 소득 증빙 없이도 실행이 가능합니다. 
                이것이 가능한 이유는 <strong>서울보증보험</strong>이 개인의 통신 등급(Telco Score)이나 금융 거래 이력을 바탕으로 
                은행에 보증서를 발급해주기 때문입니다.
              </p>
              
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span className="bg-sky-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                왜 1금융권을 고집해야 하는가?
              </h3>
              <p className="text-sm md:text-base">
                대출을 실행하면 신용점수 하락은 필연적입니다. 그러나 <strong>1금융권</strong> 대출은 
                2금융권이나 대부업체 대출에 비해 신용점수 하락 폭이 현저히 적습니다. 
              </p>
            </div>

            <div className="my-10 p-6 bg-white border border-slate-200 rounded-2xl shadow-soft">
              <h4 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
                <CheckCircle2 size={20} className="text-sky-600" />
                대출 신청 전 체크리스트
              </h4>
              <ul className="space-y-3 text-sm font-medium text-slate-700">
                <li className="flex gap-3">
                  <span className="text-sky-500 mt-1">•</span>
                  <span>'마이너스 통장' 방식을 선택하여 사용한 금액에 대해서만 이자를 납부하는 것이 유리합니다.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-sky-500 mt-1">•</span>
                  <span>금리인하요구권 적용 대상 상품인지 확인하여, 추후 신용 개선 시 금리 인하를 요청하십시오.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 flex justify-end">
            <Link to="/loan-guide" className="group inline-flex items-center text-sky-600 font-bold hover:bg-sky-50 px-4 py-2 rounded-lg transition-all">
              안전한 대출 가이드 전체 읽기 <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 
        CORE CONTENT: ASSET LIQUIDATION 
      */}
      <section className="py-24 bg-sky-50 border-t border-sky-100">
        <div className="container mx-auto px-4 max-w-4xl animate-on-scroll">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-blue-600 font-bold tracking-wider text-xs uppercase bg-white border border-blue-100 px-3 py-1 rounded-md">Asset Liquidation</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 leading-snug break-keep">
            잠자는 자산의 재발견: <br/>
            <span className="text-blue-600">신용카드 현금화</span>와 포인트 유동화
          </h2>

          <div className="prose prose-lg prose-slate text-slate-600 max-w-none leading-loose">
            <p>
              '현금화'라는 단어를 들으면 불법적인 '카드깡'을 떠올리기 쉽습니다. 
              하지만 금융 소비자가 정당하게 행사해야 할 권리로서의 <strong>합법적 현금화</strong>는 
              자산 관리의 중요한 한 축을 담당합니다. 매년 소멸되는 수천억 원의 카드 포인트를 내 계좌로 옮기는 것부터 시작하십시오.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-10">
              <div className="bg-white p-8 rounded-3xl shadow-soft border border-slate-100 hover:shadow-lg transition-all hover:-translate-y-1">
                <h3 className="text-lg font-bold text-slate-900 mb-4 text-blue-600">여신금융협회 통합 조회</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  <strong>여신금융협회</strong>의 '카드포인트 통합조회' 서비스를 통해 모든 카드사의 잔여 포인트를 한 번에 조회하고, 
                  1:1 비율로 본인 명의 계좌에 <strong>즉시 입금</strong>할 수 있습니다.
                </p>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-soft border border-slate-100 hover:shadow-lg transition-all hover:-translate-y-1">
                <h3 className="text-lg font-bold text-slate-900 mb-4 text-blue-600">상테크 (상품권 재테크)</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  온라인 쇼핑몰에서 상품권을 할인된 가격에 구매하고, 이를 포인트로 전환하거나 환급받는 방식입니다. 
                  단, 환급 한도와 수수료율을 정확히 계산해야 손해를 보지 않습니다.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 flex justify-end">
            <Link to="/life-hacks-guide" className="group inline-flex items-center text-blue-600 font-bold hover:bg-blue-50 px-4 py-2 rounded-lg transition-all">
              생활 금융 꿀팁 더 보기 <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 
        COMPREHENSIVE GUIDE: CARDS 
      */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl animate-on-scroll">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">
              자산을 지키고 불리는<br/>
              스마트한 금융 포트폴리오
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              공격적인 투자보다는 잃지 않는 투자를, <br/>
              모르면 못 받는 정부 지원금은 꼼꼼하게 챙기는 것이 재테크의 핵심입니다.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* 투자 Card */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-soft hover:shadow-xl hover:shadow-sky-100/30 hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-12 h-12 bg-sky-50 rounded-2xl flex items-center justify-center text-sky-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-sky-600 transition-colors">ETF & 배당주 투자</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-8 h-20">
                개별 주식의 변동성이 두렵다면 시장 지수(S&P500 등)를 추종하는 <strong>ETF 적립식 투자</strong>가 정답입니다. 
                '제2의 월급' 시스템을 구축하십시오.
              </p>
              <Link to="/investment-guide" className="inline-flex items-center justify-center w-full py-3.5 rounded-xl bg-slate-50 text-slate-700 font-bold text-sm hover:bg-sky-600 hover:text-white transition-all">
                투자의 정석 가이드 <ChevronRight size={16} className="ml-1" />
              </Link>
            </div>

            {/* 복지 Card */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-soft hover:shadow-xl hover:shadow-blue-100/30 hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                <Landmark size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">2024 필수 복지 정책</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-8 h-20">
                <strong>청년도약계좌</strong>, <strong>부모급여</strong> 등 
                정부가 지원하는 금융 혜택은 신청 기간을 놓치면 받을 수 없습니다. 
                소득 요건이 완화되었으니 꼭 확인해 보세요.
              </p>
              <Link to="/welfare-guide" className="inline-flex items-center justify-center w-full py-3.5 rounded-xl bg-slate-50 text-slate-700 font-bold text-sm hover:bg-blue-600 hover:text-white transition-all">
                복지 정책 가이드 <ChevronRight size={16} className="ml-1" />
              </Link>
            </div>

            {/* 재테크 Card */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-soft hover:shadow-xl hover:shadow-emerald-100/30 hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                <PieChart size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-emerald-600 transition-colors">통장 쪼개기 시스템</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-8 h-20">
                재테크의 시작은 지출 통제입니다. 급여가 들어오는 즉시 생활비, 비상금, 투자금 통장으로 
                자동 이체되는 <strong>시스템</strong>을 만드십시오.
              </p>
              <Link to="/finance-guide" className="inline-flex items-center justify-center w-full py-3.5 rounded-xl bg-slate-50 text-slate-700 font-bold text-sm hover:bg-emerald-600 hover:text-white transition-all">
                돈 관리 기초 가이드 <ChevronRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 
        LATEST ARTICLES GRID 
      */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-6xl animate-on-scroll">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900">최신 금융 인사이트</h2>
              <p className="text-slate-500 mt-3 font-medium">금융 에디터가 작성한 심층 분석 칼럼을 확인하세요.</p>
            </div>
            <Link to="/blog" className="hidden md:flex items-center text-sm font-bold text-slate-500 hover:text-sky-600 transition-colors">
              금융 칼럼 전체 보기 <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentArticles.map((article, index) => (
              <div key={article.id} className={`animate-on-scroll delay-${(index + 1) * 100}`}>
                <ArticleCard article={article} />
              </div>
            ))}
          </div>

          <div className="mt-12 md:hidden">
            <Link to="/blog" className="block w-full py-4 text-center border border-slate-200 bg-white rounded-xl font-bold text-slate-600 hover:border-slate-300 transition-all shadow-sm">
              더 많은 글 보기
            </Link>
          </div>
        </div>
      </section>

      {/* 
        FAQ SECTION 
      */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl animate-on-scroll">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 flex items-center justify-center gap-2">
              <HelpCircle className="text-sky-600" size={28} /> 
              자주 묻는 질문 (FAQ)
            </h2>
            <p className="text-slate-500 mt-2">금융 초보자들이 가장 많이 검색하는 질문에 답해드립니다.</p>
          </div>

          <div className="space-y-3">
            {/* FAQ Item 1 */}
            <details className="group bg-slate-50 rounded-2xl border border-slate-100 open:bg-white open:shadow-lg open:shadow-slate-200/50 open:border-slate-200 transition-all duration-300 cursor-pointer overflow-hidden">
              <summary className="flex items-center justify-between p-6 font-bold text-lg text-slate-700 list-none select-none group-hover:text-slate-900 transition-colors">
                Q. 소액 대출을 받으면 신용점수가 많이 떨어지나요?
                <span className="text-slate-400 group-open:rotate-180 transition-transform duration-300 bg-white rounded-full p-1"><ChevronRight size={20} /></span>
              </summary>
              <div className="px-6 pb-6 text-slate-600 leading-loose text-sm md:text-base border-t border-transparent group-open:border-slate-50 pt-4">
                <p>
                  대출 실행 시 일시적인 신용점수 하락은 발생합니다. 하지만 <strong>1금융권(카카오, 토스 등)</strong>의 
                  비상금 대출을 이용하고 연체 없이 상환한다면 하락 폭은 미미하며 금방 회복됩니다. 
                </p>
              </div>
            </details>

            {/* FAQ Item 2 */}
            <details className="group bg-slate-50 rounded-2xl border border-slate-100 open:bg-white open:shadow-lg open:shadow-slate-200/50 open:border-slate-200 transition-all duration-300 cursor-pointer overflow-hidden">
              <summary className="flex items-center justify-between p-6 font-bold text-lg text-slate-700 list-none select-none group-hover:text-slate-900 transition-colors">
                Q. 신용카드 포인트 현금화는 어떻게 하나요?
                <span className="text-slate-400 group-open:rotate-180 transition-transform duration-300 bg-white rounded-full p-1"><ChevronRight size={20} /></span>
              </summary>
              <div className="px-6 pb-6 text-slate-600 leading-loose text-sm md:text-base border-t border-transparent group-open:border-slate-50 pt-4">
                <p>
                  <strong>여신금융협회</strong>의 '카드포인트 통합조회' 서비스를 이용하면 됩니다. 
                  별도의 회원가입 없이 본인 인증만으로 모든 카드사의 포인트를 조회하고, 본인 명의 계좌로 입금 신청이 가능합니다.
                </p>
              </div>
            </details>

            {/* FAQ Item 3 */}
            <details className="group bg-slate-50 rounded-2xl border border-slate-100 open:bg-white open:shadow-lg open:shadow-slate-200/50 open:border-slate-200 transition-all duration-300 cursor-pointer overflow-hidden">
              <summary className="flex items-center justify-between p-6 font-bold text-lg text-slate-700 list-none select-none group-hover:text-slate-900 transition-colors">
                Q. 주식 투자는 얼마부터 시작하는 게 좋은가요?
                <span className="text-slate-400 group-open:rotate-180 transition-transform duration-300 bg-white rounded-full p-1"><ChevronRight size={20} /></span>
              </summary>
              <div className="px-6 pb-6 text-slate-600 leading-loose text-sm md:text-base border-t border-transparent group-open:border-slate-50 pt-4">
                <p>
                  금액보다는 <strong>시작하는 시기</strong>가 중요합니다. 최근에는 '천 원' 단위로 해외 우량주에 투자할 수 있는 
                  미니스탁이나 소수점 투자 서비스가 많습니다.
                </p>
              </div>
            </details>
          </div>

          <div className="mt-16 pt-8 border-t border-slate-200 text-center text-xs text-slate-400 leading-relaxed">
            <p className="font-bold mb-2 text-slate-500">[면책 조항 및 법적 고지]</p>
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