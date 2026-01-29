import React, { useState } from 'react';
import { 
  BookOpen, 
  Scale, 
  CreditCard, 
  AlertTriangle, 
  CheckCircle2, 
  Landmark,
  ShieldAlert,
  Wallet,
  ArrowRight,
  Sparkles,
  Loader2
} from 'lucide-react';
import { generateMarketingImage } from '../services/geminiService';

const HERO_PROMPT = "Minimalist and trustworthy 3D illustration of a balanced scale with gold coins and a shield, blue and white theme, representing financial stability and safe lending";

export const LoanGuide: React.FC = () => {
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
    <main className="flex-grow bg-white text-slate-900 font-sans leading-relaxed selection:bg-blue-100">
      {/* =====================================================================================
          1. HEADER SECTION (H1)
          ===================================================================================== */}
      <section className="relative bg-slate-900 text-white py-20 overflow-hidden">
        {heroImage && (
          <>
            <img 
              src={heroImage} 
              alt="금융 안정성과 대출 가이드 배경" 
              className="absolute inset-0 w-full h-full object-cover opacity-20" 
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/60"></div>
          </>
        )}

        <div className="container mx-auto px-4 relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-bold mb-6 backdrop-blur-md uppercase tracking-wider">
            <BookOpen size={14} />
            <span>Essential Financial Guide</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-black leading-tight mb-6 break-keep">
            금융 소비자가 꼭 알아야 할<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              대출의 정석과 자금 관리 원칙
            </span>
          </h1>

          <p className="text-lg text-slate-400 leading-relaxed max-w-2xl font-light mb-8 break-keep">
            대출은 빚인 동시에 자산을 증식하거나 위기를 극복하는 금융 도구입니다. 
            본 페이지는 <strong>소액 대출</strong>의 구조적 특징부터 <strong>신용카드</strong>와의 관계, 
            그리고 현명한 현금 흐름 관리를 위한 필수 지식을 제공합니다. 
            금융 초보자라면 반드시 숙지해야 할 대출의 A to Z를 정리했습니다.
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
          2. CORE CONTENT: DEFINITION & CONCEPT (H2)
          ===================================================================================== */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-start gap-4 mb-8">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-xl mt-1">
              <Landmark size={24} />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">
                1. 대출의 본질: 미래의 소득을 현재로 가져오는 기술
              </h2>
              <div className="prose prose-slate max-w-none text-slate-600 leading-loose">
                <p>
                  많은 분들이 '대출'이라는 단어에 막연한 거부감을 느낍니다. 하지만 금융 공학적 관점에서 <strong>대출</strong>은 
                  '미래에 벌어들일 소득을 이자라는 비용을 지불하고 현재로 당겨와 사용하는 행위'로 정의됩니다.
                </p>
                <p>
                  중요한 것은 '비용(금리)'과 '목적'입니다. 자산 증식을 위한 레버리지(Leverage) 활용이나, 
                  더 큰 비용 발생을 막기 위한 유동성 확보 차원에서의 대출은 합리적인 경제 활동입니다. 
                  반면, 소비나 유흥을 위한 무계획적인 대출은 미래의 나를 빈곤하게 만드는 지름길입니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================================
          3. CORE CONTENT: SMALL LOANS (H2)
          ===================================================================================== */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-start gap-4 mb-8">
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl mt-1">
              <Wallet size={24} />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">
                2. 소액 대출: 편리함 속에 숨겨진 금리의 역설
              </h2>
              <div className="prose prose-slate max-w-none text-slate-600 leading-loose">
                <p>
                  300만 원 이하의 <strong>소액 대출</strong>은 소득 증빙 없이도 모바일로 간편하게 실행할 수 있어 
                  사회초년생이나 주부들에게 인기가 높습니다. 흔히 '비상금 대출'이라고 불리며, 
                  서울보증보험의 보증을 통해 1금융권에서도 취급합니다.
                </p>
                <div className="bg-white p-6 rounded-2xl border border-slate-200 my-6 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-800 mb-3">소액 대출 이용 시 주의사항</h3>
                  <ul className="space-y-3 list-none pl-0">
                    <li className="flex gap-3 items-start">
                      <CheckCircle2 size={18} className="text-emerald-500 mt-1 shrink-0" />
                      <span><strong>금리 확인:</strong> 소액이라도 신용대출이므로 개인의 신용도에 따라 연 5~10% 이상의 금리가 적용될 수 있습니다.</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <CheckCircle2 size={18} className="text-emerald-500 mt-1 shrink-0" />
                      <span><strong>상환 방식:</strong> '만기일시상환'과 '마이너스 통장' 방식 중, 사용한 금액에 대해서만 이자를 내는 마이너스 통장 방식이 유동성 관리에 유리합니다.</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <CheckCircle2 size={18} className="text-emerald-500 mt-1 shrink-0" />
                      <span><strong>신용 영향:</strong> 1금융권 대출은 신용점수 하락 폭이 적지만, 건수가 늘어나면 '다중 채무'로 분류되어 추후 큰 대출 시 불이익을 받을 수 있습니다.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================================
          4. CORE CONTENT: CREDIT CARD & CASH OUT (H2)
          ===================================================================================== */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-start gap-4 mb-8">
            <div className="p-3 bg-amber-50 text-amber-600 rounded-xl mt-1">
              <CreditCard size={24} />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">
                3. 신용카드와 현금 흐름의 관계
              </h2>
              <div className="prose prose-slate max-w-none text-slate-600 leading-loose">
                <p>
                  <strong>신용카드</strong> 사용은 엄밀히 말해 카드사로부터 한 달간 돈을 빌리는 '단기 무이자 대출'입니다. 
                  따라서 신용카드는 현금 흐름을 유연하게 만드는 도구이지만, 잘못 사용하면 빚의 굴레가 됩니다.
                </p>
                
                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">현금서비스 vs 포인트 현금화</h3>
                <p>
                  급전이 필요할 때 가장 주의해야 할 단어가 '현금화'입니다. 
                  여기에는 <strong>두 가지 상반된 의미</strong>가 혼재되어 있습니다.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
                    <div className="flex items-center gap-2 text-red-700 font-bold mb-3">
                      <ShieldAlert size={20} />
                      위험: 카드 현금 서비스
                    </div>
                    <p className="text-sm text-red-900/70">
                      카드사에서 제공하는 단기 카드대출입니다. 
                      이용 즉시 신용점수가 급격히 하락하며, 이자율이 매우 높습니다. 
                      대출 한도 산정 시 부채로 잡혀 불리하게 작용합니다.
                    </p>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                    <div className="flex items-center gap-2 text-blue-700 font-bold mb-3">
                      <Scale size={20} />
                      권장: 포인트 현금화
                    </div>
                    <p className="text-sm text-blue-900/70">
                      카드 사용으로 적립된 포인트를 <strong>현금화</strong>하여 계좌로 받는 것입니다. 
                      이는 소비자의 정당한 자산이며, 여신금융협회를 통해 안전하게 입금받을 수 있습니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================================
          5. CONCLUSION & ADVICE (H2)
          ===================================================================================== */}
      <section className="py-20 bg-slate-900 text-slate-300">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              건강한 금융 생활을 위한 조언
            </h2>
            <p className="text-slate-400">대출을 실행하기 전, 스스로에게 세 가지 질문을 던져보세요.</p>
          </div>

          <div className="grid gap-6">
            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 flex gap-4">
              <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">1</div>
              <div>
                <h4 className="text-lg font-bold text-white mb-2">상환 계획이 명확한가?</h4>
                <p className="text-sm leading-relaxed">
                  막연히 '월급 받으면 갚아야지'라는 생각은 위험합니다. 
                  매달 나가는 고정 지출을 제외하고, 실제로 상환 가능한 여유 자금이 얼마인지 계산기를 두드려봐야 합니다.
                </p>
              </div>
            </div>
            
            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 flex gap-4">
              <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">2</div>
              <div>
                <h4 className="text-lg font-bold text-white mb-2">1금융권부터 알아보았는가?</h4>
                <p className="text-sm leading-relaxed">
                  귀찮다는 이유로, 혹은 잘 모른다는 이유로 2금융권이나 대부업체를 먼저 찾지 마세요. 
                  최근에는 모바일 앱으로 1금융권 대출 가능 여부를 1분 안에 조회할 수 있습니다.
                </p>
              </div>
            </div>

            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 flex gap-4">
              <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">3</div>
              <div>
                <h4 className="text-lg font-bold text-white mb-2">대출의 목적이 소비인가 투자인가?</h4>
                <p className="text-sm leading-relaxed">
                  사라지는 가치(명품, 여행, 유흥)를 위해 빚을 내는 것은 피해야 합니다. 
                  자산 가치가 상승하거나, 생산적인 활동을 위한 대출일 때만 레버리지 효과를 누릴 수 있습니다.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center text-xs text-slate-500">
            <p className="flex items-center justify-center gap-2 mb-2">
              <AlertTriangle size={14} /> 
              <strong>법적 고지</strong>
            </p>
            본 페이지는 일반적인 금융 정보를 제공할 뿐, 대출 상품을 중개하거나 권유하지 않습니다.<br/>
            과도한 빚은 당신에게 큰 불행을 안겨줄 수 있으며, 대출 시 신용등급 또는 개인신용평점이 하락할 수 있습니다.
          </div>
        </div>
      </section>
    </main>
  );
};