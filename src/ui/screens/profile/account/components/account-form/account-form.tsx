import { FC } from 'react';
import { Image } from 'expo-image';
import { StyleSheet } from 'react-native';

import { FormField, GenderPicker, MenuItemsList, UIText, UIView, FormDatePicker } from 'ui/components';
import { SettingItem } from 'ui/screens/profile/account/components';
import { PhoneIconSvg } from 'svg/icons/phone-icon';
import { EnvelopeIconSvg } from 'svg/icons/envelope-icon';

import { AccountFormProps } from 'ui/screens/profile/account/components/account-form/types';

export const AccountForm: FC<AccountFormProps> = ({
  form,
  activeGender,
  onChangeGender,
  logout,
  onChangeEmail,
  onChangePhone,
  formattedPhone,
  email,
}) => {
  return (
    <UIView marginT={20} gap={30}>
      <UIView ai={'center'}>
        <Image source={require('png/circle-logo.png')} style={styles.avatar} />
      </UIView>
      <UIView gap={12}>
        <FormField control={form.account.control} name={'surname'} placeholder={'Фамилия'} leadingAccessory={<UIText font={'p2B'}>Фамилия</UIText>} />
        <FormField control={form.account.control} name={'name'} placeholder={'Имя'} leadingAccessory={<UIText font={'p2B'}>Имя</UIText>} />
        <FormField
          control={form.account.control}
          name={'patronymic'}
          placeholder={'Отчество'}
          leadingAccessory={<UIText font={'p2B'}>Отчество</UIText>}
        />
      </UIView>
      <UIView gap={20}>
        <SettingItem placeholder={'Добавить телефон'} onPress={onChangePhone} text={formattedPhone} Icon={PhoneIconSvg} />
        <SettingItem placeholder={'Добавить почту'} onPress={onChangeEmail} text={email} Icon={EnvelopeIconSvg} />
      </UIView>
      <GenderPicker active={activeGender} onPress={onChangeGender} />
      <FormDatePicker label={'Дата рождения'} control={form.account.control} name={'birthday'} />
      <MenuItemsList items={[{ title: 'Выйти из аккаунта', onPress: logout }, { title: 'Удалить аккаунт' }]} />
    </UIView>
  );
};

const styles = StyleSheet.create({
  avatar: {
    width: 110,
    height: 110,
  },
});
