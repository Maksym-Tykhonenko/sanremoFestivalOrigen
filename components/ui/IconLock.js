import {Image, View} from 'react-native';
import {COLOR} from '../../constant/colors';

const IconLock = () => {
  return (
    <View
      style={{
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        style={{width: 50, height: 50, tintColor: COLOR.red, top: '20%'}}
        source={require(`../../assets/img/icon/shield.png`)}
      />
    </View>
  );
};

export default IconLock;
