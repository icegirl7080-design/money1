import React, { useState } from 'react';
import { 
  Coffee, 
  ShoppingBag, 
  CreditCard, 
  PiggyBank, 
  AlertTriangle, 
  Lightbulb,
  Smartphone,
  Repeat,
  Sparkles,
  Loader2,
  CheckCircle2
} from 'lucide-react';
import { generateMarketingImage } from '../services/geminiService';

const HERO_PROMPT = "3D isometric illustration of a modern home interior with organized financial items, piggy bank, and smartphone, soft pastel colors, cozy and smart atmosphere, representing smart living and financial balance";

export const LifeHacksGuide: React.FC = () => {
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
    <main className="flex-grow bg-white text-slate-900 font-sans leading-relaxed selection:bg-amber-100">
      {/* =====================================================================================
          1. HEADER SECTION (H1)
          ===================================================================================== */}
      <section className="relative bg-slate-900 text-white py-20 overflow-hidden">
        {heroImage && (
          <>
            <img 
              src={heroImage} 
              alt="생활 금융 꿀팁 배경" 
              className="absolute inset-0 w-full h-full object-cover opacity-20" 
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/60"></div>
          </>
        )}

        <div className="container mx-auto px-4 relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-bold mb-6 backdrop-blur-md uppercase tracking-wider">
            <Lightbulb size={14} />
            <span>Smart Living & Finance</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-black leading-tight mb-6 break-keep">
            일상 속에서 완성하는 금융 디테일<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
              생활 금융 상식과 소비 최적화 가이드
            </span>
          </h1>

          <p className="text-lg text-slate-400 leading-relaxed max-w-2xl font-light mb-8 break-keep">
            금융 생활의 성패는 거창한 투자 전략이 아닌, 매일 반복되는 <strong>작은 소비 습관</strong>에서 결정됩니다.
            무의식적으로 나가는 지출을 통제하고, 일상 속 금융 도구를 올바르게 활용하는 것만으로도 현금 흐름은 크게 개선됩니다.
            본 페이지는 여러분의 지갑을 지키는 실질적이고 구체적인 생활 꿀팁을 정리했습니다.
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
          2. CORE CONTENT: CONSUMPTION HABITS (H2)
          ===================================================================================== */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-start gap-4 mb-8">
            <div className="p-3 bg-amber-50 text-amber-600 rounded-xl mt-1">
              <ShoppingBag size={24} />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">
                1. 소비의 함정: '필요'와 '욕구' 구분하기
              </h2>
              <div className="prose prose-slate max-w-none text-slate-600 leading-loose">
                <p>
                  우리는 종종 스트레스 해소나 일시적인 만족을 위해 지갑을 엽니다. 
                  하지만 이러한 <strong>감정적 소비</strong>가 반복되면, 정작 중요한 순간에 사용할 자금이 부족해지는 상황에 직면하게 됩니다.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                    <strong className="block text-slate-900 mb-2">상황 인식</strong>
                    <p className="text-sm">"오늘 하루 고생한 나를 위한 선물"이라며 배달 음식을 시키거나, 세일 문구에 혹해 계획에 없던 물건을 구매합니다.</p>
                  </div>
                  <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100">
                    <strong className="block text-amber-800 mb-2">현실적 조언</strong>
                    <p className="text-sm text-amber-900/80">
                      결제 버튼을 누르기 전, <strong>'72시간의 법칙'</strong>을 적용해보세요. 
                      장바구니에 담아두고 3일 뒤에도 여전히 필요하다고 느껴진다면 그때 구매해도 늦지 않습니다. 
                      대부분의 충동구매 욕구는 시간이 지나면 사라집니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================================
          3. CORE CONTENT: CREDIT CARD IN DAILY LIFE (H2)
          ===================================================================================== */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-start gap-4 mb-8">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-xl mt-1">
              <CreditCard size={24} />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">
                2. 신용카드: 일상 속 편리함과 위험 사이
              </h2>
              <div className="prose prose-slate max-w-none text-slate-600 leading-loose">
                <p>
                  신용카드는 현금 없이도 결제가 가능한 편리한 도구지만, 
                  돈이 나간다는 감각을 무디게 만들어 <strong>과소비의 주범</strong>이 되기도 합니다. 
                  특히 할부 결제는 미래의 소득을 미리 당겨 쓰는 빚이라는 사실을 잊지 말아야 합니다.
                </p>
                
                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">
                  무이자 할부의 함정
                </h3>
                <p>
                  "월 3만 원이면 커피 몇 잔 값이네?"라는 생각으로 할부를 긁지만, 
                  이런 <strong>소액 할부</strong>가 5개, 10개 쌓이면 매달 고정적으로 빠져나가는 금액이 눈덩이처럼 불어납니다. 
                  이는 현금 흐름을 경색시켜 저축 여력을 없애고, 결국 급전이 필요할 때 대출을 찾게 만드는 원인이 됩니다.
                </p>

                <div className="bg-white p-5 rounded-xl border border-slate-200 mt-4 flex items-start gap-3">
                   <CheckCircle2 className="text-blue-600 mt-1 shrink-0" size={20} />
                   <p className="text-sm text-slate-700">
                     <strong>실천 팁:</strong> 소모성 물품(식비, 의류, 화장품 등)은 반드시 <strong>일시불</strong>이나 체크카드로 결제하세요. 
                     할부는 내구재(가전, 가구 등)와 같이 오래 사용하는 물건을 살 때만 제한적으로 활용하는 것이 원칙입니다.
                   </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================================
          4. CORE CONTENT: LATTE FACTOR & SUBSCRIPTIONS (H2)
          ===================================================================================== */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-start gap-4 mb-8">
            <div className="p-3 bg-red-50 text-red-600 rounded-xl mt-1">
              <Coffee size={24} />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">
                3. 티끌 모아 태산: 고정비와 '라떼 효과' 관리
              </h2>
              <div className="prose prose-slate max-w-none text-slate-600 leading-loose">
                <p>
                  '라떼 효과(Latte Factor)'란 매일 마시는 커피 한 잔처럼 소소한 지출이 모여 큰 금액이 되는 현상을 말합니다. 
                  여기에 최근 늘어난 각종 <strong>구독 서비스(OTT, 음원, 멤버십)</strong>는 통장을 스쳐 지나가는 '사이버 머니'처럼 인식되기 쉽습니다.
                </p>

                <div className="space-y-4 mt-6">
                  <div className="flex flex-col md:flex-row gap-4 items-start border-l-4 border-red-200 pl-4">
                    <div className="shrink-0 font-bold text-slate-900 w-24">문제점</div>
                    <div className="text-sm text-slate-600">
                      월 1만 원 내외의 구독료는 부담 없어 보이지만, 5개를 구독하면 연간 60만 원입니다. 
                      사용하지 않는데도 해지하는 것을 잊어버려 낭비되는 경우가 많습니다.
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row gap-4 items-start border-l-4 border-red-400 pl-4">
                     <div className="shrink-0 font-bold text-slate-900 w-24">해결책</div>
                     <div className="text-sm text-slate-600">
                       정기적으로 카드 명세서를 꼼꼼히 살피며 <strong>'구독 다이어트'</strong>를 하세요. 
                       최근 3개월간 이용하지 않은 서비스는 과감히 해지하고, 친구나 가족과 계정을 공유하여 비용을 절감하는 것도 방법입니다.
                     </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================================
          5. CORE CONTENT: CASH FLOW & CAUTION (H2)
          ===================================================================================== */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-start gap-4 mb-8">
            <div className="p-3 bg-purple-50 text-purple-600 rounded-xl mt-1">
              <PiggyBank size={24} />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">
                4. 현금 흐름 관리와 금융 정보의 활용
              </h2>
              <div className="prose prose-slate max-w-none text-slate-600 leading-loose">
                <p>
                  생활비 관리는 단순히 안 쓰는 것이 아니라, <strong>예산 안에서 계획적으로 쓰는 것</strong>입니다. 
                  월급이 들어오면 저축액과 고정 지출을 먼저 빼두고(선저축 후지출), 남은 돈으로 생활하는 습관을 들여야 합니다.
                </p>

                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4 flex items-center gap-2">
                  <AlertTriangle size={20} className="text-amber-500" />
                  편법 정보에 주의하세요
                </h3>
                <p>
                  온라인 커뮤니티나 SNS에는 '급전 마련 꿀팁', '소액 현금화' 등의 자극적인 정보가 넘쳐납니다. 
                  하지만 정상적인 금융 거래가 아닌 방식(허위 매출, 상품권 깡 등)은 
                  수수료 폭탄을 맞을 뿐만 아니라, 금융 질서 문란 행위로 간주되어 
                  향후 정상적인 금융 생활(대출, 카드 발급)이 불가능해질 수 있습니다.
                </p>
                <p>
                  진정한 생활 꿀팁은 <strong>합법적이고 지속 가능한 방식</strong>(포인트 현금화, 예금 특판 활용, 절세 등)으로 
                  자산을 한 푼이라도 아끼는 것입니다. 위험한 지름길보다 안전한 정석이 가장 빠릅니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================================
          6. CONCLUSION & MINDSET (H2)
          ===================================================================================== */}
      <section className="py-20 bg-slate-900 text-slate-300">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              습관이 미래의 부를 결정합니다
            </h2>
            <p className="text-slate-400">단기적인 요행보다 장기적인 시스템을 만드세요.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
              <div className="text-amber-400 mb-4">
                <Repeat size={32} />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">반복의 힘을 믿으세요</h4>
              <p className="text-sm leading-relaxed text-slate-400">
                하루 5천 원을 아끼는 것은 작아 보이지만, 
                그 습관이 모여 1년이면 약 180만 원이 됩니다. 
                여기에 투자가 더해지면 복리의 마법이 시작됩니다. 
                오늘의 작은 절제가 내일의 자유를 만듭니다.
              </p>
            </div>
            
            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
              <div className="text-amber-400 mb-4">
                <Smartphone size={32} />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">기록하고 점검하세요</h4>
              <p className="text-sm leading-relaxed text-slate-400">
                가계부 앱이나 뱅킹 앱의 자산 관리 기능을 활용하여 
                자신의 소비 패턴을 객관적으로 바라보세요. 
                돈의 흐름을 파악하는 것만으로도 불필요한 지출을 
                스스로 통제할 수 있는 힘이 생깁니다.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center text-xs text-slate-500">
            <p className="flex items-center justify-center gap-2 mb-2">
              <Lightbulb size={14} /> 
              <strong>정보 제공 목적 안내</strong>
            </p>
            본 페이지는 건전한 소비 문화와 금융 습관 형성을 돕기 위해 작성되었습니다.<br/>
            개인의 재무 상황에 따라 구체적인 자산 관리 방법은 달라질 수 있습니다.
          </div>
        </div>
      </section>
    </main>
  );
};