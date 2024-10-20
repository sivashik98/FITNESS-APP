import 'expo-dev-client';
import 'react-native-reanimated';
import 'react-native-gesture-handler';
import 'app/theme/unistyles';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { KeyboardProvider } from 'react-native-keyboard-controller';

import { Navigation } from 'ui/navigation/navigation';
import { LoaderProvider, PersistProvider, SplashProvider, StoreProvider } from 'app/providers';

import { initTheme } from 'app/theme';

initTheme();

const App = () => {
  return (
    <StoreProvider>
      <PersistProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <SafeAreaProvider>
            <KeyboardProvider>
              <LoaderProvider>
                <SplashProvider>
                  <Navigation />
                </SplashProvider>
              </LoaderProvider>
            </KeyboardProvider>
          </SafeAreaProvider>
        </GestureHandlerRootView>
      </PersistProvider>
    </StoreProvider>
  );
};

export default App;
