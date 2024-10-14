import { APP_COLORS } from 'app/theme/colors';

export const LIGHT_THEME = {
  colors: {
    progressBar: {
      regular: {
        activeBg: APP_COLORS.iris,
        bg: APP_COLORS.lightGray,
      },
    },
    loader: {
      regular: {
        bg: APP_COLORS.morningIris,
      },
    },
    segmentControl: {
      regular: {
        bg: APP_COLORS.lightGray,
        text: APP_COLORS.black,
        activeBg: APP_COLORS.primaryWhite,
      },
    },
    textField: {
      error: {
        border: APP_COLORS.error,
      },
      regular: {
        border: APP_COLORS.gray,
        placeholder: APP_COLORS.disabledGray,
      },
      code: {
        bg: APP_COLORS.lightGray,
        border: APP_COLORS.iris,
      },
    },
    btn: {
      filled: {
        bg: APP_COLORS.black,
        text: APP_COLORS.white,
        shadow: APP_COLORS.shadowGray,
      },
      outlined: {
        bg: APP_COLORS.iris,
        text: APP_COLORS.iris,
        shadow: APP_COLORS.transparent,
      },
      texted: {
        bg: APP_COLORS.transparent,
        text: APP_COLORS.black,
        shadow: APP_COLORS.transparent,
      },
      elevated: {
        bg: APP_COLORS.white,
        text: APP_COLORS.black,
        shadow: APP_COLORS.shadowGray,
      },
    },
    text: {
      primary: {
        text: APP_COLORS.black,
      },
      secondary: {
        text: APP_COLORS.gray,
      },
      error: {
        text: APP_COLORS.error,
      },
      accent: {
        text: APP_COLORS.iris,
      },
    },
    svg: {
      primary: {
        bg: APP_COLORS.white,
      },
      secondary: {
        bg: APP_COLORS.black,
      },
      accent: {
        bg: APP_COLORS.white,
      },
    },
    genderPicker: {
      primary: {
        bg: APP_COLORS.lightGray,
        border: APP_COLORS.iris,
      },
    },
    checkbox: {
      primary: {
        bg: APP_COLORS.darkIris,
        border: APP_COLORS.black,
      },
    },
    app: {
      bg: APP_COLORS.white,
      shadow: APP_COLORS.black,
    },
  },
} as const;

export const DARK_THEME = {
  colors: {
    progressBar: {
      regular: {
        activeBg: APP_COLORS.darkIris,
        bg: APP_COLORS.gray,
      },
    },
    loader: {
      regular: {
        bg: APP_COLORS.white,
      },
    },
    segmentControl: {
      regular: {
        bg: APP_COLORS.disabledGray,
        text: APP_COLORS.white,
        activeBg: APP_COLORS.gray,
      },
    },
    textField: {
      error: {
        border: APP_COLORS.darkError,
      },
      regular: {
        border: APP_COLORS.darkGray,
        placeholder: APP_COLORS.gray,
      },
      code: {
        bg: APP_COLORS.gray,
        border: APP_COLORS.darkIris,
      },
    },
    btn: {
      filled: {
        bg: APP_COLORS.darkGray,
        text: APP_COLORS.white,
        shadow: APP_COLORS.shadowGray,
      },
      outlined: {
        bg: APP_COLORS.darkIris,
        text: APP_COLORS.darkIris,
        shadow: APP_COLORS.transparent,
      },
      texted: {
        bg: APP_COLORS.transparent,
        text: APP_COLORS.white,
        shadow: APP_COLORS.transparent,
      },
      elevated: {
        bg: APP_COLORS.darkGray,
        text: APP_COLORS.white,
        shadow: APP_COLORS.shadowGray,
      },
    },
    text: {
      primary: {
        text: APP_COLORS.white,
      },
      secondary: {
        text: APP_COLORS.lightGray,
      },
      error: {
        text: APP_COLORS.darkError,
      },
      accent: {
        text: APP_COLORS.darkIris,
      },
    },
    svg: {
      primary: {
        bg: APP_COLORS.black,
      },
      secondary: {
        bg: APP_COLORS.white,
      },
      accent: {
        bg: APP_COLORS.white,
      },
    },
    genderPicker: {
      primary: {
        bg: APP_COLORS.gray,
        border: APP_COLORS.darkIris,
      },
    },
    checkbox: {
      primary: {
        bg: APP_COLORS.iris,
        border: APP_COLORS.white,
      },
    },
    app: {
      bg: APP_COLORS.black,
      shadow: APP_COLORS.white,
    },
  },
} as const;
