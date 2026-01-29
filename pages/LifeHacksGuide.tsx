import React from 'react';
import { 
  Coffee, 
  ShoppingBag, 
  CreditCard, 
  Lightbulb,
  Repeat,
  CheckCircle2,
  Wallet
} from 'lucide-react';

export const LifeHacksGuide: React.FC = () => {
  return (
    <main className="flex-grow bg-white text-slate-900 font-sans leading-relaxed selection:bg-amber-100">
      {/* =====================================================================================
          1. HEADER SECTION (H1)
          ===================================================================================== */}
      <section className="relative bg-slate-900 text-white py-24 overflow-hidden">
        {/* Professional Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-t from-amber-900 via-slate-900 to-slate-900"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] opacity-10"></div>

        <div className="container mx-auto px-4 relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-bold mb-6 backdrop-blur-md uppercase tracking-wider">
            <Lightbulb size={14} />
            <span>Smart Living & Finance</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-black leading-tight mb-6 break-keep">
            일상의 작은 선택이 만드는 부:<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
              생활 속 금융 습관과 소비 최적화
            </span>
          </h1>

          <p className="text-lg text-slate-400 leading-relaxed max-w-2xl font-light mb-0 break-keep">
            금융 생활의 성패는 거창한 투자 전략이 아닌, 매일 반복되는 <strong>작은 소비 습관</strong>에서 결정됩니다.
            우리가 무심코 하는 선택들이 모여 미래의 자산 규모를 형성합니다.
            본 페이지는 일상 속에서 놓치기 쉬운 지출 관리의 중요성과 올바른 금융 습관을 제시합니다.
          </p>
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
                1. 소비 습관과 지출 관리의 핵심
              </h2>
              <div className="prose prose-slate max-w-none text-slate-600 leading-loose">
                <p>
                  효율적인 <strong>생활 금융</strong>의 시작은 '필요(Needs)'와 '욕구(Wants)'를 구분하는 것입니다. 
                  대부분의 불필요한 지출은 감정적인 동요나 순간의 충동에서 비롯됩니다. 
                  지출을 통제한다는 것은 단순히 돈을 안 쓰는 것이 아니라, 나에게 진정 가치 있는 곳에 자원을 집중하는 전략적 행위입니다.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                    <strong className="block text-slate-900 mb-2">무의식적 지출 점검</strong>
                    <p className="text-sm">
                      편의점 간식, 택시비 등 습관적으로 나가는 <strong>소액</strong> 지출은 가계부에 기록되지 않는 경우가 많습니다. 
                      이러한 '새는 돈'을 파악하는 것만으로도 월 생활비의 상당 부분을 절약할 수 있습니다.
                    </p>
                  </div>
                  <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100">
                    <strong className="block text-amber-800 mb-2">지출 유예의 기술</strong>
                    <p className="text-sm text-amber-900/80">
                      구매 욕구가 생겼을 때 결제를 하루만 미뤄보십시오. 
                      감정이 가라앉은 상태에서 이성적인 판단을 내리면, 그 소비가 정말 필요한지 명확해집니다.
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
                2. 신용카드 사용 시 생활 속 주의점
              </h2>
              <div className="prose prose-slate max-w-none text-slate-600 leading-loose">
                <p>
                  <strong>신용카드</strong>는 현금 흐름을 유연하게 만들지만, 동시에 '미래의 소득을 당겨 쓰는 빚'이라는 본질을 잊어서는 안 됩니다. 
                  일상생활에서 신용카드를 사용할 때 가장 경계해야 할 것은 '할부의 일상화'입니다.
                </p>
                
                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">
                  소모성 지출과 할부의 위험성
                </h3>
                <p>
                  식비, 의류비, 문화생활비 등 사용하면 사라지는 <strong>소모성 지출</strong>에는 절대 할부를 적용하지 않는 것이 원칙입니다. 
                  지난달에 먹은 밥값을 이번 달에 갚아야 하는 상황이 누적되면, 
                  급여가 들어와도 카드 값으로 모두 빠져나가고 생활비가 부족해지는 악순환이 시작됩니다.
                </p>

                <div className="bg-white p-5 rounded-xl border border-slate-200 mt-4 flex items-start gap-3">
                   <CheckCircle2 className="text-blue-600 mt-1 shrink-0" size={20} />
                   <p className="text-sm text-slate-700">
                     <strong>권장 습관:</strong> 생활비나 식비처럼 매달 반복되는 변동 지출은 
                     잔고 범위 내에서 즉시 출금되는 <strong>체크카드</strong>를 사용하여 과소비를 원천적으로 차단하는 것이 좋습니다.
                   </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================================
          4. CORE CONTENT: SMALL EXPENSES ACCUMULATION (H2)
          ===================================================================================== */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-start gap-4 mb-8">
            <div className="p-3 bg-purple-50 text-purple-600 rounded-xl mt-1">
              <Coffee size={24} />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">
                3. 소액 지출의 누적 구조: 라떼 효과와 구독 경제
              </h2>
              <div className="prose prose-slate max-w-none text-slate-600 leading-loose">
                <p>
                  '티끌 모아 태산'이라는 말은 저축뿐만 아니라 지출에도 적용됩니다. 
                  하루 5천 원의 커피값이나 월 1만 원 내외의 구독 서비스 이용료는 
                  개별적으로는 부담 없어 보이지만, 이를 연간 단위로 환산하면 <strong>목돈</strong>이 됩니다.
                </p>

                <div className="space-y-4 mt-6">
                  <div className="flex flex-col md:flex-row gap-4 items-start border-l-4 border-purple-200 pl-4">
                    <div className="shrink-0 font-bold text-slate-900 w-24">고정비의 함정</div>
                    <div className="text-sm text-slate-600">
                      OTT, 음원 스트리밍 등 다양한 구독 서비스는 통장을 스쳐 가는 자동 이체로 설정되어 있어 지출 통각을 마비시킵니다. 
                      정기적으로 이용하지 않는 서비스는 과감히 해지하여 고정비를 줄여야 합니다.
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row gap-4 items-start border-l-4 border-purple-400 pl-4">
                     <div className="shrink-0 font-bold text-slate-900 w-24">누적의 힘</div>
                     <div className="text-sm text-slate-600">
                       매일 아끼는 소액을 단순히 통장에 두기보다, CMA나 적립식 투자 계좌로 연결해 보세요. 
                       절약된 소비가 자산으로 전환되는 과정을 눈으로 확인하는 것이 <strong>금융 습관</strong> 유지의 가장 큰 동력이 됩니다.
                     </div>
                  </div>
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
              장기적인 생활 금융 습관의 힘
            </h2>
            <p className="text-slate-400">오늘의 작은 습관이 내일의 경제적 자유를 만듭니다.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
              <div className="text-amber-400 mb-4">
                <Repeat size={32} />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">지속 가능성</h4>
              <p className="text-sm leading-relaxed text-slate-400">
                무조건적인 절약은 오래가지 못합니다. 자신의 소득과 라이프스타일에 맞는 
                적절한 예산을 수립하고, 그 안에서 소비를 통제하는 것이 지속 가능한 <strong>생활 금융</strong>의 핵심입니다.
              </p>
            </div>
            
            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
              <div className="text-amber-400 mb-4">
                <Wallet size={32} />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">기록과 점검</h4>
              <p className="text-sm leading-relaxed text-slate-400">
                가계부를 쓰거나 자산 관리 앱을 활용해 현금 흐름을 시각화하세요. 
                돈이 어디로 흘러가는지 아는 것만으로도 불필요한 지출을 줄이고, 
                더 나은 재무적 의사결정을 내릴 수 있습니다.
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