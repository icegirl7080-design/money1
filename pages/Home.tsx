import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArticleCard } from '../components/ArticleCard';
import { INITIAL_ARTICLES } from '../constants';
import { 
  ArrowRight, 
  TrendingUp, 
  ShieldCheck, 
  Coins, 
  CreditCard, 
  Landmark, 
  ChevronRight, 
  Sparkles,
  Loader2,
  PieChart,
  HelpCircle,
  CheckCircle2,
  AlertTriangle,
  Banknote,
  Info
} from 'lucide-react';
import { generateMarketingImage } from '../services/geminiService';

// --- SEO & Visual Strategy ---
// 고품질 이미지를 위한 프롬프트 설정
const HERO_PROMPT = "Futuristic and clean financial data center, glowing blue digital graphs and shield symbols, 8k resolution, cinematic lighting, representing trust and growth";
const LOAN_IMAGE_PROMPT = "3D minimalist illustration of a bank vault door open with a golden shield inside, soft blue background, symbolizing safe lending";
const CASH_IMAGE_PROMPT = "3D minimalist illustration of credit cards melting into liquid gold coins, flowing into a digital wallet, amber background, symbolizing liquidity";

export const Home: React.FC = () => {
  const [heroImage, setHeroImage] = useState<string | null>(null);
  const [sectionImages, setSectionImages] = useState<{loan?: string, cash?: string}>({});
  const [isGenerating, setIsGenerating] = useState(false);

  const recentArticles = INITIAL_ARTICLES.slice(0, 3);

  const handleGenerateImages = async () => {
    const aiStudio = (window as any).aistudio;
    if (aiStudio) {
      const hasKey = await aiStudio.hasSelectedApiKey();
      if (!hasKey) {
        const success = await aiStudio.openSelectKey();
        if (!success) return;
      }
    }

    setIsGenerating(true);
    try {
      const heroUrl = await generateMarketingImage(HERO_PROMPT, 'hero');
      if (heroUrl) setHeroImage(heroUrl);

      const loanUrl = await generateMarketingImage(LOAN_IMAGE_PROMPT, 'card');
      const cashUrl = await generateMarketingImage(CASH_IMAGE_PROMPT, 'card');
      
      setSectionImages({
        loan: loanUrl || undefined,
        cash: cashUrl || undefined
      });
    } catch (e) {
      console.error(e);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <main className="flex-grow bg-white text-slate-900 font-sans leading-relaxed">
      
      {/* 
        =====================================================================================
        [H1 Section] HERO: Authority & Trust 
        목적: 사이트의 정체성(정보 비대칭 해소) 선언 및 사용자 몰입 유도
        ===================================================================================== 
      */}
      <section className="relative min-h-[600px] flex items-center bg-slate-900 overflow-hidden">
        {heroImage ? (
          <>
            <img 
              src={heroImage} 
              alt="금융 데이터 분석 및 자산 관리 배경" 
              className="absolute inset-0 w-full h-full object-cover opacity-30 scale-105 transition-opacity duration-1000" 
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/95 to-slate-900/40"></div>
          </>
        ) : (
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-900 via-slate-950 to-slate-950"></div>
        )}

        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-semibold mb-8 backdrop-blur-md">
              <ShieldCheck size={16} />
              <span>금융감독원 권고 사항 준수 및 클린 정보 제공</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.2] mb-6 tracking-tight break-keep">
              금융 정보의 불균형을 해소하고<br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                당신의 자산을 지키는 가이드
              </span>
            </h1>
            
            <p className="text-lg text-slate-300 mb-10 max-w-2xl font-light break-keep opacity-90">
              복잡한 금융 상품 속에 숨겨진 기회를 찾아드립니다. 
              <strong>안전한 소액 대출</strong>의 조건부터 <strong>신용카드 포인트 현금화</strong> 비법, 
              그리고 미래를 위한 <strong>주식 투자 전략</strong>까지. 
              머니와이즈는 누구나 쉽게 이해하고 실천할 수 있는 금융 솔루션을 제시합니다.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/finance" 
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-blue-500/30"
              >
                금융 가이드 시작하기
                <ArrowRight size={20} className="ml-2" />
              </Link>
              
              <button 
                onClick={handleGenerateImages}
                disabled={isGenerating}
                className="inline-flex items-center justify-center px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-medium rounded-xl border border-white/10 backdrop-blur-sm transition-all"
              >
                {isGenerating ? <Loader2 size={20} className="animate-spin mr-2" /> : <Sparkles size={20} className="mr-2 text-yellow-400" />}
                {isGenerating ? 'AI 디자인 생성 중...' : 'AI 테마 적용'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 
        =====================================================================================
        [Intro Section] 브랜드 철학 및 가치 제안
        목적: 단순 정보 사이트가 아님을 강조하여 체류 시간 증대
        ===================================================================================== 
      */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-sm font-bold text-blue-600 tracking-widest uppercase mb-3">MoneyWise Philosophy</h2>
          <p className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 leading-snug break-keep">
            "왜 내 통장은 항상 비어 있을까?"<br/>
            그 해답은 '수입의 크기'가 아니라 <strong>'금융 지식의 깊이'</strong>에 있습니다.
          </p>
          <p className="text-slate-600 text-lg leading-relaxed break-keep">
            우리는 금융 전문가가 아니더라도 누구나 자신의 자산을 현명하게 관리할 권리가 있다고 믿습니다. 
            머니와이즈는 인터넷에 떠도는 검증되지 않은 '카더라' 정보 대신, 
            <strong>팩트에 기반한 실용적인 재테크 정보</strong>만을 엄선하여 제공합니다.
          </p>
        </div>
      </section>

      {/* 
        =====================================================================================
        [Content Block 1] LOANS & CREDIT SCORE
        키워드: 소액 대출, 비상금, 신용점수, 1금융권
        구조: 문제 제기 -> 해결책(소액대출 정의) -> 구체적 실행 방안
        ===================================================================================== 
      */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
            {/* 텍스트 콘텐츠 영역 */}
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold mb-6">
                <ShieldCheck size={14} />
                <span>Smart Lending Guide</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight break-keep">
                급할수록 안전하게,<br/>
                <span className="text-blue-600">소액 비상금 대출</span>의 올바른 활용법
              </h2>
              
              <div className="prose prose-lg text-slate-600 mb-8">
                <p>
                  갑작스러운 병원비나 경조사비로 현금이 필요할 때, 많은 분들이 간편하다는 이유만으로 고금리 대출의 유혹에 빠지기 쉽습니다. 
                  하지만 <strong>'소액 대출'</strong>은 접근 방식에 따라 신용점수를 지키는 든든한 방패가 될 수도, 자산을 갉아먹는 독이 될 수도 있습니다.
                </p>
                
                <h3 className="text-xl font-bold text-slate-800 mt-8 mb-4">왜 1금융권 소액 대출이어야 할까요?</h3>
                <p>
                  300만 원 이하의 <strong>비상금 대출</strong>은 소득 증빙이 어려운 주부나 대학생, 사회초년생도 
                  서울보증보험의 보증을 통해 1금융권(카카오뱅크, 토스 등)에서 이용 가능합니다. 
                  이는 2금융권이나 현금서비스를 이용하는 것보다 <strong>신용점수 방어</strong>에 훨씬 유리하며, 
                  금리 또한 연 5~7%대로 합리적입니다.
                </p>

                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm mt-6">
                  <h4 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <CheckCircle2 size={18} className="text-blue-600"/> 
                    대출 전 필수 체크리스트
                  </h4>
                  <ul className="space-y-3 text-sm text-slate-600">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 shrink-0"></span>
                      <span>금융감독원 등록 정식 업체인지 확인하셨나요? (등록대부업체 조회)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 shrink-0"></span>
                      <span>'마이너스 통장' 방식을 선택하여 이자 부담을 줄일 수 있나요?</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 shrink-0"></span>
                      <span>중도상환수수료가 면제되는 상품인가요?</span>
                    </li>
                  </ul>
                </div>
              </div>

              <Link to="/loan" className="group inline-flex items-center text-lg font-bold text-slate-900 hover:text-blue-600 transition-colors">
                안전한 대출 상품 비교하기 <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* 이미지 영역 */}
            <div className="lg:w-1/2 w-full">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-white shadow-xl border border-slate-100 relative group">
                {sectionImages.loan ? (
                  <img src={sectionImages.loan} alt="Safe Banking Vault" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-blue-50">
                    <ShieldCheck size={80} className="text-blue-200" />
                  </div>
                )}
                {/* 툴팁 효과 */}
                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur px-4 py-3 rounded-xl shadow-lg border-l-4 border-blue-500 max-w-xs">
                  <p className="text-xs font-bold text-slate-400 uppercase mb-1">Expert Tip</p>
                  <p className="text-sm font-semibold text-slate-800">
                    금리인하요구권은 법적인 권리입니다.<br/>
                    신용 상태가 개선되었다면 즉시 금리 인하를 요구하세요.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        =====================================================================================
        [Content Block 2] CASH OUT & HIDDEN ASSETS
        키워드: 신용카드 현금화, 현금화, 포인트, 자산관리
        구조: 오해 해소(불법vs합법) -> 포인트 통합조회 소개 -> 이점 강조
        ===================================================================================== 
      */}
      <section className="py-20 bg-white border-y border-slate-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
            {/* 텍스트 콘텐츠 영역 */}
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-bold mb-6">
                <Coins size={14} />
                <span>Hidden Asset Discovery</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight break-keep">
                잠자는 포인트를 깨우는 기술,<br/>
                합법적인 <span className="text-amber-500">신용카드 현금화</span> 전략
              </h2>

              <div className="prose prose-lg text-slate-600 mb-8">
                <p>
                  인터넷에서 흔히 보는 '카드깡'이나 불법 수수료를 떼는 현금화가 아닙니다. 
                  우리가 주목해야 할 것은 소비자의 정당한 권리인 <strong>'카드 포인트 통합 조회 및 계좌 입금'</strong> 서비스입니다. 
                  매년 소멸되는 카드 포인트만 수천억 원에 달한다는 사실을 알고 계신가요?
                </p>
                
                <h3 className="text-xl font-bold text-slate-800 mt-8 mb-4">여신금융협회 통합 조회의 힘</h3>
                <p>
                  과거에는 각 카드사 홈페이지를 일일이 방문해야 했지만, 이제는 <strong>여신금융협회</strong> 시스템을 통해 
                  흩어져 있는 모든 포인트를 1원 단위까지 조회하고, 
                  본인 명의의 계좌로 즉시 <strong>현금화(입금)</strong>할 수 있습니다. 
                  이는 숨어있는 내 자산을 되찾는 가장 확실하고 안전한 방법입니다.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <div className="font-bold text-slate-900 mb-1 flex items-center gap-2">
                      <CreditCard size={16} className="text-amber-500"/> 포인트 현금화
                    </div>
                    <p className="text-sm text-slate-500">1포인트 = 1원 가치로 계좌 입금 (수수료 0원)</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <div className="font-bold text-slate-900 mb-1 flex items-center gap-2">
                      <Banknote size={16} className="text-amber-500"/> 상품권 상테크
                    </div>
                    <p className="text-sm text-slate-500">상품권 구매 후 환급을 통한 마일리지 적립 노하우</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <Link to="/life" className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-xl transition-colors shadow-lg shadow-amber-200">
                  포인트 조회 방법 보기
                </Link>
                <Link to="/life" className="px-6 py-3 bg-white border border-slate-300 text-slate-700 font-bold rounded-xl hover:bg-slate-50 transition-colors">
                  상테크 가이드
                </Link>
              </div>
            </div>

            {/* 이미지 영역 */}
            <div className="lg:w-1/2 w-full">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-amber-50 shadow-xl border border-amber-100 relative group">
                {sectionImages.cash ? (
                  <img src={sectionImages.cash} alt="Credit Card Points to Cash" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <Coins size={80} className="text-amber-300" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        =====================================================================================
        [Content Block 3] INVESTMENT & WELFARE
        키워드: 투자, 주식, 복지, 정책, 재테크
        구조: 3칼럼 그리드로 다양한 주제 포괄
        ===================================================================================== 
      */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4">
              투자는 심플하게, 혜택은 꼼꼼하게
            </h2>
            <p className="text-slate-500 text-lg">
              복잡한 차트 분석보다는 원칙을 지키는 투자를, <br className="hidden sm:block"/>
              놓치기 쉬운 정부 지원금은 빠짐없이 챙기는 스마트한 금융 습관을 제안합니다.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* 투자 섹션 */}
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-red-600 mb-6">
                <TrendingUp size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">ETF & 배당주 투자</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6 h-20 break-keep">
                개별 주식의 등락에 일희일비하지 마세요. 시장 전체를 사는 <strong>ETF 적립식 투자</strong>와 
                제2의 월급을 만드는 <strong>배당주 포트폴리오</strong>로 마음 편한 투자를 시작할 수 있습니다.
              </p>
              <Link to="/investment" className="text-sm font-bold text-red-600 flex items-center hover:gap-2 transition-all">
                포트폴리오 예시 보기 <ChevronRight size={16} className="ml-1" />
              </Link>
            </div>

            {/* 복지 섹션 */}
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600 mb-6">
                <Landmark size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">2024년 필수 복지 정책</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6 h-20 break-keep">
                <strong>청년도약계좌</strong>, <strong>부모급여</strong>, <strong>근로장려금</strong> 등 
                신청 기간을 놓치면 받을 수 없는 정부 지원금이 너무나 많습니다. 나에게 해당되는 정책을 1분 만에 확인해보세요.
              </p>
              <Link to="/welfare" className="text-sm font-bold text-purple-600 flex items-center hover:gap-2 transition-all">
                지원금 리스트 확인 <ChevronRight size={16} className="ml-1" />
              </Link>
            </div>

            {/* 재테크 기초 섹션 */}
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 mb-6">
                <PieChart size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">통장 쪼개기의 기술</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6 h-20 break-keep">
                재테크의 시작은 '지출 통제'입니다. 급여, 생활비, 비상금, 투자 통장으로 
                현금 흐름을 자동화하는 <strong>통장 쪼개기 시스템</strong> 구축 노하우를 공개합니다.
              </p>
              <Link to="/finance" className="text-sm font-bold text-emerald-600 flex items-center hover:gap-2 transition-all">
                시스템 구축하기 <ChevronRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 
        =====================================================================================
        [Latest Articles] 최신 정보 목록
        ===================================================================================== 
      */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">최신 금융 인사이트</h2>
              <p className="text-slate-500 mt-2 text-sm">전문가가 작성한 깊이 있는 분석 칼럼</p>
            </div>
            <Link to="/finance" className="hidden md:flex items-center text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors">
              전체 글 보기 <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentArticles.map(article => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
          <div className="mt-8 md:hidden">
            <Link to="/finance" className="block w-full py-4 text-center border border-slate-200 rounded-xl font-bold text-slate-600 hover:bg-slate-50">
              게시글 더보기
            </Link>
          </div>
        </div>
      </section>

      {/* 
        =====================================================================================
        [SEO FAQ] 자주 묻는 질문
        목적: 롱테일 키워드(Long-tail Keywords) 공략 및 풍부한 텍스트 제공
        ===================================================================================== 
      */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-slate-900 flex items-center justify-center gap-2">
              <HelpCircle className="text-blue-600" /> 자주 묻는 질문 (FAQ)
            </h2>
          </div>

          <div className="space-y-4">
            <details className="group bg-white rounded-2xl p-6 shadow-sm open:shadow-md transition-all cursor-pointer">
              <summary className="flex items-center justify-between font-bold text-lg text-slate-800 list-none">
                Q. 소액 대출도 신용점수에 영향을 주나요?
                <span className="text-slate-400 group-open:rotate-180 transition-transform"><ChevronRight /></span>
              </summary>
              <div className="mt-4 text-slate-600 leading-relaxed pl-4 border-l-2 border-blue-500">
                <p>
                  네, 모든 대출은 신용점수에 영향을 줍니다. 하지만 <strong>1금융권(시중은행, 인터넷전문은행)</strong>의 
                  비상금 대출을 이용하고 연체 없이 상환한다면 신용점수 하락 폭은 매우 미미하며 금방 회복됩니다. 
                  반면, 카드론이나 현금서비스를 빈번하게 이용하면 '대출 패턴'이 안 좋게 평가되어 신용점수가 크게 하락할 수 있습니다.
                </p>
              </div>
            </details>

            <details className="group bg-white rounded-2xl p-6 shadow-sm open:shadow-md transition-all cursor-pointer">
              <summary className="flex items-center justify-between font-bold text-lg text-slate-800 list-none">
                Q. 신용카드 현금화는 불법 아닌가요?
                <span className="text-slate-400 group-open:rotate-180 transition-transform"><ChevronRight /></span>
              </summary>
              <div className="mt-4 text-slate-600 leading-relaxed pl-4 border-l-2 border-amber-500">
                <p>
                  '카드깡'이라 불리는 불법 할인 대출은 여신전문금융업법 위반입니다. 
                  하지만 저희가 안내하는 <strong>'포인트 통합 조회 및 계좌 입금'</strong>은 금융위원회와 여신금융협회가 
                  소비자의 권익 보호를 위해 운영하는 합법적인 제도입니다. 적립된 포인트를 현금으로 전환하는 것은 소비자의 당연한 권리입니다.
                </p>
              </div>
            </details>

            <details className="group bg-white rounded-2xl p-6 shadow-sm open:shadow-md transition-all cursor-pointer">
              <summary className="flex items-center justify-between font-bold text-lg text-slate-800 list-none">
                Q. 주식 투자는 얼마부터 시작해야 하나요?
                <span className="text-slate-400 group-open:rotate-180 transition-transform"><ChevronRight /></span>
              </summary>
              <div className="mt-4 text-slate-600 leading-relaxed pl-4 border-l-2 border-red-500">
                <p>
                  금액은 중요하지 않습니다. 최근에는 '천 원' 단위로 해외 우량주(소수점 투자)를 살 수 있는 서비스가 많습니다. 
                  중요한 것은 <strong>'시간'</strong>입니다. 하루라도 일찍 시작해서 복리의 마법을 누리는 것이 
                  금액보다 훨씬 강력한 무기가 됩니다.
                </p>
              </div>
            </details>
          </div>

          <div className="mt-12 text-center text-xs text-slate-400">
            <p className="mb-2 font-bold">[법적 고지]</p>
            머니와이즈는 금융상품 판매 및 중개 대행사가 아니며, 대출 및 투자를 직접 권유하지 않습니다.<br/>
            제공되는 정보는 참고용이며, 최종 투자 및 대출 결정의 책임은 본인에게 있습니다. 과도한 빚은 고통의 시작입니다.
          </div>
        </div>
      </section>
    </main>
  );
};