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
  CheckCircle2
} from 'lucide-react';
import { generateMarketingImage } from '../services/geminiService';

// --- AI Image Prompts for High-Quality Visuals ---
const HERO_PROMPT = "Cinematic shot of a modern fintech dashboard interface floating in a clean, bright office space, displaying growth charts and secure shield icons, depth of field, 8k resolution, trustworthy blue and white color palette, futuristic yet grounded financial theme";

const SECTION_IMAGES: Record<string, string> = {
  loan: "3D isometric illustration of a secure bank vault door open with glowing shield, soft blue lighting, representing safe lending and security, clean background, high detail",
  cash: "3D isometric illustration of credit cards transforming into golden liquid coins, flowing into a digital wallet, amber and gold lighting, representing asset liquidity and points cash-out, clean background",
  invest: "3D isometric illustration of a growing tree on top of a rising bar chart, green and white theme, representing sustainable investment and compound interest, clean background"
};

export const Home: React.FC = () => {
  const [heroImage, setHeroImage] = useState<string | null>(null);
  const [sectionImages, setSectionImages] = useState<Record<string, string>>({});
  const [isGenerating, setIsGenerating] = useState(false);

  const recentArticles = INITIAL_ARTICLES.slice(0, 3);

  const handleGenerateImages = async () => {
    // API Key availability check via global aistudio object
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
      // 1. Generate Hero Image
      const heroUrl = await generateMarketingImage(HERO_PROMPT, 'hero');
      if (heroUrl) setHeroImage(heroUrl);

      // 2. Generate Section Images
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
      // In a real app, use a toast notification
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <main className="flex-grow bg-white text-slate-900">
      
      {/* =====================================================================================
          HERO SECTION: Authority & Trust
          H1: Main Value Proposition
      ===================================================================================== */}
      <section className="relative min-h-[600px] flex items-center bg-slate-900 overflow-hidden">
        {heroImage ? (
          <>
            <img 
              src={heroImage} 
              alt="Financial Analysis Dashboard" 
              className="absolute inset-0 w-full h-full object-cover opacity-30 scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/95 to-slate-900/40"></div>
          </>
        ) : (
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-950 via-slate-900 to-slate-950"></div>
        )}

        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-semibold mb-8 backdrop-blur-md">
              <ShieldCheck size={16} />
              <span>검증된 금융 정보 플랫폼, 머니와이즈</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.15] mb-8 tracking-tight">
              불확실한 경제 속,<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                당신의 자산을 지키는 나침반
              </span>
            </h1>
            
            <p className="text-lg text-slate-300 leading-relaxed mb-10 max-w-2xl font-light">
              복잡한 금융 상품부터 숨겨진 정부 지원금까지. 
              <strong>소액 대출</strong>의 안전한 활용법, <strong>신용카드 현금화</strong> 팁, 
              그리고 <strong>성공적인 주식 투자</strong>를 위한 로드맵을 제시합니다.
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
                {isGenerating ? 'AI 디자인 생성 중...' : 'AI 테마 적용하기'}
              </button>
            </div>

            {/* Trust Badges */}
            <div className="mt-16 flex flex-wrap gap-8 text-slate-400 text-sm font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-blue-500" />
                <span>최신 금융 정책 반영</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-blue-500" />
                <span>전문가 팩트 체크</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-blue-500" />
                <span>광고 없는 클린 정보</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================================
          QUICK NAVIGATION: User Flow Optimization
          Direct access to core categories
      ===================================================================================== */}
      <section className="border-b border-slate-100 bg-white sticky top-16 z-20 shadow-sm md:static md:shadow-none">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto no-scrollbar py-4 md:py-8 gap-4 md:grid md:grid-cols-5">
            {[
              { icon: Coins, label: '소액대출', link: '/loan', color: 'text-blue-600', bg: 'bg-blue-50' },
              { icon: CreditCard, label: '현금화팁', link: '/life', color: 'text-amber-600', bg: 'bg-amber-50' },
              { icon: TrendingUp, label: '주식투자', link: '/investment', color: 'text-red-600', bg: 'bg-red-50' },
              { icon: ShieldCheck, label: '복지정책', link: '/welfare', color: 'text-purple-600', bg: 'bg-purple-50' },
              { icon: Landmark, label: '재테크기초', link: '/finance', color: 'text-emerald-600', bg: 'bg-emerald-50' }
            ].map((item, idx) => (
              <Link 
                key={idx} 
                to={item.link} 
                className="flex flex-col items-center justify-center min-w-[80px] p-2 rounded-xl hover:bg-slate-50 transition-colors group"
              >
                <div className={`p-3 rounded-2xl mb-2 ${item.bg} ${item.color} group-hover:scale-110 transition-transform`}>
                  <item.icon size={24} />
                </div>
                <span className="text-sm font-bold text-slate-700">{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================================
          FEATURE SECTION 1: LOANS (Debt Management)
          H2: Focused on Safe Lending & Credit Score
      ===================================================================================== */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Visual */}
            <div className="order-2 md:order-1 relative rounded-3xl overflow-hidden bg-blue-50 aspect-[4/3] shadow-lg border border-blue-100">
               {sectionImages['loan'] ? (
                 <img src={sectionImages['loan']} alt="Safe Loan Illustration" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
               ) : (
                 <div className="w-full h-full flex items-center justify-center">
                   <ShieldCheck size={64} className="text-blue-200" />
                 </div>
               )}
               <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow-sm text-sm font-bold text-blue-900">
                 🛡️ 금융감독원 정식 등록 업체 확인 필수
               </div>
            </div>

            {/* Content */}
            <div className="order-1 md:order-2">
              <div className="text-blue-600 font-bold tracking-wider text-sm mb-4 uppercase">Smart Lending Guide</div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
                급할수록 안전하게,<br />
                <span className="text-blue-600">소액 비상금 대출</span>의 정석
              </h2>
              <div className="space-y-6 text-slate-600 leading-relaxed">
                <p>
                  갑작스러운 자금이 필요할 때, 가장 중요한 것은 <strong>'신용점수 방어'</strong>입니다. 
                  무직자나 주부도 1금융권 인터넷 뱅킹(카카오, 토스 등)을 통해 안전하게 이용할 수 있는 비상금 대출 상품이 존재합니다.
                </p>
                <p>
                  머니와이즈는 불법 사금융의 위험을 경고하고, 제도권 내에서 가장 낮은 금리로 이용 가능한 
                  상품을 선별하여 비교 분석합니다. 대출 전 반드시 체크해야 할 체크리스트를 확인하세요.
                </p>
              </div>
              <div className="mt-8 pt-8 border-t border-slate-100">
                <Link to="/loan" className="group inline-flex items-center font-bold text-slate-900 hover:text-blue-600 transition-colors">
                  대출 금리 비교 가이드 보기 <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================================
          FEATURE SECTION 2: LIFE HACKS & CASH OUT
          H2: Finding Hidden Assets
      ===================================================================================== */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <div className="text-amber-600 font-bold tracking-wider text-sm mb-4 uppercase">Hidden Assets</div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
                잠자는 포인트를 현금으로,<br />
                <span className="text-amber-600">신용카드 현금화</span> 전략
              </h2>
              <div className="space-y-6 text-slate-600 leading-relaxed">
                <p>
                  "포인트로 결제하시겠어요?"라는 질문에 무심코 넘기지 마세요. 
                  매년 소멸되는 카드 포인트만 수천억 원에 달합니다. 
                </p>
                <p>
                  <strong>여신금융협회</strong>의 통합 조회를 이용하면, 흩어져 있는 모든 카드사의 포인트를 
                  단 한 번의 클릭으로 <strong>본인 계좌로 현금 입금</strong> 받을 수 있습니다. 
                  또한, 상품권 현금화(상테크) 등 합법적인 범위 내에서 자산 유동성을 높이는 
                  실전 노하우를 공개합니다.
                </p>
              </div>
              <div className="mt-8 flex gap-4">
                <Link to="/life" className="px-6 py-3 bg-white border border-slate-200 text-slate-900 font-bold rounded-xl hover:border-amber-400 hover:text-amber-600 transition-all shadow-sm">
                  숨은 돈 찾기 방법
                </Link>
                <Link to="/life" className="px-6 py-3 bg-amber-500 text-white font-bold rounded-xl hover:bg-amber-600 transition-colors shadow-lg shadow-amber-200">
                  포인트 현금화 바로가기
                </Link>
              </div>
            </div>

            {/* Visual */}
            <div className="relative rounded-3xl overflow-hidden bg-amber-50 aspect-[4/3] shadow-lg border border-amber-100">
               {sectionImages['cash'] ? (
                 <img src={sectionImages['cash']} alt="Credit Card Cash Out" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
               ) : (
                 <div className="w-full h-full flex items-center justify-center">
                   <CreditCard size={64} className="text-amber-200" />
                 </div>
               )}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================================
          FEATURE SECTION 3: INVESTMENT & WELFARE
          Grid layout for diverse topics
      ===================================================================================== */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
              투자와 복지, 두 마리 토끼 잡기
            </h2>
            <p className="text-slate-500 text-lg">
              안정적인 미래를 위한 투자 전략과 정부가 지원하는 복지 혜택,<br className="hidden md:block"/>
              머니와이즈에서 놓치지 말고 챙겨가세요.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1: Investment */}
            <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
              <div className="bg-red-50 w-14 h-14 rounded-2xl flex items-center justify-center text-red-600 mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-red-600 transition-colors">초보자 주식 투자</h3>
              <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                개별 종목 분석이 어렵다면 ETF가 정답입니다. S&P500, 나스닥 등 
                시장 지수를 추종하는 안전한 적립식 투자 방법을 안내합니다.
              </p>
              <Link to="/investment" className="text-sm font-bold text-red-600 flex items-center">
                포트폴리오 예시 보기 <ChevronRight size={16} />
              </Link>
            </div>

            {/* Card 2: Welfare */}
            <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
              <div className="bg-purple-50 w-14 h-14 rounded-2xl flex items-center justify-center text-purple-600 mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheck size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-purple-600 transition-colors">2024 복지 정책</h3>
              <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                청년 도약 계좌, 부모 급여, 근로 장려금 등 
                신청 기간을 놓치면 받을 수 없는 정부 지원금 리스트를 정리했습니다.
              </p>
              <Link to="/welfare" className="text-sm font-bold text-purple-600 flex items-center">
                지원금 조회하기 <ChevronRight size={16} />
              </Link>
            </div>

            {/* Card 3: Finance Basics */}
            <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
              <div className="bg-emerald-50 w-14 h-14 rounded-2xl flex items-center justify-center text-emerald-600 mb-6 group-hover:scale-110 transition-transform">
                <PieChart size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">월급 관리의 기술</h3>
              <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                통장 쪼개기는 재테크의 시작입니다. 소비 통장, 비상금 통장, 
                투자 통장으로 나누어 돈의 흐름을 통제하는 시스템을 만드세요.
              </p>
              <Link to="/finance" className="text-sm font-bold text-emerald-600 flex items-center">
                통장 쪼개기 노하우 <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================================
          LATEST INSIGHTS
          Standard Article Grid with Header
      ===================================================================================== */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-10">
            <div>
               <h2 className="text-3xl font-bold text-slate-900">최신 금융 인사이트</h2>
               <p className="text-slate-500 mt-2">전문가가 작성한 깊이 있는 칼럼을 만나보세요.</p>
            </div>
            <Link to="/finance" className="hidden md:flex items-center font-semibold text-slate-600 hover:text-blue-600 transition-colors">
              전체보기 <ArrowRight size={18} className="ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentArticles.map(article => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
          
          <div className="mt-8 md:hidden text-center">
             <Link to="/finance" className="inline-block px-6 py-3 bg-white border border-slate-300 rounded-lg text-slate-700 font-bold">
               게시글 전체보기
             </Link>
          </div>
        </div>
      </section>

      {/* =====================================================================================
          SEO & FAQ SECTION
          Structured Data for Search Engines
      ===================================================================================== */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-slate-900 flex items-center justify-center gap-2">
              <HelpCircle className="text-blue-500" /> 자주 묻는 질문 (FAQ)
            </h2>
          </div>
          
          <div className="space-y-6">
            <details className="group p-6 bg-slate-50 rounded-2xl open:bg-white open:shadow-lg open:ring-1 open:ring-slate-100 transition-all cursor-pointer">
              <summary className="flex items-center justify-between font-bold text-lg text-slate-800 list-none">
                Q. 소액 대출을 받으면 신용점수가 떨어지나요?
                <span className="text-slate-400 group-open:rotate-180 transition-transform"><ChevronRight /></span>
              </summary>
              <div className="mt-4 text-slate-600 leading-relaxed pl-4 border-l-2 border-blue-500">
                <p>
                  1금융권(시중은행, 인터넷전문은행)의 비상금 대출을 이용할 경우 신용점수 하락 폭은 미미하며, 
                  성실 상환 시 다시 회복됩니다. 단, 2금융권(저축은행, 캐피탈)이나 카드론, 현금서비스를 
                  빈번하게 이용할 경우 신용평가에 부정적인 영향을 줄 수 있으므로 주의가 필요합니다.
                </p>
              </div>
            </details>

            <details className="group p-6 bg-slate-50 rounded-2xl open:bg-white open:shadow-lg open:ring-1 open:ring-slate-100 transition-all cursor-pointer">
              <summary className="flex items-center justify-between font-bold text-lg text-slate-800 list-none">
                Q. 신용카드 포인트 현금화는 불법인가요?
                <span className="text-slate-400 group-open:rotate-180 transition-transform"><ChevronRight /></span>
              </summary>
              <div className="mt-4 text-slate-600 leading-relaxed pl-4 border-l-2 border-amber-500">
                <p>
                  아닙니다. <strong>여신금융협회</strong>에서 제공하는 포인트 통합 조회 및 계좌 입금 서비스는 
                  금융 소비자의 권리를 보장하기 위한 합법적인 제도입니다. 적립된 포인트는 현금과 동일한 가치를 
                  지니므로 소멸되기 전에 반드시 현금화하여 사용하는 것을 권장합니다.
                </p>
              </div>
            </details>

            <details className="group p-6 bg-slate-50 rounded-2xl open:bg-white open:shadow-lg open:ring-1 open:ring-slate-100 transition-all cursor-pointer">
              <summary className="flex items-center justify-between font-bold text-lg text-slate-800 list-none">
                Q. 주식 투자는 얼마부터 시작하는 것이 좋은가요?
                <span className="text-slate-400 group-open:rotate-180 transition-transform"><ChevronRight /></span>
              </summary>
              <div className="mt-4 text-slate-600 leading-relaxed pl-4 border-l-2 border-red-500">
                <p>
                  금액보다는 '꾸준함'이 중요합니다. 최근에는 '미니스탁'이나 소수점 투자를 통해 천 원, 
                  오천 원 단위로도 미국 우량주나 ETF 투자가 가능합니다. 커피 한 잔 값을 아껴 매일 투자하는 
                  습관을 들이는 것이 재테크의 첫걸음입니다.
                </p>
              </div>
            </details>
          </div>

          <div className="mt-12 p-6 bg-slate-50 rounded-xl text-center text-sm text-slate-500">
            머니와이즈는 금융소비자보호법을 준수하며, 대출 권유나 중개를 하지 않습니다.<br/>
            과도한 빚은 고통의 시작입니다. 대출 시 귀하의 신용등급 또는 개인신용평점이 하락할 수 있습니다.
          </div>
        </div>
      </section>
    </main>
  );
};