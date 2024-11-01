import { Screen } from 'ui/components';
import { Footer, Poster } from 'ui/screens/auth/welcome/components';

export const WelcomeScreen = () => {
  return (
    <Screen
      container={0}
      removeBottomSpace
      removeTopSpace
      content={
        <>
          <Poster />
          <Footer />
        </>
      }
    />
  );
};
