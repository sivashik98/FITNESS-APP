import { Control } from 'react-hook-form';

import { UICodeFieldProps } from 'ui/components/ui-kit/ui-code-field/types';

export type FormCodeFieldProps = {
  control: Control<any>;
  name: string;
  onFinishFillingCode: () => void;
} & UICodeFieldProps;
