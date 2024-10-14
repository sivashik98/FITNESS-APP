import 'expo-dev-client';
import 'react-native-reanimated';
import 'react-native-gesture-handler';
import 'app/theme/unistyles';

import { JSX } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { KeyboardProvider } from 'react-native-keyboard-controller';

import { Navigation } from 'navigation/navigation';
import { LoaderProvider, PersistProvider, SplashProvider, StoreProvider } from 'app/providers';

import { initTheme } from 'app/theme';
import { ValidationService } from 'tools/services';

initTheme();
ValidationService.init();

const App = (): JSX.Element => {
  return (
    <StoreProvider>
      <PersistProvider>
        <KeyboardProvider>
          <GestureHandlerRootView style={{ flex: 1 }}>
            <SafeAreaProvider>
              <LoaderProvider>
                <SplashProvider>
                  <Navigation />
                </SplashProvider>
              </LoaderProvider>
            </SafeAreaProvider>
          </GestureHandlerRootView>
        </KeyboardProvider>
      </PersistProvider>
    </StoreProvider>
  );
};

export default App;
