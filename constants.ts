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
    id: '1',
    slug: 'emergency-loan-guide',
    category: Category.LOAN,
    title: '소액 비상금 대출 완벽 가이드: 급전 마련의 구조와 안전한 활용법',
    summary: '갑작스러운 유동성 위기 시, 신용점수 하락을 최소화하며 안전하게 자금을 융통하는 1금융권 소액 대출의 메커니즘과 주의사항을 심층 분석합니다.',
    imageUrl: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1200&auto=format&fit=crop',
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
        대부분의 1금융권 비상금 대출은 <strong>서울보증보험</strong>과 연계되어 있습니다. 은행은 고객의 소득을 보는 대신, 보증보험사가 발행한 '보증서'를 담보로 대출을 실행합니다. 즉, 보험사가 신청자의 신용도를 심사하여 "이 사람은 300만 원 정도는 충분히 갚을 수 있다"고 은행에 보증을 서주는 구조입니다.
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

      <h2 class="text-2xl md:text-3xl font-black text-slate-900 mt-16 mb-8 tracking-tight">4. 신용도 관리와 대출 실행 시 주의사항</h2>
      <p class="mb-6 leading-8 text-slate-700">
        많은 분이 "대출을 받으면 무조건 신용점수가 떨어진다"고 걱정합니다. 하지만 이는 대출의 종류에 따라 다릅니다.
      </p>

      <h3 class="text-xl md:text-2xl font-black text-slate-800 mb-4 flex items-center gap-2">
        <span class="w-1.5 h-6 bg-blue-600 rounded-full inline-block"></span> 
        1금융권 대출이 신용점수에 미치는 영향
      </h3>
      <p class="mb-6 leading-8 text-slate-700">
        카카오뱅크, 토스뱅크 등 1금융권의 비상금 대출을 이용하면 신용점수 하락폭이 매우 미미합니다. 오히려 연체 없이 꾸준히 상환하는 이력은 추후 신용 평가에서 긍정적인 요소로 작용할 수도 있습니다.
      </p>

      <div class="p-10 bg-slate-900 text-white rounded-[3rem] mt-16 shadow-2xl relative overflow-hidden">
        <div class="absolute top-0 right-0 p-8 opacity-10">
          <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
        </div>
        <h4 class="text-blue-400 font-black mb-6 text-2xl uppercase tracking-tighter">SEO Final Summary (30초 요약)</h4>
        <div class="space-y-4 text-slate-300 font-medium">
          <p class="flex items-start gap-3"><span class="text-blue-500 mt-1">●</span> <span>소액 비상금 대출은 <strong>서울보증보험 보증서</strong>를 기반으로 소득 없이도 실행 가능합니다.</span></p>
          <p class="flex items-start gap-3"><span class="text-blue-500 mt-1">●</span> <span><strong>마이너스 통장 방식</strong>을 선택하여 이자 비용을 일 단위로 최소화하는 것이 가장 똑똑한 활용법입니다.</span></p>
          <p class="flex items-start gap-3"><span class="text-blue-500 mt-1">●</span> <span>반드시 <strong>1금융권 상품</strong>을 먼저 확인하여 신용점수 타격을 방어해야 합니다.</span></p>
          <p class="flex items-start gap-3"><span class="text-blue-500 mt-1">●</span> <span>대출 전 본인의 <a href="/#/loan-guide" class="text-blue-400 underline font-bold">상환 능력과 DSR 한도</a>를 반드시 자가 점검하세요.</span></p>
        </div>
      </div>

      <div class="grid sm:grid-cols-2 gap-6 mt-16">
        <a href="/#/loan-guide" class="group p-8 bg-white rounded-3xl border border-slate-100 hover:border-blue-600 transition-all shadow-soft flex flex-col items-center text-center">
          <div class="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
          </div>
          <p class="font-black text-slate-900 mb-1 group-hover:text-blue-600">대출·신용 가이드 →</p>
          <p class="text-xs text-slate-500">안전한 금융 생활의 첫걸음</p>
        </a>
        <a href="/#/finance-guide" class="group p-8 bg-white rounded-3xl border border-slate-100 hover:border-emerald-600 transition-all shadow-soft flex flex-col items-center text-center">
          <div class="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
          </div>
          <p class="font-black text-slate-900 mb-1 group-hover:text-emerald-600">금융 기초 시스템 구축 →</p>
          <p class="text-xs text-slate-500">돈이 모이는 구조를 만드세요</p>
        </a>
      </div>
    `
  },
  {
    id: '14',
    slug: 'credit-card-cash-out-risk-alternatives',
    category: Category.LOAN,
    title: '신용카드 소액결제 및 현금화의 늪: 30% 수수료를 아끼는 합법적 대출 대안',
    summary: '급전이 필요해 신용카드 현금화나 소액결제를 고민 중이신가요? 겉보기엔 편리하지만 실제로는 연 300% 이상의 살인적인 금리를 부담하는 것과 같습니다. 안전하게 자금을 융통할 수 있는 정부 지원 소액 대출과 1금융권 비상금 대출의 실체를 공개합니다.',
    imageUrl: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1200&auto=format&fit=crop',
    date: '2024-03-20',
    author: '금융 전략 에디터',
    tags: ['소액', '신용카드', '현금화', '대출', '비상금대출', '카드깡', '금융사기'],
    content: `<p>기존 내용 유지...</p>`
  },
  {
    id: '3',
    slug: 'stock-investment-portfolio',
    category: Category.INVESTMENT,
    title: '주식 투자 입문 가이드 – 포트폴리오 구성과 분산 투자 전략',
    summary: '주식 투자를 처음 시작하는 분들을 위해 포트폴리오의 개념과 리스크를 낮추는 분산 투자 전략을 알기 쉽게 설명합니다.',
    imageUrl: 'https://images.unsplash.com/photo-1535320903710-d993d3d77d29?q=80&w=1200&auto=format&fit=crop',
    date: '2023-10-22',
    author: '투자 분석가',
    tags: ['주식투자 입문', '포트폴리오 구성', '분산투자 전략', '주식 기초', '자산배분'],
    content: `...기존 내용 유지...`
  }
];