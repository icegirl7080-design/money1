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
    id: '13',
    slug: 'google-info-fee-cash-truth',
    category: Category.FINANCE,
    title: '구글정보이용료현금화의 실체: 수수료 40%의 진실과 계정 정지 리스크',
    summary: '휴대폰 소액결제 한도가 막혔을 때 찾는 마지막 수단, 정보이용료(콘텐츠이용료). 왜 수수료가 비정상적으로 높은지, 그리고 구글 계정 영구 정지라는 치명적 위험을 피하는 방법은 무엇인지 분석합니다.',
    imageUrl: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=800&auto=format&fit=crop',
    date: '2023-11-30',
    author: '금융 에디터',
    tags: ['구글정보이용료', '콘텐츠이용료', '정보이용료현금화', '구글깡', '리니지m', '소액결제'],
    content: `
      <p class="mb-6 text-lg leading-relaxed">
        신용카드 한도가 차고, 통신사 소액결제 정책마저 '차단'이나 '한도 초과'로 막혔을 때, 급전이 필요한 사람들이 마지막으로 문을 두드리는 곳이 있습니다. 바로 <strong>구글정보이용료현금화</strong>(일명 '콘텐츠이용료' 현금화) 시장입니다.
      </p>
      <p class="mb-6 text-lg leading-relaxed">
        이 방식은 통신사의 일반 소액결제 한도와는 별도로 부여되는 '구글 플레이스토어 결제 한도'를 이용하기 때문에, 금융 사각지대에서 널리 이용되고 있습니다. 하지만 접근성이 좋은 만큼, 그 대가는 혹독합니다. 평균 40~50%에 달하는 살인적인 수수료와 구글 계정 영구 정지라는 리스크가 도사리고 있기 때문입니다. 본 글에서는 정보이용료 시장의 기형적인 구조와 금융 소비자가 반드시 인지해야 할 위험성을 파헤칩니다.
      </p>

      <div class="my-8 rounded-2xl overflow-hidden shadow-lg border border-slate-100">
        <div class="bg-slate-200 aspect-video flex items-center justify-center relative">
           <img src="https://images.unsplash.com/photo-1616077168079-7e09a677fb2c?q=80&w=800&auto=format&fit=crop" alt="스마트폰을 보며 고민하는 모습" class="absolute inset-0 w-full h-full object-cover" />
           <div class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-6">
             <p class="font-bold text-white mb-1">한도 부족과 결제 오류</p>
             <p class="text-xs text-slate-300">유동성이 막힌 상황에서의 위험한 선택</p>
           </div>
        </div>
      </div>

      <div class="bg-slate-50 border-l-4 border-slate-900 p-6 mb-10 rounded-r-xl">
        <strong class="block text-slate-900 text-lg mb-2">💡 이 글의 핵심 포인트</strong>
        <ul class="list-disc list-inside space-y-1 text-slate-700">
          <li>소액결제(물품)와 정보이용료(콘텐츠)의 결정적 차이</li>
          <li>수수료가 40% 이상으로 책정되는 구조적 원인 (구글세 30%)</li>
          <li>'구글 깡' 시도가 계정 및 통신 정지로 이어지는 과정</li>
          <li>안전한 자금 마련을 위한 현실적 대안</li>
        </ul>
      </div>

      <h2 class="text-2xl font-bold text-slate-900 mt-12 mb-4">1. 정보이용료(콘텐츠이용료)란 무엇인가?</h2>
      <p class="mb-6 leading-relaxed">
        많은 분들이 '휴대폰 소액결제'와 '정보이용료'를 혼동합니다. 하지만 통신사 고지서에는 이 둘이 명확히 구분되어 청구됩니다.
      </p>
      <ul class="list-disc list-inside space-y-4 text-slate-700 mb-8 ml-2">
        <li><strong>소액결제:</strong> 쇼핑몰 물품 구매, 배달 음식 결제 등 '실물 재화'나 '서비스'를 구매하는 한도입니다. (최대 100만 원)</li>
        <li><strong>정보이용료(콘텐츠이용료):</strong> 구글 플레이스토어, 원스토어, 애플 앱스토어 내에서 게임 아이템, 유료 앱, 이모티콘 등 '디지털 콘텐츠'를 구매하는 한도입니다. (최대 100만 원 별도 부여)</li>
      </ul>
      <p class="mb-6 leading-relaxed">
        즉, 쇼핑몰 결제가 막혀도 구글 게임 아이템 결제는 가능한 경우가 많아, 이를 현금화의 루트로 삼는 것입니다. 대표적으로 '리니지M 다이아' 같은 환금성 높은 게임 재화를 구매해 되파는 방식이 사용됩니다.
      </p>

      <h2 class="text-2xl font-bold text-slate-900 mt-12 mb-4">2. 왜 수수료가 40%~50%인가? (살인적인 비용 구조)</h2>
      <p class="mb-6 leading-relaxed">
        상품권 현금화 수수료가 보통 10~15%인 것에 비해, 정보이용료 현금화는 <strong>최소 40% 이상의 수수료</strong>를 떼어갑니다. 10만 원을 결제하면 내 손에 쥐는 돈은 5~6만 원에 불과합니다. 도대체 왜 이렇게 비싼 걸까요? 여기에는 '구글세(Google Tax)'가 숨어 있습니다.
      </p>
      <p class="mb-6 leading-relaxed">
        구글은 플레이스토어 내 결제 금액의 <strong>30%</strong>를 플랫폼 수수료로 가져갑니다. 
        즉, 11만 원(VAT 포함)을 결제해서 아이템을 사더라도, 게임사가 가져가는 돈은 약 7만 원 수준입니다. 
        여기에 매입 업체의 마진과 환전 리스크 비용이 더해지면서, 소비자가 부담해야 할 최종 수수료는 눈덩이처럼 불어나는 것입니다. 이는 금융 상품이 아니라, 자산을 반토막 내는 행위입니다.
      </p>

      <h2 class="text-2xl font-bold text-slate-900 mt-12 mb-4">3. 구글 계정 영구 정지와 통신 정지의 공포</h2>
      <p class="mb-6 leading-relaxed">
        비싼 수수료보다 더 무서운 것은 <strong>계정 제재</strong>입니다. 구글은 AI 기반의 FDS(부정결제탐지시스템)를 통해 비정상적인 결제 패턴을 실시간으로 감시합니다.
        평소 게임을 하지 않던 계정에서 갑자기 고액의 아이템이 결제되거나, 결제 직후 아이템이 이동하는 정황이 포착되면 구글은 해당 계정을 즉시 <strong>'결제 차단'</strong>하거나 <strong>'영구 정지'</strong> 시킵니다.
      </p>
      <p class="mb-6 leading-relaxed">
        계정이 정지되면 해당 계정에 연동된 모든 이메일, 사진, 연락처, 드라이브 자료를 잃게 됩니다. 또한, 통신사는 정보이용료 미납 발생 시 일반 통신 요금 미납보다 더 빠르게 발신 정지 및 직권 해지 조치를 취하는 경향이 있습니다. 스마트폰이 정지되면 본인 인증이 불가능해져 현대 사회에서 사실상 고립됩니다.
      </p>

      <h2 class="text-2xl font-bold text-slate-900 mt-12 mb-4">4. 올바른 대안: 유동성 위기 탈출법</h2>
      <p class="mb-6 leading-relaxed">
        정보이용료 현금화는 '이자율 500% 이상의 초고금리 사채'를 쓰는 것과 같습니다. 이 늪에 빠지기 전에 합법적이고 안전한 대안을 먼저 확인해야 합니다.
      </p>
      <ul class="list-disc list-inside space-y-4 text-slate-700 mb-8 ml-2">
        <li><strong>통신사 비상금 대출:</strong> 통신 3사(SKT, KT, LG U+) 이용자라면 통신 등급을 활용한 1금융권(핀크, 농협 올원 등) 비상금 대출을 이용할 수 있습니다. 수수료 없이 법정 금리 내에서 안전하게 이용 가능합니다.</li>
        <li><strong>서민금융진흥원 긴급생계비:</strong> 신용점수가 낮아도 국가에서 지원하는 소액생계비대출(최대 100만 원)은 당일 대출이 가능할 수 있습니다.</li>
        <li><strong>신용회복위원회 상담:</strong> 이미 돌려막기 중이라면, 더 큰 빚을 내기 전에 채무 조정 상담을 받는 것이 유일한 살길입니다.</li>
      </ul>

      <hr class="border-slate-200 my-10" />

      <h3 class="text-2xl font-bold text-slate-900 mt-8 mb-4">결론: 스마트폰은 지갑이 아닙니다</h3>
      <p class="mb-4 leading-relaxed">
        <strong>구글정보이용료현금화</strong>는 당장의 10만 원을 위해 다음 달의 20만 원과 나의 디지털 신원을 담보로 잡히는 위험한 도박입니다.
        "한 번만 쓰고 갚으면 되겠지"라는 생각은 계정 정지와 통신 불량자로 가는 지름길입니다.
        부디 비정상적인 방법보다는, 제도권 내의 안전한 금융망을 통해 위기를 현명하게 극복하시길 바랍니다.
      </p>
    `
  },
  {
    id: '12',
    slug: 'credit-card-cash-liquidation-truth',
    category: Category.FINANCE,
    title: '신용카드현금화의 두 얼굴: 합법적 포인트 전환과 불법 융통의 경계',
    summary: '신용카드 현금화는 자산 관리의 꿀팁일 수도, 신용 불량으로 가는 지름길일 수도 있습니다. 여신금융협회 포인트 현금화부터 카드깡의 위험성까지, 금융 소비자가 반드시 알아야 할 구조적 진실을 분석합니다.',
    imageUrl: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?q=80&w=800&auto=format&fit=crop',
    date: '2023-11-25',
    author: '금융 에디터',
    tags: ['신용카드현금화', '카드깡', '신용카드포인트', '상테크', '금융사기', '신용등급'],
    content: `
      <p class="mb-6 text-lg leading-relaxed">
        월말이 다가오면 부족한 생활비나 급한 카드 대금을 막기 위해 '현금'을 찾는 수요가 급증합니다. 이때 많은 분들이 검색창에 입력하게 되는 키워드가 바로 <strong>신용카드현금화</strong>입니다.
      </p>
      <p class="mb-6 text-lg leading-relaxed">
        하지만 이 단어는 금융 시장에서 매우 이중적인 의미를 가집니다. 한쪽에서는 잠자고 있는 카드 포인트를 현금으로 바꾸는 <strong>스마트한 재테크</strong>를 의미하지만, 다른 한쪽에서는 높은 수수료를 물고 미래의 신용을 팔아넘기는 <strong>불법 사금융(카드깡)</strong>을 뜻하기도 합니다.
        단순히 "돈을 구한다"는 목적은 같지만, 그 결과는 천양지차입니다. 본 글에서는 신용카드 현금화의 구조를 명확히 파헤치고, 합법과 불법의 경계에서 소비자가 취해야 할 올바른 포지션을 제시합니다.
      </p>

      <div class="my-8 rounded-2xl overflow-hidden shadow-lg border border-slate-100">
        <div class="aspect-video relative">
           <img src="https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=800&auto=format&fit=crop" alt="카드 결제 단말기와 신용카드" class="absolute inset-0 w-full h-full object-cover" />
           <div class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-6">
             <p class="font-bold text-white mb-1">편리함의 대가</p>
             <p class="text-xs text-slate-200">높은 수수료 구조를 주의해야 합니다</p>
           </div>
        </div>
      </div>

      <div class="bg-slate-50 border-l-4 border-slate-900 p-6 mb-10 rounded-r-xl">
        <strong class="block text-slate-900 text-lg mb-2">💡 이 글의 핵심 포인트</strong>
        <ul class="list-disc list-inside space-y-1 text-slate-700">
          <li>'현금화'의 두 가지 유형: 자산 유동화 vs 부채 돌려막기</li>
          <li>불법 카드깡이 신용점수를 파괴하는 메커니즘</li>
          <li>여신금융협회를 통한 합법적 포인트 현금화 방법</li>
          <li>상품권 재테크(상테크)의 구조와 주의사항</li>
        </ul>
      </div>

      <h2 class="text-2xl font-bold text-slate-900 mt-12 mb-4">1. 신용카드현금화의 정의: 유동성 확보인가, 빚인가?</h2>
      <p class="mb-6 leading-relaxed">
        금융 관점에서 신용카드현금화는 <strong>'카드의 잔여 한도나 적립된 가치를 유동성 있는 현금으로 전환하는 행위'</strong>를 총칭합니다. 이는 크게 두 가지 성격으로 나뉩니다.
      </p>
      <div class="grid md:grid-cols-2 gap-6 mb-8">
        <div class="bg-blue-50 p-5 rounded-xl border border-blue-100">
          <strong class="block text-blue-800 mb-2">① 합법적 자산 유동화</strong>
          <p class="text-sm text-slate-700">카드 사용으로 적립된 포인트, 캐시백, 혹은 구매한 유가증권(상품권 등)을 정해진 절차에 따라 현금으로 교환하는 것입니다. 이는 소비자의 <strong>정당한 권리 행사</strong>입니다.</p>
        </div>
        <div class="bg-red-50 p-5 rounded-xl border border-red-100">
          <strong class="block text-red-800 mb-2">② 불법적 자금 융통 (카드깡)</strong>
          <p class="text-sm text-slate-700">실제 물품 구매 없이 허위 매출을 일으키거나, 물건을 구매한 뒤 즉시 되팔아 현금을 마련하는 행위입니다. 이는 여신전문금융업법 위반이며 실질적인 <strong>고금리 사채</strong>입니다.</p>
        </div>
      </div>

      <h2 class="text-2xl font-bold text-slate-900 mt-12 mb-4">2. 왜 위험한가? 불법 현금화의 치명적 리스크</h2>
      <p class="mb-6 leading-relaxed">
        급전이 필요한 사람들에게 "카드 한도만 있으면 즉시 입금"이라는 광고는 달콤하게 들립니다. 하지만 이 방식의 이면에는 개인 금융을 파탄으로 이끄는 구조적 함정이 존재합니다.
      </p>

      <h3 class="text-xl font-bold text-slate-800 mt-6 mb-3">① 살인적인 수수료 (이자율의 함정)</h3>
      <p class="mb-4 leading-relaxed">
        업체들은 보통 결제 금액의 15%~25%를 수수료로 떼고 나머지 금액을 입금해줍니다. 
        만약 100만 원을 결제하고 80만 원을 받았다면, 당장 손에 쥐는 돈은 80만 원이지만 다음 달에 갚아야 할 돈은 100만 원입니다. 
        이는 월 이자 25%에 해당하며, <strong>연 이자율로 환산하면 300%</strong>가 넘는 초고금리입니다. 법정 최고 금리(연 20%)를 수십 배 초과하는 비용을 지불하는 셈입니다.
      </p>

      <h3 class="text-xl font-bold text-slate-800 mt-6 mb-3">② 금융 질서 문란자 등록과 신용 거래 정지</h3>
      <p class="mb-4 leading-relaxed">
        카드사의 FDS(이상거래탐지시스템)는 이러한 비정상적인 결제 패턴을 실시간으로 감시합니다. 적발될 경우, 해당 카드는 정지되며 <strong>'금융 질서 문란자'</strong>로 등록될 수 있습니다. 
        이 기록은 전 금융권에 공유되어 최장 12년 동안 대출, 카드 발급 등 모든 금융 거래가 제한됩니다. 단순한 신용점수 하락을 넘어, 사회적 경제 활동이 불가능해지는 결과를 초래합니다.
      </p>

      <h2 class="text-2xl font-bold text-slate-900 mt-12 mb-4">3. 합법적이고 안전한 현금화 전략</h2>
      <p class="mb-6 leading-relaxed">
        리스크 없이 안전하게 신용카드의 가치를 현금으로 바꾸는 방법은 분명 존재합니다. 제도권 내의 서비스를 적극 활용해야 합니다.
      </p>

      <h3 class="text-xl font-bold text-slate-800 mt-6 mb-3">✅ 여신금융협회 카드포인트 통합조회</h3>
      <p class="mb-4 leading-relaxed">
        많은 분들이 포인트는 '물건 살 때 할인받는 것' 정도로 생각합니다. 하지만 2021년부터 <strong>모든 카드사의 포인트를 1:1 비율로 본인 계좌에 현금 입금</strong>할 수 있는 시스템이 구축되었습니다.
        <br/>
        여신금융협회 웹사이트나 앱을 통해 한 번의 인증으로 숨어있는 포인트를 조회하고, 즉시 현금화할 수 있습니다. 이는 카드사의 혜택이 아닌, 여러분의 자산을 찾는 과정입니다.
      </p>

      <h3 class="text-xl font-bold text-slate-800 mt-6 mb-3">✅ 상품권 재테크 (상테크)의 이해</h3>
      <p class="mb-4 leading-relaxed">
        일부 금융 고수들은 온라인 쇼핑몰에서 할인된 가격(예: 46,000원)에 5만 원권 상품권을 구매한 뒤, 이를 간편결제 포인트(네이버페이, 페이코 등)로 전환하고 다시 환급받는 방식을 사용합니다. 
        이를 통해 카드 실적을 채우고 소액의 차익을 얻기도 합니다.
        <br/><br/>
        단, 이 방법은 <strong>월 한도(보통 100~200만 원)</strong>가 있고, 환급 수수료(8%)를 계산해야 손해를 보지 않습니다. 무리하게 진행할 경우 오히려 수수료 손실이 발생할 수 있으므로 철저한 계산이 필요합니다.
      </p>

      <hr class="border-slate-200 my-10" />

      <h3 class="text-2xl font-bold text-slate-900 mt-8 mb-4">결론: 편리함에 미래를 저당 잡히지 마십시오</h3>
      <p class="mb-4 leading-relaxed">
        <strong>신용카드현금화</strong>는 양날의 검입니다. 제도권 안에서 포인트나 실적을 활용해 현금 흐름을 만드는 것은 현명한 재테크지만, 당장의 급전을 위해 미래의 소득을 헐값에 파는 '깡'은 파멸의 시작입니다.
      </p>
      <p class="mb-4 leading-relaxed text-slate-600">
        만약 대출 상환이나 생활비 문제로 현금화 유혹을 느끼고 있다면, 불법 업체를 찾기 전에 <strong>서민금융진흥원</strong>의 저금리 대출 상품이나 <strong>신용회복위원회</strong>의 채무조정 제도를 먼저 알아보는 것이 순서입니다. 
        순간의 선택이 10년의 금융 생활을 좌우한다는 사실을 잊지 마시기 바랍니다.
      </p>
    `
  },
  {
    id: '11',
    slug: 'micropayment-cash-liquidity-truth',
    category: Category.FINANCE,
    title: '소액결제현금화의 구조적 이해와 금융 소비자가 알아야 할 진실',
    summary: '급전이 필요할 때 검색하게 되는 소액결제현금화. 단순한 현금 마련 수단으로 접근하면 위험합니다. 그 이면에 숨겨진 수수료 구조와 신용상의 리스크, 그리고 안전한 대안까지 심층 분석합니다.',
    imageUrl: 'https://images.unsplash.com/photo-1512428559087-560fa5ce7d87?q=80&w=800&auto=format&fit=crop',
    date: '2023-11-20',
    author: '금융 에디터',
    tags: ['소액결제현금화', '재테크', '금융상식', '신용관리', '현금유동성', '급전'],
    content: `
      <p class="mb-6 text-lg leading-relaxed">
        살다 보면 누구나 예기치 않게 현금 유동성이 막히는 순간을 마주합니다. 신용카드 한도는 꽉 찼고, 대출 심사는 길어질 때, 많은 분들이 스마트폰 하나로 해결할 수 있는 방법으로 시선을 돌립니다. 바로 <strong>소액결제현금화</strong>입니다.
      </p>
      <p class="mb-6 text-lg leading-relaxed">
        하지만 이 용어는 금융 시장에서 가장 오해받고 있으며, 동시에 가장 주의 깊게 다뤄져야 할 개념 중 하나입니다. 단순히 "핸드폰으로 돈을 구한다"는 표면적인 기능 뒤에는, <strong>높은 기회비용과 신용상의 리스크</strong>가 숨어 있기 때문입니다. 본 글에서는 금융 소비자의 관점에서 소액결제현금화가 실제로 어떻게 작동하는지, 그리고 이것이 개인의 재무 건전성에 어떤 영향을 미치는지 구조적으로 파헤쳐봅니다.
      </p>

      <div class="my-8 rounded-2xl overflow-hidden shadow-lg border border-slate-100">
        <div class="aspect-video relative">
           <img src="https://images.unsplash.com/photo-1556745757-8d76bdb6984b?q=80&w=800&auto=format&fit=crop" alt="스마트폰을 이용한 금융 거래" class="absolute inset-0 w-full h-full object-cover" />
           <div class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-6">
             <p class="font-bold text-white mb-1">모바일 소액결제</p>
             <p class="text-xs text-slate-200">편리함 뒤에 숨겨진 높은 수수료</p>
           </div>
        </div>
      </div>

      <div class="bg-slate-50 border-l-4 border-slate-900 p-6 mb-10 rounded-r-xl">
        <strong class="block text-slate-900 text-lg mb-2">💡 이 글의 핵심 포인트</strong>
        <ul class="list-disc list-inside space-y-1 text-slate-700">
          <li>통신사 소액결제를 이용한 자산 유동화의 기본 메커니즘</li>
          <li>수수료와 할인율이 개인 자산에 미치는 마이너스 효과</li>
          <li>제도권 금융(비상금 대출)과의 비교 및 올바른 대안</li>
          <li>불법 업체를 피하고 신용을 지키는 기준</li>
        </ul>
      </div>

      <h2 class="text-2xl font-bold text-slate-900 mt-12 mb-4">1. 소액결제현금화란 무엇인가? (개념과 메커니즘)</h2>
      <p class="mb-6 leading-relaxed">
        <strong>소액결제현금화</strong>는 법률적인 금융 용어라기보다, 시장에서 자연스럽게 파생된 거래 형태를 지칭합니다. 기본적으로 이동통신사가 제공하는 '휴대폰 소액결제 한도(보통 월 30만 원~100만 원)'를 이용해 환금성이 높은 모바일 상품권이나 게임 아이템 등을 구매한 뒤, 이를 제3자에게 판매하여 현금을 확보하는 방식을 말합니다.
      </p>
      <p class="mb-6 leading-relaxed">
        엄밀히 말하면 이는 대출이 아닙니다. '물품 구매'와 '중고 판매'가 결합된 형태입니다. 하지만 자금을 융통하는 사용자 입장에서는 <strong>"다음 달 통신 요금에 합산 청구될 미래의 돈을 당겨서 현재의 현금으로 바꾸는 행위"</strong>이므로, 실질적인 단기 차입(Short-term Borrowing)의 성격을 가집니다.
      </p>

      <h2 class="text-2xl font-bold text-slate-900 mt-12 mb-4">2. 왜 위험한가? 숨겨진 비용과 리스크 구조</h2>
      <p class="mb-6 leading-relaxed">
        급전이 필요할 때 간편함은 큰 유혹입니다. 하지만 그 편리함에는 반드시 대가가 따릅니다. 소액결제현금화를 고려하기 전, 반드시 다음의 리스크 구조를 이해해야 합니다.
      </p>

      <h3 class="text-xl font-bold text-slate-800 mt-6 mb-3">① 살인적인 수수료율 (Disount Rate)</h3>
      <p class="mb-4 leading-relaxed">
        10만 원짜리 상품권을 소액결제로 구매해서 되팔 때, 10만 원을 그대로 받을 수 있을까요? 불가능합니다. 매입 업체나 중개 사이트는 일정 비율의 수수료를 떼고 매입합니다.
        보통 시장에서 형성된 수수료율은 10%에서 많게는 30%에 달합니다. 
        <br/><br/>
        예를 들어, 현금 70만 원을 손에 쥐기 위해 100만 원을 결제해야 한다면, 이는 <strong>월 이자율 30%</strong>에 해당합니다. 연 이자율로 환산하면 법정 최고 금리를 훌쩍 뛰어넘는 고금리 사채와 다를 바 없습니다. 이는 자산 증식은커녕 자산을 갉아먹는 최악의 선택입니다.
      </p>

      <h3 class="text-xl font-bold text-slate-800 mt-6 mb-3">② 통신 연체와 직결되는 신용 하락</h3>
      <p class="mb-4 leading-relaxed">
        소액결제 대금은 다음 달 휴대폰 요금에 합산되어 나옵니다. 문제는 급전이 필요할 정도로 자금 사정이 좋지 않은 상태에서, 다음 달에 평소보다 훨씬 많은 통신비를 감당할 수 있느냐는 것입니다.
        <br/><br/>
        통신 요금 미납은 처음에는 통신사의 발신 정지로 시작되지만, 장기화될 경우 <strong>채무불이행 정보</strong>가 신용평가사에 등록될 수 있습니다. 
        "고작 핸드폰 요금 안 낸 것"이라고 생각하다가, 나중에 전세자금 대출이나 주택 담보 대출이 거절되는 치명적인 결과를 초래할 수 있습니다.
      </p>

      <h2 class="text-2xl font-bold text-slate-900 mt-12 mb-4">3. 소액결제현금화에 대한 흔한 오해와 진실</h2>
      
      <div class="space-y-4 mb-8">
        <div class="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
          <strong class="block text-red-600 mb-2">❌ 오해: 소액결제는 대출이 아니니 신용점수와 무관하다?</strong>
          <p class="text-slate-600 text-sm">
             결제 시점에는 신용점수에 즉각적인 변동이 없을 수 있습니다. 하지만 상환(납부)에 실패하여 미납이 발생하면 <strong>서울보증보험</strong> 등 보증 기관을 통해 연체 정보가 공유되며, 이는 신용점수 하락의 직행열차입니다.
          </p>
        </div>
        <div class="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
          <strong class="block text-red-600 mb-2">❌ 오해: 정보이용료 현금화는 안전하다?</strong>
          <p class="text-slate-600 text-sm">
             구글 플레이스토어나 앱스토어의 콘텐츠 이용료(정보이용료)를 이용한 방식은 상품권보다 수수료가 훨씬 높습니다(40% 이상). 또한, 비정상적인 결제 패턴으로 감지될 경우 구글 계정이나 통신사 계정이 영구 정지될 위험이 있습니다.
          </p>
        </div>
      </div>

      <h2 class="text-2xl font-bold text-slate-900 mt-12 mb-4">4. 현명한 대안: 유동성 확보의 정석</h2>
      <p class="mb-6 leading-relaxed">
        소액결제현금화는 금융 시스템의 사각지대를 이용한 고비용 저효율 방식입니다. 정말 급한 불을 꺼야 한다면, 제도권 안에서 훨씬 안전하고 저렴한 대안들을 먼저 검토해야 합니다.
      </p>
      
      <ul class="list-disc list-inside space-y-4 text-slate-700 mb-8">
        <li>
          <strong>비상금 대출 (1금융권):</strong> 카카오뱅크, 토스뱅크 등은 소득 직업과 관계없이 서울보증보험 가입 여부만으로 최대 300만 원까지 대출해줍니다. 금리는 연 5~8% 수준으로, 소액결제 수수료(30%)와는 비교할 수 없이 저렴합니다.
        </li>
        <li>
          <strong>신용카드 현금서비스의 전략적 활용:</strong> 현금서비스도 신용점수에 좋지 않지만, 소액결제 깡보다는 수수료가 낮고 기록이 투명합니다. 단, 반드시 다음 달에 상환해야 합니다.
        </li>
        <li>
          <strong>서민금융진흥원 소액생계비대출:</strong> 신용이 매우 낮아 1금융권 이용이 어렵다면, 정부에서 지원하는 소액생계비대출(최대 100만 원)을 알아보십시오.
        </li>
      </ul>

      <hr class="border-slate-200 my-10" />

      <h3 class="text-2xl font-bold text-slate-900 mt-8 mb-4">결론: 편리함에 속아 미래를 팔지 마십시오</h3>
      <p class="mb-4 leading-relaxed">
        <strong>소액결제현금화</strong>는 당장의 목마름을 해결하기 위해 바닷물을 마시는 것과 같습니다. 
        마실 때는 시원하지만, 곧 더 큰 갈증(빚)을 불러옵니다.
        현명한 금융 소비자는 자산을 '현금화'할 때 발생하는 손실률을 계산합니다. 
        내 손에 들어오는 돈보다 갚아야 할 돈이 터무니없이 많다면, 그것은 금융 상품이 아니라 덫입니다.
      </p>
      <p class="mb-4 leading-relaxed text-slate-600">
        급할수록 돌아가라는 말은 재테크에서 불문율입니다. 오늘 소개한 제도권 비상금 대출이나 정부 지원 정책을 먼저 확인하여, 
        여러분의 소중한 신용과 자산을 지키시길 바랍니다.
      </p>
    `
  },
  {
    id: '10',
    slug: 'money-leaks-structure',
    category: Category.FINANCE,
    title: '돈이 새는 구조부터 막아라: 대부분이 평생 반복하는 잘못된 금융 선택',
    summary: '소득이 늘어도 돈이 모이지 않는다면? 문제는 버는 돈이 아니라 새는 돈에 있습니다. 당신의 재정을 위협하는 6가지 구조적 누수를 점검하고, 탄탄한 현금 흐름을 만드는 법을 공개합니다.',
    imageUrl: 'https://images.unsplash.com/photo-1580519542036-c47de6196ba5?q=80&w=800&auto=format&fit=crop',
    date: '2023-11-15',
    author: '금융 에디터',
    tags: ['재테크', '지출관리', '신용카드', '현금흐름', '돈관리', '대출'],
    content: `
      <p class="mb-6 text-lg leading-relaxed">많은 사람들이 "월급이 조금만 더 오르면 돈 걱정이 없을 텐데"라고 말합니다. 하지만 현실은 냉정합니다. 연봉이 3천만 원일 때 돈이 부족했던 사람은 연봉이 6천만 원이 되어도 여전히 돈이 부족합니다. 이는 <strong>수입(Income)</strong>의 문제가 아니라 돈을 관리하는 <strong>구조(Structure)</strong>의 문제이기 때문입니다.</p>
      <p class="mb-6 text-lg leading-relaxed">재테크의 기본은 '밑 빠진 독에 물 붓기'를 멈추는 것에서 시작합니다. 아무리 좋은 투자 정보를 알고 있어도, 일상에서 돈이 줄줄 새고 있다면 자산은 절대 쌓이지 않습니다. 본 글에서는 대부분의 사람들이 무심코 반복하는 <strong>잘못된 금융 선택</strong> 6가지를 진단하고, 이를 바로잡는 구조적 해결책을 제시합니다.</p>

      <div class="my-8 rounded-2xl overflow-hidden shadow-lg border border-slate-100">
        <div class="aspect-video relative">
           <img src="https://images.unsplash.com/photo-1579621970795-87facc2f976d?q=80&w=800&auto=format&fit=crop" alt="동전이 쏟아지는 지갑" class="absolute inset-0 w-full h-full object-cover" />
           <div class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-6">
             <p class="font-bold text-white mb-1">소액 지출의 함정</p>
             <p class="text-xs text-slate-200">작은 구멍이 거대한 배를 침몰시킵니다</p>
           </div>
        </div>
      </div>

      <div class="bg-slate-50 border-l-4 border-slate-900 p-6 mb-10 rounded-r-xl">
        <strong class="block text-slate-900 text-lg mb-2">💡 이 글의 핵심 포인트</strong>
        <ul class="list-disc list-inside space-y-1 text-slate-700">
          <li>소액이라 무시했던 소비가 만드는 거대한 누수</li>
          <li>신용카드가 당신의 미래 소득을 훔쳐가는 방식</li>
          <li>대출을 '자산'이 아닌 '소비'로 사용할 때의 위험</li>
          <li>준비 없는 투자가 오히려 독이 되는 이유</li>
        </ul>
      </div>

      <h2 class="text-2xl font-bold text-slate-900 mt-12 mb-4">1. 무심코 반복되는 소비 습관: '라떼 효과'의 진실</h2>
      <p class="mb-6 leading-relaxed">돈이 새는 첫 번째 구멍은 '이 정도는 괜찮겠지'라는 안일함입니다. 매일 마시는 커피, 택시비, 무심코 결제한 OTT 구독료 등 <strong>소액 지출</strong>이 모이면 무시할 수 없는 금액이 됩니다. 이를 재테크 용어로 '라떼 효과(Latte Factor)'라고 합니다.</p>
      <div class="mb-6">
        <p class="text-slate-700 font-medium mb-2">⚠️ 왜 문제가 되는가?</p>
        <p class="text-slate-600">이런 지출은 가계부에 기록되지 않거나 무시되기 쉽습니다. 하지만 월 30만 원의 누수는 연간 360만 원의 <strong>현금 흐름</strong>을 막는 것과 같습니다. 이는 종잣돈(Seed Money) 형성을 방해하는 가장 큰 적입니다.</p>
      </div>

      <h2 class="text-2xl font-bold text-slate-900 mt-12 mb-4">2. 생활비 구조의 부재: 통장을 섞어 쓰는 실수</h2>
      <p class="mb-6 leading-relaxed">많은 분들이 급여가 들어오면 카드 값과 공과금이 빠져나가고, 남은 돈으로 생활하다가 부족하면 다시 카드를 씁니다. 이는 <strong>생활비 관리</strong> 시스템이 없다는 증거입니다. 고정비와 변동비가 한 통장에서 섞이면, 내가 한 달에 얼마를 쓰고 얼마를 저축할 수 있는지 파악할 수 없습니다.</p>
      <div class="bg-slate-50 p-6 rounded-xl border border-slate-200 mb-6">
        <strong class="block text-slate-900 mb-2">흔한 오해</strong>
        <p class="text-slate-600">"아껴 쓰면 남는다"고 생각하지만, 예산(Budget)이 정해지지 않은 절약은 실패할 확률이 높습니다. '선저축 후지출' 시스템을 위해 <strong>통장 쪼개기</strong>를 실천해야 합니다.</p>
      </div>

      <h2 class="text-2xl font-bold text-slate-900 mt-12 mb-4">3. 신용카드(Credit Card): 미래의 나에게 빚지기</h2>
      <p class="mb-6 leading-relaxed"><strong>신용카드</strong>는 편리하지만, 할부와 리볼빙이라는 달콤한 유혹을 숨기고 있습니다. "이번 달은 힘들지만 다음 달의 내가 갚겠지"라는 생각으로 긁는 순간, 당신의 미래 소득은 저당 잡히게 됩니다.</p>
      <p class="mb-6 leading-relaxed">특히 할부가 누적되면 매달 갚아야 할 돈이 늘어나, 정작 저축이나 투자를 할 여력은 사라집니다. 포인트 적립 혜택보다 무서운 것이 과소비 습관입니다. 금융 질서가 잡히지 않았다면 과감하게 <strong>체크카드</strong>로 돌아가야 합니다.</p>

      <h2 class="text-2xl font-bold text-slate-900 mt-12 mb-4">4. 대출(Loan)과 신용점수: 쉬운 돈의 함정</h2>
      <p class="mb-6 leading-relaxed">자산 증식을 위한 레버리지가 아닌, 단순 소비를 위한 <strong>대출</strong>은 재정을 가장 빠르게 무너뜨립니다. 특히 모바일로 쉽게 받을 수 있는 소액 비상금 대출이나 카드론을 '내 돈'처럼 쓰다 보면, 이자 부담이 눈덩이처럼 불어나는 것입니다.</p>
      <div class="mb-6">
        <p class="text-slate-700 font-medium mb-2">⚠️ 결정적 실수</p>
        <p class="text-slate-600">잦은 대출 실행은 <strong>신용점수</strong> 하락으로 이어집니다. 신용점수가 떨어지면 나중에 전세자금 대출이나 주택 담보 대출처럼 정말 중요한 순간에 금융권의 도움을 받지 못하거나, 고금리를 부담해야 하는 페널티를 받게 됩니다.</p>
      </div>

      <h2 class="text-2xl font-bold text-slate-900 mt-12 mb-4">5. 준비 없는 소액 투자(Investment): 조급함이 부르는 손실</h2>
      <p class="mb-6 leading-relaxed">"월급만으로는 안 돼"라는 불안감에 준비 없이 <strong>투자</strong> 시장에 뛰어드는 것도 돈이 새는 구조입니다. 비상금도 없이 생활비를 쪼개 주식이나 코인에 넣었다가, 돈이 필요해지면 손해를 보고 파는 패턴을 반복합니다.</p>
      <p class="mb-6 leading-relaxed">투자는 여유 자금으로 장기적인 관점에서 해야 합니다. <strong>소액</strong>이라도 원칙 없이 '단타'나 '테마주'를 쫓는 것은 투자가 아니라 도박에 가깝습니다. 이는 자산을 불리는 것이 아니라 까먹는 행위입니다.</p>

      <h2 class="text-2xl font-bold text-slate-900 mt-12 mb-4">6. 복지(Welfare) 정보의 부재: 찾지 않는 권리</h2>
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
    id: '1',
    slug: 'emergency-loan-guide',
    category: Category.LOAN,
    title: '급할 때 유용한 소액 비상금 대출: 구조적 이해와 활용 전략',
    summary: '갑작스러운 유동성 위기 시, 신용점수 하락을 최소화하며 안전하게 자금을 융통하는 1금융권 소액 대출의 메커니즘과 주의사항을 심층 분석합니다.',
    imageUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop',
    date: '2023-10-24',
    author: '금융 에디터',
    tags: ['소액', '대출', '비상금', '신용점수', '서울보증보험'],
    content: `
      <p class="mb-6 text-lg leading-relaxed">살다 보면 갑자기 현금이 필요한 순간이 찾아옵니다. 경조사비, 병원비, 혹은 예기치 못한 수리비 등 급전이 필요할 때 대부분의 사람들은 당황하여 가장 빠르고 쉬운 방법을 찾게 됩니다. 이 과정에서 많은 이들이 고금리의 카드론이나 현금서비스를 이용하며 신용점수를 깎아먹는 실수를 범합니다.</p>
      <p class="mb-6 text-lg leading-relaxed">하지만 금융 지식이 있다면, <strong>신용점수 하락을 최소화</strong>하면서도 1금융권에서 안전하게 소액을 융통할 수 있습니다. 본 글에서는 이른바 '비상금 대출'이라 불리는 소액 대출 상품의 구조와 올바른 활용 전략을 제시합니다.</p>

      <div class="my-8 rounded-2xl overflow-hidden shadow-lg border border-slate-100">
        <div class="aspect-video relative">
           <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800&auto=format&fit=crop" alt="금융 상담을 받고 있는 모습" class="absolute inset-0 w-full h-full object-cover" />
           <div class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-6">
             <p class="font-bold text-white mb-1">안전한 자금 융통</p>
             <p class="text-xs text-slate-200">1금융권 비상금 대출부터 확인하세요</p>
           </div>
        </div>
      </div>

      <div class="my-8 p-6 bg-blue-50 border border-blue-100 rounded-xl">
        <strong class="block text-blue-900 text-lg mb-3">🚀 핵심 요약</strong>
        <ul class="list-disc list-inside space-y-2 text-slate-700">
          <li>비상금 대출은 소득 증빙 없이 <strong>서울보증보험</strong> 가입 가능 여부로 심사합니다.</li>
          <li>현금서비스보다 1금융권 소액 대출이 신용점수 방어에 유리합니다.</li>
          <li>마이너스 통장 방식을 선택하면 <strong>쓴 만큼만 이자</strong>를 낼 수 있어 효율적입니다.</li>
        </ul>
      </div>

      <h2 class="text-2xl font-bold text-slate-900 mt-12 mb-4">1. 비상금 대출의 심사 기준: 왜 소득을 안 볼까?</h2>
      <p class="mb-6 leading-relaxed">보통 대출은 '재직 증명서'와 '소득 증빙'이 필수입니다. 하지만 카카오뱅크, 토스뱅크, 케이뱅크 등의 비상금 대출은 무직자나 주부도 신청이 가능합니다. 은행이 돈을 막 빌려주는 것일까요? 아닙니다. 여기에는 <strong>보증 보험</strong>이라는 안전장치가 있습니다.</p>
      <p class="mb-6 leading-relaxed">이 대출들은 은행이 직접 개인의 신용을 평가하는 대신, <strong>서울보증보험</strong>이 발급하는 보증서를 담보로 잡습니다. 보증보험사는 개인의 통신비 납부 내역(Telco Score)이나 금융 거래 이력을 바탕으로 "이 사람은 300만 원까지는 갚을 수 있다"고 보증을 서주는 것입니다. 따라서 연체 이력이 있거나 보증 보험 발급이 거절되면 대출이 불가능합니다.</p>

      <h2 class="text-2xl font-bold text-slate-900 mt-12 mb-4">2. 현금서비스(단기카드대출) vs 비상금 대출</h2>
      <p class="mb-6 leading-relaxed">급전이 필요할 때 가장 피해야 할 것은 신용카드사에서 제공하는 <strong>현금서비스</strong>입니다. 현금서비스는 이용하는 즉시 신용평가사에 '단기 악성 부채'로 인식되어 신용점수가 큰 폭으로 하락할 수 있습니다. 또한 금리가 연 10%~19%로 매우 높습니다.</p>
      <p class="mb-6 leading-relaxed">반면, 1금융권(시중은행 및 인터넷은행) 비상금 대출은 '은행 대출'로 잡히기 때문에 상대적으로 신용점수 하락 폭이 적습니다. 금리 또한 연 5%~10% 수준으로 카드론보다 낮습니다. 따라서 급할수록 앱을 켜서 카드론을 받을 게 아니라, 주거래 은행의 비상금 대출 한도를 먼저 조회해야 합니다.</p>

      <h2 class="text-2xl font-bold text-slate-900 mt-12 mb-4">3. 마이너스 통장 방식의 장점</h2>
      <p class="mb-6 leading-relaxed">소액 대출은 대부분 '마이너스 통장(한도 대출)' 방식으로 개설됩니다. 이는 300만 원을 빌렸다고 해서 내 통장에 300만 원이 입금되는 것이 아니라, <strong>출금 가능한 한도</strong>가 생기는 것입니다.</p>
      <ul class="list-disc list-inside space-y-2 text-slate-700 mb-6 ml-2">
        <li>돈을 꺼내 쓰지 않으면 이자가 0원입니다.</li>
        <li>100만 원을 쓰고 3일 뒤에 갚으면, 딱 3일 치 이자만 내면 됩니다.</li>
        <li>언제든 여유 자금이 생기면 중도상환수수료 없이 갚을 수 있습니다.</li>
      </ul>
      <p class="mb-6 leading-relaxed">이러한 유연성 때문에 비상금 대출은 '보험' 성격으로 한도만 뚫어놓고, 정말 급할 때만 잠깐 쓰고 채워 넣는 방식으로 운용하는 것이 가장 현명합니다.</p>

      <h2 class="text-2xl font-bold text-slate-900 mt-12 mb-4">4. 주의사항: 거절 사유와 대안</h2>
      <p class="mb-6 leading-relaxed">서울보증보험 발급이 거절되면 1금융권 비상금 대출은 어렵습니다. 주요 거절 사유는 <strong>연체 이력</strong>, <strong>과다한 기대출</strong>, <strong>신용회복 중</strong>인 경우 등입니다. 이 경우 무리하게 2금융권(저축은행)이나 대부업체로 넘어가기 전에, 서민금융진흥원의 <strong>'햇살론 유스'</strong>나 <strong>'소액생계비대출'</strong> 같은 정부 지원 상품을 먼저 확인해야 합니다.</p>

      <hr class="border-slate-200 my-10" />

      <h3 class="text-2xl font-bold text-slate-900 mt-8 mb-4">결론: 대출도 쇼핑처럼 비교해야 합니다</h3>
      <p class="mb-4 leading-relaxed">급하다고 아무 곳에서나 돈을 빌리는 것은 내 미래의 소득을 헐값에 파는 것과 같습니다. 오늘 소개한 1금융권 비상금 대출은 급전이 필요할 때 가장 먼저 고려해야 할 안전한 선택지입니다. 하지만 잊지 마십시오. 아무리 좋은 대출이라도 <strong>상환 계획 없는 빚</strong>은 고통의 시작일 뿐입니다.</p>
    `
  },
  {
    id: '3',
    slug: 'stock-investment-portfolio',
    category: Category.INVESTMENT,
    title: '주식 투자 입문: 초보자를 위한 포트폴리오 구성의 기초와 분산 투자 전략',
    summary: '변동성이 큰 주식 시장에서 리스크를 관리하는 자산 배분의 기본 원칙. ETF와 배당주를 활용한 포트폴리오의 구조와 장단점을 이해합니다.',
    imageUrl: 'https://images.unsplash.com/photo-1611974765270-ca1258634369?q=80&w=800&auto=format&fit=crop',
    date: '2023-10-22',
    author: '투자 분석가',
    tags: ['주식투자', '포트폴리오', 'ETF', '분산투자', '초보자가이드'],
    content: `
      <p class="mb-6 text-lg leading-relaxed">"계란을 한 바구니에 담지 말라"는 격언은 투자의 세계에서 진리에 가깝습니다. 하지만 많은 초보 투자자들은 수익률 대박을 꿈꾸며 특정 종목에 전 재산을 쏟아붓는 '몰빵 투자'를 감행합니다. 이는 투자가 아니라 <strong>도박</strong>입니다.</p>
      <p class="mb-6 text-lg leading-relaxed">주식 시장에서 개인이 기관과 외국인을 이길 수 있는 유일한 무기는 <strong>시간</strong>과 <strong>분산</strong>입니다. 시장의 등락에 일희일비하지 않고 꾸준히 우상향하는 자산을 만드는 <strong>포트폴리오 구성법</strong>을 소개합니다.</p>

      <div class="my-8 rounded-2xl overflow-hidden shadow-lg border border-slate-100">
        <div class="aspect-video relative">
           <img src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=800&auto=format&fit=crop" alt="주식 차트를 분석하는 모습" class="absolute inset-0 w-full h-full object-cover" />
           <div class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-6">
             <p class="font-bold text-white mb-1">분산 투자의 중요성</p>
             <p class="text-xs text-slate-200">리스크를 관리해야 수익이 따라옵니다</p>
           </div>
        </div>
      </div>

      <div class="my-8 p-6 bg-red-50 border border-red-100 rounded-xl">
         <strong class="block text-red-900 text-lg mb-3">📈 투자 성공의 3원칙</strong>
         <ol class="list-decimal list-inside space-y-2 text-slate-700">
           <li><strong>장기 투자:</strong> 복리의 마법이 일어날 충분한 시간을 부여하라.</li>
           <li><strong>분산 투자:</strong> 자산군(주식, 채권, 현금)을 나누어 리스크를 헷지하라.</li>
           <li><strong>적립식 매수:</strong> 시장 타이밍을 재지 말고 기계적으로 매수하라.</li>
         </ol>
      </div>

      <h2 class="text-2xl font-bold text-slate-900 mt-12 mb-4">1. 왜 개별 종목 대신 ETF인가?</h2>
      <p class="mb-6 leading-relaxed">삼성전자, 테슬라, 애플... 훌륭한 기업들이지만 개별 기업은 언제든 예상치 못한 악재(CEO 리스크, 실적 쇼크 등)로 폭락할 수 있습니다. 기업 분석에 하루 종일 매달릴 수 없는 직장인에게 개별 주식 투자는 리스크가 너무 큽니다.</p>
      <p class="mb-6 leading-relaxed">그 대안이 바로 <strong>ETF(상장지수펀드)</strong>입니다. ETF는 시장 전체(지수)나 특정 산업군에 통째로 투자하는 상품입니다. 예를 들어 미국의 'S&P500 ETF'를 사면, 미국을 대표하는 500개 우량 기업에 분산 투자하는 효과를 냅니다. 한두 기업이 망해도 전체 지수는 계속 성장하기 때문에 <strong>마음 편한 투자</strong>가 가능합니다.</p>

      <h2 class="text-2xl font-bold text-slate-900 mt-12 mb-4">2. 포트폴리오의 기본: 주식과 현금의 비율</h2>
      <p class="mb-6 leading-relaxed">공격적인 투자자라 할지라도 자산의 100%를 주식에 넣는 것은 위험합니다. 하락장이 왔을 때 저가 매수할 여력이 없기 때문입니다. 초보자에게 권장되는 가장 심플한 비율은 <strong>주식 60% : 채권/현금 40%</strong>입니다.</p>
      <ul class="list-disc list-inside space-y-2 text-slate-700 mb-6 ml-2">
        <li>주식이 오르면: 늘어난 주식 비중을 팔아 현금을 확보합니다 (차익 실현).</li>
        <li>주식이 내리면: 확보해둔 현금으로 주식을 싸게 더 삽니다 (평단가 인하).</li>
      </ul>
      <p class="mb-6 leading-relaxed">이 과정을 주기적(예: 분기별, 연별)으로 반복하는 것을 <strong>리밸런싱(Rebalancing)</strong>이라고 하며, 이것이 수익률을 방어하는 핵심 기술입니다.</p>

      <h2 class="text-2xl font-bold text-slate-900 mt-12 mb-4">3. 제2의 월급: 배당주 투자 전략</h2>
      <p class="mb-6 leading-relaxed">성장주(Growth Stock)가 시세 차익을 노린다면, <strong>배당주(Dividend Stock)</strong>는 정기적인 현금 흐름을 만듭니다. 코카콜라, 리얼티인컴 등 수십 년간 배당을 늘려온 '배당 귀족주'들은 주가가 횡보하더라도 꼬박꼬박 배당금을 지급합니다.</p>
      <p class="mb-6 leading-relaxed">받은 배당금을 다시 주식 사는 데 사용하는 <strong>배당 재투자</strong>는 자산을 눈덩이처럼 불리는 스노우볼 효과를 만듭니다. 은퇴 후를 대비한다면 포트폴리오의 일정 부분은 반드시 현금 흐름이 나오는 배당주나 리츠(Reits)로 채워야 합니다.</p>

      <hr class="border-slate-200 my-10" />

      <h3 class="text-2xl font-bold text-slate-900 mt-8 mb-4">결론: 투자는 지루해야 성공한다</h3>
      <p class="mb-4 leading-relaxed">매일 주식 창을 들여다보며 가슴 졸이는 투자는 오래갈 수 없습니다. 좋은 포트폴리오를 짜놓고 본업에 충실하다 보면, 어느새 자산이 불어나 있는 것을 발견하게 될 것입니다. 지금 당장 화려한 급등주를 쫓기보다, 평생 함께할 든든한 ETF 한 주를 매수하는 것으로 시작해보세요.</p>
    `
  },
  {
    id: '4',
    slug: 'government-welfare-2024',
    category: Category.WELFARE,
    title: '2024년 주요 정부 지원금 및 복지 정책의 이해와 활용 가이드',
    summary: '청년 자산 형성부터 출산 장려까지, 복잡한 정부 정책의 취지와 핵심 내용을 정리하고 올바른 신청 기준을 제시합니다.',
    imageUrl: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=800&auto=format&fit=crop',
    date: '2023-10-21',
    author: '복지 알리미',
    tags: ['복지', '정책', '지원금', '정부정책', '청년정책', '부모급여'],
    content: `
      <p class="mb-6 text-lg leading-relaxed">매년 수많은 복지 정책이 쏟아지지만, 정작 내가 받을 수 있는 혜택이 무엇인지 아는 사람은 드뭅니다. 복잡한 신청 조건과 낯선 용어들 때문입니다. 하지만 정부 지원금은 '신청주의'를 원칙으로 합니다. <strong>가만히 있으면 아무도 챙겨주지 않는다</strong>는 뜻입니다.</p>
      <p class="mb-6 text-lg leading-relaxed">세금을 내는 국민으로서 정당한 권리를 누리기 위해, 2024년에 주목해야 할 핵심 정부 지원 정책들을 정리했습니다. 자격 요건이 된다면 반드시 신청하여 금융 혜택을 누리시길 바랍니다.</p>

      <div class="my-8 rounded-2xl overflow-hidden shadow-lg border border-slate-100">
        <div class="aspect-video relative">
           <img src="https://images.unsplash.com/photo-1555421689-d68471e189f2?q=80&w=800&auto=format&fit=crop" alt="행복한 가족과 육아 지원" class="absolute inset-0 w-full h-full object-cover" />
           <div class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-6">
             <p class="font-bold text-white mb-1">놓치지 말아야 할 혜택</p>
             <p class="text-xs text-slate-200">정부 지원금은 신청하는 자의 권리입니다</p>
           </div>
        </div>
      </div>

      <div class="my-8 p-6 bg-purple-50 border border-purple-100 rounded-xl">
         <strong class="block text-purple-900 text-lg mb-3">🏛️ 2024 핵심 정책 키워드</strong>
         <ul class="list-disc list-inside space-y-2 text-slate-700">
           <li><strong>청년 도약:</strong> 5년 만기 시 최대 5천만 원 목돈 마련 지원</li>
           <li><strong>출산/양육:</strong> 부모급여 인상 (0세 월 100만 원)</li>
           <li><strong>주거 안정:</strong> 신생아 특례 대출 (최저 1%대 금리)</li>
         </ul>
      </div>

      <h2 class="text-2xl font-bold text-slate-900 mt-12 mb-4">1. 청년도약계좌: 5천만 원 만들기의 현실성</h2>
      <p class="mb-6 leading-relaxed">청년희망적금의 후속작인 <strong>청년도약계좌</strong>는 청년들의 중장기 자산 형성을 돕기 위해 설계되었습니다. 매월 70만 원씩 5년간 납입하면, 정부 기여금과 비과세 혜택을 더해 약 5,000만 원의 목돈을 손에 쥘 수 있습니다.</p>
      <div class="bg-white border border-slate-200 p-4 rounded-lg mb-6">
        <strong class="block text-slate-800 mb-2">가입 조건 체크</strong>
        <p class="text-sm text-slate-600">만 19~34세 청년 중 개인 소득 7,500만 원 이하, 가구 소득 중위 180% 이하인 경우 신청 가능합니다. 시중 은행 적금 금리로 환산하면 연 8~10% 수준의 고금리 효과가 있으므로 조건이 된다면 무조건 가입하는 것이 이득입니다.</p>
      </div>

      <h2 class="text-2xl font-bold text-slate-900 mt-12 mb-4">2. 부모급여 대폭 인상: 양육 부담 완화</h2>
      <p class="mb-6 leading-relaxed">저출산 극복을 위해 <strong>부모급여</strong>가 대폭 확대되었습니다. 2024년부터 만 0세 아동(0~11개월)을 둔 가정에는 월 100만 원, 만 1세 아동(12~23개월) 가정에는 월 50만 원이 지급됩니다.</p>
      <p class="mb-6 leading-relaxed">이는 기존 영아수당을 개편한 것으로, 어린이집을 이용할 경우 보육료 바우처로 차감 지급됩니다. 현금 흐름에 큰 도움이 되는 정책이므로 출산을 앞두고 있거나 어린 자녀가 있다면 '복지로' 사이트에서 즉시 신청하세요.</p>

      <h2 class="text-2xl font-bold text-slate-900 mt-12 mb-4">3. 근로장려금: 일하는 저소득층을 위한 보너스</h2>
      <p class="mb-6 leading-relaxed">일은 하고 있지만 소득이 적어 생활이 어려운 가구에게 정부가 현금을 지원하는 제도입니다. 가구 유형(단독, 홑벌이, 맞벌이)과 소득 요건에 따라 최대 330만 원까지 지급받을 수 있습니다.</p>
      <p class="mb-6 leading-relaxed">특히 정기 신청 기간(5월)을 놓쳤더라도 <strong>기한 후 신청(11월 말까지)</strong>이 가능합니다. 단, 기한 후 신청 시에는 지급액의 95%만 받을 수 있으니 가급적 정기 신청 기간을 준수하는 것이 좋습니다. 국세청 홈택스에서 대상 여부를 간단히 조회할 수 있습니다.</p>

      <hr class="border-slate-200 my-10" />

      <h3 class="text-2xl font-bold text-slate-900 mt-8 mb-4">결론: 아는 것이 돈이다</h3>
      <p class="mb-4 leading-relaxed">정부 지원금은 '어려운 사람'만 받는 것이 아닙니다. 성실하게 살아가며 미래를 준비하는 청년, 신혼부부, 근로자 모두를 위한 혜택들이 곳곳에 숨어 있습니다. 주기적으로 '보조금24'나 '복지로'를 확인하는 습관을 들이세요. 신청서 한 장이 여러분의 통장 잔고를 바꿀 수 있습니다.</p>
    `
  },
  {
    id: '9',
    slug: 'financial-collapse-signals',
    category: Category.FINANCE,
    title: '개인 금융이 무너지는 순간들: 대부분이 놓치는 돈 관리의 결정적 지점',
    summary: '열심히 버는데 왜 돈이 모이지 않을까요? 금융 위기는 소득 부족이 아닌 구조적 결함에서 시작됩니다. 당신의 돈 관리가 무너지는 5가지 결정적 순간을 진단합니다.',
    imageUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop',
    date: '2023-11-10',
    author: '금융 에디터',
    tags: ['금융', '재테크', '신용점수', '대출', '현금흐름', '리스크관리'],
    content: `
      <p class="mb-6 text-lg leading-relaxed">
        금융 위기는 예고 없이 찾아오는 것처럼 보이지만, 사실 붕괴 전에는 반드시 <strong>전조 증상(Sign)</strong>이 있습니다. 많은 사람들이 이 신호를 무시하거나 "나는 괜찮겠지"라는 안일함으로 넘기다 돌이킬 수 없는 상황에 직면합니다.
      </p>
      <p class="mb-6 text-lg leading-relaxed">
        개인 파산이나 신용 불량은 하루아침에 일어나는 일이 아닙니다. 잘못된 금융 습관이 쌓이고 쌓여 임계점을 넘는 순간 무너지는 것입니다. 본 글에서는 개인 금융이 무너지는 결정적인 5가지 순간을 진단하고, 이를 미리 감지하여 방어하는 방법을 제시합니다.
      </p>

      <div class="my-8 rounded-2xl overflow-hidden shadow-lg border border-slate-100">
        <div class="aspect-video relative">
           <img src="https://images.unsplash.com/photo-1634733988685-a91a790e4a64?q=80&w=800&auto=format&fit=crop" alt="스트레스를 받는 직장인과 하락하는 그래프" class="absolute inset-0 w-full h-full object-cover" />
           <div class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-6">
             <p class="font-bold text-white mb-1">위기의 전조 증상</p>
             <p class="text-xs text-slate-200">금융 건강을 미리 체크하세요</p>
           </div>
        </div>
      </div>

      <div class="bg-red-50 border-l-4 border-red-600 p-6 mb-10 rounded-r-xl">
        <strong class="block text-red-900 text-lg mb-2">🚨 위험 신호 체크리스트</strong>
        <ul class="list-disc list-inside space-y-1 text-slate-700">
          <li>월급이 들어오자마자 카드 값으로 70% 이상 빠져나간다.</li>
          <li>비상금이 없어 급한 돈을 카드 현금서비스로 해결한다.</li>
          <li>정확한 월 지출액을 모르고 감으로 소비한다.</li>
          <li>보험이나 리스크 헤징 수단이 전혀 없다.</li>
        </ul>
      </div>

      <h2 class="text-2xl font-bold text-slate-900 mt-12 mb-4">1. 과도한 레버리지: 감당할 수 없는 빚의 무게</h2>
      <p class="mb-6 leading-relaxed">
        가장 흔한 붕괴 원인은 <strong>부채 비율(Debt Ratio)</strong> 관리 실패입니다. 자신의 상환 능력(DSR)을 고려하지 않고, 영끌(영혼까지 끌어모음) 투자를 하거나 소비를 위해 대출을 일으키는 경우입니다.
        금리가 오르거나 소득이 조금만 줄어도 이자를 감당하지 못해 연체의 늪에 빠지게 됩니다. 
        <br/><br/>
        <strong>Tip:</strong> 월 소득에서 원리금 상환액이 차지하는 비중이 40%를 넘지 않도록 관리해야 합니다.
      </p>

      <h2 class="text-2xl font-bold text-slate-900 mt-12 mb-4">2. 비상금의 부재: 작은 충격에 와르르</h2>
      <p class="mb-6 leading-relaxed">
        인생에는 반드시 예기치 못한 지출(병원비, 수리비, 경조사 등)이 발생합니다. 이때 <strong>비상금(Emergency Fund)</strong>이 없다면, 
        울며 겨자 먹기로 고금리 대출을 쓰거나 투자 중인 자산을 손해 보고 팔아야 합니다. 
        비상금은 금융의 에어백입니다. 이것이 없다는 것은 안전벨트 없이 고속도로를 달리는 것과 같습니다.
      </p>

      <h2 class="text-2xl font-bold text-slate-900 mt-12 mb-4">3. 라이프스타일 인플레이션: 버는 만큼 쓴다</h2>
      <p class="mb-6 leading-relaxed">
        소득이 늘어나면 저축이 늘어야 정상입니다. 하지만 많은 사람들이 소득 증가에 맞춰 소비 수준도 같이 올립니다(Lifestyle Inflation). 
        더 비싼 차, 더 넓은 집, 명품 소비로 인해 정작 잉여 자금은 '0원'인 상태가 지속됩니다. 
        이런 구조에서는 소득이 끊기는 순간 즉시 빈곤층으로 추락하게 됩니다.
      </p>

      <h2 class="text-2xl font-bold text-slate-900 mt-12 mb-4">4. 리스크 관리 부재: 보험과 헤징 무시</h2>
      <p class="mb-6 leading-relaxed">
        "나는 건강하니까 보험 필요 없어"라고 생각하시나요? 큰 질병이나 사고는 개인의 경제력을 한순간에 파괴할 수 있는 가장 큰 리스크입니다. 
        과도한 보험은 독이지만, 실손보험이나 3대 질병 진단비 같은 <strong>필수 보장 자산</strong>은 나의 금융 성벽을 지키는 최후의 방어선입니다.
      </p>

      <hr class="border-slate-200 my-10" />

      <h3 class="text-2xl font-bold text-slate-900 mt-8 mb-4">결론: 정기적인 금융 건강검진이 필요합니다</h3>
      <p class="mb-4 leading-relaxed">
        몸이 아프기 전에 건강검진을 받듯, 돈 관리도 정기적인 점검이 필요합니다. 
        한 달에 한 번은 반드시 자신의 자산 현황표(대차대조표)를 작성하고, 현금 흐름에 막힌 곳은 없는지 확인하십시오. 
        작은 균열을 미리 발견하고 보수하는 것이 평생의 부를 지키는 유일한 방법입니다.
      </p>
    `
  },
  {
    id: '8',
    slug: 'money-management-order',
    category: Category.FINANCE,
    title: '돈 관리의 순서: 소득·지출·대출·투자를 한 번에 이해하는 법',
    summary: '재테크의 실패는 방법이 아니라 순서에서 옵니다. 소득 파악부터 지출 통제, 대출 활용, 그리고 투자까지. 개인 금융의 전체 지도를 그려드립니다.',
    imageUrl: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop',
    date: '2023-11-01',
    author: '금융 에디터',
    tags: ['재테크', '돈관리', '금융기초', '대출', '투자', '소액'],
    content: `
      <p class="mb-6 text-lg leading-relaxed">
        건물을 지을 때 기초 공사 없이 지붕부터 올릴 수 있을까요? 불가능합니다. 하지만 놀랍게도 많은 사람들이 돈 관리를 할 때는 순서를 무시합니다. 
        빚이 있는 상태에서 주식 투자를 하거나, 월급 관리도 안 되는데 보험부터 가입하는 식입니다.
      </p>
      <p class="mb-6 text-lg leading-relaxed">
        재테크에 실패하는 가장 큰 이유는 '방법'을 몰라서가 아니라 <strong>'순서'</strong>가 틀렸기 때문입니다. 
        튼튼한 자산을 쌓아 올리기 위해 반드시 지켜야 할 돈 관리의 절대적인 순서(Roadmap)를 정리해 드립니다.
      </p>

      <div class="my-8 rounded-2xl overflow-hidden shadow-lg border border-slate-100">
        <div class="aspect-video relative">
           <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop" alt="체계적인 재무 계획 수립" class="absolute inset-0 w-full h-full object-cover" />
           <div class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-6">
             <p class="font-bold text-white mb-1">체계적인 계획</p>
             <p class="text-xs text-slate-200">순서만 지켜도 자산은 늘어납니다</p>
           </div>
        </div>
      </div>

      <div class="my-8 p-6 bg-emerald-50 border border-emerald-100 rounded-xl">
         <strong class="block text-emerald-900 text-lg mb-3">🧭 돈 관리 5단계 로드맵</strong>
         <ol class="list-decimal list-inside space-y-3 text-slate-700 font-medium">
           <li><strong>현금 흐름 파악:</strong> 내 수입과 지출을 10원 단위까지 알기</li>
           <li><strong>지출 통제:</strong> 예산 수립 및 통장 쪼개기</li>
           <li><strong>부채 상환:</strong> 고금리 악성 부채 제거</li>
           <li><strong>비상금 확보:</strong> 삶의 안전판 구축 (생활비 3~6개월 치)</li>
           <li><strong>투자 시작:</strong> 잉여 자금으로 자산 증식</li>
         </ol>
      </div>

      <h2 class="text-2xl font-bold text-slate-900 mt-12 mb-4">1단계: 소득과 지출의 객관화</h2>
      <p class="mb-6 leading-relaxed">
        가장 먼저 해야 할 일은 '자기 객관화'입니다. 내가 실제로 얼마를 벌고(세후 실수령액), 얼마를 쓰는지 파악해야 합니다. 
        대부분 "대충 이 정도 쓰겠지"라고 생각하지만, 카드 명세서를 뜯어보면 생각보다 훨씬 많은 돈이 새 나가는 것을 발견하게 됩니다. 
        가계부 앱이나 엑셀을 통해 지난 3개월간의 평균 지출을 산출하십시오.
      </p>

      <h2 class="text-2xl font-bold text-slate-900 mt-12 mb-4">2단계: 지출 통제와 통장 쪼개기</h2>
      <p class="mb-6 leading-relaxed">
        현금 흐름을 파악했다면 이제 수도꼭지를 조절할 차례입니다. 고정비(숨만 쉬어도 나가는 돈)와 변동비(용돈)를 구분하고, 
        저축 목표액을 먼저 떼어낸 뒤 남은 돈으로 생활하는 <strong>'선저축 후지출'</strong> 시스템을 만드십시오. 
        이를 위해 급여 통장, 생활비 통장, 비상금 통장을 분리하는 '통장 쪼개기'가 필수입니다.
      </p>

      <h2 class="text-2xl font-bold text-slate-900 mt-12 mb-4">3단계: 나쁜 빚(Bad Debt) 청산</h2>
      <p class="mb-6 leading-relaxed">
        투자를 고민하기 전에 대출 금리를 확인하십시오. 대출 이자가 연 6% 이상이라면, 어떤 투자를 하는 것보다 <strong>빚을 갚는 것</strong>이 최고의 수익률(확정 수익)을 보장합니다. 
        특히 카드론, 현금서비스, 리볼빙 같은 고금리 악성 부채는 자산 증식의 가장 큰 적이므로 0순위로 없애야 합니다.
      </p>

      <h2 class="text-2xl font-bold text-slate-900 mt-12 mb-4">4단계: 비상금이라는 방패 마련</h2>
      <p class="mb-6 leading-relaxed">
        빚을 다 갚았다면 바로 주식을 사야 할까요? 아닙니다. 갑작스러운 실직이나 병원비 등 인생의 위기에 대비한 <strong>비상금</strong>을 먼저 모아야 합니다. 
        최소 월 생활비의 3개월 치 이상을 CMA 통장(파킹통장)에 넣어두십시오. 이 돈은 투자가 아니라 생존을 위한 자금입니다.
      </p>

      <h2 class="text-2xl font-bold text-slate-900 mt-12 mb-4">5단계: 비로소, 투자(Investment)</h2>
      <p class="mb-6 leading-relaxed">
        위 4단계가 완료되었다면, 이제 당신은 투자를 할 자격이 생겼습니다. 
        안정적인 현금 흐름과 비상금이라는 방패가 있기 때문에, 시장이 흔들려도 심리적으로 버틸 수 있습니다. 
        이때부터 ETF, 배당주, 부동산 등 자신의 성향에 맞는 투자처에 자금을 배분하여 복리 효과를 누리십시오.
      </p>

      <hr class="border-slate-200 my-10" />

      <h3 class="text-2xl font-bold text-slate-900 mt-8 mb-4">결론: 지름길은 없습니다</h3>
      <p class="mb-4 leading-relaxed">
        많은 사람들이 빨리 부자가 되고 싶은 마음에 단계를 건너뛰려 합니다. 하지만 기초가 부실한 탑은 반드시 무너집니다. 
        조금 느리게 느껴지더라도 이 순서를 차근차근 밟아나가는 것만이 경제적 자유로 가는 가장 확실하고 빠른 길입니다.
      </p>
    `
  },
  {
    id: '2',
    slug: 'credit-card-point-cash',
    category: Category.LIFE,
    title: '신용카드 포인트의 합법적 현금 전환: 여신금융협회 통합조회 활용법',
    summary: '흩어진 카드 포인트를 내 계좌로 입금받는 공식적인 절차와 방법. 여신금융협회 통합조회 서비스를 통한 안전한 자산 관리 가이드.',
    imageUrl: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=800&auto=format&fit=crop',
    date: '2023-10-23',
    author: '생활의 달인',
    tags: ['신용카드', '포인트조회', '계좌입금', '여신금융협회', '재테크'],
    content: `
      <p class="mb-6 text-lg leading-relaxed">
        "카드 포인트, 그냥 놔두면 소멸된다는 사실 알고 계셨나요?" 매년 소비자들이 찾아가지 않아 사라지는 카드 포인트가 수천억 원에 달합니다. 
        많은 분들이 포인트는 카드 결제 대금을 깎거나 특정 쇼핑몰에서만 쓸 수 있다고 생각하지만, 사실은 <strong>100% 현금</strong>으로 내 계좌에 입금받을 수 있습니다.
      </p>
      <p class="mb-6 text-lg leading-relaxed">
        과거에는 각 카드사 홈페이지마다 접속해서 확인해야 했지만, 이제는 <strong>여신금융협회</strong>에서 제공하는 통합 조회 서비스를 통해 
        모든 카드사의 포인트를 한 번에 조회하고 단 1초 만에 현금화할 수 있습니다. 
        숨어있는 내 돈을 찾는 가장 확실한 방법을 단계별로 안내해 드립니다.
      </p>

      <div class="my-8 rounded-2xl overflow-hidden shadow-lg border border-slate-100">
        <div class="aspect-video relative">
           <img src="https://images.unsplash.com/photo-1559526324-593bc814228e?q=80&w=800&auto=format&fit=crop" alt="스마트폰으로 포인트 조회 중" class="absolute inset-0 w-full h-full object-cover" />
           <div class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-6">
             <p class="font-bold text-white mb-1">포인트는 현금이다</p>
             <p class="text-xs text-slate-200">1포인트도 놓치지 말고 현금화하세요</p>
           </div>
        </div>
      </div>

      <div class="my-8 rounded-2xl overflow-hidden shadow-lg border border-slate-100">
        <div class="bg-blue-600 p-8 text-center text-white">
           <h3 className="text-2xl font-bold mb-2">💰 1포인트 = 1원</h3>
           <p>카드 포인트는 현금과 동일한 가치를 가집니다.<br/>지금 바로 잠자고 있는 자산을 깨우세요.</p>
        </div>
      </div>

      <h2 class="text-2xl font-bold text-slate-900 mt-12 mb-4">1. 여신금융협회 통합조회란?</h2>
      <p class="mb-6 leading-relaxed">
        금융위원회와 여신금융협회가 주관하여 만든 서비스로, 국내 모든 카드사(신한, 삼성, 현대, 롯데, 국민, 농협 등)에 흩어져 있는 포인트를 
        일괄적으로 조회하고, 본인 명의의 계좌로 즉시 입금 신청할 수 있는 공식 플랫폼입니다.
      </p>

      <h2 class="text-2xl font-bold text-slate-900 mt-12 mb-4">2. 포인트 현금화 따라하기 (Step-by-Step)</h2>
      
      <div class="space-y-6">
        <div class="flex gap-4">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-bold flex items-center justify-center">1</div>
          <div>
            <strong className="block text-slate-900 mb-1">사이트 접속 및 인증</strong>
            <p className="text-slate-600 text-sm">'여신금융협회 카드포인트 통합조회' 웹사이트(또는 모바일 앱)에 접속하여 본인 인증을 진행합니다. 별도의 회원가입 없이 비회원 로그인으로도 가능합니다.</p>
          </div>
        </div>
        <div class="flex gap-4">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-bold flex items-center justify-center">2</div>
          <div>
            <strong className="block text-slate-900 mb-1">카드사별 통합 조회</strong>
            <p className="text-slate-600 text-sm">'통합조회' 버튼을 누르면 내가 보유한 모든 카드의 잔여 포인트가 리스트로 뜹니다. 1포인트 단위까지 정확하게 표시됩니다.</p>
          </div>
        </div>
        <div class="flex gap-4">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-bold flex items-center justify-center">3</div>
          <div>
            <strong className="block text-slate-900 mb-1">계좌 입금 신청</strong>
            <p className="text-slate-600 text-sm">'포인트 계좌입금'을 선택하고, 입금받을 본인 명의의 은행 계좌 번호를 입력합니다. 신청 즉시(은행 영업시간 내) 또는 다음 영업일에 입금됩니다.</p>
          </div>
        </div>
      </div>

      <h2 class="text-2xl font-bold text-slate-900 mt-12 mb-4">3. 주의사항 및 꿀팁</h2>
      <ul class="list-disc list-inside space-y-3 text-slate-700">
        <li><strong>수수료 0원:</strong> 이 서비스는 정부 주도로 만들어진 것이라 수수료가 전혀 없습니다.</li>
        <li><strong>1포인트부터:</strong> 카드사 정책에 따라 다르지만 대부분 1포인트부터 현금화가 가능합니다.</li>
        <li><strong>현대카드 M포인트:</strong> M포인트 등 일부 포인트는 1:1 비율이 아닌 1.5:1(H-Coin 전환 필요) 비율로 현금화될 수 있으니, 전환 비율을 확인하세요.</li>
      </ul>

      <hr class="border-slate-200 my-10" />

      <h3 class="text-2xl font-bold text-slate-900 mt-8 mb-4">결론: 잊지 말고 챙겨야 할 내 돈</h3>
      <p class="mb-4 leading-relaxed">
        카드 포인트 현금화는 혜택이 아니라 <strong>권리</strong>입니다. 
        복잡한 절차 없이 3분이면 커피값, 점심값을 벌 수 있습니다. 
        지금 바로 스마트폰을 켜서 숨어있는 비상금을 찾아보시기 바랍니다.
      </p>
    `
  },
  {
    id: '5',
    slug: 'salary-management-system',
    category: Category.FINANCE,
    title: '사회초년생을 위한 월급 관리의 정석: 통장 쪼개기 시스템 구축',
    summary: '월급이 스쳐 지나가지 않도록 현금 흐름을 통제하는 통장 쪼개기 노하우. 4개의 통장으로 만드는 자동화된 자산 관리 시스템.',
    imageUrl: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=800&auto=format&fit=crop',
    date: '2023-10-20',
    author: '재무 설계사',
    tags: ['재테크', '금융', '통장쪼개기', '사회초년생', '월급관리'],
    content: `
      <p class="mb-6 text-lg leading-relaxed">
        첫 월급의 기쁨도 잠시, "월급이 통장을 스쳐 지나간다(퍼가요~♡)"는 말에 깊이 공감하고 계신가요? 
        돈을 모으지 못하는 이유는 월급이 적어서가 아니라, 돈이 섞여서 흐르기 때문입니다. 
        목적이 다른 돈을 하나의 통장에 넣어두면, 내가 얼마를 썼고 얼마가 남았는지 파악할 수 없게 됩니다.
      </p>
      <p class="mb-6 text-lg leading-relaxed">
        재테크의 기본 중의 기본, <strong>'통장 쪼개기'</strong>를 통해 돈의 흐름을 통제하고 
        자동으로 저축이 되는 시스템을 구축하는 방법을 소개합니다. 딱 4개의 통장만 준비하면 됩니다.
      </p>

      <div class="my-8 rounded-2xl overflow-hidden shadow-lg border border-slate-100">
        <div class="aspect-video relative">
           <img src="https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?q=80&w=800&auto=format&fit=crop" alt="돼지 저금통과 계산기" class="absolute inset-0 w-full h-full object-cover" />
           <div class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-6">
             <p class="font-bold text-white mb-1">통장 쪼개기</p>
             <p class="text-xs text-slate-200">돈의 목적을 명확히 하여 누수를 막습니다</p>
           </div>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
        <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <strong class="block text-slate-900 text-lg mb-2">1. 급여 통장 (Hub)</strong>
          <p class="text-slate-600 text-sm leading-relaxed">
            모든 수입이 들어오고 고정 지출(통신비, 공과금, 월세)이 나가는 통장입니다. 
            월급날 다음 날에 모든 고정비와 저축액이 빠져나가도록 자동이체를 설정해두세요. 
            이 통장의 잔고 목표는 항상 <strong>'0원'</strong>입니다.
          </p>
        </div>
        <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <strong class="block text-slate-900 text-lg mb-2">2. 투자/저축 통장 (Saving)</strong>
          <p class="text-slate-600 text-sm leading-relaxed">
            '선저축 후지출'을 위한 통장입니다. 월급이 들어오자마자 강제로 이체되도록 설정합니다. 
            적금, 주식 계좌 등이 해당되며, 이 돈은 <strong>'없는 돈'</strong>이라고 생각해야 모입니다.
          </p>
        </div>
        <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <strong class="block text-slate-900 text-lg mb-2">3. 소비 통장 (Spending)</strong>
          <p class="text-slate-600 text-sm leading-relaxed">
            한 달 생활비(식비, 교통비, 쇼핑)만 넣어두는 통장입니다. 체크카드를 연결하여 사용하세요. 
            잔고가 부족하면 그 달은 더 이상 소비하지 않고 버티는 훈련이 필요합니다. 
            절약의 핵심은 이 소비 통장의 예산을 지키는 것입니다.
          </p>
        </div>
        <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <strong class="block text-slate-900 text-lg mb-2">4. 비상금 통장 (Spare)</strong>
          <p class="text-slate-600 text-sm leading-relaxed">
            보너스, 명절 떡값 등 비정기 수입이나 생활비 남은 돈을 모아두는 곳입니다. 
            경조사나 병원비 같은 예비비로 사용하며, 매일 이자가 붙는 <strong>CMA 통장</strong>을 추천합니다.
          </p>
        </div>
      </div>

      <h2 class="text-2xl font-bold text-slate-900 mt-12 mb-4">자동화 시스템의 마법</h2>
      <p class="mb-6 leading-relaxed">
        통장 쪼개기의 핵심은 <strong>'자동화'</strong>입니다. 매달 직접 이체하는 것이 아니라, 은행 앱의 자동이체 기능을 활용해 
        내가 신경 쓰지 않아도 돈이 제자리를 찾아가도록 세팅해야 합니다. 
        시스템을 한 번만 구축해두면, 의지력 소모 없이 평생 자산을 관리할 수 있습니다.
      </p>

      <hr class="border-slate-200 my-10" />

      <h3 class="text-2xl font-bold text-slate-900 mt-8 mb-4">결론: 돈에 이름표를 붙여주세요</h3>
      <p class="mb-4 leading-relaxed">
        돈은 꼬리표가 없으면 어디론가 사라지려는 성질이 있습니다. 각 통장에 명확한 이름과 목적을 부여함으로써 돈을 가두고 통제하십시오. 
        이 작은 습관이 10년 뒤 당신의 자산 규모를 결정할 것입니다.
      </p>
    `
  },
  {
    id: '6',
    slug: 'us-stock-tax-guide',
    category: Category.INVESTMENT,
    title: '미국 주식 투자와 세금의 이해: 양도소득세 구조와 관리 원칙',
    summary: '해외 주식 투자 수익의 세금 구조를 명확히 이해하고, 합법적인 범위 내에서 실질 수익을 지키는 세금 관리 전략을 안내합니다.',
    imageUrl: 'https://images.unsplash.com/photo-1586486855514-8c633cc6fd38?q=80&w=800&auto=format&fit=crop',
    date: '2023-10-19',
    author: '세무 전문가',
    tags: ['주식', '미국주식', '세금', '절세', '양도소득세'],
    content: `
      <p class="mb-6 text-lg leading-relaxed">
        '서학개미'라는 말이 일상이 될 정도로 미국 주식 투자가 보편화되었습니다. 테슬라, 엔비디아 등 글로벌 기업의 주주가 되어 수익을 내는 것은 즐거운 일입니다. 
        하지만 수익의 기쁨 뒤에는 반드시 <strong>세금</strong>이라는 현실이 기다리고 있습니다.
      </p>
      <p class="mb-6 text-lg leading-relaxed">
        국내 주식과 달리 해외 주식은 매매 차익에 대해 세금이 부과됩니다. 
        세금 구조를 모르고 투자했다가는 나중에 '세금 폭탄' 고지서를 받고 당황할 수 있습니다. 
        해외 주식 투자자가 반드시 알아야 할 양도소득세의 구조와 합법적인 절세 전략을 정리해 드립니다.
      </p>

      <div class="my-8 rounded-2xl overflow-hidden shadow-lg border border-slate-100">
        <div class="aspect-video relative">
           <img src="https://images.unsplash.com/photo-1628172960251-6979683796d7?q=80&w=800&auto=format&fit=crop" alt="세금 계산서와 계산기" class="absolute inset-0 w-full h-full object-cover" />
           <div class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-6">
             <p class="font-bold text-white mb-1">절세도 수익이다</p>
             <p class="text-xs text-slate-200">세금 구조를 알아야 실질 수익률이 올라갑니다</p>
           </div>
        </div>
      </div>

      <div class="my-8 p-6 bg-slate-100 border border-slate-200 rounded-xl">
         <strong class="block text-slate-900 text-lg mb-3">🧾 해외 주식 세금 3줄 요약</strong>
         <ul class="list-disc list-inside space-y-2 text-slate-700">
           <li><strong>양도소득세:</strong> 연간 매매 차익(수익-손실) 중 250만 원 공제 후 <strong>22%</strong> 부과</li>
           <li><strong>배당소득세:</strong> 배당금 수령 시 현지에서 <strong>15%</strong> 원천징수 (미국 기준)</li>
           <li><strong>신고 기간:</strong> 매년 5월 종합소득세 신고 기간에 자진 신고 및 납부</li>
         </ul>
      </div>

      <h2 class="text-2xl font-bold text-slate-900 mt-12 mb-4">1. 양도소득세 계산 구조</h2>
      <p class="mb-6 leading-relaxed">
        해외 주식 세금의 핵심은 <strong>'실현 수익'</strong> 기준이라는 점입니다. 주가가 올랐어도 팔지 않으면(평가 수익) 세금을 내지 않습니다. 
        1월 1일부터 12월 31일까지 매도해서 확정된 수익과 손실을 합산(통산)합니다.
        <br/><br/>
        예를 들어, A 종목에서 1,000만 원 이익을 보고 B 종목에서 500만 원 손실을 봤다면, 순수익은 500만 원입니다. 
        여기서 기본 공제 250만 원을 뺀 나머지 250만 원에 대해 22%인 55만 원을 세금으로 냅니다.
      </p>

      <h2 class="text-2xl font-bold text-slate-900 mt-12 mb-4">2. 절세의 핵심: 손익 통산 (Tax Loss Harvesting)</h2>
      <p class="mb-6 leading-relaxed">
        세금을 줄이는 가장 확실한 방법은 <strong>'손실 확정'</strong>입니다. 만약 올해 큰 수익이 발생해서 세금이 걱정된다면, 
        마이너스인 종목을 연말(12월 말일 기준 3영업일 전)에 매도하여 장부상 손실을 확정 짓는 것입니다.
        <br/><br/>
        수익을 손실로 상쇄시켜 전체 순수익을 줄이면 납부할 세금도 줄어듭니다. 
        매도한 종목이 아깝다면, 하루 뒤에 다시 매수하거나 비슷한 다른 종목으로 갈아타는 전략을 쓸 수 있습니다. 
        단, <strong>연간 공제액 250만 원</strong>은 매년 리셋되므로, 수익이 250만 원 이하라면 굳이 세금을 걱정할 필요가 없습니다.
      </p>

      <h2 class="text-2xl font-bold text-slate-900 mt-12 mb-4">3. 배당소득세와 종합소득과세</h2>
      <p class="mb-6 leading-relaxed">
        주가 상승 차익과 별개로 받는 배당금에는 15%(미국 기준)의 세금이 붙습니다. 이는 받을 때 이미 떼고 들어오므로(원천징수) 따로 신경 쓸 필요는 없습니다. 
        하지만 만약 배당금을 포함한 연간 금융 소득(이자+배당)이 <strong>2,000만 원</strong>을 넘으면 '금융소득종합과세' 대상이 되어 
        근로 소득과 합산 과세되므로, 고액 자산가라면 주의가 필요합니다.
      </p>

      <hr class="border-slate-200 my-10" />

      <h3 class="text-2xl font-bold text-slate-900 mt-8 mb-4">결론: 세금도 수익률의 일부입니다</h3>
      <p class="mb-4 leading-relaxed">
        투자의 최종 목표는 '세후 수익'을 극대화하는 것입니다. 아무리 수익률이 좋아도 세금 관리를 못하면 실제 내 돈은 줄어듭니다. 
        매년 12월이 되면 포트폴리오를 점검하고 전략적인 매매를 통해 세금을 아끼는 '스마트한 개미'가 되시길 바랍니다.
      </p>
    `
  },
  {
    id: '7',
    slug: 'credit-score-strategies',
    category: Category.LOAN,
    title: '신용점수 관리의 정석: 등급을 올리는 5가지 실전 전략',
    summary: '대출 금리와 한도를 결정하는 금융 신분증, 신용점수. 체크카드 사용부터 비금융 정보 등록까지, 실질적인 점수 향상을 위한 행동 강령을 제시합니다.',
    imageUrl: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=800&auto=format&fit=crop',
    date: '2023-10-18',
    author: '신용 관리자',
    tags: ['신용점수', '대출', '금리인하', '금융팁', '신용관리'],
    content: `
      <p class="mb-6 text-lg leading-relaxed">
        자본주의 사회에서 신용점수(Credit Score)는 <strong>'금융 신분증'</strong>과 같습니다. 
        높은 신용점수를 가진 사람은 은행에서 "제발 돈 좀 빌려 가세요"라며 낮은 금리를 제시하지만, 
        낮은 신용점수를 가진 사람은 돈을 빌리지 못하거나 고금리 사채 시장으로 내몰립니다.
      </p>
      <p class="mb-6 text-lg leading-relaxed">
        신용점수는 한 번 떨어지면 올리기 어렵다고 생각하지만, 평가 알고리즘을 이해하면 누구나 점수를 올릴 수 있습니다. 
        NICE지키미와 KCB(올크레딧) 점수를 동시에 관리하는 5가지 실전 전략을 공개합니다.
      </p>

      <div class="my-8 rounded-2xl overflow-hidden shadow-lg border border-slate-100">
        <div class="aspect-video relative">
           <img src="https://images.unsplash.com/photo-1620714223084-874191b36c3f?q=80&w=800&auto=format&fit=crop" alt="상승하는 그래프와 성취감" class="absolute inset-0 w-full h-full object-cover" />
           <div class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-6">
             <p class="font-bold text-white mb-1">신용점수 관리</p>
             <p class="text-xs text-slate-200">금융 생활의 첫걸음이자 가장 강력한 무기</p>
           </div>
        </div>
      </div>

      <div class="bg-indigo-50 border-l-4 border-indigo-600 p-6 mb-10 rounded-r-xl">
        <strong class="block text-indigo-900 text-lg mb-2">⭐ 신용점수 올리기 5계명</strong>
        <ol class="list-decimal list-inside space-y-2 text-slate-700 font-medium">
          <li>연체는 절대 금물 (단돈 10만 원도 치명적)</li>
          <li>신용카드 한도는 50% 미만으로 여유 있게 사용</li>
          <li>체크카드를 꾸준히 사용하여 상환 능력 입증</li>
          <li>비금융 정보(통신비, 건보료) 성실 납부 내역 제출</li>
          <li>과도한 신용 조회 및 대출 개설 자제</li>
        </ol>
      </div>

      <h2 class="text-2xl font-bold text-slate-900 mt-12 mb-4">1. 신용카드의 역설: 안 쓰면 점수가 없다?</h2>
      <p class="mb-6 leading-relaxed">
        많은 분들이 "빚이 없으면 신용이 좋다"고 생각합니다. 하지만 신용평가사 입장에서는 금융 거래 이력이 없는 사람(Thin Filer)을 평가할 데이터가 없어 오히려 등급을 낮게 매깁니다. 
        신용점수를 올리려면 <strong>신용카드나 체크카드를 적절히 사용하고 잘 갚는 이력</strong>을 쌓아야 합니다. 
        특히 신용카드는 한도를 꽉 채워 쓰지 말고, 한도의 30~50% 수준만 사용하여 "나는 자금 여력이 충분하다"는 시그널을 주는 것이 중요합니다.
      </p>

      <h2 class="text-2xl font-bold text-slate-900 mt-12 mb-4">2. 연체의 공포: 10만 원, 5일의 법칙</h2>
      <p class="mb-6 leading-relaxed">
        신용점수의 가장 큰 적은 연체입니다. 10만 원 이상의 금액을 5영업일 이상 연체하면 <strong>단기 연체 정보</strong>가 금융권에 공유됩니다. 
        이 기록은 갚더라도 최장 3년간 남아서 신용점수를 갉아먹습니다. 깜빡하고 카드 대금을 놓치지 않도록 반드시 결제일 알림과 자동이체를 설정하세요.
      </p>

      <h2 class="text-2xl font-bold text-slate-900 mt-12 mb-4">3. 비금융 정보 등록: 1분 만에 점수 올리기</h2>
      <p class="mb-6 leading-relaxed">
        금융 이력이 부족한 사회초년생이나 주부를 위한 꿀팁입니다. 
        통신비, 국민연금, 건강보험료, 아파트 관리비 등을 6개월 이상 성실하게 납부했다면, 
        이 내역을 신용평가사(앱)에 제출하여 <strong>가점</strong>을 받을 수 있습니다. 
        토스, 카카오뱅크, 네이버페이 등에서 '신용점수 올리기' 버튼 한 번만 누르면 실시간으로 반영됩니다.
      </p>

      <h2 class="text-2xl font-bold text-slate-900 mt-12 mb-4">4. 대출 관리: 건수보다는 금액</h2>
      <p class="mb-6 leading-relaxed">
        대출이 있다고 무조건 신용이 나쁜 것은 아닙니다. 하지만 <strong>대출 건수</strong>가 많은 것은 치명적입니다. 
        1,000만 원짜리 대출 1건이 있는 사람이 300만 원짜리 대출 3건이 있는 사람보다 신용도가 높습니다. 
        자금 여력이 생긴다면 소액 대출 여러 건을 하나로 묶는 '대환 대출'을 하거나, 건수를 줄이는 방향으로 상환하십시오. 
        현금서비스(단기카드대출)는 신용점수 하락의 지름길이니 절대 사용하지 마십시오.
      </p>

      <hr class="border-slate-200 my-10" />

      <h3 class="text-2xl font-bold text-slate-900 mt-8 mb-4">결론: 신용은 하루아침에 만들어지지 않습니다</h3>
      <p class="mb-4 leading-relaxed">
        신용점수 관리는 평소에는 티가 나지 않지만, 집을 사거나 사업을 시작할 때 결정적인 역할을 합니다. 
        0.1%의 금리 차이가 수백, 수천만 원의 이자 차이로 이어집니다. 
        오늘부터 작은 습관으로 당신의 금융 신분증을 업그레이드하십시오.
      </p>
    `
  }
];