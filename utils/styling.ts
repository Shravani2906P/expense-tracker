// Essential for responsive sizing (i.e. for different screen sizes)

import { Dimensions, PixelRatio } from "react-native";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

// As screens can rotate (horizontal and vertical view)

const [shortDimension, longDimension] =
  SCREEN_WIDTH < SCREEN_HEIGHT
    ? [SCREEN_WIDTH, SCREEN_HEIGHT]
    : [SCREEN_HEIGHT, SCREEN_WIDTH];

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

//Create horizontal scaling

export const scale = (size: number) =>
  Math.round(
    PixelRatio.roundToNearestPixel(
      (shortDimension / guidelineBaseWidth) * (size as number)
    )
  );

//Create vertical scaling

export const verticalScale = (size: number) =>
  Math.round(
    PixelRatio.roundToNearestPixel(
      (longDimension / guidelineBaseHeight) * (size as number)
    )
  );
