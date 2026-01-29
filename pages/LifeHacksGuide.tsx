import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Coffee, 
  ShoppingBag, 
  CreditCard, 
  Lightbulb,
  Repeat,
  CheckCircle2,
  Wallet,
  ArrowRight
} from 'lucide-react';
import { INITIAL_ARTICLES } from '../constants';
import { Category } from '../types';
import { ArticleCard } from '../components/ArticleCard';

export const LifeHacksGuide: React.FC = () => {
  // Automatically fetch articles related to this guide's category
  const relatedArticles = useMemo(() => {
    return INITIAL_ARTICLES
      .filter(article => article.category === Category.LIFE)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, []);

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
          3. DYNAMIC CONTENT: RELATED ARTICLES (SEO HUB STRUCTURE)
          ===================================================================================== */}
      <section id="latest-articles" className="py-24 bg-white border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex items-end justify-between mb-10 border-b border-slate-100 pb-4">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">생활 속 금융 꿀팁</h2>
              <p className="text-slate-500 mt-2">알아두면 돈이 되는 실전 노하우</p>
            </div>
            <Link to="/life" className="hidden md:flex items-center text-sm font-bold text-blue-600 hover:underline">
              전체 보기 <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
          
          {/* Dynamic Article Grid */}
          {relatedArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedArticles.map(article => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-slate-50 rounded-xl">
              <p className="text-slate-500">관련된 최신 글이 준비 중입니다.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};