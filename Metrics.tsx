import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const guidelineBaseWidth = 375;

// width, height, margin, padding, likewise
const scale = (size: number) => (width / guidelineBaseWidth) * size;

// for fon-size, border-radius, likewise
const mScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor;

export { scale, mScale };
