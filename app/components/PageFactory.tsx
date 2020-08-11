import React from 'react';

import { HeroSection } from './sections';
import { PageSection, ComponentType } from '../shared/types';

interface Props {
  section: PageSection;
}

const PageFactory = ({ section }: Props) => {
  switch (section.__component) {
    case ComponentType.HERO_SECTION:
      return <HeroSection content={section} />;
  }
};

export default PageFactory;
