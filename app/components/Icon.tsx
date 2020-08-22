import React from 'react';
import styled from '@emotion/styled';

import { Icon as IconType, IconImage } from '~/shared/types';

const getImageSrc = (iconImage: IconImage) => {
  switch(iconImage) {
    case IconImage.INSTAGRAM:
      return '/instagram.svg';
    case IconImage.FACEBOOK:
      return '/facebook.svg';
    case IconImage.TWITTER:
      return '/twitter.svg';
    case IconImage.EMAIL:
      return '/email.svg';
    case IconImage.PATREON:
      return '/patreon.svg';
    case IconImage.CASHAPP:
      return '/cashapp.svg';
    case IconImage.VENMO:
      return '/venmo.svg';
  }
};

const SocialIcon = styled.img({
  width: 40,
  height: 40,
  marginLeft: -5,
  marginRight: 10,
});

const Icon = (icon: IconType) => {
  const { icon: iconImage, link } = icon;
  const imageSrc = getImageSrc(iconImage);

  return (link ?
    <a href={link}><SocialIcon src={imageSrc} /></a>
  :
    <SocialIcon src={imageSrc} />
  );
};

export default Icon;
