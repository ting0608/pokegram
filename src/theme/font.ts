import {TextStyle} from 'react-native';

const size = {
  xs: 10,
  s: 12,
  default: 14,
  md: 16,
  lg: 18,
  xl: 24,
};

const weight: {[key: string]: TextStyle['fontWeight']} = {
  full: '900',
  bold: 'bold',
  normal: 'normal',
  thin: '400',
};

export default {size, weight};
