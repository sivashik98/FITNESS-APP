export const API_ROUTES = {
  auth: {
    emailLogin: 'auth/email-login',
    smsLogin: 'auth/sms-login',
    emailCode: 'auth/email-code',
    smsCode: 'auth/sms-code',
    logout: 'auth/logout',
    refreshToken: 'auth/refresh-token',
  },
  user: {
    register: 'user/register',
    me: 'user/me',
    update: 'user/update',
    updateEmail: 'user/updateEmail',
    updatePhone: 'user/updatePhone',
    goal: 'user/goal',
  },
};
