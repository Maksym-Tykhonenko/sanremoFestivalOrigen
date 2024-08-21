import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const fontGameScreen = () => {
  if (width < 410) {
    return 26;
  } else {
    return 32;
  }
};

export const userAchievesFont = () => {
  if (width < 410) {
    return 26;
  } else {
    return 32;
  }
};

export const optionsContainerHeight = () => {
  if (height < 700) {
    return 70;
  } else {
    return 80;
  }
};
