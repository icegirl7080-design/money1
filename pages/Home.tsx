import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArticleCard } from '../components/ArticleCard';
import { INITIAL_ARTICLES } from '../constants';
import { TrendingUp, CreditCard, Coins, Landmark, ShieldCheck, ArrowRight, BookOpen, Sparkles, Loader2, CheckCircle2, Search } from 'lucide-react';
import { generateMarketingImage } from '../services/geminiService';

// 이미지 콘셉트 정의 (SEO 및 분위기 고려 - 중복 방지)
const HERO_PROMPT = "A trustworthy financial expert working at a modern desk with a laptop displaying growth charts, warm and professional lighting, blue and white color scheme, high resolution, photorealistic, blurred office background symbolizing stability and success";

const CATEGORY_PROMPTS: Record<string, string> = {
  loan: "3D isometric illustration of a secure bank vault and golden coins, soft blue background, representing safe loans and financial security, minimalist style",
  finance: "3D isometric illustration of a calculator and a growing money tree, soft emerald background, representing smart asset management and savings, minimalist style",
  life: "3D isometric illustration of a credit card turning into liquid gold or cash, soft amber background, representing credit card cash-out tips, minimalist style",
  investment: "3D isometric illustration of a bull market statue and rising bar graph, soft red background, representing stock investment success, minimalist style",
  welfare: "3D isometric illustration of a government building and supporting hands, soft purple background, representing welfare policies and support, minimalist style",
};

export const Home: React.FC = () => {
  const recentArticles = INITIAL_ARTICLES.slice(0, 4);
  
  const [heroImage, setHeroImage] = useState<string | null>(null);
  const [categoryImages, setCategoryImages] = useState<Record<string, string>>({});
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerateImages = async () => {
    // API Key Check
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
      // Generate Hero Image
      const heroUrl = await generateMarketingImage(HERO_PROMPT, 'hero');
      if (heroUrl) setHeroImage(heroUrl);

      // Generate Category Images sequentially
      const newCatImages = { ...categoryImages };
      for (const [key, prompt] of Object.entries(CATEGORY_PROMPTS)) {
         const url = await generateMarketingImage(prompt, 'card');
         if (url) {
           newCatImages[key] = url;
           setCategoryImages(prev => ({ ...prev, [key]: url }));
         }
      }
    } catch (e) {
      console.error(e);
      alert("이미지 생성 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
    } finally {
      setIsGenerating(false);
    }
  };

  const categories = [
    {
      id: 'loan',
      title: '대출꿀팁',
      desc: '급할 때 유용한 소액 대출과 신용 점수 관리법',
      icon: <Coins size={20} />,
      path: '/loan',
      color: 'bg-blue-50 text-blue-600',
    },
    {
      id: 'life',
      title: '생활꿀팁',
      desc: '잠자는 신용카드 포인트 현금화 및 숨은 돈 찾기',
      icon: <CreditCard size={20} />,
      path: '/life',
      color: 'bg-amber-50 text-amber-600',
    },
    {
      id: 'investment',
      title: '투자/주식',
      desc: '초보자도 할 수 있는 ETF 및 배당주 투자 전략',
      icon: <TrendingUp size={20} />,
      path: '/investment',
      color: 'bg-red-50 text-red-600',
    },
    {
      id: 'welfare',
      title: '복지/정책',
      desc: '2024년 놓치면 손해 보는 정부 지원금 총정리',
      icon: <ShieldCheck size={20} />,
      path: '/welfare',
      color: 'bg-purple-50 text-purple-600',
    },
    {
      id: 'finance',
      title: '금융/재테크',
      desc: '월급 관리부터 통장 쪼개기까지 재테크의 기초',
      icon: <Landmark size={20} />,
      path: '/finance',
      color: 'bg-emerald-50 text-emerald-600',
    }
  ];

  return (
    <main className="flex-grow bg-white">
      {/* 1. Hero Section: 신뢰감을 주는 메인 헤드라인 및 키워드 강조 */}
      <section className="relative bg-slate-900 text-white overflow-hidden min-h-[600px] flex items-center">
        {heroImage ? (
          <>
            <img src={heroImage} alt="Financial Expert Workspace" className="absolute inset-0 w-full h-full object-cover opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/60"></div>
          </>
        ) : (
           <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900 via-slate-900 to-slate-900"></div>
        )}
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 text-sm font-medium mb-6 backdrop-blur-sm">
              <Sparkles size={14} className="text-blue-400" />
              <span>당신의 금융 파트너, 머니와이즈</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 tracking-tight">
              금융의 불확실성을 <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                확실한 기회
              </span>로 바꿉니다
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl font-light">
              <strong className="text-white font-medium">소액 대출</strong>부터 <strong className="text-white font-medium">신용카드 현금화</strong>, 
              그리고 <strong className="text-white font-medium">주식 투자</strong> 전략까지.<br className="hidden md:block"/>
              검증된 금융 정보로 당신의 자산을 지키고 불려드립니다.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/finance" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg shadow-blue-900/50 hover:shadow-blue-600/30 flex items-center transform hover:-translate-y-1">
                금융 가이드 시작하기 <ArrowRight size={18} className="ml-2" />
              </Link>
              <button 
                onClick={handleGenerateImages}
                disabled={isGenerating}
                className="bg-white/5 hover:bg-white/10 backdrop-blur-md text-slate-200 font-medium py-4 px-6 rounded-xl transition-all border border-white/10 flex items-center hover:border-white/30"
              >
                {isGenerating ? <Loader2 size={18} className="animate-spin mr-2" /> : <Sparkles size={18} className="mr-2 text-yellow-400" />}
                {isGenerating ? 'AI 디자인 중...' : 'AI 테마 적용'}
              </button>
            </div>
            
            {/* Quick Keywords */}
            <div className="mt-12 flex flex-wrap gap-3 text-sm text-slate-400">
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/50 border border-slate-700">
                <Search size={14} /> 인기 키워드:
              </span>
              {['소액비상금', '신용카드현금화', '정부지원금', 'ETF투자', '무직자대출'].map(kw => (
                <Link key={kw} to="/finance" className="hover:text-blue-400 transition-colors underline decoration-slate-700 underline-offset-4 hover:decoration-blue-400">
                  #{kw}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Trust Indicators: 신뢰성 강조 섹션 */}
      <section className="bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: '검증된 정보', desc: '금융 전문가가 직접 팩트 체크한 신뢰할 수 있는 콘텐츠' },
              { title: '쉬운 설명', desc: '복잡한 금융 용어를 초보자 눈높이에서 쉽게 풀이' },
              { title: '실전 노하우', desc: '당장 실생활에 적용 가능한 현실적인 재테크 팁' }
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                <div className="bg-blue-100 text-blue-600 p-2 rounded-lg shrink-0">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Categories: 직관적인 카테고리 구성 */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4">분야별 맞춤 정보</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              나에게 필요한 금융 정보를 선택하세요. <br className="hidden sm:block"/>
              대출부터 투자, 복지 혜택까지 핵심만 정리했습니다.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <Link 
                key={cat.id} 
                to={cat.path}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 flex flex-col h-full"
              >
                {/* Image Area */}
                <div className={`h-48 relative overflow-hidden ${cat.color} bg-opacity-10`}>
                   {categoryImages[cat.id] ? (
                     <img src={categoryImages[cat.id]} alt={cat.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                   ) : (
                     <div className="flex items-center justify-center w-full h-full opacity-20">
                        <div className="transform scale-[3] opacity-30">{cat.icon}</div>
                     </div>
                   )}
                   <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm p-2.5 rounded-xl shadow-sm z-10">
                      <div className={`${cat.color.split(' ')[1]}`}>
                        {cat.icon}
                      </div>
                   </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">
                    {cat.desc}
                  </p>
                  <div className="mt-auto flex items-center text-sm font-semibold text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0">
                    자세히 보기 <ArrowRight size={16} className="ml-1" />
                  </div>
                </div>
              </Link>
            ))}
             
             {/* Newsletter Card for Grid Balance */}
             <div className="group relative bg-slate-900 rounded-2xl overflow-hidden shadow-lg flex flex-col justify-between p-8 text-white">
                <div className="relative z-10">
                  <div className="bg-blue-500/20 w-fit p-3 rounded-xl mb-6">
                    <BookOpen size={24} className="text-blue-400"/>
                  </div>
                  <h3 className="text-xl font-bold mb-3">돈이 되는 뉴스레터</h3>
                  <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                    매주 월요일 아침,<br/>
                    놓치기 쉬운 금융 정책과<br/>
                    재테크 꿀팁을 보내드립니다.
                  </p>
                </div>
                <div className="relative z-10">
                  <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-lg transition-colors flex items-center justify-center">
                    무료 구독하기
                  </button>
                </div>
                
                {/* Background Decoration */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl -ml-12 -mb-12"></div>
             </div>
          </div>
        </div>
      </section>

      {/* 4. Recent Articles: 최신 정보 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4 border-b border-slate-100 pb-6">
            <div>
              <span className="text-blue-600 font-bold text-sm tracking-wider uppercase mb-2 block">Latest Insights</span>
              <h2 className="text-3xl font-extrabold text-slate-900">최신 금융 인사이트</h2>
            </div>
            <Link to="/finance" className="group flex items-center text-slate-600 font-semibold hover:text-blue-600 transition-colors">
              전체 글 보기 <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {recentArticles.map((article, idx) => (
              <ArticleCard key={article.id} article={article} featured={idx === 0 && window.innerWidth < 1024} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. SEO Text Block: 검색 엔진 최적화 텍스트 */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100">
            <div className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">금융 정보의 비대칭을 해결하는 '머니와이즈'</h2>
              
              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div>
                  <h3 className="text-lg font-bold text-slate-800 mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-6 bg-blue-500 rounded-full"></span>
                    안전한 소액 대출 가이드
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    급하게 현금이 필요할 때, 불법 사금융의 위험에 노출되지 않도록 주의해야 합니다. 
                    머니와이즈는 1금융권 비상금 대출부터 정부 지원 서민 금융 상품까지, 
                    신용 점수에 영향이 적은 안전한 <strong>소액 대출</strong> 정보를 엄선하여 제공합니다. 
                    대출 전 반드시 확인해야 할 금리 비교와 상환 계획 수립 노하우를 확인하세요.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-800 mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-6 bg-emerald-500 rounded-full"></span>
                    신용카드 포인트 현금화
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    매년 소멸되는 카드 포인트가 수천억 원에 달한다는 사실을 알고 계신가요? 
                    복잡한 절차 없이 여신금융협회를 통해 <strong>신용카드</strong> 포인트를 통합 조회하고, 
                    이를 100% <strong>현금화</strong>하여 내 계좌로 즉시 입금받는 방법을 안내합니다. 
                    숨어있는 당신의 자산을 1원도 놓치지 마세요.
                  </p>
                </div>

                <div>
                   <h3 className="text-lg font-bold text-slate-800 mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-6 bg-red-500 rounded-full"></span>
                    실전 투자 및 주식 전략
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    불확실한 시장에서도 꾸준한 수익을 낼 수 있는 ETF 포트폴리오와 배당주 투자 전략을 소개합니다. 
                    초보자도 쉽게 따라 할 수 있는 <strong>주식 투자</strong>의 기초부터, 
                    절세를 위한 계좌 활용법(ISA, IRP)까지 재테크의 모든 단계를 함께합니다.
                  </p>
                </div>
                
                <div>
                   <h3 className="text-lg font-bold text-slate-800 mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-6 bg-purple-500 rounded-full"></span>
                    놓치면 손해 보는 복지 정책
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    나에게 해당하는 정부 지원금이 있는지 궁금하신가요? 
                    청년 월세 지원, 근로 장려금, 부모 급여 등 2024년 새롭게 바뀌는 
                    다양한 <strong>복지 정책</strong>을 알기 쉽게 정리해 드립니다. 
                    신청 기간과 자격 요건을 미리 확인하고 혜택을 챙기세요.
                  </p>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-slate-100 text-center">
                <p className="text-slate-500 text-sm">
                  머니와이즈는 금융 소비자의 알 권리를 존중하며, 객관적이고 공정한 정보 제공을 원칙으로 합니다.<br/>
                  본 사이트에서 제공하는 정보는 참고용이며, 법적 효력을 갖지 않습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};