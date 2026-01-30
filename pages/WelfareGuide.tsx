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
  ArrowDown
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
    <main className="flex-grow bg-slate-50 font-sans text-slate-900 selection:bg-purple-100">
      <SEO 
        title="복지 정책 가이드 | 2024년 놓치면 안 될 정부 지원금"
        description="청년도약계좌, 부모급여, 근로장려금 등 정부가 지원하는 다양한 금융 복지 혜택과 신청 방법을 알기 쉽게 정리해 드립니다."
        keywords={['복지정책', '정부지원금', '청년도약계좌', '부모급여', '근로장려금', '청년정책']}
      />

      {/* Hero Section */}
      <section className="relative bg-purple-50 pt-32 pb-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-bl from-white/80 via-transparent to-transparent pointer-events-none"></div>
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-pink-200/30 rounded-full blur-3xl pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10 max-w-5xl animate-on-scroll flex flex-col items-start md:items-center md:text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 border border-purple-200 text-purple-600 text-xs font-bold mb-6 shadow-sm backdrop-blur-sm uppercase tracking-wider">
            <Landmark size={14} />
            <span>Public Policy Guide</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6 break-keep text-slate-900">
            금융과 생활 안정을 위한<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              필수 복지 정책 가이드
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl font-medium mb-8 break-keep">
            복지는 어려운 사람만 받는 것이 아닙니다. 성실히 세금을 내는 국민이라면 누려야 할 당연한 권리입니다. 
            복잡한 정책 용어는 걷어내고, <strong>내가 실제로 받을 수 있는 혜택</strong> 위주로 정리했습니다.
          </p>

          <a href="#content" className="inline-flex items-center gap-2 px-8 py-4 bg-purple-600 text-white font-bold rounded-2xl shadow-lg shadow-purple-200 hover:shadow-purple-300 hover:bg-purple-700 transition-all hover:-translate-y-1">
            지원금 확인하기 <ArrowDown size={20} />
          </a>
        </div>
      </section>

      {/* Concept Section */}
      <section id="content" className="py-16 bg-white relative z-20 -mt-10 rounded-t-[3rem] shadow-[0_-20px_40px_-15px_rgba(0,0,0,0.05)] scroll-mt-20">
        <div className="container mx-auto px-4 max-w-4xl animate-on-scroll delay-100">
          <div className="flex items-start gap-5 mb-10">
            <div className="p-3 bg-purple-50 text-purple-600 rounded-2xl shadow-inner">
              <Users size={28} />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-4">
                1. 정책은 아는 만큼 보입니다
              </h2>
              <div className="prose prose-slate max-w-none text-slate-600 leading-loose">
                <p>
                  정부 지원금은 대부분 <strong>'신청주의'</strong>를 원칙으로 합니다. 
                  내가 자격 요건이 되어도 신청하지 않으면 10원도 받을 수 없습니다. 
                  매년 바뀌는 정책 트렌드를 파악하고, 주기적으로 '복지로'나 '보조금24'를 확인하는 습관이 중요합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Policies Cards */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 max-w-5xl animate-on-scroll">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 flex items-center justify-center gap-3">
              <ShieldCheck className="text-purple-600" size={32} />
              2024년 핵심 지원 정책
            </h2>
            <p className="text-slate-500 mt-2 font-medium">대상별 맞춤형 혜택을 확인하세요.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Youth Policy */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-purple-100/50 hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600 mb-6 group-hover:scale-110 transition-transform">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-purple-600 transition-colors">청년 (19~34세)</h3>
              <ul className="space-y-3 text-sm text-slate-600 font-medium">
                <li className="flex gap-2 items-start">
                  <span className="text-purple-400 mt-1">•</span>
                  <span><strong>청년도약계좌:</strong> 5년 납입 시 최대 5천만 원 목돈 마련</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-purple-400 mt-1">•</span>
                  <span><strong>청년월세지원:</strong> 무주택 청년 월세 최대 20만 원 지원</span>
                </li>
              </ul>
            </div>

            {/* Parents Policy */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-pink-100/50 hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-12 h-12 bg-pink-50 rounded-2xl flex items-center justify-center text-pink-600 mb-6 group-hover:scale-110 transition-transform">
                <Baby size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-pink-600 transition-colors">출산/육아</h3>
              <ul className="space-y-3 text-sm text-slate-600 font-medium">
                <li className="flex gap-2 items-start">
                  <span className="text-pink-400 mt-1">•</span>
                  <span><strong>부모급여:</strong> 0세 월 100만 원, 1세 월 50만 원 지급</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-pink-400 mt-1">•</span>
                  <span><strong>첫만남이용권:</strong> 출생 아동 1명당 200만 원 바우처</span>
                </li>
              </ul>
            </div>

            {/* Low Income Policy */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-blue-100/50 hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                <Building2 size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">근로/서민</h3>
              <ul className="space-y-3 text-sm text-slate-600 font-medium">
                <li className="flex gap-2 items-start">
                  <span className="text-blue-400 mt-1">•</span>
                  <span><strong>근로장려금:</strong> 소득 요건 충족 시 최대 330만 원 현금 지급</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-blue-400 mt-1">•</span>
                  <span><strong>햇살론 유스:</strong> 취준생/사회초년생 저금리 생활비 대출</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section id="latest-articles" className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-6xl animate-on-scroll">
          <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900">최신 복지/정책 정보</h2>
              <p className="text-slate-500 mt-2 font-medium">놓치면 손해 보는 정부 지원금과 제도</p>
            </div>
            <Link to="/welfare" className="hidden md:flex items-center text-sm font-bold text-purple-600 hover:underline">
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