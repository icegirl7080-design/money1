import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Landmark, 
  Users,
  ShieldCheck,
  ArrowRight,
  Baby,
  GraduationCap,
  Building2,
  ArrowDown,
  CheckCircle2,
  ChevronRight,
  Coins,
  ClipboardList,
  Search,
  HelpCircle,
  Info,
  Sparkles,
  MousePointer2,
  Target,
  Wallet,
  AlertCircle,
  TrendingUp,
  Lightbulb,
  MapPin,
  CalendarCheck,
  History,
  FileText,
  Check,
  ChevronDown,
  Star,
  Zap,
  BookmarkCheck
} from 'lucide-react';
import { INITIAL_ARTICLES } from '../constants';
import { Category } from '../types';
import { ArticleCard } from '../components/ArticleCard';
import { SEO } from '../components/SEO';

export const WelfareGuide: React.FC = () => {
  const relatedArticles = useMemo(() => {
    return INITIAL_ARTICLES
      .filter(article => article.category === Category.WELFARE)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, []);

  return (
    <main className="flex-grow bg-slate-50 font-sans text-slate-900 selection:bg-purple-100 leading-relaxed">
      <SEO 
        title="2024년 복지정책 가이드: 정부지원금 및 복지 혜택 한눈에 정리"
        description="복지정책의 기본 개념부터 청년도약계좌, 부모급여, 근로장려금의 상세 자격 요건까지. 나에게 맞는 정부지원금을 찾고 신청하는 완벽한 가이드를 제공합니다."
        keywords={['복지정책', '정부지원금', '복지 혜택', '지원 제도', '청년도약계좌 자격', '부모급여 금액', '보조금24 이용법', '근로장려금 신청']}
      />

      {/* Hero Section */}
      <section className="relative bg-white pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden border-b border-slate-100">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-50/50 to-transparent pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-100/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10 max-w-6xl animate-on-scroll">
          <div className="flex flex-col md:items-center md:text-center max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-600 text-white text-[10px] md:text-xs font-bold shadow-xl shadow-purple-200 uppercase tracking-widest">
                <Sparkles size={14} className="fill-current" />
                <span>2024 Welfare Mastery Guide</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-emerald-50 text-emerald-700 text-[10px] md:text-xs font-bold border border-emerald-100 shadow-sm">
                <ShieldCheck size={14} />
                <span>금융 에디터 검수 완료</span>
              </div>
            </div>

            <h1 className="text-3xl md:text-6xl font-black leading-[1.2] md:leading-[1.15] mb-8 break-keep text-slate-900 tracking-tight">
              2024년 복지정책 가이드:<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
                정부지원금 및 복지 혜택 총정리
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-500 leading-relaxed font-medium mb-12 break-keep max-w-3xl mx-auto">
              정보의 불균형이 복지의 격차를 만듭니다. 대한민국 국민이라면 누구나 누려야 할 <br className="hidden md:block" />
              생애주기별 <strong>정부 지원 제도</strong>의 모든 것을 전문가가 직접 정리했습니다.
            </p>

            {/* Quick Navigation / Summary Box */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl mb-12 text-left">
              <a href="#essential" className="flex items-center justify-between p-5 bg-white border border-slate-200 rounded-2xl hover:border-purple-400 hover:shadow-lg transition-all group">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition-colors">
                    <Star size={20} />
                  </div>
                  <span className="font-bold text-slate-700">필수 정책 TOP 3</span>
                </div>
                <ChevronRight size={18} className="text-slate-300" />
              </a>
              <a href="#criteria" className="flex items-center justify-between p-5 bg-white border border-slate-200 rounded-2xl hover:border-purple-400 hover:shadow-lg transition-all group">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition-colors">
                    <CheckCircle2 size={20} />
                  </div>
                  <span className="font-bold text-slate-700">자격 기준 확인</span>
                </div>
                <ChevronRight size={18} className="text-slate-300" />
              </a>
              <a href="#process" className="flex items-center justify-between p-5 bg-white border border-slate-200 rounded-2xl hover:border-purple-400 hover:shadow-lg transition-all group">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition-colors">
                    <ClipboardList size={20} />
                  </div>
                  <span className="font-bold text-slate-700">신청 방법 안내</span>
                </div>
                <ChevronRight size={18} className="text-slate-300" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Definition */}
      <section id="definition" className="py-24 bg-white border-b border-slate-100 scroll-mt-20">
        <div className="container mx-auto px-4 max-w-4xl animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 text-center leading-tight">
            1. 복지정책이란 무엇인가: 국가가 제공하는 사회적 권리
          </h2>
          
          <div className="prose prose-lg prose-slate max-w-none text-slate-600 leading-8 space-y-6">
            <p>
              대한민국의 복지 시스템은 국민 모두가 평등한 삶의 기반을 다질 수 있도록 설계된 <strong>'사회적 안전망'</strong>입니다. 하지만 가장 중요한 특징은 바로 <strong>'신청주의'</strong>입니다. 국가가 대상자를 자동으로 찾아주는 시스템이 점차 도입되고는 있지만, 여전히 상당수의 고액 지원금은 본인이 직접 자격을 증명하고 신청서를 제출해야만 받을 수 있습니다.
            </p>
            <div className="bg-purple-50 p-8 rounded-3xl border border-purple-100 my-8">
               <h4 className="text-purple-800 font-bold mb-4 flex items-center gap-2"><Zap size={20} /> 전문가 제언: 복지도 재테크다</h4>
               <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                 복지 혜택을 통해 생활비를 절약하고 목돈을 마련하는 과정은 가장 수익률이 높은 투자와 같습니다. 절약한 비용을 <strong>금융 시스템</strong> 안에서 굴리는 법이 궁금하다면 머니와이즈의 <Link to="/finance-guide" className="text-purple-600 font-bold underline decoration-purple-200 hover:decoration-purple-600 transition-all">금융 기초 가이드</Link>를 함께 읽어보시기 바랍니다.
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Essential Policies */}
      <section id="essential" className="py-24 bg-slate-50 scroll-mt-20 border-b border-slate-100">
        <div className="container mx-auto px-4 max-w-6xl animate-on-scroll">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 tracking-tight">
              2. 정부 지원금 종류: 내게 맞는 제도 찾기
            </h2>
            <p className="text-slate-500 font-medium">실제로 가장 많은 혜택이 집중되는 핵심 가이드라인입니다.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 mb-16">
            <div className="bg-white rounded-[3rem] p-10 border border-slate-100 shadow-xl group hover:border-purple-300 transition-all">
              <div className="w-16 h-16 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <GraduationCap size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">청년층을 위한 자산 형성 지원</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                사회초년생의 목돈 마련을 돕는 <strong>청년도약계좌</strong>는 5년간 최대 5,000만 원 형성을 목표로 정부가 매칭 지원금을 지급합니다. 또한, 학자금 대출로 고민 중이라면 머니와이즈의 <Link to="/loan-guide" className="text-purple-600 font-bold underline underline-offset-4 decoration-purple-100">대출·신용 가이드</Link>를 통해 신용점수 하락 없이 자금을 융통하는 법을 배우세요.
              </p>
              <div className="flex items-center gap-2 text-purple-600 font-bold text-sm">
                <CheckCircle2 size={16} /> 핵심: 청년도약계좌, 청년내일채움공제, 청년월세지원
              </div>
            </div>

            <div className="bg-white rounded-[3rem] p-10 border border-slate-100 shadow-xl group hover:border-pink-300 transition-all">
              <div className="w-16 h-16 bg-pink-50 text-pink-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Baby size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">임신·출산 및 양육 가구 지원</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                2024년 <strong>부모급여</strong>는 0세 아동 기준 월 100만 원을 지급하며, 소득 제한 없이 모든 가구에 지급되는 보편 복지입니다. 양육 과정에서 발생하는 고정 지출을 관리하는 법은 <Link to="/life-hacks-guide" className="text-pink-600 font-bold underline underline-offset-4 decoration-pink-100">생활 꿀팁 가이드</Link>에서 상세히 다루고 있습니다.
              </p>
              <div className="flex items-center gap-2 text-pink-600 font-bold text-sm">
                <CheckCircle2 size={16} /> 핵심: 부모급여, 아동수당, 첫만남이용권, 육아휴직 급여
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Criteria Checklist */}
      <section id="criteria" className="py-24 bg-white scroll-mt-20">
        <div className="container mx-auto px-4 max-w-5xl animate-on-scroll">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">
              3. 복지정책 신청 전 체크리스트
            </h2>
            <p className="text-slate-500 font-medium">대부분의 복지는 다음 세 가지 기준을 통해 대상자를 선별합니다.</p>
          </div>

          <div className="grid gap-12">
            <div className="flex flex-col md:flex-row gap-10 items-start p-10 bg-slate-50 rounded-[3rem] border border-slate-100">
               <div className="w-20 h-20 bg-white text-purple-600 rounded-3xl flex items-center justify-center shrink-0 shadow-lg border border-purple-100 font-black text-2xl italic">01</div>
               <div>
                 <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">소득 및 재산 기준 (기준 중위소득 이해)</h3>
                 <p className="text-slate-600 leading-8 mb-6">
                   가장 많이 사용되는 기준은 <strong>'기준 중위소득'</strong>입니다. 2024년 4인 가구 기준 약 573만 원이 100%이며, 본인의 가구 소득이 이 금액의 몇 %인지 확인하는 것이 첫 번째 단계입니다. 단순히 월급만 보는 것이 아니라 보유한 부동산, 자동차 등도 소득으로 환산됨을 잊지 마세요.
                 </p>
               </div>
            </div>

            <div className="flex flex-col md:flex-row gap-10 items-start p-10 bg-slate-50 rounded-[3rem] border border-slate-100">
               <div className="w-20 h-20 bg-white text-purple-600 rounded-3xl flex items-center justify-center shrink-0 shadow-lg border border-purple-100 font-black text-2xl italic">02</div>
               <div>
                 <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">거주지 및 가구원 구성</h3>
                 <p className="text-slate-600 leading-8 mb-6">
                   중앙정부 혜택 외에도 내가 사는 <strong>지자체(시·군·구)</strong>만의 독자적인 혜택이 수백 가지가 넘습니다. 이사를 갔다면 해당 지역 주민센터 홈페이지를 가장 먼저 확인하는 것이 재테크의 기초입니다. 서울시 '희망두배 청년통장'처럼 특정 지역 거주자만 누릴 수 있는 고수익 상품을 절대 놓치지 마세요.
                 </p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Application Process */}
      <section id="process" className="py-24 bg-slate-50 scroll-mt-20 border-y border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl animate-on-scroll">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">
              4. 복지 혜택 신청 프로세스 (3단계)
            </h2>
            <p className="text-slate-500 font-medium">딱 이 순서대로만 진행하면 빠지는 혜택 없이 챙길 수 있습니다.</p>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-soft flex-1 text-center group hover:border-purple-400 transition-all">
              <div className="w-14 h-14 bg-purple-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-purple-200 group-hover:scale-110 transition-transform">1</div>
              <h4 className="font-bold text-slate-900 mb-4 text-xl underline decoration-purple-100 underline-offset-8">내 혜택 찾기</h4>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">
                <strong>보조금24</strong>에서 로그인을 통해 내가 받을 수 있는 혜택 목록을 한 번에 조회합니다.
              </p>
            </div>
            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-soft flex-1 text-center group hover:border-purple-400 transition-all">
              <div className="w-14 h-14 bg-purple-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-purple-200 group-hover:scale-110 transition-transform">2</div>
              <h4 className="font-bold text-slate-900 mb-4 text-xl underline decoration-purple-100 underline-offset-8">상담 및 준비</h4>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">
                <strong>복지로</strong> 모의계산을 돌려보고, 필요 서류를 확인하거나 거주지 주민센터에 문의합니다.
              </p>
            </div>
            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-soft flex-1 text-center group hover:border-emerald-400 transition-all">
              <div className="w-14 h-14 bg-emerald-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-emerald-200 group-hover:scale-110 transition-transform">3</div>
              <h4 className="font-bold text-slate-900 mb-4 text-xl underline decoration-emerald-100 underline-offset-8">신청 및 자산 관리</h4>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">
                혜택을 받았다면 이제 자산을 불릴 차례입니다. 확보한 자금으로 <Link to="/investment-guide" className="text-emerald-600 font-bold hover:underline">투자 전략</Link>을 세워보세요.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: Final Summary Checklist Section for SEO & UX */}
      <section id="final-summary" className="py-24 bg-white scroll-mt-20">
        <div className="container mx-auto px-4 max-w-4xl animate-on-scroll">
          <div className="bg-slate-900 rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden">
             <div className="absolute top-0 right-0 p-12 opacity-10">
               <BookmarkCheck size={200} />
             </div>
             
             <div className="relative z-10">
               <h2 className="text-2xl md:text-3xl font-black mb-10 flex items-center gap-3">
                 <Zap className="text-yellow-400" /> 복지 마스터를 위한 최종 요약 (Checklist)
               </h2>
               
               <div className="space-y-6 mb-12">
                 <div className="flex items-center gap-4 bg-white/5 p-5 rounded-2xl border border-white/10">
                   <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center shrink-0 font-bold">1</div>
                   <p className="text-sm md:text-base font-medium"><strong>보조금24</strong>에서 5분 만에 '내가 받을 혜택' 통합 조회하기</p>
                 </div>
                 <div className="flex items-center gap-4 bg-white/5 p-5 rounded-2xl border border-white/10">
                   <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center shrink-0 font-bold">2</div>
                   <p className="text-sm md:text-base font-medium">청년이라면 <strong>청년도약계좌</strong>, 부모라면 <strong>부모급여</strong> 우선 확인</p>
                 </div>
                 <div className="flex items-center gap-4 bg-white/5 p-5 rounded-2xl border border-white/10">
                   <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center shrink-0 font-bold">3</div>
                   <p className="text-sm md:text-base font-medium">혜택으로 확보한 현금 흐름을 <strong>투자 자산</strong>으로 전환하기</p>
                 </div>
               </div>

               <div className="border-t border-white/10 pt-10">
                 <h3 className="text-lg font-bold mb-6 text-slate-400 uppercase tracking-widest">상황별 추천 가이드 (Internal Links)</h3>
                 <div className="grid sm:grid-cols-2 gap-4">
                   <Link to="/finance-guide" className="flex items-center justify-between p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all group">
                     <span className="font-bold">목돈 모으기 기초 시스템</span>
                     <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                   </Link>
                   <Link to="/loan-guide" className="flex items-center justify-between p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all group">
                     <span className="font-bold">저금리 정책 대출 전략</span>
                     <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                   </Link>
                   <Link to="/life-hacks-guide" className="flex items-center justify-between p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all group">
                     <span className="font-bold">고정 생활비 절약 꿀팁</span>
                     <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                   </Link>
                   <Link to="/investment-guide" className="flex items-center justify-between p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all group">
                     <span className="font-bold">복리 효과 극대화 투자법</span>
                     <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                   </Link>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="container mx-auto px-4 max-w-3xl animate-on-scroll">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-slate-900 mb-6 tracking-tight">5. 자주 묻는 질문 (FAQ)</h2>
            <div className="w-16 h-1 bg-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-4">
            <details className="group bg-white rounded-3xl border border-slate-200 open:shadow-xl transition-all duration-300">
              <summary className="flex items-center justify-between p-6 md:p-8 font-bold text-lg text-slate-800 cursor-pointer list-none select-none hover:text-purple-600">
                Q. 소득인정액 계산이 너무 복잡한데 팁이 있나요?
                <span className="bg-slate-50 p-2 rounded-full group-open:rotate-180 transition-transform shadow-sm"><ChevronDown /></span>
              </summary>
              <div className="px-6 pb-8 md:px-8 text-slate-600 leading-relaxed border-t border-slate-200 pt-6">
                <p>
                  본인이 직접 계산하기보다는 <strong>'복지로'의 모의계산 서비스</strong>를 활용하세요. 건강보험료 납부액이나 소득 세부 내역을 입력하면 자동으로 판정해 줍니다. 또한, <Link to="/finance-guide" className="text-purple-600 font-bold">머니와이즈 소득 관리 팁</Link>에서 새는 돈을 막는 법도 참고해 보세요.
                </p>
              </div>
            </details>

            <details className="group bg-white rounded-3xl border border-slate-200 open:shadow-xl transition-all duration-300">
              <summary className="flex items-center justify-between p-6 md:p-8 font-bold text-lg text-slate-800 cursor-pointer list-none select-none hover:text-purple-600">
                Q. 세대 분리는 실제 거주 안 해도 인정되나요?
                <span className="bg-slate-50 p-2 rounded-full group-open:rotate-180 transition-transform shadow-sm"><ChevronDown /></span>
              </summary>
              <div className="px-6 pb-8 md:px-8 text-slate-600 leading-relaxed border-t border-slate-200 pt-6">
                <p>
                  아니요, 위장 전입은 엄연한 불법이며 적발 시 지원금 환수 및 법적 처벌을 받습니다. 실제 거주 요건을 충족할 때만 세대 분리를 통한 가구 소득 분리 혜택을 받을 수 있습니다.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Latest Articles Hub */}
      <section className="py-24 bg-white border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-6xl animate-on-scroll">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl font-black text-slate-900">최신 복지·정책 칼럼</h2>
              <p className="text-slate-500 mt-2 font-medium">변화하는 정부 정책 소식을 가장 빠르게 확인하세요.</p>
            </div>
            <Link to="/welfare" className="hidden md:flex items-center text-sm font-bold text-purple-600 hover:underline gap-1">
              전체 보기 <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedArticles.map((article, idx) => (
              <div key={article.id} className={`animate-on-scroll delay-${(idx+1)*100}`}>
                <ArticleCard article={article} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Disclaimer */}
      <section className="py-12 bg-purple-50 border-t border-purple-100">
        <div className="container mx-auto px-4 max-w-4xl flex items-start gap-4 text-purple-800">
          <AlertCircle className="shrink-0 mt-1" size={24} />
          <div className="text-xs md:text-sm leading-relaxed font-medium">
             <p className="font-bold mb-1">복지정책 가이드 최종 안내</p>
             본 가이드의 모든 내용은 참고용이며, 정확한 자격 요건 및 신청 방법은 관계 기관(복지로, 보조금24 등)의 최신 공고를 반드시 확인하시기 바랍니다. 머니와이즈는 정보의 오류로 인한 책임을 지지 않습니다.
          </div>
        </div>
      </section>
    </main>
  );
};