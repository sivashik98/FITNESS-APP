import { Spacings } from 'tools/hooks/use-spacings/types';

export type GenderPickerProps = {
  active: GenderTypes;
  onPress: (gender: GenderTypes) => void;
} & Spacings;

export enum GenderTypes {
  MALE = 'male',
  FEMALE = 'female',
  NOT_SPECIFIED = 'not-specified',
}
