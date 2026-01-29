import { Article, Category, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: '홈', path: '/' },
  { label: '금융/재테크', path: '/finance', category: Category.FINANCE },
  { label: '대출꿀팁', path: '/loan', category: Category.LOAN },
  { label: '투자/주식', path: '/investment', category: Category.INVESTMENT },
  { label: '복지/정책', path: '/welfare', category: Category.WELFARE },
  { label: '생활꿀팁', path: '/life', category: Category.LIFE },
];

// Mock data to populate the homepage immediately with high-quality SEO text
export const INITIAL_ARTICLES: Article[] = [
  {
    id: '1',
    category: Category.LOAN,
    title: '급할 때 유용한 소액 비상금 대출 완벽 가이드',
    summary: '갑작스러운 현금이 필요할 때, 신용점수 영향 없이 안전하게 이용할 수 있는 소액 대출 상품과 주의사항을 정리해 드립니다.',
    imageUrl: 'https://picsum.photos/seed/loan1/800/600',
    date: '2023-10-24',
    author: '금융 에디터',
    tags: ['소액', '대출', '비상금', '모바일대출']
  },
  {
    id: '2',
    category: Category.LIFE,
    title: '잠자는 신용카드 포인트, 100% 현금화 하는 방법',
    summary: '매년 소멸되는 카드 포인트가 수천억 원에 달합니다. 흩어진 포인트를 모아 내 계좌로 즉시 현금화하는 꿀팁을 공개합니다.',
    imageUrl: 'https://picsum.photos/seed/card1/800/600',
    date: '2023-10-23',
    author: '생활의 달인',
    tags: ['신용카드', '현금화', '포인트', '재테크']
  },
  {
    id: '3',
    category: Category.INVESTMENT,
    title: '초보자를 위한 안전한 주식 투자 포트폴리오 구성법',
    summary: '변동성이 큰 시장에서도 흔들리지 않는 자산 배분 전략. ETF와 배당주를 활용한 월 현금 흐름 만들기.',
    imageUrl: 'https://picsum.photos/seed/stock1/800/600',
    date: '2023-10-22',
    author: '투자 분석가',
    tags: ['투자', '주식', 'ETF', '자산관리']
  },
  {
    id: '4',
    category: Category.WELFARE,
    title: '놓치면 손해 보는 2024년 정부 지원금 및 복지 정책',
    summary: '청년, 신혼부부, 소상공인을 위한 정부의 숨은 지원금 정책 총정리. 신청 조건과 방법을 확인하세요.',
    imageUrl: 'https://picsum.photos/seed/welfare1/800/600',
    date: '2023-10-21',
    author: '복지 알리미',
    tags: ['복지', '정책', '지원금', '정부정책']
  },
  {
    id: '5',
    category: Category.FINANCE,
    title: '사회초년생을 위한 월급 관리 및 통장 쪼개기 비법',
    summary: '월급이 스쳐 지나가지 않도록 시스템을 만드는 통장 쪼개기 노하우와 목돈 만들기 플랜.',
    imageUrl: 'https://picsum.photos/seed/finance1/800/600',
    date: '2023-10-20',
    author: '재무 설계사',
    tags: ['재테크', '금융', '통장쪼개기', '저축']
  }
];