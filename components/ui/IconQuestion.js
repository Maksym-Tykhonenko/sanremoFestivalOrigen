import {Image} from 'react-native';
import {COLOR} from '../../constant/colors';

const IconQuestion = () => {
  return (
    <Image
      style={{width: 30, height: 30, tintColor: COLOR.darkOrange}}
      source={require(`../../assets/img/icon/question.png`)}
    />
  );
};

export default IconQuestion;
