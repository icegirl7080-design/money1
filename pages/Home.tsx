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
  BookOpen
} from 'lucide-react';
import { generateMarketingImage } from '../services/geminiService';

const HERO_PROMPT = "Futuristic and clean financial data center, glowing blue digital graphs and shield symbols, 8k resolution, cinematic lighting, representing trust and growth";
const LOAN_IMAGE_PROMPT = "3D isometric illustration of a secure bank vault door, clean and minimal style, soft blue lighting, representing financial security";
const CASH_IMAGE_PROMPT = "3D isometric illustration of gold coins flowing into a smartphone wallet from credit cards, warm lighting, representing asset liquidity";

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
      
      {/* =====================================================================================
          HERO SECTION: H1 & Main Identity
          ===================================================================================== */}
      <section className="relative min-h-[500px] flex items-center bg-slate-900 overflow-hidden">
        {heroImage ? (
          <>
            <img 
              src={heroImage} 
              alt="스마트한 금융 라이프를 위한 데이터 시각화" 
              className="absolute inset-0 w-full h-full object-cover opacity-30 scale-105 transition-opacity duration-1000" 
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/95 to-slate-900/50"></div>
          </>
        ) : (
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-900 via-slate-950 to-slate-950"></div>
        )}

        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-semibold mb-6 backdrop-blur-md">
              <ShieldCheck size={16} />
              <span>금융감독원 가이드라인 준수 · 신뢰할 수 있는 정보</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.3] mb-6 tracking-tight break-keep">
              금융 정보의 불균형을 해소하고,<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                당신의 소중한 자산을 지키는 가이드
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-3xl font-light leading-relaxed break-keep opacity-90">
              우리는 누구나 금융 전문가가 될 수 있다고 믿습니다. 
              복잡한 약관 속에 숨겨진 <strong>소액 대출</strong>의 안전한 활용법부터, 
              잠들어 있는 <strong>신용카드 포인트 현금화</strong> 전략, 
              그리고 미래를 위한 <strong>투자와 복지</strong> 정보까지. 
              머니와이즈는 당신의 현명한 금융 결정을 위한 나침반이 되겠습니다.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/finance" 
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-blue-500/30"
              >
                <BookOpen size={20} className="mr-2" />
                금융 가이드 읽기
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

      {/* =====================================================================================
          MAIN CONTENT BODY: Article Style Structure
          ===================================================================================== */}
      
      {/* Section 1: Loans (Safe Lending) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="lg:w-3/5">
              <div className="flex items-center gap-2 text-blue-600 font-bold mb-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-100"><ShieldCheck size={18}/></span>
                <span className="tracking-wide uppercase text-sm">Safe Lending Strategy</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight break-keep">
                급전이 필요할 때,<br/>
                <span className="text-blue-600">안전한 소액 대출</span>을 구분하는 기준
              </h2>
              
              <div className="prose prose-lg text-slate-600 space-y-6">
                <p>
                  갑작스러운 병원비나 경조사비로 현금이 필요할 때, 많은 분들이 '간편함'을 이유로 고금리 대출의 유혹에 빠집니다. 
                  하지만 <strong>소액 대출</strong>을 선택할 때 가장 먼저 고려해야 할 것은 금리가 아닌 <strong>'신용점수 방어'</strong>입니다.
                </p>
                
                <h3 className="text-xl font-bold text-slate-800 pt-4">1금융권 비상금 대출 우선 조회</h3>
                <p>
                  300만 원 이하의 소액은 소득 증빙이 없어도 1금융권(카카오뱅크, 토스뱅크 등)에서 서울보증보험의 보증을 통해 대출이 가능합니다. 
                  이는 2금융권이나 현금서비스를 이용하는 것보다 신용점수 하락 폭이 훨씬 적습니다. 
                  대출 신청 전, 반드시 '나의 대출 한도 조회'를 통해 1금융권 가능 여부를 먼저 확인해야 합니다.
                </p>

                <div className="bg-slate-50 p-6 rounded-2xl border-l-4 border-blue-500 my-6">
                  <h4 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <AlertTriangle size={18} className="text-blue-500" /> 주의해야 할 '무직자 대출' 광고
                  </h4>
                  <p className="text-sm text-slate-600">
                    SNS나 문자로 오는 "누구나 100% 승인" 광고는 불법 사금융일 확률이 높습니다. 
                    법정 최고 금리(연 20%)를 초과하거나 선이자를 요구하는 곳은 절대 이용해선 안 됩니다. 
                    반드시 금융감독원 '등록대부업체 통합조회'를 통해 정식 등록 업체인지 확인하세요.
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100">
                <Link to="/loan" className="inline-flex items-center font-bold text-blue-700 hover:text-blue-500 transition-colors">
                  대출 금리 비교 및 안전 가이드 보기 <ArrowRight size={18} className="ml-2" />
                </Link>
              </div>
            </div>

            <div className="lg:w-2/5 w-full">
              <div className="sticky top-24">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-blue-50 shadow-xl border border-blue-100 relative group">
                  {sectionImages.loan ? (
                    <img src={sectionImages.loan} alt="안전한 금융 대출 금고 이미지" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center">
                      <ShieldCheck size={80} className="text-blue-200 mb-6" />
                      <p className="text-blue-300 font-bold text-lg">AI 이미지를 생성하여<br/>시각적 정보를 확인하세요</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Cash Out (Hidden Assets) */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col lg:flex-row-reverse gap-12 items-start">
            <div className="lg:w-3/5">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-amber-100"><Coins size={18}/></span>
                <span className="tracking-wide uppercase text-sm">Asset Liquidation</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight break-keep">
                <span className="text-amber-600">신용카드 현금화</span>,<br/>
                불법과 합법의 경계에서 자산 찾기
              </h2>

              <div className="prose prose-lg text-slate-600 space-y-6">
                <p>
                  '카드깡'이나 불법 수수료를 떼는 현금화는 명백한 불법이며 금융 질서 문란 행위입니다. 
                  하지만 우리가 주목해야 할 <strong>현금화</strong>는 소비자의 정당한 권리인 
                  <strong>'포인트 계좌 입금'</strong> 서비스입니다.
                </p>

                <h3 className="text-xl font-bold text-slate-800 pt-4">여신금융협회 포인트 통합 조회</h3>
                <p>
                  매년 소멸되는 카드 포인트만 수천억 원에 달합니다. 
                  과거에는 카드사별로 포인트를 확인해야 했지만, 이제는 <strong>여신금융협회</strong> 시스템을 통해 
                  모든 카드사의 포인트를 한 번에 조회하고, 1포인트당 1원으로 환산하여 
                  본인 명의 계좌로 즉시 입금받을 수 있습니다.
                </p>

                <h3 className="text-xl font-bold text-slate-800 pt-4">상테크(상품권 재테크)의 활용</h3>
                <p>
                  합법적인 테두리 안에서 카드 실적을 채우고 현금 유동성을 확보하는 방법으로 '상테크'가 있습니다. 
                  상품권을 구매하여 포인트나 마일리지를 적립하고, 이를 다시 현금화하는 과정입니다. 
                  단, 환급 한도와 수수료율을 정확히 계산해야 손해를 보지 않습니다.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap gap-4">
                <Link to="/life" className="inline-flex items-center px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-xl transition-colors shadow-md">
                  <Coins size={18} className="mr-2" />
                  포인트 현금화 방법 보기
                </Link>
                <Link to="/life" className="inline-flex items-center px-6 py-3 bg-white border border-slate-300 text-slate-700 font-bold rounded-xl hover:bg-slate-50 transition-colors">
                  상테크 가이드
                </Link>
              </div>
            </div>

            <div className="lg:w-2/5 w-full">
              <div className="sticky top-24">
                 <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-amber-50 shadow-xl border border-amber-100 relative group">
                  {sectionImages.cash ? (
                    <img src={sectionImages.cash} alt="카드 포인트 현금화 일러스트" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center">
                      <CreditCard size={80} className="text-amber-200 mb-6" />
                      <p className="text-amber-300 font-bold text-lg">AI 이미지를 생성하여<br/>관련 이미지를 확인하세요</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Investment & Welfare (Grid Layout) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
              미래를 위한 투자와<br/>놓치지 말아야 할 복지
            </h2>
            <p className="text-slate-500 text-lg">
              자산을 불리는 공격적인 투자 전략과, 정부가 보장하는 든든한 복지 혜택을 동시에 챙기세요.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-red-600 mb-6 shadow-sm">
                <TrendingUp size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">초보자를 위한 주식 투자</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                개별 종목 분석이 어렵다면 시장 전체를 사는 <strong>ETF</strong>가 정답입니다. 
                S&P500, 나스닥100 등 우상향하는 지수에 적립식으로 투자하고, 
                배당주를 통해 제2의 월급 시스템을 구축하는 방법을 안내합니다.
              </p>
              <Link to="/investment" className="text-sm font-bold text-red-600 hover:text-red-700 flex items-center">
                투자 포트폴리오 보기 <ChevronRight size={16} />
              </Link>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-purple-600 mb-6 shadow-sm">
                <Landmark size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">2024 필수 복지 정책</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                <strong>청년도약계좌</strong>, 부모급여, 근로장려금 등 신청하지 않으면 받을 수 없는 정부 지원금이 많습니다. 
                나이, 소득, 가구원 수에 따라 내가 받을 수 있는 숨은 지원금을 찾아드립니다.
              </p>
              <Link to="/welfare" className="text-sm font-bold text-purple-600 hover:text-purple-700 flex items-center">
                지원금 리스트 확인 <ChevronRight size={16} />
              </Link>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-emerald-600 mb-6 shadow-sm">
                <PieChart size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">월급 관리와 통장 쪼개기</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                재테크의 시작은 '지출 통제'입니다. 급여 통장, 생활비 통장, 비상금 통장, 투자 통장으로 
                자금의 흐름을 자동화하는 <strong>통장 쪼개기</strong> 시스템으로 돈이 모이는 구조를 만드세요.
              </p>
              <Link to="/finance" className="text-sm font-bold text-emerald-600 hover:text-emerald-700 flex items-center">
                통장 관리법 보기 <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================================
          LATEST INSIGHTS
          ===================================================================================== */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">최신 금융 인사이트</h2>
              <p className="text-slate-500 mt-2">전문가가 분석한 깊이 있는 금융 칼럼</p>
            </div>
            <Link to="/finance" className="hidden md:flex items-center text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors">
              전체 게시글 보기 <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentArticles.map(article => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
          <div className="mt-8 md:hidden">
            <Link to="/finance" className="block w-full py-4 text-center border border-slate-200 rounded-xl font-bold text-slate-600 hover:bg-slate-50">
              더 많은 글 보기
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================================================
          FAQ SECTION (SEO Focused)
          ===================================================================================== */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-slate-900 flex items-center justify-center gap-2">
              <HelpCircle className="text-blue-600" /> 자주 묻는 질문 (FAQ)
            </h2>
            <p className="text-slate-500 mt-2">금융 초보자들이 가장 많이 검색하는 질문을 모았습니다.</p>
          </div>

          <div className="space-y-4">
            <details className="group bg-white rounded-2xl p-6 shadow-sm open:shadow-md transition-all cursor-pointer">
              <summary className="flex items-center justify-between font-bold text-lg text-slate-800 list-none select-none">
                Q. 소액 대출도 신용점수가 떨어지나요?
                <span className="text-slate-400 group-open:rotate-180 transition-transform"><ChevronRight /></span>
              </summary>
              <div className="mt-4 text-slate-600 leading-relaxed pl-4 border-l-2 border-blue-500">
                <p>
                  대출 실행 시 신용점수 변동은 불가피합니다. 하지만 <strong>1금융권 비상금 대출</strong>은 
                  2금융권(저축은행, 카드론)이나 현금서비스에 비해 하락 폭이 매우 작습니다. 
                  연체 없이 성실하게 상환한다면 신용점수는 금방 회복되며, 오히려 긍정적인 신용 거래 이력으로 남을 수 있습니다.
                </p>
              </div>
            </details>

            <details className="group bg-white rounded-2xl p-6 shadow-sm open:shadow-md transition-all cursor-pointer">
              <summary className="flex items-center justify-between font-bold text-lg text-slate-800 list-none select-none">
                Q. 신용카드 현금화, 정말 합법인가요?
                <span className="text-slate-400 group-open:rotate-180 transition-transform"><ChevronRight /></span>
              </summary>
              <div className="mt-4 text-slate-600 leading-relaxed pl-4 border-l-2 border-amber-500">
                <p>
                  네, 머니와이즈에서 안내하는 방법은 <strong>'여신금융협회 포인트 통합 조회 및 계좌 입금'</strong> 서비스로, 
                  금융당국이 장려하는 합법적인 제도입니다. 허위 매출을 일으켜 현금을 융통하는 '카드깡'과는 완전히 다릅니다. 
                  내 카드에 적립된 포인트를 현금으로 전환하여 통장으로 받는 것은 소비자의 정당한 권리입니다.
                </p>
              </div>
            </details>

            <details className="group bg-white rounded-2xl p-6 shadow-sm open:shadow-md transition-all cursor-pointer">
              <summary className="flex items-center justify-between font-bold text-lg text-slate-800 list-none select-none">
                Q. 사회초년생 재테크, 무엇부터 해야 하나요?
                <span className="text-slate-400 group-open:rotate-180 transition-transform"><ChevronRight /></span>
              </summary>
              <div className="mt-4 text-slate-600 leading-relaxed pl-4 border-l-2 border-emerald-500">
                <p>
                  가장 먼저 해야 할 일은 '통장 쪼개기'입니다. 급여 통장, 소비 통장, 비상금 통장, 투자 통장을 분리하여 
                  돈의 흐름을 파악하세요. 그 후, 청년도약계좌와 같은 정부 지원 고금리 적금 상품을 1순위로 가입하고, 
                  여유 자금으로 ETF 투자를 병행하는 것을 추천합니다.
                </p>
              </div>
            </details>
          </div>

          <div className="mt-12 text-center text-xs text-slate-400 leading-relaxed">
            <p className="font-bold mb-1">[법적 고지]</p>
            머니와이즈는 금융상품 판매 및 중개 대행사가 아니며, 특정 금융 상품 가입을 권유하지 않습니다.<br/>
            제공되는 정보는 일반적인 금융 지식 전달을 목적으로 하며, 최종 투자 및 대출 결정의 책임은 본인에게 있습니다.
          </div>
        </div>
      </section>
    </main>
  );
};