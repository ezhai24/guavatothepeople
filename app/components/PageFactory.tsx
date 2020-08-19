import React from 'react';

import { HeroSection, TextSection, SummarySection } from './sections';
import {
  PageSection,
  ComponentType,
  HeroSection as HeroSectionContent,
  SummarySection as SummarySectionContent,
  TextSection as TextSectionContent,
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
  }
};

export default PageFactory;
