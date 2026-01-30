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
    imageUrl: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1200&auto=format&fit=crop',
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
    imageUrl: 'https://images.unsplash.com/photo-1535320903710-d993d3d77d29?q=80&w=1200&auto=format&fit=crop',
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