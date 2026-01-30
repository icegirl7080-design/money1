import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Landmark,
  CreditCard,
  ArrowRight,
  ShieldCheck,
  Ban,
  ArrowDown
} from 'lucide-react';
import { INITIAL_ARTICLES } from '../constants';
import { Category } from '../types';
import { ArticleCard } from '../components/ArticleCard';
import { SEO } from '../components/SEO';

export const LoanGuide: React.FC = () => {
  const relatedArticles = useMemo(() => {
    return INITIAL_ARTICLES
      .filter(article => article.category === Category.LOAN)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, []);

  return (
    <main className="flex-grow bg-slate-50 font-sans text-slate-900 selection:bg-blue-100">
      <SEO 
        title="대출 가이드 | 안전한 소액 대출과 신용 관리"
        description="1금융권 비상금 대출부터 신용점수 올리는 법까지. 빚을 자산으로 만드는 현명한 대출 활용법과 불법 사금융 피하는 법을 가이드합니다."
        keywords={['소액대출', '비상금대출', '신용점수', '대출금리', '신용관리', '1금융권']}
      />

      {/* Hero Section */}
      <section className="relative bg-sky-50 pt-32 pb-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/60 to-transparent pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-50 to-transparent"></div>

        <div className="container mx-auto px-4 relative z-10 max-w-5xl animate-on-scroll flex flex-col items-start md:items-center md:text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-sky-200 text-sky-600 text-xs font-bold mb-6 shadow-sm uppercase tracking-wider">
            <BookOpen size={14} />
            <span>Loan & Credit Strategy</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6 break-keep text-slate-900">
            대출은 빚이 아닌 전략이다:<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-600">
              안전한 자금 융통과 신용 관리
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl font-medium mb-8 break-keep">
            "빚은 무조건 나쁜 것"이라는 오해에서 벗어나야 합니다. 
            자본주의 사회에서 대출은 자산 증식을 위한 레버리지(Leverage)입니다. 
            단, <strong>감당할 수 있는 범위</strong>와 <strong>명확한 상환 계획</strong>이 있을 때만 대출은 '자산'이 됩니다.
          </p>

          <a href="#content" className="inline-flex items-center gap-2 px-8 py-4 bg-sky-600 text-white font-bold rounded-2xl shadow-lg shadow-sky-200 hover:shadow-sky-300 hover:bg-sky-700 transition-all hover:-translate-y-1">
            가이드 시작하기 <ArrowDown size={20} />
          </a>
        </div>
      </section>

      {/* Internal Link Card */}
      <section className="relative -mt-10 mb-20 z-20 px-4">
        <div className="container mx-auto max-w-4xl">
           <Link to="/credit-card-guide" className="group flex flex-col md:flex-row items-center justify-between bg-white border border-slate-100 p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:shadow-sky-100 hover:-translate-y-1 transition-all duration-300 animate-on-scroll delay-100">
              <div className="flex items-center gap-6 w-full md:w-auto mb-4 md:mb-0">
                <div className="bg-blue-50 text-blue-600 p-4 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shrink-0">
                  <CreditCard size={32} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-xl group-hover:text-blue-700 transition-colors">신용점수 관리법이 궁금하신가요?</h3>
                  <p className="text-slate-500 mt-1 text-sm md:text-base">대출 한도와 금리를 결정하는 신용카드 사용법 확인하기</p>
                </div>
              </div>
              <div className="bg-slate-50 p-3 rounded-full group-hover:bg-blue-50 transition-colors self-end md:self-auto">
                <ArrowRight className="text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
              </div>
           </Link>
        </div>
      </section>

      {/* Content Section */}
      <section id="content" className="py-12 bg-slate-50 scroll-mt-20">
        <div className="container mx-auto px-4 max-w-4xl animate-on-scroll">
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-slate-100 mb-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-sky-100 text-sky-700 rounded-xl">
                <Landmark size={28} />
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900">
                좋은 대출 vs 나쁜 대출
              </h2>
            </div>
            
            <div className="prose prose-slate max-w-none text-slate-600 leading-loose">
              <p className="mb-8">
                대출(Loan)은 <strong>'미래의 소득을 현재로 가져와 사용하는 것'</strong>입니다. 
                따라서 대출 실행 전, 이 자금이 미래에 더 큰 가치를 창출하는지 따져봐야 합니다.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-sky-50/50 p-8 rounded-2xl border border-sky-100 hover:bg-sky-50 transition-colors">
                  <strong className="flex items-center gap-2 text-sky-700 text-lg mb-4">
                    <ShieldCheck size={20} /> 좋은 대출 (Good Debt)
                  </strong>
                  <ul className="text-sm text-slate-700 space-y-3 font-medium">
                    <li className="flex gap-2"><span className="text-sky-400">•</span> 자산 가치가 상승하는 곳에 투자</li>
                    <li className="flex gap-2"><span className="text-sky-400">•</span> 내 소득 능력을 높이는 데 사용 (학자금)</li>
                    <li className="flex gap-2"><span className="text-sky-400">•</span> 이자율보다 높은 수익이 예상될 때</li>
                  </ul>
                </div>
                <div className="bg-red-50/50 p-8 rounded-2xl border border-red-100 hover:bg-red-50 transition-colors">
                  <strong className="flex items-center gap-2 text-red-700 text-lg mb-4">
                    <Ban size={20} /> 나쁜 대출 (Bad Debt)
                  </strong>
                  <ul className="text-sm text-slate-700 space-y-3 font-medium">
                    <li className="flex gap-2"><span className="text-red-400">•</span> 단순 소비나 사치품 구매를 위한 대출</li>
                    <li className="flex gap-2"><span className="text-red-400">•</span> 가치가 떨어지는 자산(자동차) 구매</li>
                    <li className="flex gap-2"><span className="text-red-400">•</span> 도박이나 투기성 자산에 투자</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Hub */}
      <section id="latest-articles" className="py-24 bg-white border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-6xl animate-on-scroll">
          <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900">대출 꿀팁 & 심층 분석</h2>
              <p className="text-slate-500 mt-2 font-medium">금융 전문가가 전하는 실전 대출 전략</p>
            </div>
            <Link to="/loan" className="hidden md:flex items-center text-sm font-bold text-sky-600 hover:underline">
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
            <div className="text-center py-20 bg-slate-50 rounded-3xl border border-slate-100">
              <p className="text-slate-500 font-medium">관련된 최신 글이 준비 중입니다.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};