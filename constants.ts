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
    id: '13',
    slug: 'google-info-fee-cash-truth',
    category: Category.FINANCE,
    title: '구글정보이용료현금화의 실체: 수수료 40%의 진실과 계정 정지 리스크',
    summary: '휴대폰 소액결제 한도가 막혔을 때 찾는 마지막 수단, 정보이용료(콘텐츠이용료). 왜 수수료가 비정상적으로 높은지, 그리고 구글 계정 영구 정지라는 치명적 위험을 피하는 방법은 무엇인지 분석합니다.',
    imageUrl: 'https://images.unsplash.com/photo-1616077168079-7e09a677fb2c?q=80&w=1200&auto=format&fit=crop',
    date: '2023-11-30',
    author: '금융 에디터',
    tags: ['구글정보이용료', '콘텐츠이용료', '정보이용료현금화', '구글깡', '리니지m', '소액결제'],
    content: `<p>기존 내용 유지...</p>`
  },
  {
    id: '12',
    slug: 'credit-card-cash-liquidation-truth',
    category: Category.FINANCE,
    title: '신용카드현금화의 두 얼굴: 합법적 포인트 전환과 불법 융통의 경계',
    summary: '신용카드 현금화는 자산 관리의 꿀팁일 수도, 신용 불량으로 가는 지름길일 수도 있습니다. 여신금융협회 포인트 현금화부터 카드깡의 위험성까지, 금융 소비자가 반드시 알아야 할 구조적 진실을 분석합니다.',
    imageUrl: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1200&auto=format&fit=crop',
    date: '2023-11-25',
    author: '금융 에디터',
    tags: ['신용카드현금화', '카드깡', '신용카드포인트', '상테크', '금융사기', '신용등급'],
    content: `<p>기존 내용 유지...</p>`
  },
  {
    id: '11',
    slug: 'micropayment-cash-liquidity-truth',
    category: Category.FINANCE,
    title: '소액결제현금화의 구조적 이해와 금융 소비자가 알아야 할 진실',
    summary: '급전이 필요할 때 검색하게 되는 소액결제현금화. 단순한 현금 마련 수단으로 접근하면 위험합니다. 그 이면에 숨겨진 수수료 구조와 신용상의 리스크, 그리고 안전한 대출 대안까지 심층 분석합니다.',
    imageUrl: 'https://images.unsplash.com/photo-1512428559083-560dfc18b20e?q=80&w=1200&auto=format&fit=crop',
    date: '2023-11-20',
    author: '금융 에디터',
    tags: ['소액결제현금화', '재테크', '금융상식', '신용관리', '현금유동성', '급전'],
    content: `<p>기존 내용 유지...</p>`
  },
  {
    id: '10',
    slug: 'money-leaks-structure',
    category: Category.FINANCE,
    title: '돈이 새는 구조부터 막아라: 대부분이 평생 반복하는 잘못된 금융 선택',
    summary: '소득이 늘어도 돈이 모이지 않는다면? 문제는 버는 돈이 아니라 새는 돈에 있습니다. 당신의 재정을 위협하는 6가지 구조적 누수를 점검하고, 탄탄한 현금 흐름을 만드는 법을 공개합니다.',
    imageUrl: 'https://images.unsplash.com/photo-1625225233840-6954c00427da?q=80&w=1200&auto=format&fit=crop',
    date: '2023-11-15',
    author: '금융 에디터',
    tags: ['재테크', '지출관리', '신용카드', '현금흐름', '돈관리', '대출'],
    content: `<p>기존 내용 유지...</p>`
  },
  {
    id: '1',
    slug: 'emergency-loan-guide',
    category: Category.LOAN,
    title: '급할 때 유용한 소액 비상금 대출: 구조적 이해와 활용 전략',
    summary: '갑작스러운 유동성 위기 시, 신용점수 하락을 최소화하며 안전하게 자금을 융통하는 1금융권 소액 대출의 메커니즘과 주의사항을 심층 분석합니다.',
    imageUrl: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1200&auto=format&fit=crop',
    date: '2023-10-24',
    author: '금융 에디터',
    tags: ['소액', '대출', '비상금', '신용점수', '서울보증보험'],
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
    content: `
      <p class="mb-8 text-xl leading-relaxed font-bold text-slate-800 break-keep">
        자본주의 사회에서 부의 열차에 올라타는 가장 확실한 방법은 '주식 투자'입니다. 인플레이션으로 인해 화폐 가치가 매일 하락하는 시대에, 아무것도 하지 않는 것은 가장 위험한 투자입니다. 하지만 준비 없이 뛰어든 시장은 전쟁터와 같습니다. 초보 투자자가 가장 먼저 배워야 할 것은 '어떤 종목을 살까'가 아니라, <span class="text-red-600 underline decoration-red-200 underline-offset-4">내 자산을 지키는 방어막인 '포트폴리오'를 설계하는 법</span>입니다.
      </p>

      <div class="bg-red-50 border-l-8 border-red-600 p-8 mb-12 rounded-r-3xl shadow-sm">
        <h2 class="text-red-900 text-xl font-black mb-4 flex items-center gap-2">
          📌 이 가이드에서 반드시 확인해야 할 핵심
        </h2>
        <ul class="space-y-3 text-red-800 font-medium">
          <li class="flex gap-2"><span>✅</span> <span>포트폴리오 정의: 주식 모음이 아닌 '위험 분산'의 과학적 설계</span></li>
          <li class="flex gap-2"><span>✅</span> <span>분산 투자 원칙: 상관관계가 낮은 자산을 조합하여 폭락장을 견디는 힘</span></li>
          <li class="flex gap-2"><span>✅</span> <span>실전 포트폴리오 4단계: 자산, 산업, 국가, 시간의 입체적 분산</span></li>
          <li class="flex gap-2"><span>✅</span> <span>사후 관리: 1년에 한 번 수익을 확정 짓는 리밸런싱의 원리</span></li>
        </ul>
      </div>

      <h2 class="text-2xl md:text-3xl font-black text-slate-900 mt-16 mb-8 tracking-tight">1. 주식 포트폴리오란 무엇인가: 자산 배분의 기초</h2>
      <p class="mb-6 leading-8 text-slate-700">
        주식 시장에서 <strong>포트폴리오(Portfolio)</strong>란 본인이 보유한 다양한 금융 자산의 집합을 의미합니다. 흔히 '계좌에 담긴 종목 리스트'라고 생각하기 쉽지만, 진정한 의미의 포트폴리오는 내 전체 투자금 중 각 자산이 차지하는 <strong>'비중(Weighting)'</strong>을 관리하는 전체적인 시스템을 말합니다.
      </p>
      <p class="mb-6 leading-8 text-slate-700">
        예를 들어, 1,000만 원을 가진 투자자가 삼성전자 한 종목에만 투자했다면 포트폴리오가 존재하지 않는 '몰빵 투자'입니다. 반면, 삼성전자에 300만 원, 미국 S&P500 지수에 400만 원, 나머지 300만 원은 현금이나 채권으로 보유했다면 이는 전략적인 포트폴리오를 갖춘 것입니다.
      </p>
      <p class="mb-8 leading-8 text-slate-700">
        포트폴리오를 구성하는 가장 큰 목적은 <strong>'리스크 대비 수익률의 최적화'</strong>입니다. 주식 시장은 예측 불가능한 변수가 많기 때문에, 특정 자산의 하락이 전체 계좌의 파산으로 이어지지 않도록 방어 체계를 구축하는 것이 재테크 성공의 첫 번째 단추입니다. 
        <Link to="/finance-guide" class="text-red-600 font-bold hover:underline ml-1">돈 관리의 기초 시스템 더 알아보기 →</Link>
      </p>

      <h2 class="text-2xl md:text-3xl font-black text-slate-900 mt-16 mb-8 tracking-tight">2. 왜 분산 투자가 중요한가? (리스크 관리의 핵심)</h2>
      <p class="mb-6 leading-8 text-slate-700">
        "계란을 한 바구니에 담지 말라"는 격언은 단순한 조언을 넘어 투자의 제1원칙입니다. 주식 시장에는 우리가 통제할 수 없는 '비체계적 리스크'가 존재합니다. 개별 기업의 횡령, 배임, 갑작스러운 산업 트렌드의 변화 등이 그것입니다. <strong>분산 투자(Diversification)</strong>는 이러한 리스크를 수학적으로 줄이는 유일한 방법입니다.
      </p>
      <p class="mb-6 leading-8 text-slate-700">
        성공적인 분산 투자를 위해서는 단순히 종목을 늘리는 것이 아니라 <strong>상관관계(Correlation)</strong>가 낮은 자산을 섞어야 합니다. 삼성전자와 SK하이닉스를 같이 보유하는 것은 반도체 업황이라는 공통된 리스크에 노출되므로 진정한 분산이라고 보기 어렵습니다. 주식이 하락할 때 가치가 오르는 '금'이나 '달러', '채권'을 포트폴리오에 섞어야 폭락장에서 내 원금을 지킬 수 있습니다.
      </p>
      <p class="mb-8 leading-8 text-slate-700">
        분산 투자는 수익률을 극대화하기 위한 도구가 아니라, 시장에서 <strong>'퇴출당하지 않기 위한'</strong> 도구입니다. 시장에 오래 머물러야 복리의 마법이 작동하기 때문입니다. 큰 손실을 보지 않는 것이 결국 가장 큰 수익으로 돌아오는 주식 시장의 역설을 이해해야 합니다.
      </p>

      <h2 class="text-2xl md:text-3xl font-black text-slate-900 mt-16 mb-8 tracking-tight">3. 초보자를 위한 포트폴리오 구성 4단계 방법</h2>
      <p class="mb-10 leading-8 text-slate-700">
        막연하게 느껴지는 포트폴리오 설계를 위해, 머니와이즈가 제안하는 4단계 실전 가이드라인을 따라가 보세요. 이 구조는 전 세계적인 투자 대가들이 사용하는 자산 배분 전략을 초보자용으로 단순화한 것입니다.
      </p>

      <h3 class="text-xl md:text-2xl font-black text-slate-800 mb-4 flex items-center gap-2">
        <span class="w-2 h-8 bg-red-600 rounded-full inline-block"></span> 
        1단계: 자산 종류별 분산 (주식, 채권, 현금)
      </h3>
      <p class="mb-6 leading-8 text-slate-700">
        투자의 '뼈대'를 세우는 단계입니다. 주식은 수익을 내는 공격수지만, 변동성이 큽니다. 반대로 채권은 수익률은 낮지만 하락장에서 방패 역할을 합니다. 초보 투자자라면 자신의 연령이나 성향에 맞춰 <strong>주식 70% : 채권 20% : 현금 10%</strong> 정도의 비중으로 시작하는 것을 추천합니다. 현금 비중은 시장이 과하게 하락했을 때 '바겐세일' 기회를 잡기 위한 총알이 됩니다.
      </p>

      <h3 class="text-xl md:text-2xl font-black text-slate-800 mb-4 flex items-center gap-2">
        <span class="w-2 h-8 bg-red-600 rounded-full inline-block"></span> 
        2단계: 산업 및 업종별 분산
      </h3>
      <p class="mb-6 leading-8 text-slate-700">
        주식 자산 안에서도 성격이 다른 산업군을 조화시켜야 합니다. AI나 반도체 같은 '성장주'와 통신, 전력, 음식료 같은 '가치주/경기방어주'를 섞으세요. 경기가 호황일 때는 성장주가 계좌의 수익률을 끌어올리고, 불황이 오면 방어주가 배당금을 지급하며 하락 폭을 제한해 줍니다. 
        <Link to="/life-hacks-guide" class="text-red-600 font-bold hover:underline ml-1">소비 습관을 통해 투자금 만드는 법 보기 →</Link>
      </p>

      <h3 class="text-xl md:text-2xl font-black text-slate-800 mb-4 flex items-center gap-2">
        <span class="w-2 h-8 bg-red-600 rounded-full inline-block"></span> 
        3단계: 국가 및 통화별 분산 (미국 주식 비중 확대)
      </h3>
      <p class="mb-6 leading-8 text-slate-700">
        한국 시장은 전 세계 시장의 2%에 불과합니다. 또한 한국 원화는 위기 시 가치가 하락하는 경향이 있습니다. 세계 1등 기업들이 모인 <strong>미국 주식</strong>에 최소 50% 이상 투자하여 달러 자산을 확보하세요. 달러는 경제 위기 시 주식 하락분을 환차익으로 메꿔주는 천연 보험 역할을 수행합니다.
      </p>

      <h3 class="text-xl md:text-2xl font-black text-slate-800 mb-4 flex items-center gap-2">
        <span class="w-2 h-8 bg-red-600 rounded-full inline-block"></span> 
        4단계: 투자 비중 설정과 정기적 리밸런싱
      </h3>
      <p class="mb-8 leading-8 text-slate-700">
        포트폴리오는 만드는 것보다 지키는 것이 중요합니다. 1년이 지나 주식이 오르고 채권이 떨어져 비중이 9:1이 되었다면, 주식을 일부 팔고 채권을 사서 다시 원래의 비중(7:3)으로 맞춰야 합니다. 이를 <strong>리밸런싱</strong>이라고 하며, 이는 '비쌀 때 팔고 쌀 때 사는' 행위를 시스템적으로 실현하여 투자 수익률을 극대화해 줍니다.
      </p>

      <div class="bg-slate-900 text-white p-10 rounded-[2.5rem] mb-12 shadow-2xl relative overflow-hidden">
        <h4 class="text-xl font-bold mb-8 text-red-400">💡 [실전 예시] 1,000만 원 투자 포트폴리오</h4>
        <div class="space-y-6">
           <div class="flex justify-between items-center border-b border-white/10 pb-4">
              <div>
                <p class="font-bold text-lg">미국 S&P500 ETF (기초 자산)</p>
                <p class="text-xs text-slate-400">전 세계 우량주 500개에 분산 투자</p>
              </div>
              <p class="text-2xl font-black text-red-400">500만 원 (50%)</p>
           </div>
           <div class="flex justify-between items-center border-b border-white/10 pb-4">
              <div>
                <p class="font-bold text-lg">국내 배당주 및 성장주</p>
                <p class="text-xs text-slate-400">배당금 수익 및 국내 기업 성장 동참</p>
              </div>
              <p class="text-2xl font-black text-red-400">200만 원 (20%)</p>
           </div>
           <div class="flex justify-between items-center border-b border-white/10 pb-4">
              <div>
                <p class="font-bold text-lg">미국 장기 국채 ETF</p>
                <p class="text-xs text-slate-400">시장 위기 시 가격 상승 (방패)</p>
              </div>
              <p class="text-2xl font-black text-red-400">200만 원 (20%)</p>
           </div>
           <div class="flex justify-between items-center pb-4">
              <div>
                <p class="font-bold text-lg">CMA 현금 (대기 자금)</p>
                <p class="text-xs text-slate-400">폭락장에서 추가 매수를 위한 기회비용</p>
              </div>
              <p class="text-2xl font-black text-red-400">100만 원 (10%)</p>
           </div>
        </div>
      </div>

      <h2 class="text-2xl md:text-3xl font-black text-slate-900 mt-16 mb-8 tracking-tight">4. 주식 투자 세금과 미국 주식 입문 팁</h2>
      <p class="mb-6 leading-8 text-slate-700">
        투자의 마지막 단계는 '세금'입니다. 아무리 수익이 커도 세금으로 다 나가면 소용없습니다. 국내 주식은 아직 비과세 혜택이 크지만, 미국 주식은 연 250만 원 이상의 수익에 대해 <strong>22%의 양도소득세</strong>가 부과됩니다. 절세를 위해 수익이 난 종목과 손실이 난 종목을 같은 해에 매도하여 과세 대상을 줄이는 '손익 통산' 기술을 활용하세요.
      </p>
      <p class="mb-8 leading-8 text-slate-700">
        또한, 처음부터 개별 종목을 분석하는 것이 어렵다면 미국 시장을 지표로 하는 <strong>ETF(상장지수펀드)</strong>로 시작하는 것이 정답입니다. VOO(S&P500), QQQ(나스닥100)와 같은 ETF는 이미 수많은 전문가들이 분산 투자를 완료해놓은 검증된 상품입니다. 소액으로 시작해 시장의 흐름을 익히는 것이 무엇보다 중요합니다.
      </p>

      <div class="p-10 bg-red-50 rounded-[3rem] border border-red-100 mt-16 shadow-inner">
        <h4 class="text-red-900 font-bold mb-8 flex items-center gap-2 text-2xl">🚀 성공적인 투자를 위한 다음 단계 (Next Steps)</h4>
        <div class="grid gap-6">
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center shrink-0 font-bold">1</div>
            <div>
              <p className="font-bold text-slate-900 mb-1">증권 계좌 개설 및 소수점 투자 시작</p>
              <p className="text-sm text-slate-600">큰돈이 필요 없습니다. 매주 1만 원씩 원하는 ETF를 모으는 습관을 들이세요.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center shrink-0 font-bold">2</div>
            <div>
              <p className="font-bold text-slate-900 mb-1">금융 기초 체력 키우기</p>
              <p className="text-sm text-slate-600">금리와 환율이 내 주식에 미치는 영향을 공부하세요. <Link to="/finance-guide" className="text-red-600 underline">금융 기초 가이드</Link>를 추천합니다.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center shrink-0 font-bold">3</div>
            <div>
              <p className="font-bold text-slate-900 mb-1">리스크 관리 및 대출 점검</p>
              <p className="text-sm text-slate-600">투자금 마련을 위해 고금리 대출을 쓰는 것은 금물입니다. <Link to="/loan-guide" className="text-red-600 underline">안전한 대출 전략</Link>을 먼저 확인하세요.</p>
            </div>
          </div>
        </div>
        
        <div className="mt-10 pt-8 border-t border-red-200 grid sm:grid-cols-2 gap-6">
          <Link to="/investment-guide" class="group p-6 bg-white rounded-2xl border border-red-200 hover:border-red-600 transition-all shadow-sm">
            <p class="font-black text-slate-900 mb-2 group-hover:text-red-600">주식·투자 가이드 전체 보기 →</p>
            <p class="text-xs text-slate-500">배당주 전략, ETF 심화 분석 등 고급 지식을 탐구하세요.</p>
          </Link>
          <Link to="/blog" class="group p-6 bg-white rounded-2xl border border-red-200 hover:border-red-600 transition-all shadow-sm">
            <p class="font-black text-slate-900 mb-2 group-hover:text-red-600">최신 금융 칼럼 읽기 →</p>
            <p class="text-xs text-slate-500">매일 업데이트되는 전문가의 시장 분석을 확인하세요.</p>
          </Link>
        </div>
      </div>
    `
  }
];