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
    id: '101',
    slug: 'bank-account-splitting-mastery',
    category: Category.FINANCE,
    title: '통장 쪼개기의 정석: 의지력이 아닌 시스템으로 모으는 법',
    summary: '매달 월급날만 지나면 잔고가 바닥나나요? 저축에 실패하는 이유는 당신의 의지력이 부족해서가 아니라 시스템이 없기 때문입니다. 돈이 자동으로 모이는 4단계 통장 쪼개기 전략을 공개합니다.',
    imageUrl: 'https://images.unsplash.com/photo-1579621970795-87faff2f9050?q=80&w=1200&auto=format&fit=crop',
    date: '2024-03-29',
    author: '자산관리 전문가',
    tags: ['통장쪼개기', '돈관리시스템', '월급관리', '저축방법', '재테크기초', '자동저축'],
    content: `
      <p class="mb-8 text-xl leading-relaxed font-bold text-slate-800 break-keep">
        매달 "이번 달에는 꼭 100만 원 저축해야지"라고 다짐하지만, 정작 카드값이 빠져나간 뒤 남은 금액은 초라하기만 합니다. 왜 우리는 매번 저축에 실패할까요? 그것은 당신의 의지력이 약해서가 아닙니다. <strong>인간의 의지력은 한정된 자원</strong>이며, 유혹이 가득한 현대 사회에서 의지만으로 돈을 모으는 것은 불가능에 가깝기 때문입니다. 이제 의지가 아닌 <strong>'시스템'</strong>이 돈을 모으게 만들어야 합니다.
      </p>

      <h2 class="text-2xl md:text-3xl font-black text-slate-900 mt-16 mb-8 tracking-tight">1. 통장 쪼개기란 무엇인가: 심리적 회계의 활용</h2>
      <p class="mb-6 leading-8 text-slate-700">
        통장 쪼개기는 단순히 여러 개의 계좌를 만드는 행위가 아닙니다. 이는 행동경제학의 <strong>'심리적 회계(Mental Accounting)'</strong> 원리를 이용해 용도별로 돈에 이름을 붙여주는 작업입니다. 돈에 이름이 붙는 순간, 우리는 그 돈을 함부로 쓰지 못하게 됩니다. '생활비' 통장의 돈은 쉽게 쓰지만, '자녀 교육비'나 '노후 자금' 통장의 돈을 꺼내 쓰기는 심리적으로 매우 고통스럽기 때문입니다.
      </p>

      <h2 class="text-2xl md:text-3xl font-black text-slate-900 mt-16 mb-8 tracking-tight">2. 돈이 자동으로 흐르는 '4개 통장 시스템' 구축법</h2>
      <p class="mb-6 leading-8 text-slate-700">
        가장 효율적이고 검증된 시스템은 돈의 성격에 따라 4개의 통장으로 분리하는 것입니다.
      </p>

      <h3 class="text-xl md:text-2xl font-black text-slate-800 mb-4 flex items-center gap-2">
        ① 급여 통장 (수입의 입구)
      </h3>
      <p class="mb-6 leading-8 text-slate-700">
        월급이 들어오고 각종 고정 지출(보험료, 공과금, 대출 이자)이 빠져나가는 통장입니다. 매달 일정 금액만 남기고 모든 돈을 다른 통장으로 보내어 <strong>잔액을 0으로 만드는 것</strong>이 핵심입니다.
      </p>

      <h3 class="text-xl md:text-2xl font-black text-slate-800 mb-4 flex items-center gap-2">
        ② 투자 통장 (미래를 위한 엔진)
      </h3>
      <p class="mb-6 leading-8 text-slate-700">
        급여 통장에서 가장 먼저 돈이 이동해야 할 곳입니다. 적금, 펀드, 주식 투자용 자금을 이곳으로 보냅니다. <strong>"쓰고 남은 돈을 저축하는 것이 아니라, 저축하고 남은 돈을 쓰는 것"</strong>이라는 재테크 제1원칙을 실현하는 장치입니다.
      </p>

      <h3 class="text-xl md:text-2xl font-black text-slate-800 mb-4 flex items-center gap-2">
        ③ 소비 통장 (한도 내 지출의 통제)
      </h3>
      <p class="mb-6 leading-8 text-slate-700">
        순수하게 한 달 동안 먹고, 마시고, 즐기는 데 사용하는 돈입니다. 이 통장과 연결된 체크카드를 사용하면 잔고가 눈에 보이기 때문에 과소비를 실시간으로 억제할 수 있습니다. 한 달 예산이 바닥나면 그달의 소비는 종료됩니다.
      </p>

      <h3 class="text-xl md:text-2xl font-black text-slate-800 mb-4 flex items-center gap-2">
        ④ 예비 통장 (안전판)
      </h3>
      <p class="mb-6 leading-8 text-slate-700">
        경조사비, 갑작스러운 병원비 등 예측 불가능한 지출을 위한 통장입니다. 평소에는 비상금으로 보관하다가 소비 통장의 잔고가 부족할 때 긴급 수혈하는 용도입니다. 월 지출액의 3~5배 정도를 유지하는 것이 좋습니다.
      </p>

      <div class="bg-emerald-50 border-l-8 border-emerald-500 p-8 my-12 rounded-r-3xl">
        <h4 class="text-emerald-900 text-xl font-black mb-4 flex items-center gap-2">
          💡 시스템 구축 시 주의사항
        </h4>
        <ul class="list-disc pl-6 mb-4 space-y-2 text-slate-700 font-medium">
          <li><strong>자동이체 활용:</strong> 모든 자금 이동은 자동이체로 설정하여 '생각'할 틈을 주지 마세요.</li>
          <li><strong>신용카드 자제:</strong> 신용카드는 이 시스템의 가장 큰 적입니다. 가급적 소비 통장과 연결된 체크카드를 쓰세요.</li>
          <li><strong>정기적 점검:</strong> 6개월에 한 번씩 예산이 적절한지 복기하고 조정하십시오.</li>
        </ul>
      </div>

      <h2 class="text-2xl md:text-3xl font-black text-slate-900 mt-16 mb-8 tracking-tight">3. 통장 쪼개기가 가져다주는 진짜 변화</h2>
      <p class="mb-6 leading-8 text-slate-700">
        이 시스템이 안착되면 더 이상 돈 때문에 스트레스를 받지 않게 됩니다. 얼마를 써야 할지 고민할 필요가 없고, 저축은 시스템이 알아서 해주기 때문입니다. 남는 에너지를 수익률을 높이는 투자 공부나 본인의 능력을 키우는 데 집중할 수 있습니다.
      </p>

      <div class="p-10 bg-slate-900 text-white rounded-[3rem] mt-16 shadow-2xl relative overflow-hidden">
        <div class="absolute top-0 right-0 p-8 opacity-10">
          <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
        </div>
        <h4 class="text-emerald-400 font-black mb-6 text-2xl uppercase tracking-tighter">MoneyWise Summary</h4>
        <div class="space-y-4 text-slate-300 font-medium leading-relaxed">
          <p class="flex items-start gap-3"><span class="text-emerald-500 mt-1">●</span> <span>저축은 의지가 아니라 <strong>자동화된 시스템</strong>의 영역입니다.</span></p>
          <p class="flex items-start gap-3"><span class="text-emerald-500 mt-1">●</span> <span>급여, 투자, 소비, 예비 통장으로 나누어 <strong>돈의 흐름을 통제</strong>하세요.</span></p>
          <p class="flex items-start gap-3"><span class="text-emerald-500 mt-1">●</span> <span>시스템이 구축되었다면 다음 단계로 인플레이션 방어 전략을 확인해 보세요.</span></p>
        </div>
      </div>
    `
  },
  {
    id: '18',
    slug: 'inflation-cash-management-strategy',
    category: Category.FINANCE,
    title: '인플레이션 시대의 현금 관리: 내 돈의 가치를 지키는 방어 전략',
    summary: '물가는 오르는데 내 월급만 그대로라면? 가만히 놔두면 녹아내리는 현금의 가치를 지키기 위한 인플레이션 헤지 방법과 실전 자산 방어 전략을 공개합니다.',
    imageUrl: 'https://images.unsplash.com/photo-1574607383476-f517f260d30b?q=80&w=1200&auto=format&fit=crop',
    date: '2024-03-28',
    author: '거시경제 분석 에디터',
    tags: ['인플레이션', '현금가치', '자산방어', '금리', '실물자산', '재테크전략'],
    content: `
      <p class="mb-8 text-xl leading-relaxed font-bold text-slate-800 break-keep">
        어제와 똑같은 1만 원인데, 오늘 살 수 있는 사과의 개수가 줄어들었다면? 이것이 바로 <strong>인플레이션(Inflation)</strong>의 공포입니다. 물가가 오른다는 것은 반대로 내 지갑 속 <strong>현금의 가치가 하락</strong>한다는 의미입니다. 가만히 숨만 쉬어도 내 자산이 녹아내리는 시대, 우리는 어떻게 소중한 돈을 지켜내야 할까요?
      </p>

      <h2 class="text-2xl md:text-3xl font-black text-slate-900 mt-16 mb-8 tracking-tight">1. 인플레이션의 본질: 보이지 않는 세금</h2>
      <p class="mb-6 leading-8 text-slate-700">
        인플레이션은 정부가 걷지 않는 '가장 무서운 세금'이라 불립니다. 통화량이 늘어나 화폐 가치가 떨어지면, 현금을 보유한 사람은 손해를 보고 실물 자산을 가진 사람은 이득을 봅니다. 장기적으로 현금만 들고 있는 것은 가장 위험한 투자 전략이 될 수 있습니다. 우리는 이제 '저축'을 넘어 <strong>'자산 방어'</strong>의 개념으로 접근해야 합니다.
      </p>

      <h2 class="text-2xl md:text-3xl font-black text-slate-900 mt-16 mb-8 tracking-tight">2. 내 돈을 지키는 3가지 핵심 방어막</h2>
      <p class="mb-6 leading-8 text-slate-700">
        인플레이션을 이기기 위해서는 현금의 비중을 조절하고, 물가 상승률보다 높은 수익을 내는 자산으로 갈아타야 합니다.
      </p>

      <h3 class="text-xl md:text-2xl font-black text-slate-800 mb-4 flex items-center gap-2">
        ① 실물 자산으로의 전환 (Real Assets)
      </h3>
      <p class="mb-6 leading-8 text-slate-700">
        부동산, 금(Gold), 원자재와 같은 실물 자산은 인플레이션 시기에 화폐 가치 하락을 방어하는 대표적인 수단입니다. 특히 <strong>금</strong>은 인류 역사상 가장 신뢰받는 안전 자산으로, 통화량이 급증할 때 가치가 빛을 발합니다. 소액으로 시작하고 싶다면 금 ETF나 금 현물 계좌를 활용해 보세요.
      </p>

      <h3 class="text-xl md:text-2xl font-black text-slate-800 mb-4 flex items-center gap-2">
        ② 주식과 배당 (Equity & Dividends)
      </h3>
      <p class="mb-6 leading-8 text-slate-700">
        우량 기업은 물가 상승분을 제품 가격에 전가할 수 있는 '가격 결정력'을 가집니다. 기업의 이익이 늘어나면 주가가 오르고 배당금도 증가하므로, 인플레이션의 파도를 탈 수 있는 가장 강력한 엔진이 됩니다.
      </p>

      <h3 class="text-xl md:text-2xl font-black text-slate-800 mb-4 flex items-center gap-2">
        ③ 고금리 파킹 통장 활용 (High-Yield Cash)
      </h3>
      <p class="mb-6 leading-8 text-slate-700">
        모든 돈을 투자할 수는 없습니다. 비상금이나 단기 자금은 금리 인상기에 발맞춰 빠르게 이율을 올려주는 <strong>파킹 통장</strong>이나 발행어음 등에 보관하여 현금의 '노는 시간'을 최소화해야 합니다.
      </p>
    `
  },
  {
    id: '103',
    slug: 'magic-of-compound-interest-practical',
    category: Category.INVESTMENT,
    title: '복리의 마법 실전편: 당신의 돈이 스스로 일하게 만드는 시간의 기술',
    summary: '아인슈타인이 "세계 8대 불가사의"라고 칭송한 복리, 단순 이론을 넘어 실전에서 자산을 폭발적으로 불리는 전략을 공개합니다. 72의 법칙부터 마이너스 복리의 함정까지 마스터하세요.',
    imageUrl: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=1200&auto=format&fit=crop',
    date: '2024-03-30',
    author: '투자 전략가',
    tags: ['복리 투자', '장기 투자 전략', '자산 증식 방법', '72의 법칙', '배당 재투자'],
    content: `
      <p class="mb-8 text-xl leading-relaxed font-bold text-slate-800 break-keep">
        단순히 저축을 넘어 <strong>'복리 투자'</strong>의 원리를 깨닫는 것은 경제적 자유로 가는 가장 빠른 지름길입니다. 하지만 많은 이들이 복리를 '천천히 느리게'만 인식하여 중도에 포기하곤 합니다. 이 글을 끝까지 읽으시면 <strong>장기 투자 전략</strong>의 핵심인 복리가 어떻게 당신의 자산을 기하급수적으로 불리는지, 그리고 실전에서 이를 방해하는 요소들을 어떻게 제거해야 하는지 명확히 깨닫게 될 것입니다.
      </p>

      <h2 class="text-2xl md:text-3xl font-black text-slate-900 mt-16 mb-8 tracking-tight">1. 복리의 핵심 원리와 눈덩이 효과(Snowball Effect)</h2>
      <p class="mb-6 leading-8 text-slate-700">
        복리는 산 정상에서 작은 눈덩이를 굴리는 것과 같습니다. 처음에는 아주 천천히 커지는 것 같아 지루함마저 느껴집니다. 하지만 눈덩이가 일정 크기인 <strong>'임계점'</strong>을 넘어서는 순간, 한 바퀴 구를 때마다 붙는 눈의 양은 이전과는 비교할 수 없을 정도로 커집니다. 
      </p>
      <p class="mb-6 leading-8 text-slate-700 italic">
        "복리는 세계 8대 불가사리다. 이를 이해하는 자는 돈을 벌고, 이해하지 못하는 자는 남에게 돈을 지불하게 된다." - 알베르트 아인슈타인
      </p>

      <h2 class="text-2xl md:text-3xl font-black text-slate-900 mt-16 mb-8 tracking-tight">2. 자산을 두 배로 만드는 마법의 공식: 72의 법칙</h2>
      <p class="mb-6 leading-8 text-slate-700">
        내 자산이 원금의 두 배가 되는 시간을 계산하는 가장 쉬운 방법은 <strong>'72의 법칙'</strong>을 활용하는 것입니다. 숫자 72를 연평균 수익률로 나누면 원금이 두 배가 되는 예상 시점이 도출됩니다.
      </p>
      <div class="grid sm:grid-cols-2 gap-4 mb-8">
        <div class="p-6 bg-slate-50 rounded-2xl border border-slate-100">
          <p class="text-sm text-slate-500 font-bold mb-1">연 수익률 6% 달성 시</p>
          <p class="text-2xl font-black text-slate-900">72 ÷ 6 = <span class="text-blue-600">12년</span></p>
        </div>
        <div class="p-6 bg-slate-50 rounded-2xl border border-slate-100">
          <p class="text-sm text-slate-500 font-bold mb-1">연 수익률 12% 달성 시</p>
          <p class="text-2xl font-black text-slate-900">72 ÷ 12 = <span class="text-red-600">6년</span></p>
        </div>
      </div>
      <p class="mb-6 leading-8 text-slate-700">
        여기서 깨달아야 할 점은 1%의 수익률 차이가 20~30년 뒤에는 수억 원의 자산 차이를 만든다는 것입니다. 하지만 그보다 더 중요한 것은 <strong>'언제 시작하느냐'</strong>입니다. 1년이라도 먼저 시작한 투자가 훗날 압도적인 수익을 안겨줍니다.
      </p>

      <h2 class="text-2xl md:text-3xl font-black text-slate-900 mt-16 mb-8 tracking-tight">3. 실전 투자에서 복리 효과를 극대화하는 3대 전략</h2>
      
      <h3 class="text-xl md:text-2xl font-black text-slate-800 mb-4 flex items-center gap-2">
        ① 배당금과 이자의 즉시 재투자 (기하급수적 성장의 연료)
      </h3>
      <p class="mb-6 leading-8 text-slate-700">
        복리의 엔진은 '재투자'입니다. 주식에서 나오는 배당금이나 예적금 이자를 생활비로 소비하는 순간, 복리 열차는 그 즉시 멈춥니다. <strong>배당 재투자(DRIP)</strong> 시스템을 구축하여 이자가 다시 이자를 낳는 구조를 만드세요. 이를 어길 경우, 장기적으로 자산 성장 속도는 단리 수준에 머물게 됩니다.
      </p>

      <h3 class="text-xl md:text-2xl font-black text-slate-800 mb-4 flex items-center gap-2">
        ② 중간 인출의 유혹을 견디는 인내심 (뿌리 뽑기 방지)
      </h3>
      <p class="mb-6 leading-8 text-slate-700">
        복리 그래프는 후반부에 수직 상승합니다. 하지만 많은 이들이 5~7년 차에 '이 정도면 많이 벌었지'라며 중간에 인출합니다. 이는 10년을 키워야 열매를 맺는 나무의 뿌리를 5년 차에 뽑아버리는 것과 같습니다. 갑작스러운 지출은 반드시 별도의 <a href="/article/bank-account-splitting-mastery" class="text-emerald-600 font-bold">비상금 통장</a>에서 해결하여 투자금의 연속성을 지켜야 합니다.
      </p>

      <h3 class="text-xl md:text-2xl font-black text-slate-800 mb-4 flex items-center gap-2">
        ③ 수수료와 세금이라는 '복리의 적' 관리하기
      </h3>
      <p class="mb-6 leading-8 text-slate-700">
        연 1~2%의 운용 수수료나 매년 내는 배당 소득세는 복리 효과를 갉아먹는 가장 무서운 암세포입니다. 누적되면 전체 자산의 20~30%가 세금과 수수료로 사라집니다. ISA나 IRP 같은 절세 계좌를 활용해 <strong>과세 이연</strong> 혜택을 누리는 것이 실전 투자의 필수 덕목입니다.
      </p>

      <h2 class="text-2xl md:text-3xl font-black text-slate-900 mt-16 mb-8 tracking-tight">4. 성공을 방해하는 가장 무서운 적: 마이너스 복리의 함정</h2>
      <p class="mb-6 leading-8 text-slate-700">
        복리는 양날의 검입니다. 거꾸로 작동하면 당신을 가난의 나락으로 떨어뜨립니다. 대표적인 예가 <strong>신용카드 리볼빙</strong>과 <strong>고금리 신용대출</strong>입니다. 리볼빙은 갚지 못한 잔액에 다시 높은 이자가 붙으며 부채가 기하급수적으로 늘어나는 '악마의 복리' 구조를 가집니다.
      </p>
      <div class="bg-red-50 border-l-8 border-red-500 p-8 my-12 rounded-r-3xl">
        <h4 class="text-red-900 text-xl font-black mb-4 flex items-center gap-2">
          ⚠️ 가난해지는 시스템을 먼저 차단하세요
        </h4>
        <ul class="list-disc pl-6 space-y-2 text-slate-700 font-medium">
          <li><strong>리볼빙 금지:</strong> 연 15% 이상의 이자는 복리 수익률 15%를 내는 고수와 정반대로 행동하는 것입니다.</li>
          <li><strong>잦은 손절매 자제:</strong> 투자 원금이 깎이면(Drawdown), 이를 복구하기 위해 훨씬 더 높은 수익률이 필요합니다. (-50% 손실 시 +100% 수익 필요)</li>
        </ul>
      </div>

      <div class="p-10 bg-slate-900 text-white rounded-[3rem] mt-16 shadow-2xl relative overflow-hidden">
        <div class="absolute top-0 right-0 p-8 opacity-10">
          <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19l7-7-7-7"></path><path d="M5 19l7-7-7-7"></path></svg>
        </div>
        <h4 class="text-red-400 font-black mb-8 text-2xl uppercase tracking-tighter">실전 복리 마스터 요약</h4>
        
        <div class="grid md:grid-cols-2 gap-8">
          <div>
            <h5 class="text-emerald-400 font-bold mb-4 flex items-center gap-2">지금 당장 실천할 것 ✅</h5>
            <ul class="space-y-3 text-sm text-slate-300 font-medium">
              <li class="flex gap-2"><span>1.</span> <span>ISA 등 절세 계좌 개설로 세금 누수 막기</span></li>
              <li class="flex gap-2"><span>2.</span> <span>배당금을 자동으로 재투자하는 시스템 설정</span></li>
              <li class="flex gap-2"><span>3.</span> <span>월 지출의 3배 이상 비상금 확보(투자금 방어용)</span></li>
            </ul>
          </div>
          <div>
            <h5 class="text-red-400 font-bold mb-4 flex items-center gap-2">절대 하지 말아야 할 것 ❌</h5>
            <ul class="space-y-3 text-sm text-slate-300 font-medium">
              <li class="flex gap-2"><span>1.</span> <span>신용카드 리볼빙 및 고금리 대출 방치</span></li>
              <li class="flex gap-2"><span>2.</span> <span>확인되지 않은 급등주에 몰빵(원금 손실 위험)</span></li>
              <li class="flex gap-2"><span>3.</span> <span>수익률 조금 났다고 원금까지 다 빼서 소비하기</span></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="mt-16 border-t border-slate-200 pt-12">
        <p class="text-slate-500 mb-6 font-medium">복리의 강력한 힘을 이해했다면, 이제 안전하게 시드머니를 모으는 시스템을 확인해 보세요.</p>
        <div class="grid sm:grid-cols-2 gap-6">
          <a href="/article/bank-account-splitting-mastery" class="group p-8 bg-white rounded-3xl border border-slate-100 hover:border-emerald-600 transition-all shadow-soft flex flex-col items-center text-center">
            <div class="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
            </div>
            <p class="font-black text-slate-900 mb-1 group-hover:text-emerald-600">투자금 확보의 기초, 통장 쪼개기 시스템 →</p>
          </a>
          <a href="/#/investment-guide" class="group p-8 bg-white rounded-3xl border border-slate-100 hover:border-blue-600 transition-all shadow-soft flex flex-col items-center text-center">
            <div class="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg>
            </div>
            <p class="font-black text-slate-900 mb-1 group-hover:text-blue-600">안전한 자산 배분을 위한 투자 가이드 →</p>
          </a>
        </div>
      </div>
    `
  }
];