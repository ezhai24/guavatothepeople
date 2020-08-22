interface Image {
  url: string;
}

export enum ImageAlignment {
  LEFT = 'left',
  RIGHT = 'right',
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

export type PageSection =
  HeroSection |
  SummarySection |
  TextSection |
  RowSection |
  EventSection |
  ContactSection;
