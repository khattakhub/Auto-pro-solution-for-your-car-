export interface Service {
  icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
  title: string;
  description: string;
  slug: string;
  details: string;
  imageUrl: string;
}

export interface BlogPost {
  id: number;
  imageUrl: string;
  category: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
}

export interface NavLinkItem {
  name: string;
  path: string;
}