import React, { useState } from 'react';
import { 
  CreditCard, 
  Scale, 
  AlertTriangle, 
  ShieldCheck, 
  TrendingUp,
  Landmark,
  CheckCircle2,
  Sparkles,
  Loader2,
  ArrowRight
} from 'lucide-react';
import { generateMarketingImage } from '../services/geminiService';

const HERO_PROMPT = "High quality 3D render of a premium credit card floating above a financial graph, clean white and gold aesthetic, professional lighting, representing financial power and responsibility";

export const CreditCardGuide: React.FC = () => {
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
    <main className="flex-grow bg-white text-slate-900 font-sans leading-relaxed selection:bg-indigo-100">
      {/* =====================================================================================
          1. HEADER SECTION (H1)
          ===================================================================================== */}
      <section className="relative bg-slate-900 text-white py-20 overflow-hidden">
        {heroImage && (
          <>
            <img 
              src={heroImage} 
              alt="신용카드 구조와 활용 가이드 배경" 
              className="absolute inset-0 w-full h-full object-cover opacity-20" 
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/60"></div>
          </>
        )}

        <div className="container mx-auto px-4 relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-bold mb-6 backdrop-blur-md uppercase tracking-wider">
            <CreditCard size={14} />
            <span>Credit Card Mastery</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-black leading-tight mb-6 break-keep">
            신용카드의 메커니즘과<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              현명한 소비를 위한 금융 전략
            </span>
          </h1>

          <p className="text-lg text-slate-400 leading-relaxed max-w-2xl font-light mb-8 break-keep">
            신용카드는 단순한 결제 수단이 아닙니다. 이는 당신의 <strong>신용(Credit)</strong>을 담보로 한 단기 대출 도구이자, 
            현금 흐름을 유연하게 만드는 양날의 검입니다. 본 페이지는 신용카드의 작동 원리부터 신용점수에 미치는 영향, 
            그리고 위험을 피하는 올바른 사용법까지 금융 소비자가 반드시 알아야 할 핵심 정보를 담고 있습니다.
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
          2. CORE CONTENT: DEFINITION & STRUCTURE (H2)
          ===================================================================================== */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-start gap-4 mb-8">
            <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl mt-1">
              <Landmark size={24} />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">
                1. 신용카드의 본질: 신용 공여와 후불 결제
              </h2>
              <div className="prose prose-slate max-w-none text-slate-600 leading-loose">
                <p>
                  '신용카드(Credit Card)'라는 단어에는 '믿음'이라는 뜻이 내포되어 있습니다. 
                  금융회사가 고객의 상환 능력을 믿고, 미리 대금을 지불해 주는 구조이기 때문입니다. 
                  즉, 우리가 카드를 긁는 순간, 카드사는 가맹점에 돈을 먼저 지불하고, 
                  고객은 약속된 결제일에 카드사에 돈을 갚는 <strong>후불 결제 시스템</strong>입니다.
                </p>
                <p>
                  엄밀히 말하면 신용카드 일시불 결제는 <strong>'약 한 달간의 무이자 대출'</strong>과 같습니다. 
                  내 통장에 당장 현금이 없어도 물건을 살 수 있는 것은, 나의 미래 소득을 담보로 카드사가 돈을 빌려주었기 때문입니다. 
                  이 본질을 이해하지 못하면 신용카드는 자산 증식의 도구가 아닌 빚의 굴레가 될 수 있습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================================
          3. CORE CONTENT: VS CHECK CARD (H2)
          ===================================================================================== */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-start gap-4 mb-8">
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl mt-1">
              <Scale size={24} />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">
                2. 체크카드 vs 신용카드: 무엇이 다른가?
              </h2>
              <div className="prose prose-slate max-w-none text-slate-600 leading-loose">
                <p>
                  가장 큰 차이는 <strong>결제 시점</strong>과 <strong>자금의 원천</strong>입니다. 
                  체크카드는 결제 즉시 내 통장에서 돈이 빠져나갑니다. 즉, 내가 가진 현금 범위 내에서만 소비할 수 있습니다. 
                  반면 신용카드는 결제일(대금 납부일)에 돈이 빠져나가므로, 현재의 현금 보유량과 무관하게 한도 내에서 소비가 가능합니다.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                    <h3 className="text-lg font-bold text-emerald-700 mb-3">체크카드</h3>
                    <ul className="text-sm space-y-2 list-disc list-inside text-slate-600">
                      <li><strong>장점:</strong> 통장 잔고 내에서만 소비하므로 과소비 방지 및 지출 통제가 용이합니다.</li>
                      <li><strong>세제 혜택:</strong> 연말정산 시 소득공제율이 30%로 신용카드(15%)보다 높습니다.</li>
                      <li><strong>단점:</strong> 할부 구매가 불가능하고, 신용점수 상승 기여도가 상대적으로 낮습니다.</li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                    <h3 className="text-lg font-bold text-indigo-700 mb-3">신용카드</h3>
                    <ul className="text-sm space-y-2 list-disc list-inside text-slate-600">
                      <li><strong>장점:</strong> 할부 결제, 다양한 부가 서비스(할인/적립), 신용 이력 형성이 가능합니다.</li>
                      <li><strong>유동성:</strong> 결제 대금 납부일까지 현금을 보유하거나 운용할 수 있습니다.</li>
                      <li><strong>단점:</strong> 과소비 위험이 크고, 연체 시 신용점수가 급락합니다.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================================
          4. CORE CONTENT: CREDIT SCORE & RISKS (H2)
          ===================================================================================== */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-start gap-4 mb-8">
            <div className="p-3 bg-amber-50 text-amber-600 rounded-xl mt-1">
              <TrendingUp size={24} />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">
                3. 신용점수와 현금 흐름의 상관관계
              </h2>
              <div className="prose prose-slate max-w-none text-slate-600 leading-loose">
                <p>
                  신용카드를 적절히 사용하고 제때 갚는 행위는 <strong>'나는 돈을 빌려가도 약속을 잘 지키는 사람입니다'</strong>라고 
                  금융권에 증명하는 과정입니다. 이는 신용점수 상승의 가장 강력한 요인이 됩니다. 
                  반대로 카드를 전혀 쓰지 않으면 평가할 근거가 없어 높은 신용점수를 받기 어렵습니다.
                </p>
                
                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4 flex items-center gap-2">
                  <AlertTriangle size={20} className="text-red-500" />
                  반드시 주의해야 할 '독'이 되는 사용법
                </h3>
                <p>
                  편리함 뒤에는 무서운 함정이 있습니다. 다음의 세 가지는 금융 생활을 망가뜨리는 주범입니다.
                </p>

                <ul className="space-y-4 mt-6">
                  <li className="flex gap-4 p-4 bg-red-50 rounded-xl border border-red-100">
                    <div className="font-bold text-red-700 w-24 shrink-0">리볼빙</div>
                    <div className="text-sm text-red-900/80">
                      결제 대금의 일부만 갚고 나머지는 다음 달로 넘기는 서비스입니다. 
                      높은 이자(연 10%~19%)가 붙으며, 빚이 눈덩이처럼 불어나 신용점수를 갉아먹습니다.
                    </div>
                  </li>
                  <li className="flex gap-4 p-4 bg-red-50 rounded-xl border border-red-100">
                    <div className="font-bold text-red-700 w-24 shrink-0">현금 서비스</div>
                    <div className="text-sm text-red-900/80">
                      ATM에서 카드로 돈을 뽑는 단기 카드대출입니다. 
                      이용 즉시 '대출'로 잡히며, 1금융권 대출 한도를 줄이고 신용점수를 떨어뜨리는 주요 원인입니다.
                    </div>
                  </li>
                  <li className="flex gap-4 p-4 bg-red-50 rounded-xl border border-red-100">
                    <div className="font-bold text-red-700 w-24 shrink-0">불법 현금화</div>
                    <div className="text-sm text-red-900/80">
                      소위 '카드깡'이라 불리는 불법 행위입니다. 
                      허위 매출을 일으켜 현금을 융통하는 것은 여신전문금융업법 위반이며, 
                      적발 시 금융 질서 문란자로 등록되어 모든 금융 거래가 정지될 수 있습니다.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================================
          5. CONCLUSION & GUIDELINES (H2)
          ===================================================================================== */}
      <section className="py-20 bg-slate-900 text-slate-300">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              올바른 신용카드 사용의 3원칙
            </h2>
            <p className="text-slate-400">카드의 주인이 될 것인가, 노예가 될 것인가.</p>
          </div>

          <div className="grid gap-6">
            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 flex flex-col md:flex-row gap-6 items-start">
              <div className="bg-indigo-600 text-white p-3 rounded-xl shrink-0">
                <CheckCircle2 size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-2">선결제 습관 들이기</h4>
                <p className="text-sm leading-relaxed text-slate-400">
                  결제일까지 기다리지 말고, 자금 여유가 있을 때 미리 결제 대금을 납부하세요. 
                  이는 부채 비율을 낮춰 신용점수 관리에 긍정적이며, 과소비를 막는 심리적 방어선이 됩니다.
                </p>
              </div>
            </div>
            
            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 flex flex-col md:flex-row gap-6 items-start">
              <div className="bg-indigo-600 text-white p-3 rounded-xl shrink-0">
                <CheckCircle2 size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-2">할부는 빚이다</h4>
                <p className="text-sm leading-relaxed text-slate-400">
                  무이자 할부라도 남은 할부금은 모두 '부채'로 잡힙니다. 
                  할부 금액이 누적되면 나중에 정말 필요한 대출(전세자금 등)을 받을 때 한도가 줄어들 수 있음을 명심해야 합니다.
                </p>
              </div>
            </div>

            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 flex flex-col md:flex-row gap-6 items-start">
              <div className="bg-indigo-600 text-white p-3 rounded-xl shrink-0">
                <CheckCircle2 size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-2">한도액의 50% 미만 사용</h4>
                <p className="text-sm leading-relaxed text-slate-400">
                  신용카드 한도를 꽉 채워 쓰는 것은 금융권에 '자금 여력이 부족하다'는 신호를 줍니다. 
                  한도 소진율을 30~50% 수준으로 유지하는 것이 신용 평점에 유리합니다.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center text-xs text-slate-500">
            <p className="flex items-center justify-center gap-2 mb-2">
              <ShieldCheck size={14} /> 
              <strong>정보 제공 목적 안내</strong>
            </p>
            본 페이지는 특정 카드 상품을 추천하거나 가입을 유도하지 않습니다.<br/>
            신용카드는 개인의 신용 등급과 상환 능력에 따라 발급 여부 및 한도가 달라질 수 있습니다.
          </div>
        </div>
      </section>
    </main>
  );
};