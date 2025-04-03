import { SvgContainerProps } from 'ui/components/svg-container/types';

export type SettingItemTypes = {
  onPress: () => void;
  text?: string;
  placeholder: string;
  Icon: SvgContainerProps['Icon'];
};
