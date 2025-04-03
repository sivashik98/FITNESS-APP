import { Screen } from 'ui/components';
import { Footer, Poster } from './components';

export const GoalCreationPreviewScreen = () => {
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
