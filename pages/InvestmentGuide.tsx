import React, { useState } from 'react';
import { 
  TrendingUp, 
  BarChart3, 
  AlertOctagon, 
  Shield, 
  Target, 
  Hourglass,
  Wallet,
  Sparkles,
  Loader2,
  BrainCircuit
} from 'lucide-react';
import { generateMarketingImage } from '../services/geminiService';

const HERO_PROMPT = "Cinematic 3D render of a golden seed growing into a small tree on a stack of coins, warm and hopeful lighting, representing long-term investment and patience, 8k resolution";

export const InvestmentGuide: React.FC = () => {
  const [heroImage, setHeroImage] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerateImage = async () => {
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
      const url = await generateMarketingImage(HERO_PROMPT, 'hero');
      if (url) setHeroImage(url);
    } catch (e) {
      console.error(e);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <main className="flex-grow bg-white text-slate-900 font-sans leading-relaxed selection:bg-red-100">
      {/* =====================================================================================
          1. HEADER SECTION (H1)
          ===================================================================================== */}
      <section className="relative bg-slate-900 text-white py-20 overflow-hidden">
        {heroImage && (
          <>
            <img 
              src={heroImage} 
              alt="주식 투자 원칙과 가이드 배경" 
              className="absolute inset-0 w-full h-full object-cover opacity-20" 
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/60"></div>
          </>
        )}

        <div className="container mx-auto px-4 relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-300 text-xs font-bold mb-6 backdrop-blur-md uppercase tracking-wider">
            <TrendingUp size={14} />
            <span>Investment Fundamentals</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-black leading-tight mb-6 break-keep">
            투자의 본질을 이해하는<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
              주식 시장의 구조와 원칙
            </span>
          </h1>

          <p className="text-lg text-slate-400 leading-relaxed max-w-2xl font-light mb-8 break-keep">
            주식 투자는 단순히 쌀 때 사서 비쌀 때 파는 '머니 게임'이 아닙니다. 
            이는 기업의 성장에 자본을 대고 그 결실을 공유하는 정당한 경제 활동입니다. 
            본 페이지는 <strong>투자와 투기의 차이</strong>를 명확히 하고, 
            초보 투자자가 반드시 알아야 할 <strong>주식 시장의 기본 원리</strong>와 위험 관리 방법을 안내합니다.
          </p>

          <button 
            onClick={handleGenerateImage}
            disabled={isGenerating}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg text-sm text-slate-300 transition-all"
          >
            {isGenerating ? <Loader2 size={16} className="animate-spin" /> : <Sparkles size={16} className="text-yellow-400" />}
            <span>AI 테마 이미지 생성</span>
          </button>
        </div>
      </section>

      {/* =====================================================================================
          2. CORE CONTENT: INVESTMENT VS SPECULATION (H2)
          ===================================================================================== */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-start gap-4 mb-8">
            <div className="p-3 bg-red-50 text-red-600 rounded-xl mt-1">
              <BrainCircuit size={24} />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">
                1. 투자(Investment)와 투기(Speculation)의 경계
              </h2>
              <div className="prose prose-slate max-w-none text-slate-600 leading-loose">
                <p>
                  주식 시장에 진입하기 전, 가장 먼저 정립해야 할 것은 '나의 행위가 투자인가 투기인가'에 대한 정의입니다.
                  <strong>투자</strong>는 자산의 내재 가치(Value)를 분석하고, 그 가치가 가격보다 높다고 판단될 때 자본을 투입하여 
                  장기적인 이익을 추구하는 행위입니다. 반면 <strong>투기</strong>는 가치와 무관하게 오직 시장의 가격 변동(Price Fluctuation)에 베팅하여 
                  단기간의 시세 차익만을 쫓는 행위입니다.
                </p>
                <p>
                  우리가 지향해야 할 것은 기업의 주주(Owner)가 되어 사업의 성과를 공유하는 투자입니다. 
                  주식은 종이 조각이나 디지털 숫자가 아니라, <strong>실재하는 기업의 소유권</strong>임을 인식하는 것이 모든 투자의 출발점입니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================================
          3. CORE CONTENT: MARKET STRUCTURE & SMALL AMOUNT (H2)
          ===================================================================================== */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-start gap-4 mb-8">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-xl mt-1">
              <BarChart3 size={24} />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">
                2. 주식 시장의 구조와 소액 투자의 힘
              </h2>
              <div className="prose prose-slate max-w-none text-slate-600 leading-loose">
                <p>
                  주식 시장은 기업이 자금을 조달하기 위해 발행한 증권이 거래되는 장소입니다. 
                  시장은 수많은 참여자의 매수와 매도 주문에 의해 실시간으로 가격이 결정됩니다. 
                  중요한 점은 거대 자본가뿐만 아니라 개인도 <strong>소액</strong>으로 우량 기업의 지분을 확보할 수 있다는 점입니다.
                </p>
                
                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">
                  소액으로 시작할 때의 강점
                </h3>
                <p>
                  많은 사람들이 "돈이 모이면 투자하겠다"고 말하지만, 투자는 <strong>시간</strong>을 사는 행위입니다. 
                  소액이라도 일찍 시작하면 '복리 효과'를 누릴 수 있습니다. 
                  또한, 적은 금액으로 시작하면 시장의 변동성을 경험하며 심리적인 훈련을 할 수 있어, 
                  추후 자산이 커졌을 때 리스크를 관리하는 데 큰 자산이 됩니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================================
          4. CORE CONTENT: RISK MANAGEMENT (H2)
          ===================================================================================== */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-start gap-4 mb-8">
            <div className="p-3 bg-amber-50 text-amber-600 rounded-xl mt-1">
              <AlertOctagon size={24} />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">
                3. 위험(Risk)의 이해와 레버리지의 경고
              </h2>
              <div className="prose prose-slate max-w-none text-slate-600 leading-loose">
                <p>
                  모든 투자에는 위험이 따릅니다. 주식 시장에서 위험은 주로 <strong>'변동성(Volatility)'</strong>으로 나타납니다. 
                  주가는 매일 오르내리지만, 기업의 가치가 훼손되지 않았다면 하락장은 저가 매수의 기회가 될 수 있습니다. 
                  그러나 이 원칙을 무너뜨리는 것이 바로 <strong>과도한 빚</strong>입니다.
                </p>

                <div className="bg-red-50 p-6 rounded-2xl border border-red-100 my-6">
                  <h3 className="text-lg font-bold text-red-800 mb-3 flex items-center gap-2">
                    <Shield size={20} />
                    절대 금기 사항: 빚투(빚내서 투자)
                  </h3>
                  <p className="text-sm text-red-900/80 mb-4">
                    주식 투자는 여유 자금으로 해야 합니다. 다음과 같은 자금 조달 방식은 
                    단기적인 시장 충격에도 계좌를 회복 불가능한 상태로 만듭니다.
                  </p>
                  <ul className="text-sm text-red-900/80 space-y-2 list-disc list-inside">
                    <li><strong>대출 자금 활용:</strong> 주가가 하락해도 이자는 계속 발생하며, 상환 압박으로 인해 저점에서 주식을 팔아야 하는 상황이 발생합니다.</li>
                    <li><strong>신용카드 현금서비스/카드론:</strong> 고금리 단기 대출을 투자금으로 사용하는 것은 자산을 불리는 것이 아니라, 빚을 가속화하는 행위입니다.</li>
                    <li><strong>신용 거래(미수):</strong> 증권사에서 돈을 빌려 주식을 사는 행위는 주가 하락 시 반대매매(강제 처분)를 당해 원금 이상의 손실을 입을 수 있습니다.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================================
          5. CONCLUSION & MINDSET (H2)
          ===================================================================================== */}
      <section className="py-20 bg-slate-900 text-slate-300">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              성공적인 투자를 위한 현실적 조언
            </h2>
            <p className="text-slate-400">시장을 예측하려 하지 말고, 대응하는 태도가 필요합니다.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
              <div className="text-red-400 mb-4">
                <Hourglass size={32} />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">장기적 관점을 유지하라</h4>
              <p className="text-sm leading-relaxed text-slate-400">
                주식 시장은 단기적으로는 투표 기계(인기 투표)와 같지만, 장기적으로는 저울(무게 측정)과 같습니다. 
                하루하루의 등락에 일희일비하지 말고, 기업의 가치가 성장할 시간을 충분히 주어야 합니다.
              </p>
            </div>
            
            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
              <div className="text-red-400 mb-4">
                <Wallet size={32} />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">잃지 않는 것이 먼저다</h4>
              <p className="text-sm leading-relaxed text-slate-400">
                워런 버핏의 투자 제1원칙은 "절대 돈을 잃지 말라"입니다. 
                수익률을 쫓아 테마주나 급등주를 추격 매수하기보다, 
                자산을 안전하게 지키며 시장 평균 수익률을 꾸준히 따라가는 것이 부자가 되는 가장 확실한 길입니다.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center text-xs text-slate-500">
            <p className="flex items-center justify-center gap-2 mb-2">
              <Target size={14} /> 
              <strong>정보 제공 목적 안내</strong>
            </p>
            본 페이지는 투자 판단을 돕기 위한 일반적인 정보를 제공하며, 특정 종목의 추천이나 수익을 보장하지 않습니다.<br/>
            모든 투자의 책임은 투자자 본인에게 있으며, 원금 손실의 위험이 있음을 인지하시기 바랍니다.
          </div>
        </div>
      </section>
    </main>
  );
};