import { StyleSheet } from 'react-native';
import { Image } from 'expo-image';

import { UIButton, UIText, UIView } from 'components/ui-kit';
import { Screen, Footer, SvgWrap } from 'ui/components';
import { LogoSvg } from 'svg/logo';
import { StarsIconSvg } from 'svg/icons/stars-icon';

import { SCREEN_HEIGHT } from 'app/constants';
import { NavigationService } from 'tools/services/navigation/navigation';

export const WelcomeScreen = () => {
  return (
    <Screen
      container={0}
      removeBottomSpace
      removeTopSpace
      content={
        <>
          <UIView>
            <Image source={require('jpg/welcome.jpg')} style={styles.poster} />
            <SvgWrap Icon={LogoSvg} viewProps={{ center: true, style: styles.logo }} />
          </UIView>
          <Footer>
            <UIView gap-24>
              <UIText h1>Начните свой путь к здоровому образу жизни с нами</UIText>
              <UIButton type={'filled'} title={'Погнали!'} LeftIcon={StarsIconSvg} onPress={() => NavigationService.navigate('SignUpScreen')} />
              <UIText center type={'secondary'}>
                Нажимая «Погнали!», вы принимаете политику конфиденциальности
              </UIText>
            </UIView>
          </Footer>
        </>
      }
    />
  );
};

const styles = StyleSheet.create({
  poster: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: SCREEN_HEIGHT,
    width: SCREEN_HEIGHT,
  },
  logo: {
    marginTop: 60,
  },
});
