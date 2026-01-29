import { Article, Category, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: '홈', path: '/', inMenu: true },
  { label: '금융기초', path: '/finance-guide', inMenu: true }, // Merged Finance & Life Hacks concept
  { label: '대출·신용', path: '/loan-guide', inMenu: true }, // Merged Loan & Credit Card concept
  { label: '신용카드', path: '/credit-card-guide', inMenu: false }, // Hidden from main nav, accessed via Loan Guide
  { label: '주식·투자', path: '/investment-guide', inMenu: true },
  { label: '복지정책', path: '/welfare-guide', inMenu: true },
  { label: '생활꿀팁', path: '/life-hacks-guide', inMenu: false }, // Hidden from main nav, accessed via Finance Guide
  { label: '전체글', path: '/blog', inMenu: true }, 
  // The following items are hidden from the menu but used for routing/categorization
  { label: '금융/재테크', path: '/finance', category: Category.FINANCE, inMenu: false },
  { label: '대출꿀팁', path: '/loan', category: Category.LOAN, inMenu: false },
  { label: '투자/주식', path: '/investment', category: Category.INVESTMENT, inMenu: false },
  { label: '복지/정책', path: '/welfare', category: Category.WELFARE, inMenu: false },
  { label: '생활꿀팁', path: '/life', category: Category.LIFE, inMenu: false },
];

export const INITIAL_ARTICLES: Article[] = [
  {
    id: '10',
    category: Category.FINANCE,
    title: '돈이 새는 구조부터 막아라: 대부분이 평생 반복하는 잘못된 금융 선택',
    summary: '소득이 늘어도 돈이 모이지 않는다면? 문제는 버는 돈이 아니라 새는 돈에 있습니다. 당신의 재정을 위협하는 6가지 구조적 누수를 점검하고, 탄탄한 현금 흐름을 만드는 법을 공개합니다.',
    imageUrl: 'https://picsum.photos/seed/money_leak/800/600',
    date: '2023-11-15',
    author: '금융 에디터',
    tags: ['재테크', '지출관리', '신용카드', '현금흐름', '돈관리', '대출'],
    content: `
      <p class="mb-6 text-lg leading-relaxed">많은 사람들이 "월급이 조금만 더 오르면 돈 걱정이 없을 텐데"라고 말합니다. 하지만 현실은 냉정합니다. 연봉이 3천만 원일 때 돈이 부족했던 사람은 연봉이 6천만 원이 되어도 여전히 돈이 부족합니다. 이는 <strong>수입(Income)</strong>의 문제가 아니라 돈을 관리하는 <strong>구조(Structure)</strong>의 문제이기 때문입니다.</p>
      <p class="mb-6 text-lg leading-relaxed">재테크의 기본은 '밑 빠진 독에 물 붓기'를 멈추는 것에서 시작합니다. 아무리 좋은 투자 정보를 알고 있어도, 일상에서 돈이 줄줄 새고 있다면 자산은 절대 쌓이지 않습니다. 본 글에서는 대부분의 사람들이 무심코 반복하는 <strong>잘못된 금융 선택</strong> 6가지를 진단하고, 이를 바로잡는 구조적 해결책을 제시합니다.</p>

      <div class="bg-slate-50 border-l-4 border-slate-900 p-6 mb-10 rounded-r-xl">
        <strong class="block text-slate-900 text-lg mb-2">💡 이 글의 핵심 포인트</strong>
        <ul class="list-disc list-inside space-y-1 text-slate-700">
          <li>소액이라 무시했던 소비가 만드는 거대한 누수</li>
          <li>신용카드가 당신의 미래 소득을 훔쳐가는 방식</li>
          <li>대출을 '자산'이 아닌 '소비'로 사용할 때의 위험</li>
          <li>준비 없는 투자가 오히려 독이 되는 이유</li>
        </ul>
      </div>

      <h3 class="text-2xl font-bold text-slate-900 mt-12 mb-4">1. 무심코 반복되는 소비 습관: '라떼 효과'의 진실</h3>
      <p class="mb-6 leading-relaxed">돈이 새는 첫 번째 구멍은 '이 정도는 괜찮겠지'라는 안일함입니다. 매일 마시는 커피, 택시비, 무심코 결제한 OTT 구독료 등 <strong>소액 지출</strong>이 모이면 무시할 수 없는 금액이 됩니다. 이를 재테크 용어로 '라떼 효과(Latte Factor)'라고 합니다.</p>
      <div class="mb-6">
        <p class="text-slate-700 font-medium mb-2">⚠️ 왜 문제가 되는가?</p>
        <p class="text-slate-600">이런 지출은 가계부에 기록되지 않거나 무시되기 쉽습니다. 하지만 월 30만 원의 누수는 연간 360만 원의 <strong>현금 흐름</strong>을 막는 것과 같습니다. 이는 종잣돈(Seed Money) 형성을 방해하는 가장 큰 적입니다.</p>
      </div>

      <h3 class="text-2xl font-bold text-slate-900 mt-12 mb-4">2. 생활비 구조의 부재: 통장을 섞어 쓰는 실수</h3>
      <p class="mb-6 leading-relaxed">많은 분들이 급여가 들어오면 카드 값과 공과금이 빠져나가고, 남은 돈으로 생활하다가 부족하면 다시 카드를 씁니다. 이는 <strong>생활비 관리</strong> 시스템이 없다는 증거입니다. 고정비와 변동비가 한 통장에서 섞이면, 내가 한 달에 얼마를 쓰고 얼마를 저축할 수 있는지 파악할 수 없습니다.</p>
      <div class="bg-slate-50 p-6 rounded-xl border border-slate-200 mb-6">
        <strong class="block text-slate-900 mb-2">흔한 오해</strong>
        <p class="text-slate-600">"아껴 쓰면 남는다"고 생각하지만, 예산(Budget)이 정해지지 않은 절약은 실패할 확률이 높습니다. '선저축 후지출' 시스템을 위해 <strong>통장 쪼개기</strong>를 실천해야 합니다.</p>
      </div>

      <h3 class="text-2xl font-bold text-slate-900 mt-12 mb-4">3. 신용카드(Credit Card): 미래의 나에게 빚지기</h3>
      <p class="mb-6 leading-relaxed"><strong>신용카드</strong>는 편리하지만, 할부와 리볼빙이라는 달콤한 유혹을 숨기고 있습니다. "이번 달은 힘들지만 다음 달의 내가 갚겠지"라는 생각으로 긁는 순간, 당신의 미래 소득은 저당 잡히게 됩니다.</p>
      <p class="mb-6 leading-relaxed">특히 할부가 누적되면 매달 갚아야 할 돈이 늘어나, 정작 저축이나 투자를 할 여력은 사라집니다. 포인트 적립 혜택보다 무서운 것이 과소비 습관입니다. 금융 질서가 잡히지 않았다면 과감하게 <strong>체크카드</strong>로 돌아가야 합니다.</p>

      <h3 class="text-2xl font-bold text-slate-900 mt-12 mb-4">4. 대출(Loan)과 신용점수: 쉬운 돈의 함정</h3>
      <p class="mb-6 leading-relaxed">자산 증식을 위한 레버리지가 아닌, 단순 소비를 위한 <strong>대출</strong>은 재정을 가장 빠르게 무너뜨립니다. 특히 모바일로 쉽게 받을 수 있는 소액 비상금 대출이나 카드론을 '내 돈'처럼 쓰다 보면, 이자 부담이 눈덩이처럼 불어납니다.</p>
      <div class="mb-6">
        <p class="text-slate-700 font-medium mb-2">⚠️ 결정적 실수</p>
        <p class="text-slate-600">잦은 대출 실행은 <strong>신용점수</strong> 하락으로 이어집니다. 신용점수가 떨어지면 나중에 전세자금 대출이나 주택 담보 대출처럼 정말 중요한 순간에 금융권의 도움을 받지 못하거나, 고금리를 부담해야 하는 페널티를 받게 됩니다.</p>
      </div>

      <h3 class="text-2xl font-bold text-slate-900 mt-12 mb-4">5. 준비 없는 소액 투자(Investment): 조급함이 부르는 손실</h3>
      <p class="mb-6 leading-relaxed">"월급만으로는 안 돼"라는 불안감에 준비 없이 <strong>투자</strong> 시장에 뛰어드는 것도 돈이 새는 구조입니다. 비상금도 없이 생활비를 쪼개 주식이나 코인에 넣었다가, 돈이 필요해지면 손해를 보고 파는 패턴을 반복합니다.</p>
      <p class="mb-6 leading-relaxed">투자는 여유 자금으로 장기적인 관점에서 해야 합니다. <strong>소액</strong>이라도 원칙 없이 '단타'나 '테마주'를 쫓는 것은 투자가 아니라 도박에 가깝습니다. 이는 자산을 불리는 것이 아니라 까먹는 행위입니다.</p>

      <h3 class="text-2xl font-bold text-slate-900 mt-12 mb-4">6. 복지(Welfare) 정보의 부재: 찾지 않는 권리</h3>
      <p class="mb-6 leading-relaxed">마지막으로 간과하기 쉬운 누수는 '받을 수 있는 돈'을 놓치는 것입니다. 정부는 청년, 근로자, 서민을 위한 다양한 <strong>금융 복지 정책</strong>(청년도약계좌, 근로장려금, 저금리 대환 대출 등)을 운영합니다. 정보를 몰라서 신청하지 않는 것은 명백한 손해입니다. 세금을 내는 만큼 혜택을 챙기는 것도 중요한 재테크 능력입니다.</p>

      <hr class="border-slate-200 my-10" />

      <h3 class="text-2xl font-bold text-slate-900 mt-8 mb-4">결론: 문제는 능력이 아니라 구조입니다</h3>
      <p class="mb-4 leading-relaxed">지금까지 돈이 모이지 않았던 것은 당신의 능력이 부족해서가 아닙니다. 돈이 들어오고 나가는 시스템을 점검하지 않았기 때문입니다. 오늘부터 당장 카드 명세서를 확인하고, 불필요한 구독을 해지하고, 통장을 나누십시오.</p>
      <p class="mb-4 leading-relaxed text-slate-600">
        구멍 난 독을 막는 구체적인 방법이 궁금하다면, 다음 단계로 <strong>[생활비 관리 가이드]</strong>나 <strong>[신용점수 올리는 법]</strong>을 참고하여 튼튼한 금융 성벽을 쌓으시기 바랍니다.
      </p>
    `
  },
  {
    id: '9',
    category: Category.FINANCE,
    title: '개인 금융이 무너지는 순간들: 대부분이 놓치는 돈 관리의 결정적 지점',
    summary: '열심히 버는데 왜 돈이 모이지 않을까요? 금융 위기는 소득 부족이 아닌 구조적 결함에서 시작됩니다. 당신의 돈 관리가 무너지는 5가지 결정적 순간을 진단합니다.',
    imageUrl: 'https://picsum.photos/seed/finance_collapse/800/600',
    date: '2023-11-10',
    author: '금융 에디터',
    tags: ['금융', '재테크', '신용점수', '대출', '현금흐름', '리스크관리'],
    content: `
      <p class="mb-6 text-lg leading-relaxed">"돈을 더 많이 벌면 모든 문제가 해결될 거야." 많은 사람들이 이렇게 믿습니다. 하지만 연봉이 1억 원이 넘는데도 마이너스 통장을 전전하는 사람들이 의외로 많습니다. 반대로 평범한 월급으로도 착실하게 자산을 불려 나가는 사람들도 있습니다.</p>
      <p class="mb-6 text-lg leading-relaxed">이 차이는 <strong>금융 구조</strong>에서 옵니다. 재테크가 실패하거나 개인 파산에 이르는 과정은 갑작스러운 사고보다는, 우리가 무심코 지나친 <strong>잘못된 돈 관리의 결정적 지점</strong>들이 누적된 결과입니다. 이 글에서는 당신의 금융 생활을 위협하는 구조적 문제들을 진단하고, 이를 바로잡기 위한 핵심 기준을 제시합니다.</p>

      <div class="bg-red-50 border-l-4 border-red-500 p-6 mb-10 rounded-r-xl">
        <strong class="block text-red-900 text-lg mb-2">🚨 금융이 무너지는 5가지 신호</strong>
        <ul class="list-disc list-inside space-y-1 text-red-800/80">
          <li>수입은 늘었는데 저축액은 그대로일 때</li>
          <li>신용카드 대금을 갚느라 월급의 50% 이상이 사라질 때</li>
          <li>대출 이자가 생활비를 잠식하기 시작할 때</li>
          <li>공부 없이 '카더라' 정보로 소액 투자를 반복할 때</li>
          <li>내가 받을 수 있는 정부 지원금을 전혀 모를 때</li>
        </ul>
      </div>

      <h3 class="text-2xl font-bold text-slate-900 mt-12 mb-4">1. 수입(Income)에만 매몰된 사고의 함정</h3>
      <p class="mb-6 leading-relaxed">돈 관리가 무너지는 첫 번째 지점은 '얼마를 버느냐'에만 집착할 때 발생합니다. 많은 사람들이 소득이 늘어나면 소비 수준도 똑같이 높여버립니다. 이를 <strong>생활 수준의 인플레이션</strong>이라고 합니다.</p>
      <div class="mb-6">
        <p class="text-slate-700 font-medium mb-2">⚠️ 왜 문제가 되는가?</p>
        <p class="text-slate-600">소득이 끊기거나 줄어드는 순간, 높아진 고정 지출을 감당하지 못해 순식간에 <strong>유동성 위기</strong>에 빠지기 때문입니다. 중요한 것은 소득의 크기가 아니라, 들어온 돈이 잉여 자금으로 남는 <strong>현금 흐름(Cash Flow)</strong>의 건전성입니다.</p>
      </div>

      <h3 class="text-2xl font-bold text-slate-900 mt-12 mb-4">2. 지출(Expenses) 구조의 구멍: 생활비 관리의 부재</h3>
      <p class="mb-6 leading-relaxed">"어디에 썼는지 모르겠는데 돈이 없다"는 말은 금융 구조가 무너졌다는 가장 확실한 증거입니다. <strong>생활비 관리</strong>의 핵심은 지출을 통제 가능한 영역(변동비)과 불가능한 영역(고정비)으로 나누는 것입니다.</p>
      <div class="bg-slate-50 p-6 rounded-xl border border-slate-200 mb-6">
        <strong class="block text-slate-900 mb-2">흔한 오해</strong>
        <p class="text-slate-600">"가계부를 쓰면 돈이 모인다"고 생각하지만, 단순히 기록만 하는 것은 의미가 없습니다. 예산을 세우고 그 안에서 소비를 강제하는 <strong>시스템(예: 통장 쪼개기)</strong>이 없으면 지출은 절대 줄어들지 않습니다.</p>
      </div>

      <h3 class="text-2xl font-bold text-slate-900 mt-12 mb-4">3. 신용카드(Credit Card): 편의성이 독이 되는 순간</h3>
      <p class="mb-6 leading-relaxed"><strong>신용카드</strong>는 편리한 결제 수단이지만, 본질적으로는 '미래의 소득을 당겨 쓰는 빚'입니다. 카드가 위험해지는 순간은 '할부'와 '리볼빙'이 일상화될 때입니다.</p>
      <p class="mb-6 leading-relaxed">이번 달 월급으로 지난달의 소비를 메우는 구조가 고착화되면, 미래를 위한 저축이나 투자는 불가능해집니다. 특히 포인트 적립을 핑계로 불필요한 소비를 하거나, <strong>현금화</strong>를 위해 불법적인 경로(카드깡)를 이용하는 것은 금융 생명을 끊는 행위임을 명심해야 합니다.</p>

      <h3 class="text-2xl font-bold text-slate-900 mt-12 mb-4">4. 대출(Loan)과 신용점수: 레버리지와 빚의 경계</h3>
      <p class="mb-6 leading-relaxed">자본주의에서 <strong>대출</strong>은 자산 증식을 위한 레버리지(지렛대)가 될 수 있습니다. 하지만 이는 '투자 수익률이 대출 이자보다 확실히 높을 때'만 성립합니다.</p>
      <div class="mb-6">
        <p class="text-slate-700 font-medium mb-2">⚠️ 결정적 실수</p>
        <p class="text-slate-600">단순 소비(여행, 명품, 유흥)를 위해 <strong>소액 대출</strong>이나 카드론을 받는 것입니다. 이는 나쁜 빚의 전형이며, <strong>신용점수</strong>를 떨어뜨려 나중에 정말 필요한 주택 대출이나 사업 자금 대출을 막는 원인이 됩니다.</p>
      </div>

      <h3 class="text-2xl font-bold text-slate-900 mt-12 mb-4">5. 준비 없는 투자(Investment): 소액이라도 원칙이 필요하다</h3>
      <p class="mb-6 leading-relaxed">근로 소득만으로는 불안함을 느껴 <strong>재테크</strong> 시장에 뛰어들지만, 대부분 실패하는 이유는 '준비 없는 욕심' 때문입니다. "누가 이거 좋다더라"는 말만 믿고 <strong>주식</strong>이나 코인에 돈을 넣는 것은 투자가 아니라 도박입니다.</p>
      <p class="mb-6 leading-relaxed">성공적인 <strong>투자</strong>는 잃지 않는 것에서 시작합니다. 비상금이 확보되지 않은 상태에서 무리하게 투자하거나, 리스크 분산 없이 한 종목에 올인하는 패턴은 개인 금융을 가장 빠르게 무너뜨리는 지름길입니다.</p>

      <h3 class="text-2xl font-bold text-slate-900 mt-12 mb-4">6. 복지(Welfare)와 정책: 놓치고 있는 안전망</h3>
      <p class="mb-6 leading-relaxed">많은 사람들이 세금은 아까워하면서, 정작 내가 받을 수 있는 <strong>복지 정책</strong>은 귀찮아서 찾아보지 않습니다. 정부는 청년, 서민, 근로자를 위한 다양한 금융 지원책(청년도약계좌, 근로장려금, 저금리 대환 대출 등)을 제공합니다. 이러한 '공짜 점심'을 챙기지 않는 것도 돈 관리의 큰 구멍 중 하나입니다.</p>

      <hr class="border-slate-200 my-10" />

      <h3 class="text-2xl font-bold text-slate-900 mt-8 mb-4">결론: 금융은 능력의 문제가 아니라 순서의 문제입니다</h3>
      <p class="mb-4 leading-relaxed">개인 금융이 무너지는 것은 하루아침의 일이 아닙니다. 잘못된 습관과 구조적 결함이 쌓여 임계점을 넘을 때 발생합니다. 지금 당장 화려한 투자 기술을 좇기보다, 내 돈 관리의 <strong>기초 체력</strong>을 점검해야 할 때입니다.</p>
      
      <div class="mt-8 p-6 bg-slate-100 rounded-2xl">
        <strong class="block text-slate-900 mb-4">🚀 다음 단계로 나아가기 위한 추천 가이드</strong>
        <div class="grid gap-3">
          <a href="#/finance-guide" class="flex items-center text-blue-600 hover:underline font-medium">
            1. 새는 돈을 막는 통장 쪼개기와 예산 수립법 👉
          </a>
          <a href="#/loan-guide" class="flex items-center text-blue-600 hover:underline font-medium">
            2. 내 신용점수를 지키는 안전한 대출 활용법 👉
          </a>
          <a href="#/investment-guide" class="flex items-center text-blue-600 hover:underline font-medium">
            3. 투기와 투자를 가르는 주식 투자 기초 👉
          </a>
        </div>
      </div>
    `
  },
  {
    id: '8',
    category: Category.FINANCE,
    title: '돈 관리의 순서: 소득·지출·대출·투자를 한 번에 이해하는 법',
    summary: '재테크의 실패는 방법이 아니라 순서에서 옵니다. 소득 파악부터 지출 통제, 대출 활용, 그리고 투자까지. 개인 금융의 전체 지도를 그려드립니다.',
    imageUrl: 'https://picsum.photos/seed/finance_hub/800/600',
    date: '2023-11-01',
    author: '금융 에디터',
    tags: ['재테크', '돈관리', '금융기초', '대출', '투자', '소액'],
    content: `
      <p class="mb-6 text-lg leading-relaxed">우리는 종종 "어디에 투자해야 돈을 벌까?"라는 질문부터 시작합니다. 하지만 이것은 마치 기초 공사도 하지 않은 땅에 고층 빌딩을 올리려는 것과 같습니다. 아무리 좋은 주식 정보나 대출 꿀팁을 알아도, 개인의 재무 구조가 튼튼하지 않으면 작은 충격에도 무너지고 맙니다. <strong>돈 관리에는 반드시 지켜야 할 순서</strong>가 있습니다. 본 글에서는 소득, 지출, 대출, 신용, 그리고 투자로 이어지는 <strong>개인 금융의 전체 로드맵</strong>을 제시합니다.</p>
      
      <div class="bg-slate-50 border-l-4 border-slate-900 p-6 mb-10 rounded-r-xl">
        <strong class="block text-slate-900 text-lg mb-2">💡 핵심 요약: 돈 관리의 5단계 원칙</strong>
        <ol class="list-decimal list-inside space-y-1 text-slate-700">
          <li><strong>소득:</strong> 내 현금 흐름의 원천을 정확히 파악한다.</li>
          <li><strong>지출:</strong> 새는 돈을 막고 잉여 자금을 확보한다.</li>
          <li><strong>대출/신용:</strong> 미래의 소득을 당겨쓸 때의 리스크를 관리한다.</li>
          <li><strong>복지/정책:</strong> 국가가 제공하는 안전망을 최대한 활용한다.</li>
          <li><strong>투자:</strong> 확보된 잉여 자금으로 자산을 증식한다.</li>
        </ol>
      </div>

      <h3 class="text-2xl font-bold text-slate-900 mt-12 mb-4">1. 소득(Income): 모든 금융 활동의 연료</h3>
      <p class="mb-6 leading-relaxed">재테크의 시작은 내가 얼마를 버는지, 그리고 그 소득이 얼마나 안정적인지를 객관적으로 파악하는 것입니다. 근로 소득은 자산을 만드는 연료입니다. 연료가 끊기면 자동차(재테크)는 멈춥니다.</p>
      <div class="mb-6">
        <h4 class="font-bold text-slate-800 mb-2">흔한 오해: "월급만으로는 부자가 될 수 없다?"</h4>
        <p class="text-slate-600">반은 맞고 반은 틀립니다. 월급만으로 부자가 되긴 어렵지만, <strong>월급 없이는 투자의 종잣돈(Seed Money)을 모을 수 없습니다.</strong> 초기 단계에서는 부업이나 자기계발을 통해 '몸값'을 올려 소득의 절대량을 늘리는 것이 주식 투자보다 훨씬 확실한 수익률을 보장합니다.</p>
      </div>

      <h3 class="text-2xl font-bold text-slate-900 mt-12 mb-4">2. 지출(Expenses): 밑 빠진 독 막기</h3>
      <p class="mb-6 leading-relaxed">소득이 아무리 높아도 관리가 안 되면 돈은 모이지 않습니다. <strong>생활비 관리</strong>의 핵심은 '예산 수립'과 '통제'입니다. 여기서 '통장 쪼개기'의 개념이 등장합니다. 소비 목적에 따라 통장을 나누어, 생활비가 저축액을 침범하지 못하도록 강제하는 시스템이 필요합니다.</p>
      <ul class="list-disc list-inside bg-slate-50 p-6 rounded-xl border border-slate-100 text-slate-700 mb-6">
        <li><strong>고정 지출:</strong> 주거비, 통신비, 보험료 등 숨만 쉬어도 나가는 돈</li>
        <li><strong>변동 지출:</strong> 식비, 쇼핑, 유흥비 등 내가 조절할 수 있는 돈 (통제의 핵심)</li>
        <li><strong>계절 지출:</strong> 경조사, 휴가비, 명절 비용 등 비정기적인 큰 지출 (비상금으로 대비)</li>
      </ul>

      <h3 class="text-2xl font-bold text-slate-900 mt-12 mb-4">3. 대출(Loan)과 신용(Credit): 양날의 검</h3>
      <p class="mb-6 leading-relaxed">자본주의에서 <strong>대출</strong>은 빚인 동시에 자산 증식을 위한 레버리지(지렛대)입니다. 하지만 준비되지 않은 사람에게 대출은 파멸의 지름길입니다. 대출을 '내 돈'이 아니라 '비용을 지불하고 빌려온 남의 돈'으로 인식해야 합니다.</p>
      
      <div class="grid md:grid-cols-2 gap-6 mb-6">
        <div class="bg-blue-50 p-5 rounded-lg border border-blue-100">
          <strong class="text-blue-800 block mb-2">좋은 대출의 조건</strong>
          <p class="text-sm text-blue-900/80">대출 이자보다 더 높은 수익이나 가치를 창출할 수 있을 때 (예: 주택 담보 대출, 사업 확장 자금).</p>
        </div>
        <div class="bg-red-50 p-5 rounded-lg border border-red-100">
          <strong class="text-red-800 block mb-2">나쁜 대출의 전형</strong>
          <p class="text-sm text-red-900/80">단순 소비나 갚을 계획이 불투명한 <strong>소액 대출</strong>, 고금리 카드론, 현금서비스. 이는 자산을 갉아먹습니다.</p>
        </div>
      </div>
      <p class="mb-6 leading-relaxed">이 모든 것을 가능하게 하는 것이 바로 <strong>신용점수</strong>입니다. 신용점수는 금융 사회의 신분증이므로, 평소 연체 없는 신용카드 사용과 공과금 납부를 통해 꾸준히 관리해야 합니다.</p>

      <h3 class="text-2xl font-bold text-slate-900 mt-12 mb-4">4. 신용카드와 현금 흐름</h3>
      <p class="mb-6 leading-relaxed"><strong>신용카드</strong>는 편리한 결제 수단이지만, 본질적으로는 '외상'입니다. 카드를 긁는 순간 미래의 소득이 저당 잡히는 것입니다. 포인트 적립이나 할인 혜택은 현명하게 챙기되, 할부의 늪에 빠지지 않도록 주의해야 합니다.</p>
      <p class="mb-6 leading-relaxed">최근 유행하는 포인트 <strong>현금화</strong>나 상테크(상품권 재테크)도 합법적인 테두리 안에서 활용하면 쏠쏠한 부수입이 되지만, 이를 넘어선 불법적인 현금 융통(카드깡)은 금융 질서 문란자로 등록되는 지름길임을 명심해야 합니다.</p>

      <h3 class="text-2xl font-bold text-slate-900 mt-12 mb-4">5. 복지(Welfare)와 정책: 놓치면 손해 보는 권리</h3>
      <p class="mb-6 leading-relaxed">개인의 노력만으로는 해결하기 힘든 순간, 국가의 시스템이 개입합니다. <strong>정부 지원금</strong>이나 정책 서민 금융은 경제적 위기 상황에서 강력한 안전망이 됩니다. 근로장려금, 청년도약계좌, 햇살론 등은 내가 낸 세금으로 운영되는 제도이므로, 자격 요건이 된다면 반드시 신청하여 혜택을 누려야 합니다.</p>

      <h3 class="text-2xl font-bold text-slate-900 mt-12 mb-4">6. 투자(Investment): 잉여 자금의 증식</h3>
      <p class="mb-6 leading-relaxed">위의 1~5단계가 탄탄하게 다져졌을 때, 비로소 <strong>투자</strong>를 시작할 자격이 주어집니다. 빚을 내서 하거나 당장 다음 달 생활비로 주식을 사는 것은 투자가 아니라 투기입니다.</p>
      <div class="bg-slate-50 p-6 rounded-xl border border-slate-200 mb-6">
        <h4 class="font-bold text-slate-800 mb-3">초보 투자자가 지켜야 할 원칙</h4>
        <ul class="space-y-2 text-slate-700">
          <li>✔ <strong>여유 자금:</strong> 없어도 당장 생활에 지장이 없는 돈으로 시작한다.</li>
          <li>✔ <strong>분산 투자:</strong> ETF 등을 활용해 리스크를 시장 전체로 분산한다.</li>
          <li>✔ <strong>장기 관점:</strong> 단기적인 시세 차익보다 자산의 성장에 집중한다.</li>
        </ul>
      </div>

      <hr class="border-slate-200 my-10" />

      <h3 class="text-2xl font-bold text-slate-900 mt-8 mb-4">결론: 순서를 지키는 것이 가장 빠른 길입니다</h3>
      <p class="mb-4 leading-relaxed">돈 관리에는 왕도가 없습니다. 소득을 늘리고, 지출을 통제하여 남은 돈을 만들고, 그 돈을 안전하게 불리는 정공법만이 경제적 자유로 가는 유일한 길입니다. 지금 당장 여러분의 재무 상태표를 점검해 보십시오. 어느 단계가 흔들리고 있습니까?</p>
      <p class="mb-4 leading-relaxed text-slate-600">
        다음 단계로 나아가기 위해, <strong>[통장 쪼개기]</strong>, <strong>[신용점수 관리]</strong>, <strong>[안전한 대출 가이드]</strong> 등의 상세 내용을 확인해 보시기를 권장합니다.
      </p>
    `
  },
  {
    id: '1',
    category: Category.LOAN,
    title: '급할 때 유용한 소액 비상금 대출: 구조적 이해와 활용 전략',
    summary: '갑작스러운 유동성 위기 시, 신용점수 하락을 최소화하며 안전하게 자금을 융통하는 1금융권 소액 대출의 메커니즘과 주의사항을 심층 분석합니다.',
    imageUrl: 'https://picsum.photos/seed/loan1/800/600',
    date: '2023-10-24',
    author: '금융 에디터',
    tags: ['소액', '대출', '비상금', '신용점수', '서울보증보험'],
    content: `
      <p class="mb-6 text-lg leading-relaxed">살다 보면 예기치 못한 순간에 현금 유동성이 필요한 상황이 발생합니다. 급여일 불일치, 경조사, 혹은 긴급한 병원비 등 일시적인 자금 경색이 왔을 때, 많은 금융 소비자들이 당황하여 고금리 현금서비스나 리볼빙을 선택하곤 합니다. 그러나 금융 지식이 있다면 이러한 상황에서도 신용점수를 방어하며 합리적으로 자금을 융통할 수 있습니다. 본 글에서는 <strong>1금융권 소액 비상금 대출</strong>의 구조적 원리와 활용 전략을 다룹니다.</p>
      
      <h3 class="text-2xl font-bold text-slate-900 mt-10 mb-4">1. 비상금 대출의 작동 원리와 보증 구조</h3>
      <p class="mb-6 leading-relaxed">통상적으로 '비상금 대출'이라 불리는 상품은 1금융권(시중은행 및 인터넷전문은행)에서 취급하는 300만 원 이하의 <strong>소액 신용대출</strong>을 의미합니다. 이 상품의 가장 큰 특징은 재직 증명서나 소득 서류 없이도 실행이 가능하다는 점입니다.</p>
      <p class="mb-6 leading-relaxed">이것이 가능한 이유는 은행이 개인의 소득을 직접 평가하는 대신, <strong>서울보증보험(SGI)</strong>의 보증서를 담보로 대출을 실행하기 때문입니다. 혹은 통신 3사의 납부 이력을 바탕으로 한 통신 등급(Telco Score)을 활용하기도 합니다. 즉, 직업이 없는 주부나 대학생, 사회초년생이라도 연체 이력이 없고 보증보험 증권이 발급된다면 1금융권 대출 이용이 가능합니다.</p>
      
      <h3 class="text-2xl font-bold text-slate-900 mt-10 mb-4">2. 1금융권 이용의 전략적 이점</h3>
      <ul class="list-disc list-inside mb-6 space-y-3 bg-slate-50 p-6 rounded-xl border border-slate-100 text-slate-700">
        <li><strong>신용점수 방어:</strong> 대출 실행 시 신용점수 변동은 필연적이나, 저축은행이나 카드론(2금융권)을 이용할 때보다 1금융권 이용 시 점수 하락 폭이 현저히 적습니다.</li>
        <li><strong>마이너스 통장(한도 대출) 활용:</strong> 대출금을 한 번에 입금받는 방식 대신, 마이너스 통장 방식을 선택하면 약정 한도 내에서 <strong>실제 사용한 금액</strong>에 대해서만 이자가 발생합니다. 며칠만 쓰고 갚을 경우 이자 부담을 극소화할 수 있습니다.</li>
        <li><strong>금융 거래 실적:</strong> 연체 없이 성실하게 상환할 경우, 장기적으로는 금융 거래 이력이 쌓여 긍정적인 평가 요인이 될 수 있습니다.</li>
      </ul>

      <h3 class="text-2xl font-bold text-slate-900 mt-10 mb-4">3. 반드시 인지해야 할 리스크와 금리 구조</h3>
      <p class="mb-6 leading-relaxed">소액이고 간편하다고 해서 리스크가 없는 것은 아닙니다. 비상금 대출 역시 엄연한 <strong>부채</strong>이며, 다음과 같은 주의사항을 숙지해야 합니다.</p>
      <p class="mb-6 leading-relaxed">첫째, <strong>금리 수준</strong>입니다. 소액 대출은 담보가 없는 신용 대출의 일종이며, 은행 입장에서는 관리 비용이 들기 때문에 주택담보대출 등에 비해 금리가 높게 설정되는 경향이 있습니다. (통상 연 5%~10% 내외 변동).<br/>둘째, <strong>추가 대출 제한</strong>입니다. 비상금 대출을 보유하고 있으면, 추후 전세자금대출이나 주택담보대출 등 큰 한도가 필요한 대출 심사 시 DSR(총부채원리금상환비율) 산정에 포함되어 한도가 줄어들 수 있습니다.</p>
      
      <h3 class="text-2xl font-bold text-slate-900 mt-10 mb-4">4. 거절 시 대응 시나리오: 정책 서민 금융</h3>
      <div class="bg-blue-50 border-l-4 border-blue-600 p-6 mt-4 mb-8">
        <p class="font-bold text-blue-900 text-lg mb-2">1금융권 심사에서 탈락했다면?</p>
        <p class="text-blue-800 leading-relaxed">곧바로 2금융권이나 카드론으로 넘어가는 것은 신용 관리에 좋지 않습니다. 정부에서 지원하는 <strong>'햇살론 유스(Youth)'</strong>나 <strong>'햇살론15'</strong>와 같은 정책 서민 금융 상품을 먼저 확인하십시오. 서민금융진흥원을 통해 보증서를 발급받으면 비교적 저렴한 금리로 안전하게 자금을 마련할 수 있습니다.</p>
      </div>

      <hr class="border-slate-200 my-10" />

      <h3 class="text-2xl font-bold text-slate-900 mt-8 mb-4">결론: 대출 실행 전 자가 진단 기준</h3>
      <p class="mb-4 leading-relaxed">대출은 필요할 때 쓰는 도구이지만, 그 결과에 대한 책임은 온전히 본인의 몫입니다. 신청 버튼을 누르기 전, 다음 세 가지를 냉정하게 판단해 보시기 바랍니다.</p>
      <ol class="list-decimal list-inside space-y-2 text-slate-700 font-medium">
        <li>이 자금이 <strong>소비(단순 지출)</strong>를 위한 것인가, <strong>해결(유동성 확보)</strong>을 위한 것인가?</li>
        <li>다음 달 소득으로 원금과 이자를 <strong>확실하게 상환</strong>할 수 있는가?</li>
        <li>보유하고 있는 예적금 담보 대출이나 보험 약관 대출 등 <strong>더 낮은 금리의 대안</strong>은 확인했는가?</li>
      </ol>
    `
  },
  {
    id: '2',
    category: Category.LIFE,
    title: '신용카드 포인트의 합법적 현금 전환: 여신금융협회 통합조회 활용법',
    summary: '흩어진 카드 포인트를 내 계좌로 입금받는 공식적인 절차와 방법. 여신금융협회 통합조회 서비스를 통한 안전한 자산 관리 가이드.',
    imageUrl: 'https://picsum.photos/seed/card1/800/600',
    date: '2023-10-23',
    author: '생활의 달인',
    tags: ['신용카드', '포인트조회', '계좌입금', '여신금융협회', '재테크'],
    content: `
      <p class="mb-6 text-lg leading-relaxed">신용카드를 사용할 때 적립되는 포인트는 카드사가 베푸는 혜택이 아니라, 소비자가 정당하게 행사해야 할 <strong>금융 자산</strong>입니다. 하지만 여러 카드사에 흩어져 있는 포인트를 일일이 확인하기 어렵다는 이유로, 매년 상당한 규모의 포인트가 유효기간 만료로 소멸되고 있습니다. 본 글에서는 불법적인 수수료 차감이나 편법 없이, <strong>여신금융협회</strong>의 공식 시스템을 통해 내 포인트를 안전하게 본인 명의 계좌로 입금받는(현금 전환) 절차를 안내합니다.</p>

      <h3 class="text-2xl font-bold text-slate-900 mt-10 mb-4">1. 여신금융협회 통합조회 서비스란?</h3>
      <p class="mb-6 leading-relaxed">과거에는 포인트를 사용하기 위해 각 카드사 홈페이지에 개별적으로 접속해야 했습니다. 이러한 불편을 해소하기 위해 금융위원회와 <strong>여신금융협회</strong>가 구축한 시스템이 바로 '카드포인트 통합조회' 서비스입니다.</p>
      <ul class="list-disc list-inside mb-6 space-y-2 bg-slate-50 p-6 rounded-xl border border-slate-100 text-slate-700">
        <li><strong>공신력:</strong> 사설 앱이 아닌, 여신금융협회가 운영하는 공식 공공 서비스입니다.</li>
        <li><strong>통합 관리:</strong> 국내 주요 카드사(신한, 삼성, 현대, KB국민, 하나, 롯데, 우리, NH농협 등)의 포인트를 한 번에 조회할 수 있습니다.</li>
        <li><strong>1:1 가치:</strong> 조회된 포인트는 <strong>1포인트 = 1원</strong>의 비율로 환산되어 계좌로 입금됩니다.</li>
      </ul>

      <h3 class="text-2xl font-bold text-slate-900 mt-10 mb-4">2. 실전 가이드: 내 계좌로 포인트 옮기기</h3>
      <p class="mb-6 leading-relaxed">PC 웹사이트나 모바일 앱(여신금융협회)을 통해 별도의 회원가입 절차 없이 비회원 인증만으로도 신청이 가능합니다. 주요 단계는 다음과 같습니다.</p>
      
      <ol class="list-decimal list-inside mb-6 space-y-4 text-slate-800">
        <li class="pl-2"><strong>본인 인증:</strong> 휴대폰 인증, 아이핀, 카드 인증 중 편한 방법을 선택하여 본인 확인을 진행합니다.</li>
        <li class="pl-2"><strong>위임 동의:</strong> 통합 조회를 위해 카드사 정보를 불러오는 것에 동의합니다.</li>
        <li class="pl-2"><strong>포인트 조회:</strong> 각 카드사별 잔여 포인트(소멸 예정 포인트 포함)가 목록으로 표시됩니다.</li>
        <li class="pl-2"><strong>계좌 입금 신청:</strong> '포인트 계좌입금' 버튼을 누르고 본인 명의의 입출금 계좌를 입력합니다. 대부분의 경우 신청 즉시 또는 다음 영업일에 입금 처리됩니다.</li>
      </ol>

      <h3 class="text-2xl font-bold text-slate-900 mt-10 mb-4">3. 현금 전환이 제한되는 경우와 대안</h3>
      <p class="mb-6 leading-relaxed">모든 포인트가 현금으로 전환되는 것은 아닙니다. 카드사의 정책에 따라 포인트의 성격이 다르기 때문입니다.</p>
      <div class="grid md:grid-cols-2 gap-6 mb-8">
        <div class="bg-slate-50 p-5 rounded-lg border border-slate-200">
          <strong class="block text-blue-700 mb-2">전환 가능 (대표 포인트)</strong>
          <p className="text-sm text-slate-600">카드사의 대표 포인트(예: 마이신한포인트, KB포인트리 등)는 대부분 1원 단위로 현금화가 가능합니다.</p>
        </div>
        <div class="bg-slate-50 p-5 rounded-lg border border-slate-200">
          <strong class="block text-red-700 mb-2">전환 제한 (제휴 포인트)</strong>
          <p className="text-sm text-slate-600">특정 제휴사(항공사 마일리지, 쇼핑몰 전용 포인트)나 이벤트성 적립금은 계좌 입금이 제한될 수 있습니다. 이 경우 해당 제휴처에서 소비 목적으로 사용하는 것이 가장 효율적입니다.</p>
        </div>
      </div>

      <hr class="border-slate-200 my-10" />

      <h3 class="text-2xl font-bold text-slate-900 mt-8 mb-4">결론: 올바른 포인트 관리 기준</h3>
      <p class="mb-4 leading-relaxed">포인트 현금화는 소비자의 권리이지만, 이를 악용하거나 불법적인 경로를 이용해선 안 됩니다. 다음 사항을 유의하여 안전하게 자산을 관리하시기 바랍니다.</p>
      <ul class="list-disc list-inside space-y-3 text-slate-700 font-medium">
        <li><strong>공식 채널 이용:</strong> 수수료를 요구하는 사설 업체가 아닌, 여신금융협회나 금융결제원(어카운트인포) 등 공식 채널을 이용하십시오.</li>
        <li><strong>정책 확인:</strong> 카드사의 약관 변경에 따라 포인트의 유효기간이나 전환 비율은 달라질 수 있습니다.</li>
        <li><strong>주기적 점검:</strong> 1년에 한 번 정도는 통합 조회를 통해 잊고 있던 자산을 점검하는 습관을 들이는 것이 좋습니다.</li>
      </ul>
    `
  },
  {
    id: '3',
    category: Category.INVESTMENT,
    title: '주식 투자 입문: 초보자를 위한 포트폴리오 구성의 기초와 분산 투자 전략',
    summary: '변동성이 큰 주식 시장에서 리스크를 관리하는 자산 배분의 기본 원칙. ETF와 배당주를 활용한 포트폴리오의 구조와 장단점을 이해합니다.',
    imageUrl: 'https://picsum.photos/seed/stock1/800/600',
    date: '2023-10-22',
    author: '투자 분석가',
    tags: ['주식투자', '포트폴리오', 'ETF', '분산투자', '초보자가이드'],
    content: `
      <p class="mb-6 text-lg leading-relaxed">주식 투자는 자산을 증식시킬 수 있는 효과적인 수단이지만, 동시에 <strong>원금 손실의 위험</strong>이 항상 존재합니다. 투자의 대가들이 <strong>'계란을 한 바구니에 담지 말라'</strong>고 강조하는 이유는 이러한 위험을 분산시켜 시장의 변동성을 견디기 위함입니다. 본 글에서는 특정 종목을 추천하는 것이 아니라, 초보 투자자가 시장을 이해하고 자신만의 <strong>포트폴리오(Portfolio)</strong>를 구성할 때 참고할 수 있는 구조적 방법론과 <strong>분산 투자</strong>의 원칙을 소개합니다.</p>
      
      <h3 class="text-2xl font-bold text-slate-900 mt-10 mb-4">1. 시장 전체에 투자하는 ETF 활용법</h3>
      <p class="mb-6 leading-relaxed">개별 기업의 재무제표를 분석하고 미래 가치를 예측하는 것은 전문 투자자에게도 쉽지 않은 영역입니다. 이에 대한 대안으로 많은 초보자들이 선택하는 것이 바로 <strong>ETF(상장지수펀드)</strong>입니다. ETF는 특정 기업이 아닌 시장 지수(Index)나 특정 산업군 전체에 투자하는 효과를 가집니다.</p>
      <p class="mb-6 leading-relaxed">예를 들어, 미국의 S&P500이나 나스닥100 같은 지수를 추종하는 ETF는 해당 시장에 상장된 우량 기업들에 자동으로 <strong>분산 투자</strong>하는 구조를 갖습니다. 이는 개별 기업의 리스크(파산, 실적 악화 등)를 줄이고, 시장 전체의 장기적인 성장 흐름을 따라가는 전략으로 활용됩니다. 단, 시장 전체가 하락하는 시기에는 ETF 역시 손실을 피할 수 없음을 인지해야 합니다.</p>
      
      <h3 class="text-2xl font-bold text-slate-900 mt-10 mb-4">2. 현금 흐름을 만드는 배당주 전략</h3>
      <p class="mb-6 leading-relaxed">주가 상승에 따른 시세 차익 외에, 기업의 이익을 주주와 나누는 <strong>배당(Dividend)</strong>에 초점을 맞추는 전략도 있습니다. 꾸준히 배당을 지급하거나 배당금을 늘려온 기업(일명 배당 성장주, 예: 필수소비재 기업 등)을 포트폴리오에 편입하면, 주가 변동과 무관하게 일정한 현금 흐름을 기대할 수 있다는 장점이 있습니다.</p>
      <p class="mb-6 leading-relaxed">이러한 전략은 하락장에서 심리적 안정감을 줄 수 있으며, 수령한 배당금을 다시 투자하는 <strong>복리 효과</strong>를 누리는 데 유리합니다. 하지만 배당주 역시 기업 실적이 악화되면 배당이 삭감되거나 중단될 수 있으며, 성장주에 비해 주가 상승 폭이 제한적일 수 있다는 점을 고려해야 합니다.</p>

      <h3 class="text-2xl font-bold text-slate-900 mt-10 mb-4">3. 포트폴리오 구성 비율의 예시</h3>
      <p class="mb-6 leading-relaxed">일반적으로 안정성을 추구하는 포트폴리오에서는 <strong>'코어(Core)와 위성(Satellite)'</strong> 전략이 자주 언급됩니다. 자산의 70~80%는 시장 지수를 추종하는 ETF나 우량 배당주와 같은 '코어' 자산으로 구성하여 안정성을 확보하고, 나머지 20~30%는 자신이 확신하는 개별 종목이나 성장 산업에 투자하는 '위성' 전략을 취하는 방식입니다. 이는 시장 수익률을 따라가면서도 추가 수익을 노려볼 수 있는 절충안이 될 수 있습니다.</p>

      <hr class="border-slate-200 my-10" />

      <h3 class="text-2xl font-bold text-slate-900 mt-8 mb-4">결론: 투자 시작 전 점검해야 할 3가지 기준</h3>
      <p class="mb-4 leading-relaxed">성공적인 투자는 좋은 종목을 고르는 것보다 자신의 상황을 객관적으로 파악하는 것에서 시작합니다. 포트폴리오를 구성하기 전 다음 사항을 스스로 점검해 보시기 바랍니다.</p>
      <ul class="list-disc list-inside space-y-3 text-slate-700 font-medium">
        <li><strong>투자 기간:</strong> 단기간에 필요한 자금인가, 10년 이상 묻어둘 수 있는 여유 자금인가?</li>
        <li><strong>위험 감수 성향:</strong> 자산이 일시적으로 20% 이상 하락했을 때 심리적으로 버틸 수 있는가?</li>
        <li><strong>기대 수익률의 현실화:</strong> 은행 이자 이상의 수익을 목표로 하되, 비현실적인 '대박'을 기대하며 과도한 리스크를 지고 있지는 않은가?</li>
      </ul>
    `
  },
  {
    id: '4',
    category: Category.WELFARE,
    title: '2024년 주요 정부 지원금 및 복지 정책의 이해와 활용 가이드',
    summary: '청년 자산 형성부터 출산 장려까지, 복잡한 정부 정책의 취지와 핵심 내용을 정리하고 올바른 신청 기준을 제시합니다.',
    imageUrl: 'https://picsum.photos/seed/welfare1/800/600',
    date: '2023-10-21',
    author: '복지 알리미',
    tags: ['복지', '정책', '지원금', '정부정책', '청년정책', '부모급여'],
    content: `
      <p class="mb-6 text-lg leading-relaxed">정부는 매년 사회적 필요와 경제 상황에 맞춰 다양한 <strong>복지 정책</strong>과 지원 제도를 발표합니다. 하지만 제도의 종류가 방대하고 세부 기준이 복잡하여, 정작 필요한 분들이 혜택을 놓치는 경우가 종종 발생합니다. 본 글에서는 2024년을 기준으로 주목해야 할 주요 <strong>정부 지원금</strong>의 핵심 내용과 취지를 정리하여, 독자 여러분이 자신에게 맞는 제도를 효율적으로 탐색할 수 있도록 돕고자 합니다.</p>

      <h3 class="text-2xl font-bold text-slate-900 mt-10 mb-4">1. 청년의 미래를 위한 자산 형성 지원: 청년도약계좌</h3>
      <p class="mb-6 leading-relaxed">고금리와 고물가 시대에 사회초년생이 종잣돈(Seed Money)을 모으는 것은 결코 쉬운 일이 아닙니다. 이러한 어려움을 해소하기 위해 도입된 대표적인 <strong>청년 정책</strong>이 바로 '청년도약계좌'입니다.</p>
      <ul class="list-disc list-inside mb-6 space-y-2 bg-slate-50 p-6 rounded-xl border border-slate-100 text-slate-700">
        <li><strong>정책 취지:</strong> 청년들의 중장기적인 자산 형성을 지원하여 경제적 자립 기반을 마련해 주는 것을 목표로 합니다.</li>
        <li><strong>핵심 구조:</strong> 가입자가 5년 동안 매달 일정 금액(최대 70만 원)을 납입하면, 정부가 기여금을 더해주고 이자 소득에 대해 비과세 혜택을 제공합니다.</li>
        <li><strong>대상 및 특징:</strong> 일반적으로 만 19세~34세 청년 중 개인 소득과 가구 소득 기준을 충족하는 경우 신청 가능합니다. 기존 청년희망적금에 비해 가입 문턱을 낮추고 지원 혜택을 강화한 것이 특징입니다.</li>
      </ul>

      <h3 class="text-2xl font-bold text-slate-900 mt-10 mb-4">2. 양육 부담 완화를 위한 선택: 부모 급여 확대</h3>
      <p class="mb-6 leading-relaxed">저출산 문제 해결과 초기 양육 부담 경감을 위해 기존의 영아수당 제도가 <strong>부모 급여</strong>로 확대 개편되었습니다. 이는 가정에서 아이를 돌보는 부모에게 실질적인 현금성 지원을 강화하는 방향으로 설계되었습니다.</p>
      <p class="mb-6 leading-relaxed">가장 눈에 띄는 변화는 지원 금액의 현실화입니다. 2024년 기준, 만 0세 아동을 둔 가정에는 월 최대 100만 원, 만 1세 아동에게는 월 최대 50만 원 수준의 지원금이 지급되는 것이 일반적입니다. 이는 어린이집 이용 여부에 따라 바우처 형태로 지급되거나 현금 차액이 입금되는 방식이므로, 구체적인 수령 방식은 사전에 확인이 필요합니다.</p>

      <h3 class="text-2xl font-bold text-slate-900 mt-10 mb-4">3. 정책 활용 시 유의해야 할 변동성</h3>
      <p class="mb-6 leading-relaxed">모든 <strong>정부 지원금</strong>과 복지 혜택은 예산 상황과 관련 법령 개정에 따라 세부 내용이 매년 변경될 수 있습니다. 특히 지원의 기준점이 되는 '기준 중위소득'은 해마다 갱신되므로, 작년에는 대상이 아니었더라도 올해는 포함될 수 있고 그 반대의 경우도 발생합니다. 따라서 블로그나 커뮤니티의 정보에만 의존하기보다는, '복지로'나 '정부24'와 같은 공식 포털을 통해 최신 공고문을 확인하는 절차가 필수적입니다.</p>

      <hr class="border-slate-200 my-10" />

      <h3 class="text-2xl font-bold text-slate-900 mt-8 mb-4">결론: 지원금 신청 전 체크리스트</h3>
      <p class="mb-4 leading-relaxed">복지 정책은 단순한 '공돈'이 아니라 사회적 안전망입니다. 무조건 신청하고 보는 것이 아니라, 다음 기준을 통해 스스로 적합성을 판단해 보시기 바랍니다.</p>
      <ol class="list-decimal list-inside space-y-2 text-slate-700 font-medium">
        <li><strong>자격 요건의 충족 여부:</strong> 내 소득과 가구원 수가 정책이 요구하는 기준 범위 내에 있는가?</li>
        <li><strong>중복 수혜 가능성:</strong> 현재 받고 있는 다른 지원금과 중복되어 지급이 제한되지는 않는가?</li>
        <li><strong>의무 사항 이행:</strong> 지원금을 받기 위해 유지해야 할 필수 조건(예: 납입 기간 유지, 교육 이수 등)을 지킬 수 있는가?</li>
      </ol>
    `
  },
  {
    id: '5',
    category: Category.FINANCE,
    title: '사회초년생을 위한 월급 관리의 정석: 통장 쪼개기 시스템 구축',
    summary: '월급이 스쳐 지나가지 않도록 현금 흐름을 통제하는 통장 쪼개기 노하우. 4개의 통장으로 만드는 자동화된 자산 관리 시스템.',
    imageUrl: 'https://picsum.photos/seed/finance1/800/600',
    date: '2023-10-20',
    author: '재무 설계사',
    tags: ['재테크', '금융', '통장쪼개기', '사회초년생', '월급관리'],
    content: `
      <p class="mb-6 text-lg leading-relaxed">사회 생활을 시작하고 첫 월급을 받았을 때의 설렘도 잠시, 카드 값과 월세, 각종 공과금이 빠져나가고 나면 통장 잔고는 순식간에 바닥을 드러내곤 합니다. 소위 '텅장'이라 불리는 이 현상은 소득의 적음보다는 <strong>자금 통제 시스템의 부재</strong>에서 기인하는 경우가 많습니다. 재테크의 본질은 수익률을 쫓는 것이 아니라, 버는 돈보다 적게 쓰고 남은 돈을 체계적으로 모으는 <strong>현금 흐름(Cash Flow) 관리</strong>에 있습니다. 그 첫걸음이자 가장 강력한 도구인 '통장 쪼개기'의 원리와 실천 방법을 상세히 알아봅니다.</p>

      <h3 class="text-2xl font-bold text-slate-900 mt-10 mb-4">1. 통장 쪼개기의 핵심: 예산의 시각화와 자동화</h3>
      <p class="mb-6 leading-relaxed">통장 쪼개기란 단순히 통장의 개수를 늘리는 것이 아닙니다. 돈의 <strong>목적(Purpose)</strong>에 따라 공간을 분리하여, 섞이지 않게 관리하는 전략입니다. 하나의 통장에서 생활비, 저축, 비상금이 뒤섞여 있으면 내가 이번 달에 얼마를 썼고 얼마를 더 쓸 수 있는지 파악하기 어렵습니다. 이를 용도별로 나누어 <strong>예산을 시각화</strong>하고, 자동 이체를 통해 <strong>저축과 지출을 자동화</strong>하는 것이 이 시스템의 핵심입니다. 특히 금융 습관이 형성되지 않은 사회초년생에게는 의지력에 기대지 않고 강제 저축을 할 수 있는 최적의 방법입니다.</p>

      <h3 class="text-2xl font-bold text-slate-900 mt-10 mb-4">2. 4개의 통장 시스템과 역할 정의</h3>
      <p class="mb-6 leading-relaxed">가장 효율적인 구조는 자금의 성격에 따라 4개의 통장으로 나누는 것입니다. 각 통장은 다음과 같은 명확한 역할과 규칙을 가집니다.</p>

      <div class="space-y-6 mb-8">
        <div class="bg-slate-50 p-6 rounded-xl border border-slate-200">
          <h4 class="text-lg font-bold text-slate-800 mb-2">① 급여 통장 (자금의 허브)</h4>
          <p class="text-slate-600 leading-relaxed">월급이 입금되는 통장이자, 매달 숨만 쉬어도 나가는 <strong>고정 지출</strong>(월세, 통신비, 보험료, 관리비 등)을 관리하는 곳입니다. 급여가 들어오면 고정 지출을 남겨두고, 나머지 금액을 투자 통장과 소비 통장, 비상금 통장으로 즉시 자동 이체시킵니다. 급여 통장의 잔고는 고정비 납부 후 항상 '0원'이 되도록 설정하는 것이 이상적입니다.</p>
        </div>

        <div class="bg-slate-50 p-6 rounded-xl border border-slate-200">
          <h4 class="text-lg font-bold text-slate-800 mb-2">② 투자/저축 통장 (미래 자산)</h4>
          <p class="text-slate-600 leading-relaxed"><strong>'선저축 후지출'</strong> 원칙을 실현하는 통장입니다. 적금, 주택청약, 펀드 등 재무 목표를 위한 자금을 이체합니다. 사회초년생이라면 월 소득의 50% 이상을 목표로 하되, 무리하지 않는 선에서 자동 이체일을 급여일 다음 날로 설정하여 소비 유혹을 원천 차단해야 합니다.</p>
        </div>

        <div class="bg-slate-50 p-6 rounded-xl border border-slate-200">
          <h4 class="text-lg font-bold text-slate-800 mb-2">③ 소비 통장 (변동 지출 통제)</h4>
          <p class="text-slate-600 leading-relaxed">식비, 교통비, 쇼핑, 여가 생활 등 매달 변동되는 <strong>생활비</strong>를 넣어두는 통장입니다. 이 통장에 연결된 <strong>체크카드</strong>를 사용하여, 잔고가 바닥나면 더 이상 지출할 수 없도록 스스로를 제한해야 합니다. 신용카드보다는 직관적으로 잔액을 확인할 수 있는 결제 수단을 권장합니다.</p>
        </div>

        <div class="bg-slate-50 p-6 rounded-xl border border-slate-200">
          <h4 class="text-lg font-bold text-slate-800 mb-2">④ 비상금 통장 (금융 안전망)</h4>
          <p class="text-slate-600 leading-relaxed">경조사, 병원비, 수리비 등 예기치 못한 지출에 대비하는 통장입니다. 투자 통장이나 소비 통장의 자금을 건드리지 않게 해주는 방어막 역할을 합니다. 수시 입출금이 가능하면서도 하루만 맡겨도 이자가 붙는 <strong>CMA(종합자산관리계좌)</strong>나 인터넷은행의 <strong>파킹통장</strong>을 활용하는 것이 유리합니다. 목표 금액은 월 생활비의 3~6배 정도가 적당합니다.</p>
        </div>
      </div>

      <hr class="border-slate-200 my-10" />

      <h3 class="text-2xl font-bold text-slate-900 mt-8 mb-4">결론: 지속 가능한 시스템을 위한 체크리스트</h3>
      <p class="mb-4 leading-relaxed">통장 쪼개기는 한 번 설정해두면 평생 가는 자산 관리의 기초가 됩니다. 시스템을 구축한 후에는 다음 사항들을 주기적으로 점검하며 본인에게 최적화된 구조를 만들어가시기 바랍니다.</p>
      <ul class="list-disc list-inside space-y-3 text-slate-700 bg-emerald-50 p-6 rounded-xl border border-emerald-100">
        <li><strong>예산의 현실성:</strong> 소비 통장의 예산이 너무 팍팍하여 매달 비상금을 헐어 쓰고 있지는 않은가? (초기에는 예산을 넉넉히 잡고 점차 줄여가는 것이 좋습니다.)</li>
        <li><strong>비상금의 우선순위:</strong> 본격적인 투자에 앞서 최소한의 비상금(월급의 1~2배)이 먼저 확보되었는가?</li>
        <li><strong>자동 이체 점검:</strong> 급여일 직후 모든 이체가 순차적으로 이루어지도록 날짜가 잘 설정되어 있는가?</li>
      </ul>
    `
  },
  {
    id: '6',
    category: Category.INVESTMENT,
    title: '미국 주식 투자와 세금의 이해: 양도소득세 구조와 관리 원칙',
    summary: '해외 주식 투자 수익의 세금 구조를 명확히 이해하고, 합법적인 범위 내에서 실질 수익을 지키는 세금 관리 전략을 안내합니다.',
    imageUrl: 'https://picsum.photos/seed/stock2/800/600',
    date: '2023-10-19',
    author: '세무 전문가',
    tags: ['주식', '미국주식', '세금', '절세', '양도소득세'],
    content: `
      <p class="mb-6 text-lg leading-relaxed">최근 미국을 비롯한 해외 주식 시장에 직접 투자하는 분들이 늘어나면서, 수익만큼이나 중요한 <strong>세금(Tax)</strong> 문제에 대한 관심이 커지고 있습니다. 투자의 최종 목표는 단순히 높은 수익률을 기록하는 것이 아니라, 세금을 납부한 후의 <strong>실질 수익</strong>을 지키는 것입니다. 본 글에서는 '세금 폭탄'이라는 자극적인 두려움에서 벗어나, 해외 주식 투자자가 반드시 알아야 할 <strong>양도소득세</strong>의 기본 구조와 합리적인 세금 관리 원칙을 정리합니다.</p>

      <h3 class="text-2xl font-bold text-slate-900 mt-10 mb-4">1. 해외 주식 양도소득세의 기본 구조</h3>
      <p class="mb-6 leading-relaxed">국내 상장 주식(대주주 제외)과 달리, 해외 주식 투자를 통해 얻은 매매 차익은 <strong>양도소득세</strong> 과세 대상입니다. 이는 근로소득이나 사업소득과는 별도로 분류되어 과세되는 '분류 과세' 소득입니다.</p>
      <ul class="list-disc list-inside mb-6 space-y-2 bg-slate-50 p-6 rounded-xl border border-slate-100 text-slate-700">
        <li><strong>과세 기간:</strong> 매년 1월 1일부터 12월 31일까지 발생한 모든 매도 내역을 합산합니다. (결제일 기준)</li>
        <li><strong>세율:</strong> 지방소득세를 포함하여 차익의 <strong>22%</strong>가 세율로 적용됩니다.</li>
        <li><strong>신고 납부:</strong> 수익이 발생한 다음 해 5월에 관할 세무서에 자진 신고 및 납부해야 합니다.</li>
      </ul>

      <h3 class="text-2xl font-bold text-slate-900 mt-10 mb-4">2. 세금 계산의 핵심: 손익 통산과 기본 공제</h3>
      <p class="mb-6 leading-relaxed">양도소득세를 계산할 때는 단순히 벌어들인 돈에만 세금을 매기는 것이 아니라, 손실을 본 금액을 차감해 주는 <strong>손익 통산</strong> 방식을 적용합니다. 또한, 모든 해외 주식 투자자에게는 연간 <strong>250만 원의 기본 공제</strong> 혜택이 주어집니다.</p>
      <p class="mb-6 leading-relaxed">즉, 1년 동안 A 종목에서 500만 원 수익을 보고, B 종목에서 200만 원 손실을 봤다면, 총 순수익은 300만 원이 됩니다. 여기서 기본 공제 250만 원을 뺀 나머지 50만 원에 대해서만 22%의 세금(약 11만 원)이 부과되는 구조입니다. 만약 합산 순수익이 250만 원 이하라면 납부할 세금은 없습니다(단, 신고 의무는 확인이 필요합니다).</p>

      <h3 class="text-2xl font-bold text-slate-900 mt-10 mb-4">3. 합리적인 세금 관리를 위한 절세의 관점</h3>
      <p class="mb-6 leading-relaxed">절세는 불법적인 탈세가 아니라, 정해진 제도를 충분히 활용하여 불필요한 지출을 줄이는 과정입니다. 가장 대표적인 방법은 연말(12월)에 보유 중인 손실 종목을 매도하여 <strong>실현 손익을 조정</strong>하는 것입니다. 이를 통해 해당 연도의 총 순수익 규모를 줄여 과세 표준을 낮출 수 있습니다. 매도 후 재매수를 하더라도 손실이 확정되어 세금 계산에 반영되기 때문입니다.</p>
      <p class="mb-6 leading-relaxed">또한, 환율 변동도 고려해야 합니다. 양도 차익은 매수 및 매도 시점의 <strong>원화 환산 금액</strong>을 기준으로 계산되므로, 주가가 그대로여도 환율이 올라 환차익이 발생했다면 세금이 늘어날 수 있음을 유의해야 합니다.</p>

      <hr class="border-slate-200 my-10" />

      <h3 class="text-2xl font-bold text-slate-900 mt-8 mb-4">결론: 투자자가 스스로 점검해야 할 기준</h3>
      <p class="mb-4 leading-relaxed">세금은 투자의 결과에 따라오는 자연스러운 의무입니다. 성공적인 투자를 위해 다음 사항을 점검해 보시기 바랍니다.</p>
      <ul class="list-disc list-inside space-y-3 text-slate-700 font-medium">
        <li><strong>세후 수익률 확인:</strong> 표면적인 수익이 아닌, 세금(22%)과 수수료를 제외한 실질 수익을 계산하고 있는가?</li>
        <li><strong>신고 기간 준수:</strong> 매년 5월 종합소득세 신고 기간에 맞춰 해외 주식 양도소득세 신고를 준비하고 있는가? (대부분의 증권사에서 무료 신고 대행 서비스를 제공합니다.)</li>
        <li><strong>제도의 변화 확인:</strong> 금융투자소득세 등 세법 개정 이슈가 있을 때마다 변경 사항을 체크하고 있는가?</li>
      </ul>
    `
  },
  {
    id: '7',
    category: Category.LOAN,
    title: '신용점수 관리의 정석: 등급을 올리는 5가지 실전 전략',
    summary: '대출 금리와 한도를 결정하는 금융 신분증, 신용점수. 체크카드 사용부터 비금융 정보 등록까지, 실질적인 점수 향상을 위한 행동 강령을 제시합니다.',
    imageUrl: 'https://picsum.photos/seed/credit1/800/600',
    date: '2023-10-18',
    author: '신용 관리자',
    tags: ['신용점수', '대출', '금리인하', '금융팁', '신용관리'],
    content: `
      <p class="mb-6 text-lg leading-relaxed">자본주의 사회에서 <strong>신용점수(Credit Score)</strong>는 보이지 않는 또 하나의 신분증입니다. 
      이는 대출 가능 여부와 금리를 결정하는 핵심 지표일 뿐만 아니라, 신용카드 발급이나 할부 거래 등 일상적인 금융 생활 전반에 막대한 영향을 미칩니다. 
      많은 분들이 대출을 받을 때가 되어서야 부랴부랴 신용점수를 확인하지만, 
      신용은 하루아침에 쌓이는 것이 아니라 오랜 기간의 <strong>신뢰(Trust)</strong>가 누적된 결과입니다. 
      오늘은 금융 이력이 부족한 사회초년생이나 점수 정체기에 빠진 분들을 위해, 
      지금 당장 실천 가능한 <strong>신용점수 향상 전략 5가지</strong>를 심층 분석합니다.</p>

      <h3 class="text-2xl font-bold text-slate-900 mt-10 mb-4">1. 체크카드의 꾸준한 사용 (금융 기초 체력 증명)</h3>
      <p class="mb-6 leading-relaxed">신용카드가 없으면 신용점수를 올리기 어렵다고 생각하기 쉽지만, 
      <strong>체크카드</strong> 사용 실적도 신용평가에 긍정적인 영향을 줍니다. 
      평가사(NICE, KCB)는 체크카드를 연체 없이 꾸준히 사용하는 것을 '건전한 지출 능력'으로 해석합니다. 
      <strong>월 30만 원 이상, 6개월 이상</strong> 지속적으로 사용하는 것이 핵심이며, 
      이는 빚을 내지 않고도 현금 흐름을 통제할 능력이 있음을 증명하는 가장 안전한 방법입니다.</p>

      <h3 class="text-2xl font-bold text-slate-900 mt-10 mb-4">2. 비금융 정보 등록 (성실 납부자 우대)</h3>
      <p class="mb-6 leading-relaxed">금융 거래 이력이 부족한 '씬 파일러(Thin Filer)'라면 이 방법을 반드시 활용해야 합니다. 
      <strong>통신비, 국민연금, 건강보험료, 아파트 관리비</strong> 등 비금융 공공요금을 
      6개월 이상 성실하게 납부한 내역을 신용평가사에 제출하면 가산점을 받을 수 있습니다. 
      과거에는 팩스로 서류를 보냈지만, 최근에는 토스, 카카오뱅크, KCB/NICE 앱 등을 통해 
      <strong>1분 만에 자동 제출</strong>이 가능하므로 지금 즉시 등록해 보시길 권장합니다.</p>

      <h3 class="text-2xl font-bold text-slate-900 mt-10 mb-4">3. 신용카드 한도 대비 사용률 관리</h3>
      <p class="mb-6 leading-relaxed">신용카드를 한도 끝까지 사용하는 것은 '자금 여력이 부족하다'는 부정적 신호(Signal)를 줍니다. 
      신용점수 관리를 위해서는 카드 한도의 <strong>30%~50% 수준</strong>으로 지출을 유지하는 것이 가장 이상적입니다. 
      만약 소비를 줄이기 어렵다면, 카드사에 요청하여 <strong>총 한도를 상향</strong>시키는 것도 하나의 전략입니다. 
      (예: 한도가 100만 원일 때 50만 원을 쓰는 것보다, 한도를 200만 원으로 늘리고 50만 원을 쓰는 것이 평가에 유리합니다.)</p>
      
      <h3 class="text-2xl font-bold text-slate-900 mt-10 mb-4">4. 절대적인 연체 방지 (자동이체 필수)</h3>
      <p class="mb-6 leading-relaxed">신용점수를 올리는 것보다 중요한 것은 떨어뜨리지 않는 것입니다. 
      <strong>단돈 10만 원을 5영업일 이상</strong> 연체해도 신용점수에 치명적인 타격을 주며, 
      이 기록은 상환 후에도 최대 5년간 남아 금융 거래를 방해합니다. 
      모든 카드 대금과 통신비, 대출 이자는 반드시 <strong>자동이체</strong>를 설정하고, 
      통장 잔고를 여유 있게 유지하여 실수로 인한 연체를 원천 차단해야 합니다.</p>

      <h3 class="text-2xl font-bold text-slate-900 mt-10 mb-4">5. 대출의 구조조정 (건수 줄이기)</h3>
      <p class="mb-6 leading-relaxed">대출이 있다고 해서 무조건 점수가 낮은 것은 아닙니다. 
      하지만 소액의 대출이 여러 금융사에 흩어져 있는 <strong>'다중 채무'</strong>는 매우 위험한 신호로 간주됩니다. 
      여유 자금이 생긴다면 대출 건수를 줄이는 방향으로 상환하십시오. 
      또한, 고금리 대출(현금서비스, 카드론, 2금융권)을 저금리 대출(1금융권)로 전환하는 
      <strong>대환 대출</strong>을 실행하면 부채의 질이 개선되어 신용점수가 상승할 수 있습니다.</p>

      <hr class="border-slate-200 my-10" />

      <h3 class="text-2xl font-bold text-slate-900 mt-8 mb-4">결론: 신용 관리는 마라톤이다</h3>
      <p class="mb-4 leading-relaxed">인터넷에 떠도는 '단기간 신용점수 급상승 비법' 같은 것은 존재하지 않습니다. 
      신용점수는 여러분의 금융 성실도를 나타내는 거울과 같습니다. 
      오늘 소개한 5가지 원칙을 일상에서 꾸준히 실천한다면, 
      시간은 걸리더라도 반드시 <strong>우량 신용 등급</strong>이라는 결실을 맺을 것입니다. 
      지금 바로 본인의 신용점수를 조회하는 것부터 시작해 보십시오. 
      (단순 조회는 신용점수에 아무런 영향을 주지 않습니다.)</p>
    `
  }
];