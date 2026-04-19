export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

export interface ServiceCard {
  title: string;
  description: string;
  href: string;
  image?: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface BlogPost {
  title: string;
  href: string;
  image: string;
  category?: string;
}

export interface DesignStyle {
  name: string;
  image: string;
  href: string;
}

export interface ReviewPlatform {
  name: string;
  logo: string;
  alt: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}
