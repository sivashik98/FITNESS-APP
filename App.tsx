import 'expo-dev-client';
import 'react-native-reanimated';
import 'react-native-gesture-handler';
import 'app/theme/unistyles';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { KeyboardProvider } from 'react-native-keyboard-controller';

import { Navigation } from 'ui/navigation/navigation';
import { LoaderProvider, StoreProvider } from 'app/providers';

const App = () => {
  return (
    <StoreProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <SafeAreaProvider>
          <KeyboardProvider>
            <LoaderProvider>
              <Navigation />
            </LoaderProvider>
          </KeyboardProvider>
        </SafeAreaProvider>
      </GestureHandlerRootView>
    </StoreProvider>
  );
};

export default App;
