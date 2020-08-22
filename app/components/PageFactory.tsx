import React from 'react';

import {
  HeroSection,
  SummarySection,
  TextSection,
  RowSection,
  EventSection,
  ContactSection,
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
} from '../shared/types';

interface Props {
  section: PageSection;
}

const PageFactory = ({ section }: Props) => {
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
  }
};

export default PageFactory;
