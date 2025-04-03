export type EmailHybridAuthArgs = {
  email: string;
};
export type PhoneHybridAuthArgs = {
  code: string;
  number: string;
};

export type EmailCodeConfirmArgs = {
  email: string;
  email_code: string;
};
export type PhoneCodeConfirmArgs = {
  phone: {
    code: string;
    number: string;
  };
  sms_code: string;
};

export type LogoutArgs = {
  refresh_token: string;
};

export type CodeConfirmResponse = {
  access_token: string;
  refresh_token: string;
};
