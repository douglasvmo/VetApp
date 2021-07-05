/**
 * Colors
 */
const Colors = {
  transparent: 'rgba(0,0,0,0)',
  inputBackground: '#FFFFFF',
  white: '#ffffff',
  text: '#212529',
  primary: '#E14032',
  success: '#28a745',
  error: '#dc3545',
};

const NavigationColors = {
  primary: Colors.primary,
};

/**
 * FontSize
 */
const FontSize = {
  small: 16,
  regular: 20,
  large: 40,
};

/**
 * Metrics Sizes
 */
const tiny = 5;
const small = tiny * 2; // 10
const regular = tiny * 3; // 15
const large = regular * 2; // 30
export const MetricsSizes = {
  tiny,
  small,
  regular,
  large,
};

export type Variables = {
  Colors: {
    transparent: string;
    inputBackground: string;
    white: string;
    text: string;
    primary: string;
    success: string;
    error: string;
  };
  FontSize: {
    small: number;
    regular: number;
    large: number;
  };
};

export default {
  Colors,
  NavigationColors,
  MetricsSizes,
  FontSize,
};
