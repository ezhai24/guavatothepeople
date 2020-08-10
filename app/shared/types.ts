export enum ComponentType {
  HERO_SECTION = 'sections.hero-section'
}

interface BaseSection {
  id: number;
  __component: ComponentType;
}

interface Image {
  url: string;
}

interface HeroSection extends BaseSection {
  title: string;
  subtitle: string;
  actionLink: string;
  actionText: string;
  image: Image;
}

export type PageSection = HeroSection;
