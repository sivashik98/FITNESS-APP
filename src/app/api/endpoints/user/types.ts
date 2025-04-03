import { GenderTypes } from 'ui/components/gender-picker/types';

export type Goal = {
  id: number;
  initial_weight: {
    id: number;
    weight: string;
    created_at: Date;
    updated_at: Date;
  };
  target_weight: string;
  target_date: Date;
  created_at: Date;
  updated_at: Date;
};

export type CreateGoalArgs = {
  initial_weight: number;
  target_weight: number;
  target_date: string;
};

export type User = {
  id: number;
  name: string;
  patronymic: string;
  surname: string;
  email: string;
  birthday: string;
  updated_at: string;
  created_at: string;
  deleted_at: string;
  gender: GenderTypes;
  isRegistered: boolean;
  phone: {
    country_code: string;
    number: string;
  };
};

export type RegisterArgs = {
  gender: GenderTypes;
  name: string;
  patronymic: string;
  surname: string;
  birthday: string;
};

export type UpdateUserInfoArgs = Partial<{
  name: string;
  patronymic: string;
  surname: string;
  gender: GenderTypes;
  birthday: string;
}>;

export type UpdateUserPhoneArgs = {
  phone: {
    code: string;
    number: string;
  };
  sms_code: string;
};

export type UpdateUserEmailArgs = {
  email: string;
  email_code: string;
};
