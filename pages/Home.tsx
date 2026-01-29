import React from 'react';
import { ArticleCard } from '../components/ArticleCard';
import { INITIAL_ARTICLES } from '../constants';
import { TrendingUp, ShieldCheck, Coins, BookOpen } from 'lucide-react';

export const Home: React.FC = () => {
  const featuredArticle = INITIAL_ARTICLES[0];
  const recentArticles = INITIAL_ARTICLES.slice(1);

  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white py-20 px-4">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto relative z-10 text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight tracking-tight">
            스마트한 <span className="text-blue-400">금융 생활</span>의 시작,<br/>
            머니와이즈
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto">
            급할 때 필요한 소액 대출부터 잠자는 신용카드 포인트 현금화,<br className="hidden md:block"/>
            그리고 미래를 위한 주식 투자 전략까지. 검증된 금융 정보를 만나보세요.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-blue-500/30 transition-all transform hover:-translate-y-1">
              최신 트렌드 보기
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border border-white/20 font-bold py-3 px-8 rounded-full transition-all">
              인기 칼럼 구독
            </button>
          </div>
        </div>
      </section>

      {/* Trust Indicators / Quick Features */}
      <section className="bg-white py-12 border-b border-slate-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center p-4">
              <div className="bg-blue-50 p-3 rounded-full text-blue-600 mb-3">
                <ShieldCheck size={28} />
              </div>
              <h3 className="font-bold text-slate-800">검증된 정보</h3>
              <p className="text-xs text-slate-500 mt-1">전문가가 확인한 금융 지식</p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <div className="bg-emerald-50 p-3 rounded-full text-emerald-600 mb-3">
                <TrendingUp size={28} />
              </div>
              <h3 className="font-bold text-slate-800">투자 인사이트</h3>
              <p className="text-xs text-slate-500 mt-1">시장 흐름을 읽는 분석</p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <div className="bg-amber-50 p-3 rounded-full text-amber-600 mb-3">
                <Coins size={28} />
              </div>
              <h3 className="font-bold text-slate-800">생활 혜택</h3>
              <p className="text-xs text-slate-500 mt-1">숨은 포인트와 지원금</p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <div className="bg-purple-50 p-3 rounded-full text-purple-600 mb-3">
                <BookOpen size={28} />
              </div>
              <h3 className="font-bold text-slate-800">쉬운 가이드</h3>
              <p className="text-xs text-slate-500 mt-1">초보자 맞춤형 설명</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
            <span className="text-blue-600 mr-2">Editor's</span>Pick
          </h2>
        </div>
        <ArticleCard article={featuredArticle} featured={true} />
      </section>

      {/* Recent Articles Grid */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                최신 금융 꿀팁
              </h2>
              <p className="text-slate-500 text-sm">대출, 투자, 복지 등 놓치면 안 되는 정보들</p>
            </div>
            <a href="#/all" className="text-sm font-bold text-blue-600 hover:text-blue-800 hidden md:block">
              전체보기 &rarr;
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {recentArticles.map(article => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
             <button className="bg-white border border-slate-300 text-slate-700 font-bold py-3 px-8 rounded-lg shadow-sm w-full">
              더 많은 글 보기
             </button>
          </div>
        </div>
      </section>

      {/* SEO Content Block (Hidden from visual dominance but important for crawl) */}
      <section className="py-16 container mx-auto px-4 border-t border-slate-200">
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">금융 정보, 왜 머니와이즈인가요?</h2>
          <div className="prose prose-slate max-w-none">
            <p className="mb-4">
              현대 사회에서 금융 지식은 선택이 아닌 필수입니다. 
              <strong>머니와이즈</strong>는 복잡하고 어려운 금융 용어를 누구나 이해하기 쉽게 풀어드립니다.
              특히 <strong>소액 대출</strong>이 필요할 때 안전한 상품을 선별하는 방법, 
              자투리 <strong>신용카드 포인트</strong>를 모아 <strong>현금화</strong>하는 실질적인 생활 꿀팁을 제공합니다.
            </p>
            <p>
              또한 변동성이 심한 시장 상황 속에서 <strong>투자</strong>의 방향을 잡지 못하는 분들을 위해 
              기초적인 <strong>주식</strong> 분석부터 포트폴리오 구성 전략까지 단계별 가이드를 제시합니다.
              정부에서 제공하는 다양한 <strong>복지 정책</strong> 혜택을 몰라서 받지 못하는 일이 없도록, 
              최신 정책 뉴스를 신속하게 업데이트하고 있습니다.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};