interface Link {
  text: string;
  link: string;
}

interface Image {
  url: string;
}

export enum ImageAlignment {
  LEFT = 'left',
  RIGHT = 'right',
}

export interface ImageComponent {
  image: Image;
  link?: string;
  caption?: string;
}

export interface Icon {
  icon: IconImage;
  link?: string;
}

export enum IconImage {
  INSTAGRAM = 'instagram',
  FACEBOOK = 'facebook',
  TWITTER = 'twitter',
  EMAIL = 'email',
  PATREON = 'patreon',
  VENMO = 'venmo',
  CASHAPP = 'cashapp',
}

export interface Footer {
  logo?: Image;
  sections: {
    title: string;
    links: Link[];
  }[];
}

/**
 * SECTIONS
 */
export enum ComponentType {
  HERO_SECTION = 'sections.hero-section',
  SUMMARY_SECTION = 'sections.summary-section',
  TEXT_SECTION = 'sections.text-section',
  GRID_SECTION = 'sections.grid-section',
  EVENT_SECTION = 'sections.event-section',
  CONTACT_SECTION = 'sections.contact-section',
  DONATION_SECTION = 'sections.donation-section',
  CAROUSEL_SECTION = 'sections.carousel-section',
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

export interface SummarySection extends BaseSection {
  title: string;
  text: string;
  actionLink?: string;
  actionText?: string;
}

export interface TextSection extends BaseSection {
  title?: string;
  text: string;
  image?: Image;
  alignImage?: ImageAlignment;
}

export interface RowCell {
  title: string;
  subtitle?: string;
  text: string;
  actionLink?: string;
  actionText?: string;
}

export interface RowSection extends BaseSection {
  cells: RowCell[];
}

export interface Event {
  title: string;
  date: Date;
  startTime: Date;
  endTime?: Date;
  location?: string;
  eventLink?: string;
}

export interface EventSection extends BaseSection {
  title?: string;
  subtitle?: string;
  events: Event[];
}

export interface Contact {
  title?: string;
  email: string;
}

export interface ContactSection extends BaseSection {
  contacts: Contact[];
  socials?: Icon[];
}

export interface DonationSection extends BaseSection {
  organizationName: string;
  organizationLink?: string;
  socials: Icon[];
}

export interface CarouselSection extends BaseSection {
  title: string;
  items: ImageComponent[];
}

export type PageSection =
  HeroSection |
  SummarySection |
  TextSection |
  RowSection |
  EventSection |
  ContactSection |
  DonationSection |
  CarouselSection;