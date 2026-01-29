
export enum Category {
  FINANCE = '금융/재테크',
  LOAN = '대출꿀팁',
  INVESTMENT = '투자/주식',
  WELFARE = '복지/정책',
  LIFE = '생활꿀팁'
}

export interface Article {
  id: string;
  slug: string; // Added for SEO-friendly URLs
  title: string;
  summary: string;
  category: Category;
  imageUrl: string;
  date: string;
  author: string;
  tags: string[];
  content?: string; // Full content for detail view
}

export interface NavItem {
  label: string;
  path: string;
  category?: Category;
  inMenu?: boolean; // Controls visibility in the header menu
}