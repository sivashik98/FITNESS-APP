import { StyleSheet, Alert } from 'react-native';
import { Image } from 'expo-image';

import { UIButton, UIText, UIView } from 'ui/components/ui-kit';
import { Screen, Footer, SvgWrap } from 'ui/components';
import { LogoSvg } from 'svg/logo';
import { StarsIconSvg } from 'svg/icons/stars-icon';

import { NavigationService } from 'tools/services/navigation/navigation';
import { DimensionsService } from 'tools/services';
import { ButtonTypes } from 'ui/components/ui-kit/ui-button/types';
import { TextTypes } from 'ui/components/ui-kit/ui-text/types';

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
              <UIButton
                type={ButtonTypes.filled}
                title={'Погнали!'}
                LeftIcon={StarsIconSvg}
                onPress={() => NavigationService.navigate('HybridAuthScreen')}
              />
              <UIText p3R center type={TextTypes.secondary}>
                Нажимая «Погнали!», вы принимаете{' '}
                <UIText p3R center type={TextTypes.secondary} underline onPress={() => Alert.alert('Политика конфиденциальности')}>
                  политику конфиденциальности
                </UIText>
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
    height: DimensionsService.screen.height,
    width: DimensionsService.screen.height,
  },
  logo: {
    marginTop: 60,
  },
});
