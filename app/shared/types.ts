interface Image {
  url: string;
}

export enum ImageAlignment {
  LEFT = 'left',
  RIGHT = 'right',
}

/**
 * SECTIONS
 */
export enum ComponentType {
  HERO_SECTION = 'sections.hero-section',
  TEXT_SECTION = 'sections.text-section',
}

interface BaseSection {
  id: number;
  __component: ComponentType;
}

export interface HeroSection extends BaseSection {
  title: string;
  subtitle?: string;
  actionLink?: string;
  actionText?: string;
  image: Image;
}

export interface TextSection extends BaseSection {
  title?: string;
  text: string;
  image?: Image;
  alignImage?: ImageAlignment;
}

export type PageSection = HeroSection | TextSection;
