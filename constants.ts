import { Article, Category, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: '홈', path: '/', inMenu: true },
  { label: '금융가이드', path: '/finance-guide', inMenu: true }, // New Page
  { label: '대출가이드', path: '/loan-guide', inMenu: true },
  { label: '신용카드가이드', path: '/credit-card-guide', inMenu: true },
  { label: '주식투자가이드', path: '/investment-guide', inMenu: true },
  { label: '복지정책가이드', path: '/welfare-guide', inMenu: true },
  { label: '생활꿀팁가이드', path: '/life-hacks-guide', inMenu: true },
  { label: '블로그', path: '/blog', inMenu: true }, 
  // The following items are hidden from the menu but used for routing/categorization
  { label: '금융/재테크', path: '/finance', category: Category.FINANCE, inMenu: false },
  { label: '대출꿀팁', path: '/loan', category: Category.LOAN, inMenu: false },
  { label: '투자/주식', path: '/investment', category: Category.INVESTMENT, inMenu: false },
  { label: '복지/정책', path: '/welfare', category: Category.WELFARE, inMenu: false },
  { label: '생활꿀팁', path: '/life', category: Category.LIFE, inMenu: false },
];

export const INITIAL_ARTICLES: Article[] = [
  {
    id: '1',
    category: Category.LOAN,
    title: '급할 때 유용한 소액 비상금 대출 완벽 가이드',
    summary: '갑작스러운 현금이 필요할 때, 신용점수 영향 없이 안전하게 이용할 수 있는 소액 대출 상품과 주의사항을 정리해 드립니다.',
    imageUrl: 'https://picsum.photos/seed/loan1/800/600',
    date: '2023-10-24',
    author: '금융 에디터',
    tags: ['소액', '대출', '비상금', '모바일대출'],
    content: `
      <p class="mb-6 text-lg leading-relaxed">살다 보면 예기치 않게 급전이 필요한 순간이 찾아옵니다. 월급날은 아직 멀었는데 경조사비가 필요하거나, 갑작스러운 병원비가 발생했을 때 난감함을 느끼신 적이 있으실 겁니다. 이럴 때 유용하게 활용할 수 있는 것이 바로 <strong>'소액 비상금 대출'</strong>입니다.</p>
      
      <h3 class="text-2xl font-bold text-slate-900 mt-8 mb-4">비상금 대출이란 무엇인가요?</h3>
      <p class="mb-6 leading-relaxed">비상금 대출은 주로 1금융권 인터넷 전문은행(카카오뱅크, 토스뱅크, 케이뱅크 등)이나 시중 은행 앱을 통해 <strong>무서류, 무방문</strong>으로 300만 원 내외의 소액을 빌릴 수 있는 상품을 말합니다. 직업이나 소득 증빙이 어려운 주부, 대학생, 사회초년생도 통신사 신용등급(Telco Score)이나 서울보증보험의 보증을 통해 대출이 가능한 경우가 많습니다.</p>
      
      <h3 class="text-2xl font-bold text-slate-900 mt-8 mb-4">주요 특징 및 장점</h3>
      <ul class="list-disc list-inside mb-6 space-y-2 bg-slate-50 p-6 rounded-xl">
        <li><strong>간편함:</strong> 공인인증서나 휴대폰 본인인증만으로 5분 이내 신청 및 실행 가능</li>
        <li><strong>접근성:</strong> 1금융권 상품 이용 시 신용점수 하락 폭이 2금융권 대비 적음</li>
        <li><strong>마이너스 통장 방식:</strong> 한도 내에서 쓴 만큼만 이자를 내는 방식 선택 가능</li>
      </ul>

      <h3 class="text-2xl font-bold text-slate-900 mt-8 mb-4">신청 전 꼭 확인해야 할 주의사항</h3>
      <p class="mb-6 leading-relaxed">아무리 소액이라도 대출은 대출입니다. 연체가 발생할 경우 신용점수에 치명적인 영향을 줄 수 있으며, 향후 주택담보대출이나 전세자금대출 등 큰 자금이 필요할 때 불이익을 받을 수 있습니다.</p>
      <p class="mb-6 leading-relaxed">또한, <strong>금리 비교</strong>는 필수입니다. 최근 금리 인상 기조로 인해 비상금 대출의 금리도 5%~10% 사이로 다양하게 형성되어 있습니다. 주거래 은행 우대 금리를 챙기거나, 여러 은행의 금리를 비교해보고 가장 유리한 조건을 선택하시기 바랍니다.</p>
      
      <div class="bg-blue-50 border-l-4 border-blue-600 p-4 mt-8">
        <p class="font-bold text-blue-900">💡 팁: 거절 시 대안은?</p>
        <p class="text-blue-800 text-sm mt-1">1금융권 부결 시, 2금융권(저축은행, 카드론)보다는 '햇살론 유스'나 '햇살론15' 같은 정부지원 서민금융상품을 먼저 알아보는 것이 신용 관리에 유리합니다.</p>
      </div>
    `
  },
  {
    id: '2',
    category: Category.LIFE,
    title: '잠자는 신용카드 포인트, 100% 현금화 하는 방법',
    summary: '매년 소멸되는 카드 포인트가 수천억 원에 달합니다. 흩어진 포인트를 모아 내 계좌로 즉시 현금화하는 꿀팁을 공개합니다.',
    imageUrl: 'https://picsum.photos/seed/card1/800/600',
    date: '2023-10-23',
    author: '생활의 달인',
    tags: ['신용카드', '현금화', '포인트', '재테크'],
    content: `
      <p class="mb-6 text-lg leading-relaxed">지갑 속에 있는 수많은 신용카드, 그 안에 잠들어 있는 포인트가 얼마나 되는지 알고 계신가요? 금융감독원에 따르면 매년 주인을 찾지 못하고 소멸되는 포인트가 무려 <strong>1,000억 원</strong>에 달한다고 합니다. 오늘은 이 아까운 포인트를 1원 한 푼 남김없이 내 통장으로 <strong>현금화(계좌입금)</strong>하는 방법을 알려드립니다.</p>

      <h3 class="text-2xl font-bold text-slate-900 mt-8 mb-4">여신금융협회 통합 조회 시스템 활용하기</h3>
      <p class="mb-6 leading-relaxed">과거에는 카드사 홈페이지마다 일일이 접속해서 포인트를 확인해야 했지만, 이제는 <strong>'여신금융협회 카드포인트 통합조회'</strong> 서비스를 통해 모든 카드사의 포인트를 한눈에 보고 즉시 입금 신청할 수 있습니다.</p>
      
      <ol class="list-decimal list-inside mb-6 space-y-4">
        <li class="pl-2"><span class="font-bold">여신금융협회 홈페이지 접속:</span> 모바일 앱이나 웹사이트에 접속하여 '통합조회/계좌입금' 메뉴를 선택합니다.</li>
        <li class="pl-2"><span class="font-bold">본인 인증:</span> 휴대폰이나 아이핀 등을 통해 본인 인증을 진행합니다.</li>
        <li class="pl-2"><span class="font-bold">포인트 조회:</span> 위임 동의 후 조회를 누르면 내가 가진 모든 카드의 잔여 포인트가 표시됩니다.</li>
        <li class="pl-2"><span class="font-bold">계좌 입금 신청:</span> '포인트 계좌입금' 버튼을 누르고 입금받을 본인 명의 계좌를 입력하면 끝! 대부분 실시간으로 입금됩니다.</li>
      </ol>

      <h3 class="text-2xl font-bold text-slate-900 mt-8 mb-4">현금화가 불가능한 포인트는?</h3>
      <p class="mb-6 leading-relaxed">대부분의 대표 포인트(현대 M포인트, 삼성 보너스포인트 등)는 1:1 비율(또는 특정 비율)로 현금화가 가능하지만, 특정 제휴 포인트나 이벤트성 적립금은 현금화가 제한될 수 있습니다. 이런 경우에는 카드사 쇼핑몰에서 생필품을 구매하거나, 연회비 결제에 활용하는 것이 좋습니다.</p>
    `
  },
  {
    id: '3',
    category: Category.INVESTMENT,
    title: '초보자를 위한 안전한 주식 투자 포트폴리오 구성법',
    summary: '변동성이 큰 시장에서도 흔들리지 않는 자산 배분 전략. ETF와 배당주를 활용한 월 현금 흐름 만들기.',
    imageUrl: 'https://picsum.photos/seed/stock1/800/600',
    date: '2023-10-22',
    author: '투자 분석가',
    tags: ['투자', '주식', 'ETF', '자산관리'],
    content: `
      <p class="mb-6 text-lg leading-relaxed">주식 투자를 시작하고 싶지만 원금 손실에 대한 두려움 때문에 망설이고 계신가요? 투자의 대가들은 입을 모아 <strong>'계란을 한 바구니에 담지 말라'</strong>고 조언합니다. 오늘은 초보자도 마음 편히 시작할 수 있는 안전한 포트폴리오 구성법에 대해 이야기해 보겠습니다.</p>
      
      <h3 class="text-2xl font-bold text-slate-900 mt-8 mb-4">1. 지수를 추종하는 ETF에 주목하라</h3>
      <p class="mb-6 leading-relaxed">개별 기업 분석이 어렵다면 시장 전체에 투자하는 <strong>ETF(상장지수펀드)</strong>가 정답입니다. S&P500이나 나스닥100과 같은 미국의 대표 지수를 추종하는 ETF를 매달 적립식으로 모아가세요. 장기적으로 우상향하는 시장의 수익률을 그대로 가져갈 수 있습니다.</p>
      
      <h3 class="text-2xl font-bold text-slate-900 mt-8 mb-4">2. 배당주로 현금 흐름 만들기</h3>
      <p class="mb-6 leading-relaxed">주가가 오르지 않아도 통장에 꽂히는 현금이 있다면 버틸 수 있는 힘이 생깁니다. 분기마다, 혹은 매달 배당을 지급하는 <strong>배당 성장주</strong>(예: 코카콜라, 리얼티인컴 등)를 포트폴리오의 30% 정도 편입하세요. 배당금 재투자는 복리 효과의 핵심입니다.</p>
    `
  },
  {
    id: '4',
    category: Category.WELFARE,
    title: '놓치면 손해 보는 2024년 정부 지원금 및 복지 정책',
    summary: '청년, 신혼부부, 소상공인을 위한 정부의 숨은 지원금 정책 총정리. 신청 조건과 방법을 확인하세요.',
    imageUrl: 'https://picsum.photos/seed/welfare1/800/600',
    date: '2023-10-21',
    author: '복지 알리미',
    tags: ['복지', '정책', '지원금', '정부정책'],
    content: `
      <p class="mb-6 text-lg leading-relaxed">정부에서는 매년 다양한 복지 정책을 쏟아내지만, 홍보 부족이나 복잡한 신청 절차 때문에 몰라서 못 받는 지원금이 수두룩합니다. 2024년에 신설되거나 확대되는 주요 정책들을 정리해 드립니다.</p>
      
      <h3 class="text-2xl font-bold text-slate-900 mt-8 mb-4">청년을 위한 혜택</h3>
      <p class="mb-6 leading-relaxed"><strong>청년도약계좌:</strong> 5년 동안 매달 일정 금액을 적금하면 정부 기여금과 비과세 혜택을 더해 목돈을 마련해주는 정책입니다. 소득 요건이 완화되었으니 꼭 확인해 보세요.</p>
      
      <h3 class="text-2xl font-bold text-slate-900 mt-8 mb-4">부모 급여 확대</h3>
      <p class="mb-6 leading-relaxed">출산 가정의 양육 부담을 덜기 위해 만 0세 아동에게는 월 100만 원, 만 1세 아동에게는 월 50만 원의 부모 급여가 지급됩니다. 이는 기존 영아수당이 확대 개편된 것입니다.</p>
    `
  },
  {
    id: '5',
    category: Category.FINANCE,
    title: '사회초년생을 위한 월급 관리 및 통장 쪼개기 비법',
    summary: '월급이 스쳐 지나가지 않도록 시스템을 만드는 통장 쪼개기 노하우와 목돈 만들기 플랜.',
    imageUrl: 'https://picsum.photos/seed/finance1/800/600',
    date: '2023-10-20',
    author: '재무 설계사',
    tags: ['재테크', '금융', '통장쪼개기', '저축'],
    content: `
      <p class="mb-6 text-lg leading-relaxed">첫 월급의 설렘도 잠시, 카드 값과 각종 공과금이 빠져나가고 나면 통장은 '텅장'이 되기 일쑤입니다. 재테크의 기본은 버는 것보다 <strong>지키는 것</strong>에서 시작합니다. 가장 고전적이면서도 강력한 방법인 '통장 쪼개기'를 실천해 보세요.</p>
      
      <h3 class="text-2xl font-bold text-slate-900 mt-8 mb-4">통장 4개 만들기</h3>
      <ul class="list-disc list-inside mb-6 space-y-2 bg-slate-50 p-6 rounded-xl">
        <li><strong>급여 통장:</strong> 월급이 들어오고 고정 지출(월세, 보험료 등)이 빠져나가는 통장</li>
        <li><strong>소비 통장:</strong> 한 달 생활비(식비, 교통비)를 체크카드와 연동해 넣어두고 쓰는 통장</li>
        <li><strong>비상금 통장:</strong> 월급의 5~10%를 적립하여 경조사나 병원비 등 예기치 못한 지출 대비 (CMA 추천)</li>
        <li><strong>투자 통장:</strong> 적금,펀드 등 목적 자금을 모으는 통장</li>
      </ul>
    `
  },
  {
    id: '6',
    category: Category.INVESTMENT,
    title: '미국 주식 투자, 세금 폭탄 피하는 절세 전략',
    summary: '해외 주식 투자로 수익이 났다면 양도소득세를 챙겨야 합니다. 250만 원 공제부터 환율 효과까지 똑똑하게 세금 아끼는 법.',
    imageUrl: 'https://picsum.photos/seed/stock2/800/600',
    date: '2023-10-19',
    author: '세무 전문가',
    tags: ['주식', '미국주식', '세금', '절세'],
    content: `<p>해외 주식 투자가 늘어나면서 양도소득세에 대한 관심도 높아지고 있습니다. 매년 1월 1일부터 12월 31일까지 발생한 수익 중 250만 원을 초과하는 금액에 대해 22%의 세금이 부과됩니다.</p>`
  },
  {
    id: '7',
    category: Category.LOAN,
    title: '신용점수 올리기, 지금 당장 실천할 수 있는 5가지',
    summary: '대출 금리를 낮추기 위한 필수 조건인 신용점수. 카드 사용 습관부터 공공요금 납부 실적 등록까지 점수 올리는 팁.',
    imageUrl: 'https://picsum.photos/seed/credit1/800/600',
    date: '2023-10-18',
    author: '신용 관리자',
    tags: ['신용점수', '대출', '금리인하', '금융팁'],
    content: `<p>신용점수는 하루아침에 오르지 않지만, 꾸준한 관리로 분명히 개선할 수 있습니다. 체크카드를 꾸준히 사용하고(월 30만 원 이상, 6개월), 통신비나 공공요금 납부 실적을 신용평가사에 제출하는 것만으로도 가산점을 받을 수 있습니다.</p>`
  }
];