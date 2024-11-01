import { DimensionValue } from 'react-native';
import { useMemo } from 'react';

import { Spacings } from 'tools/hooks/use-spacings/types';

type UseSpacingsReturnValues = {
  margin: {
    marginTop: DimensionValue | undefined;
    marginBottom: DimensionValue | undefined;
    marginLeft: DimensionValue | undefined;
    marginRight: DimensionValue | undefined;
    margin: DimensionValue | undefined;
  };
  padding: {
    paddingTop: DimensionValue | undefined;
    paddingBottom: DimensionValue | undefined;
    paddingLeft: DimensionValue | undefined;
    paddingRight: DimensionValue | undefined;
    padding: DimensionValue | undefined;
  };
};

export const useSpacings = (props: Spacings): UseSpacingsReturnValues => {
  const margin = useMemo(
    () => ({
      marginTop: props.marginT || props.marginV,
      marginBottom: props.marginB || props.marginV,
      marginLeft: props.marginL || props.marginH,
      marginRight: props.marginR || props.marginH,
      margin: props.margin,
    }),
    [props.marginT, props.margin, props.marginB, props.marginL, props.marginR, props.marginH, props.marginV]
  );

  const padding = useMemo(
    () => ({
      paddingTop: props.paddingT || props.paddingV,
      paddingBottom: props.paddingB || props.paddingV,
      paddingLeft: props.paddingL || props.paddingH,
      paddingRight: props.paddingR || props.paddingH,
      padding: props.padding,
    }),
    [props.paddingT, props.padding, props.paddingB, props.paddingL, props.paddingR, props.paddingH, props.paddingV]
  );

  return { margin, padding };
};
