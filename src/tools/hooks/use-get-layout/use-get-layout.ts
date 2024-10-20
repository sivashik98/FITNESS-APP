import { useCallback, useRef, useState } from 'react';
import { LayoutChangeEvent } from 'react-native';

export const useGetLayout = () => {
  const [layout, setLayout] = useState<LayoutChangeEvent['nativeEvent']['layout']>();
  const refLayout = useRef<any>();

  const onLayout = useCallback(() => {
    // InteractionManager.runAfterInteractions(() => {
    if (refLayout && refLayout.current && !layout && refLayout.current.measure) {
      // @ts-ignore
      refLayout.current.measure((x: number, y: number, width: number, height: number, pageX: number, pageY: number) => {
        setLayout({ width, height, x: pageX, y: pageY });
      });
    }
    // })
  }, [layout]);

  const clearLayout = useCallback(() => {
    setLayout(undefined);
  }, []);

  return {
    layout,
    onLayout,
    refLayout,
    clearLayout,
  };
};
