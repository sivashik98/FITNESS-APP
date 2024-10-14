import { Control } from 'react-hook-form';

import { UITextFieldProps } from 'components/ui-kit/ui-text-field/types';
import { UICodeFieldProps } from 'components/ui-kit/ui-code-field/types';

export type FormFieldProps = {
  type: FormFieldTypes;
  control: Control<any>;
  name: string;
  textFieldProps?: UITextFieldProps;
  codeFieldProps?: UICodeFieldProps;
};

export enum FormFieldTypes {
  TEXT_FIELD = 'text-field',
  CODE_FIELD = 'code-field',
}
