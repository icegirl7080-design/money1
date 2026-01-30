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
    content: `
      <p class="mb-6 text-lg leading-relaxed font-medium">
        지갑은 텅 비어있고, 다음 달 카드 대금은 다가오는데 당장 현금은 필요할 때. 스마트폰을 켜면 눈에 띄는 "신용카드 한도 즉시 현금화" 광고는 마법처럼 느껴질 수 있습니다. 하지만 이 '마법'은 당신의 금융 미래를 갉아먹는 치명적인 독이 될 수 있습니다.
      </p>

      <div class="my-10 rounded-3xl overflow-hidden shadow-2xl border border-slate-100">
        <div class="aspect-video relative bg-slate-900">
           <img src="https://images.unsplash.com/photo-1580519542036-c47de6196ba5?q=80&w=1200&auto=format&fit=crop" alt="금융 리스크 경고" class="absolute inset-0 w-full h-full object-cover opacity-80" />
           <div class="absolute inset-0 flex items-center justify-center p-8 text-center">
             <div class="bg-black/60 backdrop-blur-md p-6 rounded-2xl border border-white/20">
               <p class="text-white font-black text-2xl md:text-3xl mb-2">"30%의 수수료는 단순한 비용이 아닙니다"</p>
               <p class="text-slate-300 text-sm">신용 파산으로 가는 고속도로의 통행료입니다.</p>
             </div>
           </div>
        </div>
      </div>

      <div class="bg-indigo-50 border-l-8 border-indigo-600 p-8 mb-12 rounded-r-3xl shadow-sm">
        <h2 class="text-indigo-900 text-xl font-black mb-4 flex items-center gap-2">
          🔍 이번 글에서 다룰 핵심 질문
        </h2>
        <ul class="space-y-3 text-indigo-800 font-medium">
          <li class="flex gap-2"><span>✅</span> <span>현금화 업체가 말하지 않는 '실제 금리'의 진실은?</span></li>
          <li class="flex gap-2"><span>✅</span> <span>신용카드 결제 후 즉시 환불/취소 시 발생하는 불이익</span></li>
          <li class="flex gap-2"><span>✅</span> <span>정부 지원 '햇살론 유스'와 '소액생계비대출' 활용법</span></li>
          <li class="flex gap-2"><span>✅</span> <span>1금융권 비상금 대출, 부결 없이 받는 꿀팁</span></li>
        </ul>
      </div>

      <h2 class="text-2xl md:text-3xl font-black text-slate-900 mt-16 mb-8 tracking-tight">1. 신용카드 현금화, 왜 법적으로 금지되나요?</h2>
      <p class="mb-6 leading-8 text-slate-700">
        이른바 '카드깡'으로 불리는 신용카드 현금화는 <strong>여신전문금융업법</strong> 위반 사항입니다. 실제 물품의 구매 없이 허위 매출을 발생시키는 행위는 금융 질서를 문란하게 할 뿐만 아니라, 이용자 본인도 처벌 대상이 될 수 있습니다. 
      </p>
      <p class="mb-8 leading-8 text-slate-700">
        무엇보다 무서운 것은 <strong>금융질서문란자</strong> 등록입니다. 한 번 등록되면 최장 12년 동안 대출, 카드 발급 등 모든 금융 거래가 불가능해집니다. 당장의 100만 원 때문에 인생의 중요한 시기에 전세자금 대출이나 결혼 자금을 마련하지 못하는 참사가 벌어질 수 있습니다.
      </p>

      <h2 class="text-2xl md:text-3xl font-black text-slate-900 mt-16 mb-8 tracking-tight">2. 수수료 30%의 실체: 연 이자율로 환산하면?</h2>
      <div class="bg-white border-2 border-red-100 p-8 rounded-3xl mb-10 shadow-lg">
        <h3 class="text-xl font-bold text-red-600 mb-6 flex items-center gap-2 italic underline">
          이자 계산 시뮬레이션
        </h3>
        <p class="mb-4 text-slate-800 font-bold">100만 원을 현금화하여 70만 원을 손에 쥐었을 때:</p>
        <ul class="space-y-3 text-slate-600 text-sm md:text-base">
          <li class="flex justify-between border-b pb-2"><span>원금 (다음 달 청구액)</span> <span class="font-bold">1,000,000원</span></li>
          <li class="flex justify-between border-b pb-2"><span>수령액</span> <span class="font-bold">700,000원</span></li>
          <li class="flex justify-between border-b pb-2"><span>한 달 이자</span> <span class="text-red-600 font-bold">300,000원</span></li>
          <li class="flex justify-between pt-2"><span>연 환산 이자율</span> <span class="text-red-600 font-black text-xl">약 514%</span></li>
        </ul>
        <p class="mt-6 text-xs text-slate-400 leading-relaxed italic">
          *법정 최고 금리(연 20%)를 약 25배 초과하는 살인적인 고금리입니다. 이는 금융 상품이 아니라 수탈에 가깝습니다.
        </p>
      </div>

      <h2 class="text-2xl md:text-3xl font-black text-slate-900 mt-16 mb-8 tracking-tight">3. 안전하고 합법적인 소액 자금 마련 대안</h2>
      <p class="mb-10 leading-8 text-slate-700">
        급전이 필요할수록 차분해져야 합니다. 현재 대한민국에는 신용이 낮아도, 소득이 적어도 이용할 수 있는 안전한 <strong>정부 지원 금융 시스템</strong>이 잘 구축되어 있습니다.
      </p>

      <div class="grid md:grid-cols-2 gap-8 mb-16">
        <div class="bg-slate-50 p-8 rounded-3xl border border-slate-200 hover:border-indigo-400 transition-all group">
          <div class="w-12 h-12 bg-indigo-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-indigo-200">
            <span class="font-black">01</span>
          </div>
          <h4 class="text-xl font-bold text-slate-900 mb-4">소액생계비대출 (서민금융진흥원)</h4>
          <p class="text-sm text-slate-600 leading-relaxed mb-6">연체자나 소득 증빙이 어려운 분들도 <strong>당일 최대 100만 원</strong>까지 대출이 가능합니다. 불법 업체 대신 국가가 운영하는 창구를 먼저 두드리세요.</p>
          <a href="https://www.kinfa.or.kr" target="_blank" class="text-xs font-bold text-indigo-600 flex items-center gap-1 group-hover:gap-2 transition-all">공식 홈페이지 확인 <span class="text-lg">→</span></a>
        </div>

        <div class="bg-slate-50 p-8 rounded-3xl border border-slate-200 hover:border-emerald-400 transition-all group">
          <div class="w-12 h-12 bg-emerald-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-emerald-200">
            <span class="font-black">02</span>
          </div>
          <h4 class="text-xl font-bold text-slate-900 mb-4">1금융권 비상금 대출</h4>
          <p class="text-sm text-slate-600 leading-relaxed mb-6">카카오뱅크, 토스뱅크 등에서 제공하는 비상금 대출은 신용점수에 미치는 영향이 적고 <strong>연 5~8%대</strong>의 합리적인 금리로 이용할 수 있습니다.</p>
          <Link to="/loan-guide" class="text-xs font-bold text-emerald-600 flex items-center gap-1 group-hover:gap-2 transition-all">이용 가이드 읽기 <span class="text-lg">→</span></Link>
        </div>
      </div>

      <h2 class="text-2xl md:text-3xl font-black text-slate-900 mt-16 mb-8 tracking-tight">결론: 신용은 당신의 가장 큰 재산입니다</h2>
      <p class="mb-6 leading-8 text-slate-700">
        <strong>소액</strong>이라는 단어에 현혹되지 마십시오. <strong>신용카드 현금화</strong>는 당장의 목마름을 해결하기 위해 바닷물을 마시는 것과 같습니다. 결국 더 큰 갈증(빚)을 부르고 당신의 신용이라는 우물을 영원히 오염시킬 수 있습니다.
      </p>
      <p class="mb-10 leading-8 text-slate-700">
        지금 바로 머니와이즈의 다른 가이드들을 통해 <strong>대출</strong>의 구조를 이해하고, 지출을 통제하는 시스템을 구축하십시오. 건강한 금융 습관이 당신을 가난의 늪에서 건져줄 유일한 밧줄입니다.
      </p>
      
      <div class="p-8 bg-slate-900 rounded-[2.5rem] text-center">
        <p class="text-slate-400 text-sm mb-6">금융에 관한 더 깊은 인사이트가 필요하다면?</p>
        <Link to="/blog" class="inline-flex items-center gap-2 px-10 py-4 bg-white text-slate-900 font-bold rounded-2xl hover:bg-slate-50 transition-all shadow-xl">
          에디터 추천 칼럼 더 보기
        </Link>
      </div>
    `
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
    content: `
      <p class="mb-6 text-lg leading-relaxed">
        신용카드 한도가 차고, 통신사 소액결제 정책마저 '차단'이나 '한도 초과'로 막혔을 때, 급전이 필요한 사람들이 마지막으로 문을 두드리는 곳이 있습니다. 바로 <strong>구글정보이용료현금화</strong>(일명 '콘텐츠이용료' 현금화) 시장입니다.
      </p>
      <p class="mb-6 text-lg leading-relaxed">
        이 방식은 통신사의 일반 소액결제 한도와는 별도로 부여되는 '구글 플레이스토어 결제 한도'를 이용하기 때문에, 금융 사각지대에서 널리 이용되고 있습니다. 하지만 접근성이 좋은 만큼, 그 대가는 혹독합니다. 평균 40~50%에 달하는 살인적인 수수료와 구글 계정 영구 정지라는 리스크가 도사리고 있기 때문입니다. 본 글에서는 정보이용료 시장의 기형적인 구조와 금융 소비자가 반드시 인지해야 할 위험성을 파헤칩니다.
      </p>

      <div class="my-8 rounded-2xl overflow-hidden shadow-lg border border-slate-100">
        <div class="aspect-video flex items-center justify-center relative bg-slate-100">
           <img src="https://images.unsplash.com/photo-1633177317976-3f9bc45e1d1d?q=80&w=800&auto=format&fit=crop" alt="디지털 결제 화면" class="absolute inset-0 w-full h-full object-cover" />
           <div class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-6">
             <p class="font-bold text-white mb-1">디지털 콘텐츠 결제의 함정</p>
             <p class="text-xs text-slate-300">높은 플랫폼 수수료가 전가되는 구조</p>
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
    imageUrl: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1200&auto=format&fit=crop',
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
        <div class="aspect-video relative bg-slate-100">
           <img src="https://images.unsplash.com/photo-1556742044-3c52d6e88c02?q=80&w=800&auto=format&fit=crop" alt="카드 결제 단말기" class="absolute inset-0 w-full h-full object-cover" />
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

      <h3 class="text-2xl font-bold text-slate-900 mt-8 mb-4">결론: 편리함에 속아 미래를 팔지 마십시오</h3>
      <p class="mb-4 leading-relaxed">
        <strong>신용카드현금화</strong>는 양날의 검입니다. 제도권 안에서 포인트나 실적을 활용해 현금 흐름을 만드는 것은 현명한 재테크지만, 당장의 급전을 위해 미래의 소득을 헐값에 파는 '깡'은 파멸의 시작입니다.
      </p>
    `
  },
  {
    id: '11',
    slug: 'micropayment-cash-liquidity-truth',
    category: Category.FINANCE,
    title: '소액결제현금화의 구조적 이해와 금융 소비자가 알아야 할 진실',
    summary: '급전이 필요할 때 검색하게 되는 소액결제현금화. 단순한 현금 마련 수단으로 접근하면 위험합니다. 그 이면에 숨겨진 수수료 구조와 신용상의 리스크, 그리고 안전한 대안까지 심층 분석합니다.',
    imageUrl: 'https://images.unsplash.com/photo-1512428559083-560dfc18b20e?q=80&w=1200&auto=format&fit=crop',
    date: '2023-11-20',
    author: '금융 에디터',
    tags: ['소액결제현금화', '재테크', '금융상식', '신용관리', '현금유동성', '급전'],
    content: `
      <p class="mb-6 text-lg leading-relaxed">
        살다 보면 누구나 예기치 않게 현금 유동성이 막히는 순간을 마주합니다. 신용카드 한도는 꽉 찼고, 대출 심사는 길어질 때, 많은 분들이 스마트폰 하나로 해결할 수 있는 방법으로 시선을 돌립니다. 바로 <strong>소액결제현금화</strong>입니다.
      </p>

      <div class="my-8 rounded-2xl overflow-hidden shadow-lg border border-slate-100">
        <div class="aspect-video relative bg-slate-100">
           <img src="https://images.unsplash.com/photo-1556742208-999815fca738?q=80&w=1200&auto=format&fit=crop" alt="금융 앱 사용 모습" class="absolute inset-0 w-full h-full object-cover" />
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
      <h3 class="text-xl font-bold text-slate-800 mt-6 mb-3">① 살인적인 수수료율 (Discount Rate)</h3>
      <p class="mb-4 leading-relaxed">
        보통 시장에서 형성된 수수료율은 10%에서 많게는 30%에 달합니다. 
        만약 현금 70만 원을 손에 쥐기 위해 100만 원을 결제해야 한다면, 이는 <strong>월 이자율 30%</strong>에 해당합니다. 연 이자율로 환산하면 법정 최고 금리를 훌쩍 뛰어넘는 고금리 사채와 다를 바 없습니다. 이는 자산 증식은커녕 자산을 갉아먹는 최악의 선택입니다.
      </p>

      <h3 class="text-xl font-bold text-slate-800 mt-6 mb-3">② 통신 연체와 직결되는 신용 하락</h3>
      <p class="mb-4 leading-relaxed">
        통신 요금 미납은 처음에는 통신사의 발신 정지로 시작되지만, 장기화될 경우 <strong>채무불이행 정보</strong>가 신용평가사에 등록될 수 있습니다. 
        "고작 핸드폰 요금 안 낸 것"이라고 생각하다가, 나중에 전세자금 대출이나 주택 담보 대출이 거절되는 치명적인 결과를 초래할 수 있습니다.
      </p>

      <hr class="border-slate-200 my-10" />

      <h3 class="text-2xl font-bold text-slate-900 mt-8 mb-4">결론: 편리함에 속아 미래를 팔지 마십시오</h3>
      <p class="mb-4 leading-relaxed">
        <strong>소액결제현금화</strong>는 당장의 목마름을 해결하기 위해 바닷물을 마시는 것과 같습니다. 
        마실 때는 시원하지만, 곧 더 큰 갈증(빚)을 불러옵니다.
      </p>
    `
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
    content: `
      <p class="mb-6 text-lg leading-relaxed">많은 사람들이 "월급이 조금만 더 오르면 돈 걱정이 없을 텐데"라고 말합니다. 하지만 현실은 냉정합니다. 연봉이 3천만 원일 때 돈이 부족했던 사람은 연봉이 6천만 원이 되어도 여전히 돈이 부족합니다. 이는 <strong>수입(Income)</strong>의 문제가 아니라 돈을 관리하는 <strong>구조(Structure)</strong>의 문제이기 때문입니다.</p>

      <div class="my-8 rounded-2xl overflow-hidden shadow-lg border border-slate-100">
        <div class="aspect-video relative bg-slate-100">
           <img src="https://images.unsplash.com/photo-1554224155-1697414241bb?q=80&w=800&auto=format&fit=crop" alt="재정 관리 서류" class="absolute inset-0 w-full h-full object-cover" />
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

      <h2 class="text-2xl font-bold text-slate-900 mt-12 mb-4">2. 생활비 구조의 부재: 통장을 섞어 쓰는 실수</h2>
      <p class="mb-6 leading-relaxed">많은 분들이 급여가 들어오면 카드 값과 공과금이 빠져나가고, 남은 돈으로 생활하다가 부족하면 다시 카드를 씁니다. 이는 <strong>생활비 관리</strong> 시스템이 없다는 증거입니다. 고정비와 변동비가 한 통장에서 섞이면, 내가 한 달에 얼마를 쓰고 얼마를 저축할 수 있는지 파악할 수 없습니다.</p>

      <hr class="border-slate-200 my-10" />

      <h3 class="text-2xl font-bold text-slate-900 mt-8 mb-4">결론: 문제는 능력이 아니라 구조입니다</h3>
      <p class="mb-4 leading-relaxed">지금까지 돈이 모이지 않았던 것은 당신의 능력이 부족해서가 아닙니다. 돈이 들어오고 나가는 시스템을 점검하지 않았기 때문입니다.</p>
    `
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
    content: `
      <p class="mb-6 text-lg leading-relaxed">살다 보면 갑자기 현금이 필요한 순간이 찾아옵니다. 경조사비, 병원비, 혹은 예기치 못한 수리비 등 급전이 필요할 때 대부분의 사람들은 당황하여 가장 빠르고 쉬운 방법을 찾게 됩니다.</p>

      <div class="my-8 rounded-2xl overflow-hidden shadow-lg border border-slate-100">
        <div class="aspect-video relative bg-slate-100">
           <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop" alt="은행 상담" class="absolute inset-0 w-full h-full object-cover" />
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
      <p class="mb-6 leading-relaxed">보통 대출은 '재직 증명서'와 '소득 증빙'이 필수입니다. 하지만 인터넷은행의 비상금 대출은 <strong>보증 보험</strong>이라는 안전장치를 통해 무직자도 신청이 가능합니다.</p>

      <h2 class="text-2xl font-bold text-slate-900 mt-12 mb-4">2. 현금서비스 vs 비상금 대출</h2>
      <p class="mb-6 leading-relaxed">급전이 필요할 때 가장 피해야 할 것은 신용카드사에서 제공하는 <strong>현금서비스</strong>입니다. 이용 즉시 신용점수가 큰 폭으로 하락할 수 있기 때문입니다. 반면 1금융권 비상금 대출은 상대적으로 신용점수 하락 폭이 적습니다.</p>

      <hr class="border-slate-200 my-10" />

      <h3 class="text-2xl font-bold text-slate-900 mt-8 mb-4">결론: 대출도 쇼핑처럼 비교해야 합니다</h3>
      <p class="mb-4 leading-relaxed">급했다고 아무 곳에서나 돈을 빌리는 것은 내 미래의 소득을 헐값에 파는 것과 같습니다.</p>
    `
  },
  {
    id: '3',
    slug: 'stock-investment-portfolio',
    category: Category.INVESTMENT,
    title: '주식 투자 입문: 초보자를 위한 포트폴리오 구성의 기초와 분산 투자 전략',
    summary: '변동성이 큰 주식 시장에서 리스크를 관리하는 자산 배분의 기본 원칙. ETF와 배당주를 활용한 포트폴리오의 구조와 장단점을 이해합니다.',
    imageUrl: 'https://images.unsplash.com/photo-1535320903710-d993d3d77d29?q=80&w=1200&auto=format&fit=crop',
    date: '2023-10-22',
    author: '투자 분석가',
    tags: ['주식투자', '포트폴리오', 'ETF', '분산투자', '초보자가이드'],
    content: `
      <p class="mb-6 text-lg leading-relaxed">"계란을 한 바구니에 담지 말라"는 격언은 투자의 세계에서 진리에 가깝습니다. 주식 시장에서 개인이 기관과 외국인을 이길 수 있는 유일한 무기는 <strong>시간</strong>과 <strong>분산</strong>입니다.</p>

      <div class="my-8 rounded-2xl overflow-hidden shadow-lg border border-slate-100">
        <div class="aspect-video relative bg-slate-100">
           <img src="https://images.unsplash.com/photo-1591696208199-59a50b41f6f5?q=80&w=800&auto=format&fit=crop" alt="주식 데이터 분석" class="absolute inset-0 w-full h-full object-cover" />
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
      <p class="mb-6 leading-relaxed">개별 기업은 언제든 예상치 못한 악재로 폭락할 수 있습니다. 그 대안이 바로 <strong>ETF(상장지수펀드)</strong>입니다. 시장 전체에 투자하기 때문에 한두 기업이 망해도 전체 지수는 계속 성장할 가능성이 큽니다.</p>

      <h2 class="text-2xl font-bold text-slate-900 mt-12 mb-4">2. 제2의 월급: 배당주 투자 전략</h2>
      <p class="mb-6 leading-relaxed"><strong>배당주(Dividend Stock)</strong>는 정기적인 현금 흐름을 만듭니다. 받은 배당금을 다시 주식 사는 데 사용하는 배당 재투자는 자산을 눈덩이처럼 불리는 스노우볼 효과를 만듭니다.</p>

      <hr class="border-slate-200 my-10" />

      <h3 class="text-2xl font-bold text-slate-900 mt-8 mb-4">결론: 투자는 지루해야 성공한다</h3>
      <p class="mb-4 leading-relaxed">매일 주식 창을 들여다보며 가슴 졸이는 투자는 오래갈 수 없습니다. 좋은 포트폴리오를 짜놓고 본업에 충실하십시오.</p>
    `
  }
];
