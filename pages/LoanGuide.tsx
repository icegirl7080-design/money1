import React, { useState } from 'react';
import { 
  BookOpen, 
  Scale, 
  AlertTriangle, 
  CheckCircle2, 
  Landmark,
  ShieldAlert,
  Wallet,
  Sparkles,
  Loader2,
  Coins
} from 'lucide-react';
import { generateMarketingImage } from '../services/geminiService';

const HERO_PROMPT = "Minimalist 3D illustration of a balanced scale with gold coins on one side and a document on the other, clean blue and white background, representing financial balance and loan agreement";

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
              alt="대출 기본 가이드 배경" 
              className="absolute inset-0 w-full h-full object-cover opacity-20" 
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/60"></div>
          </>
        )}

        <div className="container mx-auto px-4 relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-bold mb-6 backdrop-blur-md uppercase tracking-wider">
            <BookOpen size={14} />
            <span>Loan Basics</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-black leading-tight mb-6 break-keep">
            대출의 기본과 원칙:<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              현명한 금융 소비자를 위한 가이드
            </span>
          </h1>

          <p className="text-lg text-slate-400 leading-relaxed max-w-2xl font-light mb-8 break-keep">
            대출을 고민할 때 가장 많이 하는 오해는 "빚은 무조건 나쁜 것"이라는 생각입니다. 
            하지만 자본주의 사회에서 대출은 자산 증식을 위한 레버리지이자, 삶의 유동성을 공급하는 핵심 도구입니다. 
            중요한 것은 대출 그 자체가 아니라, 그것을 다루는 <strong>사용자의 기준과 전략</strong>입니다.
            본 페이지는 대출을 처음 고민하는 분들을 위해 금융의 관점에서 대출을 해석하고 올바른 활용법을 제시합니다.
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
          2. CORE CONTENT: STRUCTURE & PRINCIPLE (H2)
          ===================================================================================== */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-start gap-4 mb-8">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-xl mt-1">
              <Landmark size={24} />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">
                1. 대출의 구조와 원리 이해하기
              </h2>
              <div className="prose prose-slate max-w-none text-slate-600 leading-loose">
                <p>
                  대출(Loan)의 본질은 <strong>'미래의 소득을 현재로 가져와 사용하는 것'</strong>입니다. 
                  우리는 미래에 벌어들일 돈을 담보로 현재의 목돈을 마련하고, 그 대가로 <strong>이자(Interest)</strong>라는 비용을 지불합니다.
                </p>
                <p>
                  은행은 자선 단체가 아닙니다. 그들은 당신의 '상환 능력'과 '신용'을 평가하여 돈을 빌려줍니다. 
                  따라서 대출을 받을 때는 단순히 "얼마나 빌릴 수 있는가?"를 묻기보다, 
                  "이 자금을 통해 내가 얻는 효용이 이자 비용보다 큰가?"를 먼저 계산해야 합니다. 
                  이 계산이 서지 않는다면 대출은 자산이 아니라 부채가 되어 삶을 압박할 것입니다.
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
              <Coins size={24} />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">
                2. 소액 대출과 일반 대출의 차이
              </h2>
              <div className="prose prose-slate max-w-none text-slate-600 leading-loose">
                <p>
                  처음 대출을 접하는 분들이 가장 많이 이용하는 것이 300만 원 이하의 <strong>소액 대출</strong>입니다. 
                  일반 신용대출과 달리, 소액 대출은 재직 증명이나 소득 증빙 없이 통신 등급이나 보증보험증권만으로 실행되는 경우가 많습니다.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-white p-6 rounded-2xl border border-slate-200">
                    <strong className="block text-emerald-700 mb-2">접근성과 편의성</strong>
                    <p className="text-sm">
                      모바일 앱을 통해 1분 내외로 실행될 만큼 빠르고 간편합니다. 
                      급한 현금 흐름을 막는 비상금 용도로 적합합니다.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl border border-slate-200">
                    <strong className="block text-emerald-700 mb-2">금리와 한도의 한계</strong>
                    <p className="text-sm">
                      편리한 만큼 일반 직장인 신용대출에 비해 금리가 다소 높을 수 있습니다. 
                      또한 한도가 낮아 주거 비용 등 큰 자금을 해결하기에는 부족합니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================================
          4. CORE CONTENT: CREDIT SCORE & CAUTION (H2)
          ===================================================================================== */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-start gap-4 mb-8">
            <div className="p-3 bg-amber-50 text-amber-600 rounded-xl mt-1">
              <Scale size={24} />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">
                3. 신용도: 보이지 않는 자산
              </h2>
              <div className="prose prose-slate max-w-none text-slate-600 leading-loose">
                <p>
                  대출 한도와 금리를 결정하는 핵심은 <strong>신용점수</strong>입니다. 
                  금융권에서 신용은 곧 '돈'입니다. 평소 신용카드를 연체 없이 사용하고, 
                  소액이라도 대출을 성실히 상환한 이력은 신용점수를 올리는 긍정적인 요인이 됩니다.
                </p>

                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4 flex items-center gap-2">
                  <AlertTriangle size={20} className="text-amber-500" />
                  주의: 위험한 현금 흐름
                </h3>
                <p>
                  자금 융통이 어렵다고 해서 정상적인 대출이 아닌 방식에 눈을 돌려서는 안 됩니다. 
                  신용카드 현금화(깡), 내구제 대출, 작업 대출 등은 당장의 현금을 줄지 몰라도, 
                  결국 <strong>금융 질서 문란자</strong>로 등록되어 제도권 금융 이용이 영구히 막히는 치명적인 결과를 초래합니다. 
                  대출은 반드시 허가받은 1·2금융권을 통해서만 진행해야 합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================================
          5. CONCLUSION & CRITERIA (H2)
          ===================================================================================== */}
      <section className="py-20 bg-slate-900 text-slate-300">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              대출 실행 전 3가지 질문
            </h2>
            <p className="text-slate-400">자신만의 확고한 기준이 리스크를 통제합니다.</p>
          </div>

          <div className="space-y-4">
            <div className="bg-slate-800 p-5 rounded-xl border border-slate-700 flex items-center gap-4">
              <CheckCircle2 className="text-blue-500 shrink-0" />
              <p className="text-slate-300"><strong>목적의 명확성:</strong> 소비(사라지는 돈)를 위한 대출인가, 투자(불어나는 돈)를 위한 대출인가?</p>
            </div>
            <div className="bg-slate-800 p-5 rounded-xl border border-slate-700 flex items-center gap-4">
              <CheckCircle2 className="text-blue-500 shrink-0" />
              <p className="text-slate-300"><strong>상환의 확실성:</strong> 나의 월 고정 소득에서 원리금을 감당할 수 있는가?</p>
            </div>
            <div className="bg-slate-800 p-5 rounded-xl border border-slate-700 flex items-center gap-4">
              <CheckCircle2 className="text-blue-500 shrink-0" />
              <p className="text-slate-300"><strong>대안의 부재:</strong> 보유한 현금 자산이나 다른 저금리 정책 자금을 먼저 확인했는가?</p>
            </div>
          </div>
          
          <div className="mt-12 text-center text-xs text-slate-500">
            <p className="flex items-center justify-center gap-2 mb-2">
              <ShieldAlert size={14} /> 
              <strong>정보 제공 목적 안내</strong>
            </p>
            본 페이지는 금융 소비자의 합리적인 판단을 돕기 위한 정보성 콘텐츠입니다.<br/>
            특정 금융 상품을 권유하지 않으며, 과도한 빚은 개인의 삶에 큰 고통을 줄 수 있습니다.
          </div>
        </div>
      </section>
    </main>
  );
};