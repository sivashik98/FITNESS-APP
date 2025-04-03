import { ReactElement } from 'react';

export type UIWeightPickerProps = {
  value?: number;
  weightRange: [number, number];
  modalLabel?: string;
  label?: string;
  placeholder?: string;
  onConfirm: (data: number) => void;
  leadingAccessory?: ReactElement;
  bottomHint?: string;
  errorMessage?: string;
  onClear: () => void;
};
