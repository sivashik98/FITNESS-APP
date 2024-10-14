export type GenderPickerProps = {
  active: GenderTypes;
  onPress: (gender: GenderTypes) => void;
};

export enum GenderTypes {
  MALE = 'male',
  FEMALE = 'female',
  NOT_SPECIFIED = 'not-specified',
}
