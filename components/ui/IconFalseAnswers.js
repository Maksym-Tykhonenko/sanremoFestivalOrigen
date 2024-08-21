import {Image} from 'react-native';
import {COLOR} from '../../constant/colors';

const IconFalseAnswers = () => {
  return (
    <Image
      style={{width: 30, height: 30, tintColor: COLOR.red}}
      source={require(`../../assets/img/icon/false.png`)}
    />
  );
};

export default IconFalseAnswers;
