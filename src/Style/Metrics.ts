import {Platform, Dimensions, PixelRatio} from 'react-native';

export default function () {
  const {width, height} = Dimensions.get('screen');

  const getWidthFromDP = (widthPercentage: string) => {
    const percentageDesired = parseFloat(widthPercentage);
    const widthPercentageToDP = PixelRatio.roundToNearestPixel(
      (width * percentageDesired) / 100,
    );

    return widthPercentageToDP;
  };

  const getHeightFromDP = (heightPercentage: string) => {
    const percentageDesired = parseFloat(heightPercentage);
    const heightPercentageToDP = PixelRatio.roundToNearestPixel(
      (height * percentageDesired) / 100,
    );

    return heightPercentageToDP;
  };

  return {
    statusBarHeight: Platform.OS === 'ios' ? 20 : 0,
    navigationHeaderHeight: Platform.OS === 'ios' ? 64 : 54,
    borderRadius: 8,
    navigationHeaderFontSize: Platform.OS === 'ios' ? 17 : 19,
    extraSmallSize: getWidthFromDP('1%'),
    smallSize: getWidthFromDP('2%'),
    mediumSize: getWidthFromDP('3%'),
    largeSize: getWidthFromDP('4%'),
    extraLargeSize: getWidthFromDP('5%'),
    getHeightFromDP,
    getWidthFromDP,
  };
}
