import { UIButton, UIText, UIView } from 'ui/components/ui-kit';
import { Screen, MenuItemsList, FormField, GenderPicker } from 'ui/components';
import { ScreenHeaderTypes } from 'ui/components/screen/types';
import { Image } from 'expo-image';
import { StyleSheet } from 'react-native';
import { ButtonTypes } from 'ui/components/ui-kit/ui-button/types';
import { useAccountAdapter } from 'bl-modules/profile/account';

export const AccountScreen = ({}) => {
  const { form, localState } = useAccountAdapter();

  return (
    <Screen
      scroll
      headerProps={{ title: 'Аккаунт' }}
      headerType={ScreenHeaderTypes.Default}
      bottomSpace={50}
      content={
        <UIView marginT-20 gap-30>
          <UIView center>
            <Image source={require('png/circle-logo.png')} style={styles.avatar} />
          </UIView>
          <UIView gap-12>
            <FormField control={form.account.control} name={'surname'} placeholder={'Фамилия'} leadingAccessory={<UIText p2B>Фамилия</UIText>} />
            <FormField control={form.account.control} name={'name'} placeholder={'Имя'} leadingAccessory={<UIText p2B>Имя</UIText>} />
            <FormField control={form.account.control} name={'patronymic'} placeholder={'Отчество'} leadingAccessory={<UIText p2B>Отчество</UIText>} />
          </UIView>
          <UIView gap-12>
            <FormField control={form.account.control} name={'phone'} placeholder={'Номер'} leadingAccessory={<UIText p2B>Номер</UIText>} />
            <FormField control={form.account.control} name={'email'} placeholder={'Почта'} leadingAccessory={<UIText p2B>Почта</UIText>} />
          </UIView>
          <GenderPicker active={localState.activeGender} onPress={localState.setActiveGender} />
          <UIView gap-12>
            <FormField control={form.account.control} name={'phone'} placeholder={'Номер'} leadingAccessory={<UIText p2B>Номер</UIText>} />
            <FormField control={form.account.control} name={'email'} placeholder={'Почта'} leadingAccessory={<UIText p2B>Почта</UIText>} />
          </UIView>
          <MenuItemsList
            items={[
              { title: 'Выйти из аккаунта', onPress: () => alert('Вы вышли из аккаунта') },
              { title: 'Удалить аккаунт', onPress: () => alert('Вы удалили аккаунт') },
            ]}
          />
        </UIView>
      }
      footer={<UIButton type={ButtonTypes.filled} title={'Сохранить'} onPress={() => {}} />}
    />
  );
};

const styles = StyleSheet.create({
  avatar: {
    width: 90,
    height: 90,
  },
});
