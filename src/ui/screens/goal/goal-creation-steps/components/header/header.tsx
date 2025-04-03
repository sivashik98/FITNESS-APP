import { FC } from 'react';

import { SvgContainer, UIProgressBar, UIView } from 'ui/components';
import { MiniLogoSvg } from 'svg/mini-logo';

import { HeaderProps } from 'ui/screens/auth/finish-sign-up/components/header/types';

export const Header: FC<HeaderProps> = ({ progress }) => {
  return (
    <UIView gap={20} marginH={20}>
      <SvgContainer Icon={MiniLogoSvg} style={{ alignItems: 'center' }} />
      <UIProgressBar progress={progress} />
    </UIView>
  );
};
