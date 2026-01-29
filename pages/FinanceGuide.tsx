import React, { useState } from 'react';
import { 
  Wallet, 
  TrendingUp, 
  PieChart, 
  ArrowRightLeft, 
  Landmark, 
  Target,
  ShieldCheck,
  Sparkles,
  Loader2,
  Lightbulb
} from 'lucide-react';
import { generateMarketingImage } from '../services/geminiService';

const HERO_PROMPT = "3D isometric illustration of a balanced financial ecosystem with coins, growing plants, and digital charts, clean blue and gold color palette, representing financial wisdom and growth";

export const FinanceGuide: React.FC = () => {
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
    <main className="flex-grow bg-white text-slate-900 font-sans leading-relaxed selection:bg-emerald-100">
      {/* =====================================================================================
          1. HEADER SECTION (H1)
          ===================================================================================== */}
      <section className="relative bg-slate-900 text-white py-20 overflow-hidden">
        {heroImage && (
          <>
            <img 
              src={heroImage} 
              alt="금융과 재테크 기초 가이드 배경" 
              className="absolute inset-0 w-full h-full object-cover opacity-20" 
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/60"></div>
          </>
        )}

        <div className="container mx-auto px-4 relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-bold mb-6 backdrop-blur-md uppercase tracking-wider">
            <Wallet size={14} />
            <span>Financial Basics</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-black leading-tight mb-6 break-keep">
            금융과 재테크의 본질:<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
              부를 쌓는 돈 관리의 기초
            </span>
          </h1>

          <p className="text-lg text-slate-400 leading-relaxed max-w-2xl font-light mb-8 break-keep">
            돈을 많이 버는 것과 돈을 잘 모으는 것은 다른 영역의 능력입니다. 
            현대 사회에서 <strong>금융 지식</strong>은 생존을 위한 필수 교양이며, 
            <strong>재테크</strong>는 자본주의 시스템 안에서 나의 자산을 지키고 불리는 기술입니다.
            본 페이지는 금융 생활을 처음 시작하는 분들을 위해 돈 관리의 핵심 원칙과 구조를 정리했습니다.
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
          2. CORE CONTENT: FINANCE VS JAETECH (H2)
          ===================================================================================== */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-start gap-4 mb-8">
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl mt-1">
              <ArrowRightLeft size={24} />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">
                1. 금융(Finance)과 재테크의 차이
              </h2>
              <div className="prose prose-slate max-w-none text-slate-600 leading-loose">
                <p>
                  많은 사람들이 금융과 재테크를 혼용해서 사용하지만, 그 결은 조금 다릅니다. 
                  <strong>금융</strong>은 돈이 융통되는 전체적인 흐름과 시스템을 의미합니다. 
                  은행, 증권사, 보험사 등이 만든 제도권 안에서 자금이 어떻게 이동하는지를 이해하는 것이 금융 공부의 시작입니다.
                </p>
                <p>
                  반면 <strong>재테크(재무 테크놀로지)</strong>는 금융 시스템을 활용하여 
                  개인의 자산을 불리는 구체적인 '기술'입니다. 
                  금융이 '지도'라면, 재테크는 그 지도 위에서 목적지까지 효율적으로 이동하는 '운전 기술'과 같습니다. 
                  지도를 볼 줄 알아야 운전을 잘할 수 있듯, 금융의 기본 원리를 이해해야 성공적인 재테크가 가능합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================================
          3. CORE CONTENT: MONEY MANAGEMENT STRUCTURE (H2)
          ===================================================================================== */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-start gap-4 mb-8">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-xl mt-1">
              <PieChart size={24} />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">
                2. 돈 관리의 4가지 기둥: 소득, 지출, 저축, 투자
              </h2>
              <div className="prose prose-slate max-w-none text-slate-600 leading-loose">
                <p>
                  돈 관리의 핵심은 복잡한 금융 상품을 아는 것이 아니라, 
                  <strong>현금 흐름(Cash Flow)</strong>을 통제하는 것입니다. 
                  건강한 재무 상태는 다음의 4단계 순환 구조가 원활할 때 만들어집니다.
                </p>
                
                <ul className="space-y-4 mt-6 list-none pl-0">
                  <li className="flex gap-4 items-start">
                    <span className="font-bold text-slate-900 w-16 shrink-0">1. 소득</span>
                    <span>재테크의 원천입니다. 근로 소득을 높이는 자기계발이 최고의 초기 재테크입니다.</span>
                  </li>
                  <li className="flex gap-4 items-start">
                    <span className="font-bold text-slate-900 w-16 shrink-0">2. 지출</span>
                    <span>가장 통제하기 어려운 영역입니다. 소득보다 적게 쓰는 것(잉여 자금 확보)이 모든 투자의 시작점입니다.</span>
                  </li>
                  <li className="flex gap-4 items-start">
                    <span className="font-bold text-slate-900 w-16 shrink-0">3. 저축</span>
                    <span>시드 머니(종잣돈)를 만드는 과정입니다. 투자를 위한 총알을 준비하는 단계로, 안전성이 최우선입니다.</span>
                  </li>
                  <li className="flex gap-4 items-start">
                    <span className="font-bold text-slate-900 w-16 shrink-0">4. 투자</span>
                    <span>모은 돈을 일하게 하는 단계입니다. 주식, 부동산 등을 통해 자산 가치를 증식시키는 과정입니다.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================================
          4. CORE CONTENT: STARTING SMALL (H2)
          ===================================================================================== */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-start gap-4 mb-8">
            <div className="p-3 bg-amber-50 text-amber-600 rounded-xl mt-1">
              <TrendingUp size={24} />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">
                3. 소액으로 시작하는 부의 설계
              </h2>
              <div className="prose prose-slate max-w-none text-slate-600 leading-loose">
                <p>
                  "돈이 있어야 돈을 벌지"라는 말은 반은 맞고 반은 틀립니다. 
                  거대한 자본이 있으면 유리한 것은 사실이지만, <strong>시간</strong>이라는 자본은 누구에게나 공평합니다. 
                  소액이라도 일찍 시작하면 <strong>복리(Compound Interest)</strong>의 마법을 누릴 수 있습니다.
                </p>

                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 my-6">
                  <h3 className="text-lg font-bold text-slate-800 mb-3 flex items-center gap-2">
                    <Lightbulb size={20} className="text-amber-500"/>
                    관점을 바꾸는 금융 팁
                  </h3>
                  <div className="space-y-4">
                    <p className="text-sm text-slate-600">
                      <strong>대출의 양면성:</strong> 대출은 무조건 나쁜 것이 아닙니다. 
                      자산 증식을 위해 감당 가능한 범위 내에서 사용하는 레버리지(지렛대)는 훌륭한 도구가 됩니다. 
                      단, 소비를 위한 대출은 철저히 경계해야 합니다.
                    </p>
                    <p className="text-sm text-slate-600">
                      <strong>투자의 접근성:</strong> 커피 한 잔 값으로도 글로벌 1등 기업의 주주가 될 수 있는 시대입니다. 
                      거창한 목돈이 모일 때까지 기다리지 말고, 지금 당장 <strong>소액 투자</strong>를 경험하며 시장 감각을 익히십시오.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================================
          5. CONCLUSION & PERSPECTIVE (H2)
          ===================================================================================== */}
      <section className="py-20 bg-slate-900 text-slate-300">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              긴 호흡으로 바라보는 금융 생활
            </h2>
            <p className="text-slate-400">재테크는 100미터 달리기가 아니라 마라톤입니다.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
              <div className="text-emerald-400 mb-4">
                <Target size={32} />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">목적 있는 돈 모으기</h4>
              <p className="text-sm leading-relaxed text-slate-400">
                막연히 "부자가 되고 싶다"는 목표는 쉽게 지칩니다. 
                "3년 안에 5천만 원 모으기", "노후 월 현금 흐름 200만 원 만들기"처럼 
                구체적이고 측정 가능한 목표를 세우는 것이 꾸준함의 비결입니다.
              </p>
            </div>
            
            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
              <div className="text-emerald-400 mb-4">
                <ShieldCheck size={32} />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">스스로 지키는 힘</h4>
              <p className="text-sm leading-relaxed text-slate-400">
                세상에 공짜 점심은 없으며, 원금 보장과 고수익을 동시에 약속하는 상품은 사기일 확률이 높습니다. 
                금융 지식을 쌓는 것은 내 소중한 자산을 타인의 말에 휘둘리지 않고 스스로 지키는 방패를 만드는 과정입니다.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center text-xs text-slate-500">
            <p className="flex items-center justify-center gap-2 mb-2">
              <Landmark size={14} /> 
              <strong>정보 제공 목적 안내</strong>
            </p>
            본 페이지는 금융 및 재테크 입문자를 위한 일반적인 가이드를 제공합니다.<br/>
            구체적인 금융 상품 선택 및 투자 결정은 개인의 상황에 맞춰 신중하게 판단하시기 바랍니다.
          </div>
        </div>
      </section>
    </main>
  );
};