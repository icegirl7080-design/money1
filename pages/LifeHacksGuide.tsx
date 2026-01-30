import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShoppingBag, 
  Lightbulb,
  ArrowRight,
  PiggyBank,
  Receipt,
  ArrowDown
} from 'lucide-react';
import { INITIAL_ARTICLES } from '../constants';
import { Category } from '../types';
import { ArticleCard } from '../components/ArticleCard';
import { SEO } from '../components/SEO';

export const LifeHacksGuide: React.FC = () => {
  const relatedArticles = useMemo(() => {
    return INITIAL_ARTICLES
      .filter(article => article.category === Category.LIFE)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, []);

  return (
    <main className="flex-grow bg-slate-50 font-sans text-slate-900 selection:bg-amber-100">
      <SEO 
        title="생활 꿀팁 가이드 | 소비 습관과 절약 노하우"
        description="일상 속에서 실천할 수 있는 지출 관리, 절약 팁, 현명한 소비 습관을 통해 새는 돈을 막고 종잣돈을 모으는 방법을 공유합니다."
        keywords={['생활꿀팁', '절약', '지출관리', '가계부', '소비습관', '짠테크']}
      />

      {/* Hero Section */}
      <section className="relative bg-amber-50 pt-32 pb-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-bl from-white/80 via-transparent to-transparent pointer-events-none"></div>
        <div className="absolute bottom-0 right-20 w-80 h-80 bg-orange-100/40 rounded-full blur-3xl pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10 max-w-5xl animate-on-scroll flex flex-col items-start md:items-center md:text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 border border-amber-200 text-amber-600 text-xs font-bold mb-6 shadow-sm backdrop-blur-sm uppercase tracking-wider">
            <Lightbulb size={14} />
            <span>Smart Living & Finance</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6 break-keep text-slate-900">
            일상의 작은 선택이 만드는 부:<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
              생활 속 금융 최적화
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl font-medium mb-8 break-keep">
            부자가 되는 길은 거창한 투자에서 시작하지 않습니다. 
            매일 마시는 커피 한 잔, 무심코 결제한 구독 서비스 등 <strong>작은 소비 습관</strong>을 통제하는 것에서 시작됩니다.
          </p>

          <a href="#content" className="inline-flex items-center gap-2 px-8 py-4 bg-amber-600 text-white font-bold rounded-2xl shadow-lg shadow-amber-200 hover:shadow-amber-300 hover:bg-amber-700 transition-all hover:-translate-y-1">
            소비 습관 점검하기 <ArrowDown size={20} />
          </a>
        </div>
      </section>

      {/* Concept Section */}
      <section id="content" className="py-16 bg-white relative z-20 -mt-10 rounded-t-[3rem] shadow-[0_-20px_40px_-15px_rgba(0,0,0,0.05)] scroll-mt-20">
        <div className="container mx-auto px-4 max-w-4xl animate-on-scroll delay-100">
          <div className="flex items-start gap-5 mb-10">
            <div className="p-3 bg-amber-50 text-amber-600 rounded-2xl shadow-inner">
              <ShoppingBag size={28} />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-4">
                1. 소비 통제의 기술
              </h2>
              <div className="prose prose-slate max-w-none text-slate-600 leading-loose">
                <p>
                  효율적인 <strong>생활 금융</strong>의 시작은 '필요(Needs)'와 '욕구(Wants)'를 구분하는 것입니다. 
                  구매 버튼을 누르기 전, 1분만 멈춰서 "이것이 없으면 생활이 불가능한가?"를 자문해보세요.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-amber-50/50 p-8 rounded-3xl border border-amber-100 hover:bg-amber-50 transition-colors">
              <strong className="flex items-center gap-2 text-amber-700 text-lg mb-4 font-black">
                <Receipt size={20} /> 라떼 효과 (Latte Factor)
              </strong>
              <p className="text-sm text-slate-700 leading-relaxed font-medium">
                하루 5천 원의 커피값은 한 달이면 15만 원, 1년이면 180만 원입니다. 
                소액이라 무시했던 지출이 모이면 거대한 자산의 손실이 됩니다.
              </p>
            </div>
            <div className="bg-orange-50/50 p-8 rounded-3xl border border-orange-100 hover:bg-orange-50 transition-colors">
              <strong className="flex items-center gap-2 text-orange-700 text-lg mb-4 font-black">
                <PiggyBank size={20} /> 캘린더 저축법
              </strong>
              <p className="text-sm text-slate-700 leading-relaxed font-medium">
                매일 날짜에 맞춰 저축액을 늘려가는 방식(1일 1,000원... 30일 30,000원)으로 
                저축을 게임처럼 즐기며 습관을 들이세요.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section id="latest-articles" className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-6xl animate-on-scroll">
          <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900">생활 속 금융 꿀팁</h2>
              <p className="text-slate-500 mt-2 font-medium">알아두면 돈이 되는 실전 노하우</p>
            </div>
            <Link to="/life" className="hidden md:flex items-center text-sm font-bold text-amber-600 hover:underline">
              전체 보기 <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
          
          {relatedArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedArticles.map((article, idx) => (
                <div key={article.id} className={`animate-on-scroll delay-${(idx+1)*100}`}>
                  <ArticleCard article={article} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-3xl border border-slate-100">
              <p className="text-slate-500 font-medium">관련된 최신 글이 준비 중입니다.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};