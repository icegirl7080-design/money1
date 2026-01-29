import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Scale, 
  AlertTriangle, 
  CheckCircle2, 
  Landmark,
  ShieldAlert,
  Coins,
  CreditCard,
  ArrowRight
} from 'lucide-react';
import { INITIAL_ARTICLES } from '../constants';
import { Category } from '../types';
import { ArticleCard } from '../components/ArticleCard';
import { SEO } from '../components/SEO';

export const LoanGuide: React.FC = () => {
  // Automatically fetch articles related to this guide's category
  const relatedArticles = useMemo(() => {
    return INITIAL_ARTICLES
      .filter(article => article.category === Category.LOAN)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, []);

  return (
    <main className="flex-grow bg-white text-slate-900 font-sans leading-relaxed selection:bg-blue-100">
      <SEO 
        title="대출 가이드 | 안전한 소액 대출과 신용 관리"
        description="1금융권 비상금 대출부터 신용점수 올리는 법까지. 빚을 자산으로 만드는 현명한 대출 활용법과 불법 사금융 피하는 법을 가이드합니다."
        keywords={['소액대출', '비상금대출', '신용점수', '대출금리', '신용관리', '1금융권']}
      />

      {/* =====================================================================================
          1. HEADER SECTION (H1)
          ===================================================================================== */}
      <section className="relative bg-slate-900 text-white py-24 overflow-hidden">
        {/* Professional Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-transparent to-slate-900/50"></div>

        <div className="container mx-auto px-4 relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-bold mb-6 backdrop-blur-md uppercase tracking-wider">
            <BookOpen size={14} />
            <span>Loan & Credit Strategy</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-black leading-tight mb-6 break-keep">
            대출은 빚이 아닌 전략이다:<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              안전한 자금 융통과 신용 관리의 정석
            </span>
          </h1>

          <p className="text-lg text-slate-400 leading-relaxed max-w-2xl font-light mb-0 break-keep">
            "빚은 무조건 나쁜 것"이라는 오해에서 벗어나야 합니다. 
            자본주의 사회에서 대출은 자산 증식을 위한 레버리지(Leverage)이자, 삶의 유동성을 공급하는 도구입니다. 
            단, <strong>감당할 수 있는 범위</strong>와 <strong>명확한 상환 계획</strong>이 있을 때만 대출은 '자산'이 됩니다.
            본 가이드는 금융 소비자를 위한 안전한 대출 활용법을 제시합니다.
          </p>
        </div>
      </section>

      {/* =====================================================================================
          Internal Link: Credit Card Guide
          ===================================================================================== */}
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4 py-8">
           <Link to="/credit-card-guide" className="group flex items-center justify-between bg-white border border-slate-200 p-6 rounded-xl hover:border-indigo-300 hover:shadow-md transition-all max-w-4xl mx-auto">
              <div className="flex items-center gap-4">
                <div className="bg-indigo-100 text-indigo-600 p-3 rounded-lg group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  <CreditCard size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg group-hover:text-indigo-700 transition-colors">신용점수 관리법이 궁금하신가요?</h3>
                  <p className="text-sm text-slate-500">대출 한도와 금리를 결정하는 신용카드 사용법 확인하기</p>
                </div>
              </div>
              <ArrowRight className="text-slate-300 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all" />
           </Link>
        </div>
      </section>

      {/* =====================================================================================
          2. CORE CONTENT: STRUCTURE & PRINCIPLE (H2)
          ===================================================================================== */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-start gap-4 mb-8">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-xl mt-1">
              <Landmark size={24} />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">
                1. 좋은 대출 vs 나쁜 대출
              </h2>
              <div className="prose prose-slate max-w-none text-slate-600 leading-loose">
                <p>
                  대출(Loan)은 <strong>'미래의 소득을 현재로 가져와 사용하는 것'</strong>입니다. 
                  따라서 대출 실행 전, 이 자금이 미래에 더 큰 가치를 창출하는지 따져봐야 합니다.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                    <strong className="block text-blue-800 text-lg mb-2">👍 좋은 대출 (Good Debt)</strong>
                    <ul className="text-sm text-slate-700 list-disc list-inside space-y-2">
                      <li>자산 가치가 상승하는 곳에 투자 (예: 주택 담보 대출)</li>
                      <li>내 소득 능력을 높이는 데 사용 (예: 학자금 대출)</li>
                      <li>이자율보다 높은 수익이 예상될 때</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
                    <strong className="block text-red-800 text-lg mb-2">👎 나쁜 대출 (Bad Debt)</strong>
                    <ul className="text-sm text-slate-700 list-disc list-inside space-y-2">
                      <li>단순 소비나 사치품 구매를 위한 대출</li>
                      <li>가치가 떨어지는 자산(자동차, 가전) 구매</li>
                      <li>도박이나 투기성 자산에 투자</li>
                    </ul>
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
              <h2 className="text-3xl font-bold text-slate-900">대출 꿀팁 & 심층 분석</h2>
              <p className="text-slate-500 mt-2">금융 전문가가 전하는 실전 대출 전략</p>
            </div>
            <Link to="/loan" className="hidden md:flex items-center text-sm font-bold text-blue-600 hover:underline">
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