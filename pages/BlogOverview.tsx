import React from 'react';
import { Link } from 'react-router-dom';
import { 
  PieChart, 
  ShieldCheck, 
  TrendingUp, 
  Landmark, 
  CreditCard, 
  ArrowRight 
} from 'lucide-react';
import { Category } from '../types';

export const BlogOverview: React.FC = () => {
  return (
    <main className="flex-grow bg-white text-slate-900 font-sans leading-relaxed">
      {/* HEADER */}
      <section className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-3xl md:text-5xl font-black mb-6">
            머니와이즈 <span className="text-blue-400">블로그 가이드</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed break-keep">
            금융의 미로 속에서 길을 잃지 않도록, 머니와이즈는 5가지 핵심 주제를 중심으로 검증된 정보를 제공합니다. 
            단순한 정보의 나열이 아닌, <strong>실생활에 즉시 적용 가능한 금융 솔루션</strong>을 카테고리별로 만나보세요. 
            당신의 현재 상황에 꼭 필요한 정보를 아래 가이드에서 찾을 수 있습니다.
          </p>
        </div>
      </section>

      {/* CATEGORY 1: FINANCE */}
      <section className="py-20 border-b border-slate-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
            <div className="md:w-1/3 flex-shrink-0">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <PieChart size={32} />
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900 mb-4">{Category.FINANCE}</h2>
              <Link to="/finance" className="inline-flex items-center text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors">
                글 목록 보기 <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
            <div className="md:w-2/3 prose prose-slate max-w-none">
              <h3 className="text-lg font-bold text-slate-800 mb-2">돈 관리의 기초 체력을 기르세요</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                재테크의 시작은 '버는 것'보다 '지키는 것'에 있습니다. 이 카테고리에서는 사회초년생부터 은퇴 준비자까지 누구에게나 필수적인 
                <strong>자산 관리의 기본 원칙</strong>을 다룹니다. 급여 통장 관리(통장 쪼개기), CMA 및 ISA 계좌 활용법, 
                그리고 불필요한 지출을 줄이는 예산 수립 노하우를 통해 현금 흐름을 최적화하는 방법을 제시합니다.
              </p>
              <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                <strong className="text-slate-900 block mb-2 text-sm">추천 대상</strong>
                <ul className="text-sm text-slate-600 list-disc list-inside space-y-1">
                  <li>월급은 스쳐 지나갈 뿐, 돈이 어디로 새는지 모르는 직장인</li>
                  <li>체계적인 자산 형성 시스템을 구축하고 싶은 재테크 입문자</li>
                  <li>예금, 적금 외에 다양한 금융 상품(파킹통장 등)을 알고 싶은 분</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORY 2: LOAN */}
      <section className="py-20 border-b border-slate-100 bg-slate-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
            <div className="md:w-1/3 flex-shrink-0">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                <ShieldCheck size={32} />
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900 mb-4">{Category.LOAN}</h2>
              <Link to="/loan" className="inline-flex items-center text-sm font-bold text-emerald-600 hover:text-emerald-700 transition-colors">
                글 목록 보기 <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
            <div className="md:w-2/3 prose prose-slate max-w-none">
              <h3 className="text-lg font-bold text-slate-800 mb-2">부채도 자산이 되는 스마트한 대출 전략</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                대출은 두려움의 대상이 아니라, 잘 다루면 유용한 금융 도구입니다. 
                이곳에서는 급하게 자금이 필요할 때 활용할 수 있는 <strong>안전한 소액 대출</strong> 정보부터, 
                신용점수를 관리하여 금리를 낮추는 방법, 그리고 1금융권과 2금융권의 차이점 등 실질적인 팁을 제공합니다. 
                불법 사금융을 피하고 제도권 금융 내에서 현명하게 레버리지를 활용하는 법을 안내합니다.
              </p>
              <div className="bg-white p-5 rounded-xl border border-slate-200">
                <strong className="text-slate-900 block mb-2 text-sm">주요 주제</strong>
                <ul className="text-sm text-slate-600 list-disc list-inside space-y-1">
                  <li>무직자/주부도 가능한 1금융권 비상금 대출 상품 비교</li>
                  <li>신용점수 올리기 및 금리인하요구권 활용 가이드</li>
                  <li>대환 대출을 통한 이자 부담 줄이기 전략</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORY 3: INVESTMENT */}
      <section className="py-20 border-b border-slate-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
            <div className="md:w-1/3 flex-shrink-0">
              <div className="w-16 h-16 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center mb-6">
                <TrendingUp size={32} />
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900 mb-4">{Category.INVESTMENT}</h2>
              <Link to="/investment" className="inline-flex items-center text-sm font-bold text-red-600 hover:text-red-700 transition-colors">
                글 목록 보기 <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
            <div className="md:w-2/3 prose prose-slate max-w-none">
              <h3 className="text-lg font-bold text-slate-800 mb-2">인플레이션을 이기는 자산 증식의 기술</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                노동 소득만으로는 부자가 될 수 없는 시대입니다. 
                투자/주식 카테고리에서는 초보자도 쉽게 따라 할 수 있는 <strong>ETF 적립식 투자</strong>와 
                안정적인 현금 흐름을 만드는 <strong>배당주 포트폴리오</strong> 전략을 중점적으로 다룹니다. 
                차트 분석보다는 기업의 가치와 거시 경제의 흐름을 읽는 안목을 길러, 잃지 않는 투자를 지향합니다.
              </p>
              <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                <strong className="text-slate-900 block mb-2 text-sm">핵심 콘텐츠</strong>
                <ul className="text-sm text-slate-600 list-disc list-inside space-y-1">
                  <li>S&P500, 나스닥100 등 지수 추종 ETF 분석</li>
                  <li>미국 주식 세금(양도소득세) 절세 가이드</li>
                  <li>연금저축펀드와 IRP를 활용한 노후 준비 및 세액공제</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORY 4: WELFARE */}
      <section className="py-20 border-b border-slate-100 bg-slate-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
            <div className="md:w-1/3 flex-shrink-0">
              <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <Landmark size={32} />
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900 mb-4">{Category.WELFARE}</h2>
              <Link to="/welfare" className="inline-flex items-center text-sm font-bold text-purple-600 hover:text-purple-700 transition-colors">
                글 목록 보기 <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
            <div className="md:w-2/3 prose prose-slate max-w-none">
              <h3 className="text-lg font-bold text-slate-800 mb-2">아는 만큼 돌려받는 정부 지원금</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                매년 쏟아지는 정부 정책, 몰라서 못 받는 지원금이 없도록 도와드립니다. 
                청년, 신혼부부, 소상공인, 저소득층 등 각 <strong>생애 주기와 소득 구간별 맞춤형 복지 혜택</strong>을 정리해 드립니다. 
                복잡한 신청 조건과 절차를 알기 쉽게 풀어서 설명하여, 여러분이 정당한 권리를 누릴 수 있도록 안내합니다.
              </p>
              <div className="bg-white p-5 rounded-xl border border-slate-200">
                <strong className="text-slate-900 block mb-2 text-sm">필수 체크 정책</strong>
                <ul className="text-sm text-slate-600 list-disc list-inside space-y-1">
                  <li>청년도약계좌, 청년내일채움공제 등 자산 형성 지원</li>
                  <li>근로장려금, 자녀장려금 신청 자격 및 지급일</li>
                  <li>전세보증보험 반환보증 및 주거 안정 지원 정책</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORY 5: LIFE */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
            <div className="md:w-1/3 flex-shrink-0">
              <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center mb-6">
                <CreditCard size={32} />
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900 mb-4">{Category.LIFE}</h2>
              <Link to="/life" className="inline-flex items-center text-sm font-bold text-amber-600 hover:text-amber-700 transition-colors">
                글 목록 보기 <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
            <div className="md:w-2/3 prose prose-slate max-w-none">
              <h3 className="text-lg font-bold text-slate-800 mb-2">일상 속 숨은 돈을 찾는 생활의 지혜</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                거창한 투자가 아니어도 일상 속 작은 습관으로 돈을 벌 수 있습니다. 
                <strong>신용카드 포인트 현금화</strong>, 상품권을 활용한 재테크(상테크), 
                그리고 연말정산 환급액을 늘리는 팁까지. 
                생활 속에서 놓치기 쉬운 <strong>알짜배기 금융 정보</strong>를 모았습니다. 
                합리적인 소비와 포인트 적립으로 생활비를 방어하는 노하우를 확인하세요.
              </p>
              <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                <strong className="text-slate-900 block mb-2 text-sm">인기 키워드</strong>
                <ul className="text-sm text-slate-600 list-disc list-inside space-y-1">
                  <li>여신금융협회 카드 포인트 통합 조회 및 계좌 입금</li>
                  <li>지역화폐 및 상품권 할인 구매 팁</li>
                  <li>통신비, 공과금 할인 카드 추천 및 활용법</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
