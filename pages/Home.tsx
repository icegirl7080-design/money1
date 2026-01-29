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
  Banknote
} from 'lucide-react';
import { generateMarketingImage } from '../services/geminiService';

// --- AI Image Prompts for High-Quality Visuals (SEO & Trust-focused) ---
const HERO_PROMPT = "Cinematic wide shot of a futuristic financial control center, data visualization of stock markets and safe assets, blue and gold color scheme, 8k resolution, professional, trustworthy atmosphere";

const SECTION_IMAGES: Record<string, string> = {
  loan: "3D isometric illustration of a secure bank vault with a digital shield, soft blue lighting, representing safe micro-loans and credit protection, minimalist high-tech style",
  cash: "3D isometric illustration of credit card points transforming into liquid gold coins flowing into a smartphone wallet, amber and white lighting, representing legitimate cash-out services",
  invest: "3D isometric illustration of a small plant growing on a stack of coins with an upward trending graph background, eco-friendly green and white theme, representing compound interest and steady growth"
};

export const Home: React.FC = () => {
  const [heroImage, setHeroImage] = useState<string | null>(null);
  const [sectionImages, setSectionImages] = useState<Record<string, string>>({});
  const [isGenerating, setIsGenerating] = useState(false);

  // 최신 글 3개 추출
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

      const newImages = { ...sectionImages };
      for (const [key, prompt] of Object.entries(SECTION_IMAGES)) {
        const url = await generateMarketingImage(prompt, 'card');
        if (url) {
          newImages[key] = url;
          setSectionImages(prev => ({ ...prev, [key]: url }));
        }
      }
    } catch (e) {
      console.error(e);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <main className="flex-grow bg-white text-slate-900 font-sans">
      
      {/* 
        =====================================================================================
        [SEO H1 Section] HERO: Authority & Trust 
        핵심 가치 제안 및 신뢰도 확보
        ===================================================================================== 
      */}
      <section className="relative min-h-[640px] flex items-center bg-slate-900 overflow-hidden">
        {heroImage ? (
          <>
            <img 
              src={heroImage} 
              alt="Financial Strategies Dashboard" 
              className="absolute inset-0 w-full h-full object-cover opacity-40 scale-105 transition-opacity duration-1000" 
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-slate-900/50"></div>
          </>
        ) : (
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-950 via-slate-900 to-slate-950"></div>
        )}

        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-semibold mb-8 backdrop-blur-md">
              <ShieldCheck size={16} />
              <span>금융감독원 가이드라인 준수 정보 제공</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.2] mb-8 tracking-tight break-keep">
              금융의 불확실성을 <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                확실한 자산 증식의 기회
              </span>로 전환하십시오.
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-10 max-w-2xl font-light break-keep">
              머니와이즈는 단순한 정보 나열을 지양합니다. 
              <strong>안전한 소액 대출</strong> 전략부터 <strong>신용카드 포인트 현금화</strong>, 
              그리고 <strong>성공적인 주식 투자</strong> 로드맵까지. 
              금융 전문가가 검증한 실전 노하우만을 엄선하여 제공합니다.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/finance" 
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] transform hover:-translate-y-1"
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
                {isGenerating ? 'AI 맞춤 테마 생성' : 'AI 테마 적용'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 
        =====================================================================================
        QUICK ACCESS NAV
        모바일 사용성을 고려한 가로 스크롤 메뉴
        ===================================================================================== 
      */}
      <section className="border-b border-slate-100 bg-white sticky top-16 z-20 shadow-sm md:static md:shadow-none">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto no-scrollbar py-6 gap-4 md:grid md:grid-cols-5 md:gap-8">
            {[
              { icon: Coins, label: '소액대출', link: '/loan', desc: '비상금 마련', color: 'text-blue-600', bg: 'bg-blue-50' },
              { icon: CreditCard, label: '현금화팁', link: '/life', desc: '포인트 전환', color: 'text-amber-600', bg: 'bg-amber-50' },
              { icon: TrendingUp, label: '주식투자', link: '/investment', desc: 'ETF/배당', color: 'text-red-600', bg: 'bg-red-50' },
              { icon: ShieldCheck, label: '복지정책', link: '/welfare', desc: '정부지원금', color: 'text-purple-600', bg: 'bg-purple-50' },
              { icon: Landmark, label: '재테크', link: '/finance', desc: '통장관리', color: 'text-emerald-600', bg: 'bg-emerald-50' }
            ].map((item, idx) => (
              <Link 
                key={idx} 
                to={item.link} 
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors min-w-[160px] md:min-w-0 border border-slate-100 md:border-none snap-start"
              >
                <div className={`p-3 rounded-xl ${item.bg} ${item.color}`}>
                  <item.icon size={24} />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-slate-800">{item.label}</span>
                  <span className="text-xs text-slate-500">{item.desc}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 
        =====================================================================================
        [SEO H2 Section] DEEP DIVE 1: LOAN SAFETY
        키워드: 소액 대출, 비상금, 신용점수
        목적: 대출 관련 공포 소구 및 해결책 제시 (신뢰성 강화)
        ===================================================================================== 
      */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image Block */}
            <div className="relative order-2 md:order-1">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-blue-50 shadow-2xl border border-blue-100 relative z-10">
                 {sectionImages['loan'] ? (
                   <img src={sectionImages['loan']} alt="Safe Banking Vault" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                 ) : (
                   <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-slate-100">
                     <ShieldCheck size={80} className="text-blue-200" />
                   </div>
                 )}
                 {/* Trust Badge Overlay */}
                 <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border-l-4 border-blue-600">
                   <div className="flex items-start gap-3">
                     <AlertTriangle size={20} className="text-blue-600 shrink-0 mt-0.5" />
                     <div>
                       <p className="text-xs font-bold text-slate-500 uppercase mb-1">Warning</p>
                       <p className="text-sm font-bold text-slate-800">법정 최고 금리 연 20% 초과 주의</p>
                     </div>
                   </div>
                 </div>
              </div>
              {/* Decorative Background Blob */}
              <div className="absolute -top-10 -left-10 w-full h-full bg-blue-600/5 rounded-3xl -z-10 transform -rotate-3"></div>
            </div>

            {/* Content Block */}
            <div className="order-1 md:order-2">
              <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 text-xs font-bold mb-6 tracking-wide uppercase">
                Smart Lending Strategy
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight break-keep">
                급할수록 더 깐깐하게, <br/>
                <span className="text-blue-600">소액 비상금 대출</span>의 정석
              </h2>
              <div className="prose prose-lg text-slate-600 mb-8">
                <p>
                  갑작스럽게 현금이 필요할 때, 많은 분들이 간편하다는 이유로 고금리 대출의 유혹에 빠지기 쉽습니다. 
                  하지만 <strong>300만 원 이하의 소액 대출</strong>은 소득 증빙 없이도 1금융권(카카오뱅크, 토스 등)에서 
                  충분히 안전하게 이용 가능합니다.
                </p>
                <ul className="space-y-3 mt-4 text-base">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={20} className="text-blue-500 shrink-0 mt-0.5" />
                    <span><strong>신용점수 영향 최소화:</strong> 1금융권 대출 우선 조회 원칙</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={20} className="text-blue-500 shrink-0 mt-0.5" />
                    <span><strong>금리 비교 필수:</strong> 평균 5~7%대 비상금 대출 상품 선별</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={20} className="text-blue-500 shrink-0 mt-0.5" />
                    <span><strong>상환 계획 수립:</strong> 마이너스 통장 방식 활용 팁</span>
                  </li>
                </ul>
              </div>
              <Link to="/loan" className="group inline-flex items-center text-lg font-bold text-slate-900 border-b-2 border-slate-900 pb-1 hover:text-blue-600 hover:border-blue-600 transition-all">
                안전한 대출 상품 비교하기 <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 
        =====================================================================================
        [SEO H2 Section] DEEP DIVE 2: HIDDEN ASSETS
        키워드: 신용카드 현금화, 포인트, 여신금융협회
        목적: '불법'이 아닌 '합법적 자산 찾기'로 프레임 전환 (차별화 포인트)
        ===================================================================================== 
      */}
      <section className="py-20 md:py-28 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content Block */}
            <div>
              <span className="inline-block py-1 px-3 rounded-full bg-amber-100 text-amber-700 text-xs font-bold mb-6 tracking-wide uppercase">
                Asset Liquidation
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight break-keep">
                잠자는 포인트를 현금으로, <br/>
                합법적인 <span className="text-amber-600">신용카드 현금화</span> 전략
              </h2>
              <div className="prose prose-lg text-slate-600 mb-8">
                <p>
                  "카드깡" 같은 불법적인 방법이 아닙니다. 금융 소비자의 정당한 권리인 
                  <strong>'카드 포인트 통합 조회'</strong> 시스템을 통해, 매년 소멸되는 수천억 원의 포인트를 
                  내 계좌로 즉시 <strong>현금화(계좌 입금)</strong>하는 방법을 안내합니다.
                </p>
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm mt-6">
                  <h3 className="text-base font-bold text-slate-800 mb-3 flex items-center gap-2">
                    <Banknote size={18} className="text-amber-500"/> 
                    숨은 돈 찾기 3단계 프로세스
                  </h3>
                  <ol className="text-sm space-y-2 text-slate-600 list-decimal list-inside marker:text-amber-600 marker:font-bold">
                    <li>여신금융협회 통합조회 사이트 접속</li>
                    <li>본인 인증 후 모든 카드사 포인트 일괄 조회</li>
                    <li>'계좌 입금' 신청 버튼 클릭 (즉시 입금)</li>
                  </ol>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link to="/life" className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-xl transition-colors shadow-lg shadow-amber-200">
                  포인트 현금화 가이드
                </Link>
                <Link to="/life" className="px-6 py-3 bg-white border border-slate-300 text-slate-700 font-bold rounded-xl hover:bg-slate-50 transition-colors">
                  상테크(상품권) 꿀팁
                </Link>
              </div>
            </div>

            {/* Image Block */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-amber-50 shadow-2xl border border-amber-100 relative z-10">
                 {sectionImages['cash'] ? (
                   <img src={sectionImages['cash']} alt="Credit Card Points Cash Out" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                 ) : (
                   <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-amber-50 to-orange-50">
                     <CreditCard size={80} className="text-amber-200" />
                   </div>
                 )}
              </div>
              {/* Decorative Background Blob */}
              <div className="absolute -bottom-10 -right-10 w-full h-full bg-amber-500/5 rounded-3xl -z-10 transform rotate-3"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        =====================================================================================
        [SEO H2 Section] SUB FEATURES: INVEST & WELFARE
        목적: 다양한 금융 주제를 그리드 형태로 깊이 있게 소개
        ===================================================================================== 
      */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
              성공 투자의 지름길과 <br/> 놓치기 쉬운 복지 혜택
            </h2>
            <p className="text-slate-500 text-lg break-keep">
              안정적인 미래를 위한 투자 전략부터 정부가 지원하는 숨은 복지 정책까지, 
              머니와이즈가 꼼꼼하게 정리했습니다.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Investment Card */}
            <div className="group bg-slate-50 rounded-3xl p-8 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:bg-red-50 group-hover:text-red-600 transition-colors">
                <TrendingUp size={28} className="text-slate-700 group-hover:text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">ETF & 배당주 투자</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6 min-h-[80px] break-keep">
                개별 주식의 변동성이 두렵다면? 시장 지수를 추종하는 ETF와 매달 월세처럼 들어오는 배당주 포트폴리오로 '잃지 않는 투자'를 시작하세요.
              </p>
              <Link to="/investment" className="flex items-center text-sm font-bold text-red-600 hover:gap-2 transition-all">
                투자 포트폴리오 보기 <ChevronRight size={16} className="ml-1" />
              </Link>
            </div>

            {/* Welfare Card */}
            <div className="group bg-slate-50 rounded-3xl p-8 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:bg-purple-50 group-hover:text-purple-600 transition-colors">
                <ShieldCheck size={28} className="text-slate-700 group-hover:text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">2024 필수 복지 정책</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6 min-h-[80px] break-keep">
                청년 도약 계좌, 부모 급여, 근로 장려금 등 신청 기간을 놓치면 받을 수 없는 정부 지원금. 자격 요건과 신청 방법을 알기 쉽게 정리했습니다.
              </p>
              <Link to="/welfare" className="flex items-center text-sm font-bold text-purple-600 hover:gap-2 transition-all">
                내 지원금 조회하기 <ChevronRight size={16} className="ml-1" />
              </Link>
            </div>

            {/* Finance Basics Card */}
            <div className="group bg-slate-50 rounded-3xl p-8 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-colors">
                <PieChart size={28} className="text-slate-700 group-hover:text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">월급 관리 & 통장 쪼개기</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6 min-h-[80px] break-keep">
                재테크의 시작은 '지출 통제'입니다. 급여 통장, 생활비 통장, 비상금 통장으로 나누는 일명 '통장 쪼개기' 시스템 구축 노하우를 공개합니다.
              </p>
              <Link to="/finance" className="flex items-center text-sm font-bold text-emerald-600 hover:gap-2 transition-all">
                통장 관리법 보기 <ChevronRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 
        =====================================================================================
        LATEST INSIGHTS (Dynamic Content)
        ===================================================================================== 
      */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
               <h2 className="text-2xl md:text-3xl font-bold text-slate-900">최신 금융 인사이트</h2>
               <p className="text-slate-500 mt-2 text-sm md:text-base">금융 에디터가 작성한 깊이 있는 분석 칼럼을 만나보세요.</p>
            </div>
            <Link to="/finance" className="hidden md:flex items-center font-semibold text-slate-600 hover:text-blue-600 transition-colors">
              전체 아티클 보기 <ArrowRight size={18} className="ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentArticles.map(article => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>

          <div className="mt-8 md:hidden text-center">
            <Link to="/finance" className="inline-block w-full py-4 bg-white border border-slate-300 rounded-xl text-slate-700 font-bold hover:bg-slate-50">
              게시글 더보기
            </Link>
          </div>
        </div>
      </section>

      {/* 
        =====================================================================================
        SEO FAQ SECTION
        목적: 롱테일 키워드 확보 및 검색 결과 내 '자주 묻는 질문' 노출 유도 (Rich Snippets)
        ===================================================================================== 
      */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-slate-900 flex items-center justify-center gap-2">
              <HelpCircle className="text-blue-500" /> 머니와이즈 FAQ
            </h2>
            <p className="text-slate-500 mt-2">금융 초보자들이 가장 많이 묻는 질문을 모았습니다.</p>
          </div>
          
          <div className="space-y-4">
            <details className="group p-6 bg-slate-50 rounded-2xl open:bg-white open:shadow-lg open:ring-1 open:ring-blue-100 transition-all cursor-pointer">
              <summary className="flex items-center justify-between font-bold text-lg text-slate-800 list-none select-none">
                Q. 소액 대출을 받으면 신용점수가 많이 떨어지나요?
                <span className="text-slate-400 group-open:rotate-180 transition-transform"><ChevronRight /></span>
              </summary>
              <div className="mt-4 text-slate-600 leading-relaxed pl-4 border-l-2 border-blue-500">
                <p>
                  어디서 대출을 받느냐가 중요합니다. <strong>1금융권(시중은행, 인터넷뱅킹)</strong>의 비상금 대출은 
                  신용점수 하락 폭이 미미하며, 연체 없이 상환하면 금방 회복됩니다. 
                  반면, 카드론(장기카드대출)이나 현금서비스, 저축은행 대출은 신용평가에 상대적으로 부정적인 영향을 줄 수 있습니다.
                </p>
              </div>
            </details>

            <details className="group p-6 bg-slate-50 rounded-2xl open:bg-white open:shadow-lg open:ring-1 open:ring-amber-100 transition-all cursor-pointer">
              <summary className="flex items-center justify-between font-bold text-lg text-slate-800 list-none select-none">
                Q. 신용카드 포인트 현금화는 어떻게 하나요?
                <span className="text-slate-400 group-open:rotate-180 transition-transform"><ChevronRight /></span>
              </summary>
              <div className="mt-4 text-slate-600 leading-relaxed pl-4 border-l-2 border-amber-500">
                <p>
                  <strong>여신금융협회</strong>의 '카드포인트 통합조회' 서비스를 이용하면 됩니다. 
                  회원가입 없이 본인인증만으로 모든 카드사의 잔여 포인트를 한 번에 조회하고, 
                  본인 명의의 계좌로 즉시 입금 신청(1포인트=1원)이 가능합니다. 이는 소비자의 정당한 권리입니다.
                </p>
              </div>
            </details>

            <details className="group p-6 bg-slate-50 rounded-2xl open:bg-white open:shadow-lg open:ring-1 open:ring-emerald-100 transition-all cursor-pointer">
              <summary className="flex items-center justify-between font-bold text-lg text-slate-800 list-none select-none">
                Q. 2024년 청년들이 꼭 챙겨야 할 복지 정책은?
                <span className="text-slate-400 group-open:rotate-180 transition-transform"><ChevronRight /></span>
              </summary>
              <div className="mt-4 text-slate-600 leading-relaxed pl-4 border-l-2 border-emerald-500">
                <p>
                  대표적으로 <strong>'청년도약계좌'</strong>가 있습니다. 월 70만 원씩 5년 납입 시 최대 5,000만 원의 목돈을 
                  마련할 수 있도록 정부가 기여금을 지원합니다. 또한, 월세 거주 청년을 위한 '청년월세 특별지원'도 
                  소득 요건을 확인하여 반드시 신청하시기 바랍니다.
                </p>
              </div>
            </details>
          </div>

          <div className="mt-12 p-6 bg-slate-100 rounded-xl text-center text-xs text-slate-500 leading-relaxed">
            <p className="font-bold mb-1">[면책 조항]</p>
            머니와이즈는 금융상품 판매 및 중개 대리 권한이 없으며, 대출이나 투자를 직접 권유하지 않습니다. <br/>
            모든 투자와 대출 결정에 대한 책임은 본인에게 있으며, 과도한 빚은 고통의 시작이 될 수 있습니다.
          </div>
        </div>
      </section>
    </main>
  );
};