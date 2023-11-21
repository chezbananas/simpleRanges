import { Dimensions } from "react-native";
const width = Math.min(Dimensions.get("window").width * 0.9, 600);
const height = imgWidth * 2.84; // aspect ratio for all images

const guidelineBaseWidth = 300;
const guidelineBaseHeight = 850;

const scale = (size) => (width / guidelineBaseWidth) * size;
const verticalScale = (size) => (height / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) =>
  size + (scale(size) - size) * factor;

export { scale, verticalScale, moderateScale };
