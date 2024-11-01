import { Control } from 'react-hook-form';

import { UICheckboxProps } from 'ui/components/ui-kit/ui-checkbox/types';

export type FormCheckboxProps = {
  control: Control<any>;
  name: string;
} & Partial<UICheckboxProps>;
