import replace from 'lodash/replace';

export const StringsService = {
  excludeAllSymbolsExceptNumbers: (string: string) => string.replace(/[^0-9]/g, ''),
  formatPhoneNumber: (phone: string, mask: string): string => {
    if (!phone || phone.length !== 10) {
      return '';
      // throw new Error('Invalid phone number format. The number must contain exactly 10 digits.');
    }

    let formattedPhone = mask;
    let phoneIndex = 0;

    // Заменяем все "0" в маске на цифры из номера телефона
    formattedPhone = replace(mask, /0/g, () => {
      const digit = phone[phoneIndex];
      phoneIndex += 1;
      return digit || '0';
    });

    return formattedPhone;
  },
};
