import React from 'react';
import { 
  Landmark, 
  HelpingHand, 
  FileText, 
  AlertCircle, 
  Scale, 
  Users,
  Building2,
  SearchCheck
} from 'lucide-react';

export const WelfareGuide: React.FC = () => {
  return (
    <main className="flex-grow bg-white text-slate-900 font-sans leading-relaxed selection:bg-purple-100">
      {/* =====================================================================================
          1. HEADER SECTION (H1)
          ===================================================================================== */}
      <section className="relative bg-slate-900 text-white py-24 overflow-hidden">
        {/* Professional Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-bl from-purple-900 via-slate-900 to-slate-900"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-10"></div>

        <div className="container mx-auto px-4 relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-bold mb-6 backdrop-blur-md uppercase tracking-wider">
            <Landmark size={14} />
            <span>Public Policy Guide</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-black leading-tight mb-6 break-keep">
            금융과 생활 안정을 위한<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              복지 정책 및 제도 이해하기
            </span>
          </h1>

          <p className="text-lg text-slate-400 leading-relaxed max-w-2xl font-light mb-0 break-keep">
            복지와 정책은 우리 사회의 안전망이자, 개인의 삶을 지탱하는 중요한 기반입니다.
            하지만 방대한 정보와 복잡한 용어 때문에 제도의 취지를 정확히 파악하기 어려운 경우가 많습니다.
            본 페이지는 특정 혜택을 나열하기보다, <strong>복지 제도가 어떻게 설계되어 있고 어떤 원리로 작동하는지</strong>
            그 구조적 본질을 설명하여 여러분의 이해를 돕고자 합니다.
          </p>
        </div>
      </section>

      {/* =====================================================================================
          2. CORE CONTENT: DEFINITION & RELATIONSHIP (H2)
          ===================================================================================== */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-start gap-4 mb-8">
            <div className="p-3 bg-purple-50 text-purple-600 rounded-xl mt-1">
              <Users size={24} />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">
                1. 복지와 정책의 역할: 개인과 사회의 연결 고리
              </h2>
              <div className="prose prose-slate max-w-none text-slate-600 leading-loose">
                <p>
                  <strong>복지(Welfare)</strong>란 모든 국민이 최소한의 인간다운 생활을 영위하고, 
                  더 나아가 삶의 질을 향상시킬 수 있도록 사회적으로 지원하는 활동을 말합니다. 
                  그리고 <strong>정책(Policy)</strong>은 이러한 복지 이념을 실현하기 위해 정부나 공공기관이 수립한 
                  구체적인 계획과 실행 방안을 의미합니다.
                </p>
                <p>
                  개인의 노력만으로는 해결하기 어려운 경제적 위기나 사회적 위험(실업, 질병, 노령 등)에 대비하기 위해
                  국가는 다양한 제도를 마련합니다. 즉, 정책은 개인의 삶과 국가 시스템을 연결하는 매개체이며, 
                  우리가 내는 세금이 사회적 서비스나 급여 형태로 환원되는 과정으로 이해할 수 있습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================================
          3. CORE CONTENT: STRUCTURE & NECESSITY (H2)
          ===================================================================================== */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-start gap-4 mb-8">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-xl mt-1">
              <Building2 size={24} />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">
                2. 금융·생활 복지 제도의 기본 구조와 필요성
              </h2>
              <div className="prose prose-slate max-w-none text-slate-600 leading-loose">
                <p>
                  우리나라의 복지 제도는 크게 사회보험, 공공부조, 사회서비스로 나뉩니다. 
                  금융 및 생활과 밀접한 관련이 있는 제도는 주로 소득 보전이나 자산 형성을 돕는 형태로 나타납니다.
                  이러한 제도는 단순히 현금을 지급하는 것에 그치지 않고, 자립할 수 있는 기반을 마련해 주는 데 목적이 있습니다.
                </p>

                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">
                  복지 제도가 필요한 이유
                </h3>
                <p>
                  시장 경제 체제에서는 소득 불평등이나 빈곤 문제가 발생할 수밖에 없습니다. 
                  복지 정책은 이러한 시장의 한계를 보완하여 사회적 형평성을 추구합니다. 
                  예를 들어, 주거 안정을 위한 정책이나 서민을 위한 금융 지원 제도는 
                  일반적인 시장 금리보다 낮은 조건으로 자금을 융통해 줌으로써, 
                  경제적 약자가 자립할 수 있는 기회를 제공합니다. 이는 일반적인 상업 대출과는 그 목적과 운영 방식에서 근본적인 차이가 있습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================================
          4. CORE CONTENT: CAUTIONS & CRITERIA (H2)
          ===================================================================================== */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-start gap-4 mb-8">
            <div className="p-3 bg-amber-50 text-amber-600 rounded-xl mt-1">
              <AlertCircle size={24} />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">
                3. 정책 정보를 확인할 때의 주의사항
              </h2>
              <div className="prose prose-slate max-w-none text-slate-600 leading-loose">
                <p>
                  정책은 고정불변의 것이 아닙니다. 예산 상황이나 사회적 요구, 법령 개정에 따라 
                  지원 대상이나 조건이 수시로 변경될 수 있습니다. 따라서 과거의 정보나 타인의 경험담을 맹신하기보다는, 
                  반드시 해당 시점의 공고문을 확인하는 습관이 필요합니다.
                </p>

                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 my-6">
                  <h3 className="text-lg font-bold text-slate-800 mb-3 flex items-center gap-2">
                    <SearchCheck size={20} className="text-slate-500"/>
                    주요 확인 포인트
                  </h3>
                  <ul className="space-y-4 list-none pl-0">
                    <li className="flex gap-3 items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2.5 shrink-0"></div>
                      <span className="text-sm"><strong>소득 및 자산 기준:</strong> 대부분의 복지 제도는 '중위소득'이라는 기준을 사용합니다. 가구원 수에 따라 기준 금액이 다르므로 본인의 가구 소득 인정액을 정확히 파악해야 합니다.</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2.5 shrink-0"></div>
                      <span className="text-sm"><strong>중복 수혜 제한:</strong> 하나의 혜택을 받고 있다면, 유사한 성격의 다른 제도 이용이 제한될 수 있습니다.</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2.5 shrink-0"></div>
                      <span className="text-sm"><strong>신청 기간:</strong> 상시 신청 가능한 제도도 있지만, 특정 기간에만 신청을 받는 사업이 많으므로 일정을 놓치지 않도록 유의해야 합니다.</span>
                    </li>
                  </ul>
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
              복지 제도를 바라보는 올바른 시각
            </h2>
            <p className="text-slate-400">제도는 권리이지만, 맹목적인 의존은 경계해야 합니다.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
              <div className="text-purple-400 mb-4">
                <HelpingHand size={32} />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">능동적인 정보 탐색</h4>
              <p className="text-sm leading-relaxed text-slate-400">
                복지 제도는 '신청주의'를 원칙으로 하는 경우가 많습니다. 
                가만히 있어도 혜택이 찾아오는 것이 아니라, 
                자신에게 필요한 제도를 스스로 찾고 자격을 증명해야 지원을 받을 수 있습니다.
              </p>
            </div>
            
            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
              <div className="text-purple-400 mb-4">
                <FileText size={32} />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">보조 수단으로서의 활용</h4>
              <p className="text-sm leading-relaxed text-slate-400">
                정책적 지원은 삶의 어려움을 덜어주는 보조 바퀴와 같습니다. 
                제도에 전적으로 의존하기보다는, 이를 발판 삼아 스스로 경제적 자립을 이루려는 노력이 동반될 때 
                복지 제도의 진정한 가치가 발휘됩니다.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center text-xs text-slate-500">
            <p className="flex items-center justify-center gap-2 mb-2">
              <Scale size={14} /> 
              <strong>정보 제공 목적 안내</strong>
            </p>
            본 페이지는 복지 및 정책 제도에 대한 일반적인 이해를 돕기 위해 작성되었습니다.<br/>
            개별 정책의 상세 조건이나 신청 자격은 정부 공식 홈페이지(복지로, 정부24 등) 또는 관련 기관을 통해 반드시 확인하시기 바랍니다.
          </div>
        </div>
      </section>
    </main>
  );
};