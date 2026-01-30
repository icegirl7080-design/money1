import { Article, Category, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: '홈', path: '/', inMenu: true },
  { label: '금융기초', path: '/finance-guide', inMenu: true },
  { label: '대출·신용', path: '/loan-guide', inMenu: true },
  { label: '신용카드', path: '/credit-card-guide', inMenu: false },
  { label: '주식·투자', path: '/investment-guide', inMenu: true },
  { label: '복지정책', path: '/welfare-guide', inMenu: true },
  { label: '생활꿀팁', path: '/life-hacks-guide', inMenu: false },
  { label: '전체글', path: '/blog', inMenu: true }, 
  { label: '금융/재테크', path: '/finance', category: Category.FINANCE, inMenu: false },
  { label: '대출꿀팁', path: '/loan', category: Category.LOAN, inMenu: false },
  { label: '투자/주식', path: '/investment', category: Category.INVESTMENT, inMenu: false },
  { label: '복지/정책', path: '/welfare', category: Category.WELFARE, inMenu: false },
  { label: '생활꿀팁', path: '/life', category: Category.LIFE, inMenu: false },
];

export const INITIAL_ARTICLES: Article[] = [
  {
    id: '15',
    slug: 'sunshine-loan-master-guide',
    category: Category.LOAN,
    title: '햇살론 정부지원 대출 완벽 가이드: 나에게 가장 유리한 선택은?',
    summary: '낮은 신용점수나 소득으로 인해 1금융권 이용이 어려운 분들을 위한 햇살론의 종류별 조건과 승인율 높이는 법을 상세히 안내합니다.',
    imageUrl: 'https://images.unsplash.com/photo-1550565118-3a14e8d0386f?q=80&w=1200&auto=format&fit=crop',
    date: '2024-03-25',
    author: '금융 정책 에디터',
    tags: ['햇살론', '정부지원대출', '서민금융', '근로자햇살론', '햇살론15', '햇살론유스', '저신용자대출'],
    content: `
      <p class="mb-8 text-xl leading-relaxed font-bold text-slate-800 break-keep">
        고물가 상황에서 갑작스러운 자금이 필요하지만, 낮은 신용점수나 소득 때문에 고민이신가요? <strong>햇살론</strong>은 대표적인 <strong>정부지원 대출</strong> 상품으로, 1금융권 이용이 어려운 분들을 위한 실질적인 금융 안전망입니다. 이 글에서는 <strong>저신용자 대출</strong>의 핵심인 햇살론의 종류별 자격 조건과 나에게 맞는 상품을 찾는 법을 상세히 가이드해 드립니다.
      </p>

      <h2 class="text-2xl md:text-3xl font-black text-slate-900 mt-16 mb-8 tracking-tight">1. 햇살론이란 무엇인가: 서민을 위한 금융 제도</h2>
      <p class="mb-6 leading-8 text-slate-700">
        햇살론은 신용점수가 낮거나 소득이 적어 제도권 금융 이용에 제약을 받는 서민들을 위해 <strong>서민금융진흥원</strong>과 민간 금융사가 협력하여 제공하는 보증부 대출입니다. 정부가 대출금의 상당 부분을 보증하기 때문에, 금융사는 리스크를 줄이면서도 상대적으로 낮은 금리로 자금을 공급할 수 있습니다.
      </p>
      <p class="mb-6 leading-8 text-slate-700">
        단순히 자금을 융통하는 것을 넘어, 고금리 채무의 악순환을 예방하고 경제적 자립을 돕는 <a href="/#/finance-guide" class="text-blue-600 font-bold">사회적 금융 정책</a>의 일환으로 운영됩니다.
      </p>

      <h2 class="text-2xl md:text-3xl font-black text-slate-900 mt-16 mb-8 tracking-tight">2. 햇살론 종류별 자격 조건과 상세 혜택</h2>
      <p class="mb-6 leading-8 text-slate-700">
        햇살론은 신청자의 직업, 연령, 신용 상태에 따라 세 가지 대표 상품으로 나뉩니다. 각 조건에 맞는 최적의 상품을 선택해야 이자 부담을 최소화할 수 있습니다.
      </p>

      <h3 class="text-xl md:text-2xl font-black text-slate-800 mb-4 flex items-center gap-2">
        근로자햇살론: 직장인을 위한 대표 지원 상품
      </h3>
      <ul class="list-disc pl-6 mb-6 space-y-2 text-slate-700">
        <li><strong>대상:</strong> 3개월 이상 재직 중인 근로자</li>
        <li><strong>소득기준:</strong> 연 소득 3,500만 원 이하 (신용점수 무관) 또는 연 소득 4,500만 원 이하 (신용점수 하위 20% 이하)</li>
        <li><strong>한도 및 금리:</strong> 최대 2,000만 원 / 연 11.5% 내외 (변동 가능)</li>
      </ul>
      <p class="p-4 bg-blue-50 text-blue-800 rounded-xl mb-8 font-medium">
        💡 <strong>추천 대상:</strong> 소득 증빙이 가능한 직장인 중 기존 채무가 많아 추가 한도가 필요한 분
      </p>

      <h3 class="text-xl md:text-2xl font-black text-slate-800 mb-4 flex items-center gap-2">
        햇살론15: 최저신용자를 위한 고정 금리 상품
      </h3>
      <ul class="list-disc pl-6 mb-6 space-y-2 text-slate-700">
        <li><strong>대상:</strong> 연 소득 4,500만 원 이하이면서 신용점수 하위 20% 이하인 자</li>
        <li><strong>특징:</strong> 대부업 등 고금리 대출 이용이 불가피한 경우를 위한 대안</li>
        <li><strong>금리 혜택:</strong> 연 15.9% (성실 상환 시 매년 금리 인하 혜택 제공)</li>
      </ul>
      <p class="p-4 bg-slate-100 text-slate-700 rounded-xl mb-8 font-medium">
        💡 <strong>추천 대상:</strong> 신용점수가 매우 낮아 2금융권에서도 승인이 어려운 분
      </p>

      <h3 class="text-xl md:text-2xl font-black text-slate-800 mb-4 flex items-center gap-2">
        햇살론유스(Youth): 대학생 및 청년을 위한 저금리 지원
      </h3>
      <ul class="list-disc pl-6 mb-6 space-y-2 text-slate-700">
        <li><strong>대상:</strong> 만 34세 이하의 대학생, 미취업 청년 또는 사회초년생 (재직 1년 이하)</li>
        <li><strong>한도 및 금리:</strong> 최대 1,200만 원 / 연 3.5% 고정 금리</li>
        <li><strong>거치 기간:</strong> 군 복무나 학업 기간을 고려하여 넉넉한 상환 유예 제공</li>
      </ul>
      <p class="p-4 bg-purple-50 text-purple-800 rounded-xl mb-8 font-medium">
        💡 <strong>추천 대상:</strong> 취업을 준비 중이거나 이제 막 사회에 첫발을 내디딘 청년층
      </p>

      <h2 class="text-2xl md:text-3xl font-black text-slate-900 mt-16 mb-8 tracking-tight">3. 햇살론 승인 가능성을 높이는 핵심 전략</h2>
      <p class="mb-6 leading-8 text-slate-700">
        햇살론은 일반 신용대출보다 문턱이 낮지만, 서민금융진흥원의 보증 심사가 핵심입니다. 승인율을 높이기 위해 다음 사항을 점검하십시오.
      </p>
      <ul class="list-disc pl-6 mb-8 space-y-3 text-slate-700 font-medium">
        <li><strong>최근 연체 이력:</strong> 최근 3개월 내 10일 이상의 연체가 없어야 합니다.</li>
        <li><strong>금융 교육 이수:</strong> 서민금융진흥원 온라인 교육을 이수하면 금리 인하 및 심사 가점을 받을 수 있습니다.</li>
        <li><strong>서류 구비:</strong> 건강보험 자격득실 확인서 등 소득과 재직을 증빙하는 서류를 정확히 준비하십시오.</li>
      </ul>

      <div class="bg-slate-50 border-l-8 border-slate-400 p-8 my-12 rounded-r-3xl">
        <h2 class="text-slate-900 text-xl font-black mb-4 flex items-center gap-2">
          이용 시 주의사항 및 안전한 신청 경로
        </h2>
        <p class="mb-4 text-slate-700 leading-relaxed">
          정부지원 대출을 사칭한 불법 금융 광고에 주의해야 합니다. 아래의 안전 수칙을 반드시 지키십시오.
        </p>
        <ul class="space-y-3 text-slate-800 font-medium">
          <li class="flex gap-2"><span>•</span> <span><strong>공식 신청 경로:</strong> 모든 햇살론 상담은 <strong>서민금융진흥원(국번없이 1397)</strong> 또는 공식 앱 '서민금융 잇다'를 통해서만 진행하십시오.</span></li>
          <li class="flex gap-2"><span>•</span> <span><strong>선입금 요구 거절:</strong> 보증료나 수수료를 이유로 먼저 입금을 요구하는 것은 100% 사기입니다.</span></li>
          <li class="flex gap-2"><span>•</span> <span><strong>전화 권유 주의:</strong> 금융기관은 먼저 전화를 걸어 대출을 권유하지 않습니다.</span></li>
        </ul>
      </div>

      <div class="p-10 bg-slate-900 text-white rounded-[3rem] mt-16 shadow-2xl relative overflow-hidden">
        <div class="absolute top-0 right-0 p-8 opacity-10">
          <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
        </div>
        <h4 class="text-blue-400 font-black mb-6 text-2xl uppercase tracking-tighter">Sunshine Loan Key Takeaways</h4>
        <div class="space-y-4 text-slate-300 font-medium leading-relaxed">
          <p class="flex items-start gap-3"><span class="text-blue-500 mt-1">●</span> <span>햇살론은 <strong>저신용자 대출</strong> 대안 중 가장 안정적인 정부 지원 정책입니다.</span></p>
          <p class="flex items-start gap-3"><span class="text-blue-500 mt-1">●</span> <span>본인의 소득과 상황에 따라 <strong>근로자, 15, 유스</strong> 중 금리가 가장 낮은 상품부터 확인해야 합니다.</span></p>
          <p class="flex items-start gap-3"><span class="text-blue-500 mt-1">●</span> <span>서민금융진흥원 공식 채널을 통한 상담이 가장 안전하며, 불법 사금융 광고에 현혹되지 않는 것이 중요합니다.</span></p>
        </div>
      </div>

      <div class="mt-16 border-t border-slate-200 pt-12">
        <p class="text-slate-500 mb-6 font-medium">금융 생활에 더 필요한 정보가 있다면 아래 가이드를 참고해 보세요.</p>
        <div class="grid sm:grid-cols-2 gap-6">
          <a href="/#/loan-guide" class="group p-8 bg-white rounded-3xl border border-slate-100 hover:border-blue-600 transition-all shadow-soft flex flex-col items-center text-center">
            <div class="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
            </div>
            <p class="font-black text-slate-900 mb-1 group-hover:text-blue-600">신용점수 관리와 대출 상환의 정석, 대출 마스터 가이드 →</p>
          </a>
          <a href="/#/welfare-guide" class="group p-8 bg-white rounded-3xl border border-slate-100 hover:border-purple-600 transition-all shadow-soft flex flex-col items-center text-center">
            <div class="w-12 h-12 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
            </div>
            <p class="font-black text-slate-900 mb-1 group-hover:text-purple-600">나만 모르는 정부 지원금 찾기, 최신 복지정책 확인 →</p>
          </a>
        </div>
      </div>
    `
  },
  {
    id: '1',
    slug: 'emergency-loan-guide',
    category: Category.LOAN,
    title: '소액 비상금 대출 완벽 가이드: 급전 마련의 구조와 안전한 활용법',
    summary: '갑작스러운 유동성 위기 시, 신용점수 하락을 최소화하며 안전하게 자금을 융통하는 1금융권 소액 대출의 메커니즘과 주의사항을 심층 분석합니다.',
    imageUrl: 'https://images.unsplash.com/photo-1542222024-c39e2281f121?q=80&w=1200&auto=format&fit=crop',
    date: '2023-10-24',
    author: '금융 에디터',
    tags: ['소액', '대출', '비상금', '신용점수', '서울보증보험', '비상금대출', '1금융권대출', '무직자대출'],
    content: `
      <p class="mb-8 text-xl leading-relaxed font-bold text-slate-800 break-keep">
        살다 보면 누구나 갑작스럽게 100만 원, 200만 원 정도의 급전이 필요한 순간을 맞이합니다. 이때 가장 위험한 선택은 '무조건 빠른 것'만 찾는 것입니다. <a href="/#/loan-guide" class="text-blue-600 underline decoration-blue-200 underline-offset-4">1금융권 소액 비상금 대출</a>의 구조를 이해하면 신용을 지키면서도 가장 저렴한 비용으로 자금을 마련할 수 있습니다.
      </p>

      <h2 class="text-2xl md:text-3xl font-black text-slate-900 mt-16 mb-8 tracking-tight">1. 소액 비상금 대출이란 무엇인가: 작동 원리의 이해</h2>
      <p class="mb-6 leading-8 text-slate-700">
        비상금 대출은 일반적인 신용대출과 달리 서류 제출이나 소득 증빙이 필요 없는 경우가 많습니다. "소득이 없는데 어떻게 돈을 빌려주지?"라는 의문이 생길 수 있지만, 이는 금융권의 고도화된 보증 시스템 덕분입니다.
      </p>
      
      <h3 class="text-xl md:text-2xl font-black text-slate-800 mb-4 flex items-center gap-2">
        <span class="w-1.5 h-6 bg-blue-600 rounded-full inline-block"></span> 
        서울보증보험(SGI)의 역할과 보증서 발급
      </h3>
      <p class="mb-6 leading-8 text-slate-700">
        대부분의 1금융권 비상금 대출은 <strong>서울보증보험</strong>과 연계되어 있습니다. 은행은 고객의 소득을 보는 대신, 보증보험사가 발행한 '보증서'를 담보로 대출을 실행합니다. 보험사가 신청자의 신용도를 심사하여 "이 사람은 300만 원 정도는 충분히 갚을 수 있다"고 은행에 보증을 서주는 구조입니다.
      </p>
      <p class="mb-6 leading-8 text-slate-700">
        만약 대출자가 돈을 갚지 못하면 보험사가 은행에 먼저 돈을 갚아줍니다(대위변제). 은행 입장에서는 리스크가 없기 때문에 무직자나 학생에게도 기꺼이 돈을 빌려줄 수 있는 것입니다. 이는 <a href="/#/finance-guide" class="text-blue-600 font-bold">금융 시스템의 신뢰 기반</a> 위에서 작동합니다.
      </p>

      <h2 class="text-2xl md:text-3xl font-black text-slate-900 mt-16 mb-8 tracking-tight">2. 비상금 대출의 자격 조건과 심사 기준</h2>
      <p class="mb-6 leading-8 text-slate-700">
        소득 증빙은 없지만, 아무에게나 빌려주는 것은 아닙니다. 금융사는 신청자의 '상환 의지'를 다른 지표로 확인합니다.
      </p>

      <h3 class="text-xl md:text-2xl font-black text-slate-800 mb-4 flex items-center gap-2">
        <span class="w-1.5 h-6 bg-blue-600 rounded-full inline-block"></span> 
        소득 증빙이 필요 없는 '통신 등급'의 비밀
      </h3>
      <p class="mb-6 leading-8 text-slate-700">
        최근 많은 은행이 활용하는 지표는 <strong>통신 등급(Telco Score)</strong>입니다. 휴대폰 요금을 밀리지 않고 성실하게 냈다면 금융 이력이 부족해도 우량한 등급을 받을 수 있습니다. 이는 평소 <a href="/#/credit-card-guide" class="text-blue-600 font-bold">신용 관리 습관</a>이 얼마나 중요한지를 단적으로 보여줍니다.
      </p>

      <h2 class="text-2xl md:text-3xl font-black text-slate-900 mt-16 mb-8 tracking-tight">3. 이자와 상환 방식: 나에게 유리한 선택은?</h2>
      <p class="mb-6 leading-8 text-slate-700">
        비상금 대출은 빌리는 방식에 따라 실제 내는 이자가 크게 달라집니다. 본인의 자산 흐름에 맞는 방식을 선택해야 합니다.
      </p>

      <h3 class="text-xl md:text-2xl font-black text-slate-800 mb-4 flex items-center gap-2">
        <span class="w-1.5 h-6 bg-blue-600 rounded-full inline-block"></span> 
        마이너스 통장 방식의 일할 계산 이자 장점
      </h3>
      <p class="mb-6 leading-8 text-slate-700">
        대부분의 비상금 대출은 <strong>마이너스 통장(한도대출)</strong> 방식으로 실행됩니다. 300만 원 한도를 받아두었어도 실제로 10만 원만 썼다면, 그 10만 원에 대해서만 이자가 붙습니다. 특히 '일할 계산' 방식이므로 돈을 쓰고 며칠 뒤에 바로 갚으면 딱 며칠치 이자만 내면 됩니다.
      </p>

      <div class="bg-red-50 border-l-8 border-red-500 p-8 my-12 rounded-r-3xl">
        <h2 class="text-red-900 text-xl font-black mb-4 flex items-center gap-2">
          ⚠️ 이런 경우엔 조심하세요! (위험 요인)
        </h2>
        <ul class="space-y-3 text-red-800 font-medium">
          <li class="flex gap-2"><span>🚨</span> <span><strong>DSR 한도 잠식:</strong> 소액 대출도 엄연한 대출입니다. 추후 큰 금액의 주택담보대출을 받을 때 한도가 줄어들 수 있습니다.</span></li>
          <li class="flex gap-2"><span>🚨</span> <span><strong>무분별한 습관화:</strong> '언제든 빌릴 수 있다'는 생각은 과소비의 지름길입니다. 비상금은 말 그대로 '비상시'에만 써야 합니다.</span></li>
          <li class="flex gap-2"><span>🚨</span> <span><strong>연체 시 가혹한 페널티:</strong> 1금융권 대출이라도 연체 시 신용점수는 즉각 폭락하며, 향후 5년간 금융 거래에 제약이 생깁니다.</span></li>
        </ul>
      </div>

      <div class="p-10 bg-slate-900 text-white rounded-[3rem] mt-16 shadow-2xl relative overflow-hidden">
        <div class="absolute top-0 right-0 p-8 opacity-10">
          <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
        </div>
        <h4 class="text-blue-400 font-black mb-6 text-2xl uppercase tracking-tighter">SEO Final Summary (30초 요약)</h4>
        <div class="space-y-4 text-slate-300 font-medium">
          <p class="flex items-start gap-3"><span class="text-blue-500 mt-1">●</span> <span>소액 비상금 대출은 <strong>서울보증보험 보증서</strong>를 기반으로 소득 없이도 실행 가능합니다.</span></p>
          <p class="flex items-start gap-3"><span class="text-blue-500 mt-1">●</span> <span><strong>마이너스 통장 방식</strong>을 선택하여 이자 비용을 일 단위로 최소화하는 것이 가장 똑똑한 활용법입니다.</span></p>
          <p class="flex items-start gap-3"><span class="text-blue-500 mt-1">●</span> <span>반드시 <strong>1금융권 상품</strong>을 먼저 확인하여 신용점수 타격을 방어해야 합니다.</span></p>
        </div>
      </div>
    `
  },
  {
    id: '14',
    slug: 'credit-card-cash-out-risk-alternatives',
    category: Category.LOAN,
    title: '신용카드 소액결제 및 현금화의 늪: 30% 수수료를 아끼는 합법적 대출 대안',
    summary: '급전이 필요해 신용카드 현금화나 소액결제를 고민 중이신가요? 겉보기엔 편리하지만 실제로는 연 300% 이상의 살인적인 금리를 부담하는 것과 같습니다. 안전하게 자금을 융통할 수 있는 정부 지원 소액 대출과 1금융권 비상금 대출의 실체를 공개합니다.',
    imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop',
    date: '2024-03-20',
    author: '금융 전략 에디터',
    tags: ['소액', '신용카드', '현금화', '대출', '비상금대출', '카드깡', '금융사기'],
    content: `
      <p class="mb-8 text-xl leading-relaxed font-bold text-slate-800 break-keep">
        인터넷을 검색하다 보면 '신용카드 현금화', '소액결제 매입'이라는 광고를 쉽게 접할 수 있습니다. 겉으로는 친절해 보이지만, 그 속에는 연 300%에 달하는 살인적인 금리와 범죄의 늪이 숨어 있습니다.
      </p>

      <h2 class="text-2xl md:text-3xl font-black text-slate-900 mt-16 mb-8 tracking-tight">1. 신용카드 현금화(카드깡), 왜 위험한가?</h2>
      <p class="mb-6 leading-8 text-slate-700">
        일명 '카드깡'으로 불리는 불법 현금화는 허위 매출을 발생시켜 현금을 융통하는 행위입니다. 업체들은 보통 20~30%의 수수료를 떼어갑니다. 예를 들어 100만 원을 결제하면 내 손에 들어오는 돈은 70만 원뿐이지만, 다음 달 카드사에는 100만 원을 고스란히 갚아야 합니다. 한 달 이자가 30%, 연리로 환산하면 360%라는 말도 안 되는 금리입니다.
      </p>

      <h3 class="text-xl md:text-2xl font-black text-slate-800 mb-4 flex items-center gap-2">
        <span class="w-1.5 h-6 bg-red-600 rounded-full inline-block"></span> 
        금융 질서 문란자 등록의 공포
      </h3>
      <p class="mb-6 leading-8 text-slate-700">
        불법 현금화가 적발될 경우 '금융 질서 문란자'로 등록됩니다. 이 정보는 모든 금융사에 공유되어 향후 7~12년 동안 대출, 신용카드 발급 등 모든 금융 거래가 전면 차단됩니다. 한 번의 실수로 인생의 금융 사다리가 끊어지는 것입니다.
      </p>

      <h2 class="text-2xl md:text-3xl font-black text-slate-900 mt-16 mb-8 tracking-tight">2. 합법적이고 안전한 자금 마련 대안</h2>
      <p class="mb-6 leading-8 text-slate-700">
        급전이 필요할수록 차분해져야 합니다. 국가와 1금융권에는 신용도가 낮아도 이용 가능한 저렴한 상품들이 많습니다.
      </p>

      <h3 class="text-xl md:text-2xl font-black text-slate-800 mb-4 flex items-center gap-2">
        <span class="w-1.5 h-6 bg-blue-600 rounded-full inline-block"></span> 
        서민금융진흥원의 '소액생계비대출'
      </h3>
      <p class="mb-6 leading-8 text-slate-700">
        신용점수가 낮아 은행 이용이 어렵다면 <strong>서민금융진흥원</strong>의 소액생계비대출을 먼저 확인하세요. 연 15.9%의 금리로 최대 100만 원까지 즉시 대출이 가능하며, 교육 이수 시 금리를 9%대까지 낮출 수 있습니다. 카드깡 수수료 30%에 비하면 훨씬 합리적인 선택입니다.
      </p>

      <div class="p-8 bg-blue-50 rounded-3xl mt-12 border border-blue-100">
        <h4 class="font-bold text-slate-900 mb-4">💡 에디터의 조언</h4>
        <p class="text-sm text-slate-600 leading-relaxed">
          '당장 오늘 갚아야 할 돈' 때문에 불법 업체를 찾지 마세요. <strong>채무조정 제도(신용회복위원회)</strong>를 활용하면 이자 감면과 상환 기간 연장이라는 합법적인 도움을 받을 수 있습니다. 더 자세한 내용은 <a href="/#/loan-guide" class="text-blue-600 font-bold">대출·신용 가이드</a>에서 확인하세요.
        </p>
      </div>
    `
  },
  {
    id: '3',
    slug: 'stock-investment-portfolio',
    category: Category.INVESTMENT,
    title: '주식 투자 입문 가이드: 잃지 않는 포트폴리오 구성 전략',
    summary: '주식 투자를 처음 시작하는 분들을 위해 포트폴리오의 개념과 리스크를 낮추는 분산 투자 전략을 알기 쉽게 설명합니다.',
    imageUrl: 'https://images.unsplash.com/photo-1611974714024-463ef9c7416b?q=80&w=1200&auto=format&fit=crop',
    date: '2023-10-22',
    author: '투자 분석가',
    tags: ['주식투자 입문', '포트폴리오 구성', '분산투자 전략', '주식 기초', '자산배분'],
    content: `
      <p class="mb-8 text-xl leading-relaxed font-bold text-slate-800 break-keep">
        "주식 투자는 도박이다"라고 말하는 사람들의 공통점은 공부 없이 '운'에 맡기는 투자를 했다는 것입니다. 주식은 기업의 소유권을 나누어 갖는 숭고한 자본주의 시스템입니다.
      </p>

      <h2 class="text-2xl md:text-3xl font-black text-slate-900 mt-16 mb-8 tracking-tight">1. 자산 배분의 기본: 분산 투자</h2>
      <p class="mb-6 leading-8 text-slate-700">
        "계란을 한 바구니에 담지 마라"는 격언은 주식 투자에서도 여전히 유효합니다. 한 기업에만 몰빵 투자하면 그 기업이 무너질 때 내 자산도 무너집니다. 업종별, 국가별, 그리고 자산군(주식, 채권, 현금)별로 나누어 투자하는 것이 포트폴리오 구성의 핵심입니다.
      </p>

      <h2 class="text-2xl md:text-3xl font-black text-slate-900 mt-16 mb-8 tracking-tight">2. 초보자에게 가장 강력한 무기: 지수 추종 ETF</h2>
      <p class="mb-6 leading-8 text-slate-700">
        어떤 주식을 살지 고르는 것이 어렵다면 시장 전체를 사세요. 미국의 <strong>S&P500</strong>이나 <strong>나스닥100</strong> 지수를 추종하는 ETF는 수십 년간 우상향해 왔습니다. 개별 주식은 망할 수 있지만, 한 나라의 시장이 망하기는 어렵습니다.
      </p>

      <h3 class="text-xl md:text-2xl font-black text-slate-800 mb-4 flex items-center gap-2">
        <span class="w-1.5 h-6 bg-red-600 rounded-full inline-block"></span> 
        복리의 마법을 누리는 적립식 매수
      </h3>
      <p class="mb-6 leading-8 text-slate-700">
        주가는 매일 요동치지만, 매달 일정한 금액을 꾸준히 사는 '적립식 투자(DCA)'는 평균 매수 단가를 낮추는 효과가 있습니다. 시간이 흐를수록 이자가 이자를 낳는 복리의 마법은 당신의 자산을 기하급수적으로 불려줄 것입니다. 더 체계적인 돈 관리법은 <a href="/#/finance-guide" class="text-red-600 font-bold">금융 기초 가이드</a>를 참고하세요.
      </p>
    `
  }
];