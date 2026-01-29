import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Landmark, 
  HelpingHand, 
  FileText, 
  AlertCircle, 
  Scale, 
  Users,
  Building2,
  SearchCheck,
  ArrowRight
} from 'lucide-react';
import { INITIAL_ARTICLES } from '../constants';
import { Category } from '../types';
import { ArticleCard } from '../components/ArticleCard';

export const WelfareGuide: React.FC = () => {
  // Automatically fetch articles related to this guide's category
  const relatedArticles = useMemo(() => {
    return INITIAL_ARTICLES
      .filter(article => article.category === Category.WELFARE)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, []);

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
          3. DYNAMIC CONTENT: RELATED ARTICLES (SEO HUB STRUCTURE)
          ===================================================================================== */}
      <section id="latest-articles" className="py-24 bg-white border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex items-end justify-between mb-10 border-b border-slate-100 pb-4">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">최신 복지/정책 정보</h2>
              <p className="text-slate-500 mt-2">놓치면 손해 보는 정부 지원금과 제도</p>
            </div>
            <Link to="/welfare" className="hidden md:flex items-center text-sm font-bold text-blue-600 hover:underline">
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