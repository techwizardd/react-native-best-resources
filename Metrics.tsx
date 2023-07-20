import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const guidelineBaseWidth = 375;

// width, height, margin, padding, likewise
const scale = (size: number) => (width / guidelineBaseWidth) * size;

export { scale };
