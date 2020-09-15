import React from 'react';

import {
  HeroSection,
  SummarySection,
  TextSection,
  RowSection,
  EventSection,
  ContactSection,
  DonationSection,
  CarouselSection,
} from './sections';
import {
  PageSection,
  ComponentType,
  HeroSection as HeroSectionContent,
  SummarySection as SummarySectionContent,
  TextSection as TextSectionContent,
  RowSection as RowSectionContent,
  EventSection as EventSectionContent,
  ContactSection as ContactSectionContent,
  DonationSection as DonationSectionContent,
  CarouselSection as CarouselSectionContent,
} from '../shared/types';

interface Props {
  section: PageSection;
}

const SectionFactory = ({ section }: Props) => {
  switch (section.__component) {
    case ComponentType.HERO_SECTION:
      return <HeroSection content={section as HeroSectionContent} />;
    case ComponentType.SUMMARY_SECTION:
      return <SummarySection content={section as SummarySectionContent} />;
    case ComponentType.TEXT_SECTION:
      return <TextSection content={section as TextSectionContent} />;
    case ComponentType.GRID_SECTION:
      return <RowSection content={section as RowSectionContent} />;
    case ComponentType.EVENT_SECTION:
      return <EventSection content={section as EventSectionContent} />;
    case ComponentType.CONTACT_SECTION:
      return <ContactSection content={section as ContactSectionContent} />;
    case ComponentType.DONATION_SECTION:
      return <DonationSection content={section as DonationSectionContent} />;
    case ComponentType.CAROUSEL_SECTION:
      return <CarouselSection content={section as CarouselSectionContent} />;
  }
};

export default SectionFactory;
