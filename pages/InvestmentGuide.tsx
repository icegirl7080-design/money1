import React from 'react';
import { 
  TrendingUp, 
  BarChart3, 
  AlertOctagon, 
  Shield, 
  Target, 
  Hourglass,
  Wallet,
  BrainCircuit
} from 'lucide-react';

export const InvestmentGuide: React.FC = () => {
  return (
    <main className="flex-grow bg-white text-slate-900 font-sans leading-relaxed selection:bg-red-100">
      {/* =====================================================================================
          1. HEADER SECTION (H1)
          ===================================================================================== */}
      <section className="relative bg-slate-900 text-white py-24 overflow-hidden">
        {/* Professional Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-900 via-slate-900 to-slate-900"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
        
        <div className="container mx-auto px-4 relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-300 text-xs font-bold mb-6 backdrop-blur-md uppercase tracking-wider">
            <TrendingUp size={14} />
            <span>Investment Fundamentals</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-black leading-tight mb-6 break-keep">
            주식 투자의 정석:<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
              투기와 투자를 가르는 기준
            </span>
          </h1>

          <p className="text-lg text-slate-400 leading-relaxed max-w-2xl font-light mb-0 break-keep">
            주식 투자를 '운에 맡기는 도박'이나 '전문가들의 전유물'로 오해하고 계신가요? 
            많은 사람들이 단기간에 큰돈을 벌려는 욕심으로 시장에 뛰어들었다가 실패를 맛보곤 합니다. 
            하지만 <strong>투자</strong>는 자본주의 사회에서 내 자산을 지키고 불리는 가장 정직한 수단입니다. 
            본 페이지는 막연한 두려움을 걷어내고, 평생 자산 관리를 위한 투자의 기본 골격을 제시합니다.
          </p>
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
                1. 투자(Investment)란 무엇인가?
              </h2>
              <div className="prose prose-slate max-w-none text-slate-600 leading-loose">
                <p>
                  주식을 산다는 것은 단순히 차트의 숫자에 베팅하는 것이 아닙니다. 
                  그것은 <strong>기업의 소유권(Ownership)</strong>을 매입하는 행위입니다. 
                  내가 일하지 않아도 유능한 경영진과 직원들이 나를 위해 돈을 벌어오는 시스템, 이것이 투자의 본질입니다.
                </p>
                <div className="mt-6 p-6 bg-slate-50 border border-slate-200 rounded-2xl">
                  <strong className="block text-slate-900 mb-3">투자와 투기의 결정적 차이</strong>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex gap-2">
                      <span className="text-red-500 font-bold">· 투자:</span> 
                      <span>기업의 내재 가치(Value)를 분석하고, 성장 가능성에 자금을 댄 뒤 시간을 두고 결실을 공유하는 것.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-slate-500 font-bold">· 투기:</span> 
                      <span>기업의 가치는 무시한 채, 오직 시장의 가격 변동(Price)과 심리 게임을 통해 단기 차익을 노리는 것.</span>
                    </li>
                  </ul>
                </div>
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
                2. 주식의 기본 구조와 소액 투자의 힘
              </h2>
              <div className="prose prose-slate max-w-none text-slate-600 leading-loose">
                <p>
                  주식 시장은 자본이 필요한 기업과 자산을 불리려는 투자자가 만나는 곳입니다. 
                  기업은 주식을 발행해 자금을 조달하고, 투자자는 주식을 매수하여 <strong>주주(Shareholder)</strong>가 됩니다. 
                  주주는 기업이 벌어들인 이익을 배당금으로 받거나, 주가 상승을 통해 자산 증식을 누릴 권리가 있습니다.
                </p>
                
                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">
                  "돈이 없어서 못 한다"는 핑계입니다
                </h3>
                <p>
                  많은 분들이 "목돈을 모아서 투자하겠다"고 말합니다. 하지만 투자의 핵심 성공 요인은 '금액'이 아니라 <strong>'시간'</strong>입니다. 
                  매달 커피값, 회식비를 아껴 10만 원씩이라도 꾸준히 우량한 자산(주식)으로 바꾸는 과정이 필요합니다. 
                  소액이라도 일찍 시작하면 <strong>복리(Compound Interest)</strong> 효과가 적용되어, 시간이 지날수록 자산이 눈덩이처럼 불어나는 경험을 하게 됩니다.
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
                3. 위험을 통제하는 현실적인 방법
              </h2>
              <div className="prose prose-slate max-w-none text-slate-600 leading-loose">
                <p>
                  주식 시장에서 '위험(Risk)'은 피할 수 없는 동반자입니다. 주가는 매일 오르고 내립니다. 
                  하지만 이러한 <strong>변동성</strong> 자체는 위험이 아닙니다. 진짜 위험은 감당할 수 없는 자금으로 시장에 들어오는 것입니다.
                </p>

                <div className="bg-red-50 p-6 rounded-2xl border border-red-100 my-6">
                  <h3 className="text-lg font-bold text-red-800 mb-3 flex items-center gap-2">
                    <Shield size={20} />
                    가장 위험한 투자: 빚투(빚내서 투자)
                  </h3>
                  <p className="text-sm text-red-900/80 mb-4 leading-relaxed">
                    투자에서 가장 경계해야 할 것은 <strong>레버리지(대출)의 오용</strong>입니다. 
                    대출이나 신용카드 현금서비스를 통해 마련한 자금은 '시간의 압박'을 받습니다. 
                    시장이 일시적으로 하락할 때 버티지 못하고 손절매를 강요당하게 되며, 이는 회복 불가능한 손실로 이어집니다. 
                    <strong>투자는 반드시 '여유 자금'으로 해야 합니다.</strong>
                  </p>
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
              성공적인 투자를 위한 기본 태도
            </h2>
            <p className="text-slate-400">시장을 예측하려 하지 말고, 좋은 자산을 모아가는 태도가 필요합니다.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
              <div className="text-red-400 mb-4">
                <Hourglass size={32} />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">장기적 관점을 유지하라</h4>
              <p className="text-sm leading-relaxed text-slate-400">
                나무를 심고 다음 날 바로 열매를 기대하는 사람은 없습니다. 
                기업이 성장하고 이익을 낼 때까지 충분한 시간을 주어야 합니다. 
                단기적인 시세 등락에 일희일비하지 않는 인내심이 최고의 투자 무기입니다.
              </p>
            </div>
            
            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
              <div className="text-red-400 mb-4">
                <Wallet size={32} />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">잃지 않는 투자를 하라</h4>
              <p className="text-sm leading-relaxed text-slate-400">
                워런 버핏의 투자 제1원칙은 "절대 돈을 잃지 말라"입니다. 
                대박을 쫓아 검증되지 않은 정보에 흔들리기보다, 
                우량한 자산을 꾸준히 모아가는 '저축하듯 투자하는 습관'이 부를 만듭니다.
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