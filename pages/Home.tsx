import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArticleCard } from '../components/ArticleCard';
import { INITIAL_ARTICLES } from '../constants';
import { TrendingUp, CreditCard, Coins, Landmark, ShieldCheck, ArrowRight, BookOpen, Sparkles, Loader2 } from 'lucide-react';
import { generateMarketingImage } from '../services/geminiService';

const HERO_PROMPT = "A professional, clean, wide-angle photo of a modern bright home office desk with a laptop displaying financial charts, a calculator, and a notebook, soft natural lighting, high resolution, 4k, trustworthy atmosphere, blurry office background";

const CATEGORY_PROMPTS: Record<string, string> = {
  loan: "High quality 3D icon illustration of a handshake and gold coins, clean soft blue background, financial trust concept, minimalist, isometric",
  finance: "High quality 3D icon illustration of a piggy bank and a growing green plant, clean soft emerald background, savings concept, minimalist, isometric",
  life: "High quality 3D icon illustration of a credit card and a glowing lightbulb, clean soft amber background, smart tips concept, minimalist, isometric",
  investment: "High quality 3D icon illustration of an upward trending arrow and 3D bar chart, clean soft red background, growth concept, minimalist, isometric",
  welfare: "High quality 3D icon illustration of a shield and a heart symbol, clean soft purple background, protection and care concept, minimalist, isometric",
};

export const Home: React.FC = () => {
  const recentArticles = INITIAL_ARTICLES.slice(0, 4);
  
  const [heroImage, setHeroImage] = useState<string | null>(null);
  const [categoryImages, setCategoryImages] = useState<Record<string, string>>({});
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerateImages = async () => {
    // API Key Check for Veo/High-Quality Image models
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

      // Generate Category Images sequentially to avoid rate limits/overwhelming
      const newCatImages = { ...categoryImages };
      for (const [key, prompt] of Object.entries(CATEGORY_PROMPTS)) {
         const url = await generateMarketingImage(prompt, 'card');
         if (url) {
           newCatImages[key] = url;
           setCategoryImages({...newCatImages}); // Update state progressively
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
      desc: '안전한 소액 대출과 현명한 자금 운용',
      icon: <Coins size={20} />,
      path: '/loan',
      color: 'bg-blue-50 text-blue-600',
      prompt: CATEGORY_PROMPTS.loan
    },
    {
      id: 'finance',
      title: '금융/재테크',
      desc: '사회초년생을 위한 월급 관리의 정석',
      icon: <Landmark size={20} />,
      path: '/finance',
      color: 'bg-emerald-50 text-emerald-600',
      prompt: CATEGORY_PROMPTS.finance
    },
    {
      id: 'life',
      title: '생활꿀팁',
      desc: '신용카드 포인트 현금화와 숨은 돈 찾기',
      icon: <CreditCard size={20} />,
      path: '/life',
      color: 'bg-amber-50 text-amber-600',
      prompt: CATEGORY_PROMPTS.life
    },
    {
      id: 'investment',
      title: '투자/주식',
      desc: '흔들리지 않는 ETF 및 배당주 투자 전략',
      icon: <TrendingUp size={20} />,
      path: '/investment',
      color: 'bg-red-50 text-red-600',
      prompt: CATEGORY_PROMPTS.investment
    },
    {
      id: 'welfare',
      title: '복지/정책',
      desc: '2024년 놓치지 말아야 할 정부 지원금',
      icon: <ShieldCheck size={20} />,
      path: '/welfare',
      color: 'bg-purple-50 text-purple-600',
      prompt: CATEGORY_PROMPTS.welfare
    }
  ];

  return (
    <main className="flex-grow bg-white">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white overflow-hidden min-h-[500px] flex items-center">
        {/* Background Image or Pattern */}
        {heroImage ? (
          <>
            <img src={heroImage} alt="Financial Workspace" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-[2px]"></div>
          </>
        ) : (
           <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_50%,_rgba(255,255,255,0.1),transparent_25%),radial-gradient(circle_at_70%_80%,_rgba(59,130,246,0.2),transparent_25%)]"></div>
        )}
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 tracking-tight drop-shadow-lg">
              현명한 금융 생활의 시작,<br />
              <span className="text-blue-400">머니와이즈</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-200 mb-10 leading-relaxed max-w-2xl font-light drop-shadow-md">
              복잡한 금융 정보를 쉽고 명확하게.<br className="hidden sm:block" />
              <strong>소액 대출</strong>, <strong>투자 전략</strong>, <strong>정부 복지</strong>까지<br className="hidden sm:block" /> 
              당신의 자산을 지키고 불리는 확실한 가이드입니다.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/finance" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors flex items-center shadow-lg shadow-blue-900/50">
                가이드 시작하기 <ArrowRight size={18} className="ml-2" />
              </Link>
              <button 
                onClick={handleGenerateImages}
                disabled={isGenerating}
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center border border-white/20"
              >
                {isGenerating ? <Loader2 size={18} className="animate-spin mr-2" /> : <Sparkles size={18} className="mr-2 text-yellow-400" />}
                {isGenerating ? 'AI 디자인 중...' : 'AI 디자인 생성'}
              </button>
            </div>
            {isGenerating && <p className="mt-4 text-sm text-blue-200 animate-pulse">고화질 이미지를 생성하고 있습니다. (약 10~20초 소요)</p>}
          </div>
        </div>
      </section>

      {/* Category Overview */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">맞춤형 금융 정보</h2>
            <p className="text-slate-600">관심 있는 키워드를 선택하세요.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            {categories.map((cat) => (
              <Link 
                key={cat.id} 
                to={cat.path}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Category Image Area */}
                <div className={`h-32 md:h-40 w-full relative overflow-hidden ${cat.color} bg-opacity-10`}>
                   {categoryImages[cat.id] ? (
                     <img src={categoryImages[cat.id]} alt={cat.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                   ) : (
                     <div className="flex items-center justify-center w-full h-full opacity-20">
                        {/* Placeholder visual using icon scale */}
                        <div className="transform scale-[3] opacity-30">{cat.icon}</div>
                     </div>
                   )}
                   <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm p-2 rounded-lg shadow-sm">
                      <div className={`${cat.color.split(' ')[1]}`}>
                        {cat.icon}
                      </div>
                   </div>
                </div>

                <div className="p-5 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">
                    {cat.desc}
                  </p>
                </div>
              </Link>
            ))}
             
             {/* Newsletter Card */}
             <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 md:p-8 text-white flex flex-col justify-center relative overflow-hidden shadow-lg">
                <div className="relative z-10">
                  <BookOpen size={32} className="text-blue-400 mb-4"/>
                  <h3 className="text-xl font-bold mb-2">뉴스레터 구독</h3>
                  <p className="text-slate-300 text-sm mb-6 opacity-90">
                    매주 월요일,<br/>돈이 되는 정보를 보내드립니다.
                  </p>
                  <div className="flex items-center text-blue-300 text-sm font-bold cursor-pointer hover:text-white transition-colors">
                    구독하기 <ArrowRight size={16} className="ml-2" />
                  </div>
                </div>
                {/* Deco circle */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
             </div>
          </div>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">최신 인사이트</h2>
            <Link to="/finance" className="hidden md:block text-sm font-semibold text-slate-500 hover:text-blue-600 transition-colors">
              전체보기 &rarr;
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {recentArticles.map(article => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link to="/finance" className="inline-block px-6 py-3 border border-slate-300 rounded-lg text-slate-600 font-medium text-sm hover:bg-slate-50 transition-colors">
              더 많은 글 보기
            </Link>
          </div>
        </div>
      </section>

      {/* SEO Text Block */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-100">
            <div className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">금융 정보의 비대칭을 해결합니다</h2>
              
              <h3 className="text-lg font-bold text-slate-800 mt-8 mb-3">안전한 소액 대출과 신용 관리</h3>
              <p className="text-slate-600 leading-relaxed">
                급하게 현금이 필요할 때, 불법 사금융의 유혹에 빠지기 쉽습니다. 머니와이즈는 제도권 금융 내에서 이용할 수 있는 안전한 <strong>소액 대출</strong> 상품(비상금 대출)과 서민 금융 상품을 소개합니다. 또한, 대출의 기본 조건인 신용점수를 올바르게 관리하는 방법을 안내하여 장기적인 금융 건전성을 돕습니다.
              </p>

              <h3 className="text-lg font-bold text-slate-800 mt-8 mb-3">숨은 자산 찾기: 신용카드 포인트 현금화</h3>
              <p className="text-slate-600 leading-relaxed">
                매년 소멸되는 카드 포인트가 상당합니다. 복잡한 절차 없이 여신금융협회를 통해 <strong>신용카드</strong> 포인트를 조회하고, 이를 100% <strong>현금화</strong>하여 계좌로 입금받는 실질적인 팁을 제공합니다. 작은 습관이 모여 큰 자산이 됩니다.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};