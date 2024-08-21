import {Image} from 'react-native';
import {COLOR} from '../../constant/colors';

const IconCoins = () => {
  return (
    <Image
      style={{width: 30, height: 30, tintColor: COLOR.strongYello}}
      source={require(`../../assets/img/icon/coin.png`)}
    />
  );
};

export default IconCoins;
