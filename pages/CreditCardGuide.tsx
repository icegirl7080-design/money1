import React from 'react';
import { 
  CreditCard, 
  Scale, 
  AlertTriangle, 
  Landmark,
  ArrowDown
} from 'lucide-react';
import { SEO } from '../components/SEO';

export const CreditCardGuide: React.FC = () => {
  return (
    <main className="flex-grow bg-slate-50 font-sans text-slate-900 selection:bg-indigo-100">
      <SEO 
        title="신용카드 가이드 | 신용점수 관리와 현명한 소비"
        description="신용카드의 올바른 사용법, 신용점수 올리는 법, 리볼빙의 위험성 등 금융 소비자가 꼭 알아야 할 신용 관리 전략을 제시합니다."
        keywords={['신용카드', '신용점수', '카드테크', '리볼빙', '신용관리', '연말정산']}
      />

      {/* Hero Section */}
      <section className="relative bg-indigo-50 pt-32 pb-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-bl from-white/80 via-transparent to-transparent pointer-events-none"></div>
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10 max-w-5xl animate-on-scroll flex flex-col items-start md:items-center md:text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 border border-indigo-200 text-indigo-600 text-xs font-bold mb-6 shadow-sm backdrop-blur-sm uppercase tracking-wider">
            <CreditCard size={14} />
            <span>Credit Card Mastery</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6 break-keep text-slate-900">
            신용카드의 메커니즘과<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              현명한 소비 전략
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl font-medium mb-8 break-keep">
            신용카드는 단순한 결제 수단이 아닌, 당신의 <strong>신용(Credit)</strong>을 담보로 한 무이자 대출 도구입니다. 
            제대로 쓰면 최고의 재테크 수단이 되지만, 잘못 쓰면 빚의 굴레가 됩니다.
          </p>

          <a href="#content" className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 text-white font-bold rounded-2xl shadow-lg shadow-indigo-200 hover:shadow-indigo-300 hover:bg-indigo-700 transition-all hover:-translate-y-1">
            신용 관리법 확인하기 <ArrowDown size={20} />
          </a>
        </div>
      </section>

      {/* Card 1: Definition */}
      <section id="content" className="py-16 bg-white relative z-20 -mt-10 rounded-t-[3rem] shadow-[0_-20px_40px_-15px_rgba(0,0,0,0.05)] scroll-mt-20">
        <div className="container mx-auto px-4 max-w-4xl animate-on-scroll delay-100">
          <div className="flex items-start gap-5 mb-8">
            <div className="p-3 bg-indigo-50 text-indigo-600 rounded-2xl shadow-inner">
              <Landmark size={28} />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-4">
                1. 신용카드의 본질: 외상 거래
              </h2>
              <div className="prose prose-slate max-w-none text-slate-600 leading-loose">
                <p>
                  '신용카드'는 말 그대로 금융회사가 고객의 상환 능력을 믿고 대금을 먼저 지불해 주는 <strong>후불 결제 시스템</strong>입니다. 
                  우리가 카드를 긁는 순간, 사실상 카드사로부터 <strong>약 한 달간 무이자 대출</strong>을 받는 것과 같습니다.
                  이 본질을 이해해야만 카드를 자산 증식의 도구로 활용할 수 있습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Card 2: VS Check Card */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl animate-on-scroll">
          <div className="flex items-center gap-4 mb-10 justify-center md:justify-start">
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-2xl shadow-inner">
              <Scale size={28} />
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900">
              체크카드 vs 신용카드
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-emerald-100/50 hover:-translate-y-2 transition-transform duration-300">
              <h3 className="text-xl font-bold text-emerald-700 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-500 rounded-full"></span> 체크카드
              </h3>
              <ul className="text-sm space-y-4 text-slate-600 font-medium">
                <li className="flex gap-3 items-start">
                  <span className="bg-emerald-100 text-emerald-700 p-1 rounded text-xs mt-0.5">장점</span>
                  <span>통장 잔고 내에서만 소비하므로 과소비를 원천 차단합니다.</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="bg-emerald-100 text-emerald-700 p-1 rounded text-xs mt-0.5">혜택</span>
                  <span>연말정산 소득공제율이 <strong>30%</strong>로 신용카드(15%)보다 2배 높습니다.</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-indigo-100/50 hover:-translate-y-2 transition-transform duration-300">
              <h3 className="text-xl font-bold text-indigo-700 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-indigo-500 rounded-full"></span> 신용카드
              </h3>
              <ul className="text-sm space-y-4 text-slate-600 font-medium">
                <li className="flex gap-3 items-start">
                  <span className="bg-indigo-100 text-indigo-700 p-1 rounded text-xs mt-0.5">장점</span>
                  <span>할부 결제, 다양한 할인/적립, <strong>신용 이력 형성</strong>이 가능합니다.</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="bg-indigo-100 text-indigo-700 p-1 rounded text-xs mt-0.5">유의</span>
                  <span>연체 시 신용점수가 급락하며, 할부는 미래 소득을 저당 잡는 행위입니다.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Card 3: Risks */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl animate-on-scroll">
          <div className="flex items-start gap-5 mb-8">
            <div className="p-3 bg-red-50 text-red-600 rounded-2xl shadow-inner">
              <AlertTriangle size={28} />
            </div>
            <div className="w-full">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6">
                절대 피해야 할 '독'이 되는 사용법
              </h2>
              
              <div className="space-y-4">
                <div className="group flex flex-col md:flex-row gap-6 p-6 rounded-2xl border border-slate-100 hover:border-red-100 bg-white hover:bg-red-50/30 transition-all shadow-sm hover:shadow-md">
                  <div className="shrink-0">
                    <span className="inline-block px-3 py-1 bg-red-100 text-red-700 text-xs font-bold rounded-lg">리볼빙</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">결제금액 이월약정 (Revolving)</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      결제 대금의 일부만 갚고 나머지는 다음 달로 넘기는 서비스. 
                      연 10~19%의 고금리가 적용되며, 갚아야 할 원금이 줄지 않아 <strong>신용점수 하락의 주범</strong>이 됩니다.
                    </p>
                  </div>
                </div>

                <div className="group flex flex-col md:flex-row gap-6 p-6 rounded-2xl border border-slate-100 hover:border-red-100 bg-white hover:bg-red-50/30 transition-all shadow-sm hover:shadow-md">
                  <div className="shrink-0">
                    <span className="inline-block px-3 py-1 bg-red-100 text-red-700 text-xs font-bold rounded-lg">현금서비스</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">단기카드대출</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      ATM에서 카드로 돈을 뽑는 행위. 이용 즉시 대출로 잡혀 <strong>신용점수가 즉각 하락</strong>하며, 
                      추후 1금융권 대출 심사 시 거절 사유가 될 수 있습니다.
                    </p>
                  </div>
                </div>

                <div className="group flex flex-col md:flex-row gap-6 p-6 rounded-2xl border border-slate-100 hover:border-red-100 bg-white hover:bg-red-50/30 transition-all shadow-sm hover:shadow-md">
                  <div className="shrink-0">
                    <span className="inline-block px-3 py-1 bg-red-100 text-red-700 text-xs font-bold rounded-lg">카드깡</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">불법 현금화</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      허위 매출을 일으켜 현금을 융통하는 불법 행위. 
                      적발 시 <strong>금융 질서 문란자</strong>로 등록되어 최장 12년간 모든 금융 거래가 정지됩니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guidelines Section */}
      <section className="py-20 bg-slate-900 text-slate-300 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-4 max-w-4xl relative z-10 animate-on-scroll">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              올바른 신용카드 사용의 3원칙
            </h2>
            <p className="text-slate-400 font-medium">카드의 주인이 될 것인가, 노예가 될 것인가.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-800/50 backdrop-blur-md p-6 rounded-2xl border border-slate-700 hover:border-indigo-500/50 transition-all hover:-translate-y-1">
              <div className="bg-indigo-600 w-10 h-10 rounded-xl flex items-center justify-center text-white mb-4 shadow-lg shadow-indigo-900/50">
                1
              </div>
              <h4 className="text-lg font-bold text-white mb-2">선결제 습관</h4>
              <p className="text-sm leading-relaxed text-slate-400">
                자금 여유가 있을 때 미리 결제하여 부채 비율을 낮추세요. 과소비를 막는 심리적 방어선이 됩니다.
              </p>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-md p-6 rounded-2xl border border-slate-700 hover:border-indigo-500/50 transition-all hover:-translate-y-1">
              <div className="bg-indigo-600 w-10 h-10 rounded-xl flex items-center justify-center text-white mb-4 shadow-lg shadow-indigo-900/50">
                2
              </div>
              <h4 className="text-lg font-bold text-white mb-2">할부는 빚이다</h4>
              <p className="text-sm leading-relaxed text-slate-400">
                무이자라도 할부금은 모두 부채입니다. 할부가 쌓이면 전세자금 등 중요 대출 한도가 줄어듭니다.
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-md p-6 rounded-2xl border border-slate-700 hover:border-indigo-500/50 transition-all hover:-translate-y-1">
              <div className="bg-indigo-600 w-10 h-10 rounded-xl flex items-center justify-center text-white mb-4 shadow-lg shadow-indigo-900/50">
                3
              </div>
              <h4 className="text-lg font-bold text-white mb-2">한도 50% 미만</h4>
              <p className="text-sm leading-relaxed text-slate-400">
                한도를 꽉 채워 쓰는 것은 '자금 여력 부족' 신호입니다. 적정 사용률을 유지하여 신용점수를 지키세요.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};