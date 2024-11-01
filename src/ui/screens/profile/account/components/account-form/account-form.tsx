import { FC } from 'react';
import { Image } from 'expo-image';
import { StyleSheet } from 'react-native';

import { FormDateField, FormField, GenderPicker, MenuItemsList, UIText, UIView } from 'ui/components';

import { AccountFormProps } from 'ui/screens/profile/account/components/account-form/types';

export const AccountForm: FC<AccountFormProps> = ({ form, activeGender, onChangeGender }) => {
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
      <UIView gap={12}>
        <FormField control={form.account.control} name={'phone'} placeholder={'Номер'} leadingAccessory={<UIText font={'p2B'}>Номер</UIText>} />
        <FormField
          control={form.account.control}
          name={'email'}
          placeholder={'Почта'}
          leadingAccessory={<UIText font={'p2B'}>Почта</UIText>}
          bottomHint={'На почту поступит одноразовый пароль для подтверждения изменений'}
        />
      </UIView>
      <GenderPicker active={activeGender} onPress={onChangeGender} />
      <FormDateField control={form.account.control} name={'birthDate'} leadingAccessory={<UIText font={'p2B'}>Дата</UIText>} />
      <MenuItemsList
        items={[
          { title: 'Выйти из аккаунта', onPress: () => alert('Вы вышли из аккаунта') },
          { title: 'Удалить аккаунт', onPress: () => alert('Вы удалили аккаунт') },
        ]}
      />
    </UIView>
  );
};

const styles = StyleSheet.create({
  avatar: {
    width: 110,
    height: 110,
  },
});
